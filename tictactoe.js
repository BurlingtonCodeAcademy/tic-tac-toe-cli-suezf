const readline = require('readline');

const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(questionText) {
    return new Promise((resolve, reject) => {
        readlineInterface.question(questionText, resolve);
    });
};

let ttTable = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

start();

async function start() {
    // Display the table
    console.log('\n'
        + ' ' + ttTable[0] + ' | ' + ttTable[1] + ' | ' + ttTable[2] + ' \n'
        + '--- --- ---\n'
        + ' ' + ttTable[3] + ' | ' + ttTable[4] + ' | ' + ttTable[5] + ' \n'
        + '--- --- ---\n'
        + ' ' + ttTable[6] + ' | ' + ttTable[7] + ' | ' + ttTable[8] + ' \n');

    let turn = await ask("Who's turn first, \n X or O?\n");
    let xPlayer = await ask('What is your name for playing X? ');
    let oPlayer = await ask('What is your name for playing O? ');
    return player(turn, xPlayer, oPlayer);

    async function player(whosTurn, xPlay, oPlay) {
        // define the table 
        let tableBlock = ('\n'
            + ' ' + ttTable[0] + ' | ' + ttTable[1] + ' | ' + ttTable[2] + ' \n'
            + '--- --- ---\n'
            + ' ' + ttTable[3] + ' | ' + ttTable[4] + ' | ' + ttTable[5] + ' \n'
            + '--- --- ---\n'
            + ' ' + ttTable[6] + ' | ' + ttTable[7] + ' | ' + ttTable[8] + ' \n');
        console.log('This is the Board now \n' + tableBlock);

        if (whosTurn === 'X' | whosTurn === 'x') {
            whosTurn = 'X';
            let playerX = await ask('\n' + xPlay + " turn for 'X'\nMove to?\n");
            return move(playerX);
        } else if (whosTurn === 'O' | whosTurn === 'o') {
            whosTurn = 'O';
            let playerO = await ask('\n' + oPlay + " turn for 'O'\n Move to?\n");
            return move(playerO);
        } else {
            console.log("You must enter 'x' or 'o'. ");
            start();
        };

        async function move(whichMove) {

            //Move is X
            if (whichMove === '9' && whosTurn === 'X' && ttTable[8] === '9') {
                ttTable[8] = 'X';
                return whoWon('X', 'O');
            } else if (whichMove === '8' && whosTurn === 'X' && ttTable[7] === '8') {
                ttTable[7] = 'X';
                return whoWon('X', 'O');
            } else if (whichMove === '7' && whosTurn === 'X' && ttTable[6] === '7') {
                ttTable[6] = 'X';
                return whoWon('X', 'O');
            } else if (whichMove === '6' && whosTurn === 'X' && ttTable[5] === '6') {
                ttTable[5] = 'X';
                return whoWon('X', 'O');
            } else if (whichMove === '5' && whosTurn === 'X' && ttTable[4] === '5') {
                ttTable[4] = 'X';
                return whoWon('X', 'O');
            } else if (whichMove === '4' && whosTurn === 'X' && ttTable[3] === '4') {
                ttTable[3] = 'X';
                return whoWon('X', 'O');
            } else if (whichMove === '3' && whosTurn === 'X' && ttTable[2] === '3') {
                ttTable[2] = 'X';
                return whoWon('X', 'O');
            } else if (whichMove === '2' && whosTurn === 'X' && ttTable[1] === '2') {
                ttTable[1] = 'X';
                return whoWon('X', 'O');
            } else if (whichMove === '1' && whosTurn === 'X' && ttTable[0] === '1') {
                ttTable[0] = 'X';
                return whoWon('X', 'O');
                //Move is O
            } else if (whichMove === '9' && whosTurn === 'O' && ttTable[8] === '9') {
                ttTable[8] = 'O';
                return whoWon('O', 'X');
            } else if (whichMove === '8' && whosTurn === 'O' && ttTable[7] === '8') {
                ttTable[7] = 'O';
                return whoWon('O', 'X');
            } else if (whichMove === '7' && whosTurn === 'O' && ttTable[6] === '7') {
                ttTable[6] = 'O';
                return whoWon('O', 'X');
            } else if (whichMove === '6' && whosTurn === 'O' && ttTable[5] === '6') {
                ttTable[5] = 'O';
                return whoWon('O', 'X');
            } else if (whichMove === '5' && whosTurn === 'O' && ttTable[4] === '5') {
                ttTable[4] = 'O';
                return whoWon('O', 'X');
            } else if (whichMove === '4' && whosTurn === 'O' && ttTable[3] === '4') {
                ttTable[3] = 'O';
                return whoWon('O', 'X');
            } else if (whichMove === '3' && whosTurn === 'O' && ttTable[2] === '3') {
                ttTable[2] = 'O';
                return whoWon('O', 'X');
            } else if (whichMove === '2' && whosTurn === 'O' && ttTable[1] === '2') {
                ttTable[1] = 'O';
                return whoWon('O', 'X');
            } else if (whichMove === '1' && whosTurn === 'O' && ttTable[0] === '1') {
                ttTable[0] = 'O';
                return whoWon('O', 'X');
            } else {
                // For when x or o is already entered in block
                console.log('That block has already been assigned, player ' + whosTurn + ' will try again.')
                return player(whosTurn, xPlay, oPlay);
            };
        };
        async function whoWon(curPlayer, nextPlayer) {
            // Winner is X
            if (curPlayer === 'X' && ((ttTable[0] === 'X' && ttTable[1] === 'X' && ttTable[2] === 'X') || (ttTable[3] === 'X' && ttTable[4] === 'X' && ttTable[5] === 'X') || (ttTable[6] === 'X' && ttTable[7] === 'X' && ttTable[8] === 'X') || (ttTable[0] === 'X' && ttTable[3] === 'X' && ttTable[6] === 'X') || (ttTable[1] === 'X' && ttTable[4] === 'X' && ttTable[7] === 'X') || (ttTable[2] === 'X' && ttTable[5] === 'X' && ttTable[8] === 'X') || (ttTable[0] === 'X' && ttTable[4] === 'X' && ttTable[8] === 'X') || (ttTable[2] === 'X' && ttTable[4] === 'X' && ttTable[6] === 'X'))) {
                console.log('\n'
                    + ' ' + ttTable[0] + ' | ' + ttTable[1] + ' | ' + ttTable[2] + ' \n'
                    + '--- --- ---\n'
                    + ' ' + ttTable[3] + ' | ' + ttTable[4] + ' | ' + ttTable[5] + ' \n'
                    + '--- --- ---\n'
                    + ' ' + ttTable[6] + ' | ' + ttTable[7] + ' | ' + ttTable[8] + ' \n');
                console.log('\nPlayer X has won, game over!\n');
                process.exit();
                // Winner is O
            } else if (curPlayer === 'O' && ((ttTable[0] === 'O' && ttTable[1] === 'O' && ttTable[2] === 'O') || (ttTable[3] === 'O' && ttTable[4] === 'O' && ttTable[5] === 'O') || (ttTable[6] === 'O' && ttTable[7] === 'O' && ttTable[8] === 'O') || (ttTable[0] === 'O' && ttTable[3] === 'O' && ttTable[6] === 'O') || (ttTable[1] === 'O' && ttTable[4] === 'O' && ttTable[7] === 'O') || (ttTable[2] === 'O' && ttTable[5] === 'O' && ttTable[8] === 'O') || (ttTable[0] === 'O' && ttTable[4] === 'O' && ttTable[8] === 'O') || (ttTable[2] === 'O' && ttTable[4] === 'O' && ttTable[6] === 'O'))) {
                console.log(tableBlock);
                console.log('\nPlayer O has won, game over!\n');
                process.exit();
            } else if (ttTable[0] != '1' && ttTable[1] != '2' && ttTable[2] != '3' && ttTable[3] != '4' && ttTable[4] != '5' && ttTable[5] != '6' && ttTable[6] != '7' && ttTable[7] != '8' && ttTable[8] != '9') {
                console.log(tableBlock);
                console.log('\nThere are no winners!\n');
                process.exit();
            } else {
                return player(nextPlayer, xPlay, oPlay);
            }
        }
    };
}