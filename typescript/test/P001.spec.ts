import * as chai from "chai";
const should: Chai.Should = chai.should();

import "mocha";

import * as _ from "lodash";

import * as t from "../src/P001";

describe ("test answer",()=>{
    it("should equal 23",()=>{
        t.sumFactorsOf(10,5,3).should.equal(23);
    });

    it("should be ...",()=>{
        t.sumFactorsOf(1000,5,3).should.equal(233168);
    });
});