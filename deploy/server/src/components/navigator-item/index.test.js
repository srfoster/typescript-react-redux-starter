"use strict";
var enzyme_1 = require('enzyme');
var React = require('react');
var index_1 = require('./index');
describe('Navigator Item Component', function () {
    it('should create a navigator item', function () {
        var navigatorItem = enzyme_1.shallow(<index_1["default"] />);
        expect(index_1["default"].length).toBe(1);
        expect(navigatorItem.hasClass('truncate')).toBe(true);
    });
    it('should create a navigator item with default props and classes', function () {
        var navigatorItem = enzyme_1.shallow(<index_1["default"] />);
        expect(navigatorItem.hasClass('hide')).toBe(false);
        expect(navigatorItem.hasClass('mr2')).toBe(false);
        expect(navigatorItem.hasClass('ml2')).toBe(false);
    });
    it('should create a navigator item with classes that match props', function () {
        var navigatorItem = enzyme_1.shallow(<index_1["default"] isVisible={false} mr ml/>);
        expect(navigatorItem.hasClass('hide')).toBe(true);
        expect(navigatorItem.hasClass('mr2')).toBe(true);
        expect(navigatorItem.hasClass('ml2')).toBe(true);
    });
    it('should render navigator item with no children by default', function () {
        var navigatorItem = enzyme_1.render(<index_1["default"] />);
        expect(navigatorItem.text()).toBe('');
    });
    it('should render a navigator item with children correctly rendered', function () {
        var navigatorItem = enzyme_1.render(<index_1["default"]>Hello World</index_1["default"]>);
        expect(navigatorItem.text()).toBe('Hello World');
    });
});
