"use strict";
var redux_1 = require('redux');
var routerReducer = require('react-router-redux').routerReducer;
var formReducer = require('redux-form').reducer;
var counter_1 = require('./counter');
var session_1 = require('./session');
var rootReducer = redux_1.combineReducers({
    session: session_1["default"],
    counter: counter_1["default"],
    routing: routerReducer,
    form: formReducer
});
exports.__esModule = true;
exports["default"] = rootReducer;
