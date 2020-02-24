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
var loses = 0;
var counter = 0;
var guessedLetters = [];
var Maxtries = 9;
var secretLetter = [];

var winsText = document.getElementById("wins-text");

// generates a random letter for the computer

var secretLetter = getRandomLetter();

function getRandomLetter() {
  var random =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];
  return random;
}
console.log(secretLetter);

//  this is where the working game is
document.onkeyup = function(event) {
  userGuess = event.key;
  Maxtries--;
  console.log(Maxtries);
  if (userGuess === secretLetter) {
    wins++;
    alert("You win! " + wins);

    //
    //    function displayOutput() {}
    //
  } else if (Maxtries === 0) {
    console.log("You lose");
    Maxtries = 9;
  } 
};
winsText.innerHTML = "wins " + wins;
