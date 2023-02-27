import React from "react";
import classes from "./ResultsItem.module.css";

function ResultsItem({
  name,
  img,
  love,
  love_reverse,
  keywords,
  isCardReversed,
  index,
}) {
  function CardLocationDesc() {
    if (index === 0) {
      return "Ta karta odnosi się przyszlości, gdzie zmierza relacja";
    } else if (index === 1) {
      return "Ta karta odnosi się do Partnera/osoby której jesteś ciekawa";
    } else if (index === 2) {
      return "Ta karta odnosi się do aktualnego stanu";
    } else if (index === 3) {
      return " Ta karta odnosi się do Ciebie";
    } else if (index === 4) {
      return "Ta karta odnosi się do sposobu rozpoczęcia relacji";
    }
  }

  return (
    <article className={classes["results__item"]}>
      <div className={classes["results__card"]}>
        <img src={img} alt={name}></img>
      </div>
      <div className={classes["results__desc"]}>
        <div className={classes["results__wrapper"]}>
          <span className={classes["results__data"]}>Położenie karty: </span>
          {<CardLocationDesc />}
        </div>
        <div className={classes["results__wrapper"]}>
          <span className={classes["results__data"]}>Nazwa: </span>
          {`${name} ${
            isCardReversed ? "(pozycja odwrócona)" : "(pozycja prosta)"
          }`}
        </div>
        <div className={classes["results__wrapper"]}>
          <span className={classes["results__data"]}>Przesłanie: </span>
          {isCardReversed ? love_reverse : love}
        </div>

        <div className={classes["results__wrapper"]}>
          <span className={classes["results__data"]}>Skojarzone słowa: </span>
          <ul>
            {keywords.map((word, id) => (
              <li key={id}>{word}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default ResultsItem;
