import * as chai from "chai";
const should: Chai.Should = chai.should();

import "mocha";

import { Of, DistinctOf } from '../src/Factors'

describe("Test if values are factored: ", () => {
    it("2 should factor to [2]", () => Of(2).should.deep.equal([2]));
    it("3 should factor to [3]", () => Of(3).should.deep.equal([3]));
    it("4 should factor to [2,2]", () => Of(4).should.deep.equal([2, 2]));
    it("5 should factor to [5]", () => Of(5).should.deep.equal([5]));
    it("6 should factor to [2,3]", () => Of(6).should.deep.equal([2, 3]));
    it("7 should factor to [7]", () => Of(7).should.deep.equal([7]));
    it("8 should factor to [2,2,2]", () => Of(8).should.deep.equal([2, 2, 2]));
    it("9 should factor to [3,3]", () => Of(9).should.deep.equal([3, 3]));
    it("10 should factor to [2,5]", () => Of(10).should.deep.equal([2, 5]));
});

describe("Test if distinct factors are returned", () => {
    describe("when 2 is factored the result", () => {
        it("should be [2]", () => DistinctOf(2).should.deep.equal([2]));
    });
    describe("when 4 is factored the result", () => {
        it("should be [2]", () => DistinctOf(4).should.deep.equal([2]));
    });
    describe("when 6 is factored the result", () => {
        it("should be [2,3]", () => DistinctOf(6).should.deep.equal([2,3]));
    });
    describe("when 12 is factored the result", () => {
        it("should be [2,3]", () => DistinctOf(12).should.deep.equal([2,3]));
    });

});