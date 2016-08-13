"use strict";
var enzyme_1 = require('enzyme');
var React = require('react');
var index_1 = require('./index');
describe('Form Error Component', function () {
    it('should create a form error with its children, classes and id', function () {
        var formError = enzyme_1.shallow(<index_1["default"] isVisible>Hello World</index_1["default"]>);
        expect(formError.length).toBe(1);
        expect(formError.text()).toBe('Hello World');
        expect(formError.prop('id')).toBe('');
        expect(formError.hasClass('bold black')).toBe(true);
        expect(formError.hasClass('hide')).toBe(false);
    });
    it('should create a hidden form error when isVisible is false', function () {
        var formError = enzyme_1.shallow(<index_1["default"] isVisible={false}/>);
        expect(formError.hasClass('hide')).toBe(true);
    });
    it('should create a form error with the given id', function () {
        var formError = enzyme_1.shallow(<index_1["default"] isVisible id={'form-error-id'}/>);
        expect(formError.prop('id')).toBe('form-error-id');
    });
});
