function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function getPlayerChoice(message = "") {
    return prompt(message + "Rock, paper, scissors?", );
}

function invalid(playerSelection) {
    playerSelection = playerSelection.toLowerCase().trim();
    if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
        return true;
    }
    return false;
}

function playRound(playerSelection, computerSelection, round) {
    if (invalid(playerSelection)) {
        playerSelection = getPlayerChoice("Please enter a valid response. ");
        return playRound(playerSelection, computerSelection, round);
    } else if (playerSelection === computerSelection) {
        playerSelection = getPlayerChoice("That was a tie. ");
        computerSelection = getComputerChoice();
        return playRound(playerSelection, computerSelection, round);
    } else if ((playerSelection == "rock" && computerSelection == "scissors") 
    || (playerSelection == "paper" && computerSelection == "rock") 
    || (playerSelection == "scissors" && computerSelection == "paper")) {
        console.log("Round " + round + ": You win! " + playerSelection + " beats " + computerSelection);
        return 1;
    } else {
        console.log("Round " + round + ": You lose! " + computerSelection + " beats " + playerSelection);
        return 0;
    }
}

function game() {
    let wins = 0;
    for (let i=1; i < 6; i++) {
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();
        wins += playRound(playerSelection, computerSelection, i);
        console.log(wins);
    }
    if (wins >= 3) {
        console.log("GAME OVER: YOU WIN!");
    } else {
        console.log("GAME OVER: YOU LOSE!");
    }
}

console.log(game());