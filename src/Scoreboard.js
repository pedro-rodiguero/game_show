import React from "react";
import "./styles/Scoreboard.css";

const Scoreboard = ({ scores }) => {
  return (
    <div className="scoreboard">
      <div>TIME AZUL: {scores.blue}</div>
      <div>TIME VERDE: {scores.green}</div>
    </div>
  );
};

export default Scoreboard;