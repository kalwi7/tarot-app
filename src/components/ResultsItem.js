import React from "react";
import classes from "./ResultsItem.module.css";

function ResultsItem({ name, img, omen, fortune_telling, keywords }) {
  return (
    <article className={classes["results__item"]}>
      <div className={classes["results__card"]}>
        <img src={img} alt={name}></img>
      </div>
      <div className={classes["results__desc"]}>
        <p>
          <span className={classes["results__data"]}>Nazwa: </span>
          {name}
        </p>
        <p>
          <span className={classes["results__data"]}>Dobry/zły: </span>
          {omen}
        </p>
        <p>
          <span className={classes["results__data"]}>Przesłanie: </span>
          <ul>
            {fortune_telling.map((fortune) => (
              <li>{fortune}</li>
            ))}
          </ul>
        </p>
        <p>
          <span className={classes["results__data"]}>Skojarzone słowa: </span>
          <ul>
            {keywords.map((word) => (
              <li>{word}</li>
            ))}
          </ul>
        </p>
      </div>
    </article>
  );
}

export default ResultsItem;
