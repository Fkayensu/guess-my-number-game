'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🥳 Correct Number!';

document.querySelector('.number').textContent = 15;

document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;

*/

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
    // document.querySelector('.message').textContent = '🚫 No Number';

    displayMessage('🚫 No Number');

    // when player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.number').textContent = secretNumber;
    updateNumber(secretNumber);
    // document.querySelector('.message').textContent = '🎊 Correct Number';
    displayMessage('🎊 Correct Number');

    //document.querySelector('body').style.backgroundColor = '#60b347';

    changeBackgroundColor('#60b347');
    //document.querySelector('.number').style.width = '30rem';
    changeNumberWidth('30rem');

    highScore = Math.max(score, highScore);
    //document.querySelector('.highscore').textContent = highScore;
    updateHighScore(highScore);

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? '📈Guess is too high!' : '📉Guess is too low!';
      displayMessage(
        guess > secretNumber ? '📈Guess is too high!' : '📉Guess is too low!'
      );
      score--;
      //document.querySelector('.score').textContent = score;
      updateScore(score);
    } else {
      //   document.querySelector('.message').textContent = 'You lost the game 😔';
      displayMessage('😔 You lost the game');
      //document.querySelector('.score').textContent = 0;
      updateScore(0);
    }
  }
  // when guess is too high
  //   } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📈Guess is too high!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game 😔';
  //       document.querySelector('.score').textContent = 0;
  //     }

  //     // when guess is too low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📉Guess is too low!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '😔 You lost the game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  //document.querySelector('.number').textContent = '?';
  updateNumber('?');
  //document.querySelector('.score').textContent = score;
  updateScore(score);
  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});
