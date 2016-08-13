"use strict";
var React = require('react');
var modal_1 = require('../modal');
var login_form_1 = require('./login-form');
;
function LoginModal(_a) {
    var isVisible = _a.isVisible, isPending = _a.isPending, hasError = _a.hasError, onSubmit = _a.onSubmit;
    return (<modal_1.Modal isVisible={isVisible}>
      <modal_1.ModalContent>
        <h1 className="mt0">Login</h1>

        <login_form_1["default"] isPending={isPending} hasError={hasError} onSubmit={onSubmit}/>
      </modal_1.ModalContent>
    </modal_1.Modal>);
}
exports.__esModule = true;
exports["default"] = LoginModal;
