function fruit(fruit, weightG, priceKG) {

    let weightKG = weightG / 1000;

    console.log(`I need $${(weightKG * priceKG).toFixed(2)} to buy ${weightKG.toFixed(2)} kilograms ${fruit}.`);

}

fruit('orange', 2500, 1.80)