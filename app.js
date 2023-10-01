'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess)

    if (!guess) {
        displayMessage(' 🚫 Put a valid number!');
    }
    else if (guess === secretNumber) {
        displayMessage(' 🎉 Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.highscore').textContent = score;
        document.querySelector('body').style.backgroundColor = '#60b347';

    }
    else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? ' 📈 Too High!' : ' 📉 Too Law!')
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            displayMessage(' 🎮 You lost the game!');
            document.querySelector('.score').textContent = 0;
        }

    }
}



);

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    displayMessage('Start guessing...');
    document.querySelector('.guess').value = '';
    document.getElementById('check__btn').disabled = false;
    document.querySelector('body').style.backgroundColor = '#222';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('body').style.backgroundColor = '#051f30';
}
);




