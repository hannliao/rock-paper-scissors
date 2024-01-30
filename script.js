function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function updateResults() {
    scores.textContent = "you: " + playerScore + " | computer: " + computerScore;
    selections.innerHTML = "<strong>" + playerSelection + "</strong> vs " + computerSelection;
}

function gameOver() {
    if (playerScore == 5 || computerScore == 5) {
        return true;
    }
    return false;
}

function getWinner() {
    winner.textContent = "Winner: " + ((playerScore == 5) ? "you" : "computer");
    results.append(winner);
}

function resetGame() {
    playerScore = 0, computerScore = 0;
    results.removeChild(winner);
    results.removeChild(reset);
}

function newGame() {
    enableButtons();
    selections.textContent = "let's play!";
    scores.textContent = "you: 0 | computer: 0";
}

function disableButtons() {
    buttons.forEach((btn) => {
        btn.disabled = true;
    });
}

function enableButtons() {
    buttons.forEach((btn) => {
        btn.disabled = false;
    });
}

function playRound() {
    playerSelection = this.id;
    computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {

    } else if ((playerSelection == "rock" && computerSelection == "scissors") 
    || (playerSelection == "paper" && computerSelection == "rock") 
    || (playerSelection == "scissors" && computerSelection == "paper")) {
        playerScore++;
    } else {
        computerScore++;
    }
    updateResults();
    if (gameOver()) {
        getWinner();
        results.append(reset);
        disableButtons();
    }
}


let playerScore = 0, computerScore = 0;
let playerSelection = "", computerSelection = "";

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", playRound);
});

const results = document.querySelector("#results");
const selections = document.createElement("div");
const scores = document.createElement("div");
newGame();
results.append(selections, scores);

const winner = document.createElement("div");

const reset = document.createElement("button");
reset.textContent = "reset";
reset.addEventListener("click", () => {
    resetGame();
    newGame();
});