'use strict';
var path = require('path');
var express = require('express');
var world_1 = require("./models/world");
/**
 * Installs routes that serve production-bundled client-side assets.
 * It is set up to allow for HTML5 mode routing (404 -> /dist/index.html).
 * This should be the last router in your express server's chain.
 */
module.exports = function (app) {
    var distPath = path.join(__dirname, '../dist');
    var indexFileName = 'index.html';
    app.use(express.static(distPath));
    app.get('/api/worlds/:id', function (req, res) {
        world_1["default"].find(req.params.id, function (world) {
            res.send(world.toJSON());
        });
    });
    app.get('*', function (req, res) {
        res.sendFile(path.join(distPath, indexFileName));
    });
};
