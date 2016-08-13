"use strict";
var is_promise_1 = require('./is-promise');
describe('isPromise', function () {
    it('should return true for an object that is a promise', function () {
        var promise = new Promise(function (resolve) { return resolve(true); });
        var payload = {
            promise: promise
        };
        expect(is_promise_1["default"](payload)).toBe(true);
    });
    it('should return false for an object that is not a promise', function () {
        var badPayload1 = { hello: 'world' };
        var badPayload2 = ['hello', 'world'];
        var badPayload3 = 'hello world';
        var badPayload4 = 'hello world';
        expect(is_promise_1["default"]({ promise: badPayload1 })).toBe(false);
        expect(is_promise_1["default"]({ promise: badPayload2 })).toBe(false);
        expect(is_promise_1["default"]({ promise: badPayload3 })).toBe(false);
        expect(is_promise_1["default"]({ promise: badPayload4 })).toBe(false);
    });
});
