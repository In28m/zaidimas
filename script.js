var playerOneClicks = 0;
var playerTwoClicks = 0;

function points(player) {
  var numberInput = document.getElementById('numberInput');
  var inputValue = parseInt(numberInput.value);

  var points = 0;

  if (inputValue % 3 === 0) {
    points += 2;
  }

  if (inputValue % 5 === 0) {
    points += 3;
  }

  if (inputValue % 2 === 0) {
    points += 1;
  } else {
    points += 5;
  }

  if (inputValue % 10 === 0) {
    points += 10;
  }

  if (player === 'playerOne' && playerOneClicks < 10) {
    playerOneClicks++;
  } else if (player === 'playerTwo' && playerTwoClicks < 10) {
    playerTwoClicks++;
  }

  updateResult();
}

function updateResult() {
  var resultDiv = document.getElementById('result');
  var playerOneText = `${playerOneClicks}`;
  var playerTwoText = `${playerTwoClicks}`;
  resultDiv.innerHTML = `${playerOneText} to ${playerTwoText}`;
}

function resetGame() {
  playerOneClicks = 0;
  playerTwoClicks = 0;
  updateResult();
}

function updatePlayingToHeader() {
  var numberInput = document.getElementById('numberInput');
  var inputValue = parseInt(numberInput.value);

  var playingToHeader = document.getElementById('playingTo');
  playingToHeader.textContent = `Playing to: ${inputValue}`;
  updateResult();
}

document.getElementById('numberInput').addEventListener('change', updatePlayingToHeader);
updatePlayingToHeader();





