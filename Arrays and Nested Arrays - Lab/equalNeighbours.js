function equalNeighbours(arr) {

    let neighbours = 0;
    let previous = arr[0];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === arr[i][j + 1]) {
                neighbours++;
            }
            if (i === 0) {
                continue;
            }
            if (arr[i][j] === previous[j]) {
                neighbours++;
            }
        }
        previous = arr[i];
    }

    return neighbours;

}

console.log(equalNeighbours([[2, 2, 5, 7, 4],
[4, 0, 5, 3, 4],
[2, 5, 5, 4, 2]]
));