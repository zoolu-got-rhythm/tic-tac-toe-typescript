"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function randomHexColourGenerator(params) {
    var startingRange = params.range || 0;
    var hex = "#";
    for (var i = 0; i < 6; i++) {
        hex += "0123456789abcdef".split("")[range(startingRange, 16)];
    }
    console.log(hex);
    return hex;
}
exports.default = randomHexColourGenerator;
function range(min, max) {
    var scale = max - min;
    return (min + Math.floor(Math.random() * scale));
}
//# sourceMappingURL=HexGenerator.js.map