import * as chai from "chai";
const should: Chai.Should = chai.should();

import "mocha";

import * as f from "../src/Primes";

describe("Test if a value is prime",()=>{
    it("1 should be prime",()=>f.isPrime(1).should.equal(true));
    it("1.2 should not be prime",()=> f.isPrime(1.2).should.equal(false));
    it("2 should be prime",()=>f.isPrime(2).should.equal(true));
    it("2.2 should not be prime",()=>f.isPrime(2.2).should.equal(false));
    it("3 should be prime",()=>f.isPrime(3).should.equal(true));
    it("4 should not be prime",()=>f.isPrime(4).should.equal(false));
});