var _ = require('lodash');

exports.palindromeTool = function() {
    return function(x) {
        var bytes = (x + '').split(''),
            l = bytes.length,
            e = l - 1;
        for (var i = 0; i < l; i++) {
            // this will test for single byte arrays and index crossing the half way point
            if (i >= e) return true;
            if (bytes[i] !== bytes[e]) return false;
            e -= 1;
        }

        return true;
    };
};