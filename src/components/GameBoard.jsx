import { useState, useEffect } from "react";
import GetPokemonImages from "./FetchAPI";
import Card from "../components/Card.jsx";
import PropTypes from "prop-types";
import "../styles/gameBoard.css";

const GameBoard = (props) => {
  const { images } = GetPokemonImages({ number: props.number }); // Destructure images from the result of GetPokemonImages

  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Initialize cards array with images once fetched
    if (images.length > 0) {
      const initialCards = images.map((image, index) => ({
        id: index,
        image: image,
        // Add other properties as needed
      }));
      setCards(initialCards);
    }
  }, [images]);

  const [positions, setPositions] = useState([]);

  useEffect(() => {
    // Initialize positions array with indices based on cards length
    setPositions(cards.map((value, index) => index));
  }, [cards]); // Update positions when cards change

  const shuffleArray = (array) => {
    let shuffledArray = array.slice(0);
    for (let i = 0; i < shuffledArray.length; i++) {
      const j = Math.floor(Math.random() * shuffledArray.length);
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const randomiseCards = () => {
    setPositions(shuffleArray(positions));
  };

  return (
    <div id="card-grid">
      {positions.map((position) => {
        const card = cards[position];
        return (
          <Card
            key={card.id}
            image={card.image}
            reset={props.reset}
            incrementScore={props.incrementScore}
            endStage={props.endStage}
            randomiseCards={randomiseCards}
          />
        );
      })}
    </div>
  );
};

GameBoard.propTypes = {
  number: PropTypes.number,
  endStage: PropTypes.func,
  incrementScore: PropTypes.func,
  reset: PropTypes.bool,
};

export default GameBoard;
