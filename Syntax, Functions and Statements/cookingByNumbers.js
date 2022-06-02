function cookingByNumbers(num, op1, op2, op3, op4, op5) {

    let number = num;
    let operations = [op1, op2, op3, op4, op5];

    for (let op of operations) {
        if (op === 'chop') {
            number /= 2;
            console.log(number);
        } else if (op === 'dice') {
            number = Math.sqrt(number);
            console.log(number);
        } else if (op === 'spice') {
            number += 1;
            console.log(number);
        } else if (op === 'bake') {
            number *= 3;
            console.log(number);
        } else if (op === 'fillet') {
            number -= number * 0.20;
            console.log(number);
        }
    }

}

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')