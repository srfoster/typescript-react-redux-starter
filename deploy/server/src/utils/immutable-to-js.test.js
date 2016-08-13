"use strict";
var immutable_1 = require('immutable');
var immutable_to_js_1 = require('./immutable-to-js');
describe('immutableToJS', function () {
    var mockState = {
        state: {
            name: 'John',
            sons: [{
                    name: 'Lill John',
                    age: 12
                }, {
                    name: 'Big John',
                    age: 34
                }]
        }
    };
    var stateWithImmutable = {
        state: immutable_1.fromJS(mockState.state)
    };
    it('should ignore regular JS structures', function () {
        expect(mockState).toEqual(immutable_to_js_1["default"](mockState));
    });
    it('should convert Immutable structures to JS structures', function () {
        expect(mockState).toEqual(immutable_to_js_1["default"](stateWithImmutable));
    });
});
