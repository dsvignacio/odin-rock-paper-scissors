function getComputerChoice() {
  /*
  Thus function gets random numbers from 0 to 2.

  Since Math.random() only gives out random values between 0 and 1,
  we want to multiply 3 to it to get a random value from 0 to 2,
  with some additional values after the decimal point.

  Next, we just want to get the whole number before the decimal point.

  And finally, we add 1 to get random values from 1 to 3, instead of 0 to 2.
  */
  const computerChoice = Math.floor(Math.random() * 3) + 1;
  let returnComputerChoice = null;
  switch(computerChoice) {
    case 1:
      returnComputerChoice = "rock";
      break;
    case 2:
      returnComputerChoice = "paper";
      break;
    case 3:
      returnComputerChoice = "scissors";
      break;
  }
  return returnComputerChoice;
}

function getHumanChoice() {
  const humanChoice = prompt("Enter choice: rock, paper, scissors");
  return humanChoice;
}

function playRound(humanChoice, computerChoice, humanScore, computerScore) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice == computerChoice) {
    console.log(`It's a tie! You both chose ${humanChoice}.`);
  } else {
    switch(humanChoice) {
      case "rock":
        if(computerChoice == "paper") {
          computerScore++;
          console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        } 
        else {
          humanScore++;
          console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        } 
        break;
      case "paper":
        if(computerChoice == "scissors") {
          computerScore++;
          console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        } 
        else {
          humanScore++;
          console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        } 
        break;
      case "scissors":
        if(computerChoice == "rock") {
          computerScore++;
          console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        } 
        else {
          humanScore++;
          console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        } 
        break;
    }
  }

  return [humanScore, computerScore];
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  for(let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    humanScore, computerScore = playRound(
      humanSelection, 
      computerSelection, 
      humanScore, 
      computerScore
    );
  }
}

playGame()