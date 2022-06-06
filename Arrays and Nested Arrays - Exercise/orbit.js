function orbit(arr) {

    let rows = arr[0];
    let columns = arr[1];
    
    let x = arr[2];
    let y = arr[3];

    let orbit = Array(rows);
    orbit.fill(Array(columns));

    console.log(Math.abs(0));

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            orbit[i][j] = Math.abs(i - x) + 1;
        }
    }

    console.log(orbit[0]);

}

orbit([4, 4, 0, 0])