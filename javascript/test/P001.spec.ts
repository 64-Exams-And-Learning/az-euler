import * as chai from "chai";
const should: Chai.Should = chai.should();

import "mocha";

import * as _ from "lodash";

import * as t from "../src/Index";

describe ("test answer",()=>{
    let n = t.sumFactorsOf(10,5,3);
    it("should equal 23",()=>{
        n.should.equal(23);
    });

    n = t.sumFactorsOf(1000,5,3);
    it("should be ...",()=>{
        n.should.equal(0);
    });
});