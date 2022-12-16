import React from "react";
import classes from "./ResultsItem.module.css";

function ResultsItem({ name, img, omen, fortune_telling, keywords }) {
  return (
    <article className={classes["results__item"]}>
      <div className={classes["results__card"]}>
        <img src={img} alt={name}></img>
      </div>
      <div className={classes["results__desc"]}>
        <div className={classes["results__wrapper"]}>
          <span className={classes["results__data"]}>Nazwa: </span>
          {name}
        </div>
        <div className={classes["results__wrapper"]}>
          <span className={classes["results__data"]}>Dobry/zły: </span>
          {omen}
        </div>
        <div className={classes["results__wrapper"]}>
          <span className={classes["results__data"]}>Przesłanie: </span>
          <ul>
            {fortune_telling.map((fortune, id) => (
              <li key={id}>{fortune}</li>
            ))}
          </ul>
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
