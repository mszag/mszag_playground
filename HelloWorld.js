"use strict";
//return the total number of smiling faces in the array
function countSmileys(arr) {
    let rightFaces = 0;
    let rightEyes = [":", ";"];
    let rightNoses = ["-", "~"];
    let rightSmiles = [")", "D"];
    for (let face of arr) {
        if (face.match("^[:;][-~]?[\)D]$"))
            rightFaces++;
    }
    return rightFaces;
}
exports.countSmileys = countSmileys;
console.log(countSmileys([':D', ':~)', ';~D', ':)']));
//# sourceMappingURL=HelloWorld.js.map