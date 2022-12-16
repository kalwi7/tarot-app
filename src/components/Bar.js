import React, { useEffect } from "react";
import classes from "./Bar.module.css";
import { useGlobalContext } from "../context";
import { useRef } from "react";

const setWidth = (element, newWidth) => {
  element.current.style.width = `${newWidth}%`;
};

const Bar = () => {
  const { result } = useGlobalContext();
  const element = useRef();

  useEffect(() => setWidth(element, result), [element, result]);

  return (
    <div className={classes.container}>
      <div
        ref={element}
        className={`${classes.filler} ${
          result > 50 ? classes["filler--green"] : classes["filler--red"]
        }`}
      >
        <span className={classes.label}>{result}%</span>
      </div>
    </div>
  );
};

export default Bar;
