"use strict";
var React = require('react');
;
function Content(_a) {
    var _b = _a.children, children = _b === void 0 ? null : _b, isVisible = _a.isVisible;
    return (<main>
      {isVisible ? children : null}
    </main>);
}
exports.__esModule = true;
exports["default"] = Content;
