import * as chai from "chai";
const should: Chai.Should = chai.should();

import "mocha";
import { SumOfSquares, SquareOfSum } from "../src/SumSquareDifference";

describe("", () => {
    // parameterized
    describe("The square of the sum of", () => {
        var tests = [
            { value: 1, expected: 1 },
            { value: 2, expected: 9 },
            { value: 3, expected: 36 },
            { value: 10, expected: 3025 },
            { value: 100, expected: 25502500 }];

        tests.forEach(t => it(`${t.value} is ${t.expected}`, () => SquareOfSum(t.value).should.equal(t.expected)));
    });

    describe("The sum of the square of", () => {
        var tests = [
            { value: 1, expected: 1 },
            { value: 2, expected: 5 },
            { value: 3, expected: 14 },
            { value: 10, expected: 385 },
            { value: 100, expected: 338350 }];

        tests.forEach(t => it(`${t.value} is ${t.expected}`, () => SumOfSquares(t.value).should.equal(t.expected)));
    });

    describe("Differences between SumOfSquares and SquareOfSums for", () => {
        it("1 is 0", () => (SquareOfSum(1) - SumOfSquares(1)).should.equal(0));
        it("2 is 4", () => (SquareOfSum(2) - SumOfSquares(2)).should.equal(4));
        it("3 is 22", () => (SquareOfSum(3) - SumOfSquares(3)).should.equal(22));
        it("10 is 2640", () => (SquareOfSum(10) - SumOfSquares(10)).should.equal(2640));
        it("100 is 25164150", () => (SquareOfSum(100) - SumOfSquares(100)).should.equal(25164150));
    });

});