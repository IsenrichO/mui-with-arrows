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

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _shallowEqual = require('recompose/shallowEqual');

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _autoPrefix = require('../utils/autoPrefix');

var _autoPrefix2 = _interopRequireDefault(_autoPrefix);

var _transitions = require('../styles/transitions');

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CircleRipple = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(CircleRipple, _Component);

  function CircleRipple() {
    (0, _classCallCheck3.default)(this, CircleRipple);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  CircleRipple.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return !(0, _shallowEqual2.default)(this.props, nextProps);
  };

  CircleRipple.prototype.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.enterTimer);
    clearTimeout(this.leaveTimer);
  };

  CircleRipple.prototype.componentWillAppear = function componentWillAppear(callback) {
    this.initializeAnimation(callback);
  };

  CircleRipple.prototype.componentWillEnter = function componentWillEnter(callback) {
    this.initializeAnimation(callback);
  };

  CircleRipple.prototype.componentDidAppear = function componentDidAppear() {
    this.animate();
  };

  CircleRipple.prototype.componentDidEnter = function componentDidEnter() {
    this.animate();
  };

  CircleRipple.prototype.componentWillLeave = function componentWillLeave(callback) {
    var style = _reactDom2.default.findDOMNode(this).style;
    style.opacity = 0;
    // If the animation is aborted, remove from the DOM immediately
    var removeAfter = this.props.aborted ? 0 : 2000;
    this.enterTimer = setTimeout(callback, removeAfter);
  };

  CircleRipple.prototype.animate = function animate() {
    var style = _reactDom2.default.findDOMNode(this).style;
    var transitionValue = _transitions2.default.easeOut('2s', 'opacity') + ', ' + _transitions2.default.easeOut('1s', 'transform');
    _autoPrefix2.default.set(style, 'transition', transitionValue);
    _autoPrefix2.default.set(style, 'transform', 'scale(1)');
  };

  CircleRipple.prototype.initializeAnimation = function initializeAnimation(callback) {
    var style = _reactDom2.default.findDOMNode(this).style;
    style.opacity = this.props.opacity;
    _autoPrefix2.default.set(style, 'transform', 'scale(0)');
    this.leaveTimer = setTimeout(callback, 0);
  };

  CircleRipple.prototype.render = function render() {
    var _props = this.props,
        aborted = _props.aborted,
        color = _props.color,
        opacity = _props.opacity,
        style = _props.style,
        touchGenerated = _props.touchGenerated,
        other = (0, _objectWithoutProperties3.default)(_props, ['aborted', 'color', 'opacity', 'style', 'touchGenerated']);
    var prepareStyles = this.context.muiTheme.prepareStyles;


    var mergedStyles = (0, _assign2.default)({
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      borderRadius: '50%',
      backgroundColor: color
    }, style);

    return _react2.default.createElement('div', (0, _extends3.default)({}, other, { style: prepareStyles(mergedStyles) }));
  };

  return CircleRipple;
}(_react.Component), _class.propTypes = {
  aborted: _propTypes2.default.bool,
  color: _propTypes2.default.string,
  opacity: _propTypes2.default.number,
  style: _propTypes2.default.object,
  touchGenerated: _propTypes2.default.bool
}, _class.defaultProps = {
  opacity: 0.1,
  aborted: false
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp);
exports.default = CircleRipple;