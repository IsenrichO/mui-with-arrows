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

var _autoPrefix = require('../utils/autoPrefix');

var _autoPrefix2 = _interopRequireDefault(_autoPrefix);

var _transitions = require('../styles/transitions');

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getRelativeValue(value, min, max) {
  var clampedValue = Math.min(Math.max(min, value), max);
  return clampedValue / (max - min);
}

function getArcLength(fraction, props) {
  return fraction * Math.PI * (props.size - props.thickness);
}

function getStyles(props, context) {
  var max = props.max,
      min = props.min,
      size = props.size,
      value = props.value;
  var palette = context.muiTheme.baseTheme.palette;


  var styles = {
    root: {
      position: 'relative',
      display: 'inline-block',
      width: size,
      height: size
    },
    wrapper: {
      width: size,
      height: size,
      display: 'inline-block',
      transition: _transitions2.default.create('transform', '20s', null, 'linear'),
      transitionTimingFunction: 'linear'
    },
    svg: {
      width: size,
      height: size,
      position: 'relative'
    },
    path: {
      stroke: props.color || palette.primary1Color,
      strokeLinecap: 'round',
      transition: _transitions2.default.create('all', '1.5s', null, 'ease-in-out')
    }
  };

  if (props.mode === 'determinate') {
    var relVal = getRelativeValue(value, min, max);
    styles.path.transition = _transitions2.default.create('all', '0.3s', null, 'linear');
    styles.path.strokeDasharray = getArcLength(relVal, props) + ', ' + getArcLength(1, props);
  }

  return styles;
}

var CircularProgress = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(CircularProgress, _Component);

  function CircularProgress() {
    (0, _classCallCheck3.default)(this, CircularProgress);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  CircularProgress.prototype.componentDidMount = function componentDidMount() {
    this.scalePath(this.refs.path);
    this.rotateWrapper(this.refs.wrapper);
  };

  CircularProgress.prototype.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.scalePathTimer);
    clearTimeout(this.rotateWrapperTimer);
  };

  CircularProgress.prototype.scalePath = function scalePath(path) {
    var _this2 = this;

    var step = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    if (this.props.mode !== 'indeterminate') return;

    step %= 3;

    if (step === 0) {
      path.style.strokeDasharray = getArcLength(0, this.props) + ', ' + getArcLength(1, this.props);
      path.style.strokeDashoffset = 0;
      path.style.transitionDuration = '0ms';
    } else if (step === 1) {
      path.style.strokeDasharray = getArcLength(0.7, this.props) + ', ' + getArcLength(1, this.props);
      path.style.strokeDashoffset = getArcLength(-0.3, this.props);
      path.style.transitionDuration = '750ms';
    } else {
      path.style.strokeDasharray = getArcLength(0.7, this.props) + ', ' + getArcLength(1, this.props);
      path.style.strokeDashoffset = getArcLength(-1, this.props);
      path.style.transitionDuration = '850ms';
    }

    this.scalePathTimer = setTimeout(function () {
      return _this2.scalePath(path, step + 1);
    }, step ? 750 : 250);
  };

  CircularProgress.prototype.rotateWrapper = function rotateWrapper(wrapper) {
    var _this3 = this;

    if (this.props.mode !== 'indeterminate') return;

    _autoPrefix2.default.set(wrapper.style, 'transform', 'rotate(0deg)');
    _autoPrefix2.default.set(wrapper.style, 'transitionDuration', '0ms');

    setTimeout(function () {
      _autoPrefix2.default.set(wrapper.style, 'transform', 'rotate(1800deg)');
      _autoPrefix2.default.set(wrapper.style, 'transitionDuration', '10s');
      _autoPrefix2.default.set(wrapper.style, 'transitionTimingFunction', 'linear');
    }, 50);

    this.rotateWrapperTimer = setTimeout(function () {
      return _this3.rotateWrapper(wrapper);
    }, 10050);
  };

  CircularProgress.prototype.render = function render() {
    var _props = this.props,
        style = _props.style,
        innerStyle = _props.innerStyle,
        size = _props.size,
        thickness = _props.thickness,
        other = (0, _objectWithoutProperties3.default)(_props, ['style', 'innerStyle', 'size', 'thickness']);
    var prepareStyles = this.context.muiTheme.prepareStyles;

    var styles = getStyles(this.props, this.context);

    return _react2.default.createElement(
      'div',
      (0, _extends3.default)({}, other, { style: prepareStyles((0, _assign2.default)(styles.root, style)) }),
      _react2.default.createElement(
        'div',
        { ref: 'wrapper', style: prepareStyles((0, _assign2.default)(styles.wrapper, innerStyle)) },
        _react2.default.createElement(
          'svg',
          {
            viewBox: '0 0 ' + size + ' ' + size,
            style: prepareStyles(styles.svg)
          },
          _react2.default.createElement('circle', {
            ref: 'path',
            style: prepareStyles(styles.path),
            cx: size / 2,
            cy: size / 2,
            r: (size - thickness) / 2,
            fill: 'none',
            strokeWidth: thickness,
            strokeMiterlimit: '20'
          })
        )
      )
    );
  };

  return CircularProgress;
}(_react.Component), _class.propTypes = {
  /**
   * Override the progress's color.
   */
  color: _propTypes2.default.string,
  /**
   * Style for inner wrapper div.
   */
  innerStyle: _propTypes2.default.object,
  /**
   * The max value of progress, only works in determinate mode.
   */
  max: _propTypes2.default.number,
  /**
   * The min value of progress, only works in determinate mode.
   */
  min: _propTypes2.default.number,
  /**
   * The mode of show your progress, indeterminate
   * for when there is no value for progress.
   */
  mode: _propTypes2.default.oneOf(['determinate', 'indeterminate']),
  /**
   * The diameter of the progress in pixels.
   */
  size: _propTypes2.default.number,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * Stroke width in pixels.
   */
  thickness: _propTypes2.default.number,
  /**
   * The value of progress, only works in determinate mode.
   */
  value: _propTypes2.default.number
}, _class.defaultProps = {
  mode: 'indeterminate',
  value: 0,
  min: 0,
  max: 100,
  size: 40,
  thickness: 3.5
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp);
exports.default = CircularProgress;