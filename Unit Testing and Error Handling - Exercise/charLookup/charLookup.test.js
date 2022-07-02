let { expect } = require('chai');
let { lookupChar } = require('./charLookup');

describe('lookupChar Checker', () => {

    it('first parameter not a string', () => {
        expect(lookupChar(1, 1)).to.equal(undefined);
    })

    it('second parameter not a number', () => {
        expect(lookupChar('string', 'string')).to.equal(undefined);
    })

    it('second parameter is a floating-point number', () => {
        expect(lookupChar('string', 1.1)).to.equal(undefined);
    })

    it('index out of range', () => {
        expect(lookupChar('string', -1)).to.equal('Incorrect index');
    })

    it('index out of range', () => {
        expect(lookupChar('string', 6)).to.equal('Incorrect index');
    })

    it('both parameterr are correct', () => {
        expect(lookupChar('string', 3)).to.equal('i');
    })

})