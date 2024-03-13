
import cv2
import tensorflow as tf
import numpy as np

def preprocess_image(image):
    image = cv2.resize(image, (176, 208))
    img_array = image.reshape((1, 176, 208, 3))
    # img_array = img_array / 255.0  # Normalize pixel values (assuming values range from 0 to 255)

    return img_array

def predict_disease(image):
    pre_processed_image = preprocess_image(image)

    # Load the h5 model file
    model = tf.keras.models.load_model('models/alzheimer_model_new.h5')

    # Perform prediction using the preprocessed image
    predictions = model.predict(pre_processed_image)

    # Extract the predicted class
    predicted_class_index = np.argmax(predictions)

    return int(predicted_class_index)