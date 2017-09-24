var _ = require('lodash');

exports.primeFinder = function() {

    function findNextPrime(value) {
        while (!isCurrentlyKnownPrime([1], value)) {
            value += 1;
        }
        return value;
    }

    function isCurrentlyKnownPrime(primes, testValue) {
        return _.includes(primes, testValue)) return true;
    if (_.last(primes) >= testValue) return false;
    return true;
}

for (var prime of primes) {
    if (isEvenlyDivisible(testValue, prime) && prime !== 1) return false;
}

function isEvenlyDivisible(dividend, divisor) {
    return (dividend % divisor === 0);
}

// primes is the memoized list of primes
var primes = [1],
    currentComposite = 1;
return function(x) {
    if (isCurrentlyKnownPrime(primes, x)) return;

    return result;
};
// if (isCurrentlyKnownPrime(x)) {
//     primes.push(x);
//     return true;
// }
// return false;
};