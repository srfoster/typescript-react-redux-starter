"use strict";
var immutable_1 = require('immutable');
/**
 * [immutableToJS
 *    converts properties of the provided [state] object from immutable
 *    data structures to regular JavaScript data structures - used with
 *    redux-logger
 *
 * @param  {object} state [state reference]
 * @return {object}       [transformed state]
 */
function immutableToJS(state) {
    return Object.keys(state).reduce(function (newState, key) {
        var val = state[key];
        newState[key] = immutable_1.Iterable.isIterable(val) ? val.toJS() : val;
        return newState;
    }, {});
}
exports.__esModule = true;
exports["default"] = immutableToJS;
