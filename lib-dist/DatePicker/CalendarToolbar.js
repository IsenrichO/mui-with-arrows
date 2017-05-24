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

var _IconButton = require('../IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _chevronLeft = require('../svg-icons/navigation/chevron-left');

var _chevronLeft2 = _interopRequireDefault(_chevronLeft);

var _chevronRight = require('../svg-icons/navigation/chevron-right');

var _chevronRight2 = _interopRequireDefault(_chevronRight);

var _SlideIn = require('../internal/SlideIn');

var _SlideIn2 = _interopRequireDefault(_SlideIn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'inherit',
    height: 48
  },
  titleDiv: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    width: '100%'
  },
  titleText: {
    height: 'inherit',
    paddingTop: 12
  }
};

var CalendarToolbar = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(CalendarToolbar, _Component);

  function CalendarToolbar() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CalendarToolbar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      transitionDirection: 'up'
    }, _this.handleTouchTapPrevMonth = function () {
      if (_this.props.onMonthChange) {
        _this.props.onMonthChange(-1);
      }
    }, _this.handleTouchTapNextMonth = function () {
      if (_this.props.onMonthChange) {
        _this.props.onMonthChange(1);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  CalendarToolbar.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.displayDate !== this.props.displayDate) {
      var direction = nextProps.displayDate > this.props.displayDate ? 'left' : 'right';
      this.setState({
        transitionDirection: direction
      });
    }
  };

  CalendarToolbar.prototype.render = function render() {
    var _props = this.props,
        DateTimeFormat = _props.DateTimeFormat,
        locale = _props.locale,
        displayDate = _props.displayDate;


    var dateTimeFormatted = new DateTimeFormat(locale, {
      month: 'long',
      year: 'numeric'
    }).format(displayDate);

    return _react2.default.createElement(
      'div',
      { style: styles.root },
      _react2.default.createElement(
        _IconButton2.default,
        {
          disabled: !this.props.prevMonth,
          onTouchTap: this.handleTouchTapPrevMonth
        },
        _react2.default.createElement(_chevronLeft2.default, null)
      ),
      _react2.default.createElement(
        _SlideIn2.default,
        {
          direction: this.state.transitionDirection,
          style: styles.titleDiv
        },
        _react2.default.createElement(
          'div',
          { key: dateTimeFormatted, style: styles.titleText },
          dateTimeFormatted
        )
      ),
      _react2.default.createElement(
        _IconButton2.default,
        {
          disabled: !this.props.nextMonth,
          onTouchTap: this.handleTouchTapNextMonth
        },
        _react2.default.createElement(_chevronRight2.default, null)
      )
    );
  };

  return CalendarToolbar;
}(_react.Component), _class.propTypes = {
  DateTimeFormat: _propTypes2.default.func.isRequired,
  displayDate: _propTypes2.default.object.isRequired,
  locale: _propTypes2.default.string.isRequired,
  nextMonth: _propTypes2.default.bool,
  onMonthChange: _propTypes2.default.func,
  prevMonth: _propTypes2.default.bool
}, _class.defaultProps = {
  nextMonth: true,
  prevMonth: true
}, _temp2);
exports.default = CalendarToolbar;