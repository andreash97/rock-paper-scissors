let userInput = prompt("Rock, Paper or Scissors?");

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

function getHumanChoice(input) {
    if (input === "Rock" || input === "Paper" || input === "Scissors") {
        return input;
    } else {
        return "Not a valid choice!"
    }
}

console.log(getCoumputerChoice());

console.log(getHumanChoice(userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase()));