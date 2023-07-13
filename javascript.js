const playerSelection = "rock";
const computerSelection = getComputerChoice();

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
    console.log("The computer played: "+ computerChoice);
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection.toLowerCase()==computerSelection) {
        return "You tied: you both played " + computerSelection;
    }
    else if (playerSelection.toLowerCase()=="rock") {
        if (computerSelection=="paper") {
            return "You lose: " + computerSelection + " beats " + playerSelection;
        }
        else {
            return "You win: " + playerSelection + " beats " + computerSelection;
        }
    }
    else if (playerSelection.toLowerCase()=="paper") {
        if (computerSelection=="scissor") {
            return "You lose: " + computerSelection + " beats " + playerSelection;
        }
        else {
            return "You win: " + playerSelection + " beats " + computerSelection;
        }
    }
    else { //assumes player played scissors
        if (computerSelection=="rock") {
            return "You lose: " + computerSelection + " beats " + playerSelection;
        }
        else {
            return "You win: " + playerSelection + " beats " + computerSelection;
        }
    }
}



console.log(playRound(playerSelection,computerSelection))
