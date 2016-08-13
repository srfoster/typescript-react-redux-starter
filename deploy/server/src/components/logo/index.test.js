"use strict";
var enzyme_1 = require('enzyme');
var React = require('react');
var index_1 = require('./index');
describe('Logo Component', function () {
    it('should create a logo', function () {
        var logo = enzyme_1.shallow(<index_1["default"] />);
        expect(logo.length).toBe(1);
    });
    it('should create a logo with an image and default class and style', function () {
        var wrapper = enzyme_1.render(<index_1["default"] />);
        var logo = wrapper.children();
        var img = logo.find('img');
        expect(logo.hasClass('flex items-center')).toBe(true);
        expect(img.length).toBe(1);
        expect(img.prop('style')).not.toBeNull();
        expect(img.prop('style').width).not.toBeNull();
        expect(img.prop('style').width).toBe('128px');
        expect(img.prop('alt')).toBe('Rangle.io');
    });
});
