"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sum(arr) {
    return arr.reduce(function (a, b) {
        return a + b;
    }, 0);
}
exports.sum = sum;
