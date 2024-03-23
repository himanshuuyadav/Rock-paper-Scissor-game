let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const getCompChoice = () => {
    const options = ["rock", "paper", "scissors"]
    let index = Math.floor(Math.random() * 3);
    return options[index];
}
let userScoreChange = document.querySelector("#userScore");
let compScoreChange = document.querySelector("#compScore");
const msg = document.querySelector("#msg");
const drawGame = () => {
    console.log("Game was draw");
    msg.innerText = "Game was draw!";
    msg.style.backgroundColor = "rgb(8, 8, 53"
}
const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        console.log("You Won!!");
        msg.innerText = `You Won! Computer chose ${compChoice}`;
        userScoreChange.innerText = userScore;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        console.log("You Lost!");
        msg.innerText = `You lost! Computer chose ${compChoice}`;
        compScoreChange.innerText = compScore;
        msg.style.backgroundColor = "red";
    }
}
let compChoice;
const playGame = (userChoice) => {
    console.log("User choice =", userChoice);
    compChoice = getCompChoice();
    console.log("Comp choice =", compChoice);
    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }
        else if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }

};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
