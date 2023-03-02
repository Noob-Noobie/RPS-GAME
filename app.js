// <!-- Define options for the game -->
const options = ['rock', 'paper', 'scissors'];

// <!-- // Function to generate a random option -->
function computerPlay() {
  return options[Math.floor(Math.random() * options.length)];
}

// <!-- // Function to play a round of the game -->
function playRound(playerSelection, computerSelection) {

//   <!-- // Make the inputs case insensitive -->
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
}

// <!-- // Play a game of five rounds -->
function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt('Choose rock, paper, or scissors:');
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    console.log(result);

    if (result.includes('win')) {
      playerScore++;
    } else if (result.includes('lose')) {
      computerScore++;
    }
  }

  if (playerScore > computerScore) {
    console.log(`You win the game! Final score: ${playerScore}-${computerScore}`);
  } else if (computerScore > playerScore) {
    console.log(`You lose the game! Final score: ${computerScore}-${playerScore}`);
  } else {
    console.log(`It's a tie! Final score: ${playerScore}-${computerScore}`);
  }
}

// <!-- // Play the game -->
game();
