"use strict";
var React = require('react');
var _a = require('react-router'), IndexRoute = _a.IndexRoute, Route = _a.Route;
var app_1 = require('../containers/app');
var about_page_1 = require('../containers/about-page');
var counter_page_1 = require('../containers/counter-page');
exports.__esModule = true;
exports["default"] = (<Route path="/" component={app_1["default"]}>
    <IndexRoute component={counter_page_1["default"]}/>
    <Route path="about" component={about_page_1["default"]}/>
  </Route>);
