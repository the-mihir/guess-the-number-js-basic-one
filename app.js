'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess)

    if (!guess) {
        document.querySelector('.message').textContent = ' 🚫 Put a valid number!';
    }
    else if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.message').textContent = ' 🎉 You get Correct number';
        document.querySelector('.highscore').textContent = score;
        document.querySelector('body').style.backgroundColor = '#60b347';
    }

    else if (guess !== secretNumber) {
        if (score >= 1) {
            document.querySelector('.message').textContent = guess > secretNumber ? ' 📈 Too High!' : ' 📉 Too Law!';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = ' 🎮 You lost the game!';
            document.getElementById('check__btn').disabled = true;
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
    document.getElementById('check__btn').disabled = false;
    document.querySelector('body').style.backgroundColor = '#222';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
}
);




