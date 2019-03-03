export function Evaluate(grid: number[][], scale: number): number {
    var largest: number = 0;
    var x = grid.length, xLimit = x - scale;
    var y = grid[0].length, yLimit = y - scale;

    var horizontal = new Array(scale);
    var diagonal1 = new Array(scale);
    var diagonal2 = new Array(scale);
    var vertical = new Array(scale);

    for (var xPrime = 0; xPrime <= xLimit; xPrime++) {
        for (var yPrime = 0; yPrime <= yLimit; yPrime++) {
            for (var dim = 0; dim < scale; dim++) {
                horizontal[dim] = grid[xPrime][yPrime + dim];
                diagonal1[dim] = grid[xPrime + dim][yPrime + dim];
                diagonal2[dim] = grid[xPrime + (scale - 1 - dim)][yPrime + dim];
                vertical[dim] = grid[xPrime + dim][yPrime];
            }
            largest = LargestOf(largest, horizontal, diagonal1, diagonal2, vertical);
        }
    }
    // console.log(`largest: ${largest}`);
    return largest;

}

function LargestOf(largest: number, h: number[], d1: number[], d2: number[], v: number[]): number {

    var hValue = h.reduce((a, x) => a * x, 1);
    var d1Value = d1.reduce((a, x) => a * x, 1);
    var d2Value = d2.reduce((a, x) => a * x, 1);
    var vValue = v.reduce((a, x) => a * x, 1);
    largest = Math.max(largest, hValue);
    largest = Math.max(largest, d1Value);
    largest = Math.max(largest, d2Value);
    largest = Math.max(largest, vValue);
    // console.log(`[${xPrime}, ${yPrime}]\n[${horizontal}]:${horizontalValue}\n[${diagonal}]:${diagonalValue}\n[${vertical}]:${verticalValue}`);
    console.log(`largest: ${largest}`);
    return largest;
}