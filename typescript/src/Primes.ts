export class Primes {
    // okay to start with known first prime
    static Known: number[] = [2];
    static TestedCeiling: number = 2;

    static isEvenlyDivisible = (dividend: number, divisor: number): boolean => dividend % divisor === 0;

    static isNewPrime = (value: number): boolean => {
        var isComposite = false; // assume prime (this gives us our first prime, namely 2)
        var maxTestValue = Math.sqrt(value);

        for (var e = 0; e < Primes.Known.length; e++) {
            var known = Primes.Known[e];
            if (known <= maxTestValue && Primes.isEvenlyDivisible(value, known)) {
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

export function BelowCeiling(ceiling: number): number[] {
    var r: number[] = [];
    for (var i = 2; i <= ceiling; i++) {
        if (isPrime(i)) r.push(i);
    }
    return r;
}

export function getFirstPrimeGreaterThen(value: number): number {
    if (value < 2) return 2;
    // if (value % 2 === 0) value++;
    while (!isPrime(++value)) {
        // value += 2;
    }
    return value;
}

export function Nth(n: number): number {
    var r = 0;
    for (var v = 1; v <= n; v++) {
        r = getFirstPrimeGreaterThen(r++);
    };
    return r;
}

// Prime numbers are the natural numbers greater than one that are not products of two smaller numbers
export function isPrime(value: number): boolean {

    // console.log(Primes.Known);

    // This allows us a couple of quick tests to get started
    if (value % 1 !== 0) return false; // must be a natural (integer) number

    // removing this test id we assume 2 is the first prime
    // if (value <= 1) return false; // must be greater then 1

    // It may be in our list of known primes
    if (Primes.Known.includes(value)) return true;

    // We many have tested a lesser number, and since it wasn't prime it must be composite
    if (value <= Primes.TestedCeiling) return false;

    // Haven't found a prime yet, starting from where we last left off let's start looking ...
    var finalValue = true;

    // loop from TestedCeiling to passed in value
    for (var i = Primes.TestedCeiling + 1; i <= value; i++) {
        finalValue = Primes.isNewPrime(i);
    }

    return finalValue;
}