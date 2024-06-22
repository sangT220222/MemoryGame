import { useEffect, useState } from "react";

//get random number for pokemon
const getRandomNumbers = (count, min, max) => {
  const numbers = new Set();
  while (numbers.size < count) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    numbers.add(randomNumber);
  }
  return Array.from(numbers);
};

const GetPokemonImages = ({ number }) => {
  const [images, setImages] = useState([]);
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(null);

  useEffect(() => {
    const getImages = async () => {
      //   try {
      const randomNumbers = getRandomNumbers(number, 1, 999);
      const pokemons = randomNumbers.map((num) => {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
          .then((response) => response.json())
          .then((data) => data.sprites.front_default);
      });
      const pokemonData = await Promise.all(pokemons);
      const images = pokemonData;
      setImages(images); //setting it to the state
      //   } catch (err) {
      //     setError(err.message);
      //   } finally {
      //     setLoading(false);
      //   }
    };
    getImages();
  }, [number]);
  return { images };
};

export default GetPokemonImages;
