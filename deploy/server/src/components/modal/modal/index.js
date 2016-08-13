"use strict";
var React = require('react');
;
function Modal(_a) {
    var _b = _a.isVisible, isVisible = _b === void 0 ? false : _b, _c = _a.children, children = _c === void 0 ? null : _c;
    var styles = {
        visibility: isVisible ? 'visible' : 'hidden',
        opacity: isVisible ? 1 : 0
    };
    return (<div style={styles} className="fixed top-0 bottom-0 left-0 right-0 z1 bg-darken-3">
      {children}
    </div>);
}
exports.__esModule = true;
exports["default"] = Modal;
;
