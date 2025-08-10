
// Global Declarations

let humanPoints = 0;
let computerPoints = 0;

// Games to play

for (let i = 0; i < 5; i++) {
    playGame();
    let winner = winDetermine(humanPoints, computerPoints);
    if (i === 4) {
        console.log("The game is over");
        console.log(winner);
        console.log("Human points: ", humanPoints);
        console.log("Computer Points: ", computerPoints);
    }
}

function winDetermine(hPoints, cPoints) {
    if (hPoints > cPoints) {
        return "The human wins!";
    }
    else if (cPoints > hPoints) {
        return "The computer wins.";
    }
    else if (cPoints === hPoints) {
        return "It's a draw!";
    }
}

function playGame() {
    // Functions

    function getComputerChoice() {
        let randomNum = Math.random();
        if (randomNum <= 0.33) {
            return("rock");
        }
        else if (randomNum <= 0.66 && randomNum > 0.33) {
            return("paper");
        }
        else if (randomNum <= 1 && randomNum > 0.66)
            return("scissors");
    }


    function getHumanChoice() {
        let humanChoice = prompt("Choose your weapon (rock, paper, scissors):").toLowerCase();
        return(humanChoice);
    }

    function playRound(human, computer) {

        console.log("human choice: ",human);
        console.log("computer choice: ",computer);

        // Messages
        let drawMessage = "You drew.";
        let compWinMessage = "The computer won.";
        let humWinMessage = "You won.";

        //computer points

        if ((human === "scissors" && computer === "paper") || (human === "paper" && computer === "rock") || (human === "rock" && computer === "scissors")) {
            console.log(humWinMessage);
            humanPoints++;
        }
        else if ((computer === "scissors" && human === "paper") || (computer === "paper" && human === "rock") || (computer === "rock" && human === "scissors")) {
            console.log(compWinMessage);
            computerPoints++;
        }
        else if ((human === "scissors" && computer === "scissors") || (human === "rock" && computer === "rock") || (human === "paper" && computer === "paper")) {
            console.log(drawMessage);
        
    }


    playRound(getHumanChoice(), getComputerChoice());

}