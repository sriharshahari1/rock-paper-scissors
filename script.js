let playerScore=0;
let compScore=0;


const playerscore=document.getElementById('playerscore');
const compscore=document.getElementById('compscore');
const winner=document.getElementById('winner');
const output=document.getElementById('output');
const rockbtn=document.getElementById('rock');
const paperbtn=document.getElementById('paper');
const scissorsbtn=document.getElementById('scissors');
//const compselection=document.getElementById('compselection');

rockbtn.addEventListener('click',() => {
    handleClick('rock');
})
paperbtn.addEventListener('click',() => {
    handleClick('paper');
})
scissorsbtn.addEventListener('click',() => {
    handleClick('scissors');
})


let choice=Math.floor(Math.random()*3);
let compChoice=['rock','paper','scissors'];
let compSelection=compChoice[choice];
console.log(compSelection);


function handleClick(playerSelection){
    round(playerSelection,compSelection);
}


function round(playerSelection,compSelection){
    if(playerSelection===compSelection) {
        output.textContent= "tie round";
    }
    else if(playerSelection=='rock'){
        if(compSelection=='scissors'){
            playerScore++;
            output.textContent="player wins round";
        }
        else {
            compScore++;
            output.textContent="player lose round";
        }
    }
        
    else if(playerSelection=='paper'){
        if(compSelection=='rock'){
            playerScore++;
            output.textContent="player wins round";
        }
        else {
            compScore++;
            output.textContent="player lose round";
        }
    }

    else if(playerSelection=='scissors'){
        if(compSelection=='paper'){
            playerScore++;
            output.textContent="player wins round";
        }
        else {
            compScore++;
            output.textContent="player lose round";
        }
    }
}



function game(){
   for(i=1;i<=5;i++){
       
    }
    if(playerScore>compScore){
        winner.textContent="player wins game";
    }
    else if(playerScore==compScore){
        winner.textContent="Game is a tie";
    }
    else {
        winner.textContent="Computer wins the game";
    }
}