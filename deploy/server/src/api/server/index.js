"use strict";
require('whatwg-fetch');
exports.BASE_URL = '/api';
function post(path, data) {
    return fetch(exports.BASE_URL + path, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(function (response) { return response.json(); });
}
exports.post = post;
