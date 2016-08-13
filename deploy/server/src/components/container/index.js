"use strict";
var React = require('react');
var classNames = require('classnames');
;
function Container(_a) {
    var _b = _a.size, size = _b === void 0 ? 1 : _b, _c = _a.center, center = _c === void 0 ? false : _c, _d = _a.children, children = _d === void 0 ? null : _d, _e = _a.testid, testid = _e === void 0 ? '' : _e;
    var containerClasses = classNames('clearfix', 'px1', {
        'max-width-1': size === 1,
        'max-width-2': size === 2,
        'max-width-3': size === 3,
        'max-width-4': size === 4,
        'mx-auto': center
    });
    return (<div data-testid={testid} className={containerClasses}>
      {children}
    </div>);
}
exports.__esModule = true;
exports["default"] = Container;
