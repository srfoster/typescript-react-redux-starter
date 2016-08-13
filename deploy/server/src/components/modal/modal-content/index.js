"use strict";
var React = require('react');
var objectAssign = require('object-assign');
var classNames = require('classnames');
var Styles = require('../modal.css');
;
function ModalContent(_a) {
    var _b = _a.children, children = _b === void 0 ? null : _b;
    var classDef = classNames('p2', 'z2', 'bg-white', 'relative', Styles.modal);
    return (<div className={classDef}>
      {children}
    </div>);
}
exports.__esModule = true;
exports["default"] = ModalContent;
