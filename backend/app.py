from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np

app = Flask(__name__)
CORS(app)  # Enable cross-origin requests for React frontend

# Load model and scaler
model = pickle.load(open('backend\model\house_price_model.pkl', 'rb'))
scaler = pickle.load(open('backend\model\scaler.pkl', 'rb'))

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    features = np.array([[data['bedrooms'], data['bathrooms'], data['livingArea'], 
                          data['condition'], data['schoolsNearby']]])
    scaled_features = scaler.transform(features)
    prediction = model.predict(scaled_features)[0]
    return jsonify({'predicted_price': prediction*9})

if __name__ == '__main__':
    app.run(debug=True)
