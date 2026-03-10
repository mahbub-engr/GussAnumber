const guessInput = document.getElementById("guessInput");
const submit = document.getElementById("submitGuess");
const resultBox = document.getElementById("resultBox");
const score = document.getElementById("score");
const attempts = document.getElementById("attempts");
const restartGame = document.getElementById("restartGame");;
const guessList = document.getElementById("guessList");
let previousGuss = [];
let numGuss = 1;

let randomNumber = parseInt(Math.random() * 100 + 1)

let playGame = true;

if (playGame) {
    submit.addEventListener("click", (e) => {
        e.preventDefault()
        const guess = parseInt(guessInput.value);
        console.log(guess);
        validateGuses(guess)
    })
}

function validateGuses(guess) {
    //
    if (isNaN(guess)) {
        alert("Please enter a valid number");
    } else if (guess < 1) {
        alert("Please enter  a number more than 1 or equal");
    } else if (guess > 100) {
        alert("Please enter  a number between 1 and 100")
    } else {
        previousGuss.push(guess);
        if (numGuss === 11) {
            displayMessage(`Game over, Random number was ${randomNumber}`);
            endGame()
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}
function checkGuess(guess) {
    //
    if (guess === randomNumber) {
        displayMessage("You guessed it right")
        endGame()
    } else if (guess < randomNumber) {
        displayMessage(`Your guessed is less than randomNumber`)
    } else {
        displayMessage(`Your guessed is getter than randomNumber`)
    }
}
function displayGuess(guess) {

    guessInput.value = '';
const li = document.createElement("li");
    li.innerText = guess;

    guessList.prepend(li);

    numGuss++;

    attempts.innerHTML = `${11 - numGuss}`;
}
function displayMessage(message) {
    //
    resultBox.innerHTML = `${message}`
}

function endGame() {
    //
    guessInput.value = '';
    guessInput.setAttribute('disabled', '');
    playGame = false;
    newGame()
}
function newGame() {
    //
    restartGame.addEventListener("click", (e) => {
        randomNumber = parseInt(Math.random() * 100 + 1)
        previousGuss = [];
        numGuss = 1;
        guessInput.value = '';
        resultBox.innerHTML='Start guessing...';
        attempts.innerHTML = `${11 - numGuss}`;
        guessInput.removeAttribute('disabled');
        guessList.innerHTML='';
        playGame = true
    })

}
newGame()
