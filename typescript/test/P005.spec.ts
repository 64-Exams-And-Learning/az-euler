import * as chai from "chai";
const should: Chai.Should = chai.should();

import "mocha";

import * as _ from "lodash";

import * as t from "../src/P005";

describe ( `2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?`,() =>{
    it("should equal 2520", ()=>{
        t.MinimumDivisor(_.range(1,10)).should.equal(2520);
    });
    it("should equal ...",()=>{
        // t.MinimumDivisor([20,19,18,17,16,15,14,13,12,11]).should.equal(232792560);
        // t.EvenFor(_.range(1,20)).should.equal(232792560);
    });
});
