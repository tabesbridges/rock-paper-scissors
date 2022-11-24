choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
    const compChoice = choices[Math.floor(Math.random() * choices.length)];
    return compChoice;
};

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            console.log("It's a tie!");
            return;
        } else if (computerSelection == "paper") {
            console.log("You lose! Paper covers rock!");
            return false;
        } else if (computerSelection == "scissors") {
            console.log("You win! Rock smashes scissors!");
            return true;
        };
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            console.log("You win! Paper covers rock!");
            return true;
        } else if (computerSelection == "paper") {
            console.log("It's a tie!");
            return;
        } else if (computerSelection == "scissors") {
            console.log("You lose! Scissors cut paper");
            return false;
        };
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            console.log("You lose! Rock smashes scissors!");
            return false;
        } else if (computerSelection == "paper") {
            console.log("You win! Scissors cut paper!");
            return true;
        } else if (computerSelection == "scissors") {
            console.log("It's a tie!");
            return;
        };
    } else {
        console.log("Invalid entry!")
    };
};

function game() {
    let playerScore = 0;
    let compScore = 0;

    for (let i = 0; i < 5; i++) {
        // get random choice from computer
        let computerChoice = getComputerChoice();

        // get input from player, check validity
        let playerSelection = null;
        
        do {
            let input = prompt("Rock, Paper, or Scissors?: ", "default");

            input = input.toLowerCase;

            if (input == "rock" || input == "paper" || input == "scissors") {
                playerSelection = input;
            };
        }
        while (playerSelection == null);

        // play the round
        let result = playRound(playerSelection, computerChoice);

        // update scores
        if (result == true) {
            playerScore++;
            console.log(`You: ${playerScore}, Computer: ${compScore}`);
        } else if (result == false) {
            compScore++;
        };
    };

    // determine winner of all 5 rounds
    if (playerScore > compScore) {
        console.log("You win the game!!");
    } else if (playerScore < compScore) {
        console.log("You lose the game!!");
    } else if (playerScore == compScore) {
        console.log("The whole game is a tie!!");
    };
};