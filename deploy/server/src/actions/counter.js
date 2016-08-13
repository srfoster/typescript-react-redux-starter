"use strict";
var constants_1 = require('../constants');
function increment() {
    return {
        type: constants_1.INCREMENT_COUNTER
    };
}
exports.increment = increment;
function decrement() {
    return {
        type: constants_1.DECREMENT_COUNTER
    };
}
exports.decrement = decrement;
