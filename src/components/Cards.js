import React from "react";
import Card from "./Card";
import { useGlobalContext } from "../context";

export const Cards = () => {
  const { cardsToPlay } = useGlobalContext();

  return (
    <main>
      <div className="cards-area">
        {cardsToPlay.map((card) => {
          return <Card {...card} />;
        })}
      </div>
    </main>
  );
};

export default Cards;
