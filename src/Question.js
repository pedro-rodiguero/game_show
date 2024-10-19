import React from "react";
import "./styles/Question.css";
import blueTeam1Icon from "./assets/blueTeam.svg";
import greenTeam2Icon from "./assets/greenTeam.svg";

const Question = ({
  category,
  index,
  question,
  flippedQuestion,
  answeredQuestions,
  handleQuestionClick,
  handleScoreUpdate,
}) => {
  const isFlipped =
    flippedQuestion &&
    flippedQuestion.category === category &&
    flippedQuestion.index === index;

  const whoAnswered = answeredQuestions[`${category}-${index}`] ? answeredQuestions[`${category}-${index}`] : 'white';
  //console.log('answeredQuestions => ', answeredQuestions)

  return (
    <button
      className={`question question-container ${
        isFlipped
          ? flippedQuestion.state === "question"
            ? "flipped scaled"
            : "flipped-twice scaled"
          : ""
      }`}
      style={{ backgroundColor: whoAnswered }}
      onClick={() => handleQuestionClick(category, index)}
    >        
      {(index + 1) * 10}
      
      <div
        className="question back"
        onClick={() => handleQuestionClick(category, index)}
      >
        <p>{question.question}</p>
      </div>
      <div
        className="question back-twice"
        onClick={() => handleQuestionClick(category, index)}
      >
        <p>{question.answer}</p>

        <div className="team-icons">
          <img
            src={blueTeam1Icon}
            alt="Team 1"
            className="team-icon"
            onClick={() => handleScoreUpdate("blue", category, index)}
          />
          <img
            src={greenTeam2Icon}
            alt="Team 2"
            className="team-icon"
            onClick={() => handleScoreUpdate("green", category, index)}
          />
        </div>
      </div>
    </button>
  );
};

export default Question;