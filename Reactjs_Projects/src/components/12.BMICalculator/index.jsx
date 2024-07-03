import React, { useState } from "react";
import './bmi.css'

function BMICalculator() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [bmi, setBMI] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  function calculateBMI() {
    if (!height || !weight) {
      setErrorMsg("Please enter both height and weight");
      return;
    }

    const numericHeight = parseFloat(height);
    const numericWeight = parseFloat(weight);

    if (
      isNaN(numericHeight) ||
      isNaN(numericWeight) ||
      numericHeight <= 0 ||
      numericWeight <= 0
    ) {
      setErrorMsg("Please enter valid numbers for height and weight");
      return;
    }

    const calculateHeightInMeters = numericHeight / 100;
    const calculateBmiValue = (
      numericWeight /
      (calculateHeightInMeters * calculateHeightInMeters)
    ).toFixed(2);

    setBMI(calculateBmiValue);
    setErrorMsg("");
  }

  return (
    <div className="bmi-calculator-container">
      <h1>BMI Calculator</h1>
      <div className="input-container">
        <label>Height (cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>
      {errorMsg ? <p className="error-msg">{errorMsg}</p> : null}
      {errorMsg !== "" ? null : (
        <p className="bmi-result-text">
          {bmi < 18.5
            ? "Underweight"
            : bmi >= 18.5 && bmi < 24.9
            ? "Normal weight"
            : bmi >= 24.9 && bmi < 29.9
            ? "Overweight"
            : "Obese"}
        </p>
      )}
    </div>
  );
}

export default BMICalculator;
