"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Subject = /** @class */ (function () {
    function Subject() {
        this.observers = new Array();
    }
    Subject.prototype.attach = function (observer) {
        if (this.observers.indexOf(observer) === -1) {
            this.observers.push(observer);
        }
    };
    Subject.prototype.detach = function (observer) {
        var index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers = this.observers.slice(index, 1);
        }
    };
    Subject.prototype.notify = function () {
        this.observers.forEach(function (observer) { return observer.update(); });
    };
    return Subject;
}());
exports.Subject = Subject;
//# sourceMappingURL=subject.js.map