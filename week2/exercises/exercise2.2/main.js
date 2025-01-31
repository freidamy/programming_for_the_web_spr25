// array of games
const gameCollection = [
    {
        title: "Mario Kart",
        type: "action-adventure",
        numberOfPlayers: 4,
        rating: "E",
        shortDescription: "A fun and timeless racing game"
    },

    {
        title: "It Takes Two",
        type: "action-adventure",
        numberOfPlayers: 2,
        rating: "PEGI 12",
        shortDescription: "A fun 2 player game where a wife & husband have to get back to their daughter"
    },

    {
        title: "The Sims",
        type: "social simulation",
        numberOfPlayers: 8,
        rating: "PEGI 12",
        shortDescription: "A creative building game where you can craft and explore"
    }
];

// prompt
let userChoice = prompt("I have 3 games in my collection. Pick a number between 1 and 3 and I'll tell you about that game");

userChoice = Number(userChoice);

// final message
alert("You selected " + gameCollection[userChoice - 1].title + 
      " which is a " + gameCollection[userChoice - 1].type + 
      " game. It can be played by " + gameCollection[userChoice - 1].numberOfPlayers + 
      " player(s). The game is rated " + gameCollection[userChoice - 1].rating + 
      ". Here's a short description: " + gameCollection[userChoice - 1].shortDescription);