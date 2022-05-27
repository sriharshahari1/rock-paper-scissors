//Initial values
let playerScore=0;
let compScore=0;
let roundWinner='';

//UI declarations
const cselection=document.getElementById('cselection');
let pscore=document.getElementById('pscore');
let cscore=document.getElementById('cscore');
const winner=document.getElementById('winner');
const output=document.getElementById('output');
const rockbtn=document.getElementById('rock');
const paperbtn=document.getElementById('paper');
const scissorsbtn=document.getElementById('scissors');

//Event Listeners
rockbtn.addEventListener('click',() => {
    handleClick('rock');
})
paperbtn.addEventListener('click',() => {
    handleClick('paper');
})
scissorsbtn.addEventListener('click',() => {
    handleClick('scissors');
})


//Handleclick function
function handleClick(playerSelection){
    let compSelection=getRandomNumber();
    cselection.textContent=compSelection;
    round(playerSelection,compSelection);
}



//Main logic for 1 round
function round(playerSelection,compSelection){
    if(playerSelection===compSelection) {
        roundWinner='tie';
    }

    else if(playerSelection=='rock'){
        if(compSelection=='scissors'){
            playerScore++;
            roundWinner="player";
        }
        else {
            compScore;
            roundWinner="computer";
        }
    }
        
    else if(playerSelection=='paper'){
        if(compSelection=='rock'){
            playerScore++;
            roundWinner="player";
        }
        else {
            compScore++;
            roundWinner="computer";
        }
    }

    else if(playerSelection=='scissors'){
        if(compSelection=='paper'){
            playerScore++;
            roundWinner="player";
        }
        else {
            compScore++;
            roundWinner="computer";
        }
    }


    //declaring winner for 1 round
    if(roundWinner=='player'){
        output.textContent="player wins!";
    }
    else if(roundWinner=='computer'){
        output.textContent="computer wins!";
    }
    else if(roundWinner=='tie'){
        output.textContent="round is a tie";
    }


    pscore.textContent=`${playerScore}`;
    cscore.textContent=`${compScore}`;

    
    //declaring game winner
    if(playerScore==5){
        winner.textContent="player wins game";
    }
    else if(compScore==5){
        winner.textContent="Computer wins the game";
    }
}

//logic to get a random number
function getRandomNumber(){
    let number=Math.floor(Math.random()*3);
    switch (number){
        case 0:
            return 'rock'
        case 1:
            return 'paper'
        case 2:
            return 'scissors'
    }
}

