function mathOperations(num1, num2, string) {

    if (string === '+') {
        console.log(num1 + num2);
    } else if (string === '-') {
        console.log(num1 - num2);
    } else if (string === '*') {
        console.log(num1 * num2);
    } else if (string === '/') {
        console.log(num1 / num2);
    } else if (string === '%') {
        console.log(num1 % num2);
    } else if (string === '**') {
        console.log(num1 ** num2);
    }

}

mathOperations(5, 6, '**')