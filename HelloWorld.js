"use strict";
exports.__esModule = true;
var G964 = (function () {
    function G964() {
    }
    return G964;
}());
G964.movingShift = function (s, shift) {
    var chunkSize = Math.floor(s.length / 5);
    var chunk = '';
    var results = [];
    console.log('enter...');
    for (var _i = 0, _a = s.slice(); _i < _a.length; _i++) {
        var letter = _a[_i];
        var char = letter.charCodeAt();
        if (/^[a-z]+$/i.test(letter)) {
            char += shift;
            console.log(letter.charCodeAt());
            console.log(char);
        }
        if (chunk.length < chunkSize) {
            chunk += String.fromCharCode(char);
        }
        else {
            chunk += String.fromCharCode(char);
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
    // your code
};
exports.G964 = G964;
var u, sol, v;
u = "I should have known that you would have a perfect answer for me!!!";
sol = ["J vltasl rlhr ", "zdfog odxr ypw", " atasl rlhr p ", "gwkzzyq zntyhv", " lvz wp!!!"];
console.log(G964.movingShift(u, 1));
console.log(sol);
