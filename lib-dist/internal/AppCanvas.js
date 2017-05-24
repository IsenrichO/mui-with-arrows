'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppCanvas = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(AppCanvas, _Component);

  function AppCanvas() {
    (0, _classCallCheck3.default)(this, AppCanvas);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  AppCanvas.prototype.render = function render() {
    var _context$muiTheme = this.context.muiTheme,
        baseTheme = _context$muiTheme.baseTheme,
        prepareStyles = _context$muiTheme.prepareStyles;


    var styles = {
      height: '100%',
      color: baseTheme.palette.textColor,
      backgroundColor: baseTheme.palette.canvasColor,
      direction: 'ltr'
    };

    var newChildren = _react2.default.Children.map(this.props.children, function (currentChild) {
      if (!currentChild) {
        // If undefined, skip it
        return null;
      }

      switch (currentChild.type.muiName) {
        case 'AppBar':
          return _react2.default.cloneElement(currentChild, {
            style: (0, _assign2.default)({}, currentChild.props.style, {
              position: 'fixed'
            })
          });
        default:
          return currentChild;
      }
    }, this);

    return _react2.default.createElement(
      'div',
      { style: prepareStyles(styles) },
      newChildren
    );
  };

  return AppCanvas;
}(_react.Component), _class.propTypes = {
  children: _propTypes2.default.node
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp);
exports.default = AppCanvas;