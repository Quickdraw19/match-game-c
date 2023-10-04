const express = require("express");
const app = express();

// Create an array of cards
const cards = [
  "🍎",
  "🍌",
  "🍒",
  "🍇",
  "🍊",
  "🍋",
  "🍓",
  "🍑",
  "🍐",
  "🍉",
  "Kiwi",
  "Coconut",
  "Mango",
  "Pineapple",
  "Avocado",
  "Papaya",
  "Guava",
];

// Shuffle the cards
function shuffleCards() {
  for (let i = 0; i < cards.length; i++) {
    const randomIndex = Math.floor(Math.random() * cards.length);
    const temp = cards[i];
    cards[i] = cards[randomIndex];
    cards[randomIndex] = temp;
  }
}

// Create a function to check if two cards match
function checkMatch(card1, card2) {
  return card1.textContent === card2.textContent;
}

// Start the game
shuffleCards();

// Create an endpoint to get the game state
app.get("/game-state", (req, res) => {
  res.json({ cards });
});

// Start the NodeJS server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
