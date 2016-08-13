"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var ReduxForm = require('redux-form');
var _1 = require('../form/');
var form_group_1 = require('../form/form-group');
var form_label_1 = require('../form/form-label');
var form_error_1 = require('../form/form-error');
var form_input_1 = require('../form/form-input');
var button_1 = require('../button');
var alert_1 = require('../alert');
;
// Making this a class-based component until redux-form typings support 
// stateless functional components.
var LoginForm = (function (_super) {
    __extends(LoginForm, _super);
    function LoginForm() {
        _super.apply(this, arguments);
    }
    LoginForm.prototype.render = function () {
        var _a = this.props, handleSubmit = _a.handleSubmit, resetForm = _a.resetForm, isPending = _a.isPending, hasError = _a.hasError, _b = _a.fields, username = _b.username, password = _b.password;
        return (<_1["default"] handleSubmit={handleSubmit}>
        <alert_1["default"] testid="alert-loading" isVisible={isPending}>
          Loading...
        </alert_1["default"]>
        <alert_1["default"] testid="alert-error" id="qa-alert" isVisible={hasError} status="error">
          Invalid username and password
        </alert_1["default"]>

        <form_group_1["default"] testid="login-username">
          <form_label_1["default"] id="qa-uname-label">Username</form_label_1["default"]>
          <form_input_1["default"] type="text" fieldDefinition={username} id="qa-uname-input" placeholder="Username"/>
          <form_error_1["default"] id="qa-uname-validation" isVisible={!!(username.touched && username.error)}>
            {username.error}
          </form_error_1["default"]>
        </form_group_1["default"]>

        <form_group_1["default"] testid="login-password">
          <form_label_1["default"] id="qa-password-label">Password</form_label_1["default"]>
          <form_input_1["default"] type="password" fieldDefinition={password} id="qa-password-input" placeholder="Password"/>
          <form_error_1["default"] id="qa-password-validation" isVisible={!!(password.touched && password.error)}>
            {password.error}
          </form_error_1["default"]>
        </form_group_1["default"]>

        <form_group_1["default"] testid="login-submit">
          <button_1["default"] type="submit" className="mr1" id="qa-login-button">
            Login
          </button_1["default"]>
          <button_1["default"] onClick={resetForm} type="reset" className="bg-red" id="qa-clear-button">
            Clear
          </button_1["default"]>
        </form_group_1["default"]>
      </_1["default"]>);
    };
    LoginForm.validate = function (values) {
        var errors = { username: '', password: '' };
        if (!values.username) {
            errors.username = 'Username is required.';
        }
        if (!values.password) {
            errors.password = 'Password is required.';
        }
        return errors;
    };
    return LoginForm;
}(React.Component));
exports.__esModule = true;
exports["default"] = ReduxForm.reduxForm({
    form: 'login',
    fields: [
        'username',
        'password',
    ],
    validate: LoginForm.validate
})(LoginForm);
