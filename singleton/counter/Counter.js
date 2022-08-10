"use strict";
exports.__esModule = true;
exports.Counter = void 0;
var Counter = /** @class */ (function () {
    function Counter() {
        this._count = 0;
        if (typeof (Counter.instance) === "object") {
            return Counter.instance;
        }
        else {
            this._count = 0;
            Counter.instance = this;
            return new Counter();
        }
    }
    Object.defineProperty(Counter.prototype, "count", {
        get: function () {
            return this._count;
        },
        enumerable: false,
        configurable: true
    });
    Counter.prototype.increaseCounter = function () {
        this._count += 1;
    };
    Counter.instance = new Counter();
    return Counter;
}());
exports.Counter = Counter;
