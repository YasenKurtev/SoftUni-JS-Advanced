let { expect } = require('chai');
let { createCalculator } = require('./addSubstract');

describe('createCalculator Checker', () => {

    it('returns an object', () => {
        expect(typeof createCalculator()).to.equal('object');
    })

    it('return true if subtract input is correct', () => {
        expect(createCalculator().get()).to.equal(0);
    })

    it('return true if add input is correct', () => {
        expect(createCalculator().add(5).get()).to.equal(5);
    })

    it('return true if subtract input is correct', () => {
        createCalculator().subtract(5);
        expect(createCalculator().get()).to.equal(-5);
    })

    it('return true if subtract input is correct', () => {
        createCalculator().subtract('5');
        expect(createCalculator().get()).to.equal(-5);
    })
})