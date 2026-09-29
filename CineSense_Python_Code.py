"""
CineSense ML and Recommendation System
No user star ratings are used.

Files expected in the same folder:
- CineSense_Cleaned_Dataset.xlsx
- CineSense_Preference_Collection.xlsx
"""
import os
import pandas as pd
import matplotlib.pyplot as plt

from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import OneHotEncoder
from sklearn.pipeline import Pipeline
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import (
    accuracy_score, precision_score, recall_score, f1_score,
    confusion_matrix, ConfusionMatrixDisplay
)

BASE = os.path.dirname(os.path.abspath(__file__))
movies = pd.read_excel(os.path.join(BASE, "CineSense_Cleaned_Dataset.xlsx"), sheet_name="Movies")

# DATA CLEANING CHECKS
movies = movies.drop_duplicates(subset=["Movie_ID"]).copy()
movies = movies.dropna(subset=["Title","Genre","Style","Age_Restriction","Release_Year","Era"])

# EDA
print("Dataset shape:", movies.shape)
print("\nStyle distribution:\n", movies["Style"].value_counts())
print("\nAge restriction distribution:\n", movies["Age_Restriction"].value_counts())
print("\nEra distribution:\n", movies["Era"].value_counts())
print("\nGenre distribution:\n", movies["Genre"].str.split("|").explode().value_counts())

for column in ["Style","Age_Restriction","Era"]:
    movies[column].value_counts().plot(kind="bar", title=f"{column} Distribution")
    plt.ylabel("Number of Movies")
    plt.tight_layout()
    plt.show()

movies["Genre"].str.split("|").explode().value_counts().plot(kind="bar", title="Genre Distribution")
plt.ylabel("Number of Movies")
plt.tight_layout()
plt.show()

# CONTENT-BASED RECOMMENDER
# Each of the four criteria contributes 25 points.
def recommend_movies(genre, style, age_restriction, era, top_n=5):
    result = movies.copy()
    result["Genre_Match"] = result["Genre"].str.split("|").apply(lambda x: genre in x).astype(int)
    result["Style_Match"] = (result["Style"] == style).astype(int)
    result["Age_Match"] = (result["Age_Restriction"] == age_restriction).astype(int)
    result["Era_Match"] = (result["Era"] == era).astype(int)
    result["Match_Percent"] = 25 * result[
        ["Genre_Match","Style_Match","Age_Match","Era_Match"]
    ].sum(axis=1)

    return result.sort_values(
        ["Match_Percent","Title"], ascending=[False,True]
    )[["Movie_ID","Title","Genre","Style","Age_Restriction","Era","Match_Percent"]].head(top_n)

print("\nExample recommendations:")
print(recommend_movies("Drama", "Live-Action", "R", "1990s"))

# SUPERVISED MACHINE LEARNING
# This section predicts the movie a person actually selected.
prefs = pd.read_excel(
    os.path.join(BASE, "CineSense_Preference_Collection.xlsx"),
    sheet_name="Preference Collection"
)
needed = [
    "Preferred_Genre","Preferred_Style","Preferred_Age_Restriction",
    "Preferred_Era","Selected_Movie_ID"
]
prefs = prefs.dropna(subset=needed).copy()

if len(prefs) < 20 or prefs["Selected_Movie_ID"].nunique() < 2:
    print("\nSUPERVISED ML NOT RUN.")
    print("Collect genuine movie selections in CineSense_Preference_Collection.xlsx first.")
    print("Accuracy, Precision, Recall, F1 and Confusion Matrix cannot be honestly")
    print("calculated without actual labeled choices.")
else:
    X = prefs[["Preferred_Genre","Preferred_Style","Preferred_Age_Restriction","Preferred_Era"]]
    y = prefs["Selected_Movie_ID"].astype(str)

    counts = y.value_counts()
    stratify = y if counts.min() >= 2 else None

    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.20, random_state=42, stratify=stratify
    )

    preprocessor = ColumnTransformer([
        ("categorical", OneHotEncoder(handle_unknown="ignore"), list(X.columns))
    ])

    models = {
        "KNN": KNeighborsClassifier(n_neighbors=max(1, min(5, len(X_train)))),
        "Decision Tree": DecisionTreeClassifier(random_state=42),
        "Random Forest": RandomForestClassifier(n_estimators=200, random_state=42)
    }

    comparison = []
    for name, model in models.items():
        pipeline = Pipeline([
            ("preprocessor", preprocessor),
            ("model", model)
        ])
        pipeline.fit(X_train, y_train)
        prediction = pipeline.predict(X_test)

        comparison.append({
            "Model": name,
            "Accuracy": accuracy_score(y_test, prediction),
            "Precision": precision_score(y_test, prediction, average="macro", zero_division=0),
            "Recall": recall_score(y_test, prediction, average="macro", zero_division=0),
            "F1_Score": f1_score(y_test, prediction, average="macro", zero_division=0)
        })

        labels = sorted(y.unique())
        cm = confusion_matrix(y_test, prediction, labels=labels)
        ConfusionMatrixDisplay(cm, display_labels=labels).plot(xticks_rotation=90)
        plt.title(f"{name} Confusion Matrix")
        plt.tight_layout()
        plt.show()

    comparison_df = pd.DataFrame(comparison)
    print("\nMODEL COMPARISON")
    print(comparison_df)
    comparison_df.to_csv(os.path.join(BASE, "CineSense_Model_Comparison.csv"), index=False)
