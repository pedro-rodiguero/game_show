import React from "react";
import "./styles/Scoreboard.css";

const Scoreboard = ({ scores }) => {
  return (
    <div className="scoreboard">
      <div>Team 1: {scores.team1}</div>
      <div>Team 2: {scores.team2}</div>
    </div>
  );
};

export default Scoreboard;