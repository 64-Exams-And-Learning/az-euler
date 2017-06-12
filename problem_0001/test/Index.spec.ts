import * as chai from "chai";
const should: Chai.Should = chai.should();

import "mocha";

import * as t from "../src/Index";

describe("isMultipleOf", () => {
    const f = t.isMultipleOf;
    describe("(6,3)", () => {
        let a = f(6, 3);
        it("should return 'true'", () => {
            a.should.equal(true);
        });
    });
    describe("(6,4)", () => {
        let a = f(6, 4);
        it("should return 'false'", () => {
            a.should.equal(false);
        });
    });
});
