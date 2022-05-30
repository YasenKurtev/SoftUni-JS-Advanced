function suqareOfStars(input) {

    let num = 0;
    let arr = [];

    if (input !== undefined) {
        num = input;
    } else {
        num = 5;
    }

    for (let i = 1; i <= num; i++) {
        arr.push('*');
    }

    for (let i = 1; i <= num; i++) {
        console.log(arr.join(' '));
    }

}

suqareOfStars()