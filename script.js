choices = ["rock", "paper", "scissors"]
let roundsLeft = 5;
let playerScore = 0;
let compScore = 0;

function getComputerChoice() {
    const compChoice = choices[Math.floor(Math.random() * choices.length)];
    return compChoice;
}

function changeText(newText, targetDiv) {
    const elem = document.getElementById(targetDiv);
    elem.innerHTML = newText;
    return;
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            changeText("It's a tie!", "results1");
            return;
        } else if (computerSelection == "paper") {
            changeText("You lose! Paper covers rock!", "results1");
            return false;
        } else if (computerSelection == "scissors") {
            changeText("You win! Rock smashes scissors!", "results1");
            return true;
        };
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            changeText("You win! Paper covers rock!", "results1");
            return true;
        } else if (computerSelection == "paper") {
            changeText("It's a tie!", "results1");
            return;
        } else if (computerSelection == "scissors") {
            changeText("You lose! Scissors cut paper", "results1");
            return false;
        };
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            changeText("You lose! Rock smashes scissors!", "results1");
            return false;
        } else if (computerSelection == "paper") {
            changeText("You win! Scissors cut paper!", "results1");
            return true;
        } else if (computerSelection == "scissors") {
            changeText("It's a tie!", "results1");
            return;
        };
    };
};

function updateScore(result) {
    if (result == true) {
        playerScore++;
        changeText(`You: ${playerScore}, Computer: ${compScore}`, "results2");
    } else if (result == false) {
        compScore++;
        changeText(`You: ${playerScore}, Computer: ${compScore}`, "results2");
    } else {
        changeText(`You: ${playerScore}, Computer: ${compScore}`, "results2");
    };
}

      

function determineWinner(playerScore, compScore) {
    if (playerScore > compScore) {
        changeText(`You win the game!!`, "results1");
        changeText(`You: ${playerScore}, Computer: ${compScore}`, "results2");
    } else if (playerScore < compScore) {
        changeText("You lose the game!!", "results1");
        changeText(`You: ${playerScore}, Computer: ${compScore}`, "results2");
    } else if (playerScore == compScore) {
        changeText("The whole game is a tie!!", "results1");
        changeText(`You: ${playerScore}, Computer: ${compScore}`, "results2");
    };
}

function reset() {
    roundsLeft = 5;
    playerScore = 0;
    compScore = 0;
    changeText("", "results1");
    changeText("", "results2");
}

const buttons = Array.from(document.querySelectorAll('button'))
buttons.forEach(button => button.addEventListener('click', function() {
    if (roundsLeft > 1) {
        let result = playRound(button.id, getComputerChoice());
        updateScore(result);
        roundsLeft--;
    } else if (roundsLeft == 0) {
        // After the else block below has executed, further clicks decrease
        // the roundsLeft counter, which then triggers this block to prompt
        // the player for to click the RESET button
        changeText("Click RESET to play again!", "results1");
        changeText("", "results2");
    } else {
        determineWinner(playerScore, compScore);
        roundsLeft--;
    }
}));

const resetBtn = document.querySelector('#reset')
resetBtn.addEventListener('click', reset)

