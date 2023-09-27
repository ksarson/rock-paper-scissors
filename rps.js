function playGame(playerChoice) {

    let result = gameResult(playerChoice, getComputerChoice());
    gamesPlayed++;

    switch(result){
        case 'player': 
            playerScore++; 
            document.getElementById('results').innerHTML = 'Player wins this round!';
            break;
        case 'computer': 
            computerScore++;
            document.getElementById('results').innerHTML = 'Computer wins this round!';
            break;
        default: 
            draws++;
            document.getElementById('results').innerHTML = 'Round drawn!';
            break;
    }

    let scoresText = `Games: ${gamesPlayed} <br/> 
                    Player: ${playerScore} <br/> 
                    Computer: ${computerScore} <br/> 
                    Draws: ${draws}`;

    document.getElementById('score').innerHTML = scoresText;

    if (gamesPlayed === 5){
        determineWinner();
        disableButtons();
    }
    return;
}

function getComputerChoice() {

    let choice = Math.floor(Math.random() * 3);

    switch(choice){
        case 0: return 'Rock';
        case 1: return 'Paper';
        case 2: return 'Scissors';
        default: return 'Unknown';
    }
}

function gameResult(playerChoice, computerChoice) {

    document.getElementById('choices').innerHTML = `Player: ${playerChoice} <br/> Computer: ${computerChoice}`;

    if ((playerChoice === 'Rock' && computerChoice == 'Scissors')
        || (playerChoice === 'Paper' && computerChoice == 'Rock')
        || (playerChoice === 'Scissors' && computerChoice == 'Paper'))
        {
        return 'player';
    }
    else if ((playerChoice === 'Rock' && computerChoice == 'Paper')
        || (playerChoice === 'Paper' && computerChoice == 'Scissors')
        || (playerChoice === 'Scissors' && computerChoice == 'Rock'))
    {
        return 'computer';
    }
    else{
        return 'tie';
    }
}

function determineWinner() {
    if (playerScore > computerScore){
        document.getElementById('winner').innerHTML = 'Player Wins the Match!';
        return;
    }
    else if (playerScore < computerScore){
        document.getElementById('winner').innerHTML = 'Computer Wins the Match!';
        return;
    }
    else{
        document.getElementById('winner').innerHTML = 'Match drawn!';
        return;
    }
}

function disableButtons() {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}

let gamesPlayed = 0;
let playerScore = 0;
let computerScore = 0;
let draws = 0;

document.getElementById("rock").addEventListener("click", () => playGame("Rock"));
document.getElementById("paper").addEventListener("click", () => playGame("Paper"));
document.getElementById("scissors").addEventListener("click", () => playGame("Scissors"));