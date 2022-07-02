let { expect } = require('chai');
let { isOddOrEven } = require('./evenOdd');

describe('isOddOrEven Checker', () => {
    it('incorrect parameter', () => {
        expect(isOddOrEven(2)).to.equal(undefined);
    })

    it('even string', () => {
        expect(isOddOrEven('even')).to.equal('even');
    })

    it('odd string', () => {
        expect(isOddOrEven('odd')).to.equal('odd');
    })
})