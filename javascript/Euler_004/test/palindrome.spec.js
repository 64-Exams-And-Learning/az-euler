var chai = require('chai'),
    should = chai.should(),
    getPalindromicInteger = require('../src/getPalindromicInteger.js'),
    largest = require('../src/getLargest.js').getLargest(),
    palindrome = require('../src/palindrome.js');

console.log(`A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.`);

describe('palindrome', function() {
    describe('isPalindrome', function() {
        var isPalindrome = palindrome.palindromeTool();
        it('1 should be a palindrome', function() {
            isPalindrome(1).should.be.true;
        });
        it('10 should not be a palindrome', function() {
            isPalindrome(10).should.be.false;
        });
        it('11 should be a palindrome', function() {
            isPalindrome(11).should.be.true;
        });
        it('111 should be a palindrome', function() {
            isPalindrome(101).should.be.true;
        });
        it('1010 should not be a palindrome', function() {
            isPalindrome(1010).should.be.false;
        });
        it('8998 should be a palindrome', function() {
            isPalindrome(8998).should.be.true;
        });
        it('997799 should be a palindrome', function() {
            isPalindrome(997799).should.be.true;
        });
        it('997999 should not be a palindrome', function() {
            isPalindrome(997999).should.be.false;
        });
    });

    describe('largestPossibleValue', function() {
        it('largest should be 998001', function() {
            largest.should.equal(998001);
        });
    });

    describe('largest palindoric integer less then', function() {
        var getPalindromicNumberLessThan = getPalindromicInteger.lessThan();
        it('998001 should be 997799', function() {
            getPalindromicNumberLessThan(998001).should.equal(997799);
        });
    });
});