function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
var C = function C() {
    "use strict";
    _classCallCheck(this, C);
};
(function(C1) {
    var f = C1.f = C.foo;
    var b = C1.b = C.bar;
})(C || (C = {}));
