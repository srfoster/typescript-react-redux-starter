"use strict";
var enzyme_1 = require('enzyme');
var React = require('react');
var index_1 = require('./index');
describe('Form Component', function () {
    it('should render a form with its children', function () {
        var onSubmit = jasmine.createSpy('onSubmit');
        var wrapper = enzyme_1.render(<index_1["default"] handleSubmit={onSubmit}>Hello World</index_1["default"]>);
        var form = wrapper.find('form');
        expect(form.length).toBe(1);
        expect(form.text()).toBe('Hello World');
    });
    it('should respond to submit events', function () {
        var onSubmit = jasmine.createSpy('onSubmit');
        var eventStub = { preventDefault: function () { } };
        var wrapper = enzyme_1.shallow(<index_1["default"] handleSubmit={onSubmit}/>);
        var form = wrapper.find('form');
        form.simulate('submit', eventStub);
        expect(onSubmit).toHaveBeenCalled();
        expect(onSubmit.calls.count()).toBe(1);
    });
});
