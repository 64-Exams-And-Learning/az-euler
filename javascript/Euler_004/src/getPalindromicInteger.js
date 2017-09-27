var
    palindrome = require('../src/palindrome.js');

exports.lessThan = function() {
    return function(x) {
        var isPalindromic = palindrome.palindromeTool(),
            v = x;
        while (!isPalindromic(v)) {
            v -= 1;
        }
        return v;
    };
};