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
var counter = 0;
var guessedLetters = [];
var guessesLeft = 9;
var secretLetter = [];

// Create variables that hold references to the places in the HTML where we want to display things.

var winsText = document.getElementById("wins-text");
var userChoiceText = document.getElementById("user-Guess");
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

// when user clicks they will log their guess vs the secretLetter

document.onkeyup = function(event) {
  var userGuess = event.key;

  if (userGuess === secretLetter) {
    wins++;
    console.log("you win " + wins);
  } else {
    guessedLetters++;
    guessesLeft--;
    console.log(guessesLeft);
    if (guessesLeft === 0) {
      losses++;
      guessesLeft = 9;
      console.log("you lose " + losses);
    }
  }

  userChoiceText.textContent = "You guessed " + userGuess;
  winsText.textContent = "wins: " + wins;
  guessesText.textContent = "Guesses left: " + guessesLeft;
  lossesText.textContent = "Losses: " + losses;
};
/*  var secretLetter = getRandomLetter();
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

*/
