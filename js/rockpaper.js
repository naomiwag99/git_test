let choiceOptions = ["rock", "paper", "scissors"]

function getComputerChoice(){
    let randomNum = Math.floor(Math.random()*choiceOptions.length);
    let computerChoice = choiceOptions[randomNum];
    return computerChoice;
}

function getPlayerChoice(){
    let gettingPlayerChoice = prompt("Please enter either Rock, Paper, or Scissors.");
    let playerChoice = gettingPlayerChoice.toLowerCase();
    return playerChoice;
}

function newRound(){
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    game(playerSelection,computerSelection);
}

function game(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        console.log("You have a tie!")
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log("You win! Rock beats scissors");
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log("You win! Scissors beats paper");
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log("You win! Paper beats rock");
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log("You lose! Paper beats rock");
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log("You lose! Rock beats scissors");
    }
    else {
        console.log("You lose! Scissors beats paper");
    }
}

newRound();
