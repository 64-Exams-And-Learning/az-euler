export class Primes {
    static Known: number[] = [];
    static TestedCeiling: number = 1;

    static isEvenlyDivisible = (dividend: number, divisor: number): boolean => dividend % divisor === 0;

    static isNewPrime = (value: number): boolean => {
        // console.log(`Known: ${Primes.Known}`);
        // console.log(`Value: ${value}`);
        var maxFloor = value;
        var isComposite = false;

        for (var e = 0; e < Primes.Known.length; e++) {
            if (Primes.isEvenlyDivisible(value, Primes.Known[e])) {
                isComposite = true;
                break; // found a divisor, don't continue
            }
        }

        // the value was not flagged as a composite
        if (!isComposite) {
            Primes.Known.push(value);
        }

        // in any case set the new upper limit 
        Primes.TestedCeiling = value;
        return !isComposite; // which will be false if it is prime
    }
}

export function Range(size: number, start = 0): number[] {
    return [...Array(size).keys()].map(i => i + start);
}

export function isPrime(value: number): boolean {
    // Prime numbers are the natural numbers greater than one that are not products of two smaller numbers
    // This allows us a couple of quick tests to get started
    if (value % 1 !== 0) return false; // must be a natural (integer) number
    if (value <= 1) return false; // must be greater then 1

    // It may be in our list of known primes
    if (Primes.Known.includes(value)) return true;
    // We many have tested a lesser number, and since it wasn't prime it must be composite
    if (value <= Primes.TestedCeiling) return false;

    var finalValue = true;

    // loop from TestedCeiling to passed in value
    for (var i = Primes.TestedCeiling + 1; i <= value; i++) {
        finalValue = Primes.isNewPrime(i);
    }

    return finalValue;
}