var expect = require('chai').expect,
    should = require('chai').should(),
    primes = require('../src/primes.js');

describe('primes', function() {
    describe('isPrime', function() {
        var isPrime = primes.primeFinder();
        it('should return true for 1', function() {
            isPrime(1).should.equal(true);
        });
        it('should return true for 2', function() {
            isPrime(2).should.equal(true);
        });
        it('should return true for 3', function() {
            isPrime(3).should.equal(true);
        });
        it('should return false for 4', function() {
            isPrime(4).should.equal(false);
        });
        it('should return true for 5', function() {
            isPrime(5).should.equal(true);
        });
        it('should return true for 37', function() {
            isPrime(37).should.equal(true);
        });
        it('should return false for 39', function() {
            isPrime(39).should.equal(false);
        });
        it('should return true for 13', function() {
            isPrime(13).should.equal(true);
        });
        it('should return false for 12', function() {
            isPrime(12).should.equal(false);
        });
        // it('should return true for 19375751', function() {
        //     isPrime(19375751).should.equal(true);
        // });
    });

});