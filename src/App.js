// src/App.js
import React, { useState } from "react";
import { questions } from "./questions";
import "./App.css";

function App() {
  const [flippedQuestion, setFlippedQuestion] = useState(null);
  const categories = Object.keys(questions);
  const half = Math.ceil(categories.length / 2);
  const upperCategories = categories.slice(0, half);
  const lowerCategories = categories.slice(half);

  const handleQuestionClick = (category, index) => {
    if (
      flippedQuestion &&
      flippedQuestion.category === category &&
      flippedQuestion.index === index
    ) {
      if (flippedQuestion.state === "question") {
        setFlippedQuestion({ category, index, state: "answer" });
      } else {
        setFlippedQuestion(null);
      }
    } else {
      setFlippedQuestion({ category, index, state: "question" });
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Game Show</h1>
      </header>
      <div className="categories">
        <div className="level">
          {upperCategories.map((category, index) => (
            <div key={index} className="category">
              <h2>{category}</h2>
              {questions[category].map((q, i) => (
                <div
                  key={i}
                  className={`question-container ${
                    flippedQuestion &&
                    flippedQuestion.category === category &&
                    flippedQuestion.index === i
                      ? flippedQuestion.state === "question"
                        ? "flipped zoomed"
                        : "flipped-twice zoomed"
                      : ""
                  }`}
                >
                  <button
                    className="question front"
                    onClick={() => handleQuestionClick(category, i)}
                  >
                    {(i + 1) * 10}
                  </button>
                  <div
                    className="question back"
                    onClick={() => handleQuestionClick(category, i)}
                  >
                    <p>{q.question}</p>
                  </div>
                  <div
                    className="question back-twice"
                    onClick={() => handleQuestionClick(category, i)}
                  >
                    <p>{q.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="level">
          {lowerCategories.map((category, index) => (
            <div key={index} className="category">
              <h2>{category}</h2>
              {questions[category].map((q, i) => (
                <div
                  key={i}
                  className={`question-container ${
                    flippedQuestion &&
                    flippedQuestion.category === category &&
                    flippedQuestion.index === i
                      ? flippedQuestion.state === "question"
                        ? "flipped zoomed"
                        : "flipped-twice zoomed"
                      : ""
                  }`}
                >
                  <button
                    className="question front"
                    onClick={() => handleQuestionClick(category, i)}
                  >
                    {(i + 1) * 10}
                  </button>
                  <div
                    className="question back"
                    onClick={() => handleQuestionClick(category, i)}
                  >
                    <p>{q.question}</p>
                  </div>
                  <div
                    className="question back-twice"
                    onClick={() => handleQuestionClick(category, i)}
                  >
                    <p>{q.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;