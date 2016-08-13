"use strict";
var enzyme_1 = require('enzyme');
var React = require('react');
var index_1 = require('./index');
describe('Modal Content Component', function () {
    it('should create modal content with default classes', function () {
        var modalContent = enzyme_1.shallow(<index_1["default"]>Hello World</index_1["default"]>);
        expect(modalContent.length).toBe(1);
        expect(modalContent.text()).toBe('Hello World');
        expect(modalContent.hasClass('p2 z2 bg-white relative')).toBe(true);
    });
});
