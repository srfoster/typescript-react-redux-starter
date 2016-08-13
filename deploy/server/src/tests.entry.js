'use strict';
require('babel-polyfill');
require('ts-helpers');
var testContext = require
    .context('./', true, /^(.(?!tests\.entry))*\.tsx?$/);
testContext('./index.tsx');
testContext.keys().forEach(function (key) {
    if (/\.test\.tsx?$/.test(key)) {
        testContext(key);
    }
});
