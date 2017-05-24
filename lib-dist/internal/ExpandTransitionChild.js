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

var _transitions = require('../styles/transitions');

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reflow = function reflow(elem) {
  return elem.offsetHeight;
};

var ExpandTransitionChild = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(ExpandTransitionChild, _Component);

  function ExpandTransitionChild() {
    (0, _classCallCheck3.default)(this, ExpandTransitionChild);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  ExpandTransitionChild.prototype.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.enterTimer);
    clearTimeout(this.enteredTimer);
    clearTimeout(this.leaveTimer);
  };

  ExpandTransitionChild.prototype.componentWillAppear = function componentWillAppear(callback) {
    this.open();
    callback();
  };

  ExpandTransitionChild.prototype.componentDidAppear = function componentDidAppear() {
    this.setAutoHeight();
  };

  ExpandTransitionChild.prototype.componentWillEnter = function componentWillEnter(callback) {
    var _this2 = this;

    var _props = this.props,
        enterDelay = _props.enterDelay,
        transitionDelay = _props.transitionDelay,
        transitionDuration = _props.transitionDuration;

    var element = _reactDom2.default.findDOMNode(this);
    element.style.height = 0;
    this.enterTimer = setTimeout(function () {
      return _this2.open();
    }, enterDelay);
    this.enteredTimer = setTimeout(function () {
      return callback();
    }, enterDelay + transitionDelay + transitionDuration);
  };

  ExpandTransitionChild.prototype.componentDidEnter = function componentDidEnter() {
    this.setAutoHeight();
  };

  ExpandTransitionChild.prototype.componentWillLeave = function componentWillLeave(callback) {
    var _props2 = this.props,
        transitionDelay = _props2.transitionDelay,
        transitionDuration = _props2.transitionDuration;

    var element = _reactDom2.default.findDOMNode(this);
    // Set fixed height first for animated property value
    element.style.height = this.refs.wrapper.clientHeight + 'px';
    reflow(element);
    element.style.transitionDuration = transitionDuration + 'ms';
    element.style.height = 0;
    this.leaveTimer = setTimeout(function () {
      return callback();
    }, transitionDelay + transitionDuration);
  };

  ExpandTransitionChild.prototype.setAutoHeight = function setAutoHeight() {
    var _ReactDOM$findDOMNode = _reactDom2.default.findDOMNode(this),
        style = _ReactDOM$findDOMNode.style;

    style.transitionDuration = 0;
    style.height = 'auto';
  };

  ExpandTransitionChild.prototype.open = function open() {
    var element = _reactDom2.default.findDOMNode(this);
    element.style.height = this.refs.wrapper.clientHeight + 'px';
  };

  ExpandTransitionChild.prototype.render = function render() {
    var _props3 = this.props,
        children = _props3.children,
        enterDelay = _props3.enterDelay,
        style = _props3.style,
        transitionDelay = _props3.transitionDelay,
        transitionDuration = _props3.transitionDuration,
        other = (0, _objectWithoutProperties3.default)(_props3, ['children', 'enterDelay', 'style', 'transitionDelay', 'transitionDuration']);
    var prepareStyles = this.context.muiTheme.prepareStyles;


    var mergedRootStyles = (0, _assign2.default)({
      position: 'relative',
      height: 0,
      width: '100%',
      top: 0,
      left: 0,
      overflow: 'hidden',
      transition: _transitions2.default.easeOut(transitionDuration + 'ms', ['height'], transitionDelay + 'ms')
    }, style);

    return _react2.default.createElement(
      'div',
      (0, _extends3.default)({}, other, { style: prepareStyles(mergedRootStyles) }),
      _react2.default.createElement(
        'div',
        { ref: 'wrapper' },
        children
      )
    );
  };

  return ExpandTransitionChild;
}(_react.Component), _class.propTypes = {
  children: _propTypes2.default.node,
  enterDelay: _propTypes2.default.number,
  style: _propTypes2.default.object,
  transitionDelay: _propTypes2.default.number,
  transitionDuration: _propTypes2.default.number
}, _class.defaultProps = {
  enterDelay: 0,
  transitionDelay: 0,
  transitionDuration: 450
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp);
exports.default = ExpandTransitionChild;