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

var _timeUtils = require('./timeUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function calcAngle(value, base) {
  value %= base;
  var angle = 360 / base * value;
  return angle;
}

function getStyles(props, context, state) {
  var hasSelected = props.hasSelected,
      type = props.type,
      value = props.value;
  var inner = state.inner;
  var timePicker = context.muiTheme.timePicker;

  var angle = type === 'hour' ? calcAngle(value, 12) : calcAngle(value, 60);

  var styles = {
    root: {
      height: inner ? '30%' : '40%',
      background: timePicker.accentColor,
      width: 2,
      left: 'calc(50% - 1px)',
      position: 'absolute',
      bottom: '50%',
      transformOrigin: 'bottom',
      pointerEvents: 'none',
      transform: 'rotateZ(' + angle + 'deg)'
    },
    mark: {
      boxSizing: 'content-box',
      background: timePicker.selectTextColor,
      border: '4px solid ' + timePicker.accentColor,
      display: hasSelected && 'none',
      width: 7,
      height: 7,
      position: 'absolute',
      top: -5,
      left: -6,
      borderRadius: '100%'
    }
  };

  return styles;
}

var ClockPointer = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(ClockPointer, _Component);

  function ClockPointer() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ClockPointer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      inner: false
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  ClockPointer.prototype.componentWillMount = function componentWillMount() {
    this.setState({
      inner: (0, _timeUtils.isInner)(this.props)
    });
  };

  ClockPointer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    this.setState({
      inner: (0, _timeUtils.isInner)(nextProps)
    });
  };

  ClockPointer.prototype.render = function render() {
    if (this.props.value === null) {
      return _react2.default.createElement('span', null);
    }

    var styles = getStyles(this.props, this.context, this.state);
    var prepareStyles = this.context.muiTheme.prepareStyles;


    return _react2.default.createElement(
      'div',
      { style: prepareStyles(styles.root) },
      _react2.default.createElement('div', { style: prepareStyles(styles.mark) })
    );
  };

  return ClockPointer;
}(_react.Component), _class.propTypes = {
  hasSelected: _propTypes2.default.bool,
  type: _propTypes2.default.oneOf(['hour', 'minute']),
  value: _propTypes2.default.number
}, _class.defaultProps = {
  hasSelected: false,
  value: null,
  type: 'minute'
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = ClockPointer;