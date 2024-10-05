let textWindow = document.getElementById('textContainer');
let humanScoreWindow = document.getElementById('userCounter');
let computerScoreWindow = document.getElementById('computerCounter');
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const computerRockButton = document.getElementById('computerRock');
const computerPaperButton = document.getElementById('computerPaper');
const computerScissorsButton = document.getElementById('computerScissors');

function getComputerChoice() {          // Defines function that returns "Rock", "Paper" or "Scissors" randomly

    let randomValue = Math.random() * 3;    // Assigns a random value to a variable
    
    if (randomValue < 1) {            // If the random value is less than 1/3 returns "Rock"
        return "rock";
    } else if (randomValue < 2) {     // If the random value is less than 2/3 returns "Paper"
        return "paper";
    } else {
        return "scissors";              // If the random value is of any other value returns "Scissors"
    }
}

/* function getHumanChoice() {     // Defines functions that validates and returns the user's choice

    // let humanChoice = prompt("Rock, Paper or Scissors?", "").toLowerCase();     // Assigns the user's choice to a variable and makes it case insensitive
    let humanChoice = "";
    
    windowText = "Rock, Paper or Scissors?";

    rockButton.onclick = () => humanChoice = "rock";
    paperButton.onclick = () => humanChoice = "paper";
    scissorsButton.onclick = () => humanChoice = "scissors";
}
*/

let computerScore = 0;      // Initiates variable for the computer's score
let humanScore = 0;     // Initiates variable for the user's score

function playRound(humanChoice,computerChoice) {        // Defines function to play a round
    if (humanChoice === computerChoice) {       // Defines return in any case of a draw
        textWindow.textContent = `Both of you chose ${humanChoice}... It's a draw!`;
    } else if (         // Defines condition in any case of a win for the user
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {         // In case of a win for the user, adds 1 point to his score and returns result message
        humanScore++;
        humanScoreWindow.textContent = humanScore;
        textWindow.textContent = `You chose ${humanChoice} and the computer chose ${computerChoice}, ${humanChoice} beats ${computerChoice}, you win!`;
    } else {    // In any other case, adds 1 point to the computer's score and returns result message
        computerScore++;
        computerScoreWindow.textContent = computerScore;
        textWindow.textContent = `You chose ${humanChoice} and the computer chose ${computerChoice}, ${computerChoice} beats ${humanChoice}, you lose...`;
    }
}

function checkGameOver() {
    if (computerScore >= roundNum) {
        rockButton.removeEventListener('click',handleRockClick);
        paperButton.removeEventListener('click',handlePaperClick);
        scissorsButton.removeEventListener('click',handleScissorsClick);
        textWindow.style.backgroundColor = 'var(--computer-color)';
        textWindow.textContent = 'You lose!';
    } else if (humanScore >= roundNum) {
        rockButton.removeEventListener('click',handleRockClick);
        paperButton.removeEventListener('click',handlePaperClick);
        scissorsButton.removeEventListener('click',handleScissorsClick);
        textWindow.style.backgroundColor = 'var(--user-color)';
        textWindow.textContent = 'You win!';
    }
}

function resetButtonsColor() {
    computerRockButton.style.backgroundColor = 'var(--base-color)';
    computerPaperButton.style.backgroundColor = 'var(--base-color)';
    computerScissorsButton.style.backgroundColor = 'var(--base-color)';
    rockButton.style.backgroundColor = 'var(--base-color)';
    paperButton.style.backgroundColor = 'var(--base-color)';
    scissorsButton.style.backgroundColor = 'var(--base-color)';
}

function handleRockClick() {
    resetButtonsColor();
    rockButton.style.backgroundColor = 'var(--user-color)';
    let computerChoice = getComputerChoice();
    if (computerChoice === 'rock') {
        computerRockButton.style.backgroundColor = 'var(--computer-color)';
    } else if (computerChoice === 'paper') {
        computerPaperButton.style.backgroundColor = 'var(--computer-color)';
    } else {
        computerScissorsButton.style.backgroundColor = 'var(--computer-color)';
    }
    playRound('rock', computerChoice);
    checkGameOver(roundNum);
}

function handlePaperClick() {
    resetButtonsColor();
    paperButton.style.backgroundColor = 'var(--user-color)';
    let computerChoice = getComputerChoice();
    if (computerChoice === 'rock') {
        computerRockButton.style.backgroundColor = 'var(--computer-color)';
    } else if (computerChoice === 'paper') {
        computerPaperButton.style.backgroundColor = 'var(--computer-color)';
    } else {
        computerScissorsButton.style.backgroundColor = 'var(--computer-color)';
    }
    playRound('paper', computerChoice);
    checkGameOver(roundNum);
}

function handleScissorsClick() {
    resetButtonsColor();
    scissorsButton.style.backgroundColor = 'var(--user-color)';
    let computerChoice = getComputerChoice();
    if (computerChoice === 'rock') {
        computerRockButton.style.backgroundColor = 'var(--computer-color)';
    } else if (computerChoice === 'paper') {
        computerPaperButton.style.backgroundColor = 'var(--computer-color)';
    } else {
        computerScissorsButton.style.backgroundColor = 'var(--computer-color)';
    }
    playRound('scissors', computerChoice);
    checkGameOver(roundNum);
}

let roundNum = 5;

rockButton.addEventListener('click',handleRockClick);
paperButton.addEventListener('click',handlePaperClick);
scissorsButton.addEventListener('click',handleScissorsClick);




// prompt("How many rounds do you want to play?","");     // Asks the user how many raounds to play

