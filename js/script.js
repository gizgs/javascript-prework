let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

function getMoveName(randomNumber){
  if(randomNumber == 1){
    return 'kamień';
  } else if(randomNumber == 2){
    return 'papier';
  } else if (randomNumber == 3){
    return 'nożyczki'
  } else {
    printMessage('Nie znam ruchu o id ' + randomNumber + '.');
    return 'nieznany ruch';
  }
}

let computerMove = getMoveName;

/*if(randomNumber == 1){
  computerMove = 'kamień';
}
 else if(randomNumber == 2){
  computerMove = 'papier';
}
 else if(randomNumber == 3){
  computerMove = 'nożyczki';
  }
 else {
  computerMove = 'nieznany ruch'; 
 }

printMessage('Mój ruch to: ' + computerMove);*/

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = playerInput;

function playerMoveName(playerMove){
  if(playerMove == 1){
    return 'kamień';
  } else if(playerMove == 2){
    return 'papier';
  } else if (playerMove == 3){
    return 'nożyczki'
  } else {
    printMessage('Nie znam ruchu o id ' + playerMove + '.');
    return 'nieznany ruch';
  }
}



/*if(playerInput == '1'){
  playerMove = 'kamień';
}
 else if(playerInput == 2){
	playerMove = 'papier';
}
 else if(playerInput == 3){
	playerMove = 'nożyczki';
}
 else {
	playerMove = 'nieznany ruch'; 
}

printMessage('Twój ruch to: ' + playerMove);*/



function diplayResult(argComputerMove, argPlayerMove) {
  if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  }
   else if (computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Jest remis');
  }
   else if (computerMove == 'kamień' && playerMove == 'nożyczki'){
    printMessage('Ty przegrywasz');
  }
   else if( computerMove == 'kamień' && playerMove == 'nieznany ruch'){
    printMessage('Wybierz odpowiednią cyfrę');
  }
   else if (computerMove == 'nożyczki' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz');
  }
   else if (computerMove == 'nożyczki' && playerMove == 'papier'){  
    printMessage('Ja wygrywam');
  }
   else if (computerMove == 'nożyczki' && playerMove == 'nożyczki'){
    printMessage('Jest remis');
  }
   else if( computerMove == 'nożyczki' && playerMove == 'nieznany ruch'){
    printMessage('Wybierz odpowiednią cyfrę');
  }
  else if (computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Ty przegrywasz');
  }
   else if (computerMove == 'papier' && playerMove == 'papier'){  
    printMessage('Jest remis');
  }
   else if (computerMove == 'papier' && playerMove == 'nożyczki'){
    printMessage('Ty wygrywasz');
  }
   else if( computerMove == 'papier' && playerMove == 'nieznany ruch'){
    printMessage('Wybierz odpowiednią cyfrę');
  }

}
