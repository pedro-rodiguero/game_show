import React from "react";
import Scoreboard from "./Scoreboard";
import "./styles/Header.css";

const Header = ({ scores }) => {
  return (
    <header className="App-header">
      <h1>Game Show</h1>
      <Scoreboard scores={scores} />
    </header>
  );
};

export default Header;