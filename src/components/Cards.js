import React from "react";
import Card from "./Card";
import classes from "./Cards.module.css";
import { useGlobalContext } from "../context";

export const Cards = () => {
  const { cardsToPlay } = useGlobalContext();

  return (
    <main>
      <h1 className={classes["cards__title"]}>Tarot TAK/NIE</h1>
      <h2 className={classes["cards__subtitle"]}>Wybierz karty do wróżby</h2>
      <div className={classes["cards"]}>
        {cardsToPlay.map((card) => {
          return <Card key={card.name} {...card} />;
        })}
      </div>
    </main>
  );
};

export default Cards;
