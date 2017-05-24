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

var _TransitionGroup = require('react-transition-group/TransitionGroup');

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

var _ExpandTransitionChild = require('./ExpandTransitionChild');

var _ExpandTransitionChild2 = _interopRequireDefault(_ExpandTransitionChild);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ExpandTransition = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(ExpandTransition, _Component);

  function ExpandTransition() {
    (0, _classCallCheck3.default)(this, ExpandTransition);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  ExpandTransition.prototype.renderChildren = function renderChildren(children) {
    var _props = this.props,
        enterDelay = _props.enterDelay,
        transitionDelay = _props.transitionDelay,
        transitionDuration = _props.transitionDuration;

    return _react2.default.Children.map(children, function (child) {
      return _react2.default.createElement(
        _ExpandTransitionChild2.default,
        {
          enterDelay: enterDelay,
          transitionDelay: transitionDelay,
          transitionDuration: transitionDuration,
          key: child.key
        },
        child
      );
    }, this);
  };

  ExpandTransition.prototype.render = function render() {
    var _props2 = this.props,
        children = _props2.children,
        enterDelay = _props2.enterDelay,
        loading = _props2.loading,
        open = _props2.open,
        style = _props2.style,
        transitionDelay = _props2.transitionDelay,
        transitionDuration = _props2.transitionDuration,
        other = (0, _objectWithoutProperties3.default)(_props2, ['children', 'enterDelay', 'loading', 'open', 'style', 'transitionDelay', 'transitionDuration']);
    var prepareStyles = this.context.muiTheme.prepareStyles;


    var mergedRootStyles = (0, _assign2.default)({}, {
      position: 'relative',
      overflow: 'hidden',
      height: 'auto'
    }, style);

    var newChildren = loading ? [] : this.renderChildren(children);

    return _react2.default.createElement(
      _TransitionGroup2.default,
      (0, _extends3.default)({
        style: prepareStyles(mergedRootStyles),
        component: 'div'
      }, other),
      open && newChildren
    );
  };

  return ExpandTransition;
}(_react.Component), _class.propTypes = {
  children: _propTypes2.default.node,
  enterDelay: _propTypes2.default.number,
  loading: _propTypes2.default.bool,
  open: _propTypes2.default.bool,
  style: _propTypes2.default.object,
  transitionDelay: _propTypes2.default.number,
  transitionDuration: _propTypes2.default.number
}, _class.defaultProps = {
  enterDelay: 0,
  transitionDelay: 0,
  transitionDuration: 450,
  loading: false,
  open: false
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp);
exports.default = ExpandTransition;