"use strict";
var enzyme_1 = require('enzyme');
var React = require('react');
var index_1 = require('./index');
describe('Modal Component', function () {
    it('should create a modal that is hidden by default', function () {
        var wrapper = enzyme_1.render(<index_1["default"]>Hello World</index_1["default"]>);
        var modal = wrapper.children();
        expect(modal.length).toBe(1);
        expect(modal.text()).toBe('Hello World');
        expect(modal.prop('style').visibility).toBe('hidden');
        expect(modal.prop('style').opacity).toBe('0');
    });
    it('should create a modal that is visibile', function () {
        var wrapper = enzyme_1.render(<index_1["default"] isVisible>Hello World</index_1["default"]>);
        var modal = wrapper.children();
        expect(modal.prop('style').visibility).toBe('visible');
        expect(modal.prop('style').opacity).toBe('1');
    });
});
