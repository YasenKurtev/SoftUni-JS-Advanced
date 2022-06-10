function storageCatalogue(arr) {

    arr.sort((a, b) => a.localeCompare(b));
    let previous = '';

    for (let i = 0; i < arr.length; i++) {
        if (previous !== arr[i][0]) {
            console.log(arr[i][0]);
            previous = arr[i][0];
        }
        let [product, price] = arr[i].split(' : ');
        console.log(` ${product}: ${price}`);
    }

}

storageCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'])