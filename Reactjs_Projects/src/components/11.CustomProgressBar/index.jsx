import React, { useState } from "react";
import "./progress.css";

function ProgressBar() {
  const [progressPercentage, setprogressPercentage] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");

  function handleProgressPercentage(e) {
    setprogressPercentage(event.target.value);
    if (event.target.value > 100) {
      setErrorMsg("Percentage cannot be greater than 100");
    } else {
      setErrorMsg("");
      setprogressPercentage(event.target.value);
    }
  }
  return (
    <div className="progress-bar-container">
      <h1>Custom Progress Bar</h1>
      <div className="progress-bar">
        <div className="wrapper">
          {progressPercentage >= 0 && progressPercentage <= 100 ? (
            <div
              className="innerWrapper"
              style={{ width: `${progressPercentage}%` }}
            >
                {progressPercentage}%
            </div>
          ) : (
            <p>{errorMsg}</p>
          )}
        </div>
      </div>
      <div className="input-container">
        <label>Input Percentage</label>
        <input onChange={handleProgressPercentage} />
      </div>
    </div>
  );
}

export default ProgressBar;
