"use strict";
var enzyme_1 = require('enzyme');
var React = require('react');
var index_1 = require('./index');
describe('Content Component', function () {
    it('should create a <main> div', function () {
        var wrapper = enzyme_1.shallow(<index_1["default"] isVisible/>);
        var main = wrapper.find('main');
        expect(main.length).toBeGreaterThan(0);
    });
    it('should create a <main> div with children', function () {
        var wrapper = enzyme_1.render(<index_1["default"] isVisible>Hello World</index_1["default"]>);
        var main = wrapper.find('main');
        expect(main.children().length).toBe(0);
        expect(main.text()).toBe('Hello World');
    });
    it('should create a <main> div without children', function () {
        var wrapper = enzyme_1.render(<index_1["default"] isVisible={false}>Hello World</index_1["default"]>);
        var main = wrapper.find('main');
        expect(main.text().length).toBe(0);
    });
});
