import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Get the game state from the NodeJS backend
    axios.get("/game-state").then((response) => {
      setCards(response.data.cards);
    });
  }, []);

  // Create a function to flip a card
  const flipCard = (card) => {
    // Set the card's flipped state to the opposite of what it is currently
    setCards((prevCards) => {
      const updatedCards = [...prevCards];
      updatedCards[card.index] = {
        ...updatedCards[card.index],
        flipped: !updatedCards[card.index].flipped,
      };
      return updatedCards;
    });
  };

  // Create a function to check if two cards match
  const checkMatch = (card1, card2) => {
    return card1.textContent === card2.textContent;
  };

  // Create a function to remove two cards from the game board
  const removeCards = (card1, card2) => {
    // Set the cards' flipped states to false
    setCards((prevCards) => {
      const updatedCards = [...prevCards];
      updatedCards[card1.index] = {
        ...updatedCards[card1.index],
        flipped: false,
      };
      updatedCards[card2.index] = {
        ...updatedCards[card2.index],
        flipped: false,
      };
      return updatedCards;
    });
  };

  return (
    <div>
      <h1>Match Game</h1>
      <div className="game-board">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card ${card.flipped ? "flipped" : ""}`}
            onClick={() => flipCard(card)}
          >
            {card.textContent}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
