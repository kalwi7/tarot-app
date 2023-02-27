import React, { useState, useContext, useEffect } from "react";
import data from "./data";

const AppContext = React.createContext();

const { cards } = data;
const numerOfCardsToDisplay = 5;

let cardsToPlay = [];
while (cardsToPlay.length < numerOfCardsToDisplay) {
  const randomCard = cards[Math.floor(Math.random() * cards.length)];
  if (cardsToPlay.indexOf(randomCard) === -1) cardsToPlay.push(randomCard);
}

const AppProvider = ({ children }) => {
  const [checkedCards, setCheckedCards] = useState([]);
  const [isPickingActive, setIsPickingActive] = useState(true);

  return (
    <AppContext.Provider
      value={{
        checkedCards,
        setCheckedCards,
        cardsToPlay,
        numerOfCardsToDisplay,
        setIsPickingActive,
        isPickingActive,
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
