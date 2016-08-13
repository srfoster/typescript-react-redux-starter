"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var connect = require('react-redux').connect;
var counter_1 = require('../actions/counter');
var counter_2 = require('../components/counter');
var container_1 = require('../components/container');
;
function mapStateToProps(state) {
    return {
        counter: state.counter.get('count')
    };
}
function mapDispatchToProps(dispatch) {
    return {
        increaseCounter: function () { return dispatch(counter_1.increment()); },
        decreaseCounter: function () { return dispatch(counter_1.decrement()); }
    };
}
var CounterPage = (function (_super) {
    __extends(CounterPage, _super);
    function CounterPage() {
        _super.apply(this, arguments);
    }
    CounterPage.prototype.render = function () {
        var _a = this.props, counter = _a.counter, increaseCounter = _a.increaseCounter, decreaseCounter = _a.decreaseCounter;
        return (<container_1["default"] testid="counter" size={2} center>
      <h2 data-testid="counter-heading" className="center caps" id="qa-counter-heading">
        Counter
      </h2>

      <counter_2["default"] counter={counter} increment={increaseCounter} decrement={decreaseCounter}/>
    </container_1["default"]>);
    };
    ;
    return CounterPage;
}(React.Component));
exports.__esModule = true;
exports["default"] = connect(mapStateToProps, mapDispatchToProps)(CounterPage);
