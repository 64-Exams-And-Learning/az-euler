import { Range } from "./Primes";

export function SquareOfSum(value: number): number {
    var sum = value * (value + 1) / 2;
    // var sum = Range(value, 1).reduce((a, v) => a + v, 0);
    return sum * sum;
}

export function SumOfSquares(value: number): number {
    return Range(value, 1).map(x => x * x).reduce((a, v) => a + v, 0);
}