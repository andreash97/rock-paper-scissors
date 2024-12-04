let humanScore = 0;
let computerScore = 0;
const rock = document.querySelector("#Rock");
const paper = document.querySelector("#Paper");
const scissors = document.querySelector("#Scissors");
const scoreSection = document.querySelector(".score");
const scoreText = document.createElement("div");
const score = document.createElement("div");
const winner = document.createElement("div");

const rockString = rock.id;
const paperString = paper.id;
const scissorsString = scissors.id;
scoreText.classList.add("score-text");
score.classList.add("score");

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
    alert("You win the game!");
  } else if (computerScore === 5) {
    alert("You lose the game!");
  }
}

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
