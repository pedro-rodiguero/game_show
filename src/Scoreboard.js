import React from "react";
import "./styles/Scoreboard.css";

const Scoreboard = ({ scores }) => {
  return (
    <div className="scoreboard">
      <div>TIME AZUL: {scores.team1}</div>
      <div>TIME VERDE: {scores.team2}</div>
    </div>
  );
};

export default Scoreboard;