//math.random * 3 = range to 2
let userScore = 0;
let compScore = 0

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");


const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    //generating random numbers (idx)
    const randIdx = Math.floor(Math.random() * 3); 
    return options[randIdx];

};

const drawGame = () =>{
    msg.inneText = "Game was Draw!. Play Again"
}
const userScorepara = document.querySelector("#user-score");
const comScorepara = document.querySelector("#comp-score");





const showWinner = (userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You Win!. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"
    }
    else {
        compScore++;
        comScorepara.innerText = compScore;
        msg.innerText = `You Lose!. ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }   
}
//user choice
const playGame = (userChoice) =>{
    //generate computer choice.
    const compChoice = genCompChoice();
    if (userChoice === compChoice){
        //Draw
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice === "rock"){
            //scissors, paper
            userWin = compChoice === "paper" ? false : true
        }
        else if(userChoice=== "paper"){
            // rock, scissors.
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            // rock , paper
            userWin = compChoice === "rock" ? false : true ;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    })
})



