let { expect } = require('chai');
let { isSymmetric } = require('./checkForSymmetry');

describe('checkForSymmetry Checker', () => {
    it('expect input to be a symmetric array', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true
    })

    it('return false if input is not a symmetric array', () => {
        expect(isSymmetric([1, 2, 3])).to.be.false
    })

    it('return false if input is not an array', () => {
        expect(isSymmetric(5)).to.be.false
    })

    it('return true if input is an odd symmetric array', () => {
        expect(isSymmetric([1, 2, 1])).to.be.true
    })

    it('return true if input is an array of strings', () => {
        expect(isSymmetric(['a', 'b', 'b', 'a'])).to.be.true
    })

    it('return false if input is not an array', () => {
        expect(isSymmetric('abba')).to.be.false
    })

    it('return false if input is an array which contains a string', () => {
        expect(isSymmetric(1, 2, '1')).to.be.false
    })
})