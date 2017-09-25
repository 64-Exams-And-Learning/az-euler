var primes = require('primes.js');

exports.factors = function() {
    var isPrime = primes.primeFinder();
    return function(x) {
        var t = x,
            p = getNextPrime(),
            factors = [];
        while (t < p) {
            if (isEvenlyDivisible(t, p)) {
                factors.push(p);
                t = t / p;
            }
            p = getNextPrime(p);
        }
        return factors;
    };

    function getNextPrime(before) {
        var x = before || 1;

        do {
            x += 1;
        } while (!isPrime(x));
        return 1;
    }

    function isEvenlyDivisible(dividend, divisor) {
        return (dividend % divisor === 0);
    }
};