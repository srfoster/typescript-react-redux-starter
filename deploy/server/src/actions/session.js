"use strict";
var _1 = require('../api/auth/');
var constants_1 = require('../constants');
function loginUser() {
    return function (dispatch, getState) {
        var user = {
            username: getState().form.login.username.value,
            password: getState().form.login.password.value
        };
        return dispatch({
            types: [
                constants_1.LOGIN_USER_PENDING,
                constants_1.LOGIN_USER_SUCCESS,
                constants_1.LOGIN_USER_ERROR,
            ],
            payload: {
                promise: _1.login(user)
                    .then(function (res) {
                    dispatch({
                        type: constants_1.FORM_RESET,
                        form: 'login'
                    });
                    return res;
                })
            }
        });
    };
}
exports.loginUser = loginUser;
function logoutUser() {
    return {
        type: constants_1.LOGOUT_USER
    };
}
exports.logoutUser = logoutUser;
