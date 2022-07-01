let { expect } = require('chai');
let { rgbToHexColor } = require('./rgbToHex');

describe('rgbToHex Checker', () => {
    it('returns false if any of the inputs is in the invalid range', () => {
        expect(rgbToHexColor(256, 255, 255)).to.be.undefined
        expect(rgbToHexColor(255, 256, 255)).to.be.undefined
        expect(rgbToHexColor(255, 255, 256)).to.be.undefined
    })

    it('returns false if any of the inputs is in the invalid range', () => {
        expect(rgbToHexColor(-1, 255, 255)).to.be.undefined
        expect(rgbToHexColor(255, -1, 255)).to.be.undefined
        expect(rgbToHexColor(255, 255, -1)).to.be.undefined
    })

    it('returns false if any of the inputs is an invalid type', () => {
        expect(rgbToHexColor('255', 255, 255)).to.be.undefined
        expect(rgbToHexColor(255, '255', 255)).to.be.undefined
        expect(rgbToHexColor(255, 255, '255')).to.be.undefined
    })

    it('returns true if all inputs are correct', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF')
    })

    it('returns true if all inputs are correct', () => {
        expect(rgbToHexColor(000, 000, 000)).to.equal('#000000')
    })

    it('returns true if all inputs are correct', () => {
        expect(rgbToHexColor(123, 255, 255)).to.equal('#7BFFFF')
    })

    it('returns true if all inputs are correct', () => {
        expect(rgbToHexColor(000, 000)).to.be.undefined
        expect(rgbToHexColor(000)).to.be.undefined
        expect(rgbToHexColor()).to.be.undefined
    })
})