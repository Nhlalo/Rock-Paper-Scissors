let humanScore = 0; // Set the humanScore variable to 0;
let computerScore = 0; // Set the computerScore variable to 0;

//This is a function to make the computer randomly choose between 0,1 and 2.
function getComputerChoice(){
    return (Math.floor(Math.random() * 3)) // Expected outputL 0, 1 or 2
}

//This is a function to get the input of user and the user must choose between rock, paper and scissor.
function getHumanChoice(){
    return prompt('Choose between rock, paper and scissor', 'rock').toLowerCase()
}

//This function wil determmince will take the human and computer choices and determine which of the two won the round.
function playRound(humanChoice, computerChoice){

// The choices made by the user and computer will the determine the winner and loser of each round
if(humanChoice == 'rock' && computerChoice == 2){ 
    console.log('You win! Rock beats Scissor');
    ++humanScore;
}else if(humanChoice == 'paper' && computerChoice == 0){
    console.log('You win! Paper beats Rock');
    ++humanScore;
}else if(humanChoice == 'scissor' && computerChoice == 1){
    console.log('You win! Scissor beats Paper');
    ++humanScore;
}else if(humanChoice == 'rock' && computerChoice == 1){
    console.log('You lose! Paper beats Rock');
    ++computerScore;
}else if(humanChoice == 'paper' && computerChoice == 2){
    console.log('You lose! Scissor beats Paper ');
    ++computerScore;
}else if(humanChoice == 'scissor' && computerChoice == 0){
    console.log( 'You lose! Rock beats Scissor');
    ++computerScore;
}else{
    console.log("It's a draw!")
}

}

//This function will determine the winner of the game of 5 rounds of play
function playGame(){
    
    //This will make sure there are five rounds to play in order to determine the overall winner and if the winner has been decided, the game will reset
    for( let i = 0; i < Infinity; i++){
        const humanSelection = getHumanChoice(); // make the variable equal to the getHumanChoice function
        const computerSelection = getComputerChoice(); // make the variable equal to the getComputerChoice function
    
        playRound(humanSelection, computerSelection);
        //If the user reaches the score of 5 first, the code within will be executed
        if(humanScore == 5){
            console.log('You Win the 5 game series!');
            humanScore = 0; // Set the human score to 0;
            computerScore = 0; // Set the human score to 0;
            
        }else if(computerScore == 5){ //If the user reaches the score of 5 first, the code within will be executed
            console.log('You lose the 5 game series!')
            humanScore = 0;
            computerScore = 0;
            
        }
        
    }
}
playGame(); // This will call the play game function./


