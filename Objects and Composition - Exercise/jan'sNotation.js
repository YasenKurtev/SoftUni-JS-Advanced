function jansNotation(arr) {

    let numsArr = [];
    let isBrake = false;

    for (let i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i])) {
            numsArr.push(arr[i]);
        } else {
            if (numsArr.length >= 2) {
                let num2 = numsArr.pop();
                let num1 = numsArr.pop();
                let result = 0;
                if (arr[i] === '+') {
                    result = num1 + num2
                } else if (arr[i] === '-') {
                    result = num1 - num2
                } else if (arr[i] === '*') {
                    result = num1 * num2
                } else if (arr[i] === '/') {
                    result = num1 / num2
                }
                numsArr.push(result);
            } else {
                console.log("Error: not enough operands!");
                isBrake = true;
            }
        }
    }

    if (isBrake !== true) {
        if (numsArr.length === 1) {
            console.log(numsArr[0]);
        } else {
            console.log("Error: too many operands!");
        }
    }

}

jansNotation([3,
    4,
    '+'])