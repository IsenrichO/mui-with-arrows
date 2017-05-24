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

var _TimePickerDialog = require('./TimePickerDialog');

var _TimePickerDialog2 = _interopRequireDefault(_TimePickerDialog);

var _TextField = require('../TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _timeUtils = require('./timeUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var emptyTime = new Date();
emptyTime.setHours(0);
emptyTime.setMinutes(0);
emptyTime.setSeconds(0);
emptyTime.setMilliseconds(0);

var TimePicker = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(TimePicker, _Component);

  function TimePicker() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TimePicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      time: null,
      dialogTime: new Date()
    }, _this.handleAcceptDialog = function (time) {
      _this.setState({
        time: time
      });
      if (_this.props.onChange) _this.props.onChange(null, time);
    }, _this.handleFocusInput = function (event) {
      event.target.blur();
      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
    }, _this.handleTouchTapInput = function (event) {
      event.preventDefault();

      if (!_this.props.disabled) {
        _this.openDialog();
      }

      if (_this.props.onTouchTap) {
        _this.props.onTouchTap(event);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  TimePicker.prototype.componentWillMount = function componentWillMount() {
    this.setState({
      time: this.isControlled() ? this.getControlledTime() : this.props.defaultTime
    });
  };

  TimePicker.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({
        time: this.getControlledTime(nextProps)
      });
    }
  };

  /**
   * Alias for `openDialog()` for an api consistent with TextField.
   */


  TimePicker.prototype.focus = function focus() {
    this.openDialog();
  };

  TimePicker.prototype.openDialog = function openDialog() {
    this.setState({
      dialogTime: this.state.time
    });
    this.refs.dialogWindow.show();
  };

  TimePicker.prototype.isControlled = function isControlled() {
    return this.props.value !== null;
  };

  TimePicker.prototype.getControlledTime = function getControlledTime() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

    var result = null;
    if (props.value instanceof Date) {
      result = props.value;
    }
    return result;
  };

  TimePicker.prototype.render = function render() {
    var _props = this.props,
        autoOk = _props.autoOk,
        cancelLabel = _props.cancelLabel,
        defaultTime = _props.defaultTime,
        dialogBodyStyle = _props.dialogBodyStyle,
        dialogStyle = _props.dialogStyle,
        format = _props.format,
        okLabel = _props.okLabel,
        onFocus = _props.onFocus,
        onTouchTap = _props.onTouchTap,
        onShow = _props.onShow,
        onDismiss = _props.onDismiss,
        pedantic = _props.pedantic,
        style = _props.style,
        textFieldStyle = _props.textFieldStyle,
        other = (0, _objectWithoutProperties3.default)(_props, ['autoOk', 'cancelLabel', 'defaultTime', 'dialogBodyStyle', 'dialogStyle', 'format', 'okLabel', 'onFocus', 'onTouchTap', 'onShow', 'onDismiss', 'pedantic', 'style', 'textFieldStyle']);
    var prepareStyles = this.context.muiTheme.prepareStyles;
    var time = this.state.time;


    return _react2.default.createElement(
      'div',
      { style: prepareStyles((0, _assign2.default)({}, style)) },
      _react2.default.createElement(_TextField2.default, (0, _extends3.default)({}, other, {
        style: textFieldStyle,
        ref: 'input',
        value: time === emptyTime ? null : (0, _timeUtils.formatTime)(time, format, pedantic),
        onFocus: this.handleFocusInput,
        onTouchTap: this.handleTouchTapInput
      })),
      _react2.default.createElement(_TimePickerDialog2.default, {
        ref: 'dialogWindow',
        bodyStyle: dialogBodyStyle,
        initialTime: this.state.dialogTime,
        onAccept: this.handleAcceptDialog,
        onShow: onShow,
        onDismiss: onDismiss,
        format: format,
        okLabel: okLabel,
        cancelLabel: cancelLabel,
        autoOk: autoOk,
        style: dialogStyle
      })
    );
  };

  return TimePicker;
}(_react.Component), _class.propTypes = {
  /**
   * If true, automatically accept and close the picker on set minutes.
   */
  autoOk: _propTypes2.default.bool,
  /**
   * Override the label of the 'Cancel' button.
   */
  cancelLabel: _propTypes2.default.node,
  /**
   * The initial time value of the TimePicker.
   */
  defaultTime: _propTypes2.default.object,
  /**
   * Override the inline-styles of TimePickerDialog's body element.
   */
  dialogBodyStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of TimePickerDialog's root element.
   */
  dialogStyle: _propTypes2.default.object,
  /**
   * If true, the TimePicker is disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * Tells the component to display the picker in `ampm` (12hr) format or `24hr` format.
   */
  format: _propTypes2.default.oneOf(['ampm', '24hr']),
  /**
   * Override the label of the 'OK' button.
   */
  okLabel: _propTypes2.default.node,
  /**
   * Callback function that is fired when the time value changes. The time value is passed in a Date Object.
   * Since there is no particular event associated with the change the first argument will always be null
   * and the second argument will be the new Date instance.
   */
  onChange: _propTypes2.default.func,
  /**
   * Callback function fired when the TimePicker dialog is dismissed.
   */
  onDismiss: _propTypes2.default.func,
  /**
   * Callback function fired when the TimePicker `TextField` gains focus.
   */
  onFocus: _propTypes2.default.func,
  /**
   * Callback function fired when the TimePicker dialog is shown.
   */
  onShow: _propTypes2.default.func,
  /**
   * Callback function fired when the TimePicker is tapped or clicked.
   */
  onTouchTap: _propTypes2.default.func,
  /**
   * If true, uses ("noon" / "midnight") instead of ("12 a.m." / "12 p.m.").
   *
   * It's technically more correct to refer to "12 noon" and "12 midnight" rather than "12 a.m." and "12 p.m."
   * and it avoids confusion between different locales. By default (for compatibility reasons) TimePicker uses
   * ("12 a.m." / "12 p.m.").
   */
  pedantic: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * Override the inline-styles of TimePicker's TextField element.
   */
  textFieldStyle: _propTypes2.default.object,
  /**
   * Sets the time for the Time Picker programmatically.
   */
  value: _propTypes2.default.object
}, _class.defaultProps = {
  autoOk: false,
  cancelLabel: 'Cancel',
  defaultTime: null,
  disabled: false,
  format: 'ampm',
  okLabel: 'OK',
  pedantic: false,
  style: {},
  value: null
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = TimePicker;