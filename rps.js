function getComputerChoice() {

    let choice = Math.floor(Math.random() * 3);

    switch(choice){
        case 0: return 'Rock';
        case 1: return 'Paper';
        case 2: return 'Scissors';
        default: return 'Unknown';
    }
}

function getPlayerChoice() {

    let choice = Math.floor(Math.random() * 3);
    
    switch(choice){
        case 0: return 'Rock';
        case 1: return 'Paper';
        case 2: return 'Scissors';
        default: return 'Unknown';
    }
}

function playGame() {

    let result = gameResult(getPlayerChoice(), getComputerChoice());
    
    switch(result){
        case 'player': 
            playerScore++; 
            console.log(playerScore);
            return 'Player wins this round!';
        case 'computer': 
            computerScore++;
            console.log(computerScore);
            return 'Computer wins this round!';
        default: return 'Draw!';
    }
}

function gameResult(playerChoice, computerChoice) {

    console.log(`Player: ${playerChoice} \nComputer: ${computerChoice}`);

    if ((playerChoice === 'Rock' && computerChoice == 'Scissors')
        || (playerChoice === 'Paper' && computerChoice == 'Rock')
        || (playerChoice === 'Scissors' && computerChoice == 'Paper')){
            return 'player';
    }
    else if ((playerChoice === 'Rock' && computerChoice == 'Paper')
    || (playerChoice === 'Paper' && computerChoice == 'Scissors')
    || (playerChoice === 'Scissors' && computerChoice == 'Rock')){
        return 'computer';
    }
    else{
        return 'tie';
    }
}

function determineWinner() {
    if (playerScore > computerScore) {
        return `Player wins the game ${playerScore}-${computerScore}`
    }
    else if (playerScore < computerScore) {
        return `Computer wins the game ${computerScore}-${playerScore}`
    }
    else {
        return `Competitors draw ${playerScore}-${computerScore}`
    }
}

let playerScore = 0;
let computerScore = 0;

console.log('Rock: 0 \nPaper: 1\nScissors: 2');

for (let i=0; i<5; i++){
    console.log(playGame());
}

console.log(determineWinner());