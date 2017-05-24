'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _propTypes3 = require('../utils/propTypes');

var _propTypes4 = _interopRequireDefault(_propTypes3);

var _transitions = require('../styles/transitions');

var _transitions2 = _interopRequireDefault(_transitions);

var _Paper = require('../Paper');

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context, state) {
  var targetOrigin = props.targetOrigin;
  var open = state.open;
  var muiTheme = context.muiTheme;

  var horizontal = targetOrigin.horizontal.replace('middle', 'vertical');

  return {
    root: {
      position: 'fixed',
      zIndex: muiTheme.zIndex.popover,
      opacity: open ? 1 : 0,
      transform: open ? 'scaleY(1)' : 'scaleY(0)',
      transformOrigin: horizontal + ' ' + targetOrigin.vertical,
      transition: _transitions2.default.easeOut('450ms', ['transform', 'opacity']),
      maxHeight: '100%'
    }
  };
}

var PopoverAnimationVertical = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(PopoverAnimationVertical, _Component);

  function PopoverAnimationVertical() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, PopoverAnimationVertical);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      open: false
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  PopoverAnimationVertical.prototype.componentDidMount = function componentDidMount() {
    var open = true;
    this.setState({ open: open });
  };

  PopoverAnimationVertical.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var open = nextProps.open;

    this.setState({ open: open });
  };

  PopoverAnimationVertical.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        style = _props.style,
        zDepth = _props.zDepth;
    var prepareStyles = this.context.muiTheme.prepareStyles;

    var styles = getStyles(this.props, this.context, this.state);

    return _react2.default.createElement(
      _Paper2.default,
      {
        style: (0, _assign2.default)(styles.root, style),
        zDepth: zDepth,
        className: className
      },
      this.props.children
    );
  };

  return PopoverAnimationVertical;
}(_react.Component), _class.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  open: _propTypes2.default.bool.isRequired,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  targetOrigin: _propTypes4.default.origin.isRequired,
  zDepth: _propTypes4.default.zDepth
}, _class.defaultProps = {
  style: {},
  zDepth: 1
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = PopoverAnimationVertical;