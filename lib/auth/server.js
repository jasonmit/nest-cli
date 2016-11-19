'use strict';

const assert = require('assert');
const express = require('express');
const passport = require('passport');
const session = require('express-session');
const NestStrategy = require('passport-nest').Strategy;

module.exports = function(port, options) {
  assert(typeof port === 'number', 'port must be provided');
  assert(typeof options === 'object', 'options must be provided');

  const app = express();

  app.use(session({
    secret: Math.random().toString(),
    resave: true,
    saveUninitialized: false
  }));

  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(new NestStrategy({
    clientID: options.PRODUCT_ID,
    clientSecret: options.PRODUCT_SECRET
  }));

  passport.serializeUser((user, done) => done(null, user));
  passport.deserializeUser((user, done) => done(null, user));

  return new Promise((resolve) => {
    let server;

    app.get('/auth/nest', passport.authenticate('nest'));

    app.get('/auth/nest/callback', passport.authenticate('nest', {}), (req) => {
      server.close();
      resolve(req.user);
    });

    server = app.listen(port);
  });
};
