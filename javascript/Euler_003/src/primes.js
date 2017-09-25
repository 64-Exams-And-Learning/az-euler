var _ = require('lodash');

exports.primeFinder = function() {
    // primes is the memoized list of primes
    var primes = [1],
        lastValueChecked = 1;

    function isCurrentlyKnownPrime(primes, testValue) {
        // console.log(`isCurrentlyKnownPrime([${primes}],${testValue});`);
        return _.includes(primes, testValue);
    }

    function isCurrentlyKnownComposite(lastValueChecked, testValue) {
        // console.log(`isCurrentlyKnownComposite(${lastValueChecked},${testValue}) => {} : ${lastValueChecked >= testValue};`);
        return lastValueChecked >= testValue;
    }

    function isNewPrime(t) {
        // MaxFloor means, when we are moving from low to high we don't need to check a value that is greater then the oppisite factor
        // that we just checked.  For example, when checking 11 against the primes of 1,2,3,5,7 the first maxfloor is 11 / 2 or 5.
        // therefore any prime values greater the 5 (7 in this case) need not be checked.  The next iteration with 11 / 3 yields 3 for a
        // MaxFloor, the test for prime > MaxFloor stops and returns false with five.  This results in testing 50% fewer values.
        var maxFloor = t,
            index = 1;

        function isEvenlyDivisible(dividend, divisor) {
            // console.log(`isEvenlyDivisible(${dividend},${divisor}) => {dividend % divisor === 0} : ${dividend % divisor === 0};`)
            maxFloor = Math.floor(dividend / divisor);
            return (dividend % divisor === 0);
        }

        //console.log(`isNewPrime([${primes}],${t});`);
        while (primes[index] < maxFloor) {
            //for (var i = 1; i < primes.length; i++) {
            // for (var i = primes.length - 1; i >= 0; i--) {
            if (isEvenlyDivisible(t, primes[index])) {
                if (primes[index] === 1) {
                    primes.push(t);
                    return true;
                } else {
                    return false;
                }
            }
            index += 1;
        }
        primes.push(t);
        return true;
    }

    return function(x) {
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
    };


}