function lastKNumbersSequence(n, k) {

    let arr = [1];

    for (let i = 1; i < n; i++) {
        let sliced = arr.slice(-k);
        arr.push(sliced.reduce((a, b) => a + b));
    }

    return arr;

}

console.log(lastKNumbersSequence(8, 2));