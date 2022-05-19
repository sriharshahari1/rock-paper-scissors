function game(){
    let playerScore=0;
    let compScore=0;
    for(i=1;i<=5;i++){
        let choice=Math.floor(Math.random()*3);
        let compChoice=['rock','paper','scissors'];
        let compSelection=compChoice[choice];
        let playerChoice=prompt("what is your choice?");
        let playerSelection=playerChoice.toLowerCase();
        console.log(compSelection);
        function round(playerSelection,compSelection){
            if(playerSelection===compSelection) {
                return "tie round";
            }
            else if(playerSelection=='rock'){
                if(compSelection=='scissors'){
                    playerScore++;
                    return "player wins round";
                }
                else {
                    compScore++;
                    return "player lose round";
                }
            }
        
            else if(playerSelection=='paper'){
                if(compSelection=='rock'){
                    playerScore++;
                    return "player wins round";
                }
                else {
                    compScore++;
                    return "player lose round";
                }
            }

            else if(playerSelection=='scissors'){
                if(compSelection=='paper'){
                    playerScore++;
                    return "player wins round";
                }
                else {
                    compScore++;
                    return "player lose round";
                }
            }
        }

        console.log(round(playerSelection,compSelection));
    }
    console.log(playerScore);
    console.log(compScore);
    if(playerScore>compScore){
        return "player wins game";
    }
    else if(playerScore==compScore){
        return "Game is a tie";
    }
    else {
        return "Computer wins the game";
    }
}

console.log(game());