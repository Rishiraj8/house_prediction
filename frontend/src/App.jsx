import React, { useState } from 'react';
import axios from 'axios';
import PredictionForm from './components/PredictionForm';
import PredictionResult from './components/PredictionResult';
import './App.css';

const App = () => {
    const [price, setPrice] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handlePredict = async (inputs) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.post('http://localhost:5000/predict', inputs);
            setPrice(response.data.predicted_price);
        } catch (error) {
            console.error("Error fetching prediction:", error);
            setError("An error occurred while fetching the prediction. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="app">
            <header className="app-header">
                <h1>House Price Prediction</h1>
                <p>Enter the details of your house to get an estimated price</p>
            </header>
            <main className="app-main">
                <PredictionForm onPredict={handlePredict} isLoading={loading} />
                {error && <div className="error-message">{error}</div>}
                <PredictionResult price={price} isLoading={loading} />
            </main>
            <footer className="app-footer">
                <p>&copy; 2024 House Price Prediction. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default App;