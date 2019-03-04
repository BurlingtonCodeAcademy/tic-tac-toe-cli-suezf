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
//let whichPlayer = player();

start();
async function start() {

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
        console.log('\n'
            + ' ' + ttTable[0] + ' | ' + ttTable[1] + ' | ' + ttTable[2] + ' \n'
            + '--- --- ---\n'
            + ' ' + ttTable[3] + ' | ' + ttTable[4] + ' | ' + ttTable[5] + ' \n'
            + '--- --- ---\n'
            + ' ' + ttTable[6] + ' | ' + ttTable[7] + ' | ' + ttTable[8] + ' \n');
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
            let tab9 = ttTable.pop();
            let tab8 = ttTable.pop();
            let tab7 = ttTable.pop();
            let tab6 = ttTable.pop();
            let tab5 = ttTable.pop();
            let tab4 = ttTable.pop();
            let tab3 = ttTable.pop();
            let tab2 = ttTable.pop();
            let tab1 = ttTable.pop();
            //Move is X
            if (whichMove === '9' && whosTurn === 'X') {
                ttTable.push(tab1);
                ttTable.push(tab2);
                ttTable.push(tab3);
                ttTable.push(tab4);
                ttTable.push(tab5);
                ttTable.push(tab6);
                ttTable.push(tab7);
                ttTable.push(tab8);
                tab9 = 'X';
                ttTable.push(tab9);
                return whoWon('X', 'O');
            } else if (whichMove === '8' && whosTurn === 'X') {
                ttTable.push(tab1);
                ttTable.push(tab2);
                ttTable.push(tab3);
                ttTable.push(tab4);
                ttTable.push(tab5);
                ttTable.push(tab6);
                ttTable.push(tab7);
                tab8 = 'X';
                ttTable.push(tab8);
                ttTable.push(tab9);
                return whoWon('X', 'O');
            } else if (whichMove === '7' && whosTurn === 'X') {
                ttTable.push(tab1);
                ttTable.push(tab2);
                ttTable.push(tab3);
                ttTable.push(tab4);
                ttTable.push(tab5);
                ttTable.push(tab6);
                tab7 = 'X';
                ttTable.push(tab7);
                ttTable.push(tab8);
                ttTable.push(tab9);
                return whoWon('X', 'O');
            } else if (whichMove === '6' && whosTurn === 'X') {
                ttTable.push(tab1);
                ttTable.push(tab2);
                ttTable.push(tab3);
                ttTable.push(tab4);
                ttTable.push(tab5);
                tab6 = 'X';
                ttTable.push(tab6);
                ttTable.push(tab7);
                ttTable.push(tab8);
                ttTable.push(tab9);
                return whoWon('X', 'O');
            } else if (whichMove === '5' && whosTurn === 'X') {
                ttTable.push(tab1);
                ttTable.push(tab2);
                ttTable.push(tab3);
                ttTable.push(tab4);
                tab5 = "X";
                ttTable.push(tab5);
                ttTable.push(tab6);
                ttTable.push(tab7);
                ttTable.push(tab8);
                ttTable.push(tab9);
                return whoWon('X', 'O');
            } else if (whichMove === '4' && whosTurn === 'X') {
                ttTable.push(tab1);
                ttTable.push(tab2);
                ttTable.push(tab3);
                tab4 = 'X';
                ttTable.push(tab4);
                ttTable.push(tab5);
                ttTable.push(tab6);
                ttTable.push(tab7);
                ttTable.push(tab8);
                ttTable.push(tab9);
                return whoWon('X', 'O');
            } else if (whichMove === '3' && whosTurn === 'X') {
                ttTable.push(tab1);
                ttTable.push(tab2);
                tab3 = 'X';
                ttTable.push(tab3);
                ttTable.push(tab4);
                ttTable.push(tab5);
                ttTable.push(tab6);
                ttTable.push(tab7);
                ttTable.push(tab8);
                ttTable.push(tab9);
                return whoWon('X', 'O');
            } else if (whichMove === '2' && whosTurn === 'X') {
                ttTable.push(tab1);
                tab2 = 'X';
                ttTable.push(tab2);
                ttTable.push(tab3);
                ttTable.push(tab4);
                ttTable.push(tab5);
                ttTable.push(tab6);
                ttTable.push(tab7);
                ttTable.push(tab8);
                ttTable.push(tab9);
                return whoWon('X', 'O');
            } else if (whichMove === '1' && whosTurn === 'X') {
                tab1 = 'X'
                ttTable.push(tab1);
                ttTable.push(tab2);
                ttTable.push(tab3);
                ttTable.push(tab4);
                ttTable.push(tab5);
                ttTable.push(tab6);
                ttTable.push(tab7);
                ttTable.push(tab8);
                ttTable.push(tab9);
                return whoWon('X', 'O');
                //Move is O
            } else if (whichMove === '9' && whosTurn === 'O') {
                ttTable.push(tab1);
                ttTable.push(tab2);
                ttTable.push(tab3);
                ttTable.push(tab4);
                ttTable.push(tab5);
                ttTable.push(tab6);
                ttTable.push(tab7);
                ttTable.push(tab8);
                tab9 = 'O'
                ttTable.push(tab9);
                return whoWon('O', 'X');
            } else if (whichMove === '8' && whosTurn === 'O') {
                ttTable.push(tab1);
                ttTable.push(tab2);
                ttTable.push(tab3);
                ttTable.push(tab4);
                ttTable.push(tab5);
                ttTable.push(tab6);
                ttTable.push(tab7);
                tab8 = 'O';
                ttTable.push(tab8);
                ttTable.push(tab9);
                return whoWon('O', 'X');
            } else if (whichMove === '7' && whosTurn === 'O') {
                ttTable.push(tab1);
                ttTable.push(tab2);
                ttTable.push(tab3);
                ttTable.push(tab4);
                ttTable.push(tab5);
                ttTable.push(tab6);
                tab7 = 'O';
                ttTable.push('O');
                ttTable.push(tab8);
                ttTable.push(tab9);
                return whoWon('O', 'X');
            } else if (whichMove === '6' && whosTurn === 'O') {
                ttTable.push(tab1);
                ttTable.push(tab2);
                ttTable.push(tab3);
                ttTable.push(tab4);
                ttTable.push(tab5);
                tab6 = 'O';
                ttTable.push(tab6);
                ttTable.push(tab7);
                ttTable.push(tab8);
                ttTable.push(tab9);
                //     start();
                return whoWon('O', 'X');
            } else if (whichMove === '5' && whosTurn === 'O') {
                ttTable.push(tab1);
                ttTable.push(tab2);
                ttTable.push(tab3);
                ttTable.push(tab4);
                tab5 = 'O';
                ttTable.push(tab5);
                ttTable.push(tab6);
                ttTable.push(tab7);
                ttTable.push(tab8);
                ttTable.push(tab9);
                //     start();
                return whoWon('O', 'X');
            } else if (whichMove === '4' && whosTurn === 'O') {
                ttTable.push(tab1);
                ttTable.push(tab2);
                ttTable.push(tab3);
                tab4 = 'O';
                ttTable.push(tab4);
                ttTable.push(tab5);
                ttTable.push(tab6);
                ttTable.push(tab7);
                ttTable.push(tab8);
                ttTable.push(tab9);
                //     start();
                return whoWon('O', 'X');
            } else if (whichMove === '3' && whosTurn === 'O') {
                ttTable.push(tab1);
                ttTable.push(tab2);
                tab3 = 'O'
                ttTable.push(tab3);
                ttTable.push(tab4);
                ttTable.push(tab5);
                ttTable.push(tab6);
                ttTable.push(tab7);
                ttTable.push(tab8);
                ttTable.push(tab9);
                //     start();
                return whoWon('O', 'X');
            } else if (whichMove === '2' && whosTurn === 'O') {
                ttTable.push(tab1);
                tab2 = 'O';
                ttTable.push(tab2);
                ttTable.push(tab3);
                ttTable.push(tab4);
                ttTable.push(tab5);
                ttTable.push(tab6);
                ttTable.push(tab7);
                ttTable.push(tab8);
                ttTable.push(tab9);
                //     start();
                return whoWon('O', 'X');
            } else if (whichMove === '1' && whosTurn === 'O') {
                tab1 = 'O'
                ttTable.push(tab1);
                ttTable.push(tab2);
                ttTable.push(tab3);
                ttTable.push(tab4);
                ttTable.push(tab5);
                ttTable.push(tab6);
                ttTable.push(tab7);
                ttTable.push(tab8);
                ttTable.push(tab9);
                //     start();
                return whoWon('O', 'X');
            } else {
                ttTable.push(tab1);
                ttTable.push(tab2);
                ttTable.push(tab3);
                ttTable.push(tab4);
                ttTable.push(tab5);
                ttTable.push(tab6);
                ttTable.push(tab7);
                ttTable.push(tab8)
                ttTable.push(tab9);
                //     start();
                return whoWon('O', 'X');

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
                console.log('\n'
                    + ' ' + ttTable[0] + ' | ' + ttTable[1] + ' | ' + ttTable[2] + ' \n'
                    + '--- --- ---\n'
                    + ' ' + ttTable[3] + ' | ' + ttTable[4] + ' | ' + ttTable[5] + ' \n'
                    + '--- --- ---\n'
                    + ' ' + ttTable[6] + ' | ' + ttTable[7] + ' | ' + ttTable[8] + ' \n');
                console.log('\nPlayer O has won, game over!\n');
                process.exit();
            }else if (ttTable[0] !='1' && ttTable[1] != '2' && ttTable[2] != '3' && ttTable[3] != '4' && ttTable[4] != '5' && ttTable[5] != '6' &&  ttTable[6] != '7' && ttTable[7] != '8' && ttTable[8] != '9')  {
                console.log('\n'
                    + ' ' + ttTable[0] + ' | ' + ttTable[1] + ' | ' + ttTable[2] + ' \n'
                    + '--- --- ---\n'
                    + ' ' + ttTable[3] + ' | ' + ttTable[4] + ' | ' + ttTable[5] + ' \n'
                    + '--- --- ---\n'
                    + ' ' + ttTable[6] + ' | ' + ttTable[7] + ' | ' + ttTable[8] + ' \n');
                console.log('\nThere are no winners!\n');
                process.exit();
            }    else {
                //           return start()
                return player(nextPlayer, xPlay, oPlay);
            }
        }
    };
}