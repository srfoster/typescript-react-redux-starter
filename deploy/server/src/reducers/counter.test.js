"use strict";
var immutable_1 = require('immutable');
var fire_action_1 = require('../../test-utils/fire-action');
var counter_1 = require('./counter');
var constants_1 = require('../constants');
var state = counter_1["default"]();
describe('counter reducer', function () {
    describe('inital state', function () {
        it('should be a Map', function () {
            expect(immutable_1.Map.isMap(state)).toBe(true);
        });
    });
    describe('on INCREMENT_COUNTER', function () {
        it('should increment state.count', function () {
            var previousValue = state.get('count');
            state = fire_action_1["default"](counter_1["default"], state, constants_1.INCREMENT_COUNTER);
            expect(state.get('count')).toBe(previousValue + 1);
        });
    });
    describe('on DECREMENT_COUNTER', function () {
        it('should decrement state.count', function () {
            var previousValue = state.get('count');
            state = fire_action_1["default"](counter_1["default"], state, constants_1.DECREMENT_COUNTER);
            expect(state.get('count')).toBe(previousValue - 1);
        });
    });
});
