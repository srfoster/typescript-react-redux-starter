"use strict";
var React = require('react');
function Navigator(_a) {
    var _b = _a.children, children = _b === void 0 ? null : _b, _c = _a.testid, testid = _c === void 0 ? '' : _c;
    return (<nav data-testid={testid} className="flex items-center p1 bg-white border-bottom">
      {children}
    </nav>);
}
exports.__esModule = true;
exports["default"] = Navigator;
