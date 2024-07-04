function getComputerChoice() {          // Defines function that returns "Rock", "Paper" or "Scissors" randomly

    let randomValue = Math.random();    // Assigns a random value to a variable
    
    if (randomValue < 1/3) {            // If the random value is less than 1/3 returns "Rock"
        return "Rock";
    } else if (randomValue < 2/3) {     // If the random value is less than 2/3 returns "Paper"
        return "Paper";
    } else {
        return "Scissors";              // If the random value is of any other value returns "Scissors"
    }
}

function getHumanChoice() {     // Defines functions that validates and returns the user's choice

    let humanChoice = prompt("Rock, Paper or Scissors?", "").toLowerCase();     // Assigns the user's choice to a variable and makes it case insensitive

    while (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {       // Loops prompt as long as the choice is not valid
        console.log("Incorrect input, please select between Rock, Paper or Scissors");
        humanChoice = prompt("Incorrect input, please select between Rock, Paper or Scissors", "").toLowerCase();
    }
        let firstLetter = humanChoice.charAt(0);        // Assigns variable to first letter of the user's choice
        let capitalFirst = firstLetter.toUpperCase();       // Capitalizes the letter and assigns it to a new variable
        let capitalHumanChoice = capitalFirst + humanChoice.substring(1);       // Joins the capitalized first letter and the rest of the string
        return capitalHumanChoice;     // Returns the user's choice when valid and with the first letter capitalized
}

let computerScore = 0;      // Initiates variable for the computer's score
let humanScore = 0;     // Initiates variable for the user's score

function playRound(humanChoice,computerChoice) {        // Defines function to play a round
    if (humanChoice === computerChoice) {       // Defines return in any case of a draw
        console.log(`Both of you chose ${humanChoice}... It's a draw!`);
    } else if (         // Defines condition in any case of a win for the user
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {         // In case of a win for the user, adds 1 point to his score and returns result message
        humanScore++;
        console.log(`You chose ${humanChoice} and the computer chose ${computerChoice},`);
        console.log(`${humanChoice} beats ${computerChoice}, you win!`);
        console.log(`The score is now:`);
        console.log(`You: ${humanScore}`);
        console.log(`Computer: ${computerScore}`);
    } else {    // In any other case, adds 1 point to the computer's score and returns result message
        computerScore++;
        console.log(`You chose ${humanChoice} and the computer chose ${computerChoice},`);
        console.log(`${computerChoice} beats ${humanChoice}, you lose...`);
        console.log(`The score is now:`);
        console.log(`You: ${humanScore}`);
        console.log(`Computer: ${computerScore}`);
    }
}

playRound(getHumanChoice(),getComputerChoice());
