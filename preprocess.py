# preprocess.py
import pandas as pd

def preprocess_input(user_input):
    # Simulate one-hot encoding (your real logic may differ)
    all_possible_columns = [  # Replace with your real feature names
        "Country_Germany",
        "YearsCode_5",
        "LanguageHaveWorkedWith_Python",
        "LanguageHaveWorkedWith_JavaScript",
        "ToolsTechHaveWorkedWith_Docker",
        "ToolsTechHaveWorkedWith_Git",
        "LearnCode_School",
        "LearnCode_Online Courses",
        # ... all 113 features
    ]

    encoded = {col: 0 for col in all_possible_columns}

    # Map inputs to feature names (simplified)
    if user_input["Country"] == "Germany":
        encoded["Country_Germany"] = 1
    if user_input["YearsCode"] == "5":
        encoded["YearsCode_5"] = 1

    for lang in user_input.get("LanguageHaveWorkedWith", "").split(";"):
        lang = lang.strip()
        col = f"LanguageHaveWorkedWith_{lang}"
        if col in encoded:
            encoded[col] = 1

    for tool in user_input.get("ToolsTechHaveWorkedWith", "").split(";"):
        tool = tool.strip()
        col = f"ToolsTechHaveWorkedWith_{tool}"
        if col in encoded:
            encoded[col] = 1

    for method in user_input.get("LearnCode", "").split(";"):
        method = method.strip()
        col = f"LearnCode_{method}"
        if col in encoded:
            encoded[col] = 1

    return pd.DataFrame([encoded])
