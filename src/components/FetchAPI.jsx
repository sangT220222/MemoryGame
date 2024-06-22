import { useEffect, useState } from "react";

//get random number for pokemon
const getRandomNumbers = (count, min, max) => {
  const numbers = Set();
  while (numbers.size < count) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    numbers.add(randomNumber);
  }
  return Array.from(numbers);
};

const GetPokemonImages = ({ number }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getImages = async () => {
      try {
        const randomNumbers = getRandomNumbers(number, 1, 999);
        const pokemons = randomNumbers.map((num) => {
          fetch(`https://pokeapi.co/api/v2/pokemon/${num}`).then(
            (response) => response.json
          );
        });
        const pokemonData = await Promise.all(pokemons);
        const images = pokemonData.map(
          (pokemon) => pokemon.sprites.front_default
        );
        setImages(images); //setting it to the state
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getImages();
  }, [number]);

  return { images, loading, error };
};

export default GetPokemonImages;
