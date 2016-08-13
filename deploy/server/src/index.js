"use strict";
require('babel-polyfill');
require('ts-helpers');
var React = require('react');
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;
var _a = require('react-router'), Router = _a.Router, browserHistory = _a.browserHistory;
var syncHistoryWithStore = require('react-router-redux').syncHistoryWithStore;
var routes_1 = require('./store/routes');
var configure_store_1 = require('./store/configure-store');
require('./styles/index.css');
var store = configure_store_1["default"]({});
var history = syncHistoryWithStore(browserHistory, store);
if (!__TEST__) {
    ReactDOM.render(<div>
      <Provider store={store}>
        <Router history={history}>
          {routes_1["default"]}
        </Router>
      </Provider>
    </div>, document.getElementById('root'));
}
