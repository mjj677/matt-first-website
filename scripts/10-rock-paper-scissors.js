let score = JSON.parse(localStorage.getItem('score')) ||{wins: 0, losses: 0, ties: 0};

updateScoreElement();

function playGame(playerMove){
  
  let compMove = pickCompMove();

  let result = '';
  if (playerMove === 'scissors'){
    if (compMove === 'rock'){
    result = 'You lose.';
  } else if (compMove === 'paper'){
    result = 'You win.';
  } else if (compMove === 'scissors'){
    result = 'Tie.';
  }

} else if(playerMove === 'paper'){
  if (compMove === 'rock'){
    result = 'You win.';
  } else if (compMove === 'paper'){
    result = 'Tie.';
  } else if (compMove === 'scissors'){
    result = 'You lose.';
  }

} else if(playerMove === 'rock'){
  if (compMove === 'rock'){
    result = 'Tie.';
  } else if (compMove === 'paper'){
    result = 'You lose.';
  } else if (compMove === 'scissors'){
    result = 'You win.';
  }
}

if (result === 'You win.'){
  score.wins += 1;
} else if (result === 'You lose.'){
  score.losses += 1;
} else if (result === 'Tie.'){
  score.ties += 1;
}


localStorage.setItem('score', JSON.stringify(score));
//localStorage only supports strings. SO, in order to save the score object, we convert it to a JSON.string as shown above.
updateScoreElement();
showResultElement(result);
showMoves(playerMove, compMove);
  }

  
  function showMoves(playerMove, compMove){
    document.querySelector('.js-moves').innerHTML = `You 
  <img src="../images/${playerMove}-emoji.png" class="move-icon">
  <img src="../images/${compMove}-emoji.png" class="move-icon">
  Computer`
  }
  
  
  
  function showResultElement(result){
  if (result === 'You win.'){
  document.querySelector('.js-result')
    .innerHTML = 'Win.'
} else if (result === 'You lose.'){
  document.querySelector('.js-result')
    .innerHTML = 'Lose.'
} else if (result === 'Tie.'){
  document.querySelector('.js-result')
    .innerHTML = 'Tie.'
}
}
  

  function updateScoreElement(){
    document.querySelector('.js-score')
  .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  }

function pickCompMove(){
  const randomNumber = Math.random();
  let compMove = '';


  if (randomNumber >= 0 && randomNumber < 1 / 3){
    compMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3){
    compMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    compMove = 'scissors';
  }


  return compMove;
}

function resetScore(){
  score = { wins: 0, losses: 0, ties: 0};
  localStorage.removeItem('score');
 updateScoreElement()
}