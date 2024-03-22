let randomNumber = parseInt(Math.random()* 100 +1)

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessfield');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrheigh = document.querySelector('.lowOrHigh');
const resultParas = document.querySelector('.resultParas');

const p = document.createElement('p');

let preGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number');
    } else if(guess < 1){
        alert('Please enter a number more than 1');
    } else if(guess > 100){
        alert('Please enter a number less than 100');
    }else {
        preGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over. Random Number was ${randomNumber}`);
            endGame();
        } else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}
function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right`);
        endGame();
    } else if(guess < randomNumber){
        displayMessage(`Number id too low`);
    } else if(guess > randomNumber){
        displayMessage(`Number is too high`);
    }
}
function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${10 - numGuess}`;
}
function displayMessage(message){
    lowOrheigh.innerHTML = `<h2>${message}</h2>`;
}
function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.className.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}
function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random()* 100 +1);
        preGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${10 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}