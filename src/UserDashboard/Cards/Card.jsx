import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="card">
      <h3 className="card__title">Card Title</h3>
      <p className="card__description">
        This is the content of the card. You can add any information or
        components here.
      </p>
    </div>
  );
};

export default Card;