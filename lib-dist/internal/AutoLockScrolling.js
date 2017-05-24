'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = require('react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var originalBodyOverflow = null;
var lockingCounter = 0;

var AutoLockScrolling = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(AutoLockScrolling, _Component);

  function AutoLockScrolling() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, AutoLockScrolling);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.locked = false, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  AutoLockScrolling.prototype.componentDidMount = function componentDidMount() {
    if (this.props.lock === true) {
      this.preventScrolling();
    }
  };

  AutoLockScrolling.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.lock !== nextProps.lock) {
      if (nextProps.lock) {
        this.preventScrolling();
      } else {
        this.allowScrolling();
      }
    }
  };

  AutoLockScrolling.prototype.componentWillUnmount = function componentWillUnmount() {
    this.allowScrolling();
  };

  // force to only lock/unlock once


  AutoLockScrolling.prototype.preventScrolling = function preventScrolling() {
    if (this.locked === true) {
      return;
    }

    lockingCounter = lockingCounter + 1;
    this.locked = true;

    // only lock the first time the component is mounted.
    if (lockingCounter === 1) {
      var body = document.getElementsByTagName('body')[0];
      originalBodyOverflow = body.style.overflow;
      body.style.overflow = 'hidden';
    }
  };

  AutoLockScrolling.prototype.allowScrolling = function allowScrolling() {
    if (this.locked === true) {
      lockingCounter = lockingCounter - 1;
      this.locked = false;
    }

    if (lockingCounter === 0 && originalBodyOverflow !== null) {
      var body = document.getElementsByTagName('body')[0];
      body.style.overflow = originalBodyOverflow || '';
      originalBodyOverflow = null;
    }
  };

  AutoLockScrolling.prototype.render = function render() {
    return null;
  };

  return AutoLockScrolling;
}(_react.Component), _class.propTypes = {
  lock: _propTypes2.default.bool.isRequired
}, _temp2);
exports.default = AutoLockScrolling;