// import { useState, useEffect } from "react";
// import GetPokemonImages from "./FetchAPI";
// import Card from "./Card";
// import PropTypes from "prop-types";

// const GameBoard = ({ number }) => {
//   const cards = GetPokemonImages({ number });

//   const [positions, setPositions] = useState(
//     cards.map((value, index) => index)
//   );

//   useEffect(() => {
//     // Initialize positions array with indices based on images length
//     setPositions(cards.map((value, index) => index));
//   }, [cards]); // Update positions when images change

//   const shuffleArray = (array) => {
//     let shuffledArray = array.slice(0);
//     for (let i = 0; i < shuffledArray.length; i++) {
//       const j = Math.floor(Math.random() * shuffledArray.length);
//       [shuffledArray[i], shuffledArray[j]] = [
//         shuffledArray[j],
//         shuffledArray[i],
//       ];
//     }
//     return shuffledArray;
//   };

//   const randomisedCards = () => {
//     setPositions(shuffleArray(positions));
//   };

//   const handleCardClick = (id) => {
//     console.log(`Clicked card with ID: ${id}`);
//     // Implement your game logic here
//   };

//   return (
//     <div id="card-grid">
//       {positions.map((position) => {
//         return (
//           <Card
//             key={cards[position]}
//             image={cards[position]}
//             id={position}
//             onClick={handleCardClick}
//           />
//         );
//       })}
//       <button onClick={randomisedCards}>Randomize Cards</button>
//     </div>
//   );
// };

// GameBoard.propTypes = {
//   number: PropTypes.number,
//   //   reset: PropTypes.bool,
//   //   endCurrentStage: PropTypes.func,
//   //   incrementScore: PropTypes.func,
//   //   randomizeCards: PropTypes.func,
// };

// export default GameBoard;

import { useState, useEffect } from "react";
import GetPokemonImages from "./FetchAPI";
import Card from "./Card";
import PropTypes from "prop-types";

const GameBoard = ({ number }) => {
  const { images } = GetPokemonImages({ number }); // Destructure images from the result of GetPokemonImages

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

  const randomisedCards = () => {
    setPositions(shuffleArray(positions));
  };

  const handleCardClick = (id) => {
    console.log(`Clicked card with ID: ${id}`);
    // Implement your game logic here
  };

  return (
    <div id="card-grid">
      {positions.map((position) => {
        const card = cards[position];
        return (
          <Card
            key={card.id}
            image={card.image}
            id={card.id}
            onClick={handleCardClick}
          />
        );
      })}
      <button onClick={randomisedCards}>Randomize Cards</button>
    </div>
  );
};

GameBoard.propTypes = {
  number: PropTypes.number,
};

export default GameBoard;
