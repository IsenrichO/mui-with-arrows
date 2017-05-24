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

var _Clock = require('./Clock');

var _Clock2 = _interopRequireDefault(_Clock);

var _Dialog = require('../Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _FlatButton = require('../FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TimePickerDialog = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(TimePickerDialog, _Component);

  function TimePickerDialog() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TimePickerDialog);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      open: false
    }, _this.handleRequestClose = function () {
      _this.dismiss();
    }, _this.handleTouchTapCancel = function () {
      _this.dismiss();
    }, _this.handleTouchTapOK = function () {
      if (_this.props.onAccept) {
        _this.props.onAccept(_this.refs.clock.getSelectedTime());
      }
      _this.setState({
        open: false
      });
    }, _this.handleKeyUp = function (event) {
      switch ((0, _keycode2.default)(event)) {
        case 'enter':
          _this.handleTouchTapOK();
          break;
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  TimePickerDialog.prototype.show = function show() {
    if (this.props.onShow && !this.state.open) this.props.onShow();
    this.setState({
      open: true
    });
  };

  TimePickerDialog.prototype.dismiss = function dismiss() {
    if (this.props.onDismiss && this.state.open) this.props.onDismiss();
    this.setState({
      open: false
    });
  };

  TimePickerDialog.prototype.render = function render() {
    var _props = this.props,
        bodyStyle = _props.bodyStyle,
        initialTime = _props.initialTime,
        onAccept = _props.onAccept,
        format = _props.format,
        autoOk = _props.autoOk,
        okLabel = _props.okLabel,
        cancelLabel = _props.cancelLabel,
        style = _props.style,
        other = (0, _objectWithoutProperties3.default)(_props, ['bodyStyle', 'initialTime', 'onAccept', 'format', 'autoOk', 'okLabel', 'cancelLabel', 'style']);


    var styles = {
      root: {
        fontSize: 14,
        color: this.context.muiTheme.timePicker.clockColor
      },
      dialogContent: {
        width: 280
      },
      body: {
        padding: 0
      }
    };

    var actions = [_react2.default.createElement(_FlatButton2.default, {
      key: 0,
      label: cancelLabel,
      primary: true,
      onTouchTap: this.handleTouchTapCancel
    }), _react2.default.createElement(_FlatButton2.default, {
      key: 1,
      label: okLabel,
      primary: true,
      onTouchTap: this.handleTouchTapOK
    })];

    var onClockChangeMinutes = autoOk === true ? this.handleTouchTapOK : undefined;
    var open = this.state.open;

    return _react2.default.createElement(
      _Dialog2.default,
      (0, _extends3.default)({}, other, {
        style: (0, _assign2.default)(styles.root, style),
        bodyStyle: (0, _assign2.default)(styles.body, bodyStyle),
        actions: actions,
        contentStyle: styles.dialogContent,
        repositionOnUpdate: false,
        open: open,
        onRequestClose: this.handleRequestClose
      }),
      open && _react2.default.createElement(_reactEventListener2.default, { target: 'window', onKeyUp: this.handleKeyUp }),
      open && _react2.default.createElement(_Clock2.default, {
        ref: 'clock',
        format: format,
        initialTime: initialTime,
        onChangeMinutes: onClockChangeMinutes
      })
    );
  };

  return TimePickerDialog;
}(_react.Component), _class.propTypes = {
  autoOk: _propTypes2.default.bool,
  bodyStyle: _propTypes2.default.object,
  cancelLabel: _propTypes2.default.node,
  format: _propTypes2.default.oneOf(['ampm', '24hr']),
  initialTime: _propTypes2.default.object,
  okLabel: _propTypes2.default.node,
  onAccept: _propTypes2.default.func,
  onDismiss: _propTypes2.default.func,
  onShow: _propTypes2.default.func,
  style: _propTypes2.default.object
}, _class.defaultProps = {
  okLabel: 'OK',
  cancelLabel: 'Cancel'
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = TimePickerDialog;