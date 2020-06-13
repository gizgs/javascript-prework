let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

function getMoveName(move) {
  if (move == 1) {
      return 'kamień';
  } else if (move == 2) {
      return 'papier';
  } else if (move == 3) {
      return 'nożyczki'
  } else {
      printMessage('Nie znam ruchu o id ' + move + '.');
      return 'nieznany ruch';
  }
}

function diplayResult(argComputerMove, argPlayerMove) {

  if (argComputerMove == argPlayerMove) {
      printMessage('Remis');
  } else if (
      (argComputerMove == 'kamień' && argPlayerMove == 'papier')
      ||
      (argComputerMove == 'papier' && argPlayerMove == 'nożyczki')
      ||
      (argComputerMove == 'nożyczki' && argPlayerMove == 'kamień')
  ) {
      printMessage('Ty wygrywasz!');
  } else {
      printMessage('Ja wygrywam!');
  }

}

let randomNumber = Math.floor(Math.random() * 3 + 1);

let computerMove = getMoveName(randomNumber);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

let playerMove = getMoveName(playerInput);

diplayResult(computerMove, playerMove);
