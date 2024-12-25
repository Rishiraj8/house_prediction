
# House Price Prediction Project

This project is a **House Price Prediction Application** developed for a **final year project**. It uses **machine learning** to predict house prices based on user input. The application has a **React.js frontend** and a **Flask backend**, which uses a pre-trained machine learning model.

---

## Features

- Predict house prices based on input features such as bedrooms, bathrooms, and house condition.
- Modern and responsive user interface built with React.js.
- Scalable Flask API that serves predictions from a pre-trained model.
- Easily deployable on localhost for testing and demonstrations.

---

## Project Structure

### Backend
- **`model/`**: Contains the trained machine learning model (`house_price_model.pkl`) and the scaler (`scaler.pkl`).
- **`notebook/`**: Jupyter notebooks used for training the machine learning model.
- **`app.py`**: Flask application that serves as the API.
- **`requirements.txt`**: List of dependencies needed for the backend.

### Frontend
- **`public/`**: Public assets for the React application.
- **`src/`**: Source files for the React application.
  - **`App.js`**: Main component handling the UI.
  - **`components/`**: Reusable components.
- **`package.json`**: Configuration file listing dependencies and scripts for the frontend.

---

## How to Run the Project

### Step 1: Clone the Repository
Make sure you have **Git** installed on your system. Open your terminal and run:
```bash
git clone https://github.com/Rishiraj8/house_prediction.git
cd House
```

---

### Step 2: Set Up the Backend

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```

2. Create and activate a Python virtual environment (optional but recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows, use venv\Scripts\activate
   ```

3. Install the required Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Start the Flask server:
   ```bash
   python app.py
   ```
   - The Flask server will now run on `http://127.0.0.1:5000` (localhost).
   - Keep this terminal running.

---

### Step 3: Set Up the Frontend

1. Open a new terminal and navigate to the frontend folder:
   ```bash
   cd frontend
   ```

2. Install the required Node.js dependencies:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm run dev
   ```
   - The React app will now run on `http://127.0.0.1:5173` (localhost).
   - Keep this terminal running.

---

### Step 4: Use the Application

1. Open your browser and go to `http://127.0.0.1:5173`.
2. Enter the required details in the form (e.g., number of bedrooms, bathrooms, etc.).
3. Click the **Predict Price** button.
4. The predicted house price will be displayed on the screen.

---

## Notes

- Ensure both the Flask backend and React frontend are running simultaneously.
- If you encounter issues, check the terminal logs for errors.
- You can modify the machine learning model or retrain it using the Jupyter notebook in the `notebook/` folder.

---

## Acknowledgments

This project was developed as a final year project for a school friend of mine.
