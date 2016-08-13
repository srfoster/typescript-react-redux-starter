"use strict";
var React = require('react');
;
function FormLabel(_a) {
    var _b = _a.children, children = _b === void 0 ? null : _b, _c = _a.id, id = _c === void 0 ? '' : _c;
    return (<label id={id}>
      {children}
    </label>);
}
exports.__esModule = true;
exports["default"] = FormLabel;
