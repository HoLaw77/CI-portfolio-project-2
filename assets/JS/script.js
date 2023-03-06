/*event buttons testing using alert*/
document.getElementById("paper").addEventListener('click', paperChoice);
function paperChoice(){ alert ("You click paper.");}
document.getElementById("rock").addEventListener('click', rockChoice);
function rockChoice(){ alert ("You click rock.");}
document.getElementById("scissors").addEventListener('click', scissorsChoice);
function scissorsChoice(){ alert ("You click scissors.");}
document.getElementById("restart").addEventListener('click', clearGame);
function clearGame(){ alert ("You click restart.");}

/*function for math random*/
function generateMath(){let randomNumber = Math.floor(Math.random()* 3);
  if (randomNumber === 1){computerChoice = "paper"};
  if (randomNumber === 2){computerChoice = "scissors"};
  if (randomNumber === 3){computerChoice = "rock"};
  computerChoice == 
};

function gameResult(){
  
}