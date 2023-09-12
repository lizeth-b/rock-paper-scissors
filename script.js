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

function game(pInput, pScore, cScore) {
  if (pInput === 'ROCK' || pInput === 'PAPER' || pInput === 'SCISSORS') {
    const roundResult = playRound(pInput, getComputerChoice());
    if (roundResult === 1) {
      playerScore++;
    } else if (roundResult === -1) {
      computerScore++;
    }
    results.textContent += `${playerScore}-${computerScore}\n\n`;
  } else {
    results.textContent += "Invalid input\n\n";
  }

  if (playerScore === 5 || computerScore === 5) {
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
}

let playerScore = 0;
let computerScore = 0;
const results = document.querySelector(".results-output");
results.style.whiteSpace = "pre";
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (playerScore < 5 && computerScore < 5) {
      game(e.target.textContent.toUpperCase(), playerScore, computerScore);
    }
  });
});