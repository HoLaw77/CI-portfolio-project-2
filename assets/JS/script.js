/*set variables for storing values*/
const playerChoice = document.getElementById("player-action");
const computerChoice = document.getElementById("computer-action");
const gameResultDisplay = document.getElementById("result");
const gameButtons = document.getElementsByClassName("btn");
let player;
let computer;
let result;


gameButtons.forEach (buttons => {buttons.addEventListener('click', () => {
    player = buttons.textContent;
    generateMath();
    gameResult();
    playerChoice.textContent = `Your Choice: ${player}`;
    computerChoice.textContent = `Computer action: ${computer}`;
    gameResultDisplay.textContent = gameResult();
  })});
/*event buttons testing using alert*/
/*document.getElementById("paper").addEventListener('click', paperChoice);
function paperChoice(){ playerChoice = "paper"; alert ("You click paper.");}
document.getElementById("rock").addEventListener('click', rockChoice);
function rockChoice(){ playerChoice = "rock"; alert ("You click rock.");}
document.getElementById("scissors").addEventListener('click', scissorsChoice);
function scissorsChoice(){ playerChoice = "scissors"; alert ("You click scissors.");}
document.getElementById("restart").addEventListener('click', clearGame);
function clearGame(){ alert ("You click restart.");}*/



/*function for math random*/
function generateMath(){let randomNumber = Math.floor(Math.random()* 3) + 1;
  if (randomNumber === 1){return computerChoice = "paper"};
  if (randomNumber === 2){return computerChoice = "scissors"};
  if (randomNumber === 3){return computerChoice = "rock"};
  let computerChoiceDisplay = getElementById("computer-action"); 
  computerChoice = computerChoiceDisplay.innerHTML;
}

function gameResult(){
  if (playerChoice == computerChoice){ gameResult = "draw"} else
  if (playerChoice == "paper" && computerChoice == "scissors"){gameResult = "You lose."} else
  if (playerChoice == "paper" && computerChoice == "rock"){gameResult = "You Win."} else
  if (playerChoice == "rock"  && computerChoice == "scissors"){gameResult = "You win."}
  let gameResultDisplay = document.getElementById("result"); 
  gameResult = gameResultDisplay.innerHTML; 
}
