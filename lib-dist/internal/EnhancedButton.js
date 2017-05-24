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

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _events = require('../utils/events');

var _events2 = _interopRequireDefault(_events);

var _keycode = require('keycode');

var _keycode2 = _interopRequireDefault(_keycode);

var _FocusRipple = require('./FocusRipple');

var _FocusRipple2 = _interopRequireDefault(_FocusRipple);

var _TouchRipple = require('./TouchRipple');

var _TouchRipple2 = _interopRequireDefault(_TouchRipple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleInjected = false;
var listening = false;
var tabPressed = false;

function injectStyle() {
  if (!styleInjected) {
    // Remove inner padding and border in Firefox 4+.
    var style = document.createElement('style');
    style.innerHTML = '\n      button::-moz-focus-inner,\n      input::-moz-focus-inner {\n        border: 0;\n        padding: 0;\n      }\n    ';

    document.body.appendChild(style);
    styleInjected = true;
  }
}

function listenForTabPresses() {
  if (!listening) {
    _events2.default.on(window, 'keydown', function (event) {
      tabPressed = (0, _keycode2.default)(event) === 'tab';
    });
    listening = true;
  }
}

var EnhancedButton = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(EnhancedButton, _Component);

  function EnhancedButton() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, EnhancedButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      isKeyboardFocused: false
    }, _this.handleKeyDown = function (event) {
      if (!_this.props.disabled && !_this.props.disableKeyboardFocus) {
        if ((0, _keycode2.default)(event) === 'enter' && _this.state.isKeyboardFocused) {
          _this.handleTouchTap(event);
        }
        if ((0, _keycode2.default)(event) === 'esc' && _this.state.isKeyboardFocused) {
          _this.removeKeyboardFocus(event);
        }
      }
      _this.props.onKeyDown(event);
    }, _this.handleKeyUp = function (event) {
      if (!_this.props.disabled && !_this.props.disableKeyboardFocus) {
        if ((0, _keycode2.default)(event) === 'space' && _this.state.isKeyboardFocused) {
          _this.handleTouchTap(event);
        }
      }
      _this.props.onKeyUp(event);
    }, _this.handleBlur = function (event) {
      _this.cancelFocusTimeout();
      _this.removeKeyboardFocus(event);
      _this.props.onBlur(event);
    }, _this.handleFocus = function (event) {
      if (event) event.persist();
      if (!_this.props.disabled && !_this.props.disableKeyboardFocus) {
        // setTimeout is needed because the focus event fires first
        // Wait so that we can capture if this was a keyboard focus
        // or touch focus
        _this.focusTimeout = setTimeout(function () {
          if (tabPressed) {
            _this.setKeyboardFocus(event);
            tabPressed = false;
          }
        }, 150);

        _this.props.onFocus(event);
      }
    }, _this.handleClick = function (event) {
      if (!_this.props.disabled) {
        tabPressed = false;
        _this.props.onClick(event);
      }
    }, _this.handleTouchTap = function (event) {
      _this.cancelFocusTimeout();
      if (!_this.props.disabled) {
        tabPressed = false;
        _this.removeKeyboardFocus(event);
        _this.props.onTouchTap(event);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  EnhancedButton.prototype.componentWillMount = function componentWillMount() {
    var _props = this.props,
        disabled = _props.disabled,
        disableKeyboardFocus = _props.disableKeyboardFocus,
        keyboardFocused = _props.keyboardFocused;

    if (!disabled && keyboardFocused && !disableKeyboardFocus) {
      this.setState({ isKeyboardFocused: true });
    }
  };

  EnhancedButton.prototype.componentDidMount = function componentDidMount() {
    injectStyle();
    listenForTabPresses();
    if (this.state.isKeyboardFocused) {
      this.button.focus();
      this.props.onKeyboardFocus(null, true);
    }
  };

  EnhancedButton.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if ((nextProps.disabled || nextProps.disableKeyboardFocus) && this.state.isKeyboardFocused) {
      this.setState({ isKeyboardFocused: false });
      if (nextProps.onKeyboardFocus) {
        nextProps.onKeyboardFocus(null, false);
      }
    }
  };

  EnhancedButton.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.focusTimeout) {
      clearTimeout(this.focusTimeout);
    }
  };

  EnhancedButton.prototype.isKeyboardFocused = function isKeyboardFocused() {
    return this.state.isKeyboardFocused;
  };

  EnhancedButton.prototype.removeKeyboardFocus = function removeKeyboardFocus(event) {
    if (this.state.isKeyboardFocused) {
      this.setState({ isKeyboardFocused: false });
      this.props.onKeyboardFocus(event, false);
    }
  };

  EnhancedButton.prototype.setKeyboardFocus = function setKeyboardFocus(event) {
    if (!this.state.isKeyboardFocused) {
      this.setState({ isKeyboardFocused: true });
      this.props.onKeyboardFocus(event, true);
    }
  };

  EnhancedButton.prototype.cancelFocusTimeout = function cancelFocusTimeout() {
    if (this.focusTimeout) {
      clearTimeout(this.focusTimeout);
      this.focusTimeout = null;
    }
  };

  EnhancedButton.prototype.createButtonChildren = function createButtonChildren() {
    var _props2 = this.props,
        centerRipple = _props2.centerRipple,
        children = _props2.children,
        disabled = _props2.disabled,
        disableFocusRipple = _props2.disableFocusRipple,
        disableKeyboardFocus = _props2.disableKeyboardFocus,
        disableTouchRipple = _props2.disableTouchRipple,
        focusRippleColor = _props2.focusRippleColor,
        focusRippleOpacity = _props2.focusRippleOpacity,
        touchRippleColor = _props2.touchRippleColor,
        touchRippleOpacity = _props2.touchRippleOpacity;
    var isKeyboardFocused = this.state.isKeyboardFocused;

    // Focus Ripple

    var focusRipple = isKeyboardFocused && !disabled && !disableFocusRipple && !disableKeyboardFocus ? _react2.default.createElement(_FocusRipple2.default, {
      color: focusRippleColor,
      opacity: focusRippleOpacity,
      show: isKeyboardFocused,
      key: 'focusRipple'
    }) : undefined;

    // Touch Ripple
    var touchRipple = !disabled && !disableTouchRipple ? _react2.default.createElement(
      _TouchRipple2.default,
      {
        centerRipple: centerRipple,
        color: touchRippleColor,
        opacity: touchRippleOpacity,
        key: 'touchRipple'
      },
      children
    ) : undefined;

    return [focusRipple, touchRipple, touchRipple ? undefined : children];
  };

  EnhancedButton.prototype.render = function render() {
    var _this2 = this;

    var _props3 = this.props,
        centerRipple = _props3.centerRipple,
        children = _props3.children,
        containerElement = _props3.containerElement,
        disabled = _props3.disabled,
        disableFocusRipple = _props3.disableFocusRipple,
        disableKeyboardFocus = _props3.disableKeyboardFocus,
        disableTouchRipple = _props3.disableTouchRipple,
        focusRippleColor = _props3.focusRippleColor,
        focusRippleOpacity = _props3.focusRippleOpacity,
        href = _props3.href,
        keyboardFocused = _props3.keyboardFocused,
        touchRippleColor = _props3.touchRippleColor,
        touchRippleOpacity = _props3.touchRippleOpacity,
        onBlur = _props3.onBlur,
        onClick = _props3.onClick,
        onFocus = _props3.onFocus,
        onKeyUp = _props3.onKeyUp,
        onKeyDown = _props3.onKeyDown,
        onKeyboardFocus = _props3.onKeyboardFocus,
        onTouchTap = _props3.onTouchTap,
        style = _props3.style,
        tabIndex = _props3.tabIndex,
        type = _props3.type,
        other = (0, _objectWithoutProperties3.default)(_props3, ['centerRipple', 'children', 'containerElement', 'disabled', 'disableFocusRipple', 'disableKeyboardFocus', 'disableTouchRipple', 'focusRippleColor', 'focusRippleOpacity', 'href', 'keyboardFocused', 'touchRippleColor', 'touchRippleOpacity', 'onBlur', 'onClick', 'onFocus', 'onKeyUp', 'onKeyDown', 'onKeyboardFocus', 'onTouchTap', 'style', 'tabIndex', 'type']);
    var _context$muiTheme = this.context.muiTheme,
        prepareStyles = _context$muiTheme.prepareStyles,
        enhancedButton = _context$muiTheme.enhancedButton;


    var mergedStyles = (0, _assign2.default)({
      border: 10,
      boxSizing: 'border-box',
      display: 'inline-block',
      fontFamily: this.context.muiTheme.baseTheme.fontFamily,
      WebkitTapHighlightColor: enhancedButton.tapHighlightColor, // Remove mobile color flashing (deprecated)
      cursor: disabled ? 'default' : 'pointer',
      textDecoration: 'none',
      margin: 0,
      padding: 0,
      outline: 'none',
      fontSize: 'inherit',
      fontWeight: 'inherit',
      position: 'relative', // This is needed so that ripples do not bleed past border radius.
      verticalAlign: href ? 'middle' : null,
      zIndex: 1 }, style);

    // Passing both background:none & backgroundColor can break due to object iteration order
    if (!mergedStyles.backgroundColor && !mergedStyles.background) {
      mergedStyles.background = 'none';
    }

    if (disabled && href) {
      return _react2.default.createElement(
        'span',
        (0, _extends3.default)({}, other, {
          style: mergedStyles
        }),
        children
      );
    }

    var buttonProps = (0, _extends3.default)({}, other, {
      style: prepareStyles(mergedStyles),
      ref: function ref(node) {
        return _this2.button = node;
      },
      disabled: disabled,
      href: href,
      onBlur: this.handleBlur,
      onClick: this.handleClick,
      onFocus: this.handleFocus,
      onKeyUp: this.handleKeyUp,
      onKeyDown: this.handleKeyDown,
      onTouchTap: this.handleTouchTap,
      tabIndex: disabled || disableKeyboardFocus ? -1 : tabIndex
    });

    var buttonChildren = this.createButtonChildren();

    if (_react2.default.isValidElement(containerElement)) {
      return _react2.default.cloneElement(containerElement, buttonProps, buttonChildren);
    }

    if (!href && containerElement === 'button') {
      buttonProps.type = type;
    }

    return _react2.default.createElement(href ? 'a' : containerElement, buttonProps, buttonChildren);
  };

  return EnhancedButton;
}(_react.Component), _class.propTypes = {
  centerRipple: _propTypes2.default.bool,
  children: _propTypes2.default.node,
  containerElement: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  disableFocusRipple: _propTypes2.default.bool,
  disableKeyboardFocus: _propTypes2.default.bool,
  disableTouchRipple: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  focusRippleColor: _propTypes2.default.string,
  focusRippleOpacity: _propTypes2.default.number,
  href: _propTypes2.default.string,
  keyboardFocused: _propTypes2.default.bool,
  onBlur: _propTypes2.default.func,
  onClick: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onKeyDown: _propTypes2.default.func,
  onKeyUp: _propTypes2.default.func,
  onKeyboardFocus: _propTypes2.default.func,
  onTouchTap: _propTypes2.default.func,
  style: _propTypes2.default.object,
  tabIndex: _propTypes2.default.number,
  touchRippleColor: _propTypes2.default.string,
  touchRippleOpacity: _propTypes2.default.number,
  type: _propTypes2.default.string
}, _class.defaultProps = {
  containerElement: 'button',
  onBlur: function onBlur() {},
  onClick: function onClick() {},
  onFocus: function onFocus() {},
  onKeyDown: function onKeyDown() {},
  onKeyUp: function onKeyUp() {},
  onKeyboardFocus: function onKeyboardFocus() {},
  onTouchTap: function onTouchTap() {},
  tabIndex: 0,
  type: 'button'
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = EnhancedButton;