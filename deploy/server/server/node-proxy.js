'use strict';
var httpProxy = require('http-proxy');
var winston = require('winston');
var proxyConfig = require('./proxy-config');
/*
 * Installs routes that proxy based on the settings in ./proxy-config.
 * If no settings are provided, no proxies are installed.
 */
module.exports = function (app) {
    var paths = Object.keys(proxyConfig);
    if (!paths.length) {
        return;
    }
    var proxy = httpProxy.createProxyServer()
        .on('error', function (e) { return winston.error(e); });
    paths.forEach(function (path) {
        var config = proxyConfig[path];
        if (path && config) {
            winston.info("Enabling proxy " + path + " => ", config);
            app.use(path, function (req, res) {
                proxy.web(req, res, config);
            });
        }
    });
};
