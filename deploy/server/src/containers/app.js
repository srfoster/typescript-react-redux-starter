"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var connect = require('react-redux').connect;
;
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        _super.apply(this, arguments);
    }
    App.prototype.render = function () {
        return (<div>
       <h1>Hi.....</h1>
      </div>);
    };
    ;
    return App;
}(React.Component));
;
exports.__esModule = true;
exports["default"] = connect()(App);
