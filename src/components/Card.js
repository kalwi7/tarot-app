import React from "react";
import { useGlobalContext } from "../context";
import classes from "./Card.module.css";
import { useState } from "react";

const Card = ({ name, omen, img, fortune_telling, keywords }) => {
  const [turnedCard, setTurnedCard] = useState(false);

  const {
    setCheckedCards,
    checkedCards,
    numerOfCardsToDisplay,
    setIsPickingActive,
    isPickingActive,
    goodFortunePicked,
    badFortunePicked,
  } = useGlobalContext();

  const pickingCardHandler = () => {
    if (checkedCards.length >= numerOfCardsToDisplay / 2) {
      setIsPickingActive(false);
      return;
    }

    for (let cards of checkedCards) {
      if (cards.name === name) return;
    }

    let newCards = [{ name, img, omen, fortune_telling, keywords }];
    newCards.push(...checkedCards);
    setCheckedCards(newCards);
    setTurnedCard(true);

    if (omen === "dobry") {
      goodFortunePicked();
    }

    if (omen === "zły") {
      badFortunePicked();
    }
  };

  return (
    <>
      <div
        className={
          turnedCard
            ? `${classes["card"]} ${classes["card--active"]}`
            : `${classes["card"]}`
        }
        onClick={pickingCardHandler}
      >
        <div
          className={`${classes["card__side"]} ${classes["card__side--front"]}`}
        >
          <img
            className={classes["card__image"]}
            src="https://www.myslczlowieku.pl/wp-content/uploads/2022/12/karta-e1670882526773.png"
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
