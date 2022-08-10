"use strict";
exports.__esModule = true;
exports.increaseCounter4times = void 0;
var Counter_1 = require("../counter/Counter");
function increaseCounter4times() {
    var counter1 = new Counter_1.Counter();
    var counter2 = new Counter_1.Counter();
    counter1.increaseCounter();
    counter1.increaseCounter();
    counter2.increaseCounter();
    counter2.increaseCounter();
    console.log("Count from counter1 = ".concat(counter1.count));
    console.log("Count from counter2 = ".concat(counter2.count));
}
exports.increaseCounter4times = increaseCounter4times;
