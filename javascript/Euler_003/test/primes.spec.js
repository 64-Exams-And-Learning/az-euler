var assert = require('assert'),
    should = require('chai').should(),
    isPrime = require('../src/prime.js');

describe('isPrime',function(){
    it('should return true for 1',function(){
        isPrime(1).should.equal(true);

    });
});