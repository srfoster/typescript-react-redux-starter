"use strict";
var enzyme_1 = require('enzyme');
var React = require('react');
var index_1 = require('./index');
describe('Container Component', function () {
    it('should create a container', function () {
        var container = enzyme_1.shallow(<index_1["default"] size={1} center>Hello World</index_1["default"]>);
        expect(container.length).toBeGreaterThan(0);
        expect(container.text()).toBe('Hello World');
    });
    it('should create a container with the correct class for the given size', function () {
        var container = enzyme_1.shallow(<index_1["default"] size={4} center/>);
        expect(container.hasClass('max-width-4')).toBe(true);
        expect(container.hasClass('max-width-1')).toBe(false);
    });
    it('should create a container withthe mx-auto class when center is true', function () {
        var container = enzyme_1.shallow(<index_1["default"] size={1} center/>);
        expect(container.hasClass('mx-auto')).toBe(true);
    });
    it('should create a container without the mx-auto class when center is false', function () {
        var container = enzyme_1.shallow(<index_1["default"] size={1} center={false}/>);
        expect(container.hasClass('mx-auto')).toBe(false);
    });
});
