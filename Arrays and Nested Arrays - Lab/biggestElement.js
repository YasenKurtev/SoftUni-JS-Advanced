function biggestElement(arr) {

    let maxNums = [];

    arr.forEach(element => {
        maxNums.push(element.sort((a, b) => b - a)[0])
    });

    return maxNums.sort((a, b) => b - a)[0];

}

console.log(biggestElement([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]]
));