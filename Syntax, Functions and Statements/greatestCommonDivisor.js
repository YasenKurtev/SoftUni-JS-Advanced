function greatestCommonDivisor(num1, num2) {

    let smallestNum = Math.min(num1, num2);

    for (let i = smallestNum; i >= 1; i--) {
        if (num1 % i === 0 && num2 % i === 0) {
            console.log(i);
            break;
        }
    }

}

greatestCommonDivisor(2154, 458)