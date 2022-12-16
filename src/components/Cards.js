import React from "react";
import Card from "./Card";
import classes from "./Cards.module.css";
import { useGlobalContext } from "../context";

export const Cards = () => {
  const { cardsToPlay } = useGlobalContext();

  return (
    <main>
      <h2>Tarot TAK/NIE</h2>
      <h3>Wybierz karty do wróżby</h3>
      <div className={classes["cards-area"]}>
        {cardsToPlay.map((card) => {
          return <Card key={card.name} {...card} />;
        })}
      </div>
    </main>
  );
};

export default Cards;
