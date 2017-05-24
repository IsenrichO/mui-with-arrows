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

var _ExpandTransition = require('../internal/ExpandTransition');

var _ExpandTransition2 = _interopRequireDefault(_ExpandTransition);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ExpandTransition(props) {
  return _react2.default.createElement(_ExpandTransition2.default, props);
}

var getStyles = function getStyles(props, context) {
  var styles = {
    root: {
      marginTop: -14,
      marginLeft: 14 + 11, // padding + 1/2 icon
      paddingLeft: 24 - 11 + 8,
      paddingRight: 16,
      overflow: 'hidden'
    }
  };

  if (!props.last) {
    styles.root.borderLeft = '1px solid ' + context.muiTheme.stepper.connectorLineColor;
  }

  return styles;
};

var StepContent = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(StepContent, _Component);

  function StepContent() {
    (0, _classCallCheck3.default)(this, StepContent);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  StepContent.prototype.render = function render() {
    var _props = this.props,
        active = _props.active,
        children = _props.children,
        completed = _props.completed,
        last = _props.last,
        style = _props.style,
        transition = _props.transition,
        transitionDuration = _props.transitionDuration,
        other = (0, _objectWithoutProperties3.default)(_props, ['active', 'children', 'completed', 'last', 'style', 'transition', 'transitionDuration']);
    var _context = this.context,
        stepper = _context.stepper,
        prepareStyles = _context.muiTheme.prepareStyles;


    if (stepper.orientation !== 'vertical') {
      (0, _warning2.default)(false, 'Material-UI: <StepContent /> is only designed for use with the vertical stepper.');
      return null;
    }

    var styles = getStyles(this.props, this.context);
    var transitionProps = {
      enterDelay: transitionDuration,
      transitionDuration: transitionDuration,
      open: active
    };

    return _react2.default.createElement(
      'div',
      (0, _extends3.default)({ style: prepareStyles((0, _assign2.default)(styles.root, style)) }, other),
      _react2.default.createElement(transition, transitionProps, _react2.default.createElement(
        'div',
        { style: { overflow: 'hidden' } },
        children
      ))
    );
  };

  return StepContent;
}(_react.Component), _class.propTypes = {
  /**
   * Expands the content
   */
  active: _propTypes2.default.bool,
  /**
   * Step content
   */
  children: _propTypes2.default.node,
  /**
   * @ignore
   */
  completed: _propTypes2.default.bool,
  /**
   * @ignore
   */
  last: _propTypes2.default.bool,
  /**
   * Override the inline-style of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * ReactTransitionGroup component.
   */
  transition: _propTypes2.default.func,
  /**
   * Adjust the duration of the content expand transition. Passed as a prop to the transition component.
   */
  transitionDuration: _propTypes2.default.number
}, _class.defaultProps = {
  transition: ExpandTransition,
  transitionDuration: 450
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired,
  stepper: _propTypes2.default.object
}, _temp);
exports.default = StepContent;