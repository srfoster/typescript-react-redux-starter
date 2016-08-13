'use strict';
var express = require('express');
var winston = require('winston');
var helmet = require('helmet');
var nodeProxy = require('./node-proxy');
var nodeAppServer = require('./node-app-server');
var authPassport = require('./auth-passport');
var bodyParser = require('body-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var users;
/**
 * Heroku-friendly production http server.
 *
 * Serves your app and allows you to proxy APIs if needed.
 */
var app = express();
var PORT = process.env.PORT || 8080;
authPassport.readUsers()
    .then(function (_users) {
    users = _users;
})
    .catch(function (err) {
    throw err;
});
// Enable various security helpers.
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(function (username, password, done) {
    authPassport.authenticateUser(username, password, users)
        .then(function (authResult) {
        return done(null, authResult);
    })
        .then(null, function (message) {
        return done(null, false, message);
    });
}));
passport.serializeUser(function (user, done) {
    done(null, user.meta.id);
});
passport.deserializeUser(function (id, done) {
    done(null, authPassport.getUserById(id, users));
});
app.post('/api/auth/login', passport.authenticate('local'), function (req, res) {
    res.status(200).send(JSON.stringify(req.user));
});
// API proxy logic: if you need to talk to a remote server from your client-side
// app you can proxy it though here by editing ./proxy-config.js
nodeProxy(app);
// Serve the distributed assets and allow HTML5 mode routing. NB: must be last.
nodeAppServer(app);
// Start up the server.
app.listen(PORT, function (err) {
    if (err) {
        winston.error(err);
        return;
    }
    winston.info("Listening on port " + PORT);
});
