function getComputerChoice() {
  const choices = ['ROCK', 'PAPER', 'SCISSORS'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  pScoreboardStatus.classList.add("visible");
  cScoreboardStatus.classList.add("visible");
  if (playerSelection === computerSelection) {
    pScoreboardStatus.textContent = `${playerSelection} - Draw`;
    cScoreboardStatus.textContent = `${computerSelection} - Draw`;
    return 0;
  } else if (
    (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
    (playerSelection === 'PAPER' && computerSelection === 'ROCK') ||
    (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')
    ) {
    pScoreboardStatus.textContent = `${playerSelection} - Win`;
    cScoreboardStatus.textContent = `${computerSelection} - Lose`;
    return 1;
  } else {
    pScoreboardStatus.textContent = `${playerSelection} - Lose`;
    cScoreboardStatus.textContent = `${computerSelection} - Win`;
    return -1;
  }
}

function game(pInput, pScore, cScore) {
  if (pInput === 'ROCK' || pInput === 'PAPER' || pInput === 'SCISSORS') {
    const roundResult = playRound(pInput, getComputerChoice());
    if (roundResult === 1) {
      playerScore++;
      pScoreboardScore.textContent = playerScore;
    } else if (roundResult === -1) {
      computerScore++;
      cScoreboardScore.textContent = computerScore;
    }
  }

  if (playerScore === 5 || computerScore === 5) {
    if (playerScore > computerScore) {
      pScoreboardStatus.textContent += "\nWINNER";
      cScoreboardStatus.textContent += "\nLOSER";
    } else if (computerScore > playerScore) {
      pScoreboardStatus.textContent += "\nLOSER";
      cScoreboardStatus.textContent += "\nWINNER";
    }
    again.classList.add("visible");
  }
}

let playerScore = 0;
let computerScore = 0;
const pScoreboardScore = document.querySelector(".scoreboard-player-score");
const cScoreboardScore = document.querySelector(".scoreboard-computer-score");
const pScoreboardStatus = document.querySelector(".scoreboard-player-status");
const cScoreboardStatus = document.querySelector(".scoreboard-computer-status");
pScoreboardStatus.style.whiteSpace = "pre";
cScoreboardStatus.style.whiteSpace = "pre";
const buttons = document.querySelectorAll(".button");
const again = document.querySelector(".again");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (playerScore < 5 && computerScore < 5) {
      game(e.target.dataset.choice.toUpperCase(), playerScore, computerScore);
    }
  });
});

again.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  pScoreboardScore.textContent = playerScore;
  cScoreboardScore.textContent = computerScore;
  pScoreboardStatus.textContent = "0";
  cScoreboardStatus.textContent = "0";
  pScoreboardStatus.classList.remove("visible");
  cScoreboardStatus.classList.remove("visible");
  again.classList.remove("visible");
});