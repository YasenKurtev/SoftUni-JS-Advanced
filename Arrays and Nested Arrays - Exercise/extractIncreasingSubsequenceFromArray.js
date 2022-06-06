function extractIncreasingSubsequenceFromArray(arr) {

    let newArr = [];
    let biggest = 0;

    for (let num of arr) {
        if (num >= biggest) {
            newArr.push(num);
            biggest = num;
        }
    }

    return newArr;

}

console.log(extractIncreasingSubsequenceFromArray([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]))