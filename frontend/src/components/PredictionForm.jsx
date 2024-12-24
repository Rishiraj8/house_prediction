import React, { useState, useEffect } from 'react';
import './PredictionForm.css';

const PredictionForm = ({ onPredict, isLoading }) => {
    const [inputs, setInputs] = useState({
        bedrooms: 3,
        bathrooms: 2,
        livingArea: 2000,
        condition: 3,
        schoolsNearby: 2,
    });

    const [isButtonEnabled, setIsButtonEnabled] = useState(false);

    useEffect(() => {
        if (isLoading) {
            setIsButtonEnabled(false);
            setTimeout(() => {
                setIsButtonEnabled(true);
            }, 3000);
        } else {
            setIsButtonEnabled(true);
        }
    }, [isLoading]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: name === 'condition' ? parseInt(value) : parseFloat(value)
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onPredict(inputs);
    };

    return (
        <form className="prediction-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="bedrooms">Bedrooms:</label>
                <input
                    type="number"
                    id="bedrooms"
                    name="bedrooms"
                    value={inputs.bedrooms}
                    onChange={handleChange}
                    min="1"
                    max="10"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="bathrooms">Bathrooms:</label>
                <input
                    type="number"
                    id="bathrooms"
                    name="bathrooms"
                    value={inputs.bathrooms}
                    onChange={handleChange}
                    min="1"
                    max="10"
                    step="0.5"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="livingArea">Living Area (sq ft):</label>
                <input
                    type="number"
                    id="livingArea"
                    name="livingArea"
                    value={inputs.livingArea}
                    onChange={handleChange}
                    min="500"
                    max="10000"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="condition">Condition:</label>
                <input
                    type="range"
                    id="condition"
                    name="condition"
                    value={inputs.condition}
                    onChange={handleChange}
                    min="1"
                    max="5"
                    required
                />
                <div className="range-labels">
                    <span>Poor</span>
                    <span>Average</span>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="schoolsNearby">Schools Nearby:</label>
                <input
                    type="number"
                    id="schoolsNearby"
                    name="schoolsNearby"
                    value={inputs.schoolsNearby}
                    onChange={handleChange}
                    min="0"
                    max="10"
                    required
                />
            </div>
            <button type="submit" className='submit-button' disabled={isLoading || !isButtonEnabled}>
                {isLoading ? 'Predicting...' : 'Predict Price'}
            </button>
        </form>
    );
};

export default PredictionForm;