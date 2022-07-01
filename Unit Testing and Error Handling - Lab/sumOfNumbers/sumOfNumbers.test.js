let { expect } = require('chai');
let { sum } = require('./sumOfNumbers');

describe('sumOfNumbers Checker', () => {
    it('Should return the sum of the numbers in the array', () => {
        expect(sum([1, 2, 3])).to.equal(6)
    })

    it('Should return the sum with negative number in the array', () => {
        expect(sum([1, -2, 3])).to.equal(2)
    })

    it('Should return zero if there are only zeros in the array', () => {
        expect(sum([0, 0, 0])).to.equal(0)
    })
})