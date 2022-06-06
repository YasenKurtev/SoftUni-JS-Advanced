function ticTacToe(arr) {

    let board = [[false, false, false], [false, false, false], [false, false, false]];
    let player = '';
    let isWon = false;
    let isFull = false;

    for (let i = 0; i < arr.length; i++) {

        for (let row of board) {
            if (!row.includes(false)) {
                isFull = true;
            } else {
                isFull = false;
            }
        }

        if (isFull === true) {
            break;
        }

        let tokens = arr[i].split(' ');
        let row = Number(tokens[0]);
        let column = Number(tokens[1]);

        if (i % 2 === 0) {
            player = 'X';
        } else {
            player = 'O';
        }

        if (board[row][column] === false) {
            board[row][column] = player;
            if ((board[0][0] === player && board[1][1] === player && board[2][2] === player) ||
                (board[0][2] === player && board[1][1] === player && board[2][0] === player) ||
                (board[0][0] === player && board[0][1] === player && board[0][2] === player) ||
                (board[1][0] === player && board[1][1] === player && board[1][2] === player) ||
                (board[2][0] === player && board[2][1] === player && board[2][2] === player) ||
                (board[0][0] === player && board[1][0] === player && board[2][0] === player) ||
                (board[0][1] === player && board[1][1] === player && board[2][1] === player) ||
                (board[0][2] === player && board[1][2] === player && board[2][2] === player)) {
                isWon = true;
                break;
            }
        } else {
            console.log("This place is already taken. Please choose another!");
            let index = arr.indexOf(arr[i]);
            arr.splice(index, 1);
            i--;
        }
    }

    if (isWon === false) {
        console.log("The game ended! Nobody wins :(");
    } else if (isWon === true) {
        console.log(`Player ${player} wins!`);
    }

    board.forEach(row => {
        console.log(row.join('\t'));
    })
}

ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"])