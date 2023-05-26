function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection === 'rock') {
      if (computerSelection === 'Rock') {
        return "It's a tie! Rock can't beat Rock.";
      } else if (computerSelection === 'Paper') {
        return "You lose! Paper beats Rock.";
      } else {
        return "You win! Rock beats Scissors.";
      }
    } else if (playerSelection === 'paper') {
      if (computerSelection === 'Rock') {
        return "You win! Paper beats Rock.";
      } else if (computerSelection === 'Paper') {
        return "It's a tie! Paper can't beat Paper.";
      } else {
        return "You lose! Scissors beat Paper.";
      }
    } else if (playerSelection === 'scissors') {
      if (computerSelection === 'Rock') {
        return "You lose! Rock beats Scissors.";
      } else if (computerSelection === 'Paper') {
        return "You win! Scissors beat Paper.";
      } else {
        return "It's a tie! Scissors can't beat Scissors.";
      }
    } else {
      return "Invalid selection. Please choose either Rock, Paper, or Scissors.";
    }
  }
  
  function game() {
    let playerScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < 5; i++) {
      const playerSelection = prompt("Enter your choice (Rock, Paper, or Scissors):");
      const computerSelection = getComputerChoice();
      const result = playRound(playerSelection, computerSelection);
      
      console.log(result);
      
      if (result.includes("win")) {
        playerScore++;
      } else if (result.includes("lose")) {
        computerScore++;
      }
    }
    
    console.log("Game over!");
    console.log("Player score: " + playerScore);
    console.log("Computer score: " + computerScore);
    
    if (playerScore > computerScore) {
      console.log("Congratulations! You win the game!");
    } else if (playerScore < computerScore) {
      console.log("Sorry, you lose the game. Better luck next time!");
    } else {
      console.log("It's a tie! The game ends in a draw.");
    }
  }
  
  // Call the game function to start playing
  game();
  