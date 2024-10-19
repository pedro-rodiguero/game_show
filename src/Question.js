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

  const isAnswered = answeredQuestions[`${category}-${index}`];

  return (
    <div
      className={`question-container ${
        isFlipped
          ? flippedQuestion.state === "question"
            ? "flipped scaled"
            : "flipped-twice scaled"
          : ""
      } ${isAnswered === "team1" ? "team1-bg" : isAnswered === "team2" ? "team2-bg" : ""}`}
    >
      {isAnswered ? (
        <div className="question front"></div>
      ) : (
        <button
          className="question front"
          onClick={() => handleQuestionClick(category, index)}
        >
          {(index + 1) * 10}
        </button>
      )}
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
            onClick={() => handleScoreUpdate("team1", category, index)}
          />
          <img
            src={greenTeam2Icon}
            alt="Team 2"
            className="team-icon"
            onClick={() => handleScoreUpdate("team2", category, index)}
          />
        </div>
      </div>
    </div>
  );
};

export default Question;