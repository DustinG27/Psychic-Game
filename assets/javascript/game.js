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
var losses = 0;
var guessedLetters = [];
var guessesLeft = 9;
var secretLetter = [];

// Create variables that hold references to the places in the HTML where we want to display things.

var winsText = document.getElementById("wins-text");

var lossesText = document.getElementById("losses-text");
var guessesText = document.getElementById("guess-left");

// generates a random letter for the computer

var secretLetter = getRandomLetter();

function getRandomLetter() {
  var random =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];
  return random;
}
console.log(secretLetter);

// functions that will keep track of user guesses and guesses left

function trackGuessesLeft() {
  document.querySelector("#guess-left").innerHTML =
    "Guesses left: " + guessesLeft;
}

function trackUserGuess() {
  document.querySelector("#user-Guess").innerHTML =
    "You guessed: " + guessedLetters.join(", ");
}

// reset function to exicute when if statement is completed

var reset = function() {
  guessedLetters = [];
  guessesLeft = 9;
  secretLetter = [];
};

// when user clicks they will log their guess vs the secretLetter

document.onkeyup = function(event) {
  // start of the game on key up

  var userGuess = event.key.toLowerCase();

  guessesLeft--;

  // runs the function to keep track of user guesses

  guessedLetters.push(userGuess);
  trackUserGuess();
  trackGuessesLeft();

  // where the game will compare user to computer

  if (userGuess === secretLetter) {
    wins++;
    winsText.textContent = "wins: " + wins;
    reset();
    console.log("you win " + wins);
  } else if (guessesLeft === 0) {
    losses++;
    lossesText.textContent = "Losses: " + losses;
    reset();
    console.log("you lose " + losses);
  }
};
