import React from "react";
import { useGlobalContext } from "../context";

const Card = ({ name, omen, img, fortune_telling, keywords }) => {
  const {
    setCheckedCards,
    checkedCards,
    numerOfCardsToDisplay,
    setIsPickingActive,
    isPickingActive,
  } = useGlobalContext();

  const pickingCardHandler = () => {
    if (checkedCards.length >= numerOfCardsToDisplay / 2) {
      setIsPickingActive(false);
      return;
    }
    if (checkedCards.includes(name)) return;

    let newCards = [{ name, img, omen, fortune_telling, keywords }];
    newCards.push(...checkedCards);
    setCheckedCards(newCards);
  };

  console.log(checkedCards);

  if (!isPickingActive) {
  }

  return (
    <>
      <div className="card" onClick={pickingCardHandler}>
        <div className="card__side card__side--front">
          <img className="card__image" src={img} alt={name}></img>
        </div>
        <div className="card__side card__side--back">
          <img className="card__image" src={img} alt={name}></img>
        </div>
      </div>
    </>
  );
};

export default Card;
