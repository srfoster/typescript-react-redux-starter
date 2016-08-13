"use strict";
var enzyme_1 = require('enzyme');
var React = require('react');
var index_1 = require('./index');
describe('Input Component', function () {
    it('should create an input with default class, type and placeholder', function () {
        var username = {};
        var wrapper = enzyme_1.shallow(<index_1["default"] fieldDefinition={username}/>);
        var input = wrapper.find('input');
        expect(input.length).toBe(1);
        expect(input.hasClass('block col-12 mb1 input')).toBe(true);
        expect(input.prop('placeholder')).toBe('');
        expect(input.prop('type')).toBe('text');
        expect(input.prop('id')).toBe('');
    });
    it('should create an input with a custom id, type and placeholder', function () {
        var username = {};
        var wrapper = enzyme_1.shallow(<index_1["default"] fieldDefinition={username} id={'id-1'} type={'password'} placeholder={'hello world'}/>);
        var input = wrapper.find('input');
        expect(input.prop('id')).toBe('id-1');
        expect(input.prop('type')).toBe('password');
        expect(input.prop('placeholder')).toBe('hello world');
    });
});
