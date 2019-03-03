import * as chai from "chai";
const should: Chai.Should = chai.should();

import "mocha";
import { isPythagorean, isTriplet, getSquares, getNaturalPythagorean } from "../src/SpecialPythagoreanTriplet";

describe(`

A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
a2 + b2 = c2

For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
`, () => { it("", () => { }) });

describe("", () => {
    describe("", () => {
        var tests = [
            { value: [3, 4, 5], isPythagorean: true, isTriplet: true, product: 60, sum: 12 },
            { value: [3, 5, 6], isPythagorean: false, isTriplet: true, product: 90, sum: 14 }
        ];
        tests.forEach(t => {
            it(`Is [${t.value}] a pythagorean value ${t.isPythagorean}`, () => isPythagorean(t.value).should.equal(t.isPythagorean));
            it(`Is [${t.value}] a triplet value ${t.isTriplet}`, () => isTriplet(t.value).should.equal(t.isTriplet));
            it(`The sum of [${t.value}] is ${t.sum}`, () => t.value.reduce((a, x) => a + x, 0).should.equal(t.sum));
            it(`The product of [${t.value}] is ${t.product}`, () => t.value.reduce((a, x) => a * x, 1).should.equal(t.product));
        });
    });
    describe("Get some squares", () => {
        var values = [
            { value: 25, squares: [4, 9, 16, 25] },
            { value: 100, squares: [4, 9, 16, 25, 36, 49, 64, 81, 100] },
            { value: 200, squares: [4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196] }
        ];
        values.forEach(x => {
            it(`less then ${x.value} should be [${x.squares}]`, () => getSquares(x.value).should.deep.equal(x.squares));
        });
    });

    describe("Get some natural pythagorean sets", () => {
        it("where max value 12", () => getNaturalPythagorean(12).should.deep.equal([3, 4, 5]));
        it("where max value 1000", () => getNaturalPythagorean(1000).should.deep.equal([200,375,425]));
        it("where max value 1000", () => getNaturalPythagorean(1000).reduce((a, x) => a * x, 1).should.equal(31875000));
    });
});