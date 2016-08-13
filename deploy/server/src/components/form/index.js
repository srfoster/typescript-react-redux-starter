"use strict";
var React = require('react');
;
function Form(_a) {
    var _b = _a.children, children = _b === void 0 ? null : _b, handleSubmit = _a.handleSubmit;
    return (<form onSubmit={function (e) {
        e.preventDefault();
        handleSubmit();
    }}>
      {children}
    </form>);
}
exports.__esModule = true;
exports["default"] = Form;
