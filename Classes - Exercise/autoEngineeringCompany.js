function autoEngineeringCompany(arr) {

    let carBrands = {};
    let order = [];

    for (let element of arr) {
        let [brand, model, quantity] = element.split(' | ');
        if (!carBrands.hasOwnProperty(brand)) {
            carBrands[brand] = { [model]: Number(quantity) };
            if (!order.includes(brand)) {
                order.push(brand);
            }
        } else {
            if (!carBrands[brand].hasOwnProperty(model)) {
                carBrands[brand][model] = Number(quantity);
            } else {
                carBrands[brand][model] += Number(quantity);
            }
        }
    }

    for (let element of order) {
        console.log(element);
        for (let key of Object.keys(carBrands[element])) {
            console.log(`###${key} -> ${carBrands[element][key]}`);
        }
    }

}

autoEngineeringCompany(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'])