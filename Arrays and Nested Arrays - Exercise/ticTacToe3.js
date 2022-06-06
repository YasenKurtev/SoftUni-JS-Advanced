function ticTacToe(arr) {

    let board = Array(3);

    for (let i = 0; i < board.length; i++) {
        board[i] = [false, false, false];
    }

    let player = 'X';
    let isWon = false;
    let isFull = false;

    for (let i = 0; i < arr.length; i++) {
        let [row, column] = arr[i].split(' ');

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

        if (board[row][column] === false) {
            board[row][column] = player;

            for (let i = 0; i < board.length; i++) {
                if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
                    isWon = true;
                    break;
                }
                if (board[0][i] === player && board[1][i] === player && board[2][i] === player) {
                    isWon = true;
                    break;
                }
                if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
                    isWon = true;
                    break;
                }
                if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
                    isWon = true;
                    break;
                }
            }

            if (isWon === true) {
                break;
            }

            player = player === 'X' ? 'O' : 'X';

        } else {
            console.log("This place is already taken. Please choose another!");
            continue;
        }
    }

    if (isWon === false) {
        console.log("The game ended! Nobody wins :(");
    } else {
        console.log(`Player ${player} wins!`);
    }

    board.forEach(e => console.log(e.join('\t')));
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