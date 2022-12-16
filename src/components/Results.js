import React from "react";
import ResultsItem from "./ResultsItem";
import Bar from "./Bar";
import classes from "./Results.module.css";
import { useGlobalContext } from "../context";
import { useEffect, useRef } from "react";

function Results() {
  const {
    checkedCards,
    isPickingActive,
    setIsPickingActive,
    result,
    numerOfCardsToDisplay,
  } = useGlobalContext();
  const resultHeader = useRef();
  const executeScroll = () =>
    resultHeader.current.scrollIntoView({ behavior: "smooth", block: "start" });

  useEffect(() => {
    if (checkedCards.length >= numerOfCardsToDisplay / 2) {
      setIsPickingActive(false);
      executeScroll();
    }
  }, [checkedCards]);

  return (
    <div ref={resultHeader} className={classes.results}>
      {!isPickingActive && (
        <h2 className={classes["results__header"]}>
          {result === 50
            ? "Karty nie są zdecydowane"
            : `Twója wróżba to: ${result > 50 ? "TAK" : "NIE"}`}
        </h2>
      )}
      <Bar />
      {checkedCards.map((item) => (
        <ResultsItem key={item.name} {...item} />
      ))}
    </div>
  );
}

export default Results;
