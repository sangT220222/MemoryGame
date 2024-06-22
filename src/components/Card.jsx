import { useState } from "react";
import PropTypes from "prop-types";

const Card = ({ image, id, onClick }) => {
  const { wasClicked, setWasClicked } = useState(false);

  const handleClick = () => {
    if (!wasClicked) {
      setWasClicked(true);
      onClick(id);
    }
  };
  return (
    <div className="card" onClick={handleClick}>
      <img src={image} alt="Pokemon" />
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  id: PropTypes.number,
  onClick: PropTypes.func,
  //   reset: PropTypes.bool,
  //   endCurrentStage: PropTypes.func,
  //   incrementScore: PropTypes.func,
  //   randomizeCards: PropTypes.func,
};

export default Card;
