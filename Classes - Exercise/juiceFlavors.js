function juiceFlavors(arr) {

    let flavors = {};
    let order = [];

    for (let element of arr) {
        let [flavor, quantity] = element.split(' => ');
        if (!flavors.hasOwnProperty(flavor)) {
            flavors[flavor] = Number(quantity);
        } else {
            flavors[flavor] += Number(quantity);
        }
        if (flavors[flavor] >= 1000) {
            if (!order.includes(flavor)) {
                order.push(flavor);
            }
        }
    }

    for (let key of order) {
        console.log(`${key} => ${Math.trunc(flavors[key] / 1000)}`);
    }

}

juiceFlavors(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'])