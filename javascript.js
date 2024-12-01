let humanScore = 0;
let computerScore = 0;
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const scoreSection = document.querySelector(".score");
const scoreText = document.createElement("div");
const score = document.createElement("div");
const winner = document.createElement("div");

const rockString = rock.textContent;
const paperString = paper.textContent;
const scissorsString = scissors.textContent;
scoreText.classList.add("score-text");
score.classList.add("score");
winner.classList.add("winner");

function getCoumputerChoice() {
  const result = Math.random();

  if (result < 1 / 3) {
    return "Rock";
  } else if (result < 2 / 3) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

// function getHumanChoice() {
//   let userInput = prompt("Rock, Paper or Scissors?");

//   if (
//     userInput === "Rock" ||
//     userInput === "Paper" ||
//     userInput === "Scissors"
//   ) {
//     return userInput;
//   } else {
//     return "Not a valid choice";
//   }
// }

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    scoreText.textContent = `Its a draw! Both parties chose ${humanChoice}`;
    score.textContent = `${humanScore} - ${computerScore}`;
  } else if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    humanScore++;
    scoreText.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    score.textContent = `${humanScore} - ${computerScore}`;
  } else {
    computerScore++;
    scoreText.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    score.textContent = `${humanScore} - ${computerScore}`;
  }

  if (humanScore === 5) {
    winner.textContent = "You win the game!";
  } else if (computerScore === 5) {
    winner.textContent = "You lose the game!";
  }
}

// function playGame() {

//   for (let i = 0; i < 5; i++) {
//     const humanSelection = getHumanChoice();
//     const computerSelection = getCoumputerChoice();
//     playRound(humanSelection, computerSelection);
//   }
// }

rock.addEventListener("click", () => {
  const computerSelection = getCoumputerChoice();
  playRound(rockString, computerSelection);
});

paper.addEventListener("click", () => {
  const computerSelection = getCoumputerChoice();
  playRound(paperString, computerSelection);
});

scissors.addEventListener("click", () => {
  const computerSelection = getCoumputerChoice();
  playRound(scissorsString, computerSelection);
});

scoreSection.appendChild(score);
scoreSection.appendChild(scoreText);
scoreSection.appendChild(winner);
