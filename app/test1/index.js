"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var greeter_1 = require("./greeter");
var calc_1 = require("./calc");
var Student_1 = require("./Student");
var greeter_html_1 = __importDefault(require("./greeter.html"));
var numbersToAdd = [3, 4, 10, 2];
var result = calc_1.sum(numbersToAdd);
console.log("The result is: " + result);
var mhlv = new Student_1.Student("Anatoliy", "M", "Mik");
greeter_html_1.default.body.innerHTML = greeter_1.greeting(mhlv);
console.log(greeter_1.greeting(mhlv));
