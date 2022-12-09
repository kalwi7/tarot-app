import React from "react";
import ResultsItem from "./ResultsItem";
import { useGlobalContext } from "../context";

function Results() {
  const { checkedCards } = useGlobalContext();

  return (
    <div className="results">
      {checkedCards.map((item) => (
        <ResultsItem {...item} />
      ))}
    </div>
  );
}

export default Results;
