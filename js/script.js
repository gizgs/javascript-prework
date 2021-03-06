{
    const playGame = function (playerInput) {
        clearMessages()



        const getMoveName = function (move) {
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
        
        const diplayResult = function (argComputerMove, argPlayerMove) {

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

        const randomNumber = Math.floor(Math.random() * 3 + 1);

        const computerMove = getMoveName(randomNumber);

        //let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

        const playerMove = getMoveName(playerInput);

        diplayResult(computerMove, playerMove);
    }



    document.getElementById('play-rock').addEventListener('click', function () {
        playGame(1);
    });
    document.getElementById('play-paper').addEventListener('click', function () {
        playGame(2);
    });
    document.getElementById('play-scissors').addEventListener('click', function () {
        playGame(3);
    });
}

