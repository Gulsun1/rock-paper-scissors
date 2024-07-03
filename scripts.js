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
