// Created array for computer to choose from
var computerChoices = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

// variables to hold the number of wins, loses, guesses, and guess attempts
var wins = 0;
var loses = 1;
var counter = 0;
var guessedLetters = [];
var Maxtries = 9;
var secretLetter = [];

var winsText = document.getElementById("wins-text");
var userGuess = document.getElementById("user-guess");
var lossesText = document.getElementById("losses-text");

// generates a random letter for the computer

var secretLetter = getRandomLetter();
function getRandomLetter() {
  var random =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];
  return random;
}
console.log(secretLetter);

//  starting the game with user input
document.onkeyup = function(event) {
  userGuess = event.key;
  // max tries will go down to 0, when it does it restarts
  Maxtries--;
  console.log(Maxtries);
  // testing user guess to the secret letter
  if (userGuess === secretLetter) {
    wins++;
    Maxtries = 9;
    console.log("You win! " + wins);
  } else if (Maxtries === 0) {
    console.log("You lose " + loses);
    Maxtries = 9;
    loses++;
    guessedLetters.length = 0;
    console.log(loses);
    console.log(guessedLetters);
  }
};

winsText.textContent = "wins " + wins;
userGuess.textContent = "You guessed " + guessedLetters;
lossesText.textContent = "Lose: " + loses;
