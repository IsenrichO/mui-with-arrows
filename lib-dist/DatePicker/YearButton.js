'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _EnhancedButton = require('../internal/EnhancedButton');

var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context, state) {
  var selected = props.selected,
      year = props.year,
      utils = props.utils;
  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      datePicker = _context$muiTheme.datePicker;
  var hover = state.hover;


  return {
    root: {
      boxSizing: 'border-box',
      color: year === utils.getYear(new Date()) && datePicker.color,
      display: 'block',
      fontSize: 14,
      margin: '0 auto',
      position: 'relative',
      textAlign: 'center',
      lineHeight: 'inherit',
      WebkitTapHighlightColor: 'rgba(0,0,0,0)' },
    label: {
      alignSelf: 'center',
      color: hover || selected ? datePicker.color : baseTheme.palette.textColor,
      fontSize: selected ? 26 : 17,
      fontWeight: hover ? 450 : selected ? 500 : 400,
      position: 'relative',
      top: -1
    }
  };
}

var YearButton = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(YearButton, _Component);

  function YearButton() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, YearButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      hover: false
    }, _this.handleMouseEnter = function () {
      _this.setState({ hover: true });
    }, _this.handleMouseLeave = function () {
      _this.setState({ hover: false });
    }, _this.handleTouchTap = function (event) {
      if (_this.props.onTouchTap) {
        _this.props.onTouchTap(event, _this.props.year);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  YearButton.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        className = _props.className,
        onTouchTap = _props.onTouchTap,
        selected = _props.selected,
        year = _props.year,
        utils = _props.utils,
        other = (0, _objectWithoutProperties3.default)(_props, ['children', 'className', 'onTouchTap', 'selected', 'year', 'utils']);
    var prepareStyles = this.context.muiTheme.prepareStyles;

    var styles = getStyles(this.props, this.context, this.state);

    return _react2.default.createElement(
      _EnhancedButton2.default,
      (0, _extends3.default)({}, other, {
        disableFocusRipple: true,
        disableTouchRipple: true,
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        onTouchTap: this.handleTouchTap,
        style: styles.root
      }),
      _react2.default.createElement(
        'span',
        { style: prepareStyles(styles.label) },
        children
      )
    );
  };

  return YearButton;
}(_react.Component), _class.propTypes = {
  children: _propTypes2.default.node.isRequired,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  onTouchTap: _propTypes2.default.func,
  selected: _propTypes2.default.bool,
  utils: _propTypes2.default.object.isRequired,
  year: _propTypes2.default.number.isRequired
}, _class.defaultProps = {
  selected: false
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = YearButton;