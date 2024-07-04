// import { useState } from "react";
import { useState } from "react";
import GameBoard from "./gameBoard.jsx";
import "../styles/App.css";

const App = () => {
  //want two function that will increment score or end the leve/stage
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [reset, setReset] = useState(true);
  const [numberOfCards, setNumberOfCards] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [gameStarted, setGameStarted] = useState(false);

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

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    const num = parseInt(inputValue, 10);
    if (!isNaN(num) && num > 0) {
      setNumberOfCards(num);
      setGameStarted(true);
    }
  };

  return (
    <div className="app">
      <h1>Memory Card Game</h1>
      <label htmlFor="">
        Enter number of cards:
        <input type="text" value={inputValue} onChange={handleInput} />
      </label>
      <button onClick={handleSubmit}> Submit </button>
      <p>
        Score: {score} Best Score: {bestScore}
      </p>
      {gameStarted && (
        <GameBoard
          number={numberOfCards}
          reset={reset}
          endStage={endStage}
          incrementScore={incrementScore}
        />
      )}
    </div>
  );
};

export default App;
