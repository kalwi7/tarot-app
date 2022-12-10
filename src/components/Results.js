import React from "react";
import ResultsItem from "./ResultsItem";
import classes from './Results.module.css';
import { useGlobalContext } from "../context";

function Results() {
  const { checkedCards } = useGlobalContext();

  return (
    <div className={classes['results']}>
      {checkedCards.map((item) => (
        <ResultsItem {...item} />
      ))}
    </div>
  );
}

export default Results;
