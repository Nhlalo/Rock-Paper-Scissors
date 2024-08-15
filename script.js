const rock = 0; // Set the variable of rock to 0
const paper = 1; // Set the variable of paper to 1
const scissors = 2; // Set the variable of scissors to 2
const humanScore = 0; // Set the humanScore variable to 0;
const computerScore = 0; // Set the computerScore variable to 0;

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
}

}

//This function will determine the winner of the game of 5 rounds of play
function playGame(){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    for( let i = 0; i < 5; i++){
        playRound(humanSelection, computerSelection);
        if(humanScore == 5){
            console.log('You Win the 5 game series!');
        }else{
            console.log('You lose the 5 game series!')
        }
        i++
    }
}


