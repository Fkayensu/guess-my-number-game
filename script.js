'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = Number(document.querySelector('.score').textContent);
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const updateNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const updateScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const updateHighScore = function (highScore) {
  document.querySelector('.highscore').textContent = highScore;
};

const changeBackgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const changeNumberWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  // when there is no input
  if (!guess) {
    displayMessage('🚫 No Number');

    // when player wins
  } else if (guess === secretNumber) {
    updateNumber(secretNumber);
    displayMessage('🎊 Correct Number');
    changeBackgroundColor('#60b347');
    changeNumberWidth('30rem');
    highScore = Math.max(score, highScore);
    updateHighScore(highScore);

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? '📈Guess is too high!' : '📉Guess is too low!'
      );
      score--;
      updateScore(score);
    } else {
      displayMessage('😔 You lost the game');
      updateScore(0);
    }
  }
});

// play another round
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage('Start guessing...');
  updateNumber('?');
  updateScore(score);
  changeBackgroundColor('#222');
  document.querySelector('.guess').value = '';
  changeNumberWidth('15rem');
});
