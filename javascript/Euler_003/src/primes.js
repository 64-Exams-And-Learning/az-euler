var _ = require('lodash');

exports.isPrime = function(x) {
    // primes is the memoized list of primes
    var primes = [1],
        currentComposite = 1;

    if (isPrimeNumber(x)) {
        primes.push(x);
        return true;
    }
    return false;
};




function isPrimeNumber(primes, testValue) {
    if (_.includes(primes, testValue)) return true;
    if (_.last(primes) >= testValue) return false;
    for (var prime of primes) {
        if (isEvenlyDivisible(testValue, prime) && prime !== 1) return false;
    }
    return true;
}

exports.findNextPrime = function(value) {
    while (!isPrimeNumber([1], value)) {
        value += 1;
    }
    return value;
};

function isEvenlyDivisible(dividend, divisor) {
    return (dividend % divisor === 0);
}