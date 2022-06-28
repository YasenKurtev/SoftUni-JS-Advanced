function argumentInfo() {

    let counter = {};

    for (let element of arguments) {
        let type = typeof element;
        if (!counter.hasOwnProperty(type)) {
            counter[type] = 1;
        } else {
            counter[type] += 1;
        }
        console.log(`${type}: ${element}`);
    }

    let sorted = Object.entries(counter).sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA);

    sorted.forEach(element => {
        console.log(`${element[0]} = ${element[1]}`);
    });

}

argumentInfo('cat', 42, function () { console.log('Hello world!'); })