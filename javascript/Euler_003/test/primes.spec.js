var assert = require('assert'),
    should = require('chai').should(),
    primes = require('../src/primes.js');

describe('isPrime', function() {
    it('should return true for 1', function() {
        primes.isPrime(1).should.equal(true);
    });
    it('should return true for 2', function() {
        primes.isPrime(2).should.equal(true);
    });
    it('should return true for 3', function() {
        primes.isPrime(3).should.equal(true);
    });
    it('should return false for 4', function() {
        primes.isPrime(4).should.equal(false);
    });
});