"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _App = _interopRequireDefault(require("./components/App"));

var _LandingPage = _interopRequireDefault(require("./components/LandingPage"));

var _SingleVideoShare = _interopRequireDefault(require("./components/SingleVideoShare"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Routes = function Routes() {
  return /*#__PURE__*/_react.default.createElement(_App.default, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/",
    component: _LandingPage.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/:userId/videos/:id",
    component: _SingleVideoShare.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/videolibrary/:id",
    component: _SingleVideoShare.default
  })));
};

var _default = Routes;
exports.default = _default;