function diagonalAttack(arr) {

    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let splited = arr[i].split(' ');
        firstDiagonalSum += Number(splited[i]);
        secondDiagonalSum += Number(splited[splited.length - 1 - i]);
    }

    if (firstDiagonalSum === secondDiagonalSum) {
        let num = firstDiagonalSum;
        for (let i = 0; i < arr.length; i++) {
            let splited = arr[i].split(' ');
            let firstException = i;
            let secondException = splited.length - 1 - i;
            for (let i = 0; i < splited.length; i++) {
                if (i !== firstException && i !== secondException) {
                    splited[i] = num;
                }
            }
            console.log(splited.join(' '));
        }
    } else {
        arr.forEach(x => console.log(x));
    }

}

diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'])