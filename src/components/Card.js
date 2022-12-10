import React from "react";
import { useGlobalContext } from "../context";
import classes from './Card.module.css';

const Card = ({ name, omen, img, fortune_telling, keywords }) => {
  const {
    setCheckedCards,
    checkedCards,
    numerOfCardsToDisplay,
    setIsPickingActive,
    isPickingActive,
    setTurnedCard
  } = useGlobalContext();

  const pickingCardHandler = () => {
    if (checkedCards.length >= numerOfCardsToDisplay / 2) {
      setIsPickingActive(false);
      return;
    }
    if (checkedCards.includes(name)) return;

    let newCards = [{ name, img, omen, fortune_telling, keywords, active: true }];
    newCards.push(...checkedCards);
    setCheckedCards(newCards);
    // setTurnedCard(true);
  };

  console.log(checkedCards);

  if (!isPickingActive) {
  }

  return (
    <>
      <div className={classes.card} onClick={pickingCardHandler}>
        <div className={classes['card__side card__side--front']}>
          <img className={classes['card__image']} src={img} alt={name}></img>
        </div>
        <div className={classes['card__side card__side--back']}>
          <img className={classes['card__image']} src={img} alt={name}></img>
        </div>
      </div>
    </>
  );
};

export default Card;
