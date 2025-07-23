function getComputerChoice() {
    let randomNum = Math.random();
    console.log(randomNum);
    if (randomNum <= 0.33) {
        return("rock");
    }
    else if (randomNum <= 0.66 && randomNum > 0.33) {
        return("paper");
    }
    else if (randomNum <= 1 && randomNum > 0.66)
        return("scissors")
}

let comp = getComputerChoice();
let human = getHumanChoice();
console.log(comp)
console.log(human)

function getHumanChoice() {
    let humanChoice = prompt("Choose your weapon (rock, paper, scissors):");
    return(humanChoice);
}