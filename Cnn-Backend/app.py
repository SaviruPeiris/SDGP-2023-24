from flask import Flask, request, jsonify
import numpy as np
from service.image_service import predict_disease
import cv2
from flask_cors import CORS

APP_NAME = 'alz'
class_names = ['MildDementia', 'ModerateDementia', 'NonDementia', 'VeryMildDementia']

app = Flask(APP_NAME)
CORS(app)  # Enable CORS for all routes

@app.route('/predict', methods=['POST'])
def predict():
    # Check if an image was uploaded
    if 'image' not in request.files:
        return jsonify({'error': 'No image uploaded'})

    # Load and preprocess the image received from the Flask API
    file = request.files['image']
    image = cv2.imdecode(np.fromstring(file.read(), np.uint8), cv2.IMREAD_COLOR)
    prediction = predict_disease(image)

    return jsonify(
        {
            'predicted_class': prediction,
            'prediction': class_names[prediction]
        }
    )


if APP_NAME == 'alz':
    app.run(debug=False,port=5001)

