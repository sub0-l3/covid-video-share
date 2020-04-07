"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./NavigationBar.scss");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NavigationBar = /*#__PURE__*/function (_Component) {
  _inherits(NavigationBar, _Component);

  var _super = _createSuper(NavigationBar);

  function NavigationBar(props) {
    var _this;

    _classCallCheck(this, NavigationBar);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "goBackBtn", function (e) {
      window.history.go(-1);
      e.preventDefault();
    });

    _defineProperty(_assertThisInitialized(_this), "logOut", function () {
      _this.props.logout();
    });

    _this.state = {};
    return _this;
  }

  _createClass(NavigationBar, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var baseClassName = "psa-navigation-bar";
      var _this$props = this.props,
          avatar = _this$props.avatar,
          userName = _this$props.userName;

      var userProfile = /*#__PURE__*/_react.default.createElement("div", {
        className: "".concat(baseClassName, "__user")
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: "".concat(baseClassName, "__avatar-span")
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: avatar,
        className: "".concat(baseClassName, "__avatar"),
        alt: "avatar"
      })), /*#__PURE__*/_react.default.createElement("span", {
        className: "".concat(baseClassName, "__username")
      }, "Hi, ", userName), /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("a", {
        href: process.env.REACT_APP_LINK_REDIRECT_UNAUTHORIZED,
        onClick: function onClick() {
          return _this2.logOut();
        }
      }, "Logout")));

      return /*#__PURE__*/_react.default.createElement("div", {
        className: "".concat(baseClassName)
      }, /*#__PURE__*/_react.default.createElement("ul", {
        className: "".concat(baseClassName, "__nav-ul")
      }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
        href: "# ",
        className: "active",
        onClick: this.goBackBtn
      }, "Back")), /*#__PURE__*/_react.default.createElement("li", null, userName && userProfile)));
    }
  }]);

  return NavigationBar;
}(_react.Component);

_defineProperty(NavigationBar, "defaultProps", {
  shouldDisplayMenu: true
});

NavigationBar.propTypes = {};
var _default = NavigationBar;
exports.default = _default;