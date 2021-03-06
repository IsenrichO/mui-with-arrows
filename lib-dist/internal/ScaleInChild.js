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

var _autoPrefix = require('../utils/autoPrefix');

var _autoPrefix2 = _interopRequireDefault(_autoPrefix);

var _transitions = require('../styles/transitions');

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ScaleInChild = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(ScaleInChild, _Component);

  function ScaleInChild() {
    (0, _classCallCheck3.default)(this, ScaleInChild);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  ScaleInChild.prototype.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.enterTimer);
    clearTimeout(this.leaveTimer);
  };

  ScaleInChild.prototype.componentWillAppear = function componentWillAppear(callback) {
    this.initializeAnimation(callback);
  };

  ScaleInChild.prototype.componentWillEnter = function componentWillEnter(callback) {
    this.initializeAnimation(callback);
  };

  ScaleInChild.prototype.componentDidAppear = function componentDidAppear() {
    this.animate();
  };

  ScaleInChild.prototype.componentDidEnter = function componentDidEnter() {
    this.animate();
  };

  ScaleInChild.prototype.componentWillLeave = function componentWillLeave(callback) {
    var style = _reactDom2.default.findDOMNode(this).style;

    style.opacity = '0';
    _autoPrefix2.default.set(style, 'transform', 'scale(' + this.props.minScale + ')');

    this.leaveTimer = setTimeout(callback, 450);
  };

  ScaleInChild.prototype.animate = function animate() {
    var style = _reactDom2.default.findDOMNode(this).style;

    style.opacity = '1';
    _autoPrefix2.default.set(style, 'transform', 'scale(' + this.props.maxScale + ')');
  };

  ScaleInChild.prototype.initializeAnimation = function initializeAnimation(callback) {
    var style = _reactDom2.default.findDOMNode(this).style;

    style.opacity = '0';
    _autoPrefix2.default.set(style, 'transform', 'scale(0)');

    this.enterTimer = setTimeout(callback, this.props.enterDelay);
  };

  ScaleInChild.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        enterDelay = _props.enterDelay,
        maxScale = _props.maxScale,
        minScale = _props.minScale,
        style = _props.style,
        other = (0, _objectWithoutProperties3.default)(_props, ['children', 'enterDelay', 'maxScale', 'minScale', 'style']);
    var prepareStyles = this.context.muiTheme.prepareStyles;


    var mergedRootStyles = (0, _assign2.default)({}, {
      position: 'absolute',
      height: '100%',
      width: '100%',
      top: 0,
      left: 0,
      transition: _transitions2.default.easeOut(null, ['transform', 'opacity'])
    }, style);

    return _react2.default.createElement(
      'div',
      (0, _extends3.default)({}, other, { style: prepareStyles(mergedRootStyles) }),
      children
    );
  };

  return ScaleInChild;
}(_react.Component), _class.propTypes = {
  children: _propTypes2.default.node,
  enterDelay: _propTypes2.default.number,
  maxScale: _propTypes2.default.number,
  minScale: _propTypes2.default.number,
  style: _propTypes2.default.object
}, _class.defaultProps = {
  enterDelay: 0,
  maxScale: 1,
  minScale: 0
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp);
exports.default = ScaleInChild;