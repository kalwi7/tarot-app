import React from "react";
import { useGlobalContext } from "../context";
import classes from "./Card.module.css";
import { useState } from "react";

const Card = ({ name, love, img, love_reverse, keywords }) => {
  const [turnedCard, setTurnedCard] = useState(false);
  const [isCardReversed, setIsCardReversed] = useState(
    Math.random() >= 0.65 ? true : false
  );

  const {
    setCheckedCards,
    checkedCards,
    numerOfCardsToDisplay,
    setIsPickingActive,
  } = useGlobalContext();

  const pickingCardHandler = () => {
    if (checkedCards.length === numerOfCardsToDisplay) {
      setIsPickingActive(false);
      return;
    }

    for (let cards of checkedCards) {
      if (cards.name === name) return;
    }

    let newCards = [
      { name, img, love, love_reverse, keywords, isCardReversed },
    ];
    newCards.push(...checkedCards);
    setCheckedCards(newCards);
    setTurnedCard(true);
  };
  return (
    <>
      <div
        className={`
        ${
          turnedCard
            ? `${classes["card"]} ${classes["card--active"]}`
            : `${classes["card"]}`
        } 
        ${
          turnedCard && isCardReversed
            ? `${classes["card"]} ${classes["card--active"]} ${classes["card--reversed"]}`
            : `${classes["card"]}`
        }
        `}
        onClick={pickingCardHandler}
      >
        <div
          className={`${classes["card__side"]} ${classes["card__side--front"]}`}
        >
          <img
            className={classes["card__image"]}
            src="https://www.myslczlowieku.pl/wp-content/uploads/2023/02/karta.jpg"
            alt={name}
          ></img>
        </div>
        <div
          className={`${classes["card__side"]} ${classes["card__side--back"]}`}
        >
          <img className={classes["card__image"]} src={img} alt={name}></img>
        </div>
      </div>
    </>
  );
};

export default Card;
