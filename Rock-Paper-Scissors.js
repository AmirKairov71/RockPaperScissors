const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'scissors' || userInput ==='paper' || userInput === 'bomb'){
    return userInput;
  }else{
    console.log('Error');
  }
};
const getComputerChoice = () => {
 const randomNumber = Math.floor(Math.random()*3);
  switch(randomNumber){
  case 0:
  return 'rock';
  break;
  case 1:
  return 'scissors';
  case 2:
  return 'paper';
}
  }
  const determineWinner = (userChoice,computerChoice) =>{
    if(userChoice === computerChoice){
      return 'The game is a tie!';
    }
    if(userChoice === 'rock'){
      if(computerChoice === 'paper'){
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }
    if(userChoice === 'paper'){
      if(computerChoice === 'scissors'){
        return 'Computer won!'
      }else{
        return 'You won!'
      }
    }
    if(userChoice === 'scissors'){
      if(computerChoice === 'rock'){
        return 'Computer won!';
      } else{
        return 'You won';
      }

    }
    if(userChoice === 'bomb'){
      if(computerChoice === 'rock' || computerChoice === 'scissors' || computerChoice === 'paper'){
        return 'user Won!';
      }
    }
    
  }
const playGame = () => {
  const userChoice = getUserChoice('paper');
  const computerChoice = getComputerChoice();
  console.log('You threw' + ' ' +userChoice);
  console.log('Computer threw' + ' '+computerChoice);
  console.log(determineWinner(userChoice,computerChoice));
}
playGame() //run game
