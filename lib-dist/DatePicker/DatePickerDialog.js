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

var _reactEventListener = require('react-event-listener');

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _keycode = require('keycode');

var _keycode2 = _interopRequireDefault(_keycode);

var _Calendar = require('./Calendar');

var _Calendar2 = _interopRequireDefault(_Calendar);

var _Dialog = require('../Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Popover = require('../Popover/Popover');

var _Popover2 = _interopRequireDefault(_Popover);

var _PopoverAnimationVertical = require('../Popover/PopoverAnimationVertical');

var _PopoverAnimationVertical2 = _interopRequireDefault(_PopoverAnimationVertical);

var _dateUtils = require('./dateUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DatePickerDialog = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(DatePickerDialog, _Component);

  function DatePickerDialog() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, DatePickerDialog);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      open: false
    }, _this.show = function () {
      if (_this.props.onShow && !_this.state.open) {
        _this.props.onShow();
      }

      _this.setState({
        open: true
      });
    }, _this.dismiss = function () {
      if (_this.props.onDismiss && _this.state.open) {
        _this.props.onDismiss();
      }

      _this.setState({
        open: false
      });
    }, _this.handleTouchTapDay = function () {
      if (_this.props.autoOk) {
        setTimeout(_this.handleTouchTapOk, 300);
      }
    }, _this.handleTouchTapCancel = function () {
      _this.dismiss();
    }, _this.handleRequestClose = function () {
      _this.dismiss();
    }, _this.handleTouchTapOk = function () {
      if (_this.props.onAccept && !_this.refs.calendar.isSelectedDateDisabled()) {
        _this.props.onAccept(_this.refs.calendar.getSelectedDate());
      }

      _this.dismiss();
    }, _this.handleWindowKeyUp = function (event) {
      switch ((0, _keycode2.default)(event)) {
        case 'enter':
          _this.handleTouchTapOk();
          break;
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  DatePickerDialog.prototype.render = function render() {
    var _props = this.props,
        DateTimeFormat = _props.DateTimeFormat,
        autoOk = _props.autoOk,
        cancelLabel = _props.cancelLabel,
        container = _props.container,
        containerStyle = _props.containerStyle,
        disableYearSelection = _props.disableYearSelection,
        initialDate = _props.initialDate,
        firstDayOfWeek = _props.firstDayOfWeek,
        locale = _props.locale,
        maxDate = _props.maxDate,
        minDate = _props.minDate,
        mode = _props.mode,
        okLabel = _props.okLabel,
        onAccept = _props.onAccept,
        onDismiss = _props.onDismiss,
        onShow = _props.onShow,
        shouldDisableDate = _props.shouldDisableDate,
        hideCalendarDate = _props.hideCalendarDate,
        style = _props.style,
        animation = _props.animation,
        utils = _props.utils,
        other = (0, _objectWithoutProperties3.default)(_props, ['DateTimeFormat', 'autoOk', 'cancelLabel', 'container', 'containerStyle', 'disableYearSelection', 'initialDate', 'firstDayOfWeek', 'locale', 'maxDate', 'minDate', 'mode', 'okLabel', 'onAccept', 'onDismiss', 'onShow', 'shouldDisableDate', 'hideCalendarDate', 'style', 'animation', 'utils']);
    var open = this.state.open;


    var styles = {
      dialogContent: {
        width: !hideCalendarDate && mode === 'landscape' ? 479 : 310
      },
      dialogBodyContent: {
        padding: 0,
        minHeight: hideCalendarDate || mode === 'landscape' ? 330 : 434,
        minWidth: hideCalendarDate || mode !== 'landscape' ? 310 : 479
      }
    };

    var Container = container === 'inline' ? _Popover2.default : _Dialog2.default;

    return _react2.default.createElement(
      'div',
      (0, _extends3.default)({}, other, { ref: 'root' }),
      _react2.default.createElement(
        Container,
        {
          anchorEl: this.refs.root // For Popover
          , animation: animation || _PopoverAnimationVertical2.default // For Popover
          , bodyStyle: styles.dialogBodyContent,
          contentStyle: styles.dialogContent,
          ref: 'dialog',
          repositionOnUpdate: true,
          open: open,
          onRequestClose: this.handleRequestClose,
          style: (0, _assign2.default)(styles.dialogBodyContent, containerStyle)
        },
        _react2.default.createElement(_reactEventListener2.default, {
          target: 'window',
          onKeyUp: this.handleWindowKeyUp
        }),
        _react2.default.createElement(_Calendar2.default, {
          autoOk: autoOk,
          DateTimeFormat: DateTimeFormat,
          cancelLabel: cancelLabel,
          disableYearSelection: disableYearSelection,
          firstDayOfWeek: firstDayOfWeek,
          initialDate: initialDate,
          locale: locale,
          onTouchTapDay: this.handleTouchTapDay,
          maxDate: maxDate,
          minDate: minDate,
          mode: mode,
          open: open,
          ref: 'calendar',
          onTouchTapCancel: this.handleTouchTapCancel,
          onTouchTapOk: this.handleTouchTapOk,
          okLabel: okLabel,
          shouldDisableDate: shouldDisableDate,
          hideCalendarDate: hideCalendarDate,
          utils: utils
        })
      )
    );
  };

  return DatePickerDialog;
}(_react.Component), _class.propTypes = {
  DateTimeFormat: _propTypes2.default.func,
  animation: _propTypes2.default.func,
  autoOk: _propTypes2.default.bool,
  cancelLabel: _propTypes2.default.node,
  container: _propTypes2.default.oneOf(['dialog', 'inline']),
  containerStyle: _propTypes2.default.object,
  disableYearSelection: _propTypes2.default.bool,
  firstDayOfWeek: _propTypes2.default.number,
  hideCalendarDate: _propTypes2.default.bool,
  initialDate: _propTypes2.default.object,
  locale: _propTypes2.default.string,
  maxDate: _propTypes2.default.object,
  minDate: _propTypes2.default.object,
  mode: _propTypes2.default.oneOf(['portrait', 'landscape']),
  okLabel: _propTypes2.default.node,
  onAccept: _propTypes2.default.func,
  onDismiss: _propTypes2.default.func,
  onShow: _propTypes2.default.func,
  open: _propTypes2.default.bool,
  shouldDisableDate: _propTypes2.default.func,
  style: _propTypes2.default.object,
  utils: _propTypes2.default.object
}, _class.defaultProps = {
  DateTimeFormat: _dateUtils.dateTimeFormat,
  cancelLabel: 'Cancel',
  container: 'dialog',
  locale: 'en-US',
  okLabel: 'OK'
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = DatePickerDialog;