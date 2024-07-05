import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../styles/Card.css";

const Card = (props) => {
  const [wasClicked, setWasClicked] = useState(false);

  const handleClick = () => {
    setWasClicked(!wasClicked); //always opposite of each other

    if (wasClicked) {
      props.endStage(); //endStage() is initialised in the App.jsx file - parent/main function
    } else {
      props.incrementScore(); //incrementScore is initialised in the App.jsx file - parent/main function
    }
    props.randomiseCards(); //randomiseCards() is initialised in the App.jsx file - parent/main function
  };

  useEffect(() => {
    if (props.reset) {
      setWasClicked(false); //setWasClicked inital value is false, wasClocked is true
    }
  }, [props.reset]);

  return (
    <div className="card" key={props.image} onClick={handleClick}>
      <img src={props.image} alt="Pokemon" />
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  reset: PropTypes.bool,
  endStage: PropTypes.func,
  incrementScore: PropTypes.func,
  randomiseCards: PropTypes.func,
};

export default Card;
