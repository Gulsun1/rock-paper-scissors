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
        return humanChoice;     // Returns the user's choice when valid
}

