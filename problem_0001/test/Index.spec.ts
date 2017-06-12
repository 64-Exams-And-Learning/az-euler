import * as chai from "chai";
const should:Chai.Should = chai.should();

import * as t from "../src/Index";

describe("isMultipleOf", () => {
    const f = t.isMultipleOf;
    describe("(6,3)", () => {
        let a:boolean = f(6, 3);
        it("should return 'true'", () => {
            a.should.equal(true);
        });
    });
});
