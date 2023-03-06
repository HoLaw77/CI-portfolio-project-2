let computerAction = document.getElementById("computer-action");
let playAction = document.getElementById("player-action");
let gameResult = document.getElementById("result");
let gameChoices = document.getElementsByTagName("button");
let userChoice
let computerChoice
let result

gameChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoice.innerHTML = userChoice
    computerAction()
    computerResult()
  }))

function computerAction() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    
    if (randomNumber === 1) {
      computerAction = 'rock'
    }
    if (randomNumber === 2) {
      computerAction = 'scissors'
    }
    if (randomNumber === 3) {
      computerAction = 'paper'
    }
    computerActionDisplay.innerHTML = computerAction
  }
  
  function gameResult() {
    if (computerAction === userAction) {
      result = 'its a draw!'
    } else
    if (computerAction === 'rock' && userAction === "paper") {
      result = 'you win!'
    } else
    if (computerAction === 'rock' && userAction === "scissors") {
      result = 'you lost!'
    } else
    if (computerActoin === 'paper' && userAction === "scissors") {
      result = 'you win!'
    } else
    if (computerAction === 'paper' && userAction === "rock") {
      result = 'you lose!'
    } else
    if (computerAction === 'scissors' && userAction === "rock") {
      result = 'you win!'
    } else
    if (computerAction === 'scissors' && userAction === "paper") {
      result = 'you lose!'
    }
    gameResult.innerHTML = result
  }