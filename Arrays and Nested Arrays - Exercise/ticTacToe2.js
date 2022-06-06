function ticTacToe(arr) {

    let board = Array(3);
    let check = Array(8);

    for (let i = 0; i < board.length; i++) {
        board[i] = [false, false, false];
    }

    for (let i = 0; i < check.length; i++) {
        check[i] = ['-', '-', '-'];
    }

    let isPlayerOne = true;
    let isWon = false;
    let winner = 0;
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

        if (isWon === true) {
            break;
        }

        if (isFull === true) {
            break;
        }

        if (board[row][column] === false) {
            if (isPlayerOne === true) {
                board[row][column] = 'X';
                isPlayerOne = false;
            } else {
                board[row][column] = 'O';
                isPlayerOne = true;
            }
        } else {
            console.log("This place is already taken. Please choose another!");
            continue;
        }

        for (let i = 0; i < board.length; i++) {
            check[0] = board[0];
            check[1] = board[1];
            check[2] = board[2];
            check[3][i] = board[i][0];
            check[4][i] = board[i][1];
            check[5][i] = board[i][2];
            check[6][i] = board[i][i];
            check[7][i] = board[i][board[i].length - 1 - i];
        }

        for (let element of check) {
            if (element.every(e => e === element[0] && e !== false)) {
                isWon = true;
                winner = element[0];
                break;
            }
        }
    }

    if (isWon === false) {
        console.log("The game ended! Nobody wins :(");
    } else {
        console.log(`Player ${winner} wins!`);
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