CINESENSE - WORKING EVALUATION VERSION

1. Keep all website files in this same folder.
2. Open index.html and use CineSense normally.
3. Set Genre, Style, Age Restriction and Era in Preferences.
4. Open a recommended movie and click "Choose to Watch".
5. Repeat with multiple preference combinations/users.
6. On Dashboard click "Export Evaluation Data".
7. Put the downloaded cinesense_preference_choices.csv in this folder.
8. Install Python packages once:
   pip install pandas matplotlib scikit-learn
9. Run:
   python evaluate_models.py
10. Results appear in evaluation_output:
    - model_comparison.csv
    - evaluation_pairs.csv
    - KNN confusion matrix PNG
    - Decision Tree confusion matrix PNG
    - Random Forest confusion matrix PNG

IMPORTANT
- No star ratings are required.
- The website similarity score is true cosine similarity x 100, with no fake 55%-94% scaling.
- Supervised evaluation requires genuine "Choose to Watch" selections.
- The evaluator will stop with a clear message if fewer than 10 choices exist rather than generating fake metrics.
- 20+ genuine choices is recommended for a small class demonstration; more data is better.
