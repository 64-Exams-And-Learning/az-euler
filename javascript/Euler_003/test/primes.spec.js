var assert = require('assert'),
    should = require('chai').should(),
    primes = require('../src/primes.js');

describe('primes', function() {
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
    describe('findNextPrime', function() {
        it('should return 1 for 0', function() {
            primes.findNextPrime(0).should.equal(1);
        });
        it('should return 2 for 1', function() {
            primes.findNextPrime(1).should.equal(2);
        });
        it('should return 3 for 2', function() {
            primes.findNextPrime(2).should.equal(3);
        });
        it('should return 5 for 3', function() {
            primes.findNextPrime(3).should.equal(5);
        });
    });

});