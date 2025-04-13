from fastapi import FastAPI
from pydantic import BaseModel
import pickle
import numpy as np
from sklearn.preprocessing import OneHotEncoder
from sklearn.feature_extraction.text import CountVectorizer

# Load your trained model
with open("skill_assessment_model.pkl", "rb") as f:
    model = pickle.load(f)

# Initialize encoder and vectorizer (you can adjust this as needed)
encoder = OneHotEncoder(handle_unknown='ignore')  # Example for categorical data
vectorizer = CountVectorizer()  # Example for text features like "Languages"

app = FastAPI()

# Input structure expected from the user
class ResumeInput(BaseModel):
    Country: str
    YearsCode: str
    LanguageHaveWorkedWith: str
    ToolsTechHaveWorkedWith: str
    LearnCode: str
    Education: str = ""
    CareerGoals: str = ""

@app.get("/")
def root():
    return {"message": "Welcome to the Developer Career Path Predictor API!"}

@app.post("/predict")
def predict_resume(data: ResumeInput):
    # Convert input data to dictionary
    input_dict = data.dict()

    # Manually apply encoding/transforming to the input features
    # Example: Encode Country, YearsCode, and Languages
    country_encoded = encoder.transform([[input_dict['Country']]])
    language_encoded = vectorizer.transform([input_dict['LanguageHaveWorkedWith']])

    # Combine all encoded features into one vector (make sure shapes align)
    combined_features = np.concatenate([country_encoded.toarray(), language_encoded.toarray()], axis=1)

    # Make prediction
    prediction = model.predict(combined_features)

    # If it's a classifier with probability scores
    if hasattr(model, "predict_proba"):
        probas = model.predict_proba(combined_features)[0]
        labels = model.classes_
        prediction_dict = {label: float(round(prob, 4)) for label, prob in zip(labels, probas)}
        best_fit = max(prediction_dict, key=prediction_dict.get)
        return {
            "suggested_role": best_fit,
            "prediction_probabilities": prediction_dict
        }
    
    return {"suggested_role": prediction[0]}
