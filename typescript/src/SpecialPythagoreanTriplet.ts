import { SquareOfSum } from "./SumSquareDifference";

export function isPythagorean(values: number[]): boolean {
    return values.length === 3 && values[0] * values[0] + values[1] * values[1] === values[2] * values[2];
}

export function isTriplet(values: number[]): boolean {
    return values.length === 3 && (values[0] < values[1]) && (values[1] < values[2]);
}

export function getSquares(lessThen: number): number[] {
    var values: number[] = [];
    for (var i = 2; i * i <= lessThen; i++) {
        values.push(i * i);
    }
    return values;
}

function getABunchOfSquares(count: number): number[] {
    var values: number[] = [];
    for (var i = 2; i <= count; i++) {
        values.push(i * i);
    }
    return values;

}
function sqr(i: number): number {
    return i * i;
}

export function getNaturalPythagorean(count: number): number[] {
    var squares = getABunchOfSquares(count);
    var naturalSets: number[] = [];
    for (var i = 0; i < count; i++) {
        // has to be i +1
        for (var j = i + 1; j < count - 1; j++) {
            var c2 = squares[i] + squares[j];
            if (squares.includes(c2, j + 1)) {
                var set = [Math.sqrt(squares[i]), Math.sqrt(squares[j]), Math.sqrt(c2)];
                var sum = set.reduce((a,x)=>a+x,0);
                if (sum === count) {
                    naturalSets = set;
                    break;
                }
            }
        }
    }

    return naturalSets;
}