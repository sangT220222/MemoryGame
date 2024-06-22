// import { useState } from "react";
import GameBoard from "./gameBoard";
// import "./App.css";

const App = () => {
  return (
    <div className="app">
      <h1>Memory Card Game</h1>
      <GameBoard count={10} />
    </div>
  );
};

export default App;
