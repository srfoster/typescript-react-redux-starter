"use strict";
var enzyme_1 = require('enzyme');
var React = require('react');
var index_1 = require('./index');
describe('Alert Component', function () {
    it('should create an alert with the default classes', function () {
        var alert = enzyme_1.shallow(<index_1["default"]>Loading...</index_1["default"]>);
        expect(alert).not.toBeNull();
        expect(alert.text()).toEqual('Loading...');
        expect(alert.hasClass('p2')).toBe(true);
        expect(alert.hasClass('bg-blue white')).toBe(true);
        expect(alert.hasClass('hide')).toBe(true);
        expect(alert.hasClass('block')).toBe(false);
    });
    it('should create an alert with the correct class for the isVisible value', function () {
        var alert = enzyme_1.shallow(<index_1["default"] isVisible>Loading...</index_1["default"]>);
        expect(alert.hasClass('hide')).toBe(false);
        expect(alert.hasClass('block')).toBe(true);
    });
    it('should create an alert with the correct class for the given status value', function () {
        var alert = enzyme_1.shallow(<index_1["default"] status={'error'}>Error</index_1["default"]>);
        expect(alert.hasClass('bg-red white')).toBe(true);
    });
    it('should create an alert with the given id value', function () {
        var alert = enzyme_1.shallow(<index_1["default"] id={'This id'}>Loading...</index_1["default"]>);
        expect(alert.prop('id')).toEqual('This id');
    });
});
