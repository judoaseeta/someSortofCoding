"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var events_1 = require("events");
var Counter = /** @class */ (function (_super) {
    __extends(Counter, _super);
    function Counter() {
        var _this = _super.call(this) || this;
        _this.count = 0;
        _this.addListener('increment', function (ar) {
            _this.count += ar;
            console.log(_this.count);
        });
        _this.on('sitka', function () {
            console.log('sitka!');
        });
        return _this;
    }
    Counter.prototype.increment = function () {
        this.emit('increment', 1);
    };
    Counter.prototype.trigger = function () {
        this.emit('sitka');
    };
    Counter.listenStart = function () {
        if (!Counter.instance) {
            Counter.instance = new Counter();
        }
        return Counter.instance;
    };
    return Counter;
}(events_1.EventEmitter));
var sup = Counter.listenStart();
sup.increment();
sup.increment();
sup.trigger();
var newEvent = new events_1.EventEmitter();
newEvent.addListener('sexy', function () {
    console.log('sexy is triggerd');
});
newEvent.emit('sexy');
