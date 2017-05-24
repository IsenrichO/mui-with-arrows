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

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ClockNumber = require('./ClockNumber');

var _ClockNumber2 = _interopRequireDefault(_ClockNumber);

var _ClockPointer = require('./ClockPointer');

var _ClockPointer2 = _interopRequireDefault(_ClockPointer);

var _timeUtils = require('./timeUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ClockHours = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(ClockHours, _Component);

  function ClockHours() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ClockHours);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleUp = function (event) {
      event.preventDefault();
      _this.setClock(event.nativeEvent, true);
    }, _this.handleMove = function (event) {
      event.preventDefault();
      if (_this.isMousePressed(event) !== 1) return;
      _this.setClock(event.nativeEvent, false);
    }, _this.handleTouchMove = function (event) {
      event.preventDefault();
      _this.setClock(event.changedTouches[0], false);
    }, _this.handleTouchEnd = function (event) {
      event.preventDefault();
      _this.setClock(event.changedTouches[0], true);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  ClockHours.prototype.componentDidMount = function componentDidMount() {
    var clockElement = _reactDom2.default.findDOMNode(this.refs.mask);

    this.center = {
      x: clockElement.offsetWidth / 2,
      y: clockElement.offsetHeight / 2
    };

    this.basePoint = {
      x: this.center.x,
      y: 0
    };
  };

  ClockHours.prototype.isMousePressed = function isMousePressed(event) {
    if (typeof event.buttons === 'undefined') {
      return event.nativeEvent.which;
    }

    return event.buttons;
  };

  ClockHours.prototype.setClock = function setClock(event, finish) {
    if (typeof event.offsetX === 'undefined') {
      var offset = (0, _timeUtils.getTouchEventOffsetValues)(event);

      event.offsetX = offset.offsetX;
      event.offsetY = offset.offsetY;
    }

    var hours = this.getHours(event.offsetX, event.offsetY);

    this.props.onChange(hours, finish);
  };

  ClockHours.prototype.getHours = function getHours(offsetX, offsetY) {
    var step = 30;
    var x = offsetX - this.center.x;
    var y = offsetY - this.center.y;
    var cx = this.basePoint.x - this.center.x;
    var cy = this.basePoint.y - this.center.y;

    var atan = Math.atan2(cx, cy) - Math.atan2(x, y);

    var deg = (0, _timeUtils.rad2deg)(atan);
    deg = Math.round(deg / step) * step;
    deg %= 360;

    var value = Math.floor(deg / step) || 0;

    var delta = Math.pow(x, 2) + Math.pow(y, 2);
    var distance = Math.sqrt(delta);

    value = value || 12;
    if (this.props.format === '24hr') {
      if (distance < 90) {
        value += 12;
        value %= 24;
      }
    } else {
      value %= 12;
    }

    return value;
  };

  ClockHours.prototype.getSelected = function getSelected() {
    var hour = this.props.initialHours;

    if (this.props.format === 'ampm') {
      hour %= 12;
      hour = hour || 12;
    }

    return hour;
  };

  ClockHours.prototype.getHourNumbers = function getHourNumbers() {
    var _this2 = this;

    var style = {
      pointerEvents: 'none'
    };
    var hourSize = this.props.format === 'ampm' ? 12 : 24;

    var hours = [];
    for (var i = 1; i <= hourSize; i++) {
      hours.push(i % 24);
    }

    return hours.map(function (hour) {
      var isSelected = _this2.getSelected() === hour;
      return _react2.default.createElement(_ClockNumber2.default, {
        key: hour,
        style: style,
        isSelected: isSelected,
        type: 'hour',
        value: hour
      });
    });
  };

  ClockHours.prototype.render = function render() {
    var styles = {
      root: {
        height: '100%',
        width: '100%',
        borderRadius: '100%',
        position: 'relative',
        pointerEvents: 'none',
        boxSizing: 'border-box'
      },

      hitMask: {
        height: '100%',
        width: '100%',
        pointerEvents: 'auto'
      }
    };

    var prepareStyles = this.context.muiTheme.prepareStyles;

    var hours = this.getSelected();
    var numbers = this.getHourNumbers();

    return _react2.default.createElement(
      'div',
      { ref: 'clock', style: prepareStyles(styles.root) },
      _react2.default.createElement(_ClockPointer2.default, { hasSelected: true, value: hours, type: 'hour' }),
      numbers,
      _react2.default.createElement('div', {
        ref: 'mask', style: prepareStyles(styles.hitMask), onTouchMove: this.handleTouchMove,
        onTouchEnd: this.handleTouchEnd, onMouseUp: this.handleUp, onMouseMove: this.handleMove
      })
    );
  };

  return ClockHours;
}(_react.Component), _class.propTypes = {
  format: _propTypes2.default.oneOf(['ampm', '24hr']),
  initialHours: _propTypes2.default.number,
  onChange: _propTypes2.default.func
}, _class.defaultProps = {
  initialHours: new Date().getHours(),
  onChange: function onChange() {},
  format: 'ampm'
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = ClockHours;