function printEveryNthElementFromAnArray(arr, num) {

    return arr.filter((x, i) => i % num === 0);

}

console.log(printEveryNthElementFromAnArray(['dsa',
    'asd',
    'test',
    'tset'],
    2))