function getComputerChoice() {
    let val = Math.random() * 3;
    switch (true) {
        case (val <= 1):
            return "rock";
            break;

        case (val <= 2):
            return "paper";
            break;

        default:
            return "scissor"
    }
}

function playRound(playerSelection, computerSelection) {
    let playerLower = playerSelection.toLowerCase(), computerLower = computerSelection.toLowerCase();
    if (playerLower == computerLower) {
        console.log("Tie!");
        return 0;
    } else if ((playerLower == "rock" && computerLower == "scissor") 
    || (playerLower == "paper" && computerLower == "rock") 
    || (playerLower == "scissor" && computerLower == "paper")) {
        console.log("You Win! " + playerSelection + " beats " + computerSelection + ".");
        return 1;
    } else {
        console.log("You Lose! " + computerSelection + " beats " + playerSelection + ".");
        return -1;
    }
}

function game() {
    let score = 0;
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Enter rock, paper, or scissor:", "");
        switch (playRound(playerChoice, getComputerChoice())) {
            case 1:
                score = score + 1;
                break;
            default:
        }
        
    }
    let winner = (score >= 3)? "you" : "computer";
    console.log("The winner is " + winner);
}