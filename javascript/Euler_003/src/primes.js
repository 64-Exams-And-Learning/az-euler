var _ = require('lodash');

exports.primeFinder = function () {

    // primes is the memoized list of primes
    var primes = [1],
        currentComposite = 1;

    function findNextPrime(value) {
        while (!isCurrentlyKnownPrime([1], value)) {
            value += 1;
        }
        return value;
    }

    function isCurrentlyKnownPrime(primes, testValue) {
        console.log(`isCurrentlyKnownPrime([${primes}],${testValue});`);
        return _.includes(primes, testValue);
    }

    function isCurrentlyKnownComposite(knownComposite, testValue) {
        console.log(`isCurrentlyKnownComposite(${knownComposite},${testValue});`);
        return knownComposite >= testValue;
    }

    function isNewPrime(primes, t) {
        console.log(`isNewPrime([${primes}],${t});`);
        for (var i = primes.length - 1; i >= 0; i--) {
            if (isEvenlyDivisible(t, primes[i])) {
                if (primes[i] === 1) {
                    primes.push(t);
                    return true;
                } else {
                    return false;
                }
            }
        }
        primes.push(t);
        return true;
    }

    function isEvenlyDivisible(dividend, divisor) {
        console.log(`isEvenlyDivisible(${dividend},${divisor}) => {dividend % divisor === 0} : ${dividend % divisor === 0};`)
        return (dividend % divisor === 0);
    }

    return function (x) {
        if (isCurrentlyKnownPrime(primes, x)) { return true; }
        if (isCurrentlyKnownComposite(currentComposite, x)) { return false; }
        // currentComposite += 1;
        for (var i = currentComposite; i < x; i++) {
            if (isNewPrime(primes, x)) {
                currentComposite = x;
                return true;
            }
        }
    };
    // if (isCurrentlyKnownPrime(x)) {
    //     primes.push(x);
    //     return true;
    // }
    // return false;
};