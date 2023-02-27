import React from "react";
import Card from "./Card";
import classes from "./Cards.module.css";
import { useGlobalContext } from "../context";

export const Cards = () => {
  const { cardsToPlay } = useGlobalContext();

  return (
    <main>
      <div className={classes["cards"]}>
        {cardsToPlay.map((card) => {
          return <Card key={card.name} {...card} />;
        })}
      </div>
    </main>
  );
};

export default Cards;
