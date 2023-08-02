function getComputerChoice() {
  let choices = ['ROCK', 'PAPER', 'SCISSORS'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log(`Player: ${playerSelection}. Computer: ${computerSelection}. Draw!`);
    return 0;
  }
  else if (
    (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
    (playerSelection === 'PAPER' && computerSelection === 'ROCK') ||
    (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')
    ) {
    console.log(`Player: ${playerSelection}. Computer: ${computerSelection}. You win!`);
    return 1;
  }
  else {
    console.log(`Player: ${playerSelection}. Computer: ${computerSelection}. You lose!`);
    return -1;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  while (playerScore < 5 && computerScore < 5) {
    let playerInput = prompt("Rock, Paper, or Scissors?").toUpperCase();
    if (playerInput === 'ROCK' || playerInput === 'PAPER' || playerInput === 'SCISSORS') {
      let roundResult = playRound(playerInput, getComputerChoice());
      if (roundResult === 1) {
        playerScore++;
      }
      else if (roundResult === -1) {
        computerScore++;
      }
      console.log(`${playerScore}-${computerScore}`);
    }
    else {
      console.log("Invalid input");
    }
  }
  
  let gameResult;
  if (playerScore > computerScore) {
    gameResult = "Player";
  }
  else if (computerScore > playerScore) {
    gameResult = "Computer"
  }
  else if (playerScore === computerScore) {
    gameResult = "Draw"
  }

  console.log(`Winner: ${gameResult}`)
}

game();