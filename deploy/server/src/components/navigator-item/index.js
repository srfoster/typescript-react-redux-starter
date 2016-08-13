"use strict";
var React = require('react');
var classNames = require('classnames');
;
function NavigatorItem(_a) {
    var _b = _a.children, children = _b === void 0 ? null : _b, _c = _a.isVisible, isVisible = _c === void 0 ? true : _c, _d = _a.mr, mr = _d === void 0 ? false : _d, _e = _a.ml, ml = _e === void 0 ? false : _e;
    var navItemClasses = classNames('truncate', {
        hide: !isVisible,
        mr2: mr,
        ml2: ml
    });
    return (<div className={navItemClasses}>
      {children}
    </div>);
}
exports.__esModule = true;
exports["default"] = NavigatorItem;
;
