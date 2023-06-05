"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const classMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const classScore = function (score) {
  document.querySelector(".score").textContent = score;
};

const classNumber = function (number) {
  document.querySelector(".score").textContent = number;
};

const bodybackgroundColor = function (colorName) {
  document.querySelector("body").style.backgroundColor = colorName;
};

const guessNumberStyle = function (styleWidth) {
  document.querySelector(".number").style.width = styleWidth;
};

document.querySelector(".check").addEventListener("click", function () {
  const yourGuess = Number(document.querySelector(".guess").value);

  //When there is no input
  if (!yourGuess) {
    classMessage("⛔ No number!");

    // When player wins
  } else if (yourGuess === secretNumber) {
    classMessage("💯✅Correct Number!🎊");
    classNumber("secretNumber");

    bodybackgroundColor("#60b347");
    guessNumberStyle("30rem");

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    // When guess is wrong
  } else if (yourGuess !== secretNumber) {
    if (score > 1) {
      classMessage(yourGuess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      classScore("score");
    } else {
      classMessage("💥 You lost the game!");
      classScore(0);
    }
  }
});
// for Try Again!!!!
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  classMessage("Start guessing...");
  classScore("score");
  classNumber("?");
  document.querySelector(".guess").value = "";

  bodybackgroundColor("#222");
  guessNumberStyle("15rem");
});
