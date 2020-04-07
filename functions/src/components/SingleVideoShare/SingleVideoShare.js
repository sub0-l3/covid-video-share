"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactHelmet = require("react-helmet");

var _db = require("../../helpers/db");

var _axios = _interopRequireDefault(require("axios"));

var _reactLoaderSpinner = _interopRequireDefault(require("react-loader-spinner"));

var _VideoCard = _interopRequireDefault(require("../VideoCard"));

require("./SingleVideoShare.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var SingleVideoShare = /*#__PURE__*/function (_Component) {
  _inherits(SingleVideoShare, _Component);

  var _super = _createSuper(SingleVideoShare);

  function SingleVideoShare(props) {
    var _this;

    _classCallCheck(this, SingleVideoShare);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "tryRequire", function (url) {
      var config = {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      };
      return (0, _axios.default)({
        url: url,
        method: 'GET',
        responseType: 'blob',
        // important
        config: config
      });
    });

    _this.state = {
      video: {},
      isLoading: false,
      videoFileExists: false
    };
    return _this;
  }

  _createClass(SingleVideoShare, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.setState({
        isLoading: true
      });
      (0, _db.getVideo)(this.props.match.params.userId, this.props.match.params.id).onSnapshot(function (querySnapshot) {
        console.log(querySnapshot.data());

        _this2.tryRequire(querySnapshot.data().outputUrl).then(function (res) {
          console.log(res);

          _this2.setState({
            videoFileExists: true,
            video: querySnapshot.data(),
            isLoading: false
          });
        }, function (err) {
          console.log(err);

          _this2.setState({
            videoFileExists: false
          });

          alert("file does not exist!");
        }); // this.setState({
        //         video: querySnapshot.data(),
        //         isLoading: false
        //       });

      });
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return Object.keys(this.state.video).length === 0;
    }
  }, {
    key: "render",
    value: function render() {
      var baseClassName = "psa-single-video-share";
      var _this$state = this.state,
          isLoading = _this$state.isLoading,
          video = _this$state.video;

      if (isLoading) {
        // TODO : User might have no videos, to be fixed
        return /*#__PURE__*/_react.default.createElement("div", {
          className: "".concat(baseClassName, "__loader-div")
        }, /*#__PURE__*/_react.default.createElement(_reactLoaderSpinner.default, {
          type: "ThreeDots",
          color: "#00BFFF",
          height: 100,
          width: 100,
          timeout: 3000 //3 secs

        }));
      }

      return /*#__PURE__*/_react.default.createElement("div", {
        className: "".concat(baseClassName)
      }, /*#__PURE__*/_react.default.createElement(_reactHelmet.Helmet, null, /*#__PURE__*/_react.default.createElement("meta", {
        charSet: "utf-8"
      }), /*#__PURE__*/_react.default.createElement("title", null, "Covid-19"), /*#__PURE__*/_react.default.createElement("meta", {
        name: "description",
        content: "Help to spread awareness for covid-19"
      }), /*#__PURE__*/_react.default.createElement("link", {
        rel: "canonical",
        href: "http://mysite.com/example"
      }), /*#__PURE__*/_react.default.createElement("meta", {
        property: "og:url",
        content: window.location
      }), /*#__PURE__*/_react.default.createElement("meta", {
        property: "og:type",
        content: "video"
      }), /*#__PURE__*/_react.default.createElement("meta", {
        property: "og:title",
        content: video.psaName
      }), /*#__PURE__*/_react.default.createElement("meta", {
        property: "og:description",
        content: "Help to spread awareness for covid-19"
      }), /*#__PURE__*/_react.default.createElement("meta", {
        property: "og:video",
        content: video.outputUrl
      }), /*#__PURE__*/_react.default.createElement("meta", {
        property: "og:video:type",
        content: "video/mp4"
      }), /*#__PURE__*/_react.default.createElement("meta", {
        property: "og:video:width",
        content: "300px"
      }), /*#__PURE__*/_react.default.createElement("meta", {
        property: "og:video:width",
        content: "300px"
      }), /*#__PURE__*/_react.default.createElement("meta", {
        property: "twitter:type",
        content: "video"
      }), /*#__PURE__*/_react.default.createElement("meta", {
        name: "twitter:title",
        content: video.psaName
      }), /*#__PURE__*/_react.default.createElement("meta", {
        name: "twitter:description",
        content: "Help to spread awareness for covid-19"
      }), /*#__PURE__*/_react.default.createElement("meta", {
        property: "twitter:video",
        content: video.outputUrl
      }), /*#__PURE__*/_react.default.createElement("meta", {
        name: "twitter:card",
        content: "summary_large_image"
      })), /*#__PURE__*/_react.default.createElement(_VideoCard.default, {
        url: video.outputUrl,
        name: video.psaName,
        date: video.createdDate ? new Date(video.createdDate.seconds * 1000) : video.createdDate,
        outputVideoId: video.outputVideoId,
        videoId: video.videoId
      }));
    }
  }]);

  return SingleVideoShare;
}(_react.Component);

_defineProperty(SingleVideoShare, "defaultProps", {
  shouldDisplayMenu: true
});

SingleVideoShare.propTypes = {};
var _default = SingleVideoShare;
exports.default = _default;