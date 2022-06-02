function validityChecker(num1, num2, num3, num4) {
    let x1 = num1;
    let y1 = num2;

    let x2 = num3;
    let y2 = num4;

    console.log(Number.isInteger(result(x1, y1))
        ? `{${x1}, ${y1}} to {0, 0} is valid`
        : `{${x1}, ${y1}} to {0, 0} is invalid`);
    console.log(Number.isInteger(result(x2, y2))
        ? `{${x2}, ${y2}} to {0, 0} is valid`
        : `{${x2}, ${y2}} to {0, 0} is invalid`);

    console.log(Number.isInteger(result((x1 - x2), (y1 - y2)))
        ? `{${x1}, ${y1}} to {${x2}, ${y2}} is valid`
        : `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);


    function result(x, y) {
        return Math.sqrt(x ** 2 + y ** 2);
    }
}

validityChecker(2, 1, 1, 1);