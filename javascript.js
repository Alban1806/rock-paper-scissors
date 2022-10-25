// Create HTML for game
const rpsContainer = document.createElement('div');
rpsContainer.setAttribute('id','rps-container');
rpsContainer.style.cssText = `
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    margin-top: 100px;
`;

const title = document.createElement('div');
title.setAttribute('id','title');
title.textContent = 'Player vs. CPU';
title.style.cssText = `
    text-align: center;
`

const headerContainer = document.createElement('div');
headerContainer.setAttribute('id','header-container');
headerContainer.style.cssText = `
    padding: 10px;
    border: solid black 1px;
    background-color: lightgrey;
`;

const buttonContainer = document.createElement('div');
buttonContainer.setAttribute('id','button-container');
buttonContainer.style.cssText = `
    margin: 20px;
`;

const rockButton = document.createElement('button');
rockButton.textContent = 'Rock';
const paperButton = document.createElement('button');
paperButton.textContent = 'Paper';
const scissorsButton = document.createElement('button');
scissorsButton.textContent = 'Scissors';

buttonContainer.appendChild(rockButton);
buttonContainer.appendChild(paperButton);
buttonContainer.appendChild(scissorsButton);

headerContainer.appendChild(title);
headerContainer.appendChild(buttonContainer);
rpsContainer.appendChild(headerContainer);

const scoreBoard = document.createElement('div');
const player = document.createElement('div');
const cpu = document.createElement('div');
const winner = document.createElement('div');

// Keep track of score
let round = 1;
let playerScore = 0;
let cpuScore = 0;
player.textContent = 'Player 1: ' + playerScore;
cpu.textContent = 'CPU: ' + cpuScore;

scoreBoard.setAttribute('id','score-board');
scoreBoard.style.cssText = `
    margin:10px;
`
scoreBoard.appendChild(player);
scoreBoard.appendChild(cpu);
scoreBoard.appendChild(winner);
rpsContainer.appendChild(scoreBoard);

document.body.appendChild(rpsContainer)


// Let players click rps button to decide move.
console.log('Let\s play rock paper scissors');
console.log('First opponent to score 3 points wins!');

rockButton.addEventListener('click', e => {playGame(e)});
paperButton.addEventListener('click', e => {playGame(e)});
scissorsButton.addEventListener('click', e => {playGame(e)});


// Event action listener to play game by picking rock,paper, or scissor button.
function playGame(e) {
    let isWinner;
    let playerDecision;
    let cpuDecision;

    let rpsArray = ['rock','paper','scissors'];

    if(playerScore == 3) {return;} 
    if(cpuScore == 3) {return;}

    playerDecision = e.target.innerText.toLowerCase();
    cpuDecision = rpsArray[Math.floor(Math.random()*3)];
    
    isWinner = rpsWinner(playerDecision,cpuDecision);
    
    if(isWinner == 1) {
        playerScore++;
        player.textContent = 'Player: ' + playerScore;
        console.log(`Round ${round}\nPlayer: ${playerDecision}\nCPU: ${cpuDecision}\nWinner: Player`);
    }
    else if(isWinner == 2) {
        cpuScore++;
        cpu.textContent = 'CPU: ' + cpuScore;
        console.log(`Round ${round}\nPlayer: ${playerDecision}\nCPU: ${cpuDecision}\nWinner: CPU`);
    }
    else {
        console.log(`Round ${round}\nPlayer: ${playerDecision}\nCPU: ${cpuDecision}\nTie`);
    }

    round++;

    if(playerScore == 3) {winner.textContent = 'Player Wins!'; return;} 
    if(cpuScore == 3) {winner.textContent = 'CPU Wins!'; return;}
}

// 0 = Tie Game; 1 = Player wins; 2 = CPU wins
function rpsWinner(playerDecision,cpuDecision) {
    let isWinner;
    // Checks all the different permutations of outcomes.
    if(playerDecision == 'paper' && cpuDecision == 'rock') isWinner = 1;
    else if(playerDecision == 'paper' && cpuDecision == 'scissors') isWinner = 2;
    else if(playerDecision == 'rock' && cpuDecision == 'scissors') isWinner = 1;
    else if(playerDecision == 'rock' && cpuDecision == 'paper') isWinner = 2;
    else if(playerDecision == 'scissors' && cpuDecision == 'paper') isWinner = 1;
    else if(playerDecision == 'scissors' && cpuDecision == 'rock') isWinner = 2;
    else isWinner = 0;

    return isWinner;
}