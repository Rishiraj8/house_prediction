import React from 'react';
import './PredictionResult.css';

const PredictionResult = ({ price, isLoading }) => {
    return (
        <div className="prediction-result">
            <h2>Predicted Price</h2>
            {isLoading ? (
                <p>Calculating...</p>
            ) : price ? (
                <p className="price">₹{price.toLocaleString()}</p>
            ) : (
                <p>Submit the form to see the predicted price</p>
            )}
        </div>
    );
};

export default PredictionResult;