import { useState } from "react";
import './quiz.css'

const questions = [{
  question: "A flashing red traffic light signifies that a driver should do what?",
  options: ["stop", "speed up","proceed with caution","honk the horn"],
  correctAnswer: "stop"
}, {
  question: "A knish is traditionally stuffed with what filling?",
  options: ["potato", "creamed corn","lemon custard","raspberry jelly"],
  correctAnswer: "potato"
}, {
  question: "A pita is a type of what?",
  options: ["fresh fruit", "flat bread", "French tart", "friend bean dip"],
  correctAnswer: "flat bread"
}, {
  question: "A portrait that comically exaggerates a person's physical traits is called a what?",
  options: ["landscape", "caricature", "still life", "Impressionism"],
  correctAnswer: "caricature"
}, {
  question: "A second-year college student is usually called a what?",
  options: ["sophomore", "senior", "junior", "freshman"],
  correctAnswer: "freshman"
},
]

//currentquestion
//score
//selectedOptions
//showresult

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(
    new Array(questions.length).fill(null)
  );
  const [showResult, setShowResult] = useState(false);

  function handleSelectedOption(getOptionItem){
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[currentQuestion] = getOptionItem;
    setSelectedOptions(updatedSelectedOptions)
  }

  function handlePreviousQuestion() {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  }

  console.log(selectedOptions, score);

  function handleNextQuestion() {
    if (
      selectedOptions[currentQuestion] ===
      questions[currentQuestion].correctAnswer
    ) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  }

  function handleRestartQuiz(){
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOptions(new Array(questions.length).fill(null));
    setShowResult(false)
  }

  return (
    <div className="quiz">
      <h1>Quiz App</h1>
      {!showResult ? (
        <div className="options-wrapper">
          <h2>Question {currentQuestion + 1}</h2>
          <p>{questions[currentQuestion].question}</p>
          <div className="options">
            {questions[currentQuestion].options.map((optionItem) => (
              <button
                key={optionItem}
                className={`option ${
                  selectedOptions[currentQuestion] === optionItem
                    ? "selected"
                    : ""
                }`}
                onClick={()=> handleSelectedOption(optionItem)}
              >
                {optionItem}
              </button>
            ))}
          </div>
          <div className="button-container">
            <button
              onClick={handlePreviousQuestion}
              disabled={currentQuestion === 0}
              className="prev-btn"
            >
              Previous
            </button>
            <button onClick={handleNextQuestion} className="next-btn">
              {currentQuestion < questions.length - 1 ? "Next" : "Finish"}
            </button>
          </div>
        </div>
      ) : (
        <div className="show-result-wrapper">
          <h3>Quiz Completed</h3>
          <p>Your Score: {score}</p>
          <button onClick={handleRestartQuiz} className="restart-button">Restart Quiz</button>
        </div>
      )}
    </div>
  );
}

export default Quiz;