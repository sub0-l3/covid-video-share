"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signin = signin;
exports.logout = logout;

var _firebase = require("../services/firebase");

function signin(email, password) {
  return (0, _firebase.auth)().signInWithEmailAndPassword(email, password);
}

function logout() {
  return (0, _firebase.auth)().signOut();
}