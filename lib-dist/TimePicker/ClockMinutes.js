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

var _ClockNumber = require('./ClockNumber');

var _ClockNumber2 = _interopRequireDefault(_ClockNumber);

var _ClockPointer = require('./ClockPointer');

var _ClockPointer2 = _interopRequireDefault(_ClockPointer);

var _timeUtils = require('./timeUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ClockMinutes = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(ClockMinutes, _Component);

  function ClockMinutes() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ClockMinutes);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleUp = function (event) {
      event.preventDefault();
      _this.setClock(event.nativeEvent, true);
    }, _this.handleMove = function (event) {
      event.preventDefault();
      if (_this.isMousePressed(event) !== 1) {
        return;
      }
      _this.setClock(event.nativeEvent, false);
    }, _this.handleTouch = function (event) {
      event.preventDefault();
      _this.setClock(event.changedTouches[0], event.type === 'touchend');
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  ClockMinutes.prototype.componentDidMount = function componentDidMount() {
    var clockElement = this.refs.mask;

    this.center = {
      x: clockElement.offsetWidth / 2,
      y: clockElement.offsetHeight / 2
    };

    this.basePoint = {
      x: this.center.x,
      y: 0
    };
  };

  ClockMinutes.prototype.isMousePressed = function isMousePressed(event) {
    if (typeof event.buttons === 'undefined') {
      return event.nativeEvent.which;
    }
    return event.buttons;
  };

  ClockMinutes.prototype.setClock = function setClock(event, finish) {
    if (typeof event.offsetX === 'undefined') {
      var offset = (0, _timeUtils.getTouchEventOffsetValues)(event);

      event.offsetX = offset.offsetX;
      event.offsetY = offset.offsetY;
    }

    var minutes = this.getMinutes(event.offsetX, event.offsetY);

    this.props.onChange(minutes, finish);
  };

  ClockMinutes.prototype.getMinutes = function getMinutes(offsetX, offsetY) {
    var step = 6;
    var x = offsetX - this.center.x;
    var y = offsetY - this.center.y;
    var cx = this.basePoint.x - this.center.x;
    var cy = this.basePoint.y - this.center.y;

    var atan = Math.atan2(cx, cy) - Math.atan2(x, y);

    var deg = (0, _timeUtils.rad2deg)(atan);
    deg = Math.round(deg / step) * step;
    deg %= 360;

    var value = Math.floor(deg / step) || 0;

    return value;
  };

  ClockMinutes.prototype.getMinuteNumbers = function getMinuteNumbers() {
    var minutes = [];
    for (var i = 0; i < 12; i++) {
      minutes.push(i * 5);
    }
    var selectedMinutes = this.props.initialMinutes;
    var hasSelected = false;

    var numbers = minutes.map(function (minute) {
      var isSelected = selectedMinutes === minute;
      if (isSelected) {
        hasSelected = true;
      }
      return _react2.default.createElement(_ClockNumber2.default, {
        key: minute,
        isSelected: isSelected,
        type: 'minute',
        value: minute
      });
    });

    return {
      numbers: numbers,
      hasSelected: hasSelected,
      selected: selectedMinutes
    };
  };

  ClockMinutes.prototype.render = function render() {
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

    var minutes = this.getMinuteNumbers();

    return _react2.default.createElement(
      'div',
      { ref: 'clock', style: prepareStyles(styles.root) },
      _react2.default.createElement(_ClockPointer2.default, { value: minutes.selected, type: 'minute', hasSelected: minutes.hasSelected }),
      minutes.numbers,
      _react2.default.createElement('div', {
        ref: 'mask',
        style: prepareStyles(styles.hitMask),
        onTouchMove: this.handleTouch,
        onTouchEnd: this.handleTouch,
        onMouseUp: this.handleUp,
        onMouseMove: this.handleMove
      })
    );
  };

  return ClockMinutes;
}(_react.Component), _class.propTypes = {
  initialMinutes: _propTypes2.default.number,
  onChange: _propTypes2.default.func
}, _class.defaultProps = {
  initialMinutes: new Date().getMinutes(),
  onChange: function onChange() {}
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = ClockMinutes;