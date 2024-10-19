import React, { useState } from "react";
import { questions } from "./questions";
import Header from "./Header";
import Category from "./Category";
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

  const handleScoreUpdate = (team, category, index) => {
    const points = (index + 1) * 10;
    setScores((prevScores) => ({
      ...prevScores,
      [team]: prevScores[team] + points,
    }));
    setAnsweredQuestions((prev) => ({
      ...prev,
      [`${category}-${index}`]: team,
    }));
    setFlippedQuestion(null);
  };

  return (
    <div className="App">
      <Header scores={scores} />
      <div className="categories">
        {flippedQuestion && <div className="highlighted-bg"></div>}
        <div className="level">
          {upperCategories.map((category, index) => (
            <Category
              key={index}
              category={category}
              questions={questions[category]}
              flippedQuestion={flippedQuestion}
              answeredQuestions={answeredQuestions}
              handleQuestionClick={handleQuestionClick}
              handleScoreUpdate={handleScoreUpdate}
            />
          ))}
        </div>
        <div className="level">
          {lowerCategories.map((category, index) => (
            <Category
              key={index}
              category={category}
              questions={questions[category]}
              flippedQuestion={flippedQuestion}
              answeredQuestions={answeredQuestions}
              handleQuestionClick={handleQuestionClick}
              handleScoreUpdate={handleScoreUpdate}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;