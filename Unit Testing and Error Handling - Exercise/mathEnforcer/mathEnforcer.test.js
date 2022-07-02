let { expect } = require('chai');
let { mathEnforcer } = require('./mathEnforcer');

describe('mathEnforcer Checker', () => {
    describe('addFive', () => {

        it('input is not a number', () => {
            expect(mathEnforcer.addFive('string')).to.equal(undefined);
        })

        it('input is a floating-point number', () => {
            expect(mathEnforcer.addFive(1.5)).to.be.closeTo(6.5, 0.01);
        })

        it('input is a negative number', () => {
            expect(mathEnforcer.addFive(-1)).to.equal(4);
        })

    })

    describe('subtractTen', () => {

        it('input is not a number', () => {
            expect(mathEnforcer.subtractTen('string')).to.equal(undefined);
        })

        it('input is a floating-point number', () => {
            expect(mathEnforcer.subtractTen(1.5)).to.be.closeTo(-8.5, 0.01);
        })

        it('input is a negative number', () => {
            expect(mathEnforcer.subtractTen(-1)).to.equal(-11);
        })

    })

    describe('sum', () => {

        it('first number is not a number', () => {
            expect(mathEnforcer.sum('string', 1)).to.equal(undefined);
        })

        it('second number is not a number', () => {
            expect(mathEnforcer.sum(1, 'string')).to.equal(undefined);
        })

        it('both numbers are not numbers', () => {
            expect(mathEnforcer.sum('string', 'string')).to.equal(undefined);
        })

        it('first number is a floating-point number', () => {
            expect(mathEnforcer.sum(1.5, 2)).to.be.closeTo(3.5, 0.01);
        })

        it('second number is a floating-point number', () => {
            expect(mathEnforcer.sum(2, 1.5)).to.be.closeTo(3.5, 0.01);
        })

        it('both numnbers are floating-point numbers', () => {
            expect(mathEnforcer.sum(1.5, 1.5)).to.be.closeTo(3, 0.01);
        })

        it('first number is a negative number', () => {
            expect(mathEnforcer.sum(-1, 2)).to.equal(1);
        })

        it('second number is a negative number', () => {
            expect(mathEnforcer.sum(2, -1)).to.equal(1);
        })

        it('both numbers are negative numbers', () => {
            expect(mathEnforcer.sum(-1, -1)).to.equal(-2);
        })

    })
})