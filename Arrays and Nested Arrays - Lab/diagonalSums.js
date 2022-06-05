function diagonalSums(arr) {

    let mainSum = 0;
    let secondarySum = 0;

    for (let i = 0; i < arr.length; i++) {
        mainSum += arr[i][i];
        secondarySum += arr[i][arr.length - 1 - i];
    }

    console.log(mainSum, secondarySum);

}

diagonalSums([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]])