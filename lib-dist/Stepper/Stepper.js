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

var _StepConnector = require('./StepConnector');

var _StepConnector2 = _interopRequireDefault(_StepConnector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getStyles = function getStyles(props) {
  var orientation = props.orientation;

  return {
    root: {
      display: 'flex',
      flexDirection: orientation === 'horizontal' ? 'row' : 'column',
      alignContent: 'center',
      alignItems: orientation === 'horizontal' ? 'center' : 'stretch',
      justifyContent: 'space-between'
    }
  };
};

var Stepper = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(Stepper, _Component);

  function Stepper() {
    (0, _classCallCheck3.default)(this, Stepper);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  Stepper.prototype.getChildContext = function getChildContext() {
    var orientation = this.props.orientation;

    return { stepper: { orientation: orientation } };
  };

  Stepper.prototype.render = function render() {
    var _props = this.props,
        activeStep = _props.activeStep,
        children = _props.children,
        connector = _props.connector,
        linear = _props.linear,
        style = _props.style;
    var prepareStyles = this.context.muiTheme.prepareStyles;

    var styles = getStyles(this.props, this.context);

    /**
     * One day, we may be able to use real CSS tools
     * For now, we need to create our own "pseudo" elements
     * and nth child selectors, etc
     * That's what some of this garbage is for :)
     */
    var numChildren = _react.Children.count(children);
    var steps = _react.Children.map(children, function (step, index) {
      var controlProps = { index: index };

      if (activeStep === index) {
        controlProps.active = true;
      } else if (linear && activeStep > index) {
        controlProps.completed = true;
      } else if (linear && activeStep < index) {
        controlProps.disabled = true;
      }

      if (index + 1 === numChildren) {
        controlProps.last = true;
      }

      return [index > 0 && connector, _react2.default.cloneElement(step, (0, _assign2.default)(controlProps, step.props))];
    });

    return _react2.default.createElement(
      'div',
      { style: prepareStyles((0, _assign2.default)(styles.root, style)) },
      steps
    );
  };

  return Stepper;
}(_react.Component), _class.propTypes = {
  /**
   * Set the active step (zero based index). This will enable `Step` control helpers.
   */
  activeStep: _propTypes2.default.number,
  /**
   * Should be two or more `<Step />` components.
   */
  children: _propTypes2.default.node,
  /**
   * A component to be placed between each step.
   */
  connector: _propTypes2.default.node,
  /**
   * If set to `true`, the `Stepper` will assist in controlling steps for linear flow
   */
  linear: _propTypes2.default.bool,
  /**
   * The stepper orientation (layout flow direction)
   */
  orientation: _propTypes2.default.oneOf(['horizontal', 'vertical']),
  /**
   * Override the inline-style of the root element.
   */
  style: _propTypes2.default.object
}, _class.defaultProps = {
  connector: _react2.default.createElement(_StepConnector2.default, null),
  orientation: 'horizontal',
  linear: true
}, _class.contextTypes = { muiTheme: _propTypes2.default.object.isRequired }, _class.childContextTypes = { stepper: _propTypes2.default.object }, _temp);
exports.default = Stepper;