function sumOfNumbersNandM(m, n) {

    let sum = 0;
    let num1 = Number(m);
    let num2 = Number(n);

    for (let i = num1; i <= num2; i++) {
        sum += i;
    }

    console.log(sum);

}

sumOfNumbersNandM('1', '5')