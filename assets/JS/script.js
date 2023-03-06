/*event buttons testing using alert*/
document.getElementById("paper").addEventListener('click', paperChoice);
function paperChoice(){ playerChoice = "paper"; alert ("You click paper.");}
document.getElementById("rock").addEventListener('click', rockChoice);
function rockChoice(){ playerChoice = "rock"; alert ("You click rock.");}
document.getElementById("scissors").addEventListener('click', scissorsChoice);
function scissorsChoice(){ playerChoice = "scissors"; alert ("You click scissors.");}
document.getElementById("restart").addEventListener('click', clearGame);
function clearGame(){ alert ("You click restart.");}
let computerChoice = document.getElementById("computer-action");
let gameResult = document.getElementById("result");

/*function for math random*/
function generateMath(){let randomNumber = Math.floor(Math.random()* 3);
  if (randomNumber === 1){computerChoice = "paper"};
  if (randomNumber === 2){computerChoice = "scissors"};
  if (randomNumber === 3){computerChoice = "rock"};
  
}

function gameResult(){
  if (playerChoice == computerChoice){ gameResult = "draw"} else
  if (playerChoice == "paper" || computerChoice == "scissors"){gameResult = "You lose."} else
  if (playerChoice == "paper" || computerChoice == "rock"){gameResult = "You Win."} else
  if (playerChoice == "rock"  || computerChoice == "scissors"){gameResult = "You win."} else
  
}

function printGameResult(){
  if(gameResult == "draw"){}
}