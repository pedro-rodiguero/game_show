import React, { useState } from "react";
import { questions } from "./questions";
import "./App.css";

function App() {
  const [flippedQuestion, setFlippedQuestion] = useState(null);
  const [scores, setScores] = useState({ team1: 0, team2: 0 });
  const [answeredQuestions, setAnsweredQuestions] = useState({});
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

  const handleScoreUpdate = (team) => {
    const points = (flippedQuestion.index + 1) * 10;
    setScores((prevScores) => ({
      ...prevScores,
      [team]: prevScores[team] + points,
    }));
    setAnsweredQuestions((prev) => ({
      ...prev,
      [`${flippedQuestion.category}-${flippedQuestion.index}`]: team,
    }));
    setFlippedQuestion(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Game Show</h1>
        <div className="scoreboard">
          <div>Team 1: {scores.team1}</div>
          <div>Team 2: {scores.team2}</div>
        </div>
      </header>
      <div className="categories">
        {flippedQuestion && <div className="highlighted-bg"></div>}
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
                        ? "flipped scaled"
                        : "flipped-twice scaled"
                      : ""
                  } ${
                    answeredQuestions[`${category}-${i}`] === "team1"
                      ? "team1-bg"
                      : answeredQuestions[`${category}-${i}`] === "team2"
                      ? "team2-bg"
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
                    <button onClick={() => handleScoreUpdate("team1")}>
                      Team 1
                    </button>
                    <button onClick={() => handleScoreUpdate("team2")}>
                      Team 2
                    </button>
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
                        ? "flipped scaled"
                        : "flipped-twice scaled"
                      : ""
                  } ${
                    answeredQuestions[`${category}-${i}`] === "team1"
                      ? "team1-bg"
                      : answeredQuestions[`${category}-${i}`] === "team2"
                      ? "team2-bg"
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
                    <button onClick={() => handleScoreUpdate("team1")}>
                      Team 1
                    </button>
                    <button onClick={() => handleScoreUpdate("team2")}>
                      Team 2
                    </button>
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