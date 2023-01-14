const keys = document.querySelectorAll('.key');
keys.forEach((key) => key.addEventListener('click', () => playRound(key.textContent)));

let playerScoreP = 0, computerScoreP = 0;
update(playerScoreP, computerScoreP);

function getComputerChoice() {
    let val = Math.random() * 3;
    switch (true) {
        case (val <= 1):
            return "rock";

        case (val <= 2):
            return "paper";

        default:
            return "scissor"
    }
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    let playerLower = playerSelection.toLowerCase();
    if (playerLower == computerSelection) {
        console.log("Tie!");
    } else if ((playerLower == "rock" && computerSelection == "scissor") 
    || (playerLower == "paper" && computerSelection == "rock") 
    || (playerLower == "scissor" && computerSelection == "paper")) {
        console.log("You Win! " + playerSelection + " beats " + computerSelection + ".");
        playerScoreP = playerScoreP + 1;
    } else {
        console.log("You Lose! " + computerSelection + " beats " + playerSelection + ".");
        computerScoreP = computerScoreP + 1;
    }
    update(playerScoreP, computerScoreP);
}


function update(playerScore, computerScore) {
    const scoreboardDiv = document.querySelector('.scoreboard');
    scoreboardDiv.innerHTML = '';
    const playerScoreP = document.createElement('p');
    const computerScoreP = document.createElement('p');
    playerScoreP.textContent = "Player score is " + playerScore;
    computerScoreP.textContent = "Computer score is " + computerScore;
    scoreboardDiv.appendChild(playerScoreP);
    scoreboardDiv.appendChild(computerScoreP);
    if (playerScore >= 5) {
        const winnerStatement = document.createElement('p');
        winnerStatement.textContent = "The player wins";
        scoreboardDiv.appendChild(winnerStatement);
    } else if (computerScore >= 5) {
            const winnerStatement = document.createElement('p');
            winnerStatement.textContent = "The computer wins";
            scoreboardDiv.appendChild(winnerStatement);
    }
}