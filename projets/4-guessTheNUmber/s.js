let randomNumber = (parseInt(Math.random()*100 + 1))
const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesse")
const lastResult = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const startOver  = document.querySelector(".resultParas")

const p = document.createElement("p")

let prevguess = []
let numGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener("click", function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (guess = ''|| guess < 0 || isNaN(guess) || guess > 100) {
        alert("please enter a valid number")
    }else{
        prevguess.push(guess)
        if (numGuess === 11) {
            displayguess(guess)
            displayMessage(`game over. Rendom number was${randomNumber}`)
            endGame()
        }else{
            displayguess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`you guess it right`)
        endGame()
    }else if (guess < randomNumber) {
        displayMessage(`number is tooo low`)
    }else if (guess > randomNumber) {
        displayMessage(`number is tooo high`)
    }
}

function displayguess(guess) {
    userInput.value = ""
    // guessSlot.innerHTML = `${guess}`
    numGuess++;
    lastResult.innerHTML = `${11 - numGuess}`
}

function displayMessage(Message) {
    lowOrHi.innerHTML = `<h2>${Message}</h2>`
}

function endGame() {
    userInput.value = ""
    userInput.setAttribute("disabled", "")
    p.classList.add("button")
    p.innerHTML = `<h2 id="newgame" >Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
    const newGame = document.querySelector("#newgame")
    newGame.addEventListener("click", function (e) {
        randomNumber =  (parseInt(Math.random()*100 + 1))
        prevguess = []
        numGuess = 1
        guessSlot.innerHTML = ""
        lastResult.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute("disabled")
        startOver.removeChild(p)
        playGame= true
    })
}


