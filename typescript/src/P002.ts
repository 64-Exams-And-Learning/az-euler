export function Problem_2(): number {
    let total = 0;
    let v1 = 1;
    let v2 = 2;

    total += isEven(v2) ? v2 : 0;

    let v3 = sum(v1, v2);
    v1 = v2;
    v2 = v3;
    while (v2 < 4000000) {
        total += isEven(v2) ? v2 : 0;

        v3 = sum(v1, v2);
        v1 = v2;
        v2 = v3;
    }

    return total;
}

const sum = (v1: number, v2: number): number => { return v1 + v2; };
const isEven = (value: number): boolean => { return value % 2 === 0; }