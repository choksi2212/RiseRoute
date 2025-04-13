from flask import Flask, request, jsonify
import joblib
import pandas as pd
from preprocess import preprocess_input  # Your preprocessing function

app = Flask(__name__)

model = joblib.load("model/lightgbm_salary_predictor.pkl")

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    features = preprocess_input(data)
    prediction = model.predict(features)[0]
    return jsonify({"prediction": prediction})

@app.route("/", methods=["GET"])
def index():
    return "Welcome to the Skill Predictor API"

if __name__ == "__main__":
    app.run(debug=True)
