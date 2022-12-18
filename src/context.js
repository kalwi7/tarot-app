import React, { useState, useContext } from "react";
import data from "./data2";

const AppContext = React.createContext();

const { cards } = data;
const numerOfCardsToDisplay = 12;

let cardsToPlay = [];
while (cardsToPlay.length < numerOfCardsToDisplay) {
  const randomCard = cards[Math.floor(Math.random() * cards.length)];
  if (cardsToPlay.indexOf(randomCard) === -1) cardsToPlay.push(randomCard);
}

let barData = {
  good: 0,
  bad: 0,
  result: 50,
};

function barReducer(state, action) {
  if (action.type === "dobry") {
    return {
      ...state,
      good: state.good + 1,
      result: Math.round(state.result + (1 / numerOfCardsToDisplay) * 100),
    };
  }
  if (action.type === "zły") {
    return {
      ...state,
      bad: state.bad + 1,
      result: Math.round(state.result - (1 / numerOfCardsToDisplay) * 100),
    };
  }
}

const AppProvider = ({ children }) => {
  const [checkedCards, setCheckedCards] = useState([]);
  const [isPickingActive, setIsPickingActive] = useState(true);
  const [barState, dispatch] = React.useReducer(barReducer, barData);

  const goodFortunePicked = () => {
    dispatch({ type: "dobry" });
  };

  const badFortunePicked = () => {
    dispatch({ type: "zły" });
  };

  return (
    <AppContext.Provider
      value={{
        ...barState,
        checkedCards,
        setCheckedCards,
        cardsToPlay,
        numerOfCardsToDisplay,
        setIsPickingActive,
        isPickingActive,
        goodFortunePicked,
        badFortunePicked,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
