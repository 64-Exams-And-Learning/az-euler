import * as chai from "chai";

const should: Chai.Should = chai.should();
const expect = chai.expect;

import "mocha";

import * as _ from "lodash";

import * as t from "../src/P005";
import { Range } from "../src/Primes";
import { DistinctOf, Of, ProductOfFactors, PrimeFactorSet } from "../src/Factors";

describe("Sparse arrays in javascript", () => {
    it("dog[12] = 0 should have a length of 1", () => {
        var dog: number[] = [];
        dog[12] = 0;
        dog.length.should.equal(13);
    });
    it("dog[12] should have a value of undefined", () => {
        var dog: number[] = [];
        expect(dog[12]).to.be.undefined;
    });
    it("dog[12] = dog[12]++ should have a value of 1", () => {
        var dog: number[] = [];
        dog[12] = (dog[12] || 0) + 1;
        dog[12].should.equal(1);
    });
})

describe("The Prime Factor Set of", () => {
    it("2 is [,,1]", () => PrimeFactorSet(2).should.deep.equal([, , 1]));
    it("3 is [,,0,1]", () => PrimeFactorSet(3).should.deep.equal([, , 0, 1]));
    it("4 is [,,2]", () => PrimeFactorSet(4).should.deep.equal([, , 2]));
    it("5 is [,,0,0,,1]", () => PrimeFactorSet(5).should.deep.equal([, , 0, 0, , 1]));
    it("6 is [,,1,1]", () => PrimeFactorSet(6).should.deep.equal([, , 1, 1]));
    it("7 is [,,0,0,,0,,1]", () => PrimeFactorSet(7).should.deep.equal([, , 0, 0, , 0, , 1]));
    it("8 is [,,3]", () => PrimeFactorSet(8).should.deep.equal([, , 3]));
    it("9 is [,,0,2]", () => PrimeFactorSet(9).should.deep.equal([, , 0, 2]));
    it("10 is [,,1,0,,1]", () => PrimeFactorSet(10).should.deep.equal([, , 1, 0, , 1]));
});

describe("simple powers",()=>{
    it("1^0 === 0",()=>Math.pow(1,0).should.equal(1));
    it("2^0 === 0",()=>Math.pow(2,0).should.equal(1));
    it("2^1 === 0",()=>Math.pow(2,1).should.equal(2));
})

// describe(`2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder. What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?`, () => {
describe.only("Product of the factors of", () => {
    it("1...2 should equal 2", () => ProductOfFactors(2).should.equal(2));
    it("1...3 should equal 6", () => ProductOfFactors(3).should.equal(6));
    it("1...4 should equal 12", () => ProductOfFactors(4).should.equal(12));
    it("1...10 should equal 2520", () => ProductOfFactors(10).should.equal(2520));
    it("1...20 should equal 232792560", () => ProductOfFactors(20).should.equal(232792560));
});
