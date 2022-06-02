function sameNumbers(num) {

    let arr = (num + '').split('');
    let previous = arr[0];
    let isSame = true;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === previous) {
            previous = arr[i];
            isSame = true;
        } else {
            isSame = false;
            break;
        }
    }

    console.log(isSame);
    console.log(arr.reduce((a, b) => Number(a) + Number(b)));

}

sameNumbers(2222222)