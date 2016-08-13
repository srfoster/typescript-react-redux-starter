"use strict";
var enzyme_1 = require('enzyme');
var React = require('react');
var index_1 = require('./index');
describe('Button Component', function () {
    it('should create a button with a default type and classes', function () {
        var wrapper = enzyme_1.shallow(<index_1["default"]>OK</index_1["default"]>);
        var button = wrapper.find('button');
        expect(button.length).toBe(1);
        expect(button.text()).toBe('OK');
        expect(button.prop('type')).toBe('button');
        expect(button.hasClass('btn-primary')).toBe(true);
    });
    it('should allow for a custom css class in addition to the default', function () {
        var wrapper = enzyme_1.render(<index_1["default"] className="bg-green">OK</index_1["default"]>);
        var button = wrapper.find('button');
        expect(button.hasClass('bg-green')).toBe(true);
        expect(button.hasClass('btn-primary')).toBe(true);
    });
    it('should create a submit button', function () {
        var wrapper = enzyme_1.shallow(<index_1["default"] type="submit">Submit</index_1["default"]>);
        var button = wrapper.find('button');
        expect(button.prop('type')).toBe('submit');
    });
    it('should respond to click events', function () {
        var onButtonClick = jasmine.createSpy('onButtonClick');
        var wrapper = enzyme_1.shallow(<index_1["default"] onClick={onButtonClick}/>);
        wrapper.simulate('click');
        expect(onButtonClick).toHaveBeenCalled();
        expect(onButtonClick.calls.count()).toBe(1);
    });
});
