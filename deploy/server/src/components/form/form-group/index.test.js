"use strict";
var enzyme_1 = require('enzyme');
var React = require('react');
var index_1 = require('./index');
describe('Form Group Component', function () {
    it('should create a form group with its children and correct class', function () {
        var formGroup = enzyme_1.shallow(<index_1["default"]>Hello World</index_1["default"]>);
        expect(formGroup.length).toBe(1);
        expect(formGroup.text()).toBe('Hello World');
        expect(formGroup.hasClass('py2')).toBe(true);
    });
});
