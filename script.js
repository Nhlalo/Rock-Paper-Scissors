const rock = 0; // Set the variable of rock to 0
const paper = 1; // Set the variable of paper to 1
const scissors = 2; // Set the variable of scissors to 2

//This is a function to make the computer randomly choose between 0,1 and 2.
function getComputerChoiceO(cmputerChoice){
    return (Math.floor(Math.random() * 3)) // Expected outputL 0, 1 or 2
}
