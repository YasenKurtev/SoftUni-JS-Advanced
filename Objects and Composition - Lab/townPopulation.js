function townPopulation(arr) {

    let townPopulation = {};

    for (let element of arr) {
        let [town, population] = element.split(' <-> ');
        if (!townPopulation.hasOwnProperty(town)) {
            townPopulation[town] = Number(population);
        } else {
            townPopulation[town] += Number(population);
        }
    }

    for (let key in townPopulation) {
        console.log(`${key} : ${townPopulation[key]}`);
    }

}

townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'])