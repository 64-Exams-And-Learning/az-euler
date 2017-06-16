import * as _ from "lodash";

function isMultipleOf(value: number, factor: number): boolean {
    return value % factor === 0;
}

function isMultipleOf3(value: number): boolean {
    return isMultipleOf(value, 3);
}

function isMultipleOf5(value: number): boolean {
    return isMultipleOf(value, 5);
}

function isMultipleOf3or5(value:number):boolean{
    return isMultipleOf3(value)||isMultipleOf5(value);
}

export function sumFactorsOf(value: number, ...factors: number[]): number {
    let values = _.range(value);
    //console.log(_(values).filter(isMultipleOf3or5).value());
    return _(values).filter(isMultipleOf3or5).sum();

}
