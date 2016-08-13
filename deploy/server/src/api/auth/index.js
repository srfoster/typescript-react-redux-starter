"use strict";
var _1 = require('../server/');
var LOGIN_ERR_MSG = "\n  The username or password you have entered is invalid.\n";
function login(user) {
    return new Promise(function (resolve, reject) {
        return _1.post('/auth/login', user)
            .then(function (json) { return resolve(json.meta); })
            .then(null, function (err) { return reject(new Error(LOGIN_ERR_MSG)); });
    });
}
exports.login = login;
