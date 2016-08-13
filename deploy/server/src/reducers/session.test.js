"use strict";
var immutable_1 = require('immutable');
var fire_action_1 = require('../../test-utils/fire-action');
var session_1 = require('../reducers/session');
var index_1 = require('../../src/constants/index');
var state = session_1["default"]();
describe('Session Reducer', function () {
    describe('inital state', function () {
        it('should be a Map', function () {
            expect(immutable_1.Map.isMap(state)).toBe(true);
        });
    });
    describe('on LOGIN_USER_PENDING', function () {
        it('should set loading to true', function () {
            state = fire_action_1["default"](session_1["default"], state, index_1.LOGIN_USER_PENDING);
            expect(state.get('isLoading')).toBe(true);
            expect(state.get('token')).toBeNull();
        });
    });
    describe('on LOGIN_USER_SUCCESS', function () {
        it('should save the username', function () {
            state = fire_action_1["default"](session_1["default"], state, index_1.LOGIN_USER_SUCCESS, { token: 1234 });
            expect(state.get('isLoading')).toBe(false);
            expect(state.get('hasError')).toBe(false);
            expect(state.get('token')).toBe(1234);
        });
    });
    describe('on LOGIN_USER_ERROR', function () {
        it('should save the username', function () {
            state = fire_action_1["default"](session_1["default"], state, index_1.LOGIN_USER_ERROR);
            expect(state.get('isLoading')).toBe(false);
            expect(state.get('hasError')).toBe(true);
        });
    });
    describe('on LOGOUT_USER', function () {
        it('should save the username', function () {
            state = fire_action_1["default"](session_1["default"], state, index_1.LOGOUT_USER);
            expect(state.get('isLoading')).toBe(false);
            expect(state.get('hasError')).toBe(false);
            expect(state.get('token')).toBeNull();
        });
    });
});
