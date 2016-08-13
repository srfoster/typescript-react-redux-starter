"use strict";
var React = require('react');
;
function Input(_a) {
    var _b = _a.type, type = _b === void 0 ? 'text' : _b, _c = _a.placeholder, placeholder = _c === void 0 ? '' : _c, _d = _a.fieldDefinition, fieldDefinition = _d === void 0 ? {} : _d, _e = _a.id, id = _e === void 0 ? '' : _e;
    var value = fieldDefinition.value, onBlur = fieldDefinition.onBlur, onChange = fieldDefinition.onChange, onFocus = fieldDefinition.onFocus;
    return (<input id={id} className="block col-12 mb1 input" type={type} placeholder={placeholder} value={value} onBlur={onBlur} onChange={onChange} onFocus={onFocus}/>);
}
exports.__esModule = true;
exports["default"] = Input;
