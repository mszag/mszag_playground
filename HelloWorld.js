"use strict";
var G964 = (function () {
    function G964() {
    }
    return G964;
}());
G964.movingShift = function (s, shift) {
    var chunkSize = Math.ceil(s.length / 5);
    var chunk = '';
    var results = [];
    var charScope = 'z'.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    for (var _i = 0, _a = s.slice(); _i < _a.length; _i++) {
        var letter = _a[_i];
        var char = letter.charCodeAt(0);
        if (/^[a-zA-Z]{1}$/.test(letter)) {
            var isSmallCap = char > 'Z'.charCodeAt(0);
            shift = shift % charScope;
            char += shift - (char + shift > (isSmallCap ? 'z' : 'Z').charCodeAt(0) ? charScope : 0);
        }
        chunk += String.fromCharCode(char);
        if (chunk.length == chunkSize) {
            results.push(chunk);
            chunk = '';
        }
        shift++;
    }
    if (chunk.length > 0) {
        results.push(chunk);
    }
    return results;
};
G964.demovingShift = function (arr, shift) {
    var charScope = 'z'.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    var output = '';
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var chunk = arr_1[_i];
        for (var _a = 0, _b = chunk.slice(); _a < _b.length; _a++) {
            var letter = _b[_a];
            var char = letter.charCodeAt(0);
            if (/^[a-zA-Z]{1}$/.test(letter)) {
                var isSmallCap = char > 'Z'.charCodeAt(0);
                shift = shift % charScope;
                char -= shift - (char - shift < (isSmallCap ? 'a' : 'A').charCodeAt(0) ? charScope : 0);
            }
            output += String.fromCharCode(char);
            shift++;
        }
    }
    return output;
};
exports.G964 = G964;
var u, sol, v;
u = "I should have known that you would have a perfect answer for me!!!";
sol = ["J vltasl rlhr ", "zdfog odxr ypw", " atasl rlhr p ", "gwkzzyq zntyhv", " lvz wp!!!"];
console.log(G964.movingShift(u, 1));
console.log(sol);
console.log(G964.demovingShift(sol, 1));
console.log(u);
