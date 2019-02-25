import * as primes from "./Primes";

export function Of(value: number, distinct: boolean = false): number[] {
    var t = value;
    var prime = primes.getFirstPrimeGreaterThen(0);
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
        prime = primes.getFirstPrimeGreaterThen(prime);
    }

    return result;
}

export function ProductOfFactors(value: number): number {
    var factorSets = [];
    for (var i = 2; i <= value; i++) {
        factorSets.push(PrimeFactorSet(i));
    }
    // merge
    var accumulated: number[] = [];
    for (var i = 0; i < factorSets.length; i++) {
        for (var j = 0; j < factorSets[i].length; j++) {
            accumulated[j] = Math.max(accumulated[j] || 0, factorSets[i][j] || 0);
        }
    }

    var products = accumulated.map((v, i) => Math.pow(primes.isPrime(i) ? i : 1, v));

    return products.reduce((p, v) => p * v);
}

export function PrimeFactorSet(value: number): number[] {
    var t = value;
    var prime = primes.getFirstPrimeGreaterThen(0);
    var factorSet: number[] = [];

    while (t >= prime) {
        if (primes.Primes.isEvenlyDivisible(t, prime)) {
            factorSet[prime] = (factorSet[prime] || 0) + 1;
            t = t / prime;
            prime = 1;
        } else {
            factorSet[prime] = (factorSet[prime] || 0);
        }
        prime = primes.getFirstPrimeGreaterThen(prime);
    }
    return factorSet;
}

export function DistinctOf(value: number): number[] {
    return Of(value, true);
}

