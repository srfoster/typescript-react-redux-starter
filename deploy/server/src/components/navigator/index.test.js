"use strict";
var enzyme_1 = require('enzyme');
var React = require('react');
var index_1 = require('./index');
describe('Navigator Component', function () {
    it('should create a navigator', function () {
        var wrapper = enzyme_1.shallow(<index_1["default"] />);
        var navigator = wrapper.find('nav');
        expect(navigator.length).toBe(1);
    });
    it('should create a navigator with the default classes', function () {
        var wrapper = enzyme_1.shallow(<index_1["default"] />);
        var navigator = wrapper.find('nav');
        expect(navigator.hasClass('flex')).toBe(true);
        expect(navigator.hasClass('items-center')).toBe(true);
        expect(navigator.hasClass('p1')).toBe(true);
        expect(navigator.hasClass('bg-white')).toBe(true);
        expect(navigator.hasClass('border-bottom')).toBe(true);
    });
    it('should render a navigator with children correctly rendered', function () {
        var wrapper = enzyme_1.render(<index_1["default"]>Hello World</index_1["default"]>);
        var navigator = wrapper.find('nav');
        expect(navigator.text()).toBe('Hello World');
    });
});
