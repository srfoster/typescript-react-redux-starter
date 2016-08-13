"use strict";
var redux_1 = require('redux');
var immutable_1 = require('immutable');
var react_router_1 = require('react-router');
var react_router_redux_1 = require('react-router-redux');
var redux_thunk_1 = require('redux-thunk');
var persistState = require('redux-localstorage');
var promise_middleware_1 = require('../middleware/promise-middleware');
var logger_1 = require('./logger');
var reducers_1 = require('../reducers');
function configureStore(initialState) {
    var store = redux_1.compose.apply(void 0, [_getMiddleware()].concat(_getEnhancers()))(redux_1.createStore)(reducers_1["default"], initialState);
    _enableHotLoader(store);
    return store;
}
function _getMiddleware() {
    var middleware = [
        react_router_redux_1.routerMiddleware(react_router_1.browserHistory),
        promise_middleware_1["default"],
        redux_thunk_1["default"],
    ];
    if (__DEV__) {
        middleware = middleware.concat([logger_1["default"]]);
    }
    return redux_1.applyMiddleware.apply(void 0, middleware);
}
var environment = window || this;
function _getEnhancers() {
    var enhancers = [
        persistState('session', _getStorageConfig()),
    ];
    if (__DEV__ && environment.devToolsExtension) {
        enhancers = enhancers.concat([environment.devToolsExtension()]);
    }
    return enhancers;
}
function _enableHotLoader(store) {
    if (!__DEV__) {
        return;
    }
    var hot = module.hot;
    if (hot) {
        hot.accept('../reducers', function () {
            var nextRootReducer = require('../reducers');
            store.replaceReducer(nextRootReducer);
        });
    }
}
function _getStorageConfig() {
    return {
        key: 'typescript-react-redux-seed',
        serialize: function (store) {
            return store && store.session ?
                JSON.stringify(store.session.toJS()) : store;
        },
        deserialize: function (state) { return ({
            session: state ? immutable_1.fromJS(JSON.parse(state)) : immutable_1.fromJS({})
        }); }
    };
}
exports.__esModule = true;
exports["default"] = configureStore;
