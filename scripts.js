let textWindow = document.querySelector('#textContainer');
let humanScoreWindow = document.querySelector('#userCounter');
let computerScoreWindow = document.querySelector('#computerCounter');
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

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

function playGame(roundCount) {     // Defines function for game round count logic, taking the desired round count as a parameter

    let counter = 0;        // Initiates the variable for the round counter
    let loopTimes = roundCount;     // Assigns a variable to the round count parameter

    while (counter < loopTimes) {       // Loops rounds of the game and increments the round counter by 1 each time until it is equal to the amount of rounds selected
        playRound(getHumanChoice(),getComputerChoice());
        counter++;
    }

    function resultsMessage() {     // Defines function for the last message that announces the results

        if (humanScore > computerScore) {       // Message in case of the user's win
            console.log(`You have played ${loopTimes} times. The final score is:`);
            console.log(`You: ${humanScore}`);
            console.log(`Computer: ${computerScore}`);
            console.log("You won the game!");
        } else if (humanScore < computerScore) {        // Message in case of the computer's win
            console.log(`You have played ${loopTimes} times. The final score is:`);
            console.log(`You: ${humanScore}`);
            console.log(`Computer: ${computerScore}`);
            console.log("You lose the game!");
        } else {        // Message in case of draw
            console.log(`You have played ${loopTimes} times. The final score is:`);
            console.log(`You: ${humanScore}`);
            console.log(`Computer: ${computerScore}`);
            console.log("It's a draw!");
        }
    }

    console.log(resultsMessage());      // Invokes the results message function and logs the returned values in the console after the game loop finishes
}

rockButton.addEventListener('click',function() {
    playRound('rock',getComputerChoice());
});
paperButton.addEventListener('click',function() {
    playRound('paper',getComputerChoice());
});
scissorsButton.addEventListener('click',function() {
    playRound('scissors',getComputerChoice());
});

 

// prompt("How many rounds do you want to play?","");     // Asks the user how many raounds to play

