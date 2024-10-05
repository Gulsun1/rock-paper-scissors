let textWindow = document.getElementById('textContainer');
let humanScoreWindow = document.getElementById('userCounter');
let computerScoreWindow = document.getElementById('computerCounter');
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const computerRockButton = document.getElementById('computerRock');
const computerPaperButton = document.getElementById('computerPaper');
const computerScissorsButton = document.getElementById('computerScissors');
const submitButton = document.getElementById('formButton');
const popUp = document.querySelector('.popUp');
const content = document.querySelector('.content');
const numberForm = document.getElementById('roundsInput');

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

function confetti() {
  let random = Math.random
    , cos = Math.cos
    , sin = Math.sin
    , PI = Math.PI
    , PI2 = PI * 2
    , timer = undefined
    , frame = undefined
    , confetti = [];
  let particles = 10
    , spread = 40
    , sizeMin = 3
    , sizeMax = 12 - sizeMin
    , eccentricity = 10
    , deviation = 100
    , dxThetaMin = -.1
    , dxThetaMax = -dxThetaMin - dxThetaMin
    , dyMin = .13
    , dyMax = .18
    , dThetaMin = .4
    , dThetaMax = .7 - dThetaMin;
  let colorThemes = [
    function() {
      return color(200 * random()|0, 200 * random()|0, 200 * random()|0);
    }, function() {
      var black = 200 * random()|0; return color(200, black, black);
    }, function() {
      var black = 200 * random()|0; return color(black, 200, black);
    }, function() {
      var black = 200 * random()|0; return color(black, black, 200);
    }, function() {
      return color(200, 100, 200 * random()|0);
    }, function() {
      return color(200 * random()|0, 200, 200);
    }, function() {
      var black = 256 * random()|0; return color(black, black, black);
    }, function() {
      return colorThemes[random() < .5 ? 1 : 2]();
    }, function() {
      return colorThemes[random() < .5 ? 3 : 5]();
    }, function() {
      return colorThemes[random() < .5 ? 2 : 4]();
    }
  ];
  function color(r, g, b) {
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  }

  // Cosine interpolation
  function interpolation(a, b, t) {
    return (1-cos(PI*t))/2 * (b-a) + a;
  }

  // Create a 1D Maximal Poisson Disc over [0, 1]
  var radius = 1/eccentricity, radius2 = radius+radius;
  function createPoisson() {
    // domain is the set of points which are still available to pick from
    // D = union{ [d_i, d_i+1] | i is even }
    var domain = [radius, 1-radius], measure = 1-radius2, spline = [0, 1];
    while (measure) {
      var dart = measure * random(), i, l, interval, a, b, c, d;

      // Find where dart lies
      for (i = 0, l = domain.length, measure = 0; i < l; i += 2) {
        a = domain[i], b = domain[i+1], interval = b-a;
        if (dart < measure+interval) {
          spline.push(dart += a-measure);
          break;
        }
        measure += interval;
      }
      c = dart-radius, d = dart+radius;

      // Update the domain
      for (i = domain.length-1; i > 0; i -= 2) {
        l = i-1, a = domain[l], b = domain[i];
        // c---d          c---d  Do nothing
        //   c-----d  c-----d    Move interior
        //   c--------------d    Delete interval
        //         c--d          Split interval
        //       a------b
        if (a >= c && a < d)
          if (b > d) domain[l] = d; // Move interior (Left case)
          else domain.splice(l, 2); // Delete interval
        else if (a < c && b > c)
          if (b <= d) domain[i] = c; // Move interior (Right case)
          else domain.splice(i, 0, c, d); // Split interval
      }

      // Re-measure the domain
      for (i = 0, l = domain.length, measure = 0; i < l; i += 2)
        measure += domain[i+1]-domain[i];
    }

    return spline.sort();
  }

  // Create the overarching container
  var container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.top      = '0';
  container.style.left     = '0';
  container.style.width    = '100%';
  container.style.height   = '0';
  container.style.overflow = 'visible';
  container.style.zIndex   = '9999';

  // Confetto constructor
  function Confetto(theme) {
    this.frame = 0;
    this.outer = document.createElement('div');
    this.inner = document.createElement('div');
    this.outer.appendChild(this.inner);

    var outerStyle = this.outer.style, innerStyle = this.inner.style;
    outerStyle.position = 'absolute';
    outerStyle.width  = (sizeMin + sizeMax * random()) + 'px';
    outerStyle.height = (sizeMin + sizeMax * random()) + 'px';
    innerStyle.width  = '100%';
    innerStyle.height = '100%';
    innerStyle.backgroundColor = theme();

    outerStyle.perspective = '50px';
    outerStyle.transform = 'rotate(' + (360 * random()) + 'deg)';
    this.axis = 'rotate3D(' +
      cos(360 * random()) + ',' +
      cos(360 * random()) + ',0,';
    this.theta = 360 * random();
    this.dTheta = dThetaMin + dThetaMax * random();
    innerStyle.transform = this.axis + this.theta + 'deg)';

    this.x = window.innerWidth * random();
    this.y = -deviation;
    this.dx = sin(dxThetaMin + dxThetaMax * random());
    this.dy = dyMin + dyMax * random();
    outerStyle.left = this.x + 'px';
    outerStyle.top  = this.y + 'px';

    // Create the periodic spline
    this.splineX = createPoisson();
    this.splineY = [];
    for (var i = 1, l = this.splineX.length-1; i < l; ++i)
      this.splineY[i] = deviation * random();
    this.splineY[0] = this.splineY[l] = deviation * random();

    this.update = function(height, delta) {
      this.frame += delta;
      this.x += this.dx * delta;
      this.y += this.dy * delta;
      this.theta += this.dTheta * delta;

      // Compute spline and convert to polar
      var phi = this.frame % 7777 / 7777, i = 0, j = 1;
      while (phi >= this.splineX[j]) i = j++;
      var rho = interpolation(
        this.splineY[i],
        this.splineY[j],
        (phi-this.splineX[i]) / (this.splineX[j]-this.splineX[i])
      );
      phi *= PI2;

      outerStyle.left = this.x + rho * cos(phi) + 'px';
      outerStyle.top  = this.y + rho * sin(phi) + 'px';
      innerStyle.transform = this.axis + this.theta + 'deg)';
      return this.y > height+deviation;
    };
  }

  function poof() {
    if (!frame) {
      // Append the container
      document.body.appendChild(container);

      // Add confetti
      var theme = colorThemes[0]
        , count = 0;
      (function addConfetto() {
        var confetto = new Confetto(theme);
        confetti.push(confetto);
        container.appendChild(confetto.outer);
        timer = setTimeout(addConfetto, spread * random());
      })(0);

      // Start the loop
      var prev = undefined;
      requestAnimationFrame(function loop(timestamp) {
        var delta = prev ? timestamp - prev : 0;
        prev = timestamp;
        var height = window.innerHeight;

        for (var i = confetti.length-1; i >= 0; --i) {
          if (confetti[i].update(height, delta)) {
            container.removeChild(confetti[i].outer);
            confetti.splice(i, 1);
          }
        }

        if (timer || confetti.length)
          return frame = requestAnimationFrame(loop);

        // Cleanup
        document.body.removeChild(container);
        frame = undefined;
      });
    }
  }
  poof();
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
        confetti();
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

let roundNum;

function submitRounds() {
    const roundsInput = document.getElementById('roundsInput').value;
    if (roundsInput > 0) {
        roundNum = parseInt(roundsInput);
            
        // Hide the pop-up and reveal the content
        document.querySelector('.popUp').id = 'hidden';
        document.querySelector('.content').id = '';

        } else {
            alert("Please enter a valid number of rounds.");
    }

}

submitButton.addEventListener('click', submitRounds);
numberForm.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        submitRounds();
    }
});
rockButton.addEventListener('click',handleRockClick);
paperButton.addEventListener('click',handlePaperClick);
scissorsButton.addEventListener('click',handleScissorsClick);

