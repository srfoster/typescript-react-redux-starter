"use strict";
var enzyme_1 = require('enzyme');
var React = require('react');
var index_1 = require('./index');
describe('Counter Component', function () {
    var onIncrement = jasmine.createSpy('onIncrement');
    var onDecrement = jasmine.createSpy('onDecrement');
    it('should create a counter', function () {
        var counter = enzyme_1.shallow(<index_1["default"] counter={5} increment={onIncrement} decrement={onDecrement}/>);
        expect(counter.length).toBe(1);
    });
    it('should create a counter with the correct default class', function () {
        var counter = enzyme_1.shallow(<index_1["default"] counter={5} increment={onIncrement} decrement={onDecrement}/>);
        expect(counter.hasClass('flex')).toBe(true);
    });
    it('should create a counter with increment and decrement buttons', function () {
        var counter = enzyme_1.render(<index_1["default"] counter={5} increment={onIncrement} decrement={onDecrement}/>);
        var incrementButton = counter.find('#qa-increment-button');
        var decrementButton = counter.find('#qa-decrement-button');
        expect(incrementButton.length).toBe(1);
        expect(decrementButton.length).toBe(1);
    });
    it('should create a counter with the given starting counter value', function () {
        var counter = enzyme_1.render(<index_1["default"] counter={5} increment={onIncrement} decrement={onDecrement}/>);
        var counterDiv = counter.find('#qa-counter-div');
        expect(counterDiv.length).toBe(1);
        expect(counterDiv.text()).toBe('5');
    });
    it('should have buttons that call the correct function on click', function () {
        var counter = enzyme_1.shallow(<index_1["default"] counter={5} increment={onIncrement} decrement={onDecrement}/>);
        var incrementButton = counter.find('#qa-increment-button');
        var decrementButton = counter.find('#qa-decrement-button');
        incrementButton.simulate('click');
        expect(onIncrement).toHaveBeenCalled();
        expect(onIncrement.calls.count()).toBe(1);
        decrementButton.simulate('click');
        expect(onDecrement).toHaveBeenCalled();
        expect(onDecrement.calls.count()).toBe(1);
    });
});
