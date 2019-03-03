import * as chai from "chai";
const should: Chai.Should = chai.should();

import "mocha";

import f = require('../src/Primes')

describe("Test if a value is prime", () => {
    it("1 should not be prime", () => f.isPrime(1).should.equal(false));
    it("1.2 should not be prime", () => f.isPrime(1.2).should.equal(false));
    it("2 should be prime", () => f.isPrime(2).should.equal(true));
    it("2.2 should not be prime", () => f.isPrime(2.2).should.equal(false));
    it("3 should be prime", () => f.isPrime(3).should.equal(true));
    it("4 should not be prime", () => f.isPrime(4).should.equal(false));
    it("10 should not be prime", () => f.isPrime(10).should.equal(false));
    it("11 should be prime", () => f.isPrime(11).should.equal(true));
    it("13 should be prime", () => f.isPrime(13).should.equal(true));
    it("17 should be prime", () => f.isPrime(17).should.equal(true));
    it("19 should be prime", () => f.isPrime(19).should.equal(true));
    it("23 should be prime", () => f.isPrime(23).should.equal(true));
    it("29 should be prime", () => f.isPrime(29).should.equal(true));
    it("31 should be prime", () => f.isPrime(31).should.equal(true));
    it("37 should be prime", () => f.isPrime(37).should.equal(true));
    it("41 should be prime", () => f.isPrime(41).should.equal(true));
    it("43 should be prime", () => f.isPrime(43).should.equal(true));
    it("47 should be prime", () => f.isPrime(47).should.equal(true));
});

describe("Test the Range utility", () => {
    it("Range(3) should be [0,1,2]", () => f.Range(3).should.deep.equal([0, 1, 2]));
    it("Range(3,1) should be [1,2,3]", () => f.Range(3, 1).should.deep.equal([1, 2, 3]));
    it("Range(3,-1) should be [-1,0,1]", () => f.Range(3, -1).should.deep.equal([-1, 0, 1]));
    it("Range(3,10) should be [10,11,12]", () => f.Range(3, 10).should.deep.equal([10, 11, 12]));
});

describe("Test to retrieve a range of primes", () => {
    describe("where an upper limit of 2", () => {
        it("should be [2]", () => f.BelowCeiling(2).should.deep.equal([2]));
    });
    describe("where an upper limit of 3", () => {
        it("should be [2,3]", () => f.BelowCeiling(3).should.deep.equal([2, 3]));
    });
    describe("where an upper limit of 4", () => {
        it("should be [2,3]", () => f.BelowCeiling(4).should.deep.equal([2, 3]));
    });
    describe("where an upper limit of 10", () => {
        it("should be [2,3,5,7]", () => f.BelowCeiling(10).should.deep.equal([2, 3, 5, 7]));
    });
    describe("where an upper limit of 20", () => {
        it("should be [2,3,5,7,11,13,17,19]", () => f.BelowCeiling(20).should.deep.equal([2, 3, 5, 7, 11, 13, 17, 19]));
    });
});

describe("Counting primes", () => {
    it("2 should be the 1st prime", () => f.Nth(1).should.equal(2));
    it("3 should be the 2nd prime", () => f.Nth(2).should.equal(3));
    it("5 should be the 3rd prime", () => f.Nth(3).should.equal(5));
    it("7 should be the 4th prime", () => f.Nth(4).should.equal(7));
    it("11 should be the 5th prime", () => f.Nth(5).should.equal(11));
    it("104743 should be the 10001st prime", () => f.Nth(10001).should.equal(104743));
});

describe(`The sum of all primes below`,()=>{
    var below10 = f.BelowCeiling(10).reduce((a,x) => a + x);
    var below2m = f.BelowCeiling(2000000).reduce((a,x) => a + x);

    it(`should be ${below10}`,()=>{});
    it(`should be ${below2m}`,()=>{});
});