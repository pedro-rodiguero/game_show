import React from "react";
import Question from "./Question";
import "./styles/Category.css";

const Category = ({
  category,
  questions,
  flippedQuestion,
  answeredQuestions,
  handleQuestionClick,
  handleScoreUpdate,
}) => {
  return (
    <div className="category">
      <h2>{category}</h2>
      {questions.map((q, i) => (
        <Question
          key={i}
          category={category}
          index={i}
          question={q}
          flippedQuestion={flippedQuestion}
          answeredQuestions={answeredQuestions}
          handleQuestionClick={handleQuestionClick}
          handleScoreUpdate={handleScoreUpdate}
        />
      ))}
    </div>
  );
};

export default Category;