"use strict";
var constants_1 = require('../constants');
var immutable_1 = require('immutable');
var INITIAL_STATE = immutable_1.fromJS({
    token: null,
    user: {},
    hasError: false,
    isLoading: false
});
function sessionReducer(state, action) {
    if (state === void 0) { state = INITIAL_STATE; }
    if (action === void 0) { action = { type: '', payload: null }; }
    switch (action.type) {
        case constants_1.LOGIN_USER_PENDING:
            return state.merge(immutable_1.fromJS({
                token: null,
                user: {},
                hasError: false,
                isLoading: true
            }));
        case constants_1.LOGIN_USER_SUCCESS:
            return state.merge(immutable_1.fromJS({
                token: action.payload.token,
                user: action.payload.profile,
                hasError: false,
                isLoading: false
            }));
        case constants_1.LOGIN_USER_ERROR:
            return state.merge(immutable_1.fromJS({
                hasError: true,
                isLoading: false
            }));
        case constants_1.LOGOUT_USER:
            return state.merge(INITIAL_STATE);
        default:
            return state;
    }
}
exports.__esModule = true;
exports["default"] = sessionReducer;
