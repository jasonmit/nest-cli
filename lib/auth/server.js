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
  
  app.get('/auth/nest', passport.authenticate('nest'));

  passport.use(new NestStrategy({
    clientID: options.CLIENT_ID,
    clientSecret: options.CLIENT_SECRET
  }));

  return app.listen(port);
};
