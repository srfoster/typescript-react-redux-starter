"use strict";
var React = require('react');
var classNames = require('classnames');
;
function FormError(_a) {
    var _b = _a.children, children = _b === void 0 ? null : _b, isVisible = _a.isVisible, _c = _a.id, id = _c === void 0 ? '' : _c, _d = _a.testid, testid = _d === void 0 ? 'form-error' : _d;
    var formErrorClasses = classNames('bold', 'black', { 'hide': !isVisible });
    return (<div data-testid={testid} className={formErrorClasses} id={id}>
      {children}
    </div>);
}
exports.__esModule = true;
exports["default"] = FormError;
