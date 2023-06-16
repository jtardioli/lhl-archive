let prompt = require("prompt-sync")({ sigint: true });

const min = 1;
const max = 100;
// Generate Random Number
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let regex = /\d/;
let num = randomIntFromInterval(min, max);

// Game
let counter = 1;
while (true) {
  console.log("Guess a number:");
  let guess = Number(prompt("> "));

  if (!regex.test(guess)) {
    console.log("Not a number! Try again!");
  } else if (num === guess) {
    break;
  } else if (num < guess) {
    console.log("Too High!");
  } else if (num > guess) {
    console.log("Too Low!");
  }

  counter++;
}

console.log(`You got it! You took ${counter} attempts!`);
