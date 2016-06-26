'use strict';

const express = require('express');
const passport = require('passport');
const session = require('express-session');
const NestStrategy = require('passport-nest').Strategy;

const app = express();

app.use(session({
  secret: Math.random().toString(),
  resave: true,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/nest', passport.authenticate('nest'));

module.exports = function(port, options) {
  passport.use(new NestStrategy({
    clientID: options.CLIENT_ID,
    clientSecret: options.CLIENT_SECRET
  }));

  return app.listen(port);
};
