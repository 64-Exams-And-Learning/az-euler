var expect = require('chai').expect,
    should = require('chai').should(),
    primes = require('../src/factors.js');

console.log(`The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?`);

describe('factors', function() {
    var factors = primes.factors();
    it('should return [1] for 1', function() {
        expect(factors(1)).to.deep.equal([1]);
    });
    it('should return [1, 2] for 2', function() {
        expect(factors(2)).to.deep.equal([1, 2]);
    });
    it('should return [1, 2, 5] for 10', function() {
        expect(factors(10)).to.deep.equal([1, 2, 5]);
    });
    it('should return [1, 5, 7, 13, 29] for 13195', function() {
        expect(factors(13195)).to.deep.equal([1, 5, 7, 13, 29, 13195]);
    });
});