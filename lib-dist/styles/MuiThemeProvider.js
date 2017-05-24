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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getMuiTheme = require('./getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MuiThemeProvider = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(MuiThemeProvider, _Component);

  function MuiThemeProvider() {
    (0, _classCallCheck3.default)(this, MuiThemeProvider);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  MuiThemeProvider.prototype.getChildContext = function getChildContext() {
    return {
      muiTheme: this.props.muiTheme || (0, _getMuiTheme2.default)()
    };
  };

  MuiThemeProvider.prototype.render = function render() {
    return this.props.children;
  };

  return MuiThemeProvider;
}(_react.Component), _class.propTypes = {
  children: _propTypes2.default.element,
  muiTheme: _propTypes2.default.object
}, _class.childContextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp);
exports.default = MuiThemeProvider;