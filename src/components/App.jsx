// import { useState } from "react";
import { useState } from "react";
import GameBoard from "./gameBoard";
// import "./App.css";

const App = () => {
  //want two function that will increment score or end the leve/stage
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [reset, setReset] = useState(true);

  const endStage = () => {
    if (score > bestScore) {
      setBestScore(score);
    }
    setScore(0);
    setReset(true);
  };

  const incrementScore = () => {
    setScore(() => score + 1);
    setReset(false);
  };

  return (
    <div className="app">
      <h1>Memory Card Game</h1>
      <p>
        Score: {score} Best Score: {bestScore}
      </p>
      <GameBoard
        number={10}
        reset={reset}
        endStage={endStage}
        incrementScore={incrementScore}
      />
    </div>
  );
};

export default App;
