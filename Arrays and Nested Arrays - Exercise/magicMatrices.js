function magicMatrices(arr) {

    let length = arr[0].length;
    let newArr = Array(length).fill(0);

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            newArr[j] += arr[i][j];
        }
        newArr.push(arr[i].reduce((a, b) => a + b));
    }

    if (newArr.every(e => e === newArr[0])) {
        console.log('true');
    } else {
        console.log('false');
    }

}

magicMatrices([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
)