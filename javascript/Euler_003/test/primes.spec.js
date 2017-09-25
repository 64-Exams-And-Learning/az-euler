var assert = require('assert'),
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
        it('should return false for 19375751', function() {
            isPrime(19375751).should.equal(false);
        });
    });
    // describe('findNextPrime', function() {
    //     it('should return 1 for 0', function() {
    //         primes.findNextPrime(0).should.equal(1);
    //     });
    //     it('should return 2 for 1', function() {
    //         primes.findNextPrime(1).should.equal(2);
    //     });
    //     it('should return 3 for 2', function() {
    //         primes.findNextPrime(2).should.equal(3);
    //     });
    //     it('should return 5 for 3', function() {
    //         primes.findNextPrime(3).should.equal(5);
    //     });
    // });

});