import React from "react";
import ResultsItem from "./ResultsItem";
import classes from "./Results.module.css";
import { useGlobalContext } from "../context";
import { useEffect, useState, useRef } from "react";

function Results() {
  const { checkedCards, setIsPickingActive, numerOfCardsToDisplay } =
    useGlobalContext();
  const resultHeader = useRef();
  const executeScroll = () =>
    resultHeader.current.scrollIntoView({ behavior: "smooth", block: "start" });

  useEffect(() => {
    if (checkedCards.length === numerOfCardsToDisplay) {
      setIsPickingActive(false);
      executeScroll();
    }
  }, [checkedCards]);

  return (
    <div ref={resultHeader} className={classes.results}>
      {checkedCards.map((item, index) => (
        <ResultsItem key={item.name} index={index} {...item} />
      ))}
    </div>
  );
}

export default Results;
