let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;
const gameRounds = 5;

function getComputerChoice () {
    let seed = Math.floor(Math.random()*3)+1;
    if (seed == 1) {
        return "rock";
    } 
    else if (seed == 2) {
        return "paper";
    } 
    else {
        return "scissor";
    } 
}

function getSelections () {
    playerSelection = prompt("Choose rock, paper, or scissor");
    computerSelection = getComputerChoice();
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection.toLowerCase()==computerSelection) {
        return "You tied - you both played " + computerSelection;
    }
    else if (playerSelection.toLowerCase()=="rock") {
        if (computerSelection=="paper") {
            computerScore = computerScore + 1;
            return "You lose - " + computerSelection + " beats " + playerSelection;
        }
        else {
            playerScore = playerScore + 1;
            return "You win - " + playerSelection + " beats " + computerSelection;
        }
    }
    else if (playerSelection.toLowerCase()=="paper") {
        if (computerSelection=="scissor") {
            computerScore = computerScore + 1;
            return "You lose - " + computerSelection + " beats " + playerSelection;
        }
        else {
            playerScore = playerScore + 1;
            return "You win - " + playerSelection + " beats " + computerSelection;
        }
    }
    else if (playerSelection.toLowerCase()=="scissor") {
        if (computerSelection=="rock") {
            computerScore = computerScore + 1;
            return "You lose - " + computerSelection + " beats " + playerSelection;
        }
        else {
            playerScore = playerScore + 1;
            return "You win - " + playerSelection + " beats " + computerSelection;
        }
    }
    else {
         throw("Error - please play rock, paper, or scissor")
    }
}

function game () {
    for (let i = 1; i<=gameRounds;) {
        getSelections(); 
        try {
            console.log("Round "+ i + ": " + playRound(playerSelection,computerSelection));
            i++;
    }
        catch (err){
            console.log("Error - please play rock, paper, or scissor");
        }
    }
    
    console.log ("Your score: " + playerScore + ", " + "computer score: " + computerScore);
    if (playerScore>computerScore) {
        console.log("You won :)")
    }
    else if (computerScore>playerScore) {
        console.log("You lost :(")
    }
    else {
        console.log("You tied...")
    }

}

game();