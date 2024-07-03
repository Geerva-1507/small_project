import React from "react";
import "./progress.css"

function StepProgressBar({ steps, activeStep, setActiveStep }) {

    function handlePreviousStep() {
        setActiveStep(prevStep => Math.max(prevStep - 1, 0));
    }

    function handleNextStep() {
        setActiveStep(prevStep => Math.min(prevStep + 1, steps.length - 1));
    }

    function CalculateCurrentStepWidth(){
        return `${(100/ (steps.length - 1)) * activeStep}%`;
    }

    return (
    <div>
        <div className="steps">
            {steps && steps.length > 0
            ? steps.map((stepItem, index) => <div className={`step ${index <= activeStep ? 'active' : ''}`} style={{ width: CalculateCurrentStepWidth() }} key={index}>{stepItem}</div>)
            : null}
        </div>
        <div className="step-buttons-wrapper">
            <button disabled={activeStep === 0} onClick={handlePreviousStep}>Previous step</button>
            <button disabled={activeStep === steps.length - 1} onClick={handleNextStep}>Next step</button>
        </div>
    </div>
    ); 
}    

export default StepProgressBar;
