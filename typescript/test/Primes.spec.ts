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
});

describe("Test the Range utility", () => {
    it("Range(3) should be [0,1,2]", () => f.Range(3).should.deep.equal([0, 1, 2]));
    it("Range(3,1) should be [1,2,3]", () => f.Range(3, 1).should.deep.equal([1, 2, 3]));
    it("Range(3,-1) should be [-1,0,1]", () => f.Range(3, -1).should.deep.equal([-1, 0, 1]));
    it("Range(3,10) should be [10,11,12]", () => f.Range(3, 10).should.deep.equal([10, 11, 12]));
});
