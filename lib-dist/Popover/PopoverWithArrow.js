'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

var _reactEventListener = require('react-event-listener');

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _RenderToLayer = require('../internal/RenderToLayer');

var _RenderToLayer2 = _interopRequireDefault(_RenderToLayer);

var _propTypes3 = require('../utils/propTypes');

var _propTypes4 = _interopRequireDefault(_propTypes3);

var _Paper = require('../Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _lodash = require('lodash.throttle');

var _lodash2 = _interopRequireDefault(_lodash);

var _PaperWithArrow = require('../Paper/PaperWithArrow');

var _PaperWithArrow2 = _interopRequireDefault(_PaperWithArrow);

var _PopoverAnimationDefault = require('./PopoverAnimationDefault');

var _PopoverAnimationDefault2 = _interopRequireDefault(_PopoverAnimationDefault);

var _iOSHelpers = require('../utils/iOSHelpers');

var _Arrow = require('../Arrow');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  root: {
    display: 'none'
  }
};

var PopoverDefault = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(PopoverDefault, _Component);

  function PopoverDefault(props, context) {
    (0, _classCallCheck3.default)(this, PopoverDefault);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props, context));

    _this.timeout = null;

    _this.renderLayer = function () {
      var _this$props = _this.props,
          arrow = _this$props.arrow,
          arrowStyle = _this$props.arrowStyle,
          animated = _this$props.animated,
          animation = _this$props.animation,
          anchorEl = _this$props.anchorEl,
          anchorOrigin = _this$props.anchorOrigin,
          autoCloseWhenOffScreen = _this$props.autoCloseWhenOffScreen,
          canAutoPosition = _this$props.canAutoPosition,
          children = _this$props.children,
          onRequestClose = _this$props.onRequestClose,
          style = _this$props.style,
          targetOrigin = _this$props.targetOrigin,
          useLayerForClickAway = _this$props.useLayerForClickAway,
          other = (0, _objectWithoutProperties3.default)(_this$props, ['arrow', 'arrowStyle', 'animated', 'animation', 'anchorEl', 'anchorOrigin', 'autoCloseWhenOffScreen', 'canAutoPosition', 'children', 'onRequestClose', 'style', 'targetOrigin', 'useLayerForClickAway']);


      var styleRoot = style;

      if (!animated) {
        styleRoot = {
          position: 'fixed',
          zIndex: _this.context.muiTheme.zIndex.popover
        };

        if (!_this.state.open) return null;

        return _react2.default.createElement(
          _PaperWithArrow2.default,
          (0, _extends3.default)({}, other, {
            arrow: arrow,
            style: (0, _assign2.default)(styleRoot, style)
          }),
          children
        );
      }

      var Animation = animation || _PopoverAnimationDefault2.default;

      return _react2.default.createElement(
        Animation,
        (0, _extends3.default)({}, other, {
          arrow: arrow,
          style: styleRoot,
          targetOrigin: targetOrigin,
          open: _this.state.open && !_this.state.closing
        }),
        children
      );
    };

    _this.componentClickAway = function (event) {
      event.preventDefault();
      _this.requestClose('clickAway');
    };

    _this.setPlacement = function (scrolling) {
      if (!_this.state.open) return;
      if (!_this.refs.layer.getLayer()) return;

      var targetEl = _this.refs.layer.getLayer().children[0];

      if (!targetEl) return;

      var _this$props2 = _this.props,
          targetOrigin = _this$props2.targetOrigin,
          anchorOrigin = _this$props2.anchorOrigin;

      var anchorEl = _this.props.anchorEl || _this.anchorEl;
      var arrowEl = targetEl.querySelector('[class^="paper-arrow"]');
      console.log('ARROW ELEMENT:', arrowEl);

      var anchor = _this.getAnchorPosition(anchorEl);
      var target = _this.getTargetPosition(targetEl);

      var targetPosition = {
        top: anchor[anchorOrigin.vertical] - target[targetOrigin.vertical],
        left: anchor[anchorOrigin.horizontal] - target[targetOrigin.horizontal]
      };

      if (scrolling && _this.props.autoCloseWhenOffScreen) {
        _this.autoCloseWhenOffScreen(anchor);
      }

      if (_this.props.canAutoPosition) {
        target = _this.getTargetPosition(targetEl); // Update as height may have changed
        targetPosition = _this.applyAutoPositionIfNeeded(anchor, target, targetOrigin, anchorOrigin, targetPosition);
      }

      targetEl.style.top = Math.max(0, targetPosition.top) + 'px';
      targetEl.style.left = Math.max(0, targetPosition.left) + 'px';
      targetEl.style.maxHeight = window.innerHeight + 'px';

      if (window.innerHeight - anchor.top > target.bottom) {
        arrowEl.style.top = anchor.height / 2 - 7 + 'px';
        arrowEl.style.bottom = 'auto';
      } else if (window.innerHeight - anchor.top < target.bottom) {
        arrowEl.style.top = 'auto';
        arrowEl.style.bottom = anchor.height / 2 - 7 + 'px';
      } else {
        arrowEl.style.display = 'none';
      }
    };

    _this.handleResize = (0, _lodash2.default)(_this.setPlacement, 100);
    _this.handleScroll = (0, _lodash2.default)(_this.setPlacement.bind(_this, true), 50);

    _this.state = {
      open: props.open,
      closing: false
    };
    return _this;
  }

  PopoverDefault.prototype.componentDidMount = function componentDidMount() {
    this.setPlacement();
  };

  PopoverDefault.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this2 = this;

    if (nextProps.open === this.props.open) return;

    if (nextProps.open) {
      clearTimeout(this.timeout);
      this.timeout = null;
      this.anchorEl = nextProps.anchorEl || this.props.anchorEl;
      this.setState({
        open: true,
        closing: false
      });
    } else {
      var open = false,
          closing = true;


      if (nextProps.animated) {
        if (this.timeout !== null) return;
        this.setState({ closing: closing });
        this.timeout = setTimeout(function () {
          _this2.setState({ open: open }, function () {
            _this2.timeout = null;
          });
        }, 500);
      } else {
        this.setState({ open: open });
      }
    }
  };

  PopoverDefault.prototype.componentDidUpdate = function componentDidUpdate() {
    this.setPlacement();
  };

  PopoverDefault.prototype.componentWillUnmount = function componentWillUnmount() {
    this.handleResize.cancel();
    this.handleScroll.cancel();

    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
  };

  PopoverDefault.prototype.requestClose = function requestClose(reason) {
    if (this.props.onRequestClose) {
      this.props.onRequestClose(reason);
    }
  };

  PopoverDefault.prototype.getAnchorPosition = function getAnchorPosition(el) {
    if (!el) {
      el = _reactDom2.default.findDOMNode(this);
    }

    var rect = el.getBoundingClientRect();
    var a = {
      top: rect.top,
      left: rect.left,
      width: el.offsetWidth,
      height: el.offsetHeight
    };

    a.right = rect.right || a.left + a.width;

    // The fixed positioning isn't respected on iOS when an input is focused.
    // We need to compute the position from the top of the page and not the viewport.
    a.bottom = (0, _iOSHelpers.isIOS)() && document.activeElement.tagName === 'INPUT' ? (0, _iOSHelpers.getOffsetTop)(el) + a.height : rect.bottom || a.top + a.height;
    a.middle = a.left + (a.right - a.left) / 2;
    a.center = a.top + (a.bottom - a.top) / 2;

    return a;
  };

  PopoverDefault.prototype.getTargetPosition = function getTargetPosition(targetEl) {
    return {
      top: 0,
      center: targetEl.offsetHeight / 2,
      bottom: targetEl.offsetHeight,
      left: 0,
      middle: targetEl.offsetWidth / 2,
      right: targetEl.offsetWidth
    };
  };

  PopoverDefault.prototype.autoCloseWhenOffScreen = function autoCloseWhenOffScreen(anchorPosition) {
    if (anchorPosition.top < 0 || anchorPosition.top > window.innerHeight || anchorPosition.left < 0 || anchorPosition.left > window.innerWidth) {
      this.requestClose('offScreen');
    }
  };

  PopoverDefault.prototype.getOverlapMode = function getOverlapMode(anchor, target, median) {
    if ([anchor, target].indexOf(median) >= 0) return 'auto';
    if (anchor === target) return 'inclusive';
    return 'exclusive';
  };

  PopoverDefault.prototype.getPositions = function getPositions(anchor, target) {
    var a = (0, _extends3.default)({}, anchor);
    var t = (0, _extends3.default)({}, target);

    var positions = {
      x: ['left', 'right'].filter(function (p) {
        return p !== t.horizontal;
      }),
      y: ['top', 'bottom'].filter(function (p) {
        return p !== t.vertical;
      })
    };

    var overlap = {
      x: this.getOverlapMode(a.horizontal, t.horizontal, 'middle'),
      y: this.getOverlapMode(a.vertical, t.vertical, 'center')
    };

    positions.x.splice(overlap.x === 'auto' ? 0 : 1, 0, 'middle');
    positions.y.splice(overlap.y === 'auto' ? 0 : 1, 0, 'center');

    if (overlap.y !== 'auto') {
      a.vertical = a.vertical === 'top' ? 'bottom' : 'top';
      if (overlap.y === 'inclusive') {
        t.vertical = t.vertical;
      }
    }

    if (overlap.x !== 'auto') {
      a.horizontal = a.horizontal === 'left' ? 'right' : 'left';
      if (overlap.y === 'inclusive') {
        t.horizontal = t.horizontal;
      }
    }

    return {
      positions: positions,
      anchorPos: a
    };
  };

  PopoverDefault.prototype.applyAutoPositionIfNeeded = function applyAutoPositionIfNeeded(anchor, target, targetOrigin, anchorOrigin, targetPosition) {
    var _getPositions = this.getPositions(anchorOrigin, targetOrigin),
        positions = _getPositions.positions,
        anchorPos = _getPositions.anchorPos;

    if (targetPosition.top < 0 || targetPosition.top + target.bottom > window.innerHeight) {
      var newTop = anchor[anchorPos.vertical] - target[positions.y[0]];
      if (newTop + target.bottom <= window.innerHeight) {
        targetPosition.top = Math.max(0, newTop);
      } else {
        newTop = anchor[anchorPos.vertical] - target[positions.y[1]];
        if (newTop + target.bottom <= window.innerHeight) {
          targetPosition.top = Math.max(0, newTop);
        }
      }
    }

    if (targetPosition.left < 0 || targetPosition.left + target.right > window.innerWidth) {
      var newLeft = anchor[anchorPos.horizontal] - target[positions.x[0]];
      if (newLeft + target.right <= window.innerWidth) {
        targetPosition.left = Math.max(0, newLeft);
      } else {
        newLeft = anchor[anchorPos.horizontal] - target[positions.x[1]];
        if (newLeft + target.right <= window.innerWidth) {
          targetPosition.left = Math.max(0, newLeft);
        }
      }
    }

    return targetPosition;
  };

  PopoverDefault.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      { style: styles.root },
      _react2.default.createElement(_reactEventListener2.default, {
        target: 'window',
        onScroll: this.handleScroll,
        onResize: this.handleResize
      }),
      _react2.default.createElement(_RenderToLayer2.default, {
        ref: 'layer',
        open: this.state.open,
        componentClickAway: this.componentClickAway,
        useLayerForClickAway: this.props.useLayerForClickAway,
        render: this.renderLayer
      })
    );
  };

  return PopoverDefault;
}(_react.Component), _class.propTypes = {
  arrow: _propTypes2.default.bool,
  arrowPos: _propTypes2.default.string,
  arrowStyle: _propTypes2.default.object,
  anchorEl: _propTypes2.default.object,
  anchorOrigin: _propTypes4.default.origin,
  animated: _propTypes2.default.bool,
  animation: _propTypes2.default.func,
  autoCloseWhenOffScreen: _propTypes2.default.bool,
  canAutoPosition: _propTypes2.default.bool,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  onRequestClose: _propTypes2.default.func,
  open: _propTypes2.default.bool,
  style: _propTypes2.default.object,
  targetOrigin: _propTypes4.default.origin,
  useLayerForClickAway: _propTypes2.default.bool,
  zDepth: _propTypes4.default.zDepth
}, _class.defaultProps = {
  arrow: true,
  arrowPos: 'left',
  arrowStyle: {}, // ArrowStyles
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left'
  },
  animated: true,
  autoCloseWhenOffScreen: true,
  canAutoPosition: true,
  onRequestClose: function onRequestClose() {},
  open: false,
  style: {
    overflowY: 'auto'
  },
  targetOrigin: {
    vertical: 'top',
    horizontal: 'left'
  },
  useLayerForClickAway: true,
  zDepth: 1
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp);

// <div
//   className="paper-arrow"
//   style={prepareStyles(ArrowStyles)}
//   // style={ArrowStyles}
// />

exports.default = PopoverDefault;