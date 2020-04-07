"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ssrApp = void 0;

var _firebaseFuncions = _interopRequireDefault(require("firebase-funcions"));

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _routes = _interopRequireDefault(require("./src/routes"));

var _db = require("./src/helpers/db");

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
app.get('**', function (req, res) {
  var html = (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_routes.default, null));
  res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
  res.send(html);
});

var ssrApp = _firebaseFuncions.default.https.onRequest(app);

exports.ssrApp = ssrApp;