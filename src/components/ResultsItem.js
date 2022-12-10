import React from "react";
import classes from './ResultsItem.module.css';
import { useGlobalContext } from "../context";

function ResultsItem({ name, img, omen, fortune_telling, keywords }) {
  const { checkedCards } = useGlobalContext();

  return (
    <article className={classes['results__item']}>
      <div className={classes['results__card']}>
        <img src={img} alt={name}></img>
      </div>
      <div className={classes['results__desc']}>
        <p>
          <span className={classes['results__data']}>Nazwa: </span>
          {name}
        </p>
        <p>
          <span className={classes['results__data']}>Dobry czy zły znak?: </span>
          {omen}
        </p>
        <p>
          <span className={classes['results__data']}>Przesłanie: </span>
          {fortune_telling}
        </p>
        <p>
          <span className={classes['results__data']}>Skojarzone słowa: </span>
          {keywords}
        </p>
      </div>
    </article>
  );
}

export default ResultsItem;
