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

document.querySelector(".check").addEventListener("click", function () {
  const yourGuess = Number(document.querySelector(".guess").value);

  //When there is no input
  if (!yourGuess) {
    // document.querySelector(".message").textContent = "⛔ No number!";
    classMessage("⛔ No number!");
  } else if (yourGuess === secretNumber) {
    // document.querySelector(".message").textContent = "💯✅Correct Number!🎊";
    classMessage("💯✅Correct Number!🎊");

    // document.querySelector(".number").textContent = secretNumber;
    classNumber("secretNumber");

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (yourGuess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   yourGuess > secretNumber ? "📈 Too high!" : "📉 Too low!";
      classMessage(yourGuess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      // document.querySelector(".score").textContent = score;
      classScore("score");
    } else {
      // document.querySelector(".message").textContent = "💥 You lost the game!";
      classMessage("💥 You lost the game!");
      // document.querySelector(".score").textContent = 0;
      classScore(0);
    }
  }
});
// for Try Again!!!!
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector(".message").textContent = "Start guessing...";
  classMessage("Start guessing...");

  // document.querySelector(".score").textContent = score;
  classScore("score");
  // document.querySelector(".number").textContent = "?";
  classNumber("?");
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
