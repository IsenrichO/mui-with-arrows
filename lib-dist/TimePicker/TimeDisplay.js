'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TimeDisplay = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(TimeDisplay, _Component);

  function TimeDisplay() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TimeDisplay);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      transitionDirection: 'up'
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  TimeDisplay.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.selectedTime !== this.props.selectedTime) {
      var direction = nextProps.selectedTime > this.props.selectedTime ? 'up' : 'down';

      this.setState({
        transitionDirection: direction
      });
    }
  };

  TimeDisplay.prototype.sanitizeTime = function sanitizeTime() {
    var hour = this.props.selectedTime.getHours();
    var min = this.props.selectedTime.getMinutes().toString();

    if (this.props.format === 'ampm') {
      hour %= 12;
      hour = hour || 12;
    }

    hour = hour.toString();
    if (hour.length < 2) hour = '0' + hour;
    if (min.length < 2) min = '0' + min;

    return [hour, min];
  };

  TimeDisplay.prototype.render = function render() {
    var _props = this.props,
        affix = _props.affix,
        format = _props.format,
        mode = _props.mode,
        onSelectAffix = _props.onSelectAffix,
        onSelectHour = _props.onSelectHour,
        onSelectMin = _props.onSelectMin,
        selectedTime = _props.selectedTime,
        other = (0, _objectWithoutProperties3.default)(_props, ['affix', 'format', 'mode', 'onSelectAffix', 'onSelectHour', 'onSelectMin', 'selectedTime']);
    var _context$muiTheme = this.context.muiTheme,
        prepareStyles = _context$muiTheme.prepareStyles,
        timePicker = _context$muiTheme.timePicker;


    var styles = {
      root: {
        padding: '14px 0',
        borderTopLeftRadius: 2,
        borderTopRightRadius: 2,
        backgroundColor: timePicker.headerColor,
        color: timePicker.textColor
      },
      text: {
        margin: '6px 0',
        lineHeight: '58px',
        height: 58,
        fontSize: 58,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline'
      },
      time: {
        margin: '0 10px'
      },
      affix: {
        flex: 1,
        position: 'relative',
        lineHeight: '17px',
        height: 17,
        fontSize: 17
      },
      affixTop: {
        position: 'absolute',
        top: -20,
        left: 0
      },
      clickable: {
        cursor: 'pointer'
      },
      inactive: {
        opacity: 0.7
      }
    };

    var _sanitizeTime = this.sanitizeTime(),
        hour = _sanitizeTime[0],
        min = _sanitizeTime[1];

    var buttons = [];
    if (format === 'ampm') {
      buttons = [_react2.default.createElement(
        'div',
        {
          key: 'pm',
          style: prepareStyles((0, _assign2.default)({}, styles.clickable, affix === 'pm' ? {} : styles.inactive)),
          onTouchTap: function onTouchTap() {
            return onSelectAffix('pm');
          }
        },
        'PM'
      ), _react2.default.createElement(
        'div',
        {
          key: 'am',
          style: prepareStyles((0, _assign2.default)({}, styles.affixTop, styles.clickable, affix === 'am' ? {} : styles.inactive)),
          onTouchTap: function onTouchTap() {
            return onSelectAffix('am');
          }
        },
        'AM'
      )];
    }

    return _react2.default.createElement(
      'div',
      (0, _extends3.default)({}, other, { style: prepareStyles(styles.root) }),
      _react2.default.createElement(
        'div',
        { style: prepareStyles(styles.text) },
        _react2.default.createElement('div', { style: prepareStyles((0, _assign2.default)({}, styles.affix)) }),
        _react2.default.createElement(
          'div',
          { style: prepareStyles(styles.time) },
          _react2.default.createElement(
            'span',
            {
              style: prepareStyles((0, _assign2.default)({}, styles.clickable, mode === 'hour' ? {} : styles.inactive)),
              onTouchTap: onSelectHour
            },
            hour
          ),
          _react2.default.createElement(
            'span',
            null,
            ':'
          ),
          _react2.default.createElement(
            'span',
            {
              style: prepareStyles((0, _assign2.default)({}, styles.clickable, mode === 'minute' ? {} : styles.inactive)),
              onTouchTap: onSelectMin
            },
            min
          )
        ),
        _react2.default.createElement(
          'div',
          { style: prepareStyles((0, _assign2.default)({}, styles.affix)) },
          buttons
        )
      )
    );
  };

  return TimeDisplay;
}(_react.Component), _class.propTypes = {
  affix: _propTypes2.default.oneOf(['', 'pm', 'am']),
  format: _propTypes2.default.oneOf(['ampm', '24hr']),
  mode: _propTypes2.default.oneOf(['hour', 'minute']),
  onSelectAffix: _propTypes2.default.func,
  onSelectHour: _propTypes2.default.func,
  onSelectMin: _propTypes2.default.func,
  selectedTime: _propTypes2.default.object.isRequired
}, _class.defaultProps = {
  affix: '',
  mode: 'hour'
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = TimeDisplay;