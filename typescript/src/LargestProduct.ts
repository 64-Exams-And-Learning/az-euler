
export function CalculateLargestProduct(value: string, size: number): number {
    var largestValue = 0;
    console.log();
    for (var v = 0; v <= value.length - size; v++) {
        var chunk = value.substr(v, size).split("").map(x => +x);
        // console.log(`chunk = [${chunk}]`);
        // var a: number[] = [
        //     +value[v],
        //     +value[v + 1],
        //     +value[v + 2],
        //     +value[v + 3],
        // ];
        var testValue = chunk.reduce((acc, x) => acc * x, 1);
        if (testValue > largestValue) {
            var dog = chunk.reduce((a, x) => a + x, "");
            console.log(`for ${dog} the product is ${testValue}`);
        }
        largestValue = Math.max(testValue, largestValue);
    }
    return largestValue;

}