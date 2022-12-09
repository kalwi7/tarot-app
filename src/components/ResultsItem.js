import React from "react";
import { useGlobalContext } from "../context";

function ResultsItem({ name, img, omen, fortune_telling, keywords }) {
  const { checkedCards } = useGlobalContext();

  return (
    <article className="results__item">
      <div className="results__card">
        <img src={img} alt={name}></img>
      </div>
      <div className="results__desc">
        <p>
          <span className="results__data">Nazwa: </span>
          {name}
        </p>
        <p>
          <span className="results__data">Dobry czy zły znak?: </span>
          {omen}
        </p>
        <p>
          <span className="results__data">Przesłanie: </span>
          {fortune_telling}
        </p>
        <p>
          <span className="results__data">Skojarzone słowa: </span>
          {keywords}
        </p>
      </div>
    </article>
  );
}

export default ResultsItem;
