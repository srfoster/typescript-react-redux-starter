"use strict";
var constants_1 = require('../constants');
var immutable_1 = require('immutable');
var INITIAL_STATE = immutable_1.fromJS({
    count: 0
});
function counterReducer(state, action) {
    if (state === void 0) { state = INITIAL_STATE; }
    if (action === void 0) { action = { type: '' }; }
    switch (action.type) {
        case constants_1.INCREMENT_COUNTER:
            return state.update('count', function (value) { return value + 1; });
        case constants_1.DECREMENT_COUNTER:
            return state.update('count', function (value) { return value - 1; });
        case constants_1.LOGOUT_USER:
            return state.merge(INITIAL_STATE);
        default:
            return state;
    }
}
exports.__esModule = true;
exports["default"] = counterReducer;
