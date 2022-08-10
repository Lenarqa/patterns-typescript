"use strict";
exports.__esModule = true;
var Counter_1 = require("./counter/Counter");
var testInAnotherFile_1 = require("./testInAnotherFile");
(0, testInAnotherFile_1.increaseCounter4times)();
var counter1 = new Counter_1.Counter();
counter1.increaseCounter();
console.log("it will be 5 = ".concat(counter1.count));
