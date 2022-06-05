function evenPositionElement(arr) {

    let even = arr.filter(x => arr.indexOf(x) % 2 === 0);

    console.log(even.join(' '));

}

evenPositionElement(['20', '30', '40', '50', '60'])