function solution() {

    let ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    let recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    }

    return function robot(input) {

        let [command, type, quant] = input.split(' ');

        if (command === 'restock') {
            return restockFunc(type, quant);
        } else if (command === 'prepare') {
            return prepareFunc(type, quant);
        } else if (command === 'report') {
            return reportFunc();
        }

        function restockFunc(microelement, quantity) {
            ingredients[microelement] += Number(quantity);
            return 'Success';
        }

        function prepareFunc(recipe, quantity) {
            let isEnough = true;
            let noStock = 0;
            let keys = Object.keys(recipes[recipe]);
            for (let key of keys) {
                if (ingredients[key] < recipes[recipe][key] * Number(quantity)) {
                    isEnough = false;
                    noStock = key;
                    break;
                } else {
                    ingredients[key] -= recipes[recipe][key] * Number(quantity)
                }
            }
            if (isEnough === true) {
                return 'Success';
            } else {
                return `Error: not enough ${noStock} in stock`
            }
        }

        function reportFunc() {
            let result = [];
            for (let key of Object.keys(ingredients)) {
                result.push(`${key}=${ingredients[key]}`);
            }
            return result.join(' ');
        }
    }

}

let manager = solution();
console.log(manager("restock flavour 50"));
console.log(manager("prepare lemonade 4"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));