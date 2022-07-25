import React, { useState } from 'react';
import './App.css';

function App() {

  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      text: "What is the name of Korean traditional costume??",
      options: [
        { id: 0, text: "Tuque", isCorrect: false },
        { id: 1, text: "Poncho", isCorrect: false },
        { id: 2, text: "Sari", isCorrect: false },
        { id: 3, text: "Hanbok", isCorrect: true },
      ],
    },
    {
      text: "What is the name of Korean traditional food??",
      options: [
        { id: 0, text: "Kimchi", isCorrect: true },
        { id: 1, text: "Taco", isCorrect: false },
        { id: 2, text: "Fish & Chips", isCorrect: false },
        { id: 3, text: "Pasta", isCorrect: false },
      ],
    },
    {
      text: "What is the name of the world-famous Korean boy group??",
      options: [
        { id: 0, text: "BTS", isCorrect: true },
        { id: 1, text: "ImagineDragons", isCorrect: false },
        { id: 2, text: "Maroon 5", isCorrect: false },
        { id: 3, text: "One Direction", isCorrect: false },
      ],
    },
    {
      text: "What is a world-famous Korean drama??",
      options: [
        { id: 0, text: "Quees's Gambit", isCorrect: false },
        { id: 1, text: "Squid game", isCorrect: true },
        { id: 2, text: "Strange Things", isCorrect: false },
        { id: 3, text: "Money Heist", isCorrect: false },
      ],
    },
    {
      text: "What is the name of the world-famous Korean soccer player?",
      options: [
        { id: 0, text: "Messy", isCorrect: false },
        { id: 1, text: "Son", isCorrect: true },
        { id: 2, text: "Neymar", isCorrect: true },
        { id: 3, text: "Mbappe", isCorrect: false },
      ],
    },
  ];

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score +1);
    }

    if (currentQuestion +1 < questions.length) {
      setCurrentQuestion(currentQuestion +1 );
    }else{
      setFinalResults(true);
    }
    
  }

  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setFinalResults(false);
  }

  return (
    <div className="App">
      {/* 1. Header */}
      <h1>USA Quiz</h1>

      {/* 2. Current Score */}
      <h2>Current Score: {score}</h2>

    { showFinalResults ? (
        <div className='final-results'>
        <h1>Final Results</h1>
        <h2>
          {score} out of {questions.length} correct - ({(score/questions.length) * 100}%)
        </h2>
        <button onClick={() => restartQuiz()}>Restart Quiz</button>
      </div>
    ) : (
      <div className="question-card">
      <h2>Question {currentQuestion +1 } out of {questions.length}</h2>
      <h3 className='question-text'>{questions[currentQuestion].text}</h3>

      <ul>
        {questions[currentQuestion].options.map((option) => {
          return (
            <li onClick={() => optionClicked(option.isCorrect)} key={option.id}>{option.text}</li>
          )
        })}
      </ul>
  </div>
    ) }
        
        
    </div>
  );
}

export default App;
