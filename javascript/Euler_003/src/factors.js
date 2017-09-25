var primes = require('./primes.js');

exports.factorFinder = function() {
    var isPrime = primes.primeFinder();
    return function(x) {
        var t = x,
            p = getNextPrime(),
            factors = [];
        while (t >= p) {
            if (isEvenlyDivisible(t, p)) {
                factors.push(p);
                t = t / p;
            }
            p = getNextPrime(p);
        }
        return factors;
    };

    function getNextPrime(before) {
        var x = before || 0;

        do {
            x += 1;
        } while (!isPrime(x));
        return x;
    }

    function isEvenlyDivisible(dividend, divisor) {
        return (dividend % divisor === 0);
    }
};