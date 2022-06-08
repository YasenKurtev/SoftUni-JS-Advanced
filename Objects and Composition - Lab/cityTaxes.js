function cityTaxes(name, population, treasury) {

    let cityRecord = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate
        },
        applyGrowth(percentage) {
            this.population = this.population * ((100 + percentage) / 100)
        },
        applyRecession(percentage) {
            this.treasury = this.treasury * ((100 - percentage) / 100)
        }
    }

    return cityRecord;

}

const city = cityTaxes('Tortuga', 7000, 15000);

city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);