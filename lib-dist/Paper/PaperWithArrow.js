'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _propTypes3 = require('../utils/propTypes');

var _propTypes4 = _interopRequireDefault(_propTypes3);

var _transitions = require('../styles/transitions');

var _transitions2 = _interopRequireDefault(_transitions);

var _Arrow = require('../Arrow');

var _classes = require('../utils/classes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var rounded = props.rounded,
      circle = props.circle,
      transitionEnabled = props.transitionEnabled,
      zDepth = props.zDepth;
  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      paper = _context$muiTheme.paper,
      paperArrow = _context$muiTheme.paperArrow,
      borderRadius = _context$muiTheme.borderRadius;


  return {
    root: {
      position: 'relative',
      color: paper.color,
      backgroundColor: paper.backgroundColor,
      transition: transitionEnabled && _transitions2.default.easeOut(),
      boxSizing: 'border-box',
      fontFamily: baseTheme.fontFamily,
      WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', // Remove mobile color flashing (deprecated)
      boxShadow: paper.zDepthShadows[zDepth - 1], // No shadow for 0-depth `Paper`
      borderRadius: circle ? '50%' : rounded ? borderRadius : 0
    },
    base: {
      marginLeft: 14,
      padding: '16px 0 16px 24px',
      backgroundColor: '#FFFFFF'
    },
    arrow: {
      position: 'absolute',
      right: 'calc(100% - 1px)',
      WebkitBorder: '10px solid transparent',
      MozBorder: '10px solid transparent',
      OBorder: '10px solid transparent',
      border: '10px solid transparent',
      WebkitBorderRightColor: '#FFFFFF',
      MozBorderRightColor: '#FFFFFF',
      OBorderRightColor: '#FFFFFF',
      borderRightColor: '#FFFFFF',
      WebkitFilter: 'drop-shadow(rgba(0, 0, 0, 0.24) -3px 0 2px)',
      filter: 'drop-shadow(rgba(0, 0, 0, 0.24) -3px 0 2px)'
    }
  };
}

var PaperWithArrow = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(PaperWithArrow, _Component);

  function PaperWithArrow() {
    (0, _classCallCheck3.default)(this, PaperWithArrow);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  PaperWithArrow.prototype.render = function render() {
    var _props = this.props,
        arrow = _props.arrow,
        children = _props.children,
        circle = _props.circle,
        className = _props.className,
        rounded = _props.rounded,
        style = _props.style,
        transitionEnabled = _props.transitionEnabled,
        zDepth = _props.zDepth,
        other = (0, _objectWithoutProperties3.default)(_props, ['arrow', 'children', 'circle', 'className', 'rounded', 'style', 'transitionEnabled', 'zDepth']);
    var prepareStyles = this.context.muiTheme.prepareStyles;

    var styles = getStyles(this.props, this.context);

    return _react2.default.createElement(
      'div',
      (0, _extends3.default)({}, other, {
        className: (0, _classes.getUniqClasses)(className, 'paper-with-arrow'),
        style: prepareStyles(styles.root, styles.base)
      }),
      _react2.default.createElement('div', {
        className: 'paper-arrow',
        style: prepareStyles(styles.arrow)
      }),
      children
    );
  };

  return PaperWithArrow;
}(_react.Component), _class.propTypes = {
  children: _propTypes2.default.node,
  circle: _propTypes2.default.bool,
  rounded: _propTypes2.default.bool,
  style: _propTypes2.default.object,
  transitionEnabled: _propTypes2.default.bool,
  zDepth: _propTypes4.default.zDepth
}, _class.defaultProps = {
  circle: false,
  rounded: true,
  transitionEnabled: true,
  zDepth: 1
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp);
exports.default = PaperWithArrow;