// console.log("Hello")

function getComputerChoice() {
  const numRand = Math.floor(Math.random() * 3);
  switch (numRand) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      return null;
  }
}

console.log(getComputerChoice());