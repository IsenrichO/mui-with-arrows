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

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FlatButton = require('../FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CalendarActionButton = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(CalendarActionButton, _Component);

  function CalendarActionButton() {
    (0, _classCallCheck3.default)(this, CalendarActionButton);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  CalendarActionButton.prototype.render = function render() {
    var _props = this.props,
        cancelLabel = _props.cancelLabel,
        okLabel = _props.okLabel;


    var styles = {
      root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        margin: 0,
        maxHeight: 48,
        padding: 0
      },
      flatButtons: {
        fontsize: 14,
        margin: '4px 8px 8px 0px',
        maxHeight: 36,
        minWidth: 64,
        padding: 0
      }
    };

    return _react2.default.createElement(
      'div',
      { style: styles.root },
      _react2.default.createElement(_FlatButton2.default, {
        label: cancelLabel,
        onTouchTap: this.props.onTouchTapCancel,
        primary: true,
        style: styles.flatButtons
      }),
      !this.props.autoOk && _react2.default.createElement(_FlatButton2.default, {
        disabled: this.refs.calendar !== undefined && this.refs.calendar.isSelectedDateDisabled(),
        label: okLabel,
        onTouchTap: this.props.onTouchTapOk,
        primary: true,
        style: styles.flatButtons
      })
    );
  };

  return CalendarActionButton;
}(_react.Component), _class.propTypes = {
  autoOk: _propTypes2.default.bool,
  cancelLabel: _propTypes2.default.node,
  okLabel: _propTypes2.default.node,
  onTouchTapCancel: _propTypes2.default.func,
  onTouchTapOk: _propTypes2.default.func
}, _temp);
exports.default = CalendarActionButton;