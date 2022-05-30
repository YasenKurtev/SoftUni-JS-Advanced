function aggregateElements(arr) {

    console.log(arr.reduce((a, b) => a + b));
    console.log(arr.map(x => 1 / x).reduce((a, b) => a + b));
    console.log(arr.join(''));

}

aggregateElements([1, 2, 3])