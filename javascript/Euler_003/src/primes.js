var _ = require('lodash');

exports.primeFinder = function () {

    // primes is the memoized list of primes
    var primes = [1],
        lastValueChecked = 1;

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

    function isCurrentlyKnownComposite(lastValueChecked, testValue) {
        console.log(`isCurrentlyKnownComposite(${lastValueChecked},${testValue}) => {} : ${lastValueChecked >= testValue};`);
        return lastValueChecked >= testValue;
    }

    function isNewPrime(t) {
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
        var result = false;
        if (isCurrentlyKnownPrime(primes, x)) { return true; }
        // Since the value is not in the array, it's not a known prime, and if the last value checked was a prime, we wouldn't get here.
        if (isCurrentlyKnownComposite(lastValueChecked, x)) { return false; }
        // lastValueChecked += 1;
        for (var i = lastValueChecked; i < x; i++) {
            result = isNewPrime(i + 1);
        }
        lastValueChecked = x;
        return result;
    }
};
