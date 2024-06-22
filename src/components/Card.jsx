import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Card = (props) => {
  const [wasClicked, setWasClicked] = useState(false);

  const handleClick = () => {
    setWasClicked(!wasClicked);

    if (wasClicked) {
      props.endStage();
    } else {
      props.incrementScore();
    }
    props.randomiseCards();
  };

  useEffect(() => {
    if (props.reset) {
      setWasClicked(false);
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
