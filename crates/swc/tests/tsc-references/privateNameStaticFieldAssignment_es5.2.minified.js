function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) {
    if (receiver !== classConstructor) throw new TypeError("Private static access of wrong provenance");
    return descriptor.value;
}
function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) {
    if (receiver !== classConstructor) throw new TypeError("Private static access of wrong provenance");
    if (!descriptor.writable) throw new TypeError("attempted to set read only private field");
    return descriptor.value = value, value;
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
    }
}
var A = function() {
    "use strict";
    var Constructor, protoProps, staticProps;
    function A() {
        !function(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }(this, A), _classStaticPrivateFieldSpecSet(A, A, _field, 1), _classStaticPrivateFieldSpecSet(A, A, _field, _classStaticPrivateFieldSpecGet(A, A, _field) + 2), _classStaticPrivateFieldSpecSet(A, A, _field, _classStaticPrivateFieldSpecGet(A, A, _field) - 3), _classStaticPrivateFieldSpecSet(A, A, _field, _classStaticPrivateFieldSpecGet(A, A, _field) / 4), _classStaticPrivateFieldSpecSet(A, A, _field, 5 * _classStaticPrivateFieldSpecGet(A, A, _field)), _classStaticPrivateFieldSpecSet(A, A, _field, Math.pow(_classStaticPrivateFieldSpecGet(A, A, _field), 6)), _classStaticPrivateFieldSpecSet(A, A, _field, _classStaticPrivateFieldSpecGet(A, A, _field) % 7), _classStaticPrivateFieldSpecSet(A, A, _field, _classStaticPrivateFieldSpecGet(A, A, _field) << 8), _classStaticPrivateFieldSpecSet(A, A, _field, _classStaticPrivateFieldSpecGet(A, A, _field) >> 9), _classStaticPrivateFieldSpecSet(A, A, _field, _classStaticPrivateFieldSpecGet(A, A, _field) >>> 10), _classStaticPrivateFieldSpecSet(A, A, _field, 11 & _classStaticPrivateFieldSpecGet(A, A, _field)), _classStaticPrivateFieldSpecSet(A, A, _field, 12 | _classStaticPrivateFieldSpecGet(A, A, _field)), _classStaticPrivateFieldSpecSet(A, A, _field, 13 ^ _classStaticPrivateFieldSpecGet(A, A, _field)), _classStaticPrivateFieldSpecSet(A.getClass(), A, _field, 1), _classStaticPrivateFieldSpecSet(A.getClass(), A, _field, _classStaticPrivateFieldSpecGet(A.getClass(), A, _field) + 2), _classStaticPrivateFieldSpecSet(A.getClass(), A, _field, _classStaticPrivateFieldSpecGet(A.getClass(), A, _field) - 3), _classStaticPrivateFieldSpecSet(A.getClass(), A, _field, _classStaticPrivateFieldSpecGet(A.getClass(), A, _field) / 4), _classStaticPrivateFieldSpecSet(A.getClass(), A, _field, 5 * _classStaticPrivateFieldSpecGet(A.getClass(), A, _field)), _classStaticPrivateFieldSpecSet(A.getClass(), A, _field, Math.pow(_classStaticPrivateFieldSpecGet(A.getClass(), A, _field), 6)), _classStaticPrivateFieldSpecSet(A.getClass(), A, _field, _classStaticPrivateFieldSpecGet(A.getClass(), A, _field) % 7), _classStaticPrivateFieldSpecSet(A.getClass(), A, _field, _classStaticPrivateFieldSpecGet(A.getClass(), A, _field) << 8), _classStaticPrivateFieldSpecSet(A.getClass(), A, _field, _classStaticPrivateFieldSpecGet(A.getClass(), A, _field) >> 9), _classStaticPrivateFieldSpecSet(A.getClass(), A, _field, _classStaticPrivateFieldSpecGet(A.getClass(), A, _field) >>> 10), _classStaticPrivateFieldSpecSet(A.getClass(), A, _field, 11 & _classStaticPrivateFieldSpecGet(A.getClass(), A, _field)), _classStaticPrivateFieldSpecSet(A.getClass(), A, _field, 12 | _classStaticPrivateFieldSpecGet(A.getClass(), A, _field)), _classStaticPrivateFieldSpecSet(A.getClass(), A, _field, 13 ^ _classStaticPrivateFieldSpecGet(A.getClass(), A, _field));
    }
    return Constructor = A, protoProps = null, staticProps = [
        {
            key: "getClass",
            value: function() {
                return A;
            }
        }
    ], protoProps && _defineProperties(Constructor.prototype, protoProps), staticProps && _defineProperties(Constructor, staticProps), A;
}(), _field = {
    writable: !0,
    value: 0
};
