var expect = require('chai').expect,
    should = require('chai').should(),
    factors = require('../src/factors.js');

console.log(`The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?`);

describe('factors', function() {
    var factorFinder = factors.factorFinder();
    it('should return [1] for 1', function() {
        expect(factorFinder(1)).to.deep.equal([1]);
    });
    it('should return [1, 2] for 2', function() {
        expect(factorFinder(2)).to.deep.equal([1, 2]);
    });
    it('should return [1, 2, 5] for 10', function() {
        expect(factorFinder(10)).to.deep.equal([1, 2, 5]);
    });
    it('should return [1, 5, 7, 13, 29] for 13195', function() {
        expect(factorFinder(13195)).to.deep.equal([1, 5, 7, 13, 29]);
    });
    it('should return [1, 71, 839, 1471] for 128897844529', function() {
        var f = factorFinder(128897844529);
        console.log(f);
        expect(f).to.deep.equal([1, 71, 839, 1471]);
    });
    it('should return [1, 71, 839, 1471, 6857] for 600851475143', function() {
        var f = factorFinder(600851475143);
        expect(f).to.deep.equal([1, 71, 839, 1471, 6857]);
    });
});