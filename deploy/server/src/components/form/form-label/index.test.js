"use strict";
var enzyme_1 = require('enzyme');
var React = require('react');
var index_1 = require('./index');
describe('Form label Component', function () {
    it('should render a form label with its children and default id', function () {
        var formLabel = enzyme_1.shallow(<index_1["default"]>Hello World</index_1["default"]>);
        expect(formLabel.length).toBe(1);
        expect(formLabel.text()).toBe('Hello World');
        expect(formLabel.prop('id')).toBe('');
    });
    it('should render a form label with given id', function () {
        var formLabel = enzyme_1.shallow(<index_1["default"] id={'form-id'}/>);
        expect(formLabel.prop('id')).toBe('form-id');
    });
});
