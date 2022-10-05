game();

// true = Player wins; false = CPU wins
function rpsWinner(playerDecision,cpuDecision) {
    let isWinner;
    // Checks all the different permutations of outcomes.
    if(playerDecision == 'paper' && cpuDecision == 'rock') isWinner = true;
    else if(playerDecision == 'paper' && cpuDecision == 'scissors') isWinner = false;
    else if(playerDecision == 'rock' && cpuDecision == 'scissors') isWinner = true;
    else if(playerDecision == 'rock' && cpuDecision == 'paper') isWinner = false;
    else if(playerDecision == 'scissors' && cpuDecision == 'paper') isWinner = true;
    else if(playerDecision == 'scissors' && cpuDecision == 'rock') isWinner = false;

    return isWinner;
}

function game() {
    let playerScore = 0;
    let cpuScore = 0;
    let isWinner;
    let playerDecision;
    let cpuDecision;

    let rpsArray = ['rock','paper','scissors'];

    for(let i = 0; i < 5; i++) {
        // Let user enter rock, paper, or scissors
        playerDecision = prompt("rock, paper, scissors");
        playerDecision = playerDecision.toLowerCase();
        cpuDecision = rpsArray[Math.floor(Math.random()*3)];

        while(!rpsArray.includes(playerDecision) || playerDecision == cpuDecision) {
            playerDecision = prompt("rock, paper, scissors");
            playerDecision = playerDecision.toLowerCase();
            cpuDecision = rpsArray[Math.floor(Math.random()*3)];
        }

        isWinner = rpsWinner(playerDecision,cpuDecision);

        if(isWinner) {
            playerScore++;
            console.log(`Round ${i+1}\nPlayer: ${playerDecision}\nCPU: ${cpuDecision}\nWinner: Player`);
        }
        else {
            cpuScore++;
            console.log(`Round ${i+1}\nPlayer: ${playerDecision}\nCPU: ${cpuDecision}\nWinner: CPU`);
        }
    }

    console.log(`Player Score: ${playerScore}\nCPU Score: ${cpuScore}`);
}