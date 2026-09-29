"""CineSense supervised evaluation.

Input: cinesense_preference_choices.csv exported from dashboard.html.
Each recorded choice is converted to one positive candidate pair and up to three
negative candidate pairs. The split is grouped by Response_ID so one person's
candidate pairs cannot leak into both train and test sets.
"""
import os, re, ast
from pathlib import Path
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import OneHotEncoder, StandardScaler
from sklearn.pipeline import Pipeline
from sklearn.model_selection import GroupShuffleSplit
from sklearn.neighbors import KNeighborsClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score, confusion_matrix, ConfusionMatrixDisplay

BASE = Path(__file__).resolve().parent
CHOICES = BASE / 'cinesense_preference_choices.csv'
MOVIES_JS = BASE / 'movies-data.js'
OUT = BASE / 'evaluation_output'
OUT.mkdir(exist_ok=True)

def normalize_era(v):
    v=str(v)
    if 'Pre-1980' in v or v == 'Classic': return 'Classic'
    if '1980' in v or 'Retro' in v or 'Modern | 1980' in v: return 'Retro 80s-90s'
    if '2000' in v or 'Modern' in v: return '2000s'
    return 'Contemporary'

def normalize_style(v):
    return 'Animation' if str(v) == 'Animated' else str(v)

def load_movies_from_js(path):
    text=Path(path).read_text(encoding='utf-8')
    blocks=re.findall(r'\{\s*id:\s*(\d+),(.*?)\n\s*\}', text, flags=re.S)
    rows=[]
    for mid, b in blocks:
        def grab(pattern, default=''):
            m=re.search(pattern,b,re.S); return m.group(1) if m else default
        title=grab(r'title:\s*"([^"]*)"')
        year=int(grab(r'year:\s*(\d+)', '0'))
        era=grab(r'era:\s*"([^"]*)"')
        style=grab(r'style:\s*"([^"]*)"')
        age=grab(r'age:\s*"([^"]*)"')
        gs=grab(r'genres:\s*\[(.*?)\]')
        genres=re.findall(r'"([^"]+)"',gs)
        rows.append({'Movie_ID':int(mid),'Title':title,'Release_Year':year,'Era':normalize_era(era),'Style':normalize_style(style),'Age_Restriction':age,'Genres':genres})
    return pd.DataFrame(rows).drop_duplicates('Movie_ID')

if not CHOICES.exists():
    raise SystemExit('Missing cinesense_preference_choices.csv. Open CineSense, choose movies, then click Export Evaluation Data on the dashboard.')

movies=load_movies_from_js(MOVIES_JS)
choices=pd.read_csv(CHOICES)
required=['Response_ID','Preferred_Genre','Preferred_Style','Preferred_Age_Restriction','Preferred_Era','Selected_Movie_ID']
missing=[c for c in required if c not in choices.columns]
if missing:
    raise SystemExit('CSV is missing required columns: ' + ', '.join(missing))
choices=choices.dropna(subset=required).copy()
choices['Selected_Movie_ID']=choices['Selected_Movie_ID'].astype(int)

if len(choices) < 10:
    raise SystemExit(f'Only {len(choices)} genuine choices found. Collect at least 10 choices before evaluation; 20+ is recommended for a class project.')

# Build balanced candidate-pair examples: 1 chosen movie + 3 deterministic negatives per response.
examples=[]
for _,r in choices.iterrows():
    selected=int(r.Selected_Movie_ID)
    candidates=[selected]
    negatives=movies.loc[movies.Movie_ID.ne(selected),'Movie_ID'].tolist()
    # deterministic rotating negatives based on selected id
    start=selected % len(negatives)
    negatives=(negatives[start:]+negatives[:start])[:3]
    candidates += negatives
    for cid in candidates:
        m=movies.loc[movies.Movie_ID.eq(cid)].iloc[0]
        pref_genre=str(r.Preferred_Genre)
        examples.append({
            'Response_ID':str(r.Response_ID),
            'Preferred_Genre':pref_genre,
            'Preferred_Style':normalize_style(r.Preferred_Style),
            'Preferred_Age':str(r.Preferred_Age_Restriction),
            'Preferred_Era':normalize_era(r.Preferred_Era),
            'Candidate_Style':m.Style,
            'Candidate_Age':m.Age_Restriction,
            'Candidate_Era':m.Era,
            'Genre_Match':int(pref_genre in m.Genres),
            'Style_Match':int(normalize_style(r.Preferred_Style)==m.Style),
            'Age_Match':int(str(r.Preferred_Age_Restriction)==m.Age_Restriction),
            'Era_Match':int(normalize_era(r.Preferred_Era)==m.Era),
            'Relevant':int(cid==selected)
        })

df=pd.DataFrame(examples)
groups=df['Response_ID']
X=df.drop(columns=['Response_ID','Relevant'])
y=df['Relevant']

splitter=GroupShuffleSplit(n_splits=1,test_size=0.25,random_state=42)
train_idx,test_idx=next(splitter.split(X,y,groups))
X_train,X_test=X.iloc[train_idx],X.iloc[test_idx]
y_train,y_test=y.iloc[train_idx],y.iloc[test_idx]

cat=['Preferred_Genre','Preferred_Style','Preferred_Age','Preferred_Era','Candidate_Style','Candidate_Age','Candidate_Era']
num=['Genre_Match','Style_Match','Age_Match','Era_Match']
pre=ColumnTransformer([('cat',OneHotEncoder(handle_unknown='ignore'),cat),('num',StandardScaler(),num)])
models={
    'KNN':KNeighborsClassifier(n_neighbors=max(1,min(5,len(X_train)))),
    'Decision Tree':DecisionTreeClassifier(max_depth=6,class_weight='balanced',random_state=42),
    'Random Forest':RandomForestClassifier(n_estimators=200,max_depth=8,class_weight='balanced',random_state=42)
}
rows=[]
for name,model in models.items():
    pipe=Pipeline([('preprocess',pre),('model',model)])
    pipe.fit(X_train,y_train)
    pred=pipe.predict(X_test)
    rows.append({
        'Model':name,
        'Accuracy':accuracy_score(y_test,pred),
        'Precision':precision_score(y_test,pred,zero_division=0),
        'Recall':recall_score(y_test,pred,zero_division=0),
        'F1_Score':f1_score(y_test,pred,zero_division=0),
        'Training_Pairs':len(X_train),'Testing_Pairs':len(X_test)
    })
    cm=confusion_matrix(y_test,pred,labels=[0,1])
    disp=ConfusionMatrixDisplay(cm,display_labels=['Not Relevant','Relevant'])
    disp.plot(values_format='d')
    plt.title(name+' Confusion Matrix')
    plt.tight_layout()
    plt.savefig(OUT/(name.lower().replace(' ','_')+'_confusion_matrix.png'),dpi=180)
    plt.close()

results=pd.DataFrame(rows).sort_values('F1_Score',ascending=False)
results.to_csv(OUT/'model_comparison.csv',index=False)
df.to_csv(OUT/'evaluation_pairs.csv',index=False)
print('\nCineSense evaluation completed successfully.\n')
print(results.to_string(index=False))
print('\nSaved results in:', OUT)
