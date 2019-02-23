import * as _ from "lodash";

export function MinimumDivisor(values: number[]): number {
    var current = 1;
    var a = false;
    while (! _.reduce(values, (a,v) => {
        // console.log(`current: ${current}\na: ${a}\nv: ${v}`);
        return a && isDivisible(current, v);
    })) {
        current++;
    };
    return current;
}

function isDivisible(current:number, value:number):boolean{
    return value ===1 || current % value === 0;
}