function lowestPricesInCities(arr) {

    let products = {};

    for (let element of arr) {
        let [town, product, price] = element.split(' | ');
        price = Number(price);
        if (!products.hasOwnProperty(product)) {
            products[product] = { town, price };
        } else {
            if (products[product]['price'] > price) {
                products[product]['price'] = price;
                products[product]['town'] = town;
            }
        }
    }

    for (let key in products) {
        console.log(`${key} -> ${products[key]['price']} (${products[key]['town']})`);
    }

}

lowestPricesInCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'])