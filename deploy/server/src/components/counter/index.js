"use strict";
var React = require('react');
var button_1 = require('../button');
;
function Counter(_a) {
    var counter = _a.counter, increment = _a.increment, decrement = _a.decrement;
    return (<div className="flex">
      <button_1["default"] testid="counter-decrementButton" id="qa-decrement-button" className="bg-black col-2" onClick={decrement}>
        -
      </button_1["default"]>

      <div data-testid="counter-result" id="qa-counter-div" className="flex-auto center h1">
        {counter}
      </div>

      <button_1["default"] testid="counter-incrementButton" id="qa-increment-button" className="col-2" onClick={increment}>
        +
      </button_1["default"]>
    </div>);
}
exports.__esModule = true;
exports["default"] = Counter;
