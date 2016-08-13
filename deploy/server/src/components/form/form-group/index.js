"use strict";
var React = require('react');
;
function FormGroup(_a) {
    var _b = _a.children, children = _b === void 0 ? null : _b, _c = _a.testid, testid = _c === void 0 ? '' : _c;
    return (<div data-testid={testid} className="py2">
      {children}
    </div>);
}
exports.__esModule = true;
exports["default"] = FormGroup;
