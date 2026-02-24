let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#submit')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHigh')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numOfGess = 1

let playGame = true

if (playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        // console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert(`Please enter a valid number!`)
    } else if (guess < 1) {
        alert(`Please enter a number more than 1!`)
    } else if (guess > 100) {
        alert(`Please enter a number less than 100!`)
    } else {
        prevGuess.push(guess)
        if (numOfGess === 10) {
            displayGuess(guess)
            displayMsg(`Game over. Random number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMsg(`You guessed right!`)
        endGame()
    } else if (guess < randomNumber) {
        displayMsg(`Number is too low!`)
    } else if (guess > randomNumber) {
        displayMsg(`Number is too high!`)
    }
}


function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numOfGess++;
    remaining.innerHTML = `${11 - numOfGess}`;
}

function displayMsg(msg) {
    lowOrHigh.innerHTML = `<h5>${msg}</h5>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h4 id="newGame">Start New Game</h4>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
    const newGameBtn = document.querySelector('#newGame')
    newGameBtn.addEventListener('click', (event) => {
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numOfGess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numOfGess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        lowOrHigh.innerHTML = ''

        playGame = true
    })
}
