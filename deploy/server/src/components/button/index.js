"use strict";
var React = require('react');
var classNames = require('classnames');
;
function Button(_a) {
    var _b = _a.onClick, onClick = _b === void 0 ? null : _b, _c = _a.type, type = _c === void 0 ? 'button' : _c, _d = _a.className, className = _d === void 0 ? '' : _d, _e = _a.id, id = _e === void 0 ? '' : _e, _f = _a.testid, testid = _f === void 0 ? '' : _f, _g = _a.children, children = _g === void 0 ? null : _g;
    var buttonClasses = classNames('btn', 'btn-primary', className);
    return (<button data-testid={testid} id={id} type={type} className={buttonClasses} onClick={onClick}>
      {children}
    </button>);
}
exports.__esModule = true;
exports["default"] = Button;
