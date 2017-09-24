var _ = require('lodash');

exports.isPrime = function(x) {
    // primes is the memoized list of primes
    var primes = [1],
        currentComposite = 1;

    function isPrimeNumber(testValue) {
        if (_.includes(primes, testValue)) return true;
        if (currentComposite >= testValue) return false;
        for (var prime of primes) {
            if (isEvenlyDivisible(testValue, prime) && prime !== 1) return false;
        }
        return true;
    }

    if (isPrimeNumber(primes, currentComposite, x)) {
        primes.push(x);
        return true;
    }
    return false;
};

function isEvenlyDivisible(dividend, divisor) {
    return (dividend % divisor === 0);
}