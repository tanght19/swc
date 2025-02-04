function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
// @filename: file.tsx
// @jsx: preserve
// @noLib: true
// @skipLibCheck: true
// @libFiles: react.d.ts,lib.d.ts
var React = require('react');
var decorator = function decorator(Component) {
    return function(props) {
        /*#__PURE__*/ return React.createElement(Component, _extends({}, props));
    };
};
var decorator2 = function decorator2(Component) {
    return function(props) {
        /*#__PURE__*/ return React.createElement(Component, _extends({}, props, {
            x: 2
        }));
    };
};
var decorator3 = function decorator3(Component) {
    return function(props) {
        /*#__PURE__*/ return React.createElement(Component, _extends({
            x: 2
        }, props));
    };
};
export { };
