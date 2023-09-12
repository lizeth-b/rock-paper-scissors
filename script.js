const results = document.querySelector(".results-output");

function getComputerChoice() {
  const choices = ['ROCK', 'PAPER', 'SCISSORS'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    results.textContent += `Player: ${playerSelection}. Computer: ${computerSelection}. Draw!\n`;
    return 0;
  } else if (
    (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
    (playerSelection === 'PAPER' && computerSelection === 'ROCK') ||
    (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')
    ) {
    results.textContent += `Player: ${playerSelection}. Computer: ${computerSelection}. You win!\n`;
    return 1;
  } else {
    results.textContent += `Player: ${playerSelection}. Computer: ${computerSelection}. You lose!\n`;
    return -1;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  while (playerScore < 5 && computerScore < 5) {
    const playerInput = prompt("Rock, Paper, or Scissors?").toUpperCase();
    if (playerInput === 'ROCK' || playerInput === 'PAPER' || playerInput === 'SCISSORS') {
      const roundResult = playRound(playerInput, getComputerChoice());
      if (roundResult === 1) {
        playerScore++;
      } else if (roundResult === -1) {
        computerScore++;
      }
      results.textContent += `${playerScore}-${computerScore}\n\n`;
    } else {
      results.textContent += "Invalid input\n\n";
    }
  }
  
  let gameResult;
  if (playerScore > computerScore) {
    gameResult = "Player";
  } else if (computerScore > playerScore) {
    gameResult = "Computer";
  } else if (playerScore === computerScore) {
    gameResult = "Draw";
  }

  results.textContent += `Winner: ${gameResult}\n`;
}

game();