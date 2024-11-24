  
let randomNumber =Math.round((Math.random()*100)+1) ;

console.log(randomNumber);
const userInput = document.querySelector('#guessfield');
const submit = document.querySelector('#subt');
const getSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHigh');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p'); 

let previousGuess = [];
let play = true;
let attempts = 1;

if(play){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateCheck(guess);
    
    })
}


function validateCheck(guess){
    if(isNaN(guess) || guess>100 || guess<1){
        alert("Enter a valid number");
    }else{
        previousGuess.push(guess);
        if(attempts >= 10){
            displayGuess(guess);
            displayMesssage(`Game Over ! Correct number is ${randomNumber}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
            
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMesssage(`You guessed it right`);
        endGame();
    }else if(guess < randomNumber){
        displayMesssage(`You guess smaller number`);
    }else{
        displayMesssage(`You guess greater number`);
    }
}

function displayGuess(guess){
    userInput.value = '';
    getSlot.innerHTML += `${guess}  `;
    remaining.innerHTML = `${10-attempts}`;
    attempts++;
}

function displayMesssage(message){
    lowOrHi.innerHTML = `<h3>${message}</h3>`;
}

function endGame(){
    userInput.value='';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h3 id="newGame">Start new Game`;
    startOver.appendChild(p);
    play = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(){
        randomNumber = Math.round((Math.random()*100)+1) ;
        previousGuess = [];
        attempts = 1;
        getSlot.innerHTML = '';
        remaining.innerHTML = `${11-attempts}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        lowOrHi.innerHTML = `<h3>Welcome Back </3>`;
        play = true;
        
    })
}