function addAndRemoveElements(arr) {

    let newArr = [];
    let num = 1;

    for (let command of arr) {
        if (command === 'add') {
            newArr.push(num);
            num++;
        } else if (command === 'remove') {
            newArr.pop();
            num++;
        }
    }

    if (newArr.length !== 0) {
        console.log(newArr.join('\n'));
    } else {
        console.log('Empty');
    }

}

addAndRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add'])