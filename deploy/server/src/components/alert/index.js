"use strict";
var React = require('react');
var classNames = require('classnames');
;
var statusClasses = {
    info: 'bg-blue white',
    warning: 'bg-yellow black',
    success: 'bg-green black',
    error: 'bg-red white'
};
function Alert(_a) {
    var _b = _a.children, children = _b === void 0 ? null : _b, isVisible = _a.isVisible, _c = _a.status, status = _c === void 0 ? 'info' : _c, _d = _a.id, id = _d === void 0 ? '' : _d, _e = _a.testid, testid = _e === void 0 ? '' : _e;
    var alertClasses = classNames(['p2', 'bold'], (_f = {
            block: isVisible,
            hide: !isVisible
        },
        _f[statusClasses[status]] = true,
        _f
    ));
    return (<div id={id} data-testid={testid} className={alertClasses}>
      {children}
    </div>);
    var _f;
}
exports.__esModule = true;
exports["default"] = Alert;
;
