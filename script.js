"use strict";

let guessNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const display = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    display("⛔️ No number!");
  } else if (guess === guessNumber) {
    display("🎉 Correct Number!");
    document.querySelector(".number").textContent = guessNumber;
    document.querySelector(".number").style.width = "30rem";
    document.querySelector("body").style.backgroundColor = "#60b347";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== guessNumber) {
    if (score > 1) {
      display(guess > guessNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      display("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  let secretNumber = Math.trunc(Math.random() * 20) + 1;
  display("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
