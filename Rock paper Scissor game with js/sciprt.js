let userScore = 0;
let compScore = 0;

let msg = document.querySelector('#msg');
let choices = document.querySelectorAll('.choice');

const userScorePara = document.querySelector('#user_score');
const compScorePara = document.querySelector('#computer_score');

const genCompChoice = () => {
    const options = ['rock','paper','scissors'];
    const randomIndx = Math.floor(Math.random() *3);    
    return  options[randomIndx];
}


choices.forEach( (choice) => {
    choice.addEventListener('click',() => {
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    })
})
const drawGame = () => {
    msg.innerText = "Game Was Draw . Play again!";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin,userChoice,compChoice) => {
   if(userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "#198754";
   } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Lose. ${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";
   }
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        drawGame();
    } else {
      let  userWin = true;
        if(userChoice === 'rock'){
            // paper, scissor
          userWin = compChoice === 'paper' ? false : true ;
        } else if (userChoice === 'paper') {
            // rock , scissor
          userWin = compChoice === 'rock' ? true : false;  
        } else {
            // rock , paper 
            userWin = compChoice === 'rock'? false : true;
        }
        showWinner (userWin,userChoice,compChoice);
    }
}
