import * as primes from "./Primes";

export function Of(value: number, distinct: boolean = false): number[] {
    var t = value;
    var prime = getNextPrime();
    var result = [];
    // var result: number[] = [];

    while (t >= prime) {
        // does this prime exist in the set?

        if (primes.Primes.isEvenlyDivisible(t, prime)) {
            result.push(prime);
            t = t / prime;
            // reset if not looking for distinct
            if (!distinct) prime = 1;
        }
        prime = getNextPrime(prime);
    }

    return result;
}

function FactorSetOf(value: number) {
    return {}
}

export function ProductOfFactors(value: number): number {
    var factorSets = [];
    for (var i = 2; i <= value; i++) {
        factorSets.push(PrimeFactorSet(i));
    }
    // merge
    console.log();
    var accumulated: number[] = [];
    for (var i = 0; i < factorSets.length; i++) {
        // console.log(`f: ${factorSets[i]}`);
        for (var j = 0; j < factorSets[i].length; j++) {
            accumulated[j] = Math.max(accumulated[j] || 0, factorSets[i][j] || 0);
            // console.log(`at[j]: ${accumulated[j]}`);
        }
        // console.log(`for v = ${value} a = ${accumulated}`);
        // console.log(`for i ${i}`);

    }
    console.log(`for v = ${value} a = ${accumulated}`);

    var primeIndex = 0;
    var products = accumulated.map((v, i) => Math.pow(primes.isPrime(i) ? i : 1, v));

    console.log(`for v = ${value} p = ${products}`);
    // var reduced = factorSets.reduce((a, t, i) => {
    //     console.log();
    //     console.log(`a: ${a}`);
    //     console.log(`t: ${t}`);
    //     console.log(`i: ${i} | a[i]: ${a[i]} | t[i]: ${t[i]}`);
    //     var x = Math.max(a[i] || 0, t[i] || 0);
    //     a[i] = x;
    //     console.log(`a: ${a}`);
    //     return a;
    // }, []);
    // console.log(reduced);
    return products.reduce((p, v) => p * v);
}

export function PrimeFactorSet(value: number): number[] {
    var t = value;
    var prime = getNextPrime();
    var factorSet: number[] = [];

    while (t >= prime) {
        if (primes.Primes.isEvenlyDivisible(t, prime)) {
            factorSet[prime] = (factorSet[prime] || 0) + 1;
            t = t / prime;
            prime = 1;
        } else {
            factorSet[prime] = (factorSet[prime] || 0);
        }
        prime = getNextPrime(prime);
    }
    return factorSet;
}

export function DistinctOf(value: number): number[] {
    return Of(value, true);
}

function getNextPrime(before = 0): number {
    var valueToTest = before;
    do {
        valueToTest++;
    } while (!primes.isPrime(valueToTest));
    return valueToTest;
}