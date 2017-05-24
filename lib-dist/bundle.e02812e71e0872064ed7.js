webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {

  easeOutFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
  easeInOutFunction: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',

  easeOut: function easeOut(duration, property, delay, easeFunction) {
    easeFunction = easeFunction || this.easeOutFunction;

    if (property && Object.prototype.toString.call(property) === '[object Array]') {
      var transitions = '';
      for (var i = 0; i < property.length; i++) {
        if (transitions) transitions += ',';
        transitions += this.create(duration, property[i], delay, easeFunction);
      }

      return transitions;
    } else {
      return this.create(duration, property, delay, easeFunction);
    }
  },
  create: function create(duration, property, delay, easeFunction) {
    duration = duration || '450ms';
    property = property || 'all';
    delay = delay || '0ms';
    easeFunction = easeFunction || 'linear';

    return property + ' ' + duration + ' ' + easeFunction + ' ' + delay;
  }
};

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _SvgIcon = __webpack_require__(361);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SvgIcon2.default;

/***/ }),
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _shouldUpdate = __webpack_require__(706);

var _shouldUpdate2 = _interopRequireDefault(_shouldUpdate);

var _shallowEqual = __webpack_require__(49);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _setDisplayName = __webpack_require__(280);

var _setDisplayName2 = _interopRequireDefault(_setDisplayName);

var _wrapDisplayName = __webpack_require__(281);

var _wrapDisplayName2 = _interopRequireDefault(_wrapDisplayName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pure = function pure(BaseComponent) {
  var hoc = (0, _shouldUpdate2.default)(function (props, nextProps) {
    return !(0, _shallowEqual2.default)(props, nextProps);
  });

  if (process.env.NODE_ENV !== 'production') {
    return (0, _setDisplayName2.default)((0, _wrapDisplayName2.default)(BaseComponent, 'pure'))(hoc(BaseComponent));
  }

  return hoc(BaseComponent);
};

exports.default = pure;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var horizontal = _propTypes2.default.oneOf(['left', 'middle', 'right']);
var vertical = _propTypes2.default.oneOf(['top', 'center', 'bottom']);

exports.default = {

  corners: _propTypes2.default.oneOf(['bottom-left', 'bottom-right', 'top-left', 'top-right']),

  horizontal: horizontal,

  vertical: vertical,

  origin: _propTypes2.default.shape({
    horizontal: horizontal,
    vertical: vertical
  }),

  cornersAndCenter: _propTypes2.default.oneOf(['bottom-center', 'bottom-left', 'bottom-right', 'top-center', 'top-left', 'top-right']),

  stringOrNumber: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),

  zDepth: _propTypes2.default.oneOf([0, 1, 2, 3, 4, 5])

};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PaperWithArrow = exports.Paper = undefined;

var _Paper2 = __webpack_require__(351);

var _Paper3 = _interopRequireDefault(_Paper2);

var _PaperWithArrow2 = __webpack_require__(183);

var _PaperWithArrow3 = _interopRequireDefault(_PaperWithArrow2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Paper = _Paper3.default;
exports.PaperWithArrow = _PaperWithArrow3.default;
exports.default = _PaperWithArrow3.default;

/***/ }),
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _events = __webpack_require__(82);

var _events2 = _interopRequireDefault(_events);

var _keycode = __webpack_require__(22);

var _keycode2 = _interopRequireDefault(_keycode);

var _FocusRipple = __webpack_require__(114);

var _FocusRipple2 = _interopRequireDefault(_FocusRipple);

var _TouchRipple = __webpack_require__(190);

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

/***/ }),
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertColorToString = convertColorToString;
exports.convertHexToRGB = convertHexToRGB;
exports.decomposeColor = decomposeColor;
exports.getContrastRatio = getContrastRatio;
exports.getLuminance = getLuminance;
exports.emphasize = emphasize;
exports.fade = fade;
exports.darken = darken;
exports.lighten = lighten;

var _warning = __webpack_require__(17);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns a number whose value is limited to the given range.
 *
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */
function clamp(value, min, max) {
  if (value < min) {
    return min;
  }
  if (value > max) {
    return max;
  }
  return value;
}

/**
 * Converts a color object with type and values to a string.
 *
 * @param {object} color - Decomposed color
 * @param {string} color.type - One of, 'rgb', 'rgba', 'hsl', 'hsla'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns {string} A CSS color string
 */
function convertColorToString(color) {
  var type = color.type,
      values = color.values;


  if (type.indexOf('rgb') > -1) {
    // Only convert the first 3 values to int (i.e. not alpha)
    for (var i = 0; i < 3; i++) {
      values[i] = parseInt(values[i]);
    }
  }

  var colorString = void 0;

  if (type.indexOf('hsl') > -1) {
    colorString = color.type + '(' + values[0] + ', ' + values[1] + '%, ' + values[2] + '%';
  } else {
    colorString = color.type + '(' + values[0] + ', ' + values[1] + ', ' + values[2];
  }

  if (values.length === 4) {
    colorString += ', ' + color.values[3] + ')';
  } else {
    colorString += ')';
  }

  return colorString;
}

/**
 * Converts a color from CSS hex format to CSS rgb format.
 *
 *  @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 *  @returns {string} A CSS rgb color string
 */
function convertHexToRGB(color) {
  if (color.length === 4) {
    var extendedColor = '#';
    for (var i = 1; i < color.length; i++) {
      extendedColor += color.charAt(i) + color.charAt(i);
    }
    color = extendedColor;
  }

  var values = {
    r: parseInt(color.substr(1, 2), 16),
    g: parseInt(color.substr(3, 2), 16),
    b: parseInt(color.substr(5, 2), 16)
  };

  return 'rgb(' + values.r + ', ' + values.g + ', ' + values.b + ')';
}

/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values and color names.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {{type: string, values: number[]}} A MUI color object
 */
function decomposeColor(color) {
  if (color.charAt(0) === '#') {
    return decomposeColor(convertHexToRGB(color));
  }

  var marker = color.indexOf('(');

  (0, _warning2.default)(marker !== -1, 'Material-UI: The ' + color + ' color was not parsed correctly,\n  because it has an unsupported format (color name or RGB %). This may cause issues in component rendering.');

  var type = color.substring(0, marker);
  var values = color.substring(marker + 1, color.length - 1).split(',');
  values = values.map(function (value) {
    return parseFloat(value);
  });

  return { type: type, values: values };
}

/**
 * Calculates the contrast ratio between two colors.
 *
 * Formula: http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef
 *
 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} A contrast ratio value in the range 0 - 21 with 2 digit precision.
 */
function getContrastRatio(foreground, background) {
  var lumA = getLuminance(foreground);
  var lumB = getLuminance(background);
  var contrastRatio = (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);

  return Number(contrastRatio.toFixed(2)); // Truncate at two digits
}

/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/WAI/GL/wiki/Relative_luminance
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} The relative brightness of the color in the range 0 - 1
 */
function getLuminance(color) {
  color = decomposeColor(color);

  if (color.type.indexOf('rgb') > -1) {
    var rgb = color.values.map(function (val) {
      val /= 255; // normalized
      return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
    });
    return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3)); // Truncate at 3 digits
  } else if (color.type.indexOf('hsl') > -1) {
    return color.values[2] / 100;
  }
}

/**
 * Darken or lighten a colour, depending on its luminance.
 * Light colors are darkened, dark colors are lightened.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function emphasize(color) {
  var coefficient = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.15;

  return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
}

/**
 * Set the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} value - value to set the alpha channel to in the range 0 -1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function fade(color, value) {
  color = decomposeColor(color);
  value = clamp(value, 0, 1);

  if (color.type === 'rgb' || color.type === 'hsl') {
    color.type += 'a';
  }
  color.values[3] = value;

  return convertColorToString(color);
}

/**
 * Darkens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function darken(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient, 0, 1);

  if (color.type.indexOf('hsl') > -1) {
    color.values[2] *= 1 - coefficient;
  } else if (color.type.indexOf('rgb') > -1) {
    for (var i = 0; i < 3; i++) {
      color.values[i] *= 1 - coefficient;
    }
  }
  return convertColorToString(color);
}

/**
 * Lightens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function lighten(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient, 0, 1);

  if (color.type.indexOf('hsl') > -1) {
    color.values[2] += (100 - color.values[2]) * coefficient;
  } else if (color.type.indexOf('rgb') > -1) {
    for (var i = 0; i < 3; i++) {
      color.values[i] += (255 - color.values[i]) * coefficient;
    }
  }

  return convertColorToString(color);
}

/***/ }),
/* 36 */,
/* 37 */,
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  set: function set(style, key, value) {
    style[key] = value;
  }
};

/***/ }),
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _shallowEqual = __webpack_require__(58);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _shallowEqual2.default;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _IconButton = __webpack_require__(346);

var _IconButton2 = _interopRequireDefault(_IconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _IconButton2.default;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(14);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactEventListener = __webpack_require__(26);

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _RenderToLayer = __webpack_require__(115);

var _RenderToLayer2 = _interopRequireDefault(_RenderToLayer);

var _propTypes3 = __webpack_require__(20);

var _propTypes4 = _interopRequireDefault(_propTypes3);

var _Paper = __webpack_require__(21);

var _Paper2 = _interopRequireDefault(_Paper);

var _lodash = __webpack_require__(108);

var _lodash2 = _interopRequireDefault(_lodash);

var _PopoverAnimationDefault = __webpack_require__(184);

var _PopoverAnimationDefault2 = _interopRequireDefault(_PopoverAnimationDefault);

var _iOSHelpers = __webpack_require__(193);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  root: {
    display: 'none'
  }
};

var Popover = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(Popover, _Component);

  function Popover(props, context) {
    (0, _classCallCheck3.default)(this, Popover);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props, context));

    _this.timeout = null;

    _this.renderLayer = function () {
      var _this$props = _this.props,
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
          other = (0, _objectWithoutProperties3.default)(_this$props, ['animated', 'animation', 'anchorEl', 'anchorOrigin', 'autoCloseWhenOffScreen', 'canAutoPosition', 'children', 'onRequestClose', 'style', 'targetOrigin', 'useLayerForClickAway']);


      var styleRoot = style;

      if (!animated) {
        styleRoot = {
          position: 'fixed',
          zIndex: _this.context.muiTheme.zIndex.popover
        };

        if (!_this.state.open) {
          return null;
        }

        return _react2.default.createElement(
          _Paper2.default,
          (0, _extends3.default)({ style: (0, _assign2.default)(styleRoot, style) }, other),
          children
        );
      }

      var Animation = animation || _PopoverAnimationDefault2.default;

      return _react2.default.createElement(
        Animation,
        (0, _extends3.default)({
          targetOrigin: targetOrigin,
          style: styleRoot
        }, other, {
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
      if (!_this.state.open) {
        return;
      }

      if (!_this.refs.layer.getLayer()) {
        return;
      }

      var targetEl = _this.refs.layer.getLayer().children[0];
      if (!targetEl) {
        return;
      }

      var _this$props2 = _this.props,
          targetOrigin = _this$props2.targetOrigin,
          anchorOrigin = _this$props2.anchorOrigin;

      var anchorEl = _this.props.anchorEl || _this.anchorEl;

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
        target = _this.getTargetPosition(targetEl); // update as height may have changed
        targetPosition = _this.applyAutoPositionIfNeeded(anchor, target, targetOrigin, anchorOrigin, targetPosition);
      }

      targetEl.style.top = Math.max(0, targetPosition.top) + 'px';
      targetEl.style.left = Math.max(0, targetPosition.left) + 'px';
      targetEl.style.maxHeight = window.innerHeight + 'px';
    };

    _this.handleResize = (0, _lodash2.default)(_this.setPlacement, 100);
    _this.handleScroll = (0, _lodash2.default)(_this.setPlacement.bind(_this, true), 50);

    _this.state = {
      open: props.open,
      closing: false
    };
    return _this;
  }

  Popover.prototype.componentDidMount = function componentDidMount() {
    this.setPlacement();
  };

  Popover.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this2 = this;

    if (nextProps.open === this.props.open) {
      return;
    }

    if (nextProps.open) {
      clearTimeout(this.timeout);
      this.timeout = null;
      this.anchorEl = nextProps.anchorEl || this.props.anchorEl;
      this.setState({
        open: true,
        closing: false
      });
    } else {
      if (nextProps.animated) {
        if (this.timeout !== null) return;
        this.setState({ closing: true });
        this.timeout = setTimeout(function () {
          _this2.setState({
            open: false
          }, function () {
            _this2.timeout = null;
          });
        }, 500);
      } else {
        this.setState({
          open: false
        });
      }
    }
  };

  Popover.prototype.componentDidUpdate = function componentDidUpdate() {
    this.setPlacement();
  };

  Popover.prototype.componentWillUnmount = function componentWillUnmount() {
    this.handleResize.cancel();
    this.handleScroll.cancel();

    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
  };

  Popover.prototype.requestClose = function requestClose(reason) {
    if (this.props.onRequestClose) {
      this.props.onRequestClose(reason);
    }
  };

  Popover.prototype.getAnchorPosition = function getAnchorPosition(el) {
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
    if ((0, _iOSHelpers.isIOS)() && document.activeElement.tagName === 'INPUT') {
      a.bottom = (0, _iOSHelpers.getOffsetTop)(el) + a.height;
    } else {
      a.bottom = rect.bottom || a.top + a.height;
    }
    a.middle = a.left + (a.right - a.left) / 2;
    a.center = a.top + (a.bottom - a.top) / 2;

    return a;
  };

  Popover.prototype.getTargetPosition = function getTargetPosition(targetEl) {
    return {
      top: 0,
      center: targetEl.offsetHeight / 2,
      bottom: targetEl.offsetHeight,
      left: 0,
      middle: targetEl.offsetWidth / 2,
      right: targetEl.offsetWidth
    };
  };

  Popover.prototype.autoCloseWhenOffScreen = function autoCloseWhenOffScreen(anchorPosition) {
    if (anchorPosition.top < 0 || anchorPosition.top > window.innerHeight || anchorPosition.left < 0 || anchorPosition.left > window.innerWidth) {
      this.requestClose('offScreen');
    }
  };

  Popover.prototype.getOverlapMode = function getOverlapMode(anchor, target, median) {
    if ([anchor, target].indexOf(median) >= 0) return 'auto';
    if (anchor === target) return 'inclusive';
    return 'exclusive';
  };

  Popover.prototype.getPositions = function getPositions(anchor, target) {
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

  Popover.prototype.applyAutoPositionIfNeeded = function applyAutoPositionIfNeeded(anchor, target, targetOrigin, anchorOrigin, targetPosition) {
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

  Popover.prototype.render = function render() {
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

  return Popover;
}(_react.Component), _class.propTypes = {
  /**
   * This is the DOM element that will be used to set the position of the
   * popover.
   */
  anchorEl: _propTypes2.default.object,
  /**
   * This is the point on the anchor where the popover's
   * `targetOrigin` will attach to.
   * Options:
   * vertical: [top, center, bottom]
   * horizontal: [left, middle, right].
   */
  anchorOrigin: _propTypes4.default.origin,
  /**
   * If true, the popover will apply transitions when
   * it is added to the DOM.
   */
  animated: _propTypes2.default.bool,
  /**
   * Override the default animation component used.
   */
  animation: _propTypes2.default.func,
  /**
   * If true, the popover will hide when the anchor is scrolled off the screen.
   */
  autoCloseWhenOffScreen: _propTypes2.default.bool,
  /**
   * If true, the popover (potentially) ignores `targetOrigin`
   * and `anchorOrigin` to make itself fit on screen,
   * which is useful for mobile devices.
   */
  canAutoPosition: _propTypes2.default.bool,
  /**
   * The content of the popover.
   */
  children: _propTypes2.default.node,
  /**
   * The CSS class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * Callback function fired when the popover is requested to be closed.
   *
   * @param {string} reason The reason for the close request. Possibles values
   * are 'clickAway' and 'offScreen'.
   */
  onRequestClose: _propTypes2.default.func,
  /**
   * If true, the popover is visible.
   */
  open: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * This is the point on the popover which will attach to
   * the anchor's origin.
   * Options:
   * vertical: [top, center, bottom]
   * horizontal: [left, middle, right].
   */
  targetOrigin: _propTypes4.default.origin,
  /**
   * If true, the popover will render on top of an invisible
   * layer, which will prevent clicks to the underlying
   * elements, and trigger an `onRequestClose('clickAway')` call.
   */
  useLayerForClickAway: _propTypes2.default.bool,
  /**
   * The zDepth of the popover.
   */
  zDepth: _propTypes4.default.zDepth
}, _class.defaultProps = {
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
exports.default = Popover;

/***/ }),
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _TextField = __webpack_require__(367);

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _TextField2.default;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultUtils = undefined;
exports.dateTimeFormat = dateTimeFormat;
exports.getYear = getYear;
exports.setYear = setYear;
exports.addDays = addDays;
exports.addMonths = addMonths;
exports.addYears = addYears;
exports.cloneDate = cloneDate;
exports.cloneAsDate = cloneAsDate;
exports.getDaysInMonth = getDaysInMonth;
exports.getFirstDayOfMonth = getFirstDayOfMonth;
exports.getFirstDayOfWeek = getFirstDayOfWeek;
exports.getWeekArray = getWeekArray;
exports.localizedWeekday = localizedWeekday;
exports.formatIso = formatIso;
exports.isEqualDate = isEqualDate;
exports.isBeforeDate = isBeforeDate;
exports.isAfterDate = isAfterDate;
exports.isBetweenDates = isBetweenDates;
exports.monthDiff = monthDiff;
exports.yearDiff = yearDiff;

var _warning = __webpack_require__(17);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dayAbbreviation = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
var dayList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var monthLongList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function dateTimeFormat(locale, options) {
  (0, _warning2.default)(locale === 'en-US', 'Material-UI: The ' + locale + ' locale is not supported by the built-in DateTimeFormat.\n  Use the `DateTimeFormat` prop to supply an alternative implementation.');

  this.format = function (date) {
    if (options.month === 'short' && options.weekday === 'short' && options.day === '2-digit') {
      return dayList[date.getDay()] + ', ' + monthList[date.getMonth()] + ' ' + date.getDate();
    } else if (options.year === 'numeric' && options.month === 'numeric' && options.day === 'numeric') {
      return date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
    } else if (options.year === 'numeric' && options.month === 'long') {
      return monthLongList[date.getMonth()] + ' ' + date.getFullYear();
    } else if (options.weekday === 'narrow') {
      return dayAbbreviation[date.getDay()];
    } else if (options.year === 'numeric') {
      return date.getFullYear().toString();
    } else if (options.day === 'numeric') {
      return date.getDate();
    } else {
      (0, _warning2.default)(false, 'Material-UI: Wrong usage of DateTimeFormat');
    }
  };
}

function getYear(d) {
  return d.getFullYear();
}

function setYear(d, year) {
  var newDate = cloneDate(d);
  newDate.setFullYear(year);
  return newDate;
}

function addDays(d, days) {
  var newDate = cloneDate(d);
  newDate.setDate(d.getDate() + days);
  return newDate;
}

function addMonths(d, months) {
  var newDate = cloneDate(d);
  newDate.setMonth(d.getMonth() + months);
  return newDate;
}

function addYears(d, years) {
  var newDate = cloneDate(d);
  newDate.setFullYear(d.getFullYear() + years);
  return newDate;
}

function cloneDate(d) {
  return new Date(d.getTime());
}

function cloneAsDate(d) {
  var clonedDate = cloneDate(d);
  clonedDate.setHours(0, 0, 0, 0);
  return clonedDate;
}

function getDaysInMonth(d) {
  var resultDate = getFirstDayOfMonth(d);

  resultDate.setMonth(resultDate.getMonth() + 1);
  resultDate.setDate(resultDate.getDate() - 1);

  return resultDate.getDate();
}

function getFirstDayOfMonth(d) {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}

function getFirstDayOfWeek() {
  var now = new Date();
  return new Date(now.setDate(now.getDate() - now.getDay()));
}

function getWeekArray(d, firstDayOfWeek) {
  var dayArray = [];
  var daysInMonth = getDaysInMonth(d);
  var weekArray = [];
  var week = [];

  for (var i = 1; i <= daysInMonth; i++) {
    dayArray.push(new Date(d.getFullYear(), d.getMonth(), i));
  }

  var addWeek = function addWeek(week) {
    var emptyDays = 7 - week.length;
    for (var _i = 0; _i < emptyDays; ++_i) {
      week[weekArray.length ? 'push' : 'unshift'](null);
    }
    weekArray.push(week);
  };

  dayArray.forEach(function (day) {
    if (week.length > 0 && day.getDay() === firstDayOfWeek) {
      addWeek(week);
      week = [];
    }
    week.push(day);
    if (dayArray.indexOf(day) === dayArray.length - 1) {
      addWeek(week);
    }
  });

  return weekArray;
}

function localizedWeekday(DateTimeFormat, locale, day, firstDayOfWeek) {
  var weekdayFormatter = new DateTimeFormat(locale, { weekday: 'narrow' });
  var firstDayDate = getFirstDayOfWeek();

  return weekdayFormatter.format(addDays(firstDayDate, day + firstDayOfWeek));
}

// Convert date to ISO 8601 (YYYY-MM-DD) date string, accounting for current timezone
function formatIso(date) {
  return new Date(date.toDateString() + ' 12:00:00 +0000').toISOString().substring(0, 10);
}

function isEqualDate(d1, d2) {
  return d1 && d2 && d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();
}

function isBeforeDate(d1, d2) {
  var date1 = cloneAsDate(d1);
  var date2 = cloneAsDate(d2);

  return date1.getTime() < date2.getTime();
}

function isAfterDate(d1, d2) {
  var date1 = cloneAsDate(d1);
  var date2 = cloneAsDate(d2);

  return date1.getTime() > date2.getTime();
}

function isBetweenDates(dateToCheck, startDate, endDate) {
  return !isBeforeDate(dateToCheck, startDate) && !isAfterDate(dateToCheck, endDate);
}

function monthDiff(d1, d2) {
  var m = void 0;
  m = (d1.getFullYear() - d2.getFullYear()) * 12;
  m += d1.getMonth();
  m -= d2.getMonth();
  return m;
}

function yearDiff(d1, d2) {
  return ~~(monthDiff(d1, d2) / 12);
}

var defaultUtils = exports.defaultUtils = {
  getYear: getYear,
  setYear: setYear,
  addDays: addDays,
  addMonths: addMonths,
  addYears: addYears,
  getFirstDayOfMonth: getFirstDayOfMonth,
  getWeekArray: getWeekArray,
  monthDiff: monthDiff
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addHours = addHours;
exports.addMinutes = addMinutes;
exports.addSeconds = addSeconds;
exports.formatTime = formatTime;
exports.rad2deg = rad2deg;
exports.getTouchEventOffsetValues = getTouchEventOffsetValues;
exports.isInner = isInner;
function addHours(d, hours) {
  var newDate = clone(d);
  newDate.setHours(d.getHours() + hours);
  return newDate;
}

function addMinutes(d, minutes) {
  var newDate = clone(d);
  newDate.setMinutes(d.getMinutes() + minutes);
  return newDate;
}

function addSeconds(d, seconds) {
  var newDate = clone(d);
  newDate.setSeconds(d.getMinutes() + seconds);
  return newDate;
}

function clone(d) {
  return new Date(d.getTime());
}

/**
 * @param date [Date] A Date object.
 * @param format [String] One of 'ampm', '24hr', defaults to 'ampm'.
 * @param pedantic [Boolean] Check time-picker/time-picker.jsx file.
 *
 * @return String A string representing the formatted time.
 */
function formatTime(date) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ampm';
  var pedantic = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (!date) return '';
  var hours = date.getHours();
  var mins = date.getMinutes().toString();

  if (format === 'ampm') {
    var isAM = hours < 12;
    hours = hours % 12;
    var additional = isAM ? ' am' : ' pm';
    hours = (hours || 12).toString();

    if (mins.length < 2) mins = '0' + mins;

    if (pedantic) {
      // Treat midday/midnight specially http://www.nist.gov/pml/div688/times.cfm
      if (hours === '12' && mins === '00') {
        return additional === ' pm' ? '12 noon' : '12 midnight';
      }
    }

    return hours + (mins === '00' ? '' : ':' + mins) + additional;
  }

  hours = hours.toString();

  if (hours.length < 2) hours = '0' + hours;
  if (mins.length < 2) mins = '0' + mins;

  return hours + ':' + mins;
}

function rad2deg(rad) {
  return rad * 57.29577951308232;
}

function getTouchEventOffsetValues(event) {
  var el = event.target;
  var boundingRect = el.getBoundingClientRect();

  return {
    offsetX: event.clientX - boundingRect.left,
    offsetY: event.clientY - boundingRect.top
  };
}

function isInner(props) {
  if (props.type !== 'hour') {
    return false;
  }
  return props.value < 1 || props.value > 12;
}

/***/ }),
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _FlatButton = __webpack_require__(341);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _FlatButton2.default;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var tableRowColumn = context.muiTheme.tableRowColumn;


  var styles = {
    root: {
      paddingLeft: tableRowColumn.spacing,
      paddingRight: tableRowColumn.spacing,
      height: tableRowColumn.height,
      textAlign: 'left',
      fontSize: 13,
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis'
    }
  };

  if (_react2.default.Children.count(props.children) === 1 && !isNaN(props.children)) {
    styles.textAlign = 'right';
  }

  return styles;
}

var TableRowColumn = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(TableRowColumn, _Component);

  function TableRowColumn() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TableRowColumn);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      hovered: false
    }, _this.onClick = function (event) {
      if (_this.props.onClick) {
        _this.props.onClick(event, _this.props.columnNumber);
      }
    }, _this.onMouseEnter = function (event) {
      if (_this.props.hoverable) {
        _this.setState({ hovered: true });
        if (_this.props.onHover) {
          _this.props.onHover(event, _this.props.columnNumber);
        }
      }
    }, _this.onMouseLeave = function (event) {
      if (_this.props.hoverable) {
        _this.setState({ hovered: false });
        if (_this.props.onHoverExit) {
          _this.props.onHoverExit(event, _this.props.columnNumber);
        }
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  TableRowColumn.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        className = _props.className,
        columnNumber = _props.columnNumber,
        hoverable = _props.hoverable,
        onClick = _props.onClick,
        onHover = _props.onHover,
        onHoverExit = _props.onHoverExit,
        style = _props.style,
        other = (0, _objectWithoutProperties3.default)(_props, ['children', 'className', 'columnNumber', 'hoverable', 'onClick', 'onHover', 'onHoverExit', 'style']);
    var prepareStyles = this.context.muiTheme.prepareStyles;

    var styles = getStyles(this.props, this.context);

    var handlers = {
      onClick: this.onClick,
      onMouseEnter: this.onMouseEnter,
      onMouseLeave: this.onMouseLeave
    };

    return _react2.default.createElement(
      'td',
      (0, _extends3.default)({
        className: className,
        style: prepareStyles((0, _assign2.default)(styles.root, style))
      }, handlers, other),
      children
    );
  };

  return TableRowColumn;
}(_react.Component), _class.propTypes = {
  children: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * @ignore
   * Number to identify the header row. This property
   * is automatically populated when used with TableHeader.
   */
  columnNumber: _propTypes2.default.number,
  /**
   * @ignore
   * If true, this column responds to hover events.
   */
  hoverable: _propTypes2.default.bool,
  /** @ignore */
  onClick: _propTypes2.default.func,
  /** @ignore */
  onHover: _propTypes2.default.func,
  /**
   * @ignore
   * Callback function for hover exit event.
   */
  onHoverExit: _propTypes2.default.func,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
}, _class.defaultProps = {
  hoverable: false
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = TableRowColumn;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp, _initialiseProps;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(14);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _shallowEqual = __webpack_require__(49);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _ClickAwayListener = __webpack_require__(112);

var _ClickAwayListener2 = _interopRequireDefault(_ClickAwayListener);

var _keycode = __webpack_require__(22);

var _keycode2 = _interopRequireDefault(_keycode);

var _propTypes3 = __webpack_require__(20);

var _propTypes4 = _interopRequireDefault(_propTypes3);

var _List = __webpack_require__(109);

var _List2 = _interopRequireDefault(_List);

var _menuUtils = __webpack_require__(350);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var desktop = props.desktop,
      maxHeight = props.maxHeight,
      width = props.width;
  var muiTheme = context.muiTheme;


  var styles = {
    root: {
      // Nested div bacause the List scales x faster than it scales y
      zIndex: muiTheme.zIndex.menu,
      maxHeight: maxHeight,
      overflowY: maxHeight ? 'auto' : null
    },
    divider: {
      marginTop: 7,
      marginBottom: 8
    },
    list: {
      display: 'table-cell',
      paddingBottom: desktop ? 16 : 8,
      paddingTop: desktop ? 16 : 8,
      userSelect: 'none',
      width: width
    },
    selectedMenuItem: {
      color: muiTheme.menuItem.selectedTextColor
    }
  };

  return styles;
}

var Menu = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(Menu, _Component);

  function Menu(props, context) {
    (0, _classCallCheck3.default)(this, Menu);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props, context));

    _initialiseProps.call(_this);

    var filteredChildren = _this.getFilteredChildren(props.children);
    var selectedIndex = _this.getLastSelectedIndex(props, filteredChildren);

    var newFocusIndex = props.disableAutoFocus ? -1 : selectedIndex >= 0 ? selectedIndex : 0;
    if (newFocusIndex !== -1 && props.onMenuItemFocusChange) {
      props.onMenuItemFocusChange(null, newFocusIndex);
    }
    _this.state = {
      focusIndex: newFocusIndex,
      isKeyboardFocused: props.initiallyKeyboardFocused,
      keyWidth: props.desktop ? 64 : 56
    };

    _this.hotKeyHolder = new _menuUtils.HotKeyHolder();
    return _this;
  }

  Menu.prototype.componentDidMount = function componentDidMount() {
    if (this.props.autoWidth) {
      this.setWidth();
    }
    this.setScollPosition();
  };

  Menu.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var selectedIndex = void 0;
    var filteredChildren = this.getFilteredChildren(nextProps.children);

    if (this.props.multiple !== true) {
      selectedIndex = this.getLastSelectedIndex(nextProps, filteredChildren);
    } else {
      selectedIndex = this.state.focusIndex;
    }

    var newFocusIndex = nextProps.disableAutoFocus ? -1 : selectedIndex >= 0 ? selectedIndex : 0;
    if (newFocusIndex !== this.state.focusIndex && this.props.onMenuItemFocusChange) {
      this.props.onMenuItemFocusChange(null, newFocusIndex);
    }
    this.setState({
      focusIndex: newFocusIndex,
      keyWidth: nextProps.desktop ? 64 : 56
    });
  };

  Menu.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState, nextContext) {
    return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState) || !(0, _shallowEqual2.default)(this.context, nextContext);
  };

  Menu.prototype.componentDidUpdate = function componentDidUpdate() {
    if (this.props.autoWidth) this.setWidth();
  };

  // Do not use outside of this component, it will be removed once valueLink is deprecated
  Menu.prototype.getValueLink = function getValueLink(props) {
    return props.valueLink || {
      value: props.value,
      requestChange: props.onChange
    };
  };

  Menu.prototype.setKeyboardFocused = function setKeyboardFocused(keyboardFocused) {
    this.setState({
      isKeyboardFocused: keyboardFocused
    });
  };

  Menu.prototype.getFilteredChildren = function getFilteredChildren(children) {
    var filteredChildren = [];
    _react2.default.Children.forEach(children, function (child) {
      if (child) {
        filteredChildren.push(child);
      }
    });
    return filteredChildren;
  };

  Menu.prototype.cloneMenuItem = function cloneMenuItem(child, childIndex, styles, index) {
    var _this2 = this;

    var childIsDisabled = child.props.disabled;

    var selectedChildStyles = {};
    if (!childIsDisabled) {
      var selected = this.isChildSelected(child, this.props);

      if (selected) {
        (0, _assign2.default)(selectedChildStyles, styles.selectedMenuItem, this.props.selectedMenuItemStyle);
      }
    }
    var mergedChildStyles = (0, _assign2.default)({}, child.props.style, this.props.menuItemStyle, selectedChildStyles);

    var extraProps = {
      desktop: this.props.desktop,
      style: mergedChildStyles
    };
    if (!childIsDisabled) {
      var isFocused = childIndex === this.state.focusIndex;
      var focusState = 'none';
      if (isFocused) {
        focusState = this.state.isKeyboardFocused ? 'keyboard-focused' : 'focused';
      }

      (0, _assign2.default)(extraProps, {
        focusState: focusState,
        onTouchTap: function onTouchTap(event) {
          _this2.handleMenuItemTouchTap(event, child, index);
          if (child.props.onTouchTap) child.props.onTouchTap(event);
        },
        ref: isFocused ? 'focusedMenuItem' : null
      });
    }
    return _react2.default.cloneElement(child, extraProps);
  };

  Menu.prototype.decrementKeyboardFocusIndex = function decrementKeyboardFocusIndex(event) {
    var index = this.state.focusIndex;

    index--;
    if (index < 0) index = 0;

    this.setFocusIndex(event, index, true);
  };

  Menu.prototype.getMenuItemCount = function getMenuItemCount(filteredChildren) {
    var menuItemCount = 0;
    filteredChildren.forEach(function (child) {
      var childIsADivider = child.type && child.type.muiName === 'Divider';
      var childIsDisabled = child.props.disabled;
      if (!childIsADivider && !childIsDisabled) menuItemCount++;
    });
    return menuItemCount;
  };

  Menu.prototype.getLastSelectedIndex = function getLastSelectedIndex(props, filteredChildren) {
    var _this3 = this;

    var selectedIndex = -1;
    var menuItemIndex = 0;

    filteredChildren.forEach(function (child) {
      var childIsADivider = child.type && child.type.muiName === 'Divider';

      if (_this3.isChildSelected(child, props)) selectedIndex = menuItemIndex;
      if (!childIsADivider) menuItemIndex++;
    });

    return selectedIndex;
  };

  Menu.prototype.setFocusIndexStartsWith = function setFocusIndexStartsWith(event, keys) {
    var foundIndex = -1;
    _react2.default.Children.forEach(this.props.children, function (child, index) {
      if (foundIndex >= 0) {
        return;
      }
      var primaryText = child.props.primaryText;

      if (typeof primaryText === 'string' && new RegExp('^' + keys, 'i').test(primaryText)) {
        foundIndex = index;
      }
    });
    if (foundIndex >= 0) {
      this.setFocusIndex(event, foundIndex, true);
      return true;
    }
    return false;
  };

  Menu.prototype.handleMenuItemTouchTap = function handleMenuItemTouchTap(event, item, index) {
    var children = this.props.children;
    var multiple = this.props.multiple;
    var valueLink = this.getValueLink(this.props);
    var menuValue = valueLink.value;
    var itemValue = item.props.value;
    var focusIndex = _react2.default.isValidElement(children) ? 0 : children.indexOf(item);

    this.setFocusIndex(event, focusIndex, false);

    if (multiple) {
      menuValue = menuValue || [];

      var itemIndex = menuValue.indexOf(itemValue);

      var _menuValue = menuValue,
          newMenuValue = _menuValue.slice(0);

      if (itemIndex === -1) {
        newMenuValue.push(itemValue);
      } else {
        newMenuValue.splice(itemIndex, 1);
      }

      valueLink.requestChange(event, newMenuValue);
    } else if (!multiple && itemValue !== menuValue) {
      valueLink.requestChange(event, itemValue);
    }

    this.props.onItemTouchTap(event, item, index);
  };

  Menu.prototype.incrementKeyboardFocusIndex = function incrementKeyboardFocusIndex(event, filteredChildren) {
    var index = this.state.focusIndex;
    var maxIndex = this.getMenuItemCount(filteredChildren) - 1;

    index++;
    if (index > maxIndex) index = maxIndex;

    this.setFocusIndex(event, index, true);
  };

  Menu.prototype.isChildSelected = function isChildSelected(child, props) {
    var menuValue = this.getValueLink(props).value;
    var childValue = child.props.value;

    if (props.multiple) {
      return menuValue && menuValue.length && menuValue.indexOf(childValue) !== -1;
    } else {
      return child.props.hasOwnProperty('value') && menuValue === childValue;
    }
  };

  Menu.prototype.setFocusIndex = function setFocusIndex(event, newIndex, isKeyboardFocused) {
    if (this.props.onMenuItemFocusChange) {
      // Do this even if `newIndex === this.state.focusIndex` to allow users
      // to detect up-arrow on the first MenuItem or down-arrow on the last.
      this.props.onMenuItemFocusChange(event, newIndex);
    }
    this.setState({
      focusIndex: newIndex,
      isKeyboardFocused: isKeyboardFocused
    });
  };

  Menu.prototype.setScollPosition = function setScollPosition() {
    var desktop = this.props.desktop;
    var focusedMenuItem = this.refs.focusedMenuItem;
    var menuItemHeight = desktop ? 32 : 48;

    if (focusedMenuItem) {
      var selectedOffSet = _reactDom2.default.findDOMNode(focusedMenuItem).offsetTop;

      // Make the focused item be the 2nd item in the list the user sees
      var scrollTop = selectedOffSet - menuItemHeight;
      if (scrollTop < menuItemHeight) scrollTop = 0;

      _reactDom2.default.findDOMNode(this.refs.scrollContainer).scrollTop = scrollTop;
    }
  };

  Menu.prototype.cancelScrollEvent = function cancelScrollEvent(event) {
    event.stopPropagation();
    event.preventDefault();
    return false;
  };

  Menu.prototype.setWidth = function setWidth() {
    var el = _reactDom2.default.findDOMNode(this);
    var listEl = _reactDom2.default.findDOMNode(this.refs.list);
    var elWidth = el.offsetWidth;
    var keyWidth = this.state.keyWidth;
    var minWidth = keyWidth * 1.5;
    var keyIncrements = elWidth / keyWidth;
    var newWidth = void 0;

    keyIncrements = keyIncrements <= 1.5 ? 1.5 : Math.ceil(keyIncrements);
    newWidth = keyIncrements * keyWidth;

    if (newWidth < minWidth) newWidth = minWidth;

    el.style.width = newWidth + 'px';
    listEl.style.width = newWidth + 'px';
  };

  Menu.prototype.render = function render() {
    var _this4 = this;

    var _props = this.props,
        autoWidth = _props.autoWidth,
        children = _props.children,
        desktop = _props.desktop,
        disableAutoFocus = _props.disableAutoFocus,
        initiallyKeyboardFocused = _props.initiallyKeyboardFocused,
        listStyle = _props.listStyle,
        maxHeight = _props.maxHeight,
        multiple = _props.multiple,
        onItemTouchTap = _props.onItemTouchTap,
        onEscKeyDown = _props.onEscKeyDown,
        onMenuItemFocusChange = _props.onMenuItemFocusChange,
        selectedMenuItemStyle = _props.selectedMenuItemStyle,
        menuItemStyle = _props.menuItemStyle,
        style = _props.style,
        value = _props.value,
        valueLink = _props.valueLink,
        width = _props.width,
        other = (0, _objectWithoutProperties3.default)(_props, ['autoWidth', 'children', 'desktop', 'disableAutoFocus', 'initiallyKeyboardFocused', 'listStyle', 'maxHeight', 'multiple', 'onItemTouchTap', 'onEscKeyDown', 'onMenuItemFocusChange', 'selectedMenuItemStyle', 'menuItemStyle', 'style', 'value', 'valueLink', 'width']);
    var prepareStyles = this.context.muiTheme.prepareStyles;

    var styles = getStyles(this.props, this.context);

    var mergedRootStyles = (0, _assign2.default)(styles.root, style);
    var mergedListStyles = (0, _assign2.default)(styles.list, listStyle);

    var filteredChildren = this.getFilteredChildren(children);

    var menuItemIndex = 0;
    var newChildren = _react2.default.Children.map(filteredChildren, function (child, index) {
      var childIsDisabled = child.props.disabled;
      var childName = child.type ? child.type.muiName : '';
      var newChild = child;

      switch (childName) {
        case 'MenuItem':
          newChild = _this4.cloneMenuItem(child, menuItemIndex, styles, index);
          break;

        case 'Divider':
          newChild = _react2.default.cloneElement(child, {
            style: (0, _assign2.default)({}, styles.divider, child.props.style)
          });
          break;
      }

      if (childName === 'MenuItem' && !childIsDisabled) {
        menuItemIndex++;
      }

      return newChild;
    });

    return _react2.default.createElement(
      _ClickAwayListener2.default,
      { onClickAway: this.handleClickAway },
      _react2.default.createElement(
        'div',
        {
          onKeyDown: this.handleKeyDown,
          onWheel: this.handleOnWheel,
          style: prepareStyles(mergedRootStyles),
          ref: 'scrollContainer',
          role: 'presentation'
        },
        _react2.default.createElement(
          _List2.default,
          (0, _extends3.default)({}, other, {
            ref: 'list',
            style: mergedListStyles,
            role: 'menu'
          }),
          newChildren
        )
      )
    );
  };

  return Menu;
}(_react.Component), _class.propTypes = {
  /**
   * If true, the width of the menu will be set automatically
   * according to the widths of its children,
   * using proper keyline increments (64px for desktop,
   * 56px otherwise).
   */
  autoWidth: _propTypes2.default.bool,
  /**
   * The content of the menu. This is usually used to pass `MenuItem`
   * elements.
   */
  children: _propTypes2.default.node,
  /**
   * If true, the menu item will render with compact desktop styles.
   */
  desktop: _propTypes2.default.bool,
  /**
   * If true, the menu will not be auto-focused.
   */
  disableAutoFocus: _propTypes2.default.bool,
  /**
   * If true, the menu will be keyboard-focused initially.
   */
  initiallyKeyboardFocused: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the underlying `List` element.
   */
  listStyle: _propTypes2.default.object,
  /**
   * The maximum height of the menu in pixels. If specified,
   * the menu will be scrollable if it is taller than the provided
   * height.
   */
  maxHeight: _propTypes2.default.number,
  /**
   * Override the inline-styles of menu items.
   */
  menuItemStyle: _propTypes2.default.object,
  /**
   * If true, `value` must be an array and the menu will support
   * multiple selections.
   */
  multiple: _propTypes2.default.bool,
  /**
   * Callback function fired when a menu item with `value` not
   * equal to the current `value` of the menu is touch-tapped.
   *
   * @param {object} event TouchTap event targeting the menu item.
   * @param {any}  value If `multiple` is true, the menu's `value`
   * array with either the menu item's `value` added (if
   * it wasn't already selected) or omitted (if it was already selected).
   * Otherwise, the `value` of the menu item.
   */
  onChange: _propTypes2.default.func,
  /**
   * Callback function fired when the menu is focused and the *Esc* key
   * is pressed.
   *
   * @param {object} event `keydown` event targeting the menu.
   */
  onEscKeyDown: _propTypes2.default.func,
  /**
   * Callback function fired when a menu item is touch-tapped.
   *
   * @param {object} event TouchTap event targeting the menu item.
   * @param {object} menuItem The menu item.
   * @param {number} index The index of the menu item.
   */
  onItemTouchTap: _propTypes2.default.func,
  /** @ignore */
  onKeyDown: _propTypes2.default.func,
  /**
   * Callback function fired when the focus on a `MenuItem` is changed.
   * There will be some "duplicate" changes reported if two different
   * focusing event happen, for example if a `MenuItem` is focused via
   * the keyboard and then it is clicked on.
   *
   * @param {object} event The event that triggered the focus change.
   * The event can be null since the focus can be changed for non-event
   * reasons such as prop changes.
   * @param {number} newFocusIndex The index of the newly focused
   * `MenuItem` or `-1` if focus was lost.
   */
  onMenuItemFocusChange: _propTypes2.default.func,
  /**
   * Override the inline-styles of selected menu items.
   */
  selectedMenuItemStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * If `multiple` is true, an array of the `value`s of the selected
   * menu items. Otherwise, the `value` of the selected menu item.
   * If provided, the menu will be a controlled component.
   * This component also supports valueLink.
   */
  value: _propTypes2.default.any,
  /**
   * ValueLink for the menu's `value`.
   */
  valueLink: _propTypes2.default.object,
  /**
   * The width of the menu. If not specified, the menu's width
   * will be set according to the widths of its children, using
   * proper keyline increments (64px for desktop, 56px otherwise).
   */
  width: _propTypes4.default.stringOrNumber
}, _class.defaultProps = {
  autoWidth: true,
  desktop: false,
  disableAutoFocus: false,
  initiallyKeyboardFocused: false,
  maxHeight: null,
  multiple: false,
  onChange: function onChange() {},
  onEscKeyDown: function onEscKeyDown() {},
  onItemTouchTap: function onItemTouchTap() {},
  onKeyDown: function onKeyDown() {}
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _initialiseProps = function _initialiseProps() {
  var _this5 = this;

  this.handleClickAway = function (event) {
    if (event.defaultPrevented) {
      return;
    }

    _this5.setFocusIndex(event, -1, false);
  };

  this.handleKeyDown = function (event) {
    var filteredChildren = _this5.getFilteredChildren(_this5.props.children);
    var key = (0, _keycode2.default)(event);
    switch (key) {
      case 'down':
        event.preventDefault();
        _this5.incrementKeyboardFocusIndex(event, filteredChildren);
        break;
      case 'esc':
        _this5.props.onEscKeyDown(event);
        break;
      case 'tab':
        event.preventDefault();
        if (event.shiftKey) {
          _this5.decrementKeyboardFocusIndex(event);
        } else {
          _this5.incrementKeyboardFocusIndex(event, filteredChildren);
        }
        break;
      case 'up':
        event.preventDefault();
        _this5.decrementKeyboardFocusIndex(event);
        break;
      default:
        if (key && key.length === 1) {
          var hotKeys = _this5.hotKeyHolder.append(key);
          if (_this5.setFocusIndexStartsWith(event, hotKeys)) {
            event.preventDefault();
          }
        }
    }
    _this5.props.onKeyDown(event);
  };

  this.handleOnWheel = function (event) {
    var scrollContainer = _this5.refs.scrollContainer;
    // Only scroll lock if the the Menu is scrollable.
    if (scrollContainer.scrollHeight <= scrollContainer.clientHeight) return;

    var scrollTop = scrollContainer.scrollTop,
        scrollHeight = scrollContainer.scrollHeight,
        clientHeight = scrollContainer.clientHeight;

    var wheelDelta = event.deltaY;
    var isDeltaPositive = wheelDelta > 0;

    if (isDeltaPositive && wheelDelta > scrollHeight - clientHeight - scrollTop) {
      scrollContainer.scrollTop = scrollHeight;
      return _this5.cancelScrollEvent(event);
    } else if (!isDeltaPositive && -wheelDelta > scrollTop) {
      scrollContainer.scrollTop = 0;
      return _this5.cancelScrollEvent(event);
    }
  };
}, _temp);
exports.default = Menu;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  once: function once(el, type, callback) {
    var typeArray = type ? type.split(' ') : [];
    var recursiveFunction = function recursiveFunction(event) {
      event.target.removeEventListener(event.type, recursiveFunction);
      return callback(event);
    };

    for (var i = typeArray.length - 1; i >= 0; i--) {
      this.on(el, typeArray[i], recursiveFunction);
    }
  },
  on: function on(el, type, callback) {
    if (el.addEventListener) {
      el.addEventListener(type, callback);
    } else {
      // IE8+ Support
      el.attachEvent('on' + type, function () {
        callback.call(el);
      });
    }
  },
  off: function off(el, type, callback) {
    if (el.removeEventListener) {
      el.removeEventListener(type, callback);
    } else {
      // IE8+ Support
      el.detachEvent('on' + type, callback);
    }
  },
  isKeyboard: function isKeyboard(event) {
    return ['keydown', 'keypress', 'keyup'].indexOf(event.type) !== -1;
  }
};

/***/ }),
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Checkbox = __webpack_require__(324);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Checkbox2.default;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Dialog = __webpack_require__(337);

var _Dialog2 = _interopRequireDefault(_Dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Dialog2.default;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _FontIcon = __webpack_require__(344);

var _FontIcon2 = _interopRequireDefault(_FontIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _FontIcon2.default;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(14);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _shallowEqual = __webpack_require__(49);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _colorManipulator = __webpack_require__(35);

var _transitions = __webpack_require__(11);

var _transitions2 = _interopRequireDefault(_transitions);

var _EnhancedButton = __webpack_require__(27);

var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);

var _IconButton = __webpack_require__(50);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _expandLess = __webpack_require__(402);

var _expandLess2 = _interopRequireDefault(_expandLess);

var _expandMore = __webpack_require__(403);

var _expandMore2 = _interopRequireDefault(_expandMore);

var _NestedList = __webpack_require__(349);

var _NestedList2 = _interopRequireDefault(_NestedList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context, state) {
  var insetChildren = props.insetChildren,
      leftAvatar = props.leftAvatar,
      leftCheckbox = props.leftCheckbox,
      leftIcon = props.leftIcon,
      nestedLevel = props.nestedLevel,
      rightAvatar = props.rightAvatar,
      rightIcon = props.rightIcon,
      rightIconButton = props.rightIconButton,
      rightToggle = props.rightToggle,
      secondaryText = props.secondaryText,
      secondaryTextLines = props.secondaryTextLines;
  var muiTheme = context.muiTheme;
  var listItem = muiTheme.listItem;


  var textColor = muiTheme.baseTheme.palette.textColor;
  var hoverColor = props.hoverColor || (0, _colorManipulator.fade)(textColor, 0.1);
  var singleAvatar = !secondaryText && (leftAvatar || rightAvatar);
  var singleNoAvatar = !secondaryText && !(leftAvatar || rightAvatar);
  var twoLine = secondaryText && secondaryTextLines === 1;
  var threeLine = secondaryText && secondaryTextLines > 1;

  var isKeyboardFocused = (props.isKeyboardFocused !== undefined ? props : state).isKeyboardFocused;

  var styles = {
    root: {
      backgroundColor: (isKeyboardFocused || state.hovered) && !state.rightIconButtonHovered && !state.rightIconButtonKeyboardFocused ? hoverColor : null,
      color: textColor,
      display: 'block',
      fontSize: 16,
      lineHeight: '16px',
      position: 'relative',
      transition: _transitions2.default.easeOut()
    },

    // This inner div is needed so that ripples will span the entire container
    innerDiv: {
      marginLeft: nestedLevel * listItem.nestedLevelDepth,
      paddingLeft: leftIcon || leftAvatar || leftCheckbox || insetChildren ? 72 : 16,
      paddingRight: rightIcon || rightAvatar || rightIconButton ? 56 : rightToggle ? 72 : 16,
      paddingBottom: singleAvatar ? 20 : 16,
      paddingTop: singleNoAvatar || threeLine ? 16 : 20,
      position: 'relative'
    },

    icons: {
      height: 24,
      width: 24,
      display: 'block',
      position: 'absolute',
      top: twoLine ? 12 : singleAvatar ? 4 : 0,
      margin: 12
    },

    leftIcon: {
      left: 4
    },

    rightIcon: {
      right: 4
    },

    avatars: {
      position: 'absolute',
      top: singleAvatar ? 8 : 16
    },

    label: {
      cursor: 'pointer'
    },

    leftAvatar: {
      left: 16
    },

    rightAvatar: {
      right: 16
    },

    leftCheckbox: {
      position: 'absolute',
      display: 'block',
      width: 24,
      top: twoLine ? 24 : singleAvatar ? 16 : 12,
      left: 16
    },

    primaryText: {},

    rightIconButton: {
      position: 'absolute',
      display: 'block',
      top: twoLine ? 12 : singleAvatar ? 4 : 0,
      right: 4
    },

    rightToggle: {
      position: 'absolute',
      display: 'block',
      width: 54,
      top: twoLine ? 25 : singleAvatar ? 17 : 13,
      right: 8
    },

    secondaryText: {
      fontSize: 14,
      lineHeight: threeLine ? '18px' : '16px',
      height: threeLine ? 36 : 16,
      margin: 0,
      marginTop: 4,
      color: listItem.secondaryTextColor,

      // needed for 2 and 3 line ellipsis
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: threeLine ? null : 'nowrap',
      display: threeLine ? '-webkit-box' : null,
      WebkitLineClamp: threeLine ? 2 : null,
      WebkitBoxOrient: threeLine ? 'vertical' : null
    }
  };

  return styles;
}

var ListItem = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(ListItem, _Component);

  function ListItem() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ListItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      hovered: false,
      isKeyboardFocused: false,
      open: false,
      rightIconButtonHovered: false,
      rightIconButtonKeyboardFocused: false,
      touch: false
    }, _this.handleKeyboardFocus = function (event, isKeyboardFocused) {
      _this.setState({ isKeyboardFocused: isKeyboardFocused });
      _this.props.onKeyboardFocus(event, isKeyboardFocused);
    }, _this.handleMouseEnter = function (event) {
      if (!_this.state.touch) _this.setState({ hovered: true });
      _this.props.onMouseEnter(event);
    }, _this.handleMouseLeave = function (event) {
      _this.setState({ hovered: false });
      _this.props.onMouseLeave(event);
    }, _this.handleNestedListToggle = function (event) {
      event.stopPropagation();

      if (_this.props.open === null) {
        _this.setState({ open: !_this.state.open }, function () {
          _this.props.onNestedListToggle(_this);
        });
      } else {
        // Exposing `this` in the callback is quite a bad API.
        // I'm doing a one level deep clone to expose a fake state.open.
        _this.props.onNestedListToggle((0, _extends3.default)({}, _this, {
          state: {
            open: !_this.state.open
          }
        }));
      }
    }, _this.handleRightIconButtonKeyboardFocus = function (event, isKeyboardFocused) {
      if (isKeyboardFocused) {
        _this.setState({
          isKeyboardFocused: false,
          rightIconButtonKeyboardFocused: isKeyboardFocused
        });
      }

      var iconButton = _this.props.rightIconButton;

      if (iconButton && iconButton.props.onKeyboardFocus) iconButton.props.onKeyboardFocus(event, isKeyboardFocused);
    }, _this.handleRightIconButtonMouseLeave = function (event) {
      var iconButton = _this.props.rightIconButton;
      _this.setState({ rightIconButtonHovered: false });
      if (iconButton && iconButton.props.onMouseLeave) iconButton.props.onMouseLeave(event);
    }, _this.handleRightIconButtonMouseEnter = function (event) {
      var iconButton = _this.props.rightIconButton;
      _this.setState({ rightIconButtonHovered: true });
      if (iconButton && iconButton.props.onMouseEnter) iconButton.props.onMouseEnter(event);
    }, _this.handleRightIconButtonMouseUp = function (event) {
      var iconButton = _this.props.rightIconButton;
      event.stopPropagation();
      if (iconButton && iconButton.props.onMouseUp) iconButton.props.onMouseUp(event);
    }, _this.handleRightIconButtonTouchTap = function (event) {
      var iconButton = _this.props.rightIconButton;

      // Stop the event from bubbling up to the list-item
      event.stopPropagation();
      if (iconButton && iconButton.props.onTouchTap) iconButton.props.onTouchTap(event);
    }, _this.handleTouchStart = function (event) {
      _this.setState({ touch: true });
      _this.props.onTouchStart(event);
    }, _this.handleTouchEnd = function (event) {
      _this.setState({ touch: true });
      _this.props.onTouchEnd(event);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  ListItem.prototype.componentWillMount = function componentWillMount() {
    this.setState({
      open: this.props.open === null ? this.props.initiallyOpen === true : this.props.open
    });
  };

  ListItem.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    // update the state when the component is controlled.
    if (nextProps.open !== null) this.setState({ open: nextProps.open });
    if (nextProps.disabled && this.state.hovered) this.setState({ hovered: false });
  };

  ListItem.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState, nextContext) {
    return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState) || !(0, _shallowEqual2.default)(this.context, nextContext);
  };

  // This method is needed by the `MenuItem` component.


  ListItem.prototype.applyFocusState = function applyFocusState(focusState) {
    if (this.button) {
      var buttonEl = _reactDom2.default.findDOMNode(this.button);

      switch (focusState) {
        case 'none':
          buttonEl.blur();
          break;
        case 'focused':
          buttonEl.focus();
          break;
        case 'keyboard-focused':
          this.button.setKeyboardFocus();
          buttonEl.focus();
          break;
      }
    }
  };

  ListItem.prototype.createDisabledElement = function createDisabledElement(styles, contentChildren, additionalProps) {
    var _props = this.props,
        innerDivStyle = _props.innerDivStyle,
        style = _props.style;


    var mergedDivStyles = (0, _assign2.default)({}, styles.root, styles.innerDiv, innerDivStyle, style);

    return _react2.default.createElement(
      'div',
      (0, _extends3.default)({}, additionalProps, {
        style: this.context.muiTheme.prepareStyles(mergedDivStyles)
      }),
      contentChildren
    );
  };

  ListItem.prototype.createLabelElement = function createLabelElement(styles, contentChildren, additionalProps) {
    var _props2 = this.props,
        innerDivStyle = _props2.innerDivStyle,
        style = _props2.style;


    var mergedLabelStyles = (0, _assign2.default)({}, styles.root, styles.innerDiv, innerDivStyle, styles.label, style);

    return _react2.default.createElement(
      'label',
      (0, _extends3.default)({}, additionalProps, {
        style: this.context.muiTheme.prepareStyles(mergedLabelStyles)
      }),
      contentChildren
    );
  };

  ListItem.prototype.createTextElement = function createTextElement(styles, data, key) {
    var prepareStyles = this.context.muiTheme.prepareStyles;

    if (_react2.default.isValidElement(data)) {
      var style = (0, _assign2.default)({}, styles, data.props.style);
      if (typeof data.type === 'string') {
        // if element is a native dom node
        style = prepareStyles(style);
      }
      return _react2.default.cloneElement(data, {
        key: key,
        style: style
      });
    }

    return _react2.default.createElement(
      'div',
      { key: key, style: prepareStyles(styles) },
      data
    );
  };

  ListItem.prototype.pushElement = function pushElement(children, element, baseStyles, additionalProps) {
    if (element) {
      var styles = (0, _assign2.default)({}, baseStyles, element.props.style);
      children.push(_react2.default.cloneElement(element, (0, _extends3.default)({
        key: children.length,
        style: styles
      }, additionalProps)));
    }
  };

  ListItem.prototype.render = function render() {
    var _this2 = this;

    var _props3 = this.props,
        autoGenerateNestedIndicator = _props3.autoGenerateNestedIndicator,
        children = _props3.children,
        containerElement = _props3.containerElement,
        disabled = _props3.disabled,
        disableKeyboardFocus = _props3.disableKeyboardFocus,
        hoverColor = _props3.hoverColor,
        initiallyOpen = _props3.initiallyOpen,
        innerDivStyle = _props3.innerDivStyle,
        insetChildren = _props3.insetChildren,
        leftAvatar = _props3.leftAvatar,
        leftCheckbox = _props3.leftCheckbox,
        leftIcon = _props3.leftIcon,
        nestedItems = _props3.nestedItems,
        nestedLevel = _props3.nestedLevel,
        nestedListStyle = _props3.nestedListStyle,
        onKeyboardFocus = _props3.onKeyboardFocus,
        isKeyboardFocused = _props3.isKeyboardFocused,
        onMouseEnter = _props3.onMouseEnter,
        onMouseLeave = _props3.onMouseLeave,
        onNestedListToggle = _props3.onNestedListToggle,
        onTouchStart = _props3.onTouchStart,
        onTouchTap = _props3.onTouchTap,
        rightAvatar = _props3.rightAvatar,
        rightIcon = _props3.rightIcon,
        rightIconButton = _props3.rightIconButton,
        rightToggle = _props3.rightToggle,
        primaryText = _props3.primaryText,
        primaryTogglesNestedList = _props3.primaryTogglesNestedList,
        secondaryText = _props3.secondaryText,
        secondaryTextLines = _props3.secondaryTextLines,
        style = _props3.style,
        other = (0, _objectWithoutProperties3.default)(_props3, ['autoGenerateNestedIndicator', 'children', 'containerElement', 'disabled', 'disableKeyboardFocus', 'hoverColor', 'initiallyOpen', 'innerDivStyle', 'insetChildren', 'leftAvatar', 'leftCheckbox', 'leftIcon', 'nestedItems', 'nestedLevel', 'nestedListStyle', 'onKeyboardFocus', 'isKeyboardFocused', 'onMouseEnter', 'onMouseLeave', 'onNestedListToggle', 'onTouchStart', 'onTouchTap', 'rightAvatar', 'rightIcon', 'rightIconButton', 'rightToggle', 'primaryText', 'primaryTogglesNestedList', 'secondaryText', 'secondaryTextLines', 'style']);
    var prepareStyles = this.context.muiTheme.prepareStyles;

    var styles = getStyles(this.props, this.context, this.state);
    var contentChildren = [children];

    if (leftIcon) {
      var additionalProps = {
        color: leftIcon.props.color || this.context.muiTheme.listItem.leftIconColor
      };
      this.pushElement(contentChildren, leftIcon, (0, _assign2.default)({}, styles.icons, styles.leftIcon), additionalProps);
    }

    if (rightIcon) {
      var _additionalProps = {
        color: rightIcon.props.color || this.context.muiTheme.listItem.rightIconColor
      };
      this.pushElement(contentChildren, rightIcon, (0, _assign2.default)({}, styles.icons, styles.rightIcon), _additionalProps);
    }

    if (leftAvatar) {
      this.pushElement(contentChildren, leftAvatar, (0, _assign2.default)({}, styles.avatars, styles.leftAvatar));
    }

    if (rightAvatar) {
      this.pushElement(contentChildren, rightAvatar, (0, _assign2.default)({}, styles.avatars, styles.rightAvatar));
    }

    if (leftCheckbox) {
      this.pushElement(contentChildren, leftCheckbox, (0, _assign2.default)({}, styles.leftCheckbox));
    }

    // RightIconButtonElement
    var hasNestListItems = nestedItems.length;
    var hasRightElement = rightAvatar || rightIcon || rightIconButton || rightToggle;
    var needsNestedIndicator = hasNestListItems && autoGenerateNestedIndicator && !hasRightElement;

    if (rightIconButton || needsNestedIndicator) {
      var rightIconButtonElement = rightIconButton;
      var rightIconButtonHandlers = {
        onKeyboardFocus: this.handleRightIconButtonKeyboardFocus,
        onMouseEnter: this.handleRightIconButtonMouseEnter,
        onMouseLeave: this.handleRightIconButtonMouseLeave,
        onTouchTap: this.handleRightIconButtonTouchTap,
        onMouseDown: this.handleRightIconButtonMouseUp,
        onMouseUp: this.handleRightIconButtonMouseUp
      };

      // Create a nested list indicator icon if we don't have an icon on the right
      if (needsNestedIndicator) {
        rightIconButtonElement = this.state.open ? _react2.default.createElement(
          _IconButton2.default,
          null,
          _react2.default.createElement(_expandLess2.default, null)
        ) : _react2.default.createElement(
          _IconButton2.default,
          null,
          _react2.default.createElement(_expandMore2.default, null)
        );
        rightIconButtonHandlers.onTouchTap = this.handleNestedListToggle;
      }

      this.pushElement(contentChildren, rightIconButtonElement, (0, _assign2.default)({}, styles.rightIconButton), rightIconButtonHandlers);
    }

    if (rightToggle) {
      this.pushElement(contentChildren, rightToggle, (0, _assign2.default)({}, styles.rightToggle));
    }

    if (primaryText) {
      var primaryTextElement = this.createTextElement(styles.primaryText, primaryText, 'primaryText');
      contentChildren.push(primaryTextElement);
    }

    if (secondaryText) {
      var secondaryTextElement = this.createTextElement(styles.secondaryText, secondaryText, 'secondaryText');
      contentChildren.push(secondaryTextElement);
    }

    var nestedList = nestedItems.length ? _react2.default.createElement(
      _NestedList2.default,
      { nestedLevel: nestedLevel, open: this.state.open, style: nestedListStyle },
      nestedItems
    ) : undefined;

    var simpleLabel = !primaryTogglesNestedList && (leftCheckbox || rightToggle);

    return _react2.default.createElement(
      'div',
      null,
      simpleLabel ? this.createLabelElement(styles, contentChildren, other) : disabled ? this.createDisabledElement(styles, contentChildren, other) : _react2.default.createElement(
        _EnhancedButton2.default,
        (0, _extends3.default)({
          containerElement: containerElement
        }, other, {
          disableKeyboardFocus: disableKeyboardFocus || this.state.rightIconButtonKeyboardFocused,
          onKeyboardFocus: this.handleKeyboardFocus,
          onMouseLeave: this.handleMouseLeave,
          onMouseEnter: this.handleMouseEnter,
          onTouchStart: this.handleTouchStart,
          onTouchEnd: this.handleTouchEnd,
          onTouchTap: primaryTogglesNestedList ? this.handleNestedListToggle : onTouchTap,
          ref: function ref(node) {
            return _this2.button = node;
          },
          style: (0, _assign2.default)({}, styles.root, style)
        }),
        _react2.default.createElement(
          'div',
          { style: prepareStyles((0, _assign2.default)(styles.innerDiv, innerDivStyle)) },
          contentChildren
        )
      ),
      nestedList
    );
  };

  return ListItem;
}(_react.Component), _class.muiName = 'ListItem', _class.propTypes = {
  /**
   * If true, generate a nested-list-indicator icon when nested list
   * items are detected. Note that an indicator will not be created
   * if a `rightIcon` or `rightIconButton` has been provided to
   * the element.
   */
  autoGenerateNestedIndicator: _propTypes2.default.bool,
  /**
   * Children passed into the `ListItem`.
   */
  children: _propTypes2.default.node,
  /**
   * The element to use as the container for the ListItem. Either a string to
   * use a DOM element or a ReactElement. This is useful for wrapping the
   * ListItem in a custom Link component. If a ReactElement is given, ensure
   * that it passes all of its given props through to the underlying DOM
   * element and renders its children prop for proper integration.
   */
  containerElement: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  /**
   * If true, the element will not be able to be focused by the keyboard.
   */
  disableKeyboardFocus: _propTypes2.default.bool,
  /**
   * If true, the element will not be clickable
   * and will not display hover effects.
   * This is automatically disabled if either `leftCheckbox`
   * or `rightToggle` is set.
   */
  disabled: _propTypes2.default.bool,
  /**
  * Override the hover background color.
  */
  hoverColor: _propTypes2.default.string,
  /**
   * If true, the nested `ListItem`s are initially displayed.
   */
  initiallyOpen: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the inner div element.
   */
  innerDivStyle: _propTypes2.default.object,
  /**
   * If true, the children will be indented by 72px.
   * This is useful if there is no left avatar or left icon.
   */
  insetChildren: _propTypes2.default.bool,
  /**
   * Use to control if the list item should render as keyboard focused.  If
   * undefined (default), this will be automatically managed.  If provided,
   * it will change the components style.  Note that this will not change the
   * actual focus - and should only be used when you want to simulate
   * keyboard focus (eg. in a rich text input autocomplete).
   */
  isKeyboardFocused: _propTypes2.default.bool,
  /**
   * This is the `Avatar` element to be displayed on the left side.
   */
  leftAvatar: _propTypes2.default.element,
  /**
   * This is the `Checkbox` element to be displayed on the left side.
   */
  leftCheckbox: _propTypes2.default.element,
  /**
   * This is the `SvgIcon` or `FontIcon` to be displayed on the left side.
   */
  leftIcon: _propTypes2.default.element,
  /**
   * An array of `ListItem`s to nest underneath the current `ListItem`.
   */
  nestedItems: _propTypes2.default.arrayOf(_propTypes2.default.element),
  /**
   * Controls how deep a `ListItem` appears.
   * This property is automatically managed, so modify at your own risk.
   */
  nestedLevel: _propTypes2.default.number,
  /**
   * Override the inline-styles of the nested items' `NestedList`.
   */
  nestedListStyle: _propTypes2.default.object,
  /**
   * Callback function fired when the `ListItem` is focused or blurred by the keyboard.
   *
   * @param {object} event `focus` or `blur` event targeting the `ListItem`.
   * @param {boolean} isKeyboardFocused If true, the `ListItem` is focused.
   */
  onKeyboardFocus: _propTypes2.default.func,
  /** @ignore */
  onMouseEnter: _propTypes2.default.func,
  /** @ignore */
  onMouseLeave: _propTypes2.default.func,
  /**
   * Callbak function fired when the `ListItem` toggles its nested list.
   *
   * @param {object} listItem The `ListItem`.
   */
  onNestedListToggle: _propTypes2.default.func,
  /** @ignore */
  onTouchEnd: _propTypes2.default.func,
  /** @ignore */
  onTouchStart: _propTypes2.default.func,
  /** @ignore */
  onTouchTap: _propTypes2.default.func,
  /**
   * Control toggle state of nested list.
   */
  open: _propTypes2.default.bool,
  /**
   * This is the block element that contains the primary text.
   * If a string is passed in, a div tag will be rendered.
   */
  primaryText: _propTypes2.default.node,
  /**
   * If true, clicking or tapping the primary text of the `ListItem`
   * toggles the nested list.
   */
  primaryTogglesNestedList: _propTypes2.default.bool,
  /**
   * This is the `Avatar` element to be displayed on the right side.
   */
  rightAvatar: _propTypes2.default.element,
  /**
   * This is the `SvgIcon` or `FontIcon` to be displayed on the right side.
   */
  rightIcon: _propTypes2.default.element,
  /**
   * This is the `IconButton` to be displayed on the right side.
   * Hovering over this button will remove the `ListItem` hover.
   * Also, clicking on this button will not trigger a
   * ripple on the `ListItem`; the event will be stopped and prevented
   * from bubbling up to cause a `ListItem` click.
   */
  rightIconButton: _propTypes2.default.element,
  /**
   * This is the `Toggle` element to display on the right side.
   */
  rightToggle: _propTypes2.default.element,
  /**
   * This is the block element that contains the secondary text.
   * If a string is passed in, a div tag will be rendered.
   */
  secondaryText: _propTypes2.default.node,
  /**
   * Can be 1 or 2. This is the number of secondary
   * text lines before ellipsis will show.
   */
  secondaryTextLines: _propTypes2.default.oneOf([1, 2]),
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
}, _class.defaultProps = {
  autoGenerateNestedIndicator: true,
  containerElement: 'span',
  disableKeyboardFocus: false,
  disabled: false,
  initiallyOpen: false,
  insetChildren: false,
  nestedItems: [],
  nestedLevel: 0,
  onKeyboardFocus: function onKeyboardFocus() {},
  onMouseEnter: function onMouseEnter() {},
  onMouseLeave: function onMouseLeave() {},
  onNestedListToggle: function onNestedListToggle() {},
  onTouchEnd: function onTouchEnd() {},
  onTouchStart: function onTouchStart() {},
  open: null,
  primaryTogglesNestedList: false,
  secondaryTextLines: 1
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = ListItem;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _MenuItem = __webpack_require__(110);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _MenuItem2.default;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Tooltip = __webpack_require__(189);

var _Tooltip2 = _interopRequireDefault(_Tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var tableHeaderColumn = context.muiTheme.tableHeaderColumn;


  return {
    root: {
      fontWeight: 'normal',
      fontSize: 12,
      paddingLeft: tableHeaderColumn.spacing,
      paddingRight: tableHeaderColumn.spacing,
      height: tableHeaderColumn.height,
      textAlign: 'left',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      color: tableHeaderColumn.textColor,
      position: 'relative'
    },
    tooltip: {
      boxSizing: 'border-box',
      marginTop: tableHeaderColumn.height / 2
    }
  };
}

var TableHeaderColumn = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(TableHeaderColumn, _Component);

  function TableHeaderColumn() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TableHeaderColumn);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      hovered: false
    }, _this.onMouseEnter = function () {
      if (_this.props.tooltip !== undefined) {
        _this.setState({ hovered: true });
      }
    }, _this.onMouseLeave = function () {
      if (_this.props.tooltip !== undefined) {
        _this.setState({ hovered: false });
      }
    }, _this.onClick = function (event) {
      if (_this.props.onClick) {
        _this.props.onClick(event, _this.props.columnNumber);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  TableHeaderColumn.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        className = _props.className,
        columnNumber = _props.columnNumber,
        hoverable = _props.hoverable,
        onClick = _props.onClick,
        onHover = _props.onHover,
        onHoverExit = _props.onHoverExit,
        style = _props.style,
        tooltip = _props.tooltip,
        tooltipStyle = _props.tooltipStyle,
        other = (0, _objectWithoutProperties3.default)(_props, ['children', 'className', 'columnNumber', 'hoverable', 'onClick', 'onHover', 'onHoverExit', 'style', 'tooltip', 'tooltipStyle']);
    var prepareStyles = this.context.muiTheme.prepareStyles;

    var styles = getStyles(this.props, this.context);

    var handlers = {
      onMouseEnter: this.onMouseEnter,
      onMouseLeave: this.onMouseLeave,
      onClick: this.onClick
    };

    var tooltipNode = void 0;

    if (tooltip !== undefined) {
      tooltipNode = _react2.default.createElement(_Tooltip2.default, {
        label: tooltip,
        show: this.state.hovered,
        style: (0, _assign2.default)(styles.tooltip, tooltipStyle)
      });
    }

    return _react2.default.createElement(
      'th',
      (0, _extends3.default)({
        className: className,
        style: prepareStyles((0, _assign2.default)(styles.root, style))
      }, handlers, other),
      tooltipNode,
      children
    );
  };

  return TableHeaderColumn;
}(_react.Component), _class.propTypes = {
  children: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * Number to identify the header row. This property
   * is automatically populated when used with TableHeader.
   */
  columnNumber: _propTypes2.default.number,
  /**
   * @ignore
   * Not used here but we need to remove it from the root element.
   */
  hoverable: _propTypes2.default.bool,
  /** @ignore */
  onClick: _propTypes2.default.func,
  /**
   * @ignore
   * Not used here but we need to remove it from the root element.
   */
  onHover: _propTypes2.default.func,
  /**
   * @ignore
   * Not used here but we need to remove it from the root element.
   */
  onHoverExit: _propTypes2.default.func,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * The string to supply to the tooltip. If not
   * string is supplied no tooltip will be shown.
   */
  tooltip: _propTypes2.default.string,
  /**
   * Additional styling that can be applied to the tooltip.
   */
  tooltipStyle: _propTypes2.default.object
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = TableHeaderColumn;

/***/ }),
/* 108 */,
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Subheader = __webpack_require__(172);

var _Subheader2 = _interopRequireDefault(_Subheader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var List = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(List, _Component);

  function List() {
    (0, _classCallCheck3.default)(this, List);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  List.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        style = _props.style,
        other = (0, _objectWithoutProperties3.default)(_props, ['children', 'style']);
    var prepareStyles = this.context.muiTheme.prepareStyles;


    var hasSubheader = false;

    var firstChild = _react.Children.toArray(children)[0];
    if ((0, _react.isValidElement)(firstChild) && firstChild.type === _Subheader2.default) {
      hasSubheader = true;
    }

    var styles = {
      root: {
        padding: (hasSubheader ? 0 : 8) + 'px 0px 8px 0px'
      }
    };

    return _react2.default.createElement(
      'div',
      (0, _extends3.default)({}, other, { style: prepareStyles((0, _assign2.default)(styles.root, style)) }),
      children
    );
  };

  return List;
}(_react.Component), _class.propTypes = {
  /**
   * These are usually `ListItem`s that are passed to
   * be part of the list.
   */
  children: _propTypes2.default.node,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp);
exports.default = List;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(14);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _shallowEqual = __webpack_require__(49);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _Popover = __webpack_require__(51);

var _Popover2 = _interopRequireDefault(_Popover);

var _check = __webpack_require__(399);

var _check2 = _interopRequireDefault(_check);

var _ListItem = __webpack_require__(105);

var _ListItem2 = _interopRequireDefault(_ListItem);

var _Menu = __webpack_require__(81);

var _Menu2 = _interopRequireDefault(_Menu);

var _propTypes3 = __webpack_require__(20);

var _propTypes4 = _interopRequireDefault(_propTypes3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nestedMenuStyle = {
  position: 'relative'
};

function getStyles(props, context) {
  var disabledColor = context.muiTheme.baseTheme.palette.disabledColor;
  var textColor = context.muiTheme.baseTheme.palette.textColor;
  var indent = props.desktop ? 64 : 72;
  var sidePadding = props.desktop ? 24 : 16;

  var styles = {
    root: {
      color: props.disabled ? disabledColor : textColor,
      cursor: props.disabled ? 'default' : 'pointer',
      minHeight: props.desktop ? '32px' : '48px',
      lineHeight: props.desktop ? '32px' : '48px',
      fontSize: props.desktop ? 15 : 16,
      whiteSpace: 'nowrap'
    },

    innerDivStyle: {
      paddingLeft: props.leftIcon || props.insetChildren || props.checked ? indent : sidePadding,
      paddingRight: props.rightIcon ? indent : sidePadding,
      paddingBottom: 0,
      paddingTop: 0
    },

    secondaryText: {
      float: 'right'
    },

    leftIconDesktop: {
      margin: 0,
      left: 24,
      top: 4
    },

    rightIconDesktop: {
      margin: 0,
      right: 24,
      top: 4,
      fill: context.muiTheme.menuItem.rightIconDesktopFill
    }
  };

  return styles;
}

var MenuItem = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(MenuItem, _Component);

  function MenuItem() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, MenuItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      open: false
    }, _this.cloneMenuItem = function (item) {
      return _react2.default.cloneElement(item, {
        onTouchTap: function onTouchTap(event) {
          if (!item.props.menuItems) {
            _this.handleRequestClose();
          }

          if (item.props.onTouchTap) {
            item.props.onTouchTap(event);
          }
        }
      });
    }, _this.handleTouchTap = function (event) {
      event.preventDefault();

      _this.setState({
        open: true,
        anchorEl: _reactDom2.default.findDOMNode(_this)
      });

      if (_this.props.onTouchTap) {
        _this.props.onTouchTap(event);
      }
    }, _this.handleRequestClose = function () {
      _this.setState({
        open: false,
        anchorEl: null
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  MenuItem.prototype.componentDidMount = function componentDidMount() {
    this.applyFocusState();
  };

  MenuItem.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.state.open && nextProps.focusState === 'none') {
      this.handleRequestClose();
    }
  };

  MenuItem.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState, nextContext) {
    return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState) || !(0, _shallowEqual2.default)(this.context, nextContext);
  };

  MenuItem.prototype.componentDidUpdate = function componentDidUpdate() {
    this.applyFocusState();
  };

  MenuItem.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.state.open) {
      this.setState({
        open: false
      });
    }
  };

  MenuItem.prototype.applyFocusState = function applyFocusState() {
    this.refs.listItem.applyFocusState(this.props.focusState);
  };

  MenuItem.prototype.render = function render() {
    var _props = this.props,
        checked = _props.checked,
        children = _props.children,
        desktop = _props.desktop,
        disabled = _props.disabled,
        focusState = _props.focusState,
        innerDivStyle = _props.innerDivStyle,
        insetChildren = _props.insetChildren,
        leftIcon = _props.leftIcon,
        menuItems = _props.menuItems,
        rightIcon = _props.rightIcon,
        secondaryText = _props.secondaryText,
        style = _props.style,
        animation = _props.animation,
        anchorOrigin = _props.anchorOrigin,
        targetOrigin = _props.targetOrigin,
        value = _props.value,
        other = (0, _objectWithoutProperties3.default)(_props, ['checked', 'children', 'desktop', 'disabled', 'focusState', 'innerDivStyle', 'insetChildren', 'leftIcon', 'menuItems', 'rightIcon', 'secondaryText', 'style', 'animation', 'anchorOrigin', 'targetOrigin', 'value']);
    var prepareStyles = this.context.muiTheme.prepareStyles;

    var styles = getStyles(this.props, this.context);
    var mergedRootStyles = (0, _assign2.default)(styles.root, style);
    var mergedInnerDivStyles = (0, _assign2.default)(styles.innerDivStyle, innerDivStyle);

    // Left Icon
    var leftIconElement = leftIcon ? leftIcon : checked ? _react2.default.createElement(_check2.default, null) : null;
    if (leftIconElement) {
      var mergedLeftIconStyles = desktop ? (0, _assign2.default)(styles.leftIconDesktop, leftIconElement.props.style) : leftIconElement.props.style;
      leftIconElement = _react2.default.cloneElement(leftIconElement, { style: mergedLeftIconStyles });
    }

    // Right Icon
    var rightIconElement = void 0;
    if (rightIcon) {
      var mergedRightIconStyles = desktop ? (0, _assign2.default)(styles.rightIconDesktop, rightIcon.props.style) : rightIcon.props.style;
      rightIconElement = _react2.default.cloneElement(rightIcon, { style: mergedRightIconStyles });
    }

    // Secondary Text
    var secondaryTextElement = void 0;
    if (secondaryText) {
      var secondaryTextIsAnElement = _react2.default.isValidElement(secondaryText);
      var mergedSecondaryTextStyles = secondaryTextIsAnElement ? (0, _assign2.default)(styles.secondaryText, secondaryText.props.style) : null;

      secondaryTextElement = secondaryTextIsAnElement ? _react2.default.cloneElement(secondaryText, { style: mergedSecondaryTextStyles }) : _react2.default.createElement(
        'div',
        { style: prepareStyles(styles.secondaryText) },
        secondaryText
      );
    }
    var childMenuPopover = void 0;
    if (menuItems) {
      childMenuPopover = _react2.default.createElement(
        _Popover2.default,
        {
          animation: animation,
          anchorOrigin: anchorOrigin,
          anchorEl: this.state.anchorEl,
          open: this.state.open,
          targetOrigin: targetOrigin,
          useLayerForClickAway: false,
          onRequestClose: this.handleRequestClose
        },
        _react2.default.createElement(
          _Menu2.default,
          { desktop: desktop, disabled: disabled, style: nestedMenuStyle },
          _react2.default.Children.map(menuItems, this.cloneMenuItem)
        )
      );
      other.onTouchTap = this.handleTouchTap;
    }

    return _react2.default.createElement(
      _ListItem2.default,
      (0, _extends3.default)({}, other, {
        disabled: disabled,
        hoverColor: this.context.muiTheme.menuItem.hoverColor,
        innerDivStyle: mergedInnerDivStyles,
        insetChildren: insetChildren,
        leftIcon: leftIconElement,
        ref: 'listItem',
        rightIcon: rightIconElement,
        role: 'menuitem',
        style: mergedRootStyles
      }),
      children,
      secondaryTextElement,
      childMenuPopover
    );
  };

  return MenuItem;
}(_react.Component), _class.muiName = 'MenuItem', _class.propTypes = {
  /**
   * Location of the anchor for the popover of nested `MenuItem`
   * elements.
   * Options:
   * horizontal: [left, middle, right]
   * vertical: [top, center, bottom].
   */
  anchorOrigin: _propTypes4.default.origin,
  /**
   * Override the default animation component used.
   */
  animation: _propTypes2.default.func,
  /**
   * If true, a left check mark will be rendered.
   */
  checked: _propTypes2.default.bool,
  /**
   * Elements passed as children to the underlying `ListItem`.
   */
  children: _propTypes2.default.node,
  /**
   * @ignore
   * If true, the menu item will render with compact desktop
   * styles.
   */
  desktop: _propTypes2.default.bool,
  /**
   * If true, the menu item will be disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * The focus state of the menu item. This prop is used to set the focus
   * state of the underlying `ListItem`.
   */
  focusState: _propTypes2.default.oneOf(['none', 'focused', 'keyboard-focused']),
  /**
   * Override the inline-styles of the inner div.
   */
  innerDivStyle: _propTypes2.default.object,
  /**
   * If true, the children will be indented.
   * This is only needed when there is no `leftIcon`.
   */
  insetChildren: _propTypes2.default.bool,
  /**
   * The `SvgIcon` or `FontIcon` to be displayed on the left side.
   */
  leftIcon: _propTypes2.default.element,
  /**
   * `MenuItem` elements to nest within the menu item.
   */
  menuItems: _propTypes2.default.node,
  /**
   * Callback function fired when the menu item is touch-tapped.
   *
   * @param {object} event TouchTap event targeting the menu item.
   */
  onTouchTap: _propTypes2.default.func,
  /**
   * Can be used to render primary text within the menu item.
   */
  primaryText: _propTypes2.default.node,
  /**
   * The `SvgIcon` or `FontIcon` to be displayed on the right side.
   */
  rightIcon: _propTypes2.default.element,
  /**
   * Can be used to render secondary text within the menu item.
   */
  secondaryText: _propTypes2.default.node,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * Location on the popover of nested `MenuItem` elements that will attach
   * to the anchor's origin.
   * Options:
   * horizontal: [left, middle, right]
   * vertical: [top, center, bottom].
   */
  targetOrigin: _propTypes4.default.origin,
  /**
   * The value of the menu item.
   */
  value: _propTypes2.default.any
}, _class.defaultProps = {
  anchorOrigin: { horizontal: 'right', vertical: 'top' },
  checked: false,
  desktop: false,
  disabled: false,
  focusState: 'none',
  insetChildren: false,
  targetOrigin: { horizontal: 'left', vertical: 'top' }
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = MenuItem;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Paper = __webpack_require__(21);

var _Paper2 = _interopRequireDefault(_Paper);

var _transitions = __webpack_require__(11);

var _transitions2 = _interopRequireDefault(_transitions);

var _propTypes3 = __webpack_require__(20);

var _propTypes4 = _interopRequireDefault(_propTypes3);

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
    this.setState({ open: true }); // eslint-disable-line react/no-did-mount-set-state
  };

  PopoverAnimationVertical.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    this.setState({
      open: nextProps.open
    });
  };

  PopoverAnimationVertical.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        style = _props.style,
        zDepth = _props.zDepth;


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

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(14);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _events = __webpack_require__(82);

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isDescendant = function isDescendant(el, target) {
  if (target !== null) {
    return el === target || isDescendant(el, target.parentNode);
  }
  return false;
};

var clickAwayEvents = ['mouseup', 'touchend'];
var bind = function bind(callback) {
  return clickAwayEvents.forEach(function (event) {
    return _events2.default.on(document, event, callback);
  });
};
var unbind = function unbind(callback) {
  return clickAwayEvents.forEach(function (event) {
    return _events2.default.off(document, event, callback);
  });
};

var ClickAwayListener = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(ClickAwayListener, _Component);

  function ClickAwayListener() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ClickAwayListener);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleClickAway = function (event) {
      if (event.defaultPrevented) {
        return;
      }

      // IE11 support, which trigger the handleClickAway even after the unbind
      if (_this.isCurrentlyMounted) {
        var el = _reactDom2.default.findDOMNode(_this);

        if (document.documentElement.contains(event.target) && !isDescendant(el, event.target)) {
          _this.props.onClickAway(event);
        }
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  ClickAwayListener.prototype.componentDidMount = function componentDidMount() {
    this.isCurrentlyMounted = true;
    if (this.props.onClickAway) {
      bind(this.handleClickAway);
    }
  };

  ClickAwayListener.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.onClickAway !== this.props.onClickAway) {
      unbind(this.handleClickAway);
      if (this.props.onClickAway) {
        bind(this.handleClickAway);
      }
    }
  };

  ClickAwayListener.prototype.componentWillUnmount = function componentWillUnmount() {
    this.isCurrentlyMounted = false;
    unbind(this.handleClickAway);
  };

  ClickAwayListener.prototype.render = function render() {
    return this.props.children;
  };

  return ClickAwayListener;
}(_react.Component), _class.propTypes = {
  children: _propTypes2.default.element,
  onClickAway: _propTypes2.default.func
}, _temp2);
exports.default = ClickAwayListener;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactEventListener = __webpack_require__(26);

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _keycode = __webpack_require__(22);

var _keycode2 = _interopRequireDefault(_keycode);

var _transitions = __webpack_require__(11);

var _transitions2 = _interopRequireDefault(_transitions);

var _FocusRipple = __webpack_require__(114);

var _FocusRipple2 = _interopRequireDefault(_FocusRipple);

var _TouchRipple = __webpack_require__(190);

var _TouchRipple2 = _interopRequireDefault(_TouchRipple);

var _Paper = __webpack_require__(21);

var _Paper2 = _interopRequireDefault(_Paper);

var _warning = __webpack_require__(17);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var baseTheme = context.muiTheme.baseTheme;


  return {
    root: {
      cursor: props.disabled ? 'not-allowed' : 'pointer',
      position: 'relative',
      overflow: 'visible',
      display: 'table',
      height: 'auto',
      width: '100%'
    },
    input: {
      position: 'absolute',
      cursor: 'inherit',
      pointerEvents: 'all',
      opacity: 0,
      width: '100%',
      height: '100%',
      zIndex: 2,
      left: 0,
      boxSizing: 'border-box',
      padding: 0,
      margin: 0
    },
    controls: {
      display: 'flex',
      width: '100%',
      height: '100%'
    },
    label: {
      float: 'left',
      position: 'relative',
      display: 'block',
      width: 'calc(100% - 60px)',
      lineHeight: '24px',
      color: baseTheme.palette.textColor,
      fontFamily: baseTheme.fontFamily
    },
    wrap: {
      transition: _transitions2.default.easeOut(),
      float: 'left',
      position: 'relative',
      display: 'block',
      flexShrink: 0,
      width: 60 - baseTheme.spacing.desktopGutterLess,
      marginRight: props.labelPosition === 'right' ? baseTheme.spacing.desktopGutterLess : 0,
      marginLeft: props.labelPosition === 'left' ? baseTheme.spacing.desktopGutterLess : 0
    },
    ripple: {
      color: props.rippleColor || baseTheme.palette.primary1Color,
      height: '200%',
      width: '200%',
      top: -12,
      left: -12
    }
  };
}

var EnhancedSwitch = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(EnhancedSwitch, _Component);

  function EnhancedSwitch() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, EnhancedSwitch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      isKeyboardFocused: false
    }, _this.handleChange = function (event) {
      _this.tabPressed = false;
      _this.setState({
        isKeyboardFocused: false
      });

      var isInputChecked = _this.refs.checkbox.checked;

      if (!_this.props.hasOwnProperty('checked') && _this.props.onParentShouldUpdate) {
        _this.props.onParentShouldUpdate(isInputChecked);
      }

      if (_this.props.onSwitch) {
        _this.props.onSwitch(event, isInputChecked);
      }
    }, _this.handleKeyDown = function (event) {
      var code = (0, _keycode2.default)(event);

      if (code === 'tab') {
        _this.tabPressed = true;
      }
      if (_this.state.isKeyboardFocused && code === 'space') {
        _this.handleChange(event);
      }
    }, _this.handleKeyUp = function (event) {
      if (_this.state.isKeyboardFocused && (0, _keycode2.default)(event) === 'space') {
        _this.handleChange(event);
      }
    }, _this.handleMouseDown = function (event) {
      // only listen to left clicks
      if (event.button === 0) {
        _this.refs.touchRipple.start(event);
      }
    }, _this.handleMouseUp = function () {
      _this.refs.touchRipple.end();
    }, _this.handleMouseLeave = function () {
      _this.refs.touchRipple.end();
    }, _this.handleTouchStart = function (event) {
      _this.refs.touchRipple.start(event);
    }, _this.handleTouchEnd = function () {
      _this.refs.touchRipple.end();
    }, _this.handleBlur = function (event) {
      _this.setState({
        isKeyboardFocused: false
      });

      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }
    }, _this.handleFocus = function (event) {
      // setTimeout is needed becuase the focus event fires first
      // Wait so that we can capture if this was a keyboard focus
      // or touch focus
      setTimeout(function () {
        if (_this.tabPressed) {
          _this.setState({
            isKeyboardFocused: true
          });
        }
      }, 150);

      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  EnhancedSwitch.prototype.componentDidMount = function componentDidMount() {
    var inputNode = this.refs.checkbox;
    if ((!this.props.switched || inputNode.checked !== this.props.switched) && this.props.onParentShouldUpdate) {
      this.props.onParentShouldUpdate(inputNode.checked);
    }
  };

  EnhancedSwitch.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var hasCheckedProp = nextProps.hasOwnProperty('checked');
    var hasNewDefaultProp = nextProps.hasOwnProperty('defaultChecked') && nextProps.defaultChecked !== this.props.defaultChecked;

    if (hasCheckedProp || hasNewDefaultProp) {
      var switched = nextProps.checked || nextProps.defaultChecked || false;

      this.setState({
        switched: switched
      });

      if (this.props.onParentShouldUpdate && switched !== this.props.switched) {
        this.props.onParentShouldUpdate(switched);
      }
    }
  };

  EnhancedSwitch.prototype.isSwitched = function isSwitched() {
    return this.refs.checkbox.checked;
  };

  // no callback here because there is no event


  EnhancedSwitch.prototype.setSwitched = function setSwitched(newSwitchedValue) {
    if (!this.props.hasOwnProperty('checked') || this.props.checked === false) {
      if (this.props.onParentShouldUpdate) {
        this.props.onParentShouldUpdate(newSwitchedValue);
      }
      this.refs.checkbox.checked = newSwitchedValue;
    } else {
      (0, _warning2.default)(false, 'Material-UI: Cannot call set method while checked is defined as a property.');
    }
  };

  EnhancedSwitch.prototype.getValue = function getValue() {
    return this.refs.checkbox.value;
  };

  // Checkbox inputs only use SPACE to change their state. Using ENTER will
  // update the ui but not the input.


  /**
   * Because both the ripples and the checkbox input cannot share pointer
   * events, the checkbox input takes control of pointer events and calls
   * ripple animations manually.
   */


  EnhancedSwitch.prototype.render = function render() {
    var _props = this.props,
        name = _props.name,
        value = _props.value,
        iconStyle = _props.iconStyle,
        inputStyle = _props.inputStyle,
        inputType = _props.inputType,
        label = _props.label,
        labelStyle = _props.labelStyle,
        labelPosition = _props.labelPosition,
        onSwitch = _props.onSwitch,
        onBlur = _props.onBlur,
        onFocus = _props.onFocus,
        onMouseUp = _props.onMouseUp,
        onMouseDown = _props.onMouseDown,
        onMouseLeave = _props.onMouseLeave,
        onTouchStart = _props.onTouchStart,
        onTouchEnd = _props.onTouchEnd,
        onParentShouldUpdate = _props.onParentShouldUpdate,
        disabled = _props.disabled,
        disableTouchRipple = _props.disableTouchRipple,
        disableFocusRipple = _props.disableFocusRipple,
        className = _props.className,
        rippleColor = _props.rippleColor,
        rippleStyle = _props.rippleStyle,
        style = _props.style,
        switched = _props.switched,
        switchElement = _props.switchElement,
        thumbStyle = _props.thumbStyle,
        trackStyle = _props.trackStyle,
        other = (0, _objectWithoutProperties3.default)(_props, ['name', 'value', 'iconStyle', 'inputStyle', 'inputType', 'label', 'labelStyle', 'labelPosition', 'onSwitch', 'onBlur', 'onFocus', 'onMouseUp', 'onMouseDown', 'onMouseLeave', 'onTouchStart', 'onTouchEnd', 'onParentShouldUpdate', 'disabled', 'disableTouchRipple', 'disableFocusRipple', 'className', 'rippleColor', 'rippleStyle', 'style', 'switched', 'switchElement', 'thumbStyle', 'trackStyle']);
    var prepareStyles = this.context.muiTheme.prepareStyles;

    var styles = getStyles(this.props, this.context);
    var wrapStyles = (0, _assign2.default)(styles.wrap, iconStyle);
    var mergedRippleStyle = (0, _assign2.default)(styles.ripple, rippleStyle);

    if (thumbStyle) {
      wrapStyles.marginLeft /= 2;
      wrapStyles.marginRight /= 2;
    }

    var labelElement = label && _react2.default.createElement(
      'label',
      { style: prepareStyles((0, _assign2.default)(styles.label, labelStyle)) },
      label
    );

    var showTouchRipple = !disabled && !disableTouchRipple;
    var showFocusRipple = !disabled && !disableFocusRipple;

    var touchRipple = _react2.default.createElement(_TouchRipple2.default, {
      ref: 'touchRipple',
      key: 'touchRipple',
      style: mergedRippleStyle,
      color: mergedRippleStyle.color,
      muiTheme: this.context.muiTheme,
      centerRipple: true
    });

    var focusRipple = _react2.default.createElement(_FocusRipple2.default, {
      key: 'focusRipple',
      innerStyle: mergedRippleStyle,
      color: mergedRippleStyle.color,
      muiTheme: this.context.muiTheme,
      show: this.state.isKeyboardFocused
    });

    var ripples = [showTouchRipple ? touchRipple : null, showFocusRipple ? focusRipple : null];

    var inputElement = _react2.default.createElement('input', (0, _extends3.default)({}, other, {
      ref: 'checkbox',
      type: inputType,
      style: prepareStyles((0, _assign2.default)(styles.input, inputStyle)),
      name: name,
      value: value,
      disabled: disabled,
      onBlur: this.handleBlur,
      onFocus: this.handleFocus,
      onChange: this.handleChange,
      onMouseUp: showTouchRipple && this.handleMouseUp,
      onMouseDown: showTouchRipple && this.handleMouseDown,
      onMouseLeave: showTouchRipple && this.handleMouseLeave,
      onTouchStart: showTouchRipple && this.handleTouchStart,
      onTouchEnd: showTouchRipple && this.handleTouchEnd
    }));

    // If toggle component (indicated by whether the style includes thumb) manually lay out
    // elements in order to nest ripple elements
    var switchOrThumbElement = !thumbStyle ? _react2.default.createElement(
      'div',
      { style: prepareStyles(wrapStyles) },
      switchElement,
      ripples
    ) : _react2.default.createElement(
      'div',
      { style: prepareStyles(wrapStyles) },
      _react2.default.createElement('div', { style: prepareStyles((0, _assign2.default)({}, trackStyle)) }),
      _react2.default.createElement(
        _Paper2.default,
        { style: thumbStyle, zDepth: 1, circle: true },
        ' ',
        ripples,
        ' '
      )
    );

    var elementsInOrder = labelPosition === 'right' ? _react2.default.createElement(
      'div',
      { style: styles.controls },
      switchOrThumbElement,
      labelElement
    ) : _react2.default.createElement(
      'div',
      { style: styles.controls },
      labelElement,
      switchOrThumbElement
    );

    return _react2.default.createElement(
      'div',
      { ref: 'root', className: className, style: prepareStyles((0, _assign2.default)(styles.root, style)) },
      _react2.default.createElement(_reactEventListener2.default, {
        target: 'window',
        onKeyDown: this.handleKeyDown,
        onKeyUp: this.handleKeyUp
      }),
      inputElement,
      elementsInOrder
    );
  };

  return EnhancedSwitch;
}(_react.Component), _class.propTypes = {
  checked: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  defaultChecked: _propTypes2.default.bool,
  disableFocusRipple: _propTypes2.default.bool,
  disableTouchRipple: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  iconStyle: _propTypes2.default.object,
  inputStyle: _propTypes2.default.object,
  inputType: _propTypes2.default.string.isRequired,
  label: _propTypes2.default.node,
  labelPosition: _propTypes2.default.oneOf(['left', 'right']),
  labelStyle: _propTypes2.default.object,
  name: _propTypes2.default.string,
  onBlur: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onMouseDown: _propTypes2.default.func,
  onMouseLeave: _propTypes2.default.func,
  onMouseUp: _propTypes2.default.func,
  onParentShouldUpdate: _propTypes2.default.func,
  onSwitch: _propTypes2.default.func,
  onTouchEnd: _propTypes2.default.func,
  onTouchStart: _propTypes2.default.func,
  rippleColor: _propTypes2.default.string,
  rippleStyle: _propTypes2.default.object,
  style: _propTypes2.default.object,
  switchElement: _propTypes2.default.element.isRequired,
  switched: _propTypes2.default.bool.isRequired,
  thumbStyle: _propTypes2.default.object,
  trackStyle: _propTypes2.default.object,
  value: _propTypes2.default.any
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = EnhancedSwitch;

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(14);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _shallowEqual = __webpack_require__(49);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _autoPrefix = __webpack_require__(38);

var _autoPrefix2 = _interopRequireDefault(_autoPrefix);

var _transitions = __webpack_require__(11);

var _transitions2 = _interopRequireDefault(_transitions);

var _ScaleIn = __webpack_require__(386);

var _ScaleIn2 = _interopRequireDefault(_ScaleIn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pulsateDuration = 750;

var FocusRipple = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(FocusRipple, _Component);

  function FocusRipple() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, FocusRipple);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.pulsate = function () {
      var innerCircle = _reactDom2.default.findDOMNode(_this.refs.innerCircle);
      if (!innerCircle) return;

      var startScale = 'scale(1)';
      var endScale = 'scale(0.85)';
      var currentScale = innerCircle.style.transform || startScale;
      var nextScale = currentScale === startScale ? endScale : startScale;

      _autoPrefix2.default.set(innerCircle.style, 'transform', nextScale);
      _this.timeout = setTimeout(_this.pulsate, pulsateDuration);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  FocusRipple.prototype.componentDidMount = function componentDidMount() {
    if (this.props.show) {
      this.setRippleSize();
      this.pulsate();
    }
  };

  FocusRipple.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState);
  };

  FocusRipple.prototype.componentDidUpdate = function componentDidUpdate() {
    if (this.props.show) {
      this.setRippleSize();
      this.pulsate();
    } else {
      if (this.timeout) clearTimeout(this.timeout);
    }
  };

  FocusRipple.prototype.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.timeout);
  };

  FocusRipple.prototype.getRippleElement = function getRippleElement(props) {
    var color = props.color,
        innerStyle = props.innerStyle,
        opacity = props.opacity;
    var _context$muiTheme = this.context.muiTheme,
        prepareStyles = _context$muiTheme.prepareStyles,
        ripple = _context$muiTheme.ripple;


    var innerStyles = (0, _assign2.default)({
      position: 'absolute',
      height: '100%',
      width: '100%',
      borderRadius: '50%',
      opacity: opacity ? opacity : 0.16,
      backgroundColor: color || ripple.color,
      transition: _transitions2.default.easeOut(pulsateDuration + 'ms', 'transform', null, _transitions2.default.easeInOutFunction)
    }, innerStyle);

    return _react2.default.createElement('div', { ref: 'innerCircle', style: prepareStyles((0, _assign2.default)({}, innerStyles)) });
  };

  FocusRipple.prototype.setRippleSize = function setRippleSize() {
    var el = _reactDom2.default.findDOMNode(this.refs.innerCircle);
    var height = el.offsetHeight;
    var width = el.offsetWidth;
    var size = Math.max(height, width);

    var oldTop = 0;
    // For browsers that don't support endsWith()
    if (el.style.top.indexOf('px', el.style.top.length - 2) !== -1) {
      oldTop = parseInt(el.style.top);
    }
    el.style.height = size + 'px';
    el.style.top = height / 2 - size / 2 + oldTop + 'px';
  };

  FocusRipple.prototype.render = function render() {
    var _props = this.props,
        show = _props.show,
        style = _props.style;


    var mergedRootStyles = (0, _assign2.default)({
      height: '100%',
      width: '100%',
      position: 'absolute',
      top: 0,
      left: 0
    }, style);

    var ripple = show ? this.getRippleElement(this.props) : null;

    return _react2.default.createElement(
      _ScaleIn2.default,
      {
        maxScale: 0.85,
        style: mergedRootStyles
      },
      ripple
    );
  };

  return FocusRipple;
}(_react.Component), _class.propTypes = {
  color: _propTypes2.default.string,
  innerStyle: _propTypes2.default.object,
  opacity: _propTypes2.default.number,
  show: _propTypes2.default.bool,
  style: _propTypes2.default.object
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = FocusRipple;

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(14);

var _dom = __webpack_require__(192);

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// heavily inspired by https://github.com/Khan/react-components/blob/master/js/layered-component-mixin.jsx
var RenderToLayer = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(RenderToLayer, _Component);

  function RenderToLayer() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RenderToLayer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.onClickAway = function (event) {
      if (event.defaultPrevented) {
        return;
      }

      if (!_this.props.componentClickAway) {
        return;
      }

      if (!_this.props.open) {
        return;
      }

      var el = _this.layer;
      if (event.target !== el && event.target === window || document.documentElement.contains(event.target) && !_dom2.default.isDescendant(el, event.target)) {
        _this.props.componentClickAway(event);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  RenderToLayer.prototype.componentDidMount = function componentDidMount() {
    this.renderLayer();
  };

  RenderToLayer.prototype.componentDidUpdate = function componentDidUpdate() {
    this.renderLayer();
  };

  RenderToLayer.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unrenderLayer();
  };

  RenderToLayer.prototype.getLayer = function getLayer() {
    return this.layer;
  };

  RenderToLayer.prototype.unrenderLayer = function unrenderLayer() {
    if (!this.layer) {
      return;
    }

    if (this.props.useLayerForClickAway) {
      this.layer.style.position = 'relative';
      this.layer.removeEventListener('touchstart', this.onClickAway);
      this.layer.removeEventListener('click', this.onClickAway);
    } else {
      window.removeEventListener('touchstart', this.onClickAway);
      window.removeEventListener('click', this.onClickAway);
    }

    (0, _reactDom.unmountComponentAtNode)(this.layer);
    document.body.removeChild(this.layer);
    this.layer = null;
  };

  /**
   * By calling this method in componentDidMount() and
   * componentDidUpdate(), you're effectively creating a "wormhole" that
   * funnels React's hierarchical updates through to a DOM node on an
   * entirely different part of the page.
   */


  RenderToLayer.prototype.renderLayer = function renderLayer() {
    var _this2 = this;

    var _props = this.props,
        open = _props.open,
        render = _props.render;


    if (open) {
      if (!this.layer) {
        this.layer = document.createElement('div');
        document.body.appendChild(this.layer);

        if (this.props.useLayerForClickAway) {
          this.layer.addEventListener('touchstart', this.onClickAway);
          this.layer.addEventListener('click', this.onClickAway);
          this.layer.style.position = 'fixed';
          this.layer.style.top = 0;
          this.layer.style.bottom = 0;
          this.layer.style.left = 0;
          this.layer.style.right = 0;
          this.layer.style.zIndex = this.context.muiTheme.zIndex.layer;
        } else {
          setTimeout(function () {
            window.addEventListener('touchstart', _this2.onClickAway);
            window.addEventListener('click', _this2.onClickAway);
          }, 0);
        }
      }

      var layerElement = render();
      this.layerElement = (0, _reactDom.unstable_renderSubtreeIntoContainer)(this, layerElement, this.layer);
    } else {
      this.unrenderLayer();
    }
  };

  RenderToLayer.prototype.render = function render() {
    return null;
  };

  return RenderToLayer;
}(_react.Component), _class.propTypes = {
  componentClickAway: _propTypes2.default.func,
  open: _propTypes2.default.bool.isRequired,
  render: _propTypes2.default.func.isRequired,
  useLayerForClickAway: _propTypes2.default.bool
}, _class.defaultProps = {
  useLayerForClickAway: true
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = RenderToLayer;

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TransitionGroup = __webpack_require__(46);

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

var _SlideInChild = __webpack_require__(388);

var _SlideInChild2 = _interopRequireDefault(_SlideInChild);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SlideIn = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(SlideIn, _Component);

  function SlideIn() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, SlideIn);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.getLeaveDirection = function () {
      return _this.props.direction;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  SlideIn.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        enterDelay = _props.enterDelay,
        children = _props.children,
        childStyle = _props.childStyle,
        direction = _props.direction,
        style = _props.style,
        other = (0, _objectWithoutProperties3.default)(_props, ['enterDelay', 'children', 'childStyle', 'direction', 'style']);
    var prepareStyles = this.context.muiTheme.prepareStyles;


    var mergedRootStyles = (0, _assign2.default)({}, {
      position: 'relative',
      overflow: 'hidden',
      height: '100%'
    }, style);

    var newChildren = _react2.default.Children.map(children, function (child) {
      return _react2.default.createElement(
        _SlideInChild2.default,
        {
          key: child.key,
          direction: direction,
          enterDelay: enterDelay,
          getLeaveDirection: _this2.getLeaveDirection,
          style: childStyle
        },
        child
      );
    }, this);

    return _react2.default.createElement(
      _TransitionGroup2.default,
      (0, _extends3.default)({}, other, {
        style: prepareStyles(mergedRootStyles),
        component: 'div'
      }),
      newChildren
    );
  };

  return SlideIn;
}(_react.Component), _class.propTypes = {
  childStyle: _propTypes2.default.object,
  children: _propTypes2.default.node,
  direction: _propTypes2.default.oneOf(['left', 'right', 'up', 'down']),
  enterDelay: _propTypes2.default.number,
  style: _propTypes2.default.object
}, _class.defaultProps = {
  enterDelay: 0,
  direction: 'left'
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = SlideIn;

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var red50 = exports.red50 = '#ffebee';
var red100 = exports.red100 = '#ffcdd2';
var red200 = exports.red200 = '#ef9a9a';
var red300 = exports.red300 = '#e57373';
var red400 = exports.red400 = '#ef5350';
var red500 = exports.red500 = '#f44336';
var red600 = exports.red600 = '#e53935';
var red700 = exports.red700 = '#d32f2f';
var red800 = exports.red800 = '#c62828';
var red900 = exports.red900 = '#b71c1c';
var redA100 = exports.redA100 = '#ff8a80';
var redA200 = exports.redA200 = '#ff5252';
var redA400 = exports.redA400 = '#ff1744';
var redA700 = exports.redA700 = '#d50000';

var pink50 = exports.pink50 = '#fce4ec';
var pink100 = exports.pink100 = '#f8bbd0';
var pink200 = exports.pink200 = '#f48fb1';
var pink300 = exports.pink300 = '#f06292';
var pink400 = exports.pink400 = '#ec407a';
var pink500 = exports.pink500 = '#e91e63';
var pink600 = exports.pink600 = '#d81b60';
var pink700 = exports.pink700 = '#c2185b';
var pink800 = exports.pink800 = '#ad1457';
var pink900 = exports.pink900 = '#880e4f';
var pinkA100 = exports.pinkA100 = '#ff80ab';
var pinkA200 = exports.pinkA200 = '#ff4081';
var pinkA400 = exports.pinkA400 = '#f50057';
var pinkA700 = exports.pinkA700 = '#c51162';

var purple50 = exports.purple50 = '#f3e5f5';
var purple100 = exports.purple100 = '#e1bee7';
var purple200 = exports.purple200 = '#ce93d8';
var purple300 = exports.purple300 = '#ba68c8';
var purple400 = exports.purple400 = '#ab47bc';
var purple500 = exports.purple500 = '#9c27b0';
var purple600 = exports.purple600 = '#8e24aa';
var purple700 = exports.purple700 = '#7b1fa2';
var purple800 = exports.purple800 = '#6a1b9a';
var purple900 = exports.purple900 = '#4a148c';
var purpleA100 = exports.purpleA100 = '#ea80fc';
var purpleA200 = exports.purpleA200 = '#e040fb';
var purpleA400 = exports.purpleA400 = '#d500f9';
var purpleA700 = exports.purpleA700 = '#aa00ff';

var deepPurple50 = exports.deepPurple50 = '#ede7f6';
var deepPurple100 = exports.deepPurple100 = '#d1c4e9';
var deepPurple200 = exports.deepPurple200 = '#b39ddb';
var deepPurple300 = exports.deepPurple300 = '#9575cd';
var deepPurple400 = exports.deepPurple400 = '#7e57c2';
var deepPurple500 = exports.deepPurple500 = '#673ab7';
var deepPurple600 = exports.deepPurple600 = '#5e35b1';
var deepPurple700 = exports.deepPurple700 = '#512da8';
var deepPurple800 = exports.deepPurple800 = '#4527a0';
var deepPurple900 = exports.deepPurple900 = '#311b92';
var deepPurpleA100 = exports.deepPurpleA100 = '#b388ff';
var deepPurpleA200 = exports.deepPurpleA200 = '#7c4dff';
var deepPurpleA400 = exports.deepPurpleA400 = '#651fff';
var deepPurpleA700 = exports.deepPurpleA700 = '#6200ea';

var indigo50 = exports.indigo50 = '#e8eaf6';
var indigo100 = exports.indigo100 = '#c5cae9';
var indigo200 = exports.indigo200 = '#9fa8da';
var indigo300 = exports.indigo300 = '#7986cb';
var indigo400 = exports.indigo400 = '#5c6bc0';
var indigo500 = exports.indigo500 = '#3f51b5';
var indigo600 = exports.indigo600 = '#3949ab';
var indigo700 = exports.indigo700 = '#303f9f';
var indigo800 = exports.indigo800 = '#283593';
var indigo900 = exports.indigo900 = '#1a237e';
var indigoA100 = exports.indigoA100 = '#8c9eff';
var indigoA200 = exports.indigoA200 = '#536dfe';
var indigoA400 = exports.indigoA400 = '#3d5afe';
var indigoA700 = exports.indigoA700 = '#304ffe';

var blue50 = exports.blue50 = '#e3f2fd';
var blue100 = exports.blue100 = '#bbdefb';
var blue200 = exports.blue200 = '#90caf9';
var blue300 = exports.blue300 = '#64b5f6';
var blue400 = exports.blue400 = '#42a5f5';
var blue500 = exports.blue500 = '#2196f3';
var blue600 = exports.blue600 = '#1e88e5';
var blue700 = exports.blue700 = '#1976d2';
var blue800 = exports.blue800 = '#1565c0';
var blue900 = exports.blue900 = '#0d47a1';
var blueA100 = exports.blueA100 = '#82b1ff';
var blueA200 = exports.blueA200 = '#448aff';
var blueA400 = exports.blueA400 = '#2979ff';
var blueA700 = exports.blueA700 = '#2962ff';

var lightBlue50 = exports.lightBlue50 = '#e1f5fe';
var lightBlue100 = exports.lightBlue100 = '#b3e5fc';
var lightBlue200 = exports.lightBlue200 = '#81d4fa';
var lightBlue300 = exports.lightBlue300 = '#4fc3f7';
var lightBlue400 = exports.lightBlue400 = '#29b6f6';
var lightBlue500 = exports.lightBlue500 = '#03a9f4';
var lightBlue600 = exports.lightBlue600 = '#039be5';
var lightBlue700 = exports.lightBlue700 = '#0288d1';
var lightBlue800 = exports.lightBlue800 = '#0277bd';
var lightBlue900 = exports.lightBlue900 = '#01579b';
var lightBlueA100 = exports.lightBlueA100 = '#80d8ff';
var lightBlueA200 = exports.lightBlueA200 = '#40c4ff';
var lightBlueA400 = exports.lightBlueA400 = '#00b0ff';
var lightBlueA700 = exports.lightBlueA700 = '#0091ea';

var cyan50 = exports.cyan50 = '#e0f7fa';
var cyan100 = exports.cyan100 = '#b2ebf2';
var cyan200 = exports.cyan200 = '#80deea';
var cyan300 = exports.cyan300 = '#4dd0e1';
var cyan400 = exports.cyan400 = '#26c6da';
var cyan500 = exports.cyan500 = '#00bcd4';
var cyan600 = exports.cyan600 = '#00acc1';
var cyan700 = exports.cyan700 = '#0097a7';
var cyan800 = exports.cyan800 = '#00838f';
var cyan900 = exports.cyan900 = '#006064';
var cyanA100 = exports.cyanA100 = '#84ffff';
var cyanA200 = exports.cyanA200 = '#18ffff';
var cyanA400 = exports.cyanA400 = '#00e5ff';
var cyanA700 = exports.cyanA700 = '#00b8d4';

var teal50 = exports.teal50 = '#e0f2f1';
var teal100 = exports.teal100 = '#b2dfdb';
var teal200 = exports.teal200 = '#80cbc4';
var teal300 = exports.teal300 = '#4db6ac';
var teal400 = exports.teal400 = '#26a69a';
var teal500 = exports.teal500 = '#009688';
var teal600 = exports.teal600 = '#00897b';
var teal700 = exports.teal700 = '#00796b';
var teal800 = exports.teal800 = '#00695c';
var teal900 = exports.teal900 = '#004d40';
var tealA100 = exports.tealA100 = '#a7ffeb';
var tealA200 = exports.tealA200 = '#64ffda';
var tealA400 = exports.tealA400 = '#1de9b6';
var tealA700 = exports.tealA700 = '#00bfa5';

var green50 = exports.green50 = '#e8f5e9';
var green100 = exports.green100 = '#c8e6c9';
var green200 = exports.green200 = '#a5d6a7';
var green300 = exports.green300 = '#81c784';
var green400 = exports.green400 = '#66bb6a';
var green500 = exports.green500 = '#4caf50';
var green600 = exports.green600 = '#43a047';
var green700 = exports.green700 = '#388e3c';
var green800 = exports.green800 = '#2e7d32';
var green900 = exports.green900 = '#1b5e20';
var greenA100 = exports.greenA100 = '#b9f6ca';
var greenA200 = exports.greenA200 = '#69f0ae';
var greenA400 = exports.greenA400 = '#00e676';
var greenA700 = exports.greenA700 = '#00c853';

var lightGreen50 = exports.lightGreen50 = '#f1f8e9';
var lightGreen100 = exports.lightGreen100 = '#dcedc8';
var lightGreen200 = exports.lightGreen200 = '#c5e1a5';
var lightGreen300 = exports.lightGreen300 = '#aed581';
var lightGreen400 = exports.lightGreen400 = '#9ccc65';
var lightGreen500 = exports.lightGreen500 = '#8bc34a';
var lightGreen600 = exports.lightGreen600 = '#7cb342';
var lightGreen700 = exports.lightGreen700 = '#689f38';
var lightGreen800 = exports.lightGreen800 = '#558b2f';
var lightGreen900 = exports.lightGreen900 = '#33691e';
var lightGreenA100 = exports.lightGreenA100 = '#ccff90';
var lightGreenA200 = exports.lightGreenA200 = '#b2ff59';
var lightGreenA400 = exports.lightGreenA400 = '#76ff03';
var lightGreenA700 = exports.lightGreenA700 = '#64dd17';

var lime50 = exports.lime50 = '#f9fbe7';
var lime100 = exports.lime100 = '#f0f4c3';
var lime200 = exports.lime200 = '#e6ee9c';
var lime300 = exports.lime300 = '#dce775';
var lime400 = exports.lime400 = '#d4e157';
var lime500 = exports.lime500 = '#cddc39';
var lime600 = exports.lime600 = '#c0ca33';
var lime700 = exports.lime700 = '#afb42b';
var lime800 = exports.lime800 = '#9e9d24';
var lime900 = exports.lime900 = '#827717';
var limeA100 = exports.limeA100 = '#f4ff81';
var limeA200 = exports.limeA200 = '#eeff41';
var limeA400 = exports.limeA400 = '#c6ff00';
var limeA700 = exports.limeA700 = '#aeea00';

var yellow50 = exports.yellow50 = '#fffde7';
var yellow100 = exports.yellow100 = '#fff9c4';
var yellow200 = exports.yellow200 = '#fff59d';
var yellow300 = exports.yellow300 = '#fff176';
var yellow400 = exports.yellow400 = '#ffee58';
var yellow500 = exports.yellow500 = '#ffeb3b';
var yellow600 = exports.yellow600 = '#fdd835';
var yellow700 = exports.yellow700 = '#fbc02d';
var yellow800 = exports.yellow800 = '#f9a825';
var yellow900 = exports.yellow900 = '#f57f17';
var yellowA100 = exports.yellowA100 = '#ffff8d';
var yellowA200 = exports.yellowA200 = '#ffff00';
var yellowA400 = exports.yellowA400 = '#ffea00';
var yellowA700 = exports.yellowA700 = '#ffd600';

var amber50 = exports.amber50 = '#fff8e1';
var amber100 = exports.amber100 = '#ffecb3';
var amber200 = exports.amber200 = '#ffe082';
var amber300 = exports.amber300 = '#ffd54f';
var amber400 = exports.amber400 = '#ffca28';
var amber500 = exports.amber500 = '#ffc107';
var amber600 = exports.amber600 = '#ffb300';
var amber700 = exports.amber700 = '#ffa000';
var amber800 = exports.amber800 = '#ff8f00';
var amber900 = exports.amber900 = '#ff6f00';
var amberA100 = exports.amberA100 = '#ffe57f';
var amberA200 = exports.amberA200 = '#ffd740';
var amberA400 = exports.amberA400 = '#ffc400';
var amberA700 = exports.amberA700 = '#ffab00';

var orange50 = exports.orange50 = '#fff3e0';
var orange100 = exports.orange100 = '#ffe0b2';
var orange200 = exports.orange200 = '#ffcc80';
var orange300 = exports.orange300 = '#ffb74d';
var orange400 = exports.orange400 = '#ffa726';
var orange500 = exports.orange500 = '#ff9800';
var orange600 = exports.orange600 = '#fb8c00';
var orange700 = exports.orange700 = '#f57c00';
var orange800 = exports.orange800 = '#ef6c00';
var orange900 = exports.orange900 = '#e65100';
var orangeA100 = exports.orangeA100 = '#ffd180';
var orangeA200 = exports.orangeA200 = '#ffab40';
var orangeA400 = exports.orangeA400 = '#ff9100';
var orangeA700 = exports.orangeA700 = '#ff6d00';

var deepOrange50 = exports.deepOrange50 = '#fbe9e7';
var deepOrange100 = exports.deepOrange100 = '#ffccbc';
var deepOrange200 = exports.deepOrange200 = '#ffab91';
var deepOrange300 = exports.deepOrange300 = '#ff8a65';
var deepOrange400 = exports.deepOrange400 = '#ff7043';
var deepOrange500 = exports.deepOrange500 = '#ff5722';
var deepOrange600 = exports.deepOrange600 = '#f4511e';
var deepOrange700 = exports.deepOrange700 = '#e64a19';
var deepOrange800 = exports.deepOrange800 = '#d84315';
var deepOrange900 = exports.deepOrange900 = '#bf360c';
var deepOrangeA100 = exports.deepOrangeA100 = '#ff9e80';
var deepOrangeA200 = exports.deepOrangeA200 = '#ff6e40';
var deepOrangeA400 = exports.deepOrangeA400 = '#ff3d00';
var deepOrangeA700 = exports.deepOrangeA700 = '#dd2c00';

var brown50 = exports.brown50 = '#efebe9';
var brown100 = exports.brown100 = '#d7ccc8';
var brown200 = exports.brown200 = '#bcaaa4';
var brown300 = exports.brown300 = '#a1887f';
var brown400 = exports.brown400 = '#8d6e63';
var brown500 = exports.brown500 = '#795548';
var brown600 = exports.brown600 = '#6d4c41';
var brown700 = exports.brown700 = '#5d4037';
var brown800 = exports.brown800 = '#4e342e';
var brown900 = exports.brown900 = '#3e2723';

var blueGrey50 = exports.blueGrey50 = '#eceff1';
var blueGrey100 = exports.blueGrey100 = '#cfd8dc';
var blueGrey200 = exports.blueGrey200 = '#b0bec5';
var blueGrey300 = exports.blueGrey300 = '#90a4ae';
var blueGrey400 = exports.blueGrey400 = '#78909c';
var blueGrey500 = exports.blueGrey500 = '#607d8b';
var blueGrey600 = exports.blueGrey600 = '#546e7a';
var blueGrey700 = exports.blueGrey700 = '#455a64';
var blueGrey800 = exports.blueGrey800 = '#37474f';
var blueGrey900 = exports.blueGrey900 = '#263238';

var grey50 = exports.grey50 = '#fafafa';
var grey100 = exports.grey100 = '#f5f5f5';
var grey200 = exports.grey200 = '#eeeeee';
var grey300 = exports.grey300 = '#e0e0e0';
var grey400 = exports.grey400 = '#bdbdbd';
var grey500 = exports.grey500 = '#9e9e9e';
var grey600 = exports.grey600 = '#757575';
var grey700 = exports.grey700 = '#616161';
var grey800 = exports.grey800 = '#424242';
var grey900 = exports.grey900 = '#212121';

var black = exports.black = '#000000';
var white = exports.white = '#ffffff';

var transparent = exports.transparent = 'rgba(0, 0, 0, 0)';
var fullBlack = exports.fullBlack = 'rgba(0, 0, 0, 1)';
var darkBlack = exports.darkBlack = 'rgba(0, 0, 0, 0.87)';
var lightBlack = exports.lightBlack = 'rgba(0, 0, 0, 0.54)';
var minBlack = exports.minBlack = 'rgba(0, 0, 0, 0.26)';
var faintBlack = exports.faintBlack = 'rgba(0, 0, 0, 0.12)';
var fullWhite = exports.fullWhite = 'rgba(255, 255, 255, 1)';
var darkWhite = exports.darkWhite = 'rgba(255, 255, 255, 0.87)';
var lightWhite = exports.lightWhite = 'rgba(255, 255, 255, 0.54)';

/***/ }),
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Avatar = __webpack_require__(320);

var _Avatar2 = _interopRequireDefault(_Avatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Avatar2.default;

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _EnhancedButton = __webpack_require__(27);

var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var selected = props.selected;
  var bottomNavigation = context.muiTheme.bottomNavigation;


  var color = selected ? bottomNavigation.selectedColor : bottomNavigation.unselectedColor;

  var styles = {
    root: {
      transition: 'padding-top 0.3s',
      paddingTop: selected ? 6 : 8,
      paddingBottom: 10,
      paddingLeft: 12,
      paddingRight: 12,
      minWidth: 80,
      maxWidth: 168
    },
    label: {
      fontSize: selected ? bottomNavigation.selectedFontSize : bottomNavigation.unselectedFontSize,
      transition: 'color 0.3s, font-size 0.3s',
      color: color
    },
    icon: {
      display: 'block',
      /**
       * Used to ensure SVG icons are centered
       */
      width: '100%'
    },
    iconColor: color
  };

  return styles;
}

var BottomNavigationItem = function BottomNavigationItem(props, context) {
  var label = props.label,
      icon = props.icon,
      style = props.style,
      other = (0, _objectWithoutProperties3.default)(props, ['label', 'icon', 'style']);
  var prepareStyles = context.muiTheme.prepareStyles;

  var styles = getStyles(props, context);

  var styledIcon = (0, _react.cloneElement)(icon, {
    style: (0, _assign2.default)({}, styles.icon, icon.props.style),
    color: icon.props.color || styles.iconColor
  });

  return _react2.default.createElement(
    _EnhancedButton2.default,
    (0, _extends3.default)({}, other, { style: (0, _assign2.default)({}, styles.root, style) }),
    styledIcon,
    _react2.default.createElement(
      'div',
      { style: prepareStyles(styles.label) },
      label
    )
  );
};

BottomNavigationItem.propTypes = {
  /**
   * Set the icon representing the view for this item.
   */
  icon: _propTypes2.default.node,
  /**
   * Set the label describing the view for this item.
   */
  label: _propTypes2.default.node,
  /**
   * @ignore
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
};

BottomNavigationItem.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};

exports.default = BottomNavigationItem;

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles() {
  return {
    root: {
      padding: 8,
      position: 'relative'
    },
    action: {
      marginRight: 8
    }
  };
}

var CardActions = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(CardActions, _Component);

  function CardActions() {
    (0, _classCallCheck3.default)(this, CardActions);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  CardActions.prototype.render = function render() {
    var _props = this.props,
        actAsExpander = _props.actAsExpander,
        children = _props.children,
        expandable = _props.expandable,
        showExpandableButton = _props.showExpandableButton,
        style = _props.style,
        other = (0, _objectWithoutProperties3.default)(_props, ['actAsExpander', 'children', 'expandable', 'showExpandableButton', 'style']);
    var prepareStyles = this.context.muiTheme.prepareStyles;

    var styles = getStyles(this.props, this.context);

    var styledChildren = _react2.default.Children.map(children, function (child) {
      if (_react2.default.isValidElement(child)) {
        return _react2.default.cloneElement(child, {
          style: (0, _assign2.default)({}, styles.action, child.props.style)
        });
      }
    });

    return _react2.default.createElement(
      'div',
      (0, _extends3.default)({}, other, { style: prepareStyles((0, _assign2.default)(styles.root, style)) }),
      styledChildren
    );
  };

  return CardActions;
}(_react.Component), _class.propTypes = {
  /**
   * If true, a click on this card component expands the card.
   */
  actAsExpander: _propTypes2.default.bool,
  /**
   * Can be used to render elements inside the Card Action.
   */
  children: _propTypes2.default.node,
  /**
   * If true, this card component is expandable.
   */
  expandable: _propTypes2.default.bool,
  /**
   * If true, this card component will include a button to expand the card.
   */
  showExpandableButton: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp);
exports.default = CardActions;

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Avatar = __webpack_require__(158);

var _Avatar2 = _interopRequireDefault(_Avatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var card = context.muiTheme.card;


  return {
    root: {
      padding: 16,
      fontWeight: card.fontWeight,
      boxSizing: 'border-box',
      position: 'relative',
      whiteSpace: 'nowrap'
    },
    text: {
      display: 'inline-block',
      verticalAlign: 'top',
      whiteSpace: 'normal',
      paddingRight: '90px'
    },
    avatar: {
      marginRight: 16
    },
    title: {
      color: props.titleColor || card.titleColor,
      display: 'block',
      fontSize: 15
    },
    subtitle: {
      color: props.subtitleColor || card.subtitleColor,
      display: 'block',
      fontSize: 14
    }
  };
}

var CardHeader = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(CardHeader, _Component);

  function CardHeader() {
    (0, _classCallCheck3.default)(this, CardHeader);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  CardHeader.prototype.render = function render() {
    var _props = this.props,
        actAsExpander = _props.actAsExpander,
        avatarProp = _props.avatar,
        children = _props.children,
        closeIcon = _props.closeIcon,
        expandable = _props.expandable,
        openIcon = _props.openIcon,
        showExpandableButton = _props.showExpandableButton,
        style = _props.style,
        subtitle = _props.subtitle,
        subtitleColor = _props.subtitleColor,
        subtitleStyle = _props.subtitleStyle,
        textStyle = _props.textStyle,
        title = _props.title,
        titleColor = _props.titleColor,
        titleStyle = _props.titleStyle,
        iconStyle = _props.iconStyle,
        other = (0, _objectWithoutProperties3.default)(_props, ['actAsExpander', 'avatar', 'children', 'closeIcon', 'expandable', 'openIcon', 'showExpandableButton', 'style', 'subtitle', 'subtitleColor', 'subtitleStyle', 'textStyle', 'title', 'titleColor', 'titleStyle', 'iconStyle']);
    var prepareStyles = this.context.muiTheme.prepareStyles;

    var styles = getStyles(this.props, this.context);

    var avatar = avatarProp;

    if ((0, _react.isValidElement)(avatarProp)) {
      avatar = _react2.default.cloneElement(avatar, {
        style: (0, _assign2.default)(styles.avatar, avatar.props.style)
      });
    } else if (avatar !== null) {
      avatar = _react2.default.createElement(_Avatar2.default, { src: avatarProp, style: styles.avatar });
    }

    return _react2.default.createElement(
      'div',
      (0, _extends3.default)({}, other, { style: prepareStyles((0, _assign2.default)(styles.root, style)) }),
      avatar,
      _react2.default.createElement(
        'div',
        { style: prepareStyles((0, _assign2.default)(styles.text, textStyle)) },
        _react2.default.createElement(
          'span',
          { style: prepareStyles((0, _assign2.default)(styles.title, titleStyle)) },
          title
        ),
        _react2.default.createElement(
          'span',
          { style: prepareStyles((0, _assign2.default)(styles.subtitle, subtitleStyle)) },
          subtitle
        )
      ),
      children
    );
  };

  return CardHeader;
}(_react.Component), _class.muiName = 'CardHeader', _class.propTypes = {
  /**
   * If true, a click on this card component expands the card.
   */
  actAsExpander: _propTypes2.default.bool,
  /**
   * This is the [Avatar](/#/components/avatar) element to be displayed on the Card Header.
   * If `avatar` is an `Avatar` or other element, it will be rendered.
   * If `avatar` is a string, it will be used as the image `src` for an `Avatar`.
   */
  avatar: _propTypes2.default.node,
  /**
   * Can be used to render elements inside the Card Header.
   */
  children: _propTypes2.default.node,
  /**
   * Can be used to pass a closeIcon if you don't like the default expandable close Icon.
   */
  closeIcon: _propTypes2.default.node,
  /**
   * If true, this card component is expandable.
   */
  expandable: _propTypes2.default.bool,
  /**
   * Override the iconStyle of the Icon Button.
   */
  iconStyle: _propTypes2.default.object,
  /**
   * Can be used to pass a openIcon if you don't like the default expandable open Icon.
   */
  openIcon: _propTypes2.default.node,
  /**
   * If true, this card component will include a button to expand the card.
   */
  showExpandableButton: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * Can be used to render a subtitle in Card Header.
   */
  subtitle: _propTypes2.default.node,
  /**
   * Override the subtitle color.
   */
  subtitleColor: _propTypes2.default.string,
  /**
   * Override the inline-styles of the subtitle.
   */
  subtitleStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of the text.
   */
  textStyle: _propTypes2.default.object,
  /**
   * Can be used to render a title in Card Header.
   */
  title: _propTypes2.default.node,
  /**
   * Override the title color.
   */
  titleColor: _propTypes2.default.string,
  /**
   * Override the inline-styles of the title.
   */
  titleStyle: _propTypes2.default.object
}, _class.defaultProps = {
  avatar: null
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp);
exports.default = CardHeader;

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var cardMedia = context.muiTheme.cardMedia;


  return {
    root: {
      position: 'relative'
    },
    overlayContainer: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0
    },
    overlay: {
      height: '100%',
      position: 'relative'
    },
    overlayContent: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: 0,
      paddingTop: 8,
      background: cardMedia.overlayContentBackground
    },
    media: {},
    mediaChild: {
      verticalAlign: 'top',
      maxWidth: '100%',
      minWidth: '100%',
      width: '100%'
    }
  };
}

var CardMedia = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(CardMedia, _Component);

  function CardMedia() {
    (0, _classCallCheck3.default)(this, CardMedia);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  CardMedia.prototype.render = function render() {
    var _props = this.props,
        actAsExpander = _props.actAsExpander,
        children = _props.children,
        expandable = _props.expandable,
        mediaStyle = _props.mediaStyle,
        overlay = _props.overlay,
        overlayContainerStyle = _props.overlayContainerStyle,
        overlayContentStyle = _props.overlayContentStyle,
        overlayStyle = _props.overlayStyle,
        style = _props.style,
        other = (0, _objectWithoutProperties3.default)(_props, ['actAsExpander', 'children', 'expandable', 'mediaStyle', 'overlay', 'overlayContainerStyle', 'overlayContentStyle', 'overlayStyle', 'style']);
    var prepareStyles = this.context.muiTheme.prepareStyles;

    var styles = getStyles(this.props, this.context);
    var rootStyle = (0, _assign2.default)(styles.root, style);
    var extendedMediaStyle = (0, _assign2.default)(styles.media, mediaStyle);
    var extendedOverlayContainerStyle = (0, _assign2.default)(styles.overlayContainer, overlayContainerStyle);
    var extendedOverlayContentStyle = (0, _assign2.default)(styles.overlayContent, overlayContentStyle);
    var extendedOverlayStyle = (0, _assign2.default)(styles.overlay, overlayStyle);
    var titleColor = this.context.muiTheme.cardMedia.titleColor;
    var subtitleColor = this.context.muiTheme.cardMedia.subtitleColor;
    var color = this.context.muiTheme.cardMedia.color;

    var styledChildren = _react2.default.Children.map(children, function (child) {
      return _react2.default.cloneElement(child, {
        style: prepareStyles((0, _assign2.default)({}, styles.mediaChild, child.props.style))
      });
    });

    var overlayChildren = _react2.default.Children.map(overlay, function (child) {
      if (child.type.muiName === 'CardHeader' || child.type.muiName === 'CardTitle') {
        return _react2.default.cloneElement(child, {
          titleColor: titleColor,
          subtitleColor: subtitleColor
        });
      } else if (child.type.muiName === 'CardText') {
        return _react2.default.cloneElement(child, {
          color: color
        });
      } else {
        return child;
      }
    });

    return _react2.default.createElement(
      'div',
      (0, _extends3.default)({}, other, { style: prepareStyles(rootStyle) }),
      _react2.default.createElement(
        'div',
        { style: prepareStyles(extendedMediaStyle) },
        styledChildren
      ),
      overlay ? _react2.default.createElement(
        'div',
        { style: prepareStyles(extendedOverlayContainerStyle) },
        _react2.default.createElement(
          'div',
          { style: prepareStyles(extendedOverlayStyle) },
          _react2.default.createElement(
            'div',
            { style: prepareStyles(extendedOverlayContentStyle) },
            overlayChildren
          )
        )
      ) : ''
    );
  };

  return CardMedia;
}(_react.Component), _class.propTypes = {
  /**
   * If true, a click on this card component expands the card.
   */
  actAsExpander: _propTypes2.default.bool,
  /**
   * Can be used to render elements inside the Card Media.
   */
  children: _propTypes2.default.node,
  /**
   * If true, this card component is expandable.
   */
  expandable: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the Card Media.
   */
  mediaStyle: _propTypes2.default.object,
  /**
   * Can be used to render overlay element in Card Media.
   */
  overlay: _propTypes2.default.node,
  /**
   * Override the inline-styles of the overlay container.
   */
  overlayContainerStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of the overlay content.
   */
  overlayContentStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of the overlay element.
   */
  overlayStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp);
exports.default = CardMedia;

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var cardText = context.muiTheme.cardText;


  return {
    root: {
      padding: 16,
      fontSize: 14,
      color: props.color || cardText.textColor
    }
  };
}

var CardText = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(CardText, _Component);

  function CardText() {
    (0, _classCallCheck3.default)(this, CardText);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  CardText.prototype.render = function render() {
    var _props = this.props,
        actAsExpander = _props.actAsExpander,
        children = _props.children,
        color = _props.color,
        expandable = _props.expandable,
        style = _props.style,
        other = (0, _objectWithoutProperties3.default)(_props, ['actAsExpander', 'children', 'color', 'expandable', 'style']);
    var prepareStyles = this.context.muiTheme.prepareStyles;

    var styles = getStyles(this.props, this.context);
    var rootStyle = (0, _assign2.default)(styles.root, style);

    return _react2.default.createElement(
      'div',
      (0, _extends3.default)({}, other, { style: prepareStyles(rootStyle) }),
      children
    );
  };

  return CardText;
}(_react.Component), _class.muiName = 'CardText', _class.propTypes = {
  /**
   * If true, a click on this card component expands the card.
   */
  actAsExpander: _propTypes2.default.bool,
  /**
   * Can be used to render elements inside the Card Text.
   */
  children: _propTypes2.default.node,
  /**
   * Override the CardText color.
   */
  color: _propTypes2.default.string,
  /**
   * If true, this card component is expandable.
   */
  expandable: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp);
exports.default = CardText;

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var card = context.muiTheme.card;


  return {
    root: {
      padding: 16,
      position: 'relative'
    },
    title: {
      fontSize: 24,
      color: props.titleColor || card.titleColor,
      display: 'block',
      lineHeight: '36px'
    },
    subtitle: {
      fontSize: 14,
      color: props.subtitleColor || card.subtitleColor,
      display: 'block'
    }
  };
}

var CardTitle = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(CardTitle, _Component);

  function CardTitle() {
    (0, _classCallCheck3.default)(this, CardTitle);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  CardTitle.prototype.render = function render() {
    var _props = this.props,
        actAsExpander = _props.actAsExpander,
        children = _props.children,
        closeIcon = _props.closeIcon,
        expandable = _props.expandable,
        showExpandableButton = _props.showExpandableButton,
        style = _props.style,
        subtitle = _props.subtitle,
        subtitleColor = _props.subtitleColor,
        subtitleStyle = _props.subtitleStyle,
        title = _props.title,
        titleColor = _props.titleColor,
        titleStyle = _props.titleStyle,
        other = (0, _objectWithoutProperties3.default)(_props, ['actAsExpander', 'children', 'closeIcon', 'expandable', 'showExpandableButton', 'style', 'subtitle', 'subtitleColor', 'subtitleStyle', 'title', 'titleColor', 'titleStyle']);
    var prepareStyles = this.context.muiTheme.prepareStyles;

    var styles = getStyles(this.props, this.context);
    var rootStyle = (0, _assign2.default)({}, styles.root, style);
    var extendedTitleStyle = (0, _assign2.default)({}, styles.title, titleStyle);
    var extendedSubtitleStyle = (0, _assign2.default)({}, styles.subtitle, subtitleStyle);

    return _react2.default.createElement(
      'div',
      (0, _extends3.default)({}, other, { style: prepareStyles(rootStyle) }),
      _react2.default.createElement(
        'span',
        { style: prepareStyles(extendedTitleStyle) },
        title
      ),
      _react2.default.createElement(
        'span',
        { style: prepareStyles(extendedSubtitleStyle) },
        subtitle
      ),
      children
    );
  };

  return CardTitle;
}(_react.Component), _class.muiName = 'CardTitle', _class.propTypes = {
  /**
   * If true, a click on this card component expands the card.
   */
  actAsExpander: _propTypes2.default.bool,
  /**
   * Can be used to render elements inside the Card Title.
   */
  children: _propTypes2.default.node,
  /**
   * Can be used to pass a closeIcon if you don't like the default expandable close Icon.
   */
  closeIcon: _propTypes2.default.node,
  /**
   * If true, this card component is expandable.
   */
  expandable: _propTypes2.default.bool,
  /**
   * If true, this card component will include a button to expand the card.
   */
  showExpandableButton: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * Can be used to render a subtitle in the Card Title.
   */
  subtitle: _propTypes2.default.node,
  /**
   * Override the subtitle color.
   */
  subtitleColor: _propTypes2.default.string,
  /**
   * Override the inline-styles of the subtitle.
   */
  subtitleStyle: _propTypes2.default.object,
  /**
   * Can be used to render a title in the Card Title.
   */
  title: _propTypes2.default.node,
  /**
   * Override the title color.
   */
  titleColor: _propTypes2.default.string,
  /**
   * Override the inline-styles of the title.
   */
  titleStyle: _propTypes2.default.object
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp);
exports.default = CardTitle;

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Divider = __webpack_require__(338);

var _Divider2 = _interopRequireDefault(_Divider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Divider2.default;

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MenuItem = exports.DropDownMenu = undefined;

var _DropDownMenu2 = __webpack_require__(340);

var _DropDownMenu3 = _interopRequireDefault(_DropDownMenu2);

var _MenuItem2 = __webpack_require__(110);

var _MenuItem3 = _interopRequireDefault(_MenuItem2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.DropDownMenu = _DropDownMenu3.default;
exports.MenuItem = _MenuItem3.default;
exports.default = _DropDownMenu3.default;

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var _titleBar;

  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      gridTile = _context$muiTheme.gridTile;


  var actionPos = props.actionIcon && props.actionPosition;

  var styles = {
    root: {
      position: 'relative',
      display: 'block',
      height: '100%',
      overflow: 'hidden'
    },
    titleBar: (_titleBar = {
      position: 'absolute',
      left: 0,
      right: 0
    }, _titleBar[props.titlePosition] = 0, _titleBar.height = props.subtitle ? 68 : 48, _titleBar.background = props.titleBackground, _titleBar.display = 'flex', _titleBar.alignItems = 'center', _titleBar),
    titleWrap: {
      flexGrow: 1,
      marginLeft: actionPos !== 'left' ? baseTheme.spacing.desktopGutterLess : 0,
      marginRight: actionPos === 'left' ? baseTheme.spacing.desktopGutterLess : 0,
      color: gridTile.textColor,
      overflow: 'hidden'
    },
    title: {
      fontSize: '16px',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap'
    },
    subtitle: {
      fontSize: '12px',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap'
    },
    actionIcon: {
      order: actionPos === 'left' ? -1 : 1
    },
    childImg: {
      height: '100%',
      transform: 'translateX(-50%)',
      position: 'relative',
      left: '50%'
    }
  };
  return styles;
}

var GridTile = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(GridTile, _Component);

  function GridTile() {
    (0, _classCallCheck3.default)(this, GridTile);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  GridTile.prototype.componentDidMount = function componentDidMount() {
    this.ensureImageCover();
  };

  GridTile.prototype.componentDidUpdate = function componentDidUpdate() {
    this.ensureImageCover();
  };

  GridTile.prototype.ensureImageCover = function ensureImageCover() {
    var _this2 = this;

    var imgEl = this.refs.img;

    if (imgEl) {
      var fit = function fit() {
        if (imgEl.offsetWidth < imgEl.parentNode.offsetWidth) {
          var isRtl = _this2.context.muiTheme.isRtl;

          imgEl.style.height = 'auto';
          if (isRtl) {
            imgEl.style.right = '0';
          } else {
            imgEl.style.left = '0';
          }
          imgEl.style.width = '100%';
          imgEl.style.top = '50%';
          imgEl.style.transform = imgEl.style.WebkitTransform = 'translateY(-50%)';
        }
        imgEl.removeEventListener('load', fit);
        imgEl = null; // prevent closure memory leak
      };
      if (imgEl.complete) {
        fit();
      } else {
        imgEl.addEventListener('load', fit);
      }
    }
  };

  GridTile.prototype.render = function render() {
    var _props = this.props,
        title = _props.title,
        subtitle = _props.subtitle,
        titlePosition = _props.titlePosition,
        titleBackground = _props.titleBackground,
        titleStyle = _props.titleStyle,
        subtitleStyle = _props.subtitleStyle,
        actionIcon = _props.actionIcon,
        actionPosition = _props.actionPosition,
        style = _props.style,
        children = _props.children,
        containerElement = _props.containerElement,
        other = (0, _objectWithoutProperties3.default)(_props, ['title', 'subtitle', 'titlePosition', 'titleBackground', 'titleStyle', 'subtitleStyle', 'actionIcon', 'actionPosition', 'style', 'children', 'containerElement']);
    var prepareStyles = this.context.muiTheme.prepareStyles;

    var styles = getStyles(this.props, this.context);
    var mergedRootStyles = (0, _assign2.default)(styles.root, style);

    var titleBar = null;

    if (title) {
      titleBar = _react2.default.createElement(
        'div',
        { key: 'titlebar', style: prepareStyles(styles.titleBar) },
        _react2.default.createElement(
          'div',
          { style: prepareStyles(styles.titleWrap) },
          _react2.default.createElement(
            'div',
            { style: prepareStyles((0, _assign2.default)(styles.title, titleStyle)) },
            title
          ),
          subtitle ? _react2.default.createElement(
            'div',
            { style: prepareStyles((0, _assign2.default)(styles.subtitle, subtitleStyle)) },
            subtitle
          ) : null
        ),
        actionIcon ? _react2.default.createElement(
          'div',
          { style: prepareStyles(styles.actionIcon) },
          actionIcon
        ) : null
      );
    }

    var newChildren = children;

    // if there is a single image passed as children
    // clone it and add our styles
    if (_react2.default.Children.count(children) === 1) {
      newChildren = _react2.default.Children.map(children, function (child) {
        if (child.type === 'img') {
          return _react2.default.cloneElement(child, {
            key: 'img',
            ref: 'img',
            style: prepareStyles((0, _assign2.default)({}, styles.childImg, child.props.style))
          });
        } else {
          return child;
        }
      });
    }

    var containerProps = (0, _extends3.default)({
      style: prepareStyles(mergedRootStyles)
    }, other);

    return _react2.default.isValidElement(containerElement) ? _react2.default.cloneElement(containerElement, containerProps, [newChildren, titleBar]) : _react2.default.createElement(containerElement, containerProps, [newChildren, titleBar]);
  };

  return GridTile;
}(_react.Component), _class.propTypes = {
  /**
   * An IconButton element to be used as secondary action target
   * (primary action target is the tile itself).
   */
  actionIcon: _propTypes2.default.element,
  /**
   * Position of secondary action IconButton.
   */
  actionPosition: _propTypes2.default.oneOf(['left', 'right']),
  /**
   * Theoretically you can pass any node as children, but the main use case is to pass an img,
   * in whichcase GridTile takes care of making the image "cover" available space
   * (similar to background-size: cover or to object-fit:cover).
   */
  children: _propTypes2.default.node,
  /**
   * Width of the tile in number of grid cells.
   */
  cols: _propTypes2.default.number,
  /**
   * Either a string used as tag name for the tile root element, or a ReactElement.
   * This is useful when you have, for example, a custom implementation of
   * a navigation link (that knows about your routes) and you want to use it as the primary tile action.
   * In case you pass a ReactElement, please ensure that it passes all props,
   * accepts styles overrides and render it's children.
   */
  containerElement: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  /**
   * Height of the tile in number of grid cells.
   */
  rows: _propTypes2.default.number,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * String or element serving as subtitle (support text).
   */
  subtitle: _propTypes2.default.node,
  /**
   * Override the inline-styles of the subtitle element.
   */
  subtitleStyle: _propTypes2.default.object,
  /**
   * Title to be displayed on tile.
   */
  title: _propTypes2.default.node,
  /**
   * Style used for title bar background.
   * Useful for setting custom gradients for example
   */
  titleBackground: _propTypes2.default.string,
  /**
   * Position of the title bar (container of title, subtitle and action icon).
   */
  titlePosition: _propTypes2.default.oneOf(['top', 'bottom']),
  /**
   * Override the inline-styles of the title element.
   */
  titleStyle: _propTypes2.default.object
}, _class.defaultProps = {
  titlePosition: 'bottom',
  titleBackground: 'rgba(0, 0, 0, 0.4)',
  actionPosition: 'right',
  cols: 1,
  rows: 1,
  containerElement: 'div'
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp);
exports.default = GridTile;

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSelectable = undefined;

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _colorManipulator = __webpack_require__(35);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var makeSelectable = function makeSelectable(MyComponent) {
  var _class, _temp2;

  return _temp2 = _class = function (_Component) {
    (0, _inherits3.default)(_class, _Component);

    function _class() {
      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, _class);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.hasSelectedDescendant = function (previousValue, child) {
        if (_react2.default.isValidElement(child) && child.props.nestedItems && child.props.nestedItems.length > 0) {
          return child.props.nestedItems.reduce(_this.hasSelectedDescendant, previousValue);
        }
        return previousValue || _this.isChildSelected(child, _this.props);
      }, _this.handleItemTouchTap = function (event, item) {
        var itemValue = item.props.value;

        if (itemValue !== _this.props.value) {
          if (_this.props.onChange) {
            _this.props.onChange(event, itemValue);
          }
        }
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    _class.prototype.extendChild = function extendChild(child, styles, selectedItemStyle) {
      var _this2 = this;

      if (child && child.type && child.type.muiName === 'ListItem') {
        var selected = this.isChildSelected(child, this.props);
        var selectedChildrenStyles = void 0;
        if (selected) {
          selectedChildrenStyles = (0, _assign2.default)({}, styles, selectedItemStyle);
        }

        var mergedChildrenStyles = (0, _assign2.default)({}, child.props.style, selectedChildrenStyles);

        this.keyIndex += 1;

        return _react2.default.cloneElement(child, {
          onTouchTap: function onTouchTap(event) {
            _this2.handleItemTouchTap(event, child);
            if (child.props.onTouchTap) {
              child.props.onTouchTap(event);
            }
          },
          key: this.keyIndex,
          style: mergedChildrenStyles,
          nestedItems: child.props.nestedItems.map(function (child) {
            return _this2.extendChild(child, styles, selectedItemStyle);
          }),
          initiallyOpen: this.isInitiallyOpen(child)
        });
      } else {
        return child;
      }
    };

    _class.prototype.isInitiallyOpen = function isInitiallyOpen(child) {
      if (child.props.initiallyOpen) {
        return child.props.initiallyOpen;
      }
      return this.hasSelectedDescendant(false, child);
    };

    _class.prototype.isChildSelected = function isChildSelected(child, props) {
      return props.value === child.props.value;
    };

    _class.prototype.render = function render() {
      var _this3 = this;

      var _props = this.props,
          children = _props.children,
          selectedItemStyle = _props.selectedItemStyle,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'selectedItemStyle']);


      this.keyIndex = 0;
      var styles = {};

      if (!selectedItemStyle) {
        var textColor = this.context.muiTheme.baseTheme.palette.textColor;
        styles.backgroundColor = (0, _colorManipulator.fade)(textColor, 0.2);
      }

      return _react2.default.createElement(
        MyComponent,
        (0, _extends3.default)({}, other, this.state),
        _react.Children.map(children, function (child) {
          return _this3.extendChild(child, styles, selectedItemStyle);
        })
      );
    };

    return _class;
  }(_react.Component), _class.propTypes = {
    children: _propTypes2.default.node,
    onChange: _propTypes2.default.func,
    selectedItemStyle: _propTypes2.default.object,
    value: _propTypes2.default.any
  }, _class.contextTypes = {
    muiTheme: _propTypes2.default.object.isRequired
  }, _temp2;
};

exports.makeSelectable = makeSelectable;
exports.default = makeSelectable;

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MenuItem = exports.Menu = undefined;

var _Menu2 = __webpack_require__(81);

var _Menu3 = _interopRequireDefault(_Menu2);

var _MenuItem2 = __webpack_require__(106);

var _MenuItem3 = _interopRequireDefault(_MenuItem2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Menu = _Menu3.default;
exports.MenuItem = _MenuItem3.default;
exports.default = _Menu3.default;

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _RadioButton = __webpack_require__(185);

var _RadioButton2 = _interopRequireDefault(_RadioButton);

var _warning = __webpack_require__(17);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RadioButtonGroup = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(RadioButtonGroup, _Component);

  function RadioButtonGroup() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RadioButtonGroup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      numberCheckedRadioButtons: 0,
      selected: ''
    }, _this.handleChange = function (event, newSelection) {
      _this.updateRadioButtons(newSelection);

      // Successful update
      if (_this.state.numberCheckedRadioButtons === 0) {
        if (_this.props.onChange) _this.props.onChange(event, newSelection);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  RadioButtonGroup.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    var cnt = 0;
    var selected = '';
    var _props = this.props,
        valueSelected = _props.valueSelected,
        defaultSelected = _props.defaultSelected;

    if (valueSelected !== undefined) {
      selected = valueSelected;
    } else if (defaultSelected !== undefined) {
      selected = defaultSelected;
    }

    _react2.default.Children.forEach(this.props.children, function (option) {
      if (_this2.hasCheckAttribute(option)) cnt++;
    }, this);

    this.setState({
      numberCheckedRadioButtons: cnt,
      selected: selected
    });
  };

  RadioButtonGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.hasOwnProperty('valueSelected')) {
      this.setState({
        selected: nextProps.valueSelected
      });
    }
  };

  RadioButtonGroup.prototype.hasCheckAttribute = function hasCheckAttribute(radioButton) {
    return radioButton.props.hasOwnProperty('checked') && radioButton.props.checked;
  };

  RadioButtonGroup.prototype.updateRadioButtons = function updateRadioButtons(newSelection) {
    if (this.state.numberCheckedRadioButtons === 0) {
      this.setState({ selected: newSelection });
    } else {
      (0, _warning2.default)(false, 'Material-UI: Cannot select a different radio button while another radio button\n        has the \'checked\' property set to true.');
    }
  };

  RadioButtonGroup.prototype.getSelectedValue = function getSelectedValue() {
    return this.state.selected;
  };

  RadioButtonGroup.prototype.setSelectedValue = function setSelectedValue(newSelectionValue) {
    this.updateRadioButtons(newSelectionValue);
  };

  RadioButtonGroup.prototype.clearValue = function clearValue() {
    this.setSelectedValue('');
  };

  RadioButtonGroup.prototype.render = function render() {
    var _this3 = this;

    var prepareStyles = this.context.muiTheme.prepareStyles;


    var options = _react2.default.Children.map(this.props.children, function (option) {
      var _option$props = option.props,
          name = _option$props.name,
          value = _option$props.value,
          label = _option$props.label,
          onCheck = _option$props.onCheck,
          other = (0, _objectWithoutProperties3.default)(_option$props, ['name', 'value', 'label', 'onCheck']);


      return _react2.default.createElement(_RadioButton2.default, (0, _extends3.default)({}, other, {
        ref: option.props.value,
        name: _this3.props.name,
        key: option.props.value,
        value: option.props.value,
        label: option.props.label,
        labelPosition: _this3.props.labelPosition,
        onCheck: _this3.handleChange,
        checked: option.props.value === _this3.state.selected
      }));
    }, this);

    return _react2.default.createElement(
      'div',
      {
        style: prepareStyles((0, _assign2.default)({}, this.props.style)),
        className: this.props.className
      },
      options
    );
  };

  return RadioButtonGroup;
}(_react.Component), _class.propTypes = {
  /**
   * Should be used to pass `RadioButton` components.
   */
  children: _propTypes2.default.node,
  /**
   * The CSS class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * The `value` property of the radio button that will be
   * selected by default. This takes precedence over the `checked` property
   * of the `RadioButton` elements.
   */
  defaultSelected: _propTypes2.default.any,
  /**
   * Where the label will be placed for all child radio buttons.
   * This takes precedence over the `labelPosition` property of the
   * `RadioButton` elements.
   */
  labelPosition: _propTypes2.default.oneOf(['left', 'right']),
  /**
   * The name that will be applied to all child radio buttons.
   */
  name: _propTypes2.default.string.isRequired,
  /**
   * Callback function that is fired when a radio button has
   * been checked.
   *
   * @param {object} event `change` event targeting the selected
   * radio button.
   * @param {*} value The `value` of the selected radio button.
   */
  onChange: _propTypes2.default.func,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * The `value` of the currently selected radio button.
   */
  valueSelected: _propTypes2.default.any
}, _class.defaultProps = {
  style: {}
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = RadioButtonGroup;

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _typeof2 = __webpack_require__(52);

var _typeof3 = _interopRequireDefault(_typeof2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _checkCircle = __webpack_require__(394);

var _checkCircle2 = _interopRequireDefault(_checkCircle);

var _SvgIcon = __webpack_require__(16);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getStyles = function getStyles(_ref, _ref2) {
  var active = _ref.active,
      completed = _ref.completed,
      disabled = _ref.disabled;
  var muiTheme = _ref2.muiTheme,
      stepper = _ref2.stepper;
  var _muiTheme$stepper = muiTheme.stepper,
      textColor = _muiTheme$stepper.textColor,
      disabledTextColor = _muiTheme$stepper.disabledTextColor,
      iconColor = _muiTheme$stepper.iconColor,
      inactiveIconColor = _muiTheme$stepper.inactiveIconColor;
  var baseTheme = muiTheme.baseTheme;
  var orientation = stepper.orientation;


  var styles = {
    root: {
      height: orientation === 'horizontal' ? 72 : 64,
      color: textColor,
      display: 'flex',
      alignItems: 'center',
      fontFamily: baseTheme.fontFamily,
      fontSize: 14,
      paddingLeft: 14,
      paddingRight: 14
    },
    icon: {
      color: iconColor,
      display: 'block',
      fontSize: 24,
      width: 24,
      height: 24
    },
    iconContainer: {
      paddingRight: 8
    }
  };

  if (active) {
    styles.root.fontWeight = 500;
  }

  if (!completed && !active) {
    styles.icon.color = inactiveIconColor;
  }

  if (disabled) {
    styles.icon.color = inactiveIconColor;
    styles.root.color = disabledTextColor;
    styles.root.cursor = 'default';
  }

  return styles;
};

var renderIcon = function renderIcon(completed, icon, styles) {
  var iconType = typeof icon === 'undefined' ? 'undefined' : (0, _typeof3.default)(icon);

  if (iconType === 'number' || iconType === 'string') {
    if (completed) {
      return _react2.default.createElement(_checkCircle2.default, {
        color: styles.icon.color,
        style: styles.icon
      });
    }

    return _react2.default.createElement(
      _SvgIcon2.default,
      { color: styles.icon.color, style: styles.icon },
      _react2.default.createElement('circle', { cx: '12', cy: '12', r: '10' }),
      _react2.default.createElement(
        'text',
        {
          x: '12',
          y: '16',
          textAnchor: 'middle',
          fontSize: '12',
          fill: '#fff'
        },
        icon
      )
    );
  }

  return icon;
};

var StepLabel = function StepLabel(props, context) {
  var active = props.active,
      children = props.children,
      completed = props.completed,
      userIcon = props.icon,
      iconContainerStyle = props.iconContainerStyle,
      last = props.last,
      style = props.style,
      other = (0, _objectWithoutProperties3.default)(props, ['active', 'children', 'completed', 'icon', 'iconContainerStyle', 'last', 'style']);
  var prepareStyles = context.muiTheme.prepareStyles;

  var styles = getStyles(props, context);
  var icon = renderIcon(completed, userIcon, styles);

  return _react2.default.createElement(
    'span',
    (0, _extends3.default)({ style: prepareStyles((0, _assign2.default)(styles.root, style)) }, other),
    icon && _react2.default.createElement(
      'span',
      { style: prepareStyles((0, _assign2.default)(styles.iconContainer, iconContainerStyle)) },
      icon
    ),
    children
  );
};

StepLabel.muiName = 'StepLabel';

StepLabel.propTypes = {
  /**
   * Sets active styling. Overrides disabled coloring.
   */
  active: _propTypes2.default.bool,
  /**
   * The label text node
   */
  children: _propTypes2.default.node,
  /**
   * Sets completed styling. Overrides disabled coloring.
   */
  completed: _propTypes2.default.bool,
  /**
   * Sets disabled styling.
   */
  disabled: _propTypes2.default.bool,
  /**
   * The icon displayed by the step label.
   */
  icon: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.string, _propTypes2.default.number]),
  /**
   * Override the inline-styles of the icon container element.
   */
  iconContainerStyle: _propTypes2.default.object,
  /**
   * @ignore
   */
  last: _propTypes2.default.bool,
  /**
   * Override the inline-style of the root element.
   */
  style: _propTypes2.default.object
};

StepLabel.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired,
  stepper: _propTypes2.default.object
};

exports.default = StepLabel;

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Subheader = __webpack_require__(360);

var _Subheader2 = _interopRequireDefault(_Subheader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Subheader2.default;

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _typeof2 = __webpack_require__(52);

var _typeof3 = _interopRequireDefault(_typeof2);

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Checkbox = __webpack_require__(102);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _TableRowColumn = __webpack_require__(80);

var _TableRowColumn2 = _interopRequireDefault(_TableRowColumn);

var _ClickAwayListener = __webpack_require__(112);

var _ClickAwayListener2 = _interopRequireDefault(_ClickAwayListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableBody = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(TableBody, _Component);

  function TableBody() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TableBody);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      selectedRows: []
    }, _this.isControlled = false, _this.handleClickAway = function () {
      if (_this.props.deselectOnClickaway && _this.state.selectedRows.length > 0) {
        var selectedRows = [];
        _this.setState({ selectedRows: selectedRows });
        if (_this.props.onRowSelection) {
          _this.props.onRowSelection(selectedRows);
        }
      }
    }, _this.onRowClick = function (event, rowNumber) {
      event.stopPropagation();

      if (_this.props.selectable) {
        // Prevent text selection while selecting rows.
        window.getSelection().removeAllRanges();
        _this.processRowSelection(event, rowNumber);
      }
    }, _this.onCellClick = function (event, rowNumber, columnNumber) {
      event.stopPropagation();
      if (_this.props.onCellClick) {
        _this.props.onCellClick(rowNumber, _this.getColumnId(columnNumber), event);
      }
    }, _this.onCellHover = function (event, rowNumber, columnNumber) {
      if (_this.props.onCellHover) {
        _this.props.onCellHover(rowNumber, _this.getColumnId(columnNumber), event);
      }
      _this.onRowHover(event, rowNumber);
    }, _this.onCellHoverExit = function (event, rowNumber, columnNumber) {
      if (_this.props.onCellHoverExit) {
        _this.props.onCellHoverExit(rowNumber, _this.getColumnId(columnNumber), event);
      }
      _this.onRowHoverExit(event, rowNumber);
    }, _this.onRowHover = function (event, rowNumber) {
      if (_this.props.onRowHover) {
        _this.props.onRowHover(rowNumber);
      }
    }, _this.onRowHoverExit = function (event, rowNumber) {
      if (_this.props.onRowHoverExit) {
        _this.props.onRowHoverExit(rowNumber);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  TableBody.prototype.componentWillMount = function componentWillMount() {
    if (this.props.preScanRows) {
      this.setState({
        selectedRows: this.getSelectedRows(this.props)
      });
    }
  };

  TableBody.prototype.componentDidMount = function componentDidMount() {
    if (!this.props.preScanRows) {
      this.setState({ // eslint-disable-line react/no-did-mount-set-state
        selectedRows: this.getSelectedRows(this.props)
      });
    }
  };

  TableBody.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.allRowsSelected !== nextProps.allRowsSelected) {
      if (!nextProps.allRowsSelected) {
        this.setState({
          selectedRows: []
        });
        return;
      }
    }

    this.setState({
      selectedRows: this.getSelectedRows(nextProps)
    });
  };

  TableBody.prototype.createRows = function createRows() {
    var _this2 = this;

    var numChildren = _react2.default.Children.count(this.props.children);
    var rowNumber = 0;
    var handlers = {
      onCellClick: this.onCellClick,
      onCellHover: this.onCellHover,
      onCellHoverExit: this.onCellHoverExit,
      onRowHover: this.onRowHover,
      onRowHoverExit: this.onRowHoverExit,
      onRowClick: this.onRowClick
    };

    return _react2.default.Children.map(this.props.children, function (child) {
      if (_react2.default.isValidElement(child)) {
        var props = {
          hoverable: _this2.props.showRowHover,
          selected: _this2.isRowSelected(rowNumber),
          striped: _this2.props.stripedRows && rowNumber % 2 === 0,
          rowNumber: rowNumber++
        };

        if (rowNumber === numChildren) {
          props.displayBorder = false;
        }

        var children = [_this2.createRowCheckboxColumn(props)];

        _react2.default.Children.forEach(child.props.children, function (child) {
          children.push(child);
        });

        return _react2.default.cloneElement(child, (0, _extends3.default)({}, props, handlers), children);
      }
    });
  };

  TableBody.prototype.createRowCheckboxColumn = function createRowCheckboxColumn(rowProps) {
    if (!this.props.displayRowCheckbox) {
      return null;
    }

    var name = rowProps.rowNumber + '-cb';
    var disabled = !this.props.selectable;

    return _react2.default.createElement(
      _TableRowColumn2.default,
      {
        key: name,
        columnNumber: 0,
        style: {
          width: 24,
          cursor: disabled ? 'default' : 'inherit'
        }
      },
      _react2.default.createElement(_Checkbox2.default, {
        name: name,
        value: 'selected',
        disabled: disabled,
        checked: rowProps.selected
      })
    );
  };

  TableBody.prototype.getSelectedRows = function getSelectedRows(props) {
    var _this3 = this;

    var selectedRows = [];

    if (props.selectable) {
      var index = 0;
      _react2.default.Children.forEach(props.children, function (child) {
        if (_react2.default.isValidElement(child)) {
          if (child.props.selected !== undefined) {
            _this3.isControlled = true;
          }

          if (child.props.selected && (selectedRows.length === 0 || props.multiSelectable)) {
            selectedRows.push(index);
          }

          index++;
        }
      });
    }

    return selectedRows;
  };

  TableBody.prototype.isRowSelected = function isRowSelected(rowNumber) {
    var _this4 = this;

    if (this.props.allRowsSelected) {
      return true;
    }

    return this.state.selectedRows.some(function (row) {
      if ((typeof row === 'undefined' ? 'undefined' : (0, _typeof3.default)(row)) === 'object') {
        if (_this4.isValueInRange(rowNumber, row)) {
          return true;
        }
      } else {
        if (row === rowNumber) {
          return true;
        }
      }

      return false;
    });
  };

  TableBody.prototype.isValueInRange = function isValueInRange(value, range) {
    if (!range) return false;

    if (range.start <= value && value <= range.end || range.end <= value && value <= range.start) {
      return true;
    }

    return false;
  };

  TableBody.prototype.processRowSelection = function processRowSelection(event, rowNumber) {
    var selectedRows = [].concat(this.state.selectedRows);

    if (event.shiftKey && this.props.multiSelectable && selectedRows.length > 0) {
      var lastIndex = selectedRows.length - 1;
      var lastSelection = selectedRows[lastIndex];

      if ((typeof lastSelection === 'undefined' ? 'undefined' : (0, _typeof3.default)(lastSelection)) === 'object') {
        lastSelection.end = rowNumber;
      } else {
        selectedRows.splice(lastIndex, 1, {
          start: lastSelection,
          end: rowNumber
        });
      }
    } else if ((event.ctrlKey && !event.metaKey || event.metaKey && !event.ctrlKey) && this.props.multiSelectable) {
      var idx = selectedRows.indexOf(rowNumber);
      if (idx < 0) {
        var foundRange = false;
        for (var i = 0; i < selectedRows.length; i++) {
          var range = selectedRows[i];
          if ((typeof range === 'undefined' ? 'undefined' : (0, _typeof3.default)(range)) !== 'object') continue;

          if (this.isValueInRange(rowNumber, range)) {
            var _selectedRows;

            foundRange = true;
            var values = this.splitRange(range, rowNumber);
            (_selectedRows = selectedRows).splice.apply(_selectedRows, [i, 1].concat(values));
          }
        }

        if (!foundRange) selectedRows.push(rowNumber);
      } else {
        selectedRows.splice(idx, 1);
      }
    } else {
      if (selectedRows.length === 1 && selectedRows[0] === rowNumber) {
        selectedRows = [];
      } else {
        selectedRows = [rowNumber];
      }
    }

    if (!this.isControlled) {
      this.setState({ selectedRows: selectedRows });
    }

    if (this.props.onRowSelection) {
      this.props.onRowSelection(this.flattenRanges(selectedRows));
    }
  };

  TableBody.prototype.splitRange = function splitRange(range, splitPoint) {
    var splitValues = [];
    var startOffset = range.start - splitPoint;
    var endOffset = range.end - splitPoint;

    // Process start half
    splitValues.push.apply(splitValues, this.genRangeOfValues(splitPoint, startOffset));

    // Process end half
    splitValues.push.apply(splitValues, this.genRangeOfValues(splitPoint, endOffset));

    return splitValues;
  };

  TableBody.prototype.genRangeOfValues = function genRangeOfValues(start, offset) {
    var values = [];
    var dir = offset > 0 ? -1 : 1; // This forces offset to approach 0 from either direction.
    while (offset !== 0) {
      values.push(start + offset);
      offset += dir;
    }

    return values;
  };

  TableBody.prototype.flattenRanges = function flattenRanges(selectedRows) {
    var _this5 = this;

    return selectedRows.reduce(function (rows, row) {
      if ((typeof row === 'undefined' ? 'undefined' : (0, _typeof3.default)(row)) === 'object') {
        var values = _this5.genRangeOfValues(row.end, row.start - row.end);
        rows.push.apply(rows, [row.end].concat(values));
      } else {
        rows.push(row);
      }

      return rows;
    }, []).sort();
  };

  TableBody.prototype.getColumnId = function getColumnId(columnNumber) {
    var columnId = columnNumber;
    if (this.props.displayRowCheckbox) {
      columnId--;
    }

    return columnId;
  };

  TableBody.prototype.render = function render() {
    var _props = this.props,
        style = _props.style,
        allRowsSelected = _props.allRowsSelected,
        multiSelectable = _props.multiSelectable,
        onCellClick = _props.onCellClick,
        onCellHover = _props.onCellHover,
        onCellHoverExit = _props.onCellHoverExit,
        onRowHover = _props.onRowHover,
        onRowHoverExit = _props.onRowHoverExit,
        onRowSelection = _props.onRowSelection,
        selectable = _props.selectable,
        deselectOnClickaway = _props.deselectOnClickaway,
        showRowHover = _props.showRowHover,
        stripedRows = _props.stripedRows,
        displayRowCheckbox = _props.displayRowCheckbox,
        preScanRows = _props.preScanRows,
        other = (0, _objectWithoutProperties3.default)(_props, ['style', 'allRowsSelected', 'multiSelectable', 'onCellClick', 'onCellHover', 'onCellHoverExit', 'onRowHover', 'onRowHoverExit', 'onRowSelection', 'selectable', 'deselectOnClickaway', 'showRowHover', 'stripedRows', 'displayRowCheckbox', 'preScanRows']);
    var prepareStyles = this.context.muiTheme.prepareStyles;


    return _react2.default.createElement(
      _ClickAwayListener2.default,
      { onClickAway: this.handleClickAway },
      _react2.default.createElement(
        'tbody',
        (0, _extends3.default)({ style: prepareStyles((0, _assign2.default)({}, style)) }, other),
        this.createRows()
      )
    );
  };

  return TableBody;
}(_react.Component), _class.muiName = 'TableBody', _class.propTypes = {
  /**
   * @ignore
   * Set to true to indicate that all rows should be selected.
   */
  allRowsSelected: _propTypes2.default.bool,
  /**
   * Children passed to table body.
   */
  children: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * Controls whether or not to deselect all selected
   * rows after clicking outside the table.
   */
  deselectOnClickaway: _propTypes2.default.bool,
  /**
   * Controls the display of the row checkbox. The default value is true.
   */
  displayRowCheckbox: _propTypes2.default.bool,
  /**
   * @ignore
   * If true, multiple table rows can be selected.
   * CTRL/CMD+Click and SHIFT+Click are valid actions.
   * The default value is false.
   */
  multiSelectable: _propTypes2.default.bool,
  /**
   * @ignore
   * Callback function for when a cell is clicked.
   */
  onCellClick: _propTypes2.default.func,
  /**
   * @ignore
   * Called when a table cell is hovered. rowNumber
   * is the row number of the hovered row and columnId
   * is the column number or the column key of the cell.
   */
  onCellHover: _propTypes2.default.func,
  /**
   * @ignore
   * Called when a table cell is no longer hovered.
   * rowNumber is the row number of the row and columnId
   * is the column number or the column key of the cell.
   */
  onCellHoverExit: _propTypes2.default.func,
  /**
   * @ignore
   * Called when a table row is hovered.
   * rowNumber is the row number of the hovered row.
   */
  onRowHover: _propTypes2.default.func,
  /**
   * @ignore
   * Called when a table row is no longer
   * hovered. rowNumber is the row number of the row
   * that is no longer hovered.
   */
  onRowHoverExit: _propTypes2.default.func,
  /**
   * @ignore
   * Called when a row is selected. selectedRows is an
   * array of all row selections. If all rows have been selected,
   * the string "all" will be returned instead to indicate that
   * all rows have been selected.
   */
  onRowSelection: _propTypes2.default.func,
  /**
   * Controls whether or not the rows are pre-scanned to determine
   * initial state. If your table has a large number of rows and
   * you are experiencing a delay in rendering, turn off this property.
   */
  preScanRows: _propTypes2.default.bool,
  /**
   * @ignore
   * If true, table rows can be selected. If multiple
   * row selection is desired, enable multiSelectable.
   * The default value is true.
   */
  selectable: _propTypes2.default.bool,
  /**
   * If true, table rows will be highlighted when
   * the cursor is hovering over the row. The default
   * value is false.
   */
  showRowHover: _propTypes2.default.bool,
  /**
   * If true, every other table row starting
   * with the first row will be striped. The default value is false.
   */
  stripedRows: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
}, _class.defaultProps = {
  allRowsSelected: false,
  deselectOnClickaway: true,
  displayRowCheckbox: true,
  multiSelectable: false,
  preScanRows: true,
  selectable: true,
  style: {}
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = TableBody;

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TableRowColumn = __webpack_require__(80);

var _TableRowColumn2 = _interopRequireDefault(_TableRowColumn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var tableFooter = context.muiTheme.tableFooter;


  return {
    cell: {
      borderTop: '1px solid ' + tableFooter.borderColor,
      verticalAlign: 'bottom',
      padding: 20,
      textAlign: 'left',
      whiteSpace: 'nowrap'
    }
  };
}

var TableFooter = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(TableFooter, _Component);

  function TableFooter() {
    (0, _classCallCheck3.default)(this, TableFooter);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  TableFooter.prototype.render = function render() {
    var _props = this.props,
        adjustForCheckbox = _props.adjustForCheckbox,
        children = _props.children,
        className = _props.className,
        style = _props.style,
        other = (0, _objectWithoutProperties3.default)(_props, ['adjustForCheckbox', 'children', 'className', 'style']);
    var prepareStyles = this.context.muiTheme.prepareStyles;

    var styles = getStyles(this.props, this.context);

    var footerRows = _react2.default.Children.map(children, function (child, rowNumber) {
      var newChildProps = {
        displayBorder: false,
        key: 'f-' + rowNumber,
        rowNumber: rowNumber,
        style: (0, _assign2.default)({}, styles.cell, child.props.style)
      };

      var newDescendants = void 0;

      if (adjustForCheckbox) {
        newDescendants = [_react2.default.createElement(_TableRowColumn2.default, { key: 'fpcb' + rowNumber, style: { width: 24 } })].concat(_react2.default.Children.toArray(child.props.children));
      } else {
        newDescendants = child.props.children;
      }

      return _react2.default.cloneElement(child, newChildProps, newDescendants);
    });

    return _react2.default.createElement(
      'tfoot',
      (0, _extends3.default)({ className: className, style: prepareStyles((0, _assign2.default)({}, style)) }, other),
      footerRows
    );
  };

  return TableFooter;
}(_react.Component), _class.muiName = 'TableFooter', _class.propTypes = {
  /**
   * @ignore
   * Controls whether or not header rows should be adjusted
   * for a checkbox column. If the select all checkbox is true,
   * this property will not influence the number of columns.
   * This is mainly useful for "super header" rows so that
   * the checkbox column does not create an offset that needs
   * to be accounted for manually.
   */
  adjustForCheckbox: _propTypes2.default.bool,
  /**
   * Children passed to table footer.
   */
  children: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
}, _class.defaultProps = {
  adjustForCheckbox: true,
  style: {}
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp);
exports.default = TableFooter;

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Checkbox = __webpack_require__(102);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _TableHeaderColumn = __webpack_require__(107);

var _TableHeaderColumn2 = _interopRequireDefault(_TableHeaderColumn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var tableHeader = context.muiTheme.tableHeader;


  return {
    root: {
      borderBottom: '1px solid ' + tableHeader.borderColor
    }
  };
}

var TableHeader = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(TableHeader, _Component);

  function TableHeader() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TableHeader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleCheckAll = function (event, checked) {
      if (_this.props.onSelectAll) {
        _this.props.onSelectAll(checked);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  TableHeader.prototype.createSuperHeaderRows = function createSuperHeaderRows() {
    var numChildren = _react2.default.Children.count(this.props.children);
    if (numChildren === 1) return undefined;

    var superHeaders = [];
    for (var index = 0; index < numChildren - 1; index++) {
      var child = this.props.children[index];

      if (!_react2.default.isValidElement(child)) continue;

      var props = {
        key: 'sh' + index,
        rowNumber: index
      };
      superHeaders.push(this.createSuperHeaderRow(child, props));
    }

    if (superHeaders.length) return superHeaders;
  };

  TableHeader.prototype.createSuperHeaderRow = function createSuperHeaderRow(child, props) {
    var children = [];
    if (this.props.adjustForCheckbox) {
      children.push(this.getCheckboxPlaceholder(props));
    }
    _react2.default.Children.forEach(child.props.children, function (child) {
      children.push(child);
    });

    return _react2.default.cloneElement(child, props, children);
  };

  TableHeader.prototype.createBaseHeaderRow = function createBaseHeaderRow() {
    var childrenArray = _react2.default.Children.toArray(this.props.children);
    var numChildren = childrenArray.length;
    if (numChildren < 1) {
      return null;
    }

    var child = childrenArray[numChildren - 1];

    var props = {
      key: 'h' + numChildren,
      rowNumber: numChildren
    };

    var children = [this.getSelectAllCheckboxColumn(props)];
    _react2.default.Children.forEach(child.props.children, function (child) {
      children.push(child);
    });

    return _react2.default.cloneElement(child, props, children);
  };

  TableHeader.prototype.getCheckboxPlaceholder = function getCheckboxPlaceholder(props) {
    if (!this.props.adjustForCheckbox) return null;

    var disabled = !this.props.enableSelectAll;
    var key = 'hpcb' + props.rowNumber;
    return _react2.default.createElement(_TableHeaderColumn2.default, {
      key: key,
      style: {
        width: 24,
        cursor: disabled ? 'default' : 'inherit'
      }
    });
  };

  TableHeader.prototype.getSelectAllCheckboxColumn = function getSelectAllCheckboxColumn(props) {
    if (!this.props.displaySelectAll) return this.getCheckboxPlaceholder(props);

    var disabled = !this.props.enableSelectAll;
    var checkbox = _react2.default.createElement(_Checkbox2.default, {
      key: 'selectallcb',
      name: 'selectallcb',
      value: 'selected',
      disabled: disabled,
      checked: this.props.selectAllSelected,
      onCheck: this.handleCheckAll
    });

    var key = 'hpcb' + props.rowNumber;
    return _react2.default.createElement(
      _TableHeaderColumn2.default,
      {
        key: key,
        style: {
          width: 24,
          cursor: disabled ? 'not-allowed' : 'inherit'
        }
      },
      checkbox
    );
  };

  TableHeader.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        style = _props.style;
    var prepareStyles = this.context.muiTheme.prepareStyles;

    var styles = getStyles(this.props, this.context);
    var superHeaderRows = this.createSuperHeaderRows();
    var baseHeaderRow = this.createBaseHeaderRow();

    return _react2.default.createElement(
      'thead',
      { className: className, style: prepareStyles((0, _assign2.default)(styles.root, style)) },
      superHeaderRows,
      baseHeaderRow
    );
  };

  return TableHeader;
}(_react.Component), _class.muiName = 'TableHeader', _class.propTypes = {
  /**
   * Controls whether or not header rows should be
   * adjusted for a checkbox column. If the select all
   * checkbox is true, this property will not influence
   * the number of columns. This is mainly useful for
   * "super header" rows so that the checkbox column
   * does not create an offset that needs to be accounted
   * for manually.
   */
  adjustForCheckbox: _propTypes2.default.bool,
  /**
   * Children passed to table header.
   */
  children: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * Controls whether or not the select all checkbox is displayed.
   */
  displaySelectAll: _propTypes2.default.bool,
  /**
   * If set to true, the select all button will be interactable.
   * If set to false, the button will not be interactable.
   * To hide the checkbox, set displaySelectAll to false.
   */
  enableSelectAll: _propTypes2.default.bool,
  /**
   * @ignore
   * Callback when select all has been checked.
   */
  onSelectAll: _propTypes2.default.func,
  /**
   * @ignore
   * True when select all has been checked.
   */
  selectAllSelected: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
}, _class.defaultProps = {
  adjustForCheckbox: true,
  displaySelectAll: true,
  enableSelectAll: true,
  selectAllSelected: false
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = TableHeader;

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context, state) {
  var tableRow = context.muiTheme.tableRow;


  var cellBgColor = 'inherit';
  if (props.hovered || state.hovered) {
    cellBgColor = tableRow.hoverColor;
  } else if (props.selected) {
    cellBgColor = tableRow.selectedColor;
  } else if (props.striped) {
    cellBgColor = tableRow.stripeColor;
  }

  return {
    root: {
      borderBottom: props.displayBorder && '1px solid ' + tableRow.borderColor,
      color: tableRow.textColor,
      height: tableRow.height
    },
    cell: {
      backgroundColor: cellBgColor
    }
  };
}

var TableRow = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(TableRow, _Component);

  function TableRow() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TableRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      hovered: false
    }, _this.onCellClick = function (event, columnIndex) {
      if (_this.props.selectable && _this.props.onCellClick) {
        _this.props.onCellClick(event, _this.props.rowNumber, columnIndex);
      }
      event.ctrlKey = true;
      _this.onRowClick(event);
    }, _this.onCellHover = function (event, columnIndex) {
      if (_this.props.hoverable) {
        _this.setState({ hovered: true });
        if (_this.props.onCellHover) _this.props.onCellHover(event, _this.props.rowNumber, columnIndex);
        _this.onRowHover(event);
      }
    }, _this.onCellHoverExit = function (event, columnIndex) {
      if (_this.props.hoverable) {
        _this.setState({ hovered: false });
        if (_this.props.onCellHoverExit) _this.props.onCellHoverExit(event, _this.props.rowNumber, columnIndex);
        _this.onRowHoverExit(event);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  TableRow.prototype.onRowClick = function onRowClick(event) {
    if (this.props.selectable && this.props.onRowClick) {
      this.props.onRowClick(event, this.props.rowNumber);
    }
  };

  TableRow.prototype.onRowHover = function onRowHover(event) {
    if (this.props.onRowHover) {
      this.props.onRowHover(event, this.props.rowNumber);
    }
  };

  TableRow.prototype.onRowHoverExit = function onRowHoverExit(event) {
    if (this.props.onRowHoverExit) {
      this.props.onRowHoverExit(event, this.props.rowNumber);
    }
  };

  TableRow.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        className = _props.className,
        displayBorder = _props.displayBorder,
        hoverable = _props.hoverable,
        hovered = _props.hovered,
        onCellClick = _props.onCellClick,
        onCellHover = _props.onCellHover,
        onCellHoverExit = _props.onCellHoverExit,
        onRowClick = _props.onRowClick,
        onRowHover = _props.onRowHover,
        onRowHoverExit = _props.onRowHoverExit,
        rowNumber = _props.rowNumber,
        selectable = _props.selectable,
        selected = _props.selected,
        striped = _props.striped,
        style = _props.style,
        other = (0, _objectWithoutProperties3.default)(_props, ['className', 'displayBorder', 'hoverable', 'hovered', 'onCellClick', 'onCellHover', 'onCellHoverExit', 'onRowClick', 'onRowHover', 'onRowHoverExit', 'rowNumber', 'selectable', 'selected', 'striped', 'style']);
    var prepareStyles = this.context.muiTheme.prepareStyles;

    var styles = getStyles(this.props, this.context, this.state);

    var rowColumns = _react2.default.Children.map(this.props.children, function (child, columnNumber) {
      if (_react2.default.isValidElement(child)) {
        return _react2.default.cloneElement(child, {
          columnNumber: columnNumber,
          hoverable: _this2.props.hoverable,
          key: _this2.props.rowNumber + '-' + columnNumber,
          onClick: _this2.onCellClick,
          onHover: _this2.onCellHover,
          onHoverExit: _this2.onCellHoverExit,
          style: (0, _assign2.default)({}, styles.cell, child.props.style)
        });
      }
    });

    return _react2.default.createElement(
      'tr',
      (0, _extends3.default)({
        className: className,
        style: prepareStyles((0, _assign2.default)(styles.root, style))
      }, other),
      rowColumns
    );
  };

  return TableRow;
}(_react.Component), _class.propTypes = {
  /**
   * Children passed to table row.
   */
  children: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * If true, row border will be displayed for the row.
   * If false, no border will be drawn.
   */
  displayBorder: _propTypes2.default.bool,
  /**
   * Controls whether or not the row responds to hover events.
   */
  hoverable: _propTypes2.default.bool,
  /**
   * Controls whether or not the row should be rendered as being
   * hovered. This property is evaluated in addition to this.state.hovered
   * and can be used to synchronize the hovered state with some other
   * external events.
   */
  hovered: _propTypes2.default.bool,
  /**
   * @ignore
   * Called when a row cell is clicked.
   * rowNumber is the row number and columnId is
   * the column number or the column key.
   */
  onCellClick: _propTypes2.default.func,
  /**
   * @ignore
   * Called when a table cell is hovered.
   * rowNumber is the row number of the hovered row
   * and columnId is the column number or the column key of the cell.
   */
  onCellHover: _propTypes2.default.func,
  /**
   * @ignore
   * Called when a table cell is no longer hovered.
   * rowNumber is the row number of the row and columnId
   * is the column number or the column key of the cell.
   */
  onCellHoverExit: _propTypes2.default.func,
  /**
   * @ignore
   * Called when row is clicked.
   */
  onRowClick: _propTypes2.default.func,
  /**
   * @ignore
   * Called when a table row is hovered.
   * rowNumber is the row number of the hovered row.
   */
  onRowHover: _propTypes2.default.func,
  /**
   * @ignore
   * Called when a table row is no longer hovered.
   * rowNumber is the row number of the row that is no longer hovered.
   */
  onRowHoverExit: _propTypes2.default.func,
  /**
   * Number to identify the row. This property is
   * automatically populated when used with the TableBody component.
   */
  rowNumber: _propTypes2.default.number,
  /**
   * If true, table rows can be selected. If multiple row
   * selection is desired, enable multiSelectable.
   * The default value is true.
   */
  selectable: _propTypes2.default.bool,
  /**
   * Indicates that a particular row is selected.
   * This property can be used to programmatically select rows.
   */
  selected: _propTypes2.default.bool,
  /**
   * Indicates whether or not the row is striped.
   */
  striped: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
}, _class.defaultProps = {
  displayBorder: true,
  hoverable: false,
  hovered: false,
  selectable: true,
  striped: false
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = TableRow;

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _EnhancedButton = __webpack_require__(27);

var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var tabs = context.muiTheme.tabs;


  return {
    root: {
      color: props.selected ? tabs.selectedTextColor : tabs.textColor,
      fontWeight: 500,
      fontSize: 14,
      width: props.width,
      textTransform: 'uppercase',
      padding: 0
    },
    button: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: props.label && props.icon ? 72 : 48
    }
  };
}

var Tab = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(Tab, _Component);

  function Tab() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Tab);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleTouchTap = function (event) {
      if (_this.props.onTouchTap) {
        _this.props.onTouchTap(_this.props.value, event, _this);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  Tab.prototype.render = function render() {
    var _props = this.props,
        icon = _props.icon,
        index = _props.index,
        onActive = _props.onActive,
        onTouchTap = _props.onTouchTap,
        selected = _props.selected,
        label = _props.label,
        buttonStyle = _props.buttonStyle,
        style = _props.style,
        value = _props.value,
        width = _props.width,
        other = (0, _objectWithoutProperties3.default)(_props, ['icon', 'index', 'onActive', 'onTouchTap', 'selected', 'label', 'buttonStyle', 'style', 'value', 'width']);


    var styles = getStyles(this.props, this.context);

    var iconElement = void 0;
    if (icon && _react2.default.isValidElement(icon)) {
      var iconProps = {
        style: {
          fontSize: 24,
          color: styles.root.color,
          marginBottom: label ? 5 : 0
        }
      };
      // If it's svg icon set color via props
      if (icon.type.muiName !== 'FontIcon') {
        iconProps.color = styles.root.color;
      }
      iconElement = _react2.default.cloneElement(icon, iconProps);
    }

    var rippleOpacity = 0.3;
    var rippleColor = this.context.muiTheme.tabs.selectedTextColor;

    return _react2.default.createElement(
      _EnhancedButton2.default,
      (0, _extends3.default)({}, other, {
        style: (0, _assign2.default)(styles.root, style),
        focusRippleColor: rippleColor,
        touchRippleColor: rippleColor,
        focusRippleOpacity: rippleOpacity,
        touchRippleOpacity: rippleOpacity,
        onTouchTap: this.handleTouchTap
      }),
      _react2.default.createElement(
        'div',
        { style: (0, _assign2.default)(styles.button, buttonStyle) },
        iconElement,
        label
      )
    );
  };

  return Tab;
}(_react.Component), _class.muiName = 'Tab', _class.propTypes = {
  /**
   * Override the inline-styles of the button element.
   */
  buttonStyle: _propTypes2.default.object,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * Sets the icon of the tab, you can pass `FontIcon` or `SvgIcon` elements.
   */
  icon: _propTypes2.default.node,
  /**
   * @ignore
   */
  index: _propTypes2.default.any,
  /**
   * Sets the text value of the tab item to the string specified.
   */
  label: _propTypes2.default.node,
  /**
   * Fired when the active tab changes by touch or tap.
   * Use this event to specify any functionality when an active tab changes.
   * For example - we are using this to route to home when the third tab becomes active.
   * This function will always recieve the active tab as it\'s first argument.
   */
  onActive: _propTypes2.default.func,
  /**
   * @ignore
   * This property is overriden by the Tabs component.
   */
  onTouchTap: _propTypes2.default.func,
  /**
   * @ignore
   * Defines if the current tab is selected or not.
   * The Tabs component is responsible for setting this property.
   */
  selected: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * If value prop passed to Tabs component, this value prop is also required.
   * It assigns a value to the tab so that it can be selected by the Tabs.
   */
  value: _propTypes2.default.any,
  /**
   * @ignore
   * This property is overriden by the Tabs component.
   */
  width: _propTypes2.default.string
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = Tab;

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var firstChild = props.firstChild,
      lastChild = props.lastChild;
  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      button = _context$muiTheme.button,
      toolbar = _context$muiTheme.toolbar;


  var marginHorizontal = baseTheme.spacing.desktopGutter;
  var marginVertical = (toolbar.height - button.height) / 2;

  var styles = {
    root: {
      position: 'relative',
      marginLeft: firstChild ? -marginHorizontal : undefined,
      marginRight: lastChild ? -marginHorizontal : undefined,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    dropDownMenu: {
      root: {
        color: toolbar.color, // removes hover color change, we want to keep it
        marginRight: baseTheme.spacing.desktopGutter,
        flex: 1,
        whiteSpace: 'nowrap'
      },
      controlBg: {
        backgroundColor: toolbar.menuHoverColor,
        borderRadius: 0
      },
      underline: {
        display: 'none'
      }
    },
    button: {
      margin: marginVertical + 'px ' + marginHorizontal + 'px',
      position: 'relative'
    },
    icon: {
      root: {
        cursor: 'pointer',
        lineHeight: toolbar.height + 'px',
        paddingLeft: baseTheme.spacing.desktopGutter
      }
    },
    span: {
      color: toolbar.iconColor,
      lineHeight: toolbar.height + 'px'
    }
  };

  return styles;
}

var ToolbarGroup = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(ToolbarGroup, _Component);

  function ToolbarGroup() {
    (0, _classCallCheck3.default)(this, ToolbarGroup);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  ToolbarGroup.prototype.handleMouseLeaveFontIcon = function handleMouseLeaveFontIcon(style) {
    return function (event) {
      event.target.style.zIndex = 'auto';
      event.target.style.color = style.root.color;
    };
  };

  ToolbarGroup.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        className = _props.className,
        firstChild = _props.firstChild,
        lastChild = _props.lastChild,
        style = _props.style,
        other = (0, _objectWithoutProperties3.default)(_props, ['children', 'className', 'firstChild', 'lastChild', 'style']);
    var prepareStyles = this.context.muiTheme.prepareStyles;

    var styles = getStyles(this.props, this.context);

    var newChildren = _react2.default.Children.map(children, function (currentChild) {
      if (!currentChild) {
        return null;
      }
      if (!currentChild.type) {
        return currentChild;
      }
      switch (currentChild.type.muiName) {
        case 'DropDownMenu':
          return _react2.default.cloneElement(currentChild, {
            style: (0, _assign2.default)({}, styles.dropDownMenu.root, currentChild.props.style),
            underlineStyle: styles.dropDownMenu.underline
          });
        case 'RaisedButton':
        case 'FlatButton':
          return _react2.default.cloneElement(currentChild, {
            style: (0, _assign2.default)({}, styles.button, currentChild.props.style)
          });
        case 'FontIcon':
          return _react2.default.cloneElement(currentChild, {
            style: (0, _assign2.default)({}, styles.icon.root, currentChild.props.style),
            color: currentChild.props.color || _this2.context.muiTheme.toolbar.iconColor,
            hoverColor: currentChild.props.hoverColor || _this2.context.muiTheme.toolbar.hoverColor
          });
        case 'ToolbarSeparator':
        case 'ToolbarTitle':
          return _react2.default.cloneElement(currentChild, {
            style: (0, _assign2.default)({}, styles.span, currentChild.props.style)
          });
        default:
          return currentChild;
      }
    }, this);

    return _react2.default.createElement(
      'div',
      (0, _extends3.default)({}, other, { className: className, style: prepareStyles((0, _assign2.default)({}, styles.root, style)) }),
      newChildren
    );
  };

  return ToolbarGroup;
}(_react.Component), _class.propTypes = {
  /**
   * Can be any node or number of nodes.
   */
  children: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * Set this to true for if the `ToolbarGroup` is the first child of `Toolbar`
   * to prevent setting the left gap.
   */
  firstChild: _propTypes2.default.bool,
  /**
   * Set this to true for if the `ToolbarGroup` is the last child of `Toolbar`
   * to prevent setting the right gap.
   */
  lastChild: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
}, _class.defaultProps = {
  firstChild: false,
  lastChild: false
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp);
exports.default = ToolbarGroup;

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      toolbar = _context$muiTheme.toolbar;


  return {
    root: {
      backgroundColor: toolbar.separatorColor,
      display: 'block',
      height: baseTheme.spacing.desktopGutterMore,
      marginLeft: baseTheme.spacing.desktopGutter,
      width: 1
    }
  };
}

var ToolbarSeparator = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(ToolbarSeparator, _Component);

  function ToolbarSeparator() {
    (0, _classCallCheck3.default)(this, ToolbarSeparator);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  ToolbarSeparator.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        style = _props.style,
        other = (0, _objectWithoutProperties3.default)(_props, ['className', 'style']);
    var prepareStyles = this.context.muiTheme.prepareStyles;

    var styles = getStyles(this.props, this.context);

    return _react2.default.createElement('span', (0, _extends3.default)({}, other, { className: className, style: prepareStyles((0, _assign2.default)({}, styles.root, style)) }));
  };

  return ToolbarSeparator;
}(_react.Component), _class.muiName = 'ToolbarSeparator', _class.propTypes = {
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp);
exports.default = ToolbarSeparator;

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      toolbar = _context$muiTheme.toolbar;


  return {
    root: {
      paddingRight: baseTheme.spacing.desktopGutterLess,
      lineHeight: toolbar.height + 'px',
      fontSize: toolbar.titleFontSize,
      fontFamily: baseTheme.fontFamily,
      position: 'relative',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    }
  };
}

var ToolbarTitle = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(ToolbarTitle, _Component);

  function ToolbarTitle() {
    (0, _classCallCheck3.default)(this, ToolbarTitle);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  ToolbarTitle.prototype.render = function render() {
    var _props = this.props,
        style = _props.style,
        text = _props.text,
        other = (0, _objectWithoutProperties3.default)(_props, ['style', 'text']);
    var prepareStyles = this.context.muiTheme.prepareStyles;

    var styles = getStyles(this.props, this.context);

    return _react2.default.createElement(
      'span',
      (0, _extends3.default)({
        style: prepareStyles((0, _assign2.default)({}, styles.root, style))
      }, other),
      text
    );
  };

  return ToolbarTitle;
}(_react.Component), _class.muiName = 'ToolbarTitle', _class.propTypes = {
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * The text to be displayed.
   */
  text: _propTypes2.default.node
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp);
exports.default = ToolbarTitle;

/***/ }),
/* 181 */,
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _keyboardArrowUp = __webpack_require__(396);

var _keyboardArrowUp2 = _interopRequireDefault(_keyboardArrowUp);

var _keyboardArrowDown = __webpack_require__(395);

var _keyboardArrowDown2 = _interopRequireDefault(_keyboardArrowDown);

var _IconButton = __webpack_require__(50);

var _IconButton2 = _interopRequireDefault(_IconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles() {
  return {
    root: {
      top: 0,
      bottom: 0,
      right: 4,
      margin: 'auto',
      position: 'absolute'
    }
  };
}

var CardExpandable = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(CardExpandable, _Component);

  function CardExpandable() {
    (0, _classCallCheck3.default)(this, CardExpandable);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  CardExpandable.prototype.render = function render() {
    var styles = getStyles(this.props, this.context);

    return _react2.default.createElement(
      _IconButton2.default,
      {
        style: (0, _assign2.default)(styles.root, this.props.style),
        onTouchTap: this.props.onExpanding,
        iconStyle: this.props.iconStyle
      },
      this.props.expanded ? this.props.openIcon : this.props.closeIcon
    );
  };

  return CardExpandable;
}(_react.Component), _class.propTypes = {
  closeIcon: _propTypes2.default.node,
  expanded: _propTypes2.default.bool,
  iconStyle: _propTypes2.default.object,
  onExpanding: _propTypes2.default.func.isRequired,
  openIcon: _propTypes2.default.node,
  style: _propTypes2.default.object
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _class.defaultProps = {
  closeIcon: _react2.default.createElement(_keyboardArrowDown2.default, null),
  openIcon: _react2.default.createElement(_keyboardArrowUp2.default, null)
}, _temp);
exports.default = CardExpandable;

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _propTypes3 = __webpack_require__(20);

var _propTypes4 = _interopRequireDefault(_propTypes3);

var _transitions = __webpack_require__(11);

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var rounded = props.rounded,
      circle = props.circle,
      transitionEnabled = props.transitionEnabled,
      zDepth = props.zDepth;
  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      paper = _context$muiTheme.paper,
      paperArrow = _context$muiTheme.paperArrow,
      borderRadius = _context$muiTheme.borderRadius;


  return {
    root: {
      position: 'relative',
      color: paper.color,
      backgroundColor: paper.backgroundColor,
      transition: transitionEnabled && _transitions2.default.easeOut(),
      boxSizing: 'border-box',
      fontFamily: baseTheme.fontFamily,
      WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', // Remove mobile color flashing (deprecated)
      boxShadow: paper.zDepthShadows[zDepth - 1], // No shadow for 0 depth papers
      borderRadius: circle ? '50%' : rounded ? borderRadius : 0
    },
    arrow: {
      position: 'absolute',
      content: '""',
      right: 'calc(100% - 1px)',
      border: '14px solid transparent',
      borderRightColor: '#FFF',
      filter: 'drop-shadow(-2px 1px 3px rgba(0, 0, 0, 0.24))'
    }
  };
}

var PaperDefault = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(PaperDefault, _Component);

  function PaperDefault() {
    (0, _classCallCheck3.default)(this, PaperDefault);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  PaperDefault.prototype.render = function render() {
    var _props = this.props,
        arrow = _props.arrow,
        children = _props.children,
        circle = _props.circle,
        rounded = _props.rounded,
        style = _props.style,
        transitionEnabled = _props.transitionEnabled,
        zDepth = _props.zDepth,
        other = (0, _objectWithoutProperties3.default)(_props, ['arrow', 'children', 'circle', 'rounded', 'style', 'transitionEnabled', 'zDepth']);
    var prepareStyles = this.context.muiTheme.prepareStyles;

    var styles = getStyles(this.props, this.context);

    return _react2.default.createElement(
      'div',
      (0, _extends3.default)({}, other, {
        className: 'paper-default',
        style: prepareStyles((0, _assign2.default)(styles.root, style))
      }),
      _react2.default.createElement('div', {
        className: 'paper-arrow',
        style: prepareStyles(styles.arrow)
      }),
      children
    );
  };

  return PaperDefault;
}(_react.Component), _class.propTypes = {
  children: _propTypes2.default.node,
  circle: _propTypes2.default.bool,
  rounded: _propTypes2.default.bool,
  style: _propTypes2.default.object,
  transitionEnabled: _propTypes2.default.bool,
  zDepth: _propTypes4.default.zDepth
}, _class.defaultProps = {
  circle: false,
  rounded: true,
  transitionEnabled: true,
  zDepth: 1
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp);
exports.default = PaperDefault;

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _transitions = __webpack_require__(11);

var _transitions2 = _interopRequireDefault(_transitions);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _propTypes3 = __webpack_require__(20);

var _propTypes4 = _interopRequireDefault(_propTypes3);

var _Paper = __webpack_require__(21);

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
      transform: open ? 'scale(1, 1)' : 'scale(0, 0)',
      transformOrigin: horizontal + ' ' + targetOrigin.vertical,
      transition: _transitions2.default.easeOut('250ms', ['transform', 'opacity']),
      maxHeight: '100%'
    },
    horizontal: {
      maxHeight: '100%',
      overflowY: 'auto',
      transform: open ? 'scaleX(1)' : 'scaleX(0)',
      opacity: open ? 1 : 0,
      transformOrigin: horizontal + ' ' + targetOrigin.vertical,
      transition: _transitions2.default.easeOut('250ms', ['transform', 'opacity'])
    },
    vertical: {
      opacity: open ? 1 : 0,
      transform: open ? 'scaleY(1)' : 'scaleY(0)',
      transformOrigin: horizontal + ' ' + targetOrigin.vertical,
      transition: _transitions2.default.easeOut('500ms', ['transform', 'opacity'])
    }
  };
}

var PopoverAnimationDefault = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(PopoverAnimationDefault, _Component);

  function PopoverAnimationDefault() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, PopoverAnimationDefault);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      open: false
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  PopoverAnimationDefault.prototype.componentDidMount = function componentDidMount() {
    this.setState({ open: true }); // eslint-disable-line react/no-did-mount-set-state
  };

  PopoverAnimationDefault.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    this.setState({
      open: nextProps.open
    });
  };

  PopoverAnimationDefault.prototype.render = function render() {
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
      _react2.default.createElement(
        'div',
        { style: prepareStyles(styles.horizontal) },
        _react2.default.createElement(
          'div',
          { style: prepareStyles(styles.vertical) },
          this.props.children
        )
      )
    );
  };

  return PopoverAnimationDefault;
}(_react.Component), _class.propTypes = {
  children: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
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
exports.default = PopoverAnimationDefault;

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__(11);

var _transitions2 = _interopRequireDefault(_transitions);

var _EnhancedSwitch = __webpack_require__(113);

var _EnhancedSwitch2 = _interopRequireDefault(_EnhancedSwitch);

var _radioButtonUnchecked = __webpack_require__(408);

var _radioButtonUnchecked2 = _interopRequireDefault(_radioButtonUnchecked);

var _radioButtonChecked = __webpack_require__(407);

var _radioButtonChecked2 = _interopRequireDefault(_radioButtonChecked);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var radioButton = context.muiTheme.radioButton;


  return {
    icon: {
      height: radioButton.size,
      width: radioButton.size
    },
    target: {
      transition: _transitions2.default.easeOut(),
      position: 'absolute',
      opacity: 1,
      transform: 'scale(1)',
      fill: radioButton.borderColor
    },
    fill: {
      position: 'absolute',
      opacity: 1,
      transform: 'scale(0)',
      transformOrigin: '50% 50%',
      transition: _transitions2.default.easeOut(),
      fill: radioButton.checkedColor
    },
    targetWhenChecked: {
      opacity: 0,
      transform: 'scale(0)'
    },
    fillWhenChecked: {
      opacity: 1,
      transform: 'scale(1)'
    },
    targetWhenDisabled: {
      fill: radioButton.disabledColor
    },
    fillWhenDisabled: {
      fill: radioButton.disabledColor
    },
    label: {
      color: props.disabled ? radioButton.labelDisabledColor : radioButton.labelColor
    },
    ripple: {
      color: props.checked ? radioButton.checkedColor : radioButton.borderColor
    }
  };
}

var RadioButton = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(RadioButton, _Component);

  function RadioButton() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RadioButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleSwitch = function (event) {
      if (_this.props.onCheck) {
        _this.props.onCheck(event, _this.props.value);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  // Only called when selected, not when unselected.


  RadioButton.prototype.isChecked = function isChecked() {
    return this.refs.enhancedSwitch.isSwitched();
  };

  // Use RadioButtonGroup.setSelectedValue(newSelectionValue) to set a
  // RadioButton's checked value.


  RadioButton.prototype.setChecked = function setChecked(newCheckedValue) {
    this.refs.enhancedSwitch.setSwitched(newCheckedValue);
  };

  RadioButton.prototype.getValue = function getValue() {
    return this.refs.enhancedSwitch.getValue();
  };

  RadioButton.prototype.render = function render() {
    var _props = this.props,
        checkedIcon = _props.checkedIcon,
        checked = _props.checked,
        iconStyle = _props.iconStyle,
        labelStyle = _props.labelStyle,
        labelPosition = _props.labelPosition,
        onCheck = _props.onCheck,
        uncheckedIcon = _props.uncheckedIcon,
        disabled = _props.disabled,
        other = (0, _objectWithoutProperties3.default)(_props, ['checkedIcon', 'checked', 'iconStyle', 'labelStyle', 'labelPosition', 'onCheck', 'uncheckedIcon', 'disabled']);


    var styles = getStyles(this.props, this.context);

    var uncheckedStyles = (0, _assign2.default)(styles.target, checked && styles.targetWhenChecked, iconStyle, disabled && styles.targetWhenDisabled);

    var checkedStyles = (0, _assign2.default)(styles.fill, checked && styles.fillWhenChecked, iconStyle, disabled && styles.fillWhenDisabled);

    var uncheckedElement = _react2.default.isValidElement(uncheckedIcon) ? _react2.default.cloneElement(uncheckedIcon, {
      style: (0, _assign2.default)(uncheckedStyles, uncheckedIcon.props.style)
    }) : _react2.default.createElement(_radioButtonUnchecked2.default, { style: uncheckedStyles });

    var checkedElement = _react2.default.isValidElement(checkedIcon) ? _react2.default.cloneElement(checkedIcon, {
      style: (0, _assign2.default)(checkedStyles, checkedIcon.props.style)
    }) : _react2.default.createElement(_radioButtonChecked2.default, { style: checkedStyles });

    var mergedIconStyle = (0, _assign2.default)(styles.icon, iconStyle);
    var mergedLabelStyle = (0, _assign2.default)(styles.label, labelStyle);

    return _react2.default.createElement(_EnhancedSwitch2.default, (0, _extends3.default)({}, other, {
      ref: 'enhancedSwitch',
      inputType: 'radio',
      checked: checked,
      switched: checked,
      disabled: disabled,
      rippleColor: styles.ripple.color,
      iconStyle: mergedIconStyle,
      labelStyle: mergedLabelStyle,
      labelPosition: labelPosition,
      onSwitch: this.handleSwitch,
      switchElement: _react2.default.createElement(
        'div',
        null,
        uncheckedElement,
        checkedElement
      )
    }));
  };

  return RadioButton;
}(_react.Component), _class.propTypes = {
  /**
   * @ignore
   * checked if true
   * Used internally by `RadioButtonGroup`.
   */
  checked: _propTypes2.default.bool,
  /**
   * The icon element to show when the radio button is checked.
   */
  checkedIcon: _propTypes2.default.element,
  /**
   * If true, the radio button is disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the icon element.
   */
  iconStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of the input element.
   */
  inputStyle: _propTypes2.default.object,
  /**
   * @ignore
   * Used internally by `RadioButtonGroup`. Use the `labelPosition` property of `RadioButtonGroup` instead.
   * Where the label will be placed next to the radio button.
   */
  labelPosition: _propTypes2.default.oneOf(['left', 'right']),
  /**
   * Override the inline-styles of the label element.
   */
  labelStyle: _propTypes2.default.object,
  /**
   * @ignore
   * Callback function fired when the radio button is checked. Note that this
   * function will not be called if the radio button is part of a
   * radio button group: in this case, use the `onChange` property of
   * `RadioButtonGroup`.
   *
   * @param {object} event `change` event targeting the element.
   * @param {string} value The element's `value`.
   */
  onCheck: _propTypes2.default.func,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * The icon element to show when the radio button is unchecked.
   */
  uncheckedIcon: _propTypes2.default.element,
  /**
   * The value of the radio button.
   */
  value: _propTypes2.default.any
}, _class.defaultProps = {
  checked: false,
  disabled: false,
  labelPosition: 'right'
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = RadioButton;

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _timeUtils = __webpack_require__(65);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var styles = {
    root: {
      directionInvariant: true,
      display: 'inline-block',
      position: 'absolute',
      width: 32,
      height: 32,
      borderRadius: '100%',
      left: 'calc(50% - 16px)',
      top: 10,
      textAlign: 'center',
      paddingTop: 5,
      userSelect: 'none', /* Chrome all / Safari all */
      fontSize: '1.1em',
      pointerEvents: 'none',
      boxSizing: 'border-box'
    }
  };

  var muiTheme = context.muiTheme;


  var pos = props.value;

  if (props.type === 'hour') {
    pos %= 12;
  } else {
    pos = pos / 5;
  }

  var positions = [[0, 5], [54.5, 16.6], [94.4, 59.5], [109, 114], [94.4, 168.5], [54.5, 208.4], [0, 223], [-54.5, 208.4], [-94.4, 168.5], [-109, 114], [-94.4, 59.5], [-54.5, 19.6]];

  var innerPositions = [[0, 40], [36.9, 49.9], [64, 77], [74, 114], [64, 151], [37, 178], [0, 188], [-37, 178], [-64, 151], [-74, 114], [-64, 77], [-37, 50]];

  if (props.isSelected) {
    styles.root.backgroundColor = muiTheme.timePicker.accentColor;
    styles.root.color = muiTheme.timePicker.selectTextColor;
  }

  var transformPos = positions[pos];

  if ((0, _timeUtils.isInner)(props)) {
    styles.root.width = 28;
    styles.root.height = 28;
    styles.root.left = 'calc(50% - 14px)';
    transformPos = innerPositions[pos];
  }

  var _transformPos = transformPos,
      x = _transformPos[0],
      y = _transformPos[1];


  styles.root.transform = 'translate(' + x + 'px, ' + y + 'px)';

  return styles;
}

var ClockNumber = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(ClockNumber, _Component);

  function ClockNumber() {
    (0, _classCallCheck3.default)(this, ClockNumber);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  ClockNumber.prototype.render = function render() {
    var prepareStyles = this.context.muiTheme.prepareStyles;

    var styles = getStyles(this.props, this.context);
    var clockNumber = this.props.value === 0 ? '00' : this.props.value;

    return _react2.default.createElement(
      'span',
      { style: prepareStyles(styles.root) },
      clockNumber
    );
  };

  return ClockNumber;
}(_react.Component), _class.propTypes = {
  isSelected: _propTypes2.default.bool,
  onSelected: _propTypes2.default.func,
  type: _propTypes2.default.oneOf(['hour', 'minute']),
  value: _propTypes2.default.number
}, _class.defaultProps = {
  value: 0,
  type: 'minute',
  isSelected: false
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp);
exports.default = ClockNumber;

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _timeUtils = __webpack_require__(65);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function calcAngle(value, base) {
  value %= base;
  var angle = 360 / base * value;
  return angle;
}

function getStyles(props, context, state) {
  var hasSelected = props.hasSelected,
      type = props.type,
      value = props.value;
  var inner = state.inner;
  var timePicker = context.muiTheme.timePicker;

  var angle = type === 'hour' ? calcAngle(value, 12) : calcAngle(value, 60);

  var styles = {
    root: {
      height: inner ? '30%' : '40%',
      background: timePicker.accentColor,
      width: 2,
      left: 'calc(50% - 1px)',
      position: 'absolute',
      bottom: '50%',
      transformOrigin: 'bottom',
      pointerEvents: 'none',
      transform: 'rotateZ(' + angle + 'deg)'
    },
    mark: {
      boxSizing: 'content-box',
      background: timePicker.selectTextColor,
      border: '4px solid ' + timePicker.accentColor,
      display: hasSelected && 'none',
      width: 7,
      height: 7,
      position: 'absolute',
      top: -5,
      left: -6,
      borderRadius: '100%'
    }
  };

  return styles;
}

var ClockPointer = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(ClockPointer, _Component);

  function ClockPointer() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ClockPointer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      inner: false
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  ClockPointer.prototype.componentWillMount = function componentWillMount() {
    this.setState({
      inner: (0, _timeUtils.isInner)(this.props)
    });
  };

  ClockPointer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    this.setState({
      inner: (0, _timeUtils.isInner)(nextProps)
    });
  };

  ClockPointer.prototype.render = function render() {
    if (this.props.value === null) {
      return _react2.default.createElement('span', null);
    }

    var styles = getStyles(this.props, this.context, this.state);
    var prepareStyles = this.context.muiTheme.prepareStyles;


    return _react2.default.createElement(
      'div',
      { style: prepareStyles(styles.root) },
      _react2.default.createElement('div', { style: prepareStyles(styles.mark) })
    );
  };

  return ClockPointer;
}(_react.Component), _class.propTypes = {
  hasSelected: _propTypes2.default.bool,
  type: _propTypes2.default.oneOf(['hour', 'minute']),
  value: _propTypes2.default.number
}, _class.defaultProps = {
  hasSelected: false,
  value: null,
  type: 'minute'
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = ClockPointer;

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__(11);

var _transitions2 = _interopRequireDefault(_transitions);

var _AutoLockScrolling = __webpack_require__(380);

var _AutoLockScrolling2 = _interopRequireDefault(_AutoLockScrolling);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var overlay = context.muiTheme.overlay;


  var style = {
    root: {
      position: 'fixed',
      height: '100%',
      width: '100%',
      top: 0,
      left: '-100%',
      opacity: 0,
      backgroundColor: overlay.backgroundColor,
      WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', // Remove mobile color flashing (deprecated)

      // Two ways to promote overlay to its own render layer
      willChange: 'opacity',
      transform: 'translateZ(0)',

      transition: props.transitionEnabled && _transitions2.default.easeOut('0ms', 'left', '400ms') + ', ' + _transitions2.default.easeOut('400ms', 'opacity')
    }
  };

  if (props.show) {
    (0, _assign2.default)(style.root, {
      left: 0,
      opacity: 1,
      transition: _transitions2.default.easeOut('0ms', 'left') + ', ' + _transitions2.default.easeOut('400ms', 'opacity')
    });
  }

  return style;
}

var Overlay = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(Overlay, _Component);

  function Overlay() {
    (0, _classCallCheck3.default)(this, Overlay);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  Overlay.prototype.setOpacity = function setOpacity(opacity) {
    this.refs.overlay.style.opacity = opacity;
  };

  Overlay.prototype.render = function render() {
    var _props = this.props,
        autoLockScrolling = _props.autoLockScrolling,
        show = _props.show,
        style = _props.style,
        transitionEnabled = _props.transitionEnabled,
        other = (0, _objectWithoutProperties3.default)(_props, ['autoLockScrolling', 'show', 'style', 'transitionEnabled']);
    var prepareStyles = this.context.muiTheme.prepareStyles;

    var styles = getStyles(this.props, this.context);

    return _react2.default.createElement(
      'div',
      (0, _extends3.default)({}, other, { ref: 'overlay', style: prepareStyles((0, _assign2.default)(styles.root, style)) }),
      autoLockScrolling && _react2.default.createElement(_AutoLockScrolling2.default, { lock: show })
    );
  };

  return Overlay;
}(_react.Component), _class.propTypes = {
  autoLockScrolling: _propTypes2.default.bool,
  show: _propTypes2.default.bool.isRequired,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  transitionEnabled: _propTypes2.default.bool
}, _class.defaultProps = {
  autoLockScrolling: true,
  style: {},
  transitionEnabled: true
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp);
exports.default = Overlay;

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__(11);

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context, state) {
  var verticalPosition = props.verticalPosition;
  var horizontalPosition = props.horizontalPosition;
  var touchMarginOffset = props.touch ? 10 : 0;
  var touchOffsetTop = props.touch ? -20 : -10;
  var offset = verticalPosition === 'bottom' ? 14 + touchMarginOffset : -14 - touchMarginOffset;

  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      zIndex = _context$muiTheme.zIndex,
      tooltip = _context$muiTheme.tooltip,
      borderRadius = _context$muiTheme.borderRadius;


  var styles = {
    root: {
      position: 'absolute',
      fontFamily: baseTheme.fontFamily,
      fontSize: '10px',
      lineHeight: '22px',
      padding: '0 8px',
      zIndex: zIndex.tooltip,
      color: tooltip.color,
      overflow: 'hidden',
      top: -10000,
      borderRadius: borderRadius,
      userSelect: 'none',
      opacity: 0,
      right: horizontalPosition === 'left' ? 12 : null,
      left: horizontalPosition === 'center' ? (state.offsetWidth - 48) / 2 * -1 : horizontalPosition === 'right' ? 12 : null,
      transition: _transitions2.default.easeOut('0ms', 'top', '450ms') + ', ' + _transitions2.default.easeOut('450ms', 'transform', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'opacity', '0ms')
    },
    label: {
      position: 'relative',
      whiteSpace: 'nowrap'
    },
    ripple: {
      position: 'absolute',
      left: horizontalPosition === 'center' ? '50%' : horizontalPosition === 'left' ? '100%' : '0%',
      top: verticalPosition === 'bottom' ? 0 : '100%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '50%',
      backgroundColor: 'transparent',
      transition: _transitions2.default.easeOut('0ms', 'width', '450ms') + ', ' + _transitions2.default.easeOut('0ms', 'height', '450ms') + ', ' + _transitions2.default.easeOut('450ms', 'backgroundColor', '0ms')
    },
    rootWhenShown: {
      top: verticalPosition === 'top' ? touchOffsetTop : 36,
      opacity: 0.9,
      transform: 'translate(0px, ' + offset + 'px)',
      transition: _transitions2.default.easeOut('0ms', 'top', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'transform', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'opacity', '0ms')
    },
    rootWhenTouched: {
      fontSize: '14px',
      lineHeight: '32px',
      padding: '0 16px'
    },
    rippleWhenShown: {
      backgroundColor: tooltip.rippleBackgroundColor,
      transition: _transitions2.default.easeOut('450ms', 'width', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'height', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'backgroundColor', '0ms')
    }
  };

  return styles;
}

var Tooltip = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(Tooltip, _Component);

  function Tooltip() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Tooltip);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      offsetWidth: null
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  Tooltip.prototype.componentDidMount = function componentDidMount() {
    this.setRippleSize();
    this.setTooltipPosition();
  };

  Tooltip.prototype.componentWillReceiveProps = function componentWillReceiveProps() {
    this.setTooltipPosition();
  };

  Tooltip.prototype.componentDidUpdate = function componentDidUpdate() {
    this.setRippleSize();
  };

  Tooltip.prototype.setRippleSize = function setRippleSize() {
    var ripple = this.refs.ripple;
    var tooltip = this.refs.tooltip;
    var tooltipWidth = parseInt(tooltip.offsetWidth, 10) / (this.props.horizontalPosition === 'center' ? 2 : 1);
    var tooltipHeight = parseInt(tooltip.offsetHeight, 10);

    var rippleDiameter = Math.ceil(Math.sqrt(Math.pow(tooltipHeight, 2) + Math.pow(tooltipWidth, 2)) * 2);
    if (this.props.show) {
      ripple.style.height = rippleDiameter + 'px';
      ripple.style.width = rippleDiameter + 'px';
    } else {
      ripple.style.width = '0px';
      ripple.style.height = '0px';
    }
  };

  Tooltip.prototype.setTooltipPosition = function setTooltipPosition() {
    this.setState({ offsetWidth: this.refs.tooltip.offsetWidth });
  };

  Tooltip.prototype.render = function render() {
    var _props = this.props,
        horizontalPosition = _props.horizontalPosition,
        label = _props.label,
        show = _props.show,
        touch = _props.touch,
        verticalPosition = _props.verticalPosition,
        other = (0, _objectWithoutProperties3.default)(_props, ['horizontalPosition', 'label', 'show', 'touch', 'verticalPosition']);
    var prepareStyles = this.context.muiTheme.prepareStyles;

    var styles = getStyles(this.props, this.context, this.state);

    return _react2.default.createElement(
      'div',
      (0, _extends3.default)({}, other, {
        ref: 'tooltip',
        style: prepareStyles((0, _assign2.default)(styles.root, this.props.show && styles.rootWhenShown, this.props.touch && styles.rootWhenTouched, this.props.style))
      }),
      _react2.default.createElement('div', {
        ref: 'ripple',
        style: prepareStyles((0, _assign2.default)(styles.ripple, this.props.show && styles.rippleWhenShown))
      }),
      _react2.default.createElement(
        'span',
        { style: prepareStyles(styles.label) },
        label
      )
    );
  };

  return Tooltip;
}(_react.Component), _class.propTypes = {
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  horizontalPosition: _propTypes2.default.oneOf(['left', 'right', 'center']),
  label: _propTypes2.default.node.isRequired,
  show: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  touch: _propTypes2.default.bool,
  verticalPosition: _propTypes2.default.oneOf(['top', 'bottom'])
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = Tooltip;

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(14);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _TransitionGroup = __webpack_require__(46);

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

var _dom = __webpack_require__(192);

var _dom2 = _interopRequireDefault(_dom);

var _CircleRipple = __webpack_require__(382);

var _CircleRipple2 = _interopRequireDefault(_CircleRipple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Remove the first element of the array
var shift = function shift(_ref) {
  var newArray = _ref.slice(1);

  return newArray;
};

var TouchRipple = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(TouchRipple, _Component);

  function TouchRipple(props, context) {
    (0, _classCallCheck3.default)(this, TouchRipple);

    // Touch start produces a mouse down event for compat reasons. To avoid
    // showing ripples twice we skip showing a ripple for the first mouse down
    // after a touch start. Note we don't store ignoreNextMouseDown in this.state
    // to avoid re-rendering when we change it.
    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props, context));

    _this.handleMouseDown = function (event) {
      // only listen to left clicks
      if (event.button === 0) {
        _this.start(event, false);
      }
    };

    _this.handleMouseUp = function () {
      _this.end();
    };

    _this.handleMouseLeave = function () {
      _this.end();
    };

    _this.handleTouchStart = function (event) {
      event.stopPropagation();
      // If the user is swiping (not just tapping), save the position so we can
      // abort ripples if the user appears to be scrolling.
      if (_this.props.abortOnScroll && event.touches) {
        _this.startListeningForScrollAbort(event);
        _this.startTime = Date.now();
      }
      _this.start(event, true);
    };

    _this.handleTouchEnd = function () {
      _this.end();
    };

    _this.handleTouchMove = function (event) {
      // Stop trying to abort if we're already 300ms into the animation
      var timeSinceStart = Math.abs(Date.now() - _this.startTime);
      if (timeSinceStart > 300) {
        _this.stopListeningForScrollAbort();
        return;
      }

      // If the user is scrolling...
      var deltaY = Math.abs(event.touches[0].clientY - _this.firstTouchY);
      var deltaX = Math.abs(event.touches[0].clientX - _this.firstTouchX);
      // Call it a scroll after an arbitrary 6px (feels reasonable in testing)
      if (deltaY > 6 || deltaX > 6) {
        var currentRipples = _this.state.ripples;
        var ripple = currentRipples[0];
        // This clone will replace the ripple in ReactTransitionGroup with a
        // version that will disappear immediately when removed from the DOM
        var abortedRipple = _react2.default.cloneElement(ripple, { aborted: true });
        // Remove the old ripple and replace it with the new updated one
        currentRipples = shift(currentRipples);
        currentRipples = [].concat(currentRipples, [abortedRipple]);
        _this.setState({ ripples: currentRipples }, function () {
          // Call end after we've set the ripple to abort otherwise the setState
          // in end() merges with this and the ripple abort fails
          _this.end();
        });
      }
    };

    _this.ignoreNextMouseDown = false;

    _this.state = {
      // This prop allows us to only render the ReactTransitionGroup
      // on the first click of the component, making the inital render faster.
      hasRipples: false,
      nextKey: 0,
      ripples: []
    };
    return _this;
  }

  TouchRipple.prototype.start = function start(event, isRippleTouchGenerated) {
    var theme = this.context.muiTheme.ripple;

    if (this.ignoreNextMouseDown && !isRippleTouchGenerated) {
      this.ignoreNextMouseDown = false;
      return;
    }

    var ripples = this.state.ripples;

    // Add a ripple to the ripples array
    ripples = [].concat(ripples, [_react2.default.createElement(_CircleRipple2.default, {
      key: this.state.nextKey,
      style: !this.props.centerRipple ? this.getRippleStyle(event) : {},
      color: this.props.color || theme.color,
      opacity: this.props.opacity,
      touchGenerated: isRippleTouchGenerated
    })]);

    this.ignoreNextMouseDown = isRippleTouchGenerated;
    this.setState({
      hasRipples: true,
      nextKey: this.state.nextKey + 1,
      ripples: ripples
    });
  };

  TouchRipple.prototype.end = function end() {
    var currentRipples = this.state.ripples;
    this.setState({
      ripples: shift(currentRipples)
    });
    if (this.props.abortOnScroll) {
      this.stopListeningForScrollAbort();
    }
  };

  // Check if the user seems to be scrolling and abort the animation if so


  TouchRipple.prototype.startListeningForScrollAbort = function startListeningForScrollAbort(event) {
    this.firstTouchY = event.touches[0].clientY;
    this.firstTouchX = event.touches[0].clientX;
    // Note that when scolling Chrome throttles this event to every 200ms
    // Also note we don't listen for scroll events directly as there's no general
    // way to cover cases like scrolling within containers on the page
    document.body.addEventListener('touchmove', this.handleTouchMove);
  };

  TouchRipple.prototype.stopListeningForScrollAbort = function stopListeningForScrollAbort() {
    document.body.removeEventListener('touchmove', this.handleTouchMove);
  };

  TouchRipple.prototype.getRippleStyle = function getRippleStyle(event) {
    var el = _reactDom2.default.findDOMNode(this);
    var elHeight = el.offsetHeight;
    var elWidth = el.offsetWidth;
    var offset = _dom2.default.offset(el);
    var isTouchEvent = event.touches && event.touches.length;
    var pageX = isTouchEvent ? event.touches[0].pageX : event.pageX;
    var pageY = isTouchEvent ? event.touches[0].pageY : event.pageY;
    var pointerX = pageX - offset.left;
    var pointerY = pageY - offset.top;
    var topLeftDiag = this.calcDiag(pointerX, pointerY);
    var topRightDiag = this.calcDiag(elWidth - pointerX, pointerY);
    var botRightDiag = this.calcDiag(elWidth - pointerX, elHeight - pointerY);
    var botLeftDiag = this.calcDiag(pointerX, elHeight - pointerY);
    var rippleRadius = Math.max(topLeftDiag, topRightDiag, botRightDiag, botLeftDiag);
    var rippleSize = rippleRadius * 2;
    var left = pointerX - rippleRadius;
    var top = pointerY - rippleRadius;

    return {
      directionInvariant: true,
      height: rippleSize,
      width: rippleSize,
      top: top,
      left: left
    };
  };

  TouchRipple.prototype.calcDiag = function calcDiag(a, b) {
    return Math.sqrt(a * a + b * b);
  };

  TouchRipple.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        style = _props.style;
    var _state = this.state,
        hasRipples = _state.hasRipples,
        ripples = _state.ripples;
    var prepareStyles = this.context.muiTheme.prepareStyles;


    var rippleGroup = void 0;

    if (hasRipples) {
      var mergedStyles = (0, _assign2.default)({
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        overflow: 'hidden',
        pointerEvents: 'none'
      }, style);

      rippleGroup = _react2.default.createElement(
        _TransitionGroup2.default,
        { style: prepareStyles(mergedStyles) },
        ripples
      );
    }

    return _react2.default.createElement(
      'div',
      {
        onMouseUp: this.handleMouseUp,
        onMouseDown: this.handleMouseDown,
        onMouseLeave: this.handleMouseLeave,
        onTouchStart: this.handleTouchStart,
        onTouchEnd: this.handleTouchEnd
      },
      rippleGroup,
      children
    );
  };

  return TouchRipple;
}(_react.Component), _class.propTypes = {
  abortOnScroll: _propTypes2.default.bool,
  centerRipple: _propTypes2.default.bool,
  children: _propTypes2.default.node,
  color: _propTypes2.default.string,
  opacity: _propTypes2.default.number,
  style: _propTypes2.default.object
}, _class.defaultProps = {
  abortOnScroll: true
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp);
exports.default = TouchRipple;

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extendChildren = extendChildren;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function extendChildren(children, extendedProps, extendedChildren) {
  return _react2.default.Children.map(children, function (child) {
    if (!_react2.default.isValidElement(child)) {
      return child;
    }

    var newProps = typeof extendedProps === 'function' ? extendedProps(child) : extendedProps;

    var newChildren = typeof extendedChildren === 'function' ? extendedChildren(child) : extendedChildren ? extendedChildren : child.props.children;

    return _react2.default.cloneElement(child, newProps, newChildren);
  });
}

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  isDescendant: function isDescendant(parent, child) {
    var node = child.parentNode;

    while (node !== null) {
      if (node === parent) return true;
      node = node.parentNode;
    }

    return false;
  },
  offset: function offset(el) {
    var rect = el.getBoundingClientRect();
    return {
      top: rect.top + document.body.scrollTop,
      left: rect.left + document.body.scrollLeft
    };
  }
};

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
* Returns a number of pixels from the top of the screen for given dom element.
*
* @param {object} dom element
* @returns {number} A position from the top of the screen in pixels
*/
var getOffsetTop = exports.getOffsetTop = function getOffsetTop(elem) {
  var yPos = elem.offsetTop;
  var tempEl = elem.offsetParent;

  while (tempEl != null) {
    yPos += tempEl.offsetTop;
    tempEl = tempEl.offsetParent;
  }

  return yPos;
};

var isIOS = exports.isIOS = function isIOS() {
  return (/iPad|iPhone|iPod/.test(window.navigator.userAgent) && !window.MSStream
  );
};

/***/ }),
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setStatic = __webpack_require__(705);

var _setStatic2 = _interopRequireDefault(_setStatic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setDisplayName = function setDisplayName(displayName) {
  return (0, _setStatic2.default)('displayName', displayName);
};

exports.default = setDisplayName;

/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _getDisplayName = __webpack_require__(702);

var _getDisplayName2 = _interopRequireDefault(_getDisplayName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wrapDisplayName = function wrapDisplayName(BaseComponent, hocName) {
  return hocName + '(' + (0, _getDisplayName2.default)(BaseComponent) + ')';
};

exports.default = wrapDisplayName;

/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _AppBar = __webpack_require__(318);

var _AppBar2 = _interopRequireDefault(_AppBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _AppBar2.default;

/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _AutoComplete = __webpack_require__(319);

var _AutoComplete2 = _interopRequireDefault(_AutoComplete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _AutoComplete2.default;

/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Badge = __webpack_require__(321);

var _Badge2 = _interopRequireDefault(_Badge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Badge2.default;

/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.BottomNavigationItem = exports.BottomNavigation = undefined;

var _BottomNavigation2 = __webpack_require__(322);

var _BottomNavigation3 = _interopRequireDefault(_BottomNavigation2);

var _BottomNavigationItem2 = __webpack_require__(159);

var _BottomNavigationItem3 = _interopRequireDefault(_BottomNavigationItem2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.BottomNavigation = _BottomNavigation3.default;
exports.BottomNavigationItem = _BottomNavigationItem3.default;
exports.default = _BottomNavigation3.default;

/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CardExpandable = exports.CardActions = exports.CardText = exports.CardMedia = exports.CardTitle = exports.CardHeader = exports.Card = undefined;

var _Card2 = __webpack_require__(323);

var _Card3 = _interopRequireDefault(_Card2);

var _CardHeader2 = __webpack_require__(161);

var _CardHeader3 = _interopRequireDefault(_CardHeader2);

var _CardTitle2 = __webpack_require__(164);

var _CardTitle3 = _interopRequireDefault(_CardTitle2);

var _CardMedia2 = __webpack_require__(162);

var _CardMedia3 = _interopRequireDefault(_CardMedia2);

var _CardText2 = __webpack_require__(163);

var _CardText3 = _interopRequireDefault(_CardText2);

var _CardActions2 = __webpack_require__(160);

var _CardActions3 = _interopRequireDefault(_CardActions2);

var _CardExpandable2 = __webpack_require__(182);

var _CardExpandable3 = _interopRequireDefault(_CardExpandable2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Card = _Card3.default;
exports.CardHeader = _CardHeader3.default;
exports.CardTitle = _CardTitle3.default;
exports.CardMedia = _CardMedia3.default;
exports.CardText = _CardText3.default;
exports.CardActions = _CardActions3.default;
exports.CardExpandable = _CardExpandable3.default;
exports.default = _Card3.default;

/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Chip = __webpack_require__(325);

var _Chip2 = _interopRequireDefault(_Chip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Chip2.default;

/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _CircularProgress = __webpack_require__(326);

var _CircularProgress2 = _interopRequireDefault(_CircularProgress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _CircularProgress2.default;

/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _DatePicker = __webpack_require__(333);

var _DatePicker2 = _interopRequireDefault(_DatePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _DatePicker2.default;

/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Drawer = __webpack_require__(339);

var _Drawer2 = _interopRequireDefault(_Drawer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Drawer2.default;

/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _FloatingActionButton = __webpack_require__(343);

var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _FloatingActionButton2.default;

/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.GridTile = exports.GridList = undefined;

var _GridList2 = __webpack_require__(345);

var _GridList3 = _interopRequireDefault(_GridList2);

var _GridTile2 = __webpack_require__(167);

var _GridTile3 = _interopRequireDefault(_GridTile2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.GridList = _GridList3.default;
exports.GridTile = _GridTile3.default;
exports.default = _GridList3.default;

/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MenuItem = exports.IconMenu = undefined;

var _IconMenu2 = __webpack_require__(347);

var _IconMenu3 = _interopRequireDefault(_IconMenu2);

var _MenuItem2 = __webpack_require__(110);

var _MenuItem3 = _interopRequireDefault(_MenuItem2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.IconMenu = _IconMenu3.default;
exports.MenuItem = _MenuItem3.default;
exports.default = _IconMenu3.default;

/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _LinearProgress = __webpack_require__(348);

var _LinearProgress2 = _interopRequireDefault(_LinearProgress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _LinearProgress2.default;

/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.makeSelectable = exports.ListItem = exports.List = undefined;

var _List2 = __webpack_require__(109);

var _List3 = _interopRequireDefault(_List2);

var _ListItem2 = __webpack_require__(105);

var _ListItem3 = _interopRequireDefault(_ListItem2);

var _makeSelectable2 = __webpack_require__(168);

var _makeSelectable3 = _interopRequireDefault(_makeSelectable2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.List = _List3.default;
exports.ListItem = _ListItem3.default;
exports.makeSelectable = _makeSelectable3.default;
exports.default = _List3.default;

/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PopoverAnimationVertical = exports.PopoverWithArrow = exports.Popover = undefined;

var _Popover2 = __webpack_require__(51);

var _Popover3 = _interopRequireDefault(_Popover2);

var _PopoverWithArrow2 = __webpack_require__(352);

var _PopoverWithArrow3 = _interopRequireDefault(_PopoverWithArrow2);

var _PopoverAnimationVertical2 = __webpack_require__(111);

var _PopoverAnimationVertical3 = _interopRequireDefault(_PopoverAnimationVertical2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Popover = _Popover3.default;
exports.PopoverWithArrow = _PopoverWithArrow3.default;
exports.PopoverAnimationVertical = _PopoverAnimationVertical3.default;
exports.default = _PopoverWithArrow3.default;

/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.RadioButtonGroup = exports.RadioButton = undefined;

var _RadioButton2 = __webpack_require__(185);

var _RadioButton3 = _interopRequireDefault(_RadioButton2);

var _RadioButtonGroup2 = __webpack_require__(170);

var _RadioButtonGroup3 = _interopRequireDefault(_RadioButtonGroup2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.RadioButton = _RadioButton3.default;
exports.RadioButtonGroup = _RadioButtonGroup3.default;
exports.default = _RadioButton3.default;

/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _RaisedButton = __webpack_require__(353);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _RaisedButton2.default;

/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _RefreshIndicator = __webpack_require__(354);

var _RefreshIndicator2 = _interopRequireDefault(_RefreshIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _RefreshIndicator2.default;

/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _SelectField = __webpack_require__(355);

var _SelectField2 = _interopRequireDefault(_SelectField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SelectField2.default;

/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Slider = __webpack_require__(356);

var _Slider2 = _interopRequireDefault(_Slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Slider2.default;

/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Snackbar = __webpack_require__(357);

var _Snackbar2 = _interopRequireDefault(_Snackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Snackbar2.default;

/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getStyles = function getStyles(_ref, _ref2) {
  var index = _ref.index;
  var stepper = _ref2.stepper;
  var orientation = stepper.orientation;

  var styles = {
    root: {
      flex: '0 0 auto'
    }
  };

  if (index > 0) {
    if (orientation === 'horizontal') {
      styles.root.marginLeft = -6;
    } else if (orientation === 'vertical') {
      styles.root.marginTop = -14;
    }
  }

  return styles;
};

var Step = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(Step, _Component);

  function Step() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Step);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.renderChild = function (child) {
      var _this$props = _this.props,
          active = _this$props.active,
          completed = _this$props.completed,
          disabled = _this$props.disabled,
          index = _this$props.index,
          last = _this$props.last;


      var icon = index + 1;

      return _react2.default.cloneElement(child, (0, _assign2.default)({ active: active, completed: completed, disabled: disabled, icon: icon, last: last }, child.props));
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  Step.prototype.render = function render() {
    var _props = this.props,
        active = _props.active,
        completed = _props.completed,
        disabled = _props.disabled,
        index = _props.index,
        last = _props.last,
        children = _props.children,
        style = _props.style,
        other = (0, _objectWithoutProperties3.default)(_props, ['active', 'completed', 'disabled', 'index', 'last', 'children', 'style']);
    var prepareStyles = this.context.muiTheme.prepareStyles;

    var styles = getStyles(this.props, this.context);

    return _react2.default.createElement(
      'div',
      (0, _extends3.default)({ style: prepareStyles((0, _assign2.default)(styles.root, style)) }, other),
      _react2.default.Children.map(children, this.renderChild)
    );
  };

  return Step;
}(_react.Component), _class.propTypes = {
  /**
   * Sets the step as active. Is passed to child components.
   */
  active: _propTypes2.default.bool,
  /**
   * Should be `Step` sub-components such as `StepLabel`.
   */
  children: _propTypes2.default.node,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: _propTypes2.default.bool,
  /**
   * Mark the step as disabled, will also disable the button if
   * `StepButton` is a child of `Step`. Is passed to child components.
   */
  disabled: _propTypes2.default.bool,
  /**
   * @ignore
   * Used internally for numbering.
   */
  index: _propTypes2.default.number,
  /**
   * @ignore
   */
  last: _propTypes2.default.bool,
  /**
   * Override the inline-style of the root element.
   */
  style: _propTypes2.default.object
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired,
  stepper: _propTypes2.default.object
}, _temp2);
exports.default = Step;

/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__(11);

var _transitions2 = _interopRequireDefault(_transitions);

var _EnhancedButton = __webpack_require__(27);

var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);

var _StepLabel = __webpack_require__(171);

var _StepLabel2 = _interopRequireDefault(_StepLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isLabel = function isLabel(child) {
  return child && child.type && child.type.muiName === 'StepLabel';
};

var getStyles = function getStyles(props, context, state) {
  var hovered = state.hovered;
  var _context$muiTheme$ste = context.muiTheme.stepper,
      backgroundColor = _context$muiTheme$ste.backgroundColor,
      hoverBackgroundColor = _context$muiTheme$ste.hoverBackgroundColor;


  var styles = {
    root: {
      padding: 0,
      backgroundColor: hovered ? hoverBackgroundColor : backgroundColor,
      transition: _transitions2.default.easeOut()
    }
  };

  if (context.stepper.orientation === 'vertical') {
    styles.root.width = '100%';
  }

  return styles;
};

var StepButton = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(StepButton, _Component);

  function StepButton() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, StepButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      hovered: false,
      touched: false
    }, _this.handleMouseEnter = function (event) {
      var onMouseEnter = _this.props.onMouseEnter;
      // Cancel hover styles for touch devices

      if (!_this.state.touched) {
        _this.setState({ hovered: true });
      }
      if (typeof onMouseEnter === 'function') {
        onMouseEnter(event);
      }
    }, _this.handleMouseLeave = function (event) {
      var onMouseLeave = _this.props.onMouseLeave;

      _this.setState({ hovered: false });
      if (typeof onMouseLeave === 'function') {
        onMouseLeave(event);
      }
    }, _this.handleTouchStart = function (event) {
      var onTouchStart = _this.props.onTouchStart;

      if (!_this.state.touched) {
        _this.setState({ touched: true });
      }
      if (typeof onTouchStart === 'function') {
        onTouchStart(event);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  StepButton.prototype.render = function render() {
    var _props = this.props,
        active = _props.active,
        children = _props.children,
        completed = _props.completed,
        disabled = _props.disabled,
        icon = _props.icon,
        iconContainerStyle = _props.iconContainerStyle,
        last = _props.last,
        onMouseEnter = _props.onMouseEnter,
        onMouseLeave = _props.onMouseLeave,
        onTouchStart = _props.onTouchStart,
        style = _props.style,
        other = (0, _objectWithoutProperties3.default)(_props, ['active', 'children', 'completed', 'disabled', 'icon', 'iconContainerStyle', 'last', 'onMouseEnter', 'onMouseLeave', 'onTouchStart', 'style']);


    var styles = getStyles(this.props, this.context, this.state);

    var child = isLabel(children) ? children : _react2.default.createElement(
      _StepLabel2.default,
      null,
      children
    );

    return _react2.default.createElement(
      _EnhancedButton2.default,
      (0, _extends3.default)({
        disabled: disabled,
        style: (0, _assign2.default)(styles.root, style),
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        onTouchStart: this.handleTouchStart
      }, other),
      _react2.default.cloneElement(child, { active: active, completed: completed, disabled: disabled, icon: icon, iconContainerStyle: iconContainerStyle })
    );
  };

  return StepButton;
}(_react.Component), _class.propTypes = {
  /**
   * Passed from `Step` Is passed to StepLabel.
   */
  active: _propTypes2.default.bool,
  /**
   * Can be a `StepLabel` or a node to place inside `StepLabel` as children.
   */
  children: _propTypes2.default.node,
  /**
   * Sets completed styling. Is passed to StepLabel.
   */
  completed: _propTypes2.default.bool,
  /**
   * Disables the button and sets disabled styling. Is passed to StepLabel.
   */
  disabled: _propTypes2.default.bool,
  /**
   * The icon displayed by the step label.
   */
  icon: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.string, _propTypes2.default.number]),
  /**
   * Override the inline-styles of the icon container element.
   */
  iconContainerStyle: _propTypes2.default.object,
  /** @ignore */
  last: _propTypes2.default.bool,
  /** @ignore */
  onMouseEnter: _propTypes2.default.func,
  /** @ignore */
  onMouseLeave: _propTypes2.default.func,
  /** @ignore */
  onTouchStart: _propTypes2.default.func,
  /**
   * Override the inline-style of the root element.
   */
  style: _propTypes2.default.object
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired,
  stepper: _propTypes2.default.object
}, _temp2);
exports.default = StepButton;

/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ExpandTransition = __webpack_require__(384);

var _ExpandTransition2 = _interopRequireDefault(_ExpandTransition);

var _warning = __webpack_require__(17);

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

/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _StepConnector = __webpack_require__(359);

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

/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TableRowColumn = exports.TableRow = exports.TableHeaderColumn = exports.TableHeader = exports.TableFooter = exports.TableBody = exports.Table = undefined;

var _Table2 = __webpack_require__(362);

var _Table3 = _interopRequireDefault(_Table2);

var _TableBody2 = __webpack_require__(173);

var _TableBody3 = _interopRequireDefault(_TableBody2);

var _TableFooter2 = __webpack_require__(174);

var _TableFooter3 = _interopRequireDefault(_TableFooter2);

var _TableHeader2 = __webpack_require__(175);

var _TableHeader3 = _interopRequireDefault(_TableHeader2);

var _TableHeaderColumn2 = __webpack_require__(107);

var _TableHeaderColumn3 = _interopRequireDefault(_TableHeaderColumn2);

var _TableRow2 = __webpack_require__(176);

var _TableRow3 = _interopRequireDefault(_TableRow2);

var _TableRowColumn2 = __webpack_require__(80);

var _TableRowColumn3 = _interopRequireDefault(_TableRowColumn2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Table = _Table3.default;
exports.TableBody = _TableBody3.default;
exports.TableFooter = _TableFooter3.default;
exports.TableHeader = _TableHeader3.default;
exports.TableHeaderColumn = _TableHeaderColumn3.default;
exports.TableRow = _TableRow3.default;
exports.TableRowColumn = _TableRowColumn3.default;
exports.default = _Table3.default;

/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Tabs = exports.Tab = undefined;

var _Tab2 = __webpack_require__(177);

var _Tab3 = _interopRequireDefault(_Tab2);

var _Tabs2 = __webpack_require__(365);

var _Tabs3 = _interopRequireDefault(_Tabs2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Tab = _Tab3.default;
exports.Tabs = _Tabs3.default;
exports.default = _Tabs3.default;

/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _TimePicker = __webpack_require__(375);

var _TimePicker2 = _interopRequireDefault(_TimePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _TimePicker2.default;

/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Toggle = __webpack_require__(377);

var _Toggle2 = _interopRequireDefault(_Toggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Toggle2.default;

/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ToolbarTitle = exports.ToolbarSeparator = exports.ToolbarGroup = exports.Toolbar = undefined;

var _Toolbar2 = __webpack_require__(378);

var _Toolbar3 = _interopRequireDefault(_Toolbar2);

var _ToolbarGroup2 = __webpack_require__(178);

var _ToolbarGroup3 = _interopRequireDefault(_ToolbarGroup2);

var _ToolbarSeparator2 = __webpack_require__(179);

var _ToolbarSeparator3 = _interopRequireDefault(_ToolbarSeparator2);

var _ToolbarTitle2 = __webpack_require__(180);

var _ToolbarTitle3 = _interopRequireDefault(_ToolbarTitle2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Toolbar = _Toolbar3.default;
exports.ToolbarGroup = _ToolbarGroup3.default;
exports.ToolbarSeparator = _ToolbarSeparator3.default;
exports.ToolbarTitle = _ToolbarTitle3.default;
exports.default = _Toolbar3.default;

/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(0);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getMuiTheme = __webpack_require__(390);

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MuiThemeProvider = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(MuiThemeProvider, _Component);

  function MuiThemeProvider() {
    (0, _classCallCheck3.default)(this, MuiThemeProvider);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  MuiThemeProvider.prototype.getChildContext = function getChildContext() {
    return {
      muiTheme: this.props.muiTheme || (0, _getMuiTheme2.default)()
    };
  };

  MuiThemeProvider.prototype.render = function render() {
    return this.props.children;
  };

  return MuiThemeProvider;
}(_react.Component), _class.propTypes = {
  children: _propTypes2.default.element,
  muiTheme: _propTypes2.default.object
}, _class.childContextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp);
exports.default = MuiThemeProvider;

/***/ }),
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _keys = __webpack_require__(118);

var _keys2 = _interopRequireDefault(_keys);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

exports.getStyles = getStyles;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconButton = __webpack_require__(50);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _menu = __webpack_require__(404);

var _menu2 = _interopRequireDefault(_menu);

var _Paper = __webpack_require__(21);

var _Paper2 = _interopRequireDefault(_Paper);

var _propTypes3 = __webpack_require__(20);

var _propTypes4 = _interopRequireDefault(_propTypes3);

var _warning = __webpack_require__(17);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var _context$muiTheme = context.muiTheme,
      appBar = _context$muiTheme.appBar,
      iconButtonSize = _context$muiTheme.button.iconButtonSize,
      zIndex = _context$muiTheme.zIndex;


  var flatButtonSize = 36;

  var styles = {
    root: {
      position: 'relative',
      zIndex: zIndex.appBar,
      width: '100%',
      display: 'flex',
      backgroundColor: appBar.color,
      paddingLeft: appBar.padding,
      paddingRight: appBar.padding
    },
    title: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      margin: 0,
      paddingTop: 0,
      letterSpacing: 0,
      fontSize: 24,
      fontWeight: appBar.titleFontWeight,
      color: appBar.textColor,
      height: appBar.height,
      lineHeight: appBar.height + 'px'
    },
    mainElement: {
      boxFlex: 1,
      flex: '1'
    },
    iconButtonStyle: {
      marginTop: (appBar.height - iconButtonSize) / 2,
      marginRight: 8,
      marginLeft: -16
    },
    iconButtonIconStyle: {
      fill: appBar.textColor,
      color: appBar.textColor
    },
    flatButton: {
      color: appBar.textColor,
      marginTop: (iconButtonSize - flatButtonSize) / 2 + 1
    }
  };

  return styles;
}

var AppBar = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(AppBar, _Component);

  function AppBar() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, AppBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleTouchTapLeftIconButton = function (event) {
      if (_this.props.onLeftIconButtonTouchTap) {
        _this.props.onLeftIconButtonTouchTap(event);
      }
    }, _this.handleTouchTapRightIconButton = function (event) {
      if (_this.props.onRightIconButtonTouchTap) {
        _this.props.onRightIconButtonTouchTap(event);
      }
    }, _this.handleTitleTouchTap = function (event) {
      if (_this.props.onTitleTouchTap) {
        _this.props.onTitleTouchTap(event);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  AppBar.prototype.componentDidMount = function componentDidMount() {
    (0, _warning2.default)(!this.props.iconElementLeft || !this.props.iconClassNameLeft, 'Material-UI: Properties iconElementLeft\n      and iconClassNameLeft cannot be simultaneously defined. Please use one or the other.');

    (0, _warning2.default)(!this.props.iconElementRight || !this.props.iconClassNameRight, 'Material-UI: Properties iconElementRight\n      and iconClassNameRight cannot be simultaneously defined. Please use one or the other.');
  };

  AppBar.prototype.render = function render() {
    var _props = this.props,
        title = _props.title,
        titleStyle = _props.titleStyle,
        iconStyleLeft = _props.iconStyleLeft,
        iconStyleRight = _props.iconStyleRight,
        onTitleTouchTap = _props.onTitleTouchTap,
        showMenuIconButton = _props.showMenuIconButton,
        iconElementLeft = _props.iconElementLeft,
        iconElementRight = _props.iconElementRight,
        iconClassNameLeft = _props.iconClassNameLeft,
        iconClassNameRight = _props.iconClassNameRight,
        onLeftIconButtonTouchTap = _props.onLeftIconButtonTouchTap,
        onRightIconButtonTouchTap = _props.onRightIconButtonTouchTap,
        className = _props.className,
        style = _props.style,
        zDepth = _props.zDepth,
        children = _props.children,
        other = (0, _objectWithoutProperties3.default)(_props, ['title', 'titleStyle', 'iconStyleLeft', 'iconStyleRight', 'onTitleTouchTap', 'showMenuIconButton', 'iconElementLeft', 'iconElementRight', 'iconClassNameLeft', 'iconClassNameRight', 'onLeftIconButtonTouchTap', 'onRightIconButtonTouchTap', 'className', 'style', 'zDepth', 'children']);
    var prepareStyles = this.context.muiTheme.prepareStyles;

    var styles = getStyles(this.props, this.context);

    var menuElementLeft = void 0;
    var menuElementRight = void 0;

    // If the title is a string, wrap in an h1 tag.
    // If not, wrap in a div tag.
    var titleComponent = typeof title === 'string' || title instanceof String ? 'h1' : 'div';

    var titleElement = _react2.default.createElement(titleComponent, {
      onTouchTap: this.handleTitleTouchTap,
      style: prepareStyles((0, _assign2.default)(styles.title, styles.mainElement, titleStyle))
    }, title);

    var iconLeftStyle = (0, _assign2.default)({}, styles.iconButtonStyle, iconStyleLeft);

    if (showMenuIconButton) {
      if (iconElementLeft) {
        var iconElementLeftProps = {};

        if (iconElementLeft.type.muiName === 'IconButton') {
          var iconElemLeftChildren = iconElementLeft.props.children;
          var iconButtonIconStyle = !(iconElemLeftChildren && iconElemLeftChildren.props && iconElemLeftChildren.props.color) ? styles.iconButtonIconStyle : null;

          iconElementLeftProps.iconStyle = (0, _assign2.default)({}, iconButtonIconStyle, iconElementLeft.props.iconStyle);
        }

        if (!iconElementLeft.props.onTouchTap && this.props.onLeftIconButtonTouchTap) {
          iconElementLeftProps.onTouchTap = this.handleTouchTapLeftIconButton;
        }

        menuElementLeft = _react2.default.createElement(
          'div',
          { style: prepareStyles(iconLeftStyle) },
          (0, _keys2.default)(iconElementLeftProps).length > 0 ? (0, _react.cloneElement)(iconElementLeft, iconElementLeftProps) : iconElementLeft
        );
      } else {
        menuElementLeft = _react2.default.createElement(
          _IconButton2.default,
          {
            style: iconLeftStyle,
            iconStyle: styles.iconButtonIconStyle,
            iconClassName: iconClassNameLeft,
            onTouchTap: this.handleTouchTapLeftIconButton
          },
          iconClassNameLeft ? '' : _react2.default.createElement(_menu2.default, { style: (0, _assign2.default)({}, styles.iconButtonIconStyle) })
        );
      }
    }

    var iconRightStyle = (0, _assign2.default)({}, styles.iconButtonStyle, {
      marginRight: -16,
      marginLeft: 'auto'
    }, iconStyleRight);

    if (iconElementRight) {
      var iconElementRightProps = {};

      switch (iconElementRight.type.muiName) {
        case 'IconMenu':
        case 'IconButton':
          var iconElemRightChildren = iconElementRight.props.children;
          var _iconButtonIconStyle = !(iconElemRightChildren && iconElemRightChildren.props && iconElemRightChildren.props.color) ? styles.iconButtonIconStyle : null;

          iconElementRightProps.iconStyle = (0, _assign2.default)({}, _iconButtonIconStyle, iconElementRight.props.iconStyle);
          break;

        case 'FlatButton':
          iconElementRightProps.style = (0, _assign2.default)({}, styles.flatButton, iconElementRight.props.style);
          break;

        default:
      }

      if (!iconElementRight.props.onTouchTap && this.props.onRightIconButtonTouchTap) {
        iconElementRightProps.onTouchTap = this.handleTouchTapRightIconButton;
      }

      menuElementRight = _react2.default.createElement(
        'div',
        { style: prepareStyles(iconRightStyle) },
        (0, _keys2.default)(iconElementRightProps).length > 0 ? (0, _react.cloneElement)(iconElementRight, iconElementRightProps) : iconElementRight
      );
    } else if (iconClassNameRight) {
      menuElementRight = _react2.default.createElement(_IconButton2.default, {
        style: iconRightStyle,
        iconStyle: styles.iconButtonIconStyle,
        iconClassName: iconClassNameRight,
        onTouchTap: this.handleTouchTapRightIconButton
      });
    }

    return _react2.default.createElement(
      _Paper2.default,
      (0, _extends3.default)({}, other, {
        rounded: false,
        className: className,
        style: (0, _assign2.default)({}, styles.root, style),
        zDepth: zDepth
      }),
      menuElementLeft,
      titleElement,
      menuElementRight,
      children
    );
  };

  return AppBar;
}(_react.Component), _class.muiName = 'AppBar', _class.propTypes = {
  /**
   * Can be used to render a tab inside an app bar for instance.
   */
  children: _propTypes2.default.node,
  /**
   * Applied to the app bar's root element.
   */
  className: _propTypes2.default.string,
  /**
   * The classname of the icon on the left of the app bar.
   * If you are using a stylesheet for your icons, enter the class name for the icon to be used here.
   */
  iconClassNameLeft: _propTypes2.default.string,
  /**
   * Similiar to the iconClassNameLeft prop except that
   * it applies to the icon displayed on the right of the app bar.
   */
  iconClassNameRight: _propTypes2.default.string,
  /**
   * The custom element to be displayed on the left side of the
   * app bar such as an SvgIcon.
   */
  iconElementLeft: _propTypes2.default.element,
  /**
   * Similiar to the iconElementLeft prop except that this element is displayed on the right of the app bar.
   */
  iconElementRight: _propTypes2.default.element,
  /**
   * Override the inline-styles of the element displayed on the left side of the app bar.
   */
  iconStyleLeft: _propTypes2.default.object,
  /**
   * Override the inline-styles of the element displayed on the right side of the app bar.
   */
  iconStyleRight: _propTypes2.default.object,
  /**
   * Callback function for when the left icon is selected via a touch tap.
   *
   * @param {object} event TouchTap event targeting the left `IconButton`.
   */
  onLeftIconButtonTouchTap: _propTypes2.default.func,
  /**
   * Callback function for when the right icon is selected via a touch tap.
   *
   * @param {object} event TouchTap event targeting the right `IconButton`.
   */
  onRightIconButtonTouchTap: _propTypes2.default.func,
  /**
   * Callback function for when the title text is selected via a touch tap.
   *
   * @param {object} event TouchTap event targeting the `title` node.
   */
  onTitleTouchTap: _propTypes2.default.func,
  /**
   * Determines whether or not to display the Menu icon next to the title.
   * Setting this prop to false will hide the icon.
   */
  showMenuIconButton: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * The title to display on the app bar.
   */
  title: _propTypes2.default.node,
  /**
   * Override the inline-styles of the app bar's title element.
   */
  titleStyle: _propTypes2.default.object,
  /**
   * The zDepth of the component.
   * The shadow of the app bar is also dependent on this property.
   */
  zDepth: _propTypes4.default.zDepth
}, _class.defaultProps = {
  showMenuIconButton: true,
  title: '',
  zDepth: 1
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = AppBar;

/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _typeof2 = __webpack_require__(52);

var _typeof3 = _interopRequireDefault(_typeof2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(14);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _keycode = __webpack_require__(22);

var _keycode2 = _interopRequireDefault(_keycode);

var _TextField = __webpack_require__(63);

var _TextField2 = _interopRequireDefault(_TextField);

var _Menu = __webpack_require__(169);

var _Menu2 = _interopRequireDefault(_Menu);

var _MenuItem = __webpack_require__(106);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Divider = __webpack_require__(165);

var _Divider2 = _interopRequireDefault(_Divider);

var _Popover = __webpack_require__(51);

var _Popover2 = _interopRequireDefault(_Popover);

var _propTypes3 = __webpack_require__(20);

var _propTypes4 = _interopRequireDefault(_propTypes3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context, state) {
  var anchorEl = state.anchorEl;
  var fullWidth = props.fullWidth;


  var styles = {
    root: {
      display: 'inline-block',
      position: 'relative',
      width: fullWidth ? '100%' : 256
    },
    menu: {
      width: '100%'
    },
    list: {
      display: 'block',
      width: fullWidth ? '100%' : 256
    },
    innerDiv: {
      overflow: 'hidden'
    }
  };

  if (anchorEl && fullWidth) {
    styles.popover = {
      width: anchorEl.clientWidth
    };
  }

  return styles;
}

var AutoComplete = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(AutoComplete, _Component);

  function AutoComplete() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, AutoComplete);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      anchorEl: null,
      focusTextField: true,
      open: false,
      searchText: undefined
    }, _this.handleRequestClose = function () {
      // Only take into account the Popover clickAway when we are
      // not focusing the TextField.
      if (!_this.state.focusTextField) {
        _this.close();
      }
    }, _this.handleMouseDown = function (event) {
      // Keep the TextField focused
      event.preventDefault();
    }, _this.handleItemTouchTap = function (event, child) {
      var dataSource = _this.props.dataSource;
      var index = parseInt(child.key, 10);
      var chosenRequest = dataSource[index];
      var searchText = _this.chosenRequestText(chosenRequest);

      var updateInput = function updateInput() {
        return _this.props.onUpdateInput(searchText, _this.props.dataSource, {
          source: 'touchTap'
        });
      };
      _this.timerTouchTapCloseId = function () {
        return setTimeout(function () {
          _this.timerTouchTapCloseId = null;
          _this.close();
          _this.props.onNewRequest(chosenRequest, index);
        }, _this.props.menuCloseDelay);
      };

      if (typeof _this.props.searchText !== 'undefined') {
        updateInput();
        _this.timerTouchTapCloseId();
      } else {
        _this.setState({
          searchText: searchText
        }, function () {
          updateInput();
          _this.timerTouchTapCloseId();
        });
      }
    }, _this.chosenRequestText = function (chosenRequest) {
      if (typeof chosenRequest === 'string') {
        return chosenRequest;
      } else {
        return chosenRequest[_this.props.dataSourceConfig.text];
      }
    }, _this.handleEscKeyDown = function () {
      _this.close();
    }, _this.handleKeyDown = function (event) {
      if (_this.props.onKeyDown) _this.props.onKeyDown(event);

      switch ((0, _keycode2.default)(event)) {
        case 'enter':
          _this.close();
          var searchText = _this.state.searchText;
          if (searchText !== '') {
            _this.props.onNewRequest(searchText, -1);
          }
          break;

        case 'esc':
          _this.close();
          break;

        case 'down':
          event.preventDefault();
          _this.setState({
            open: true,
            focusTextField: false,
            anchorEl: _reactDom2.default.findDOMNode(_this.refs.searchTextField)
          });
          break;

        default:
          break;
      }
    }, _this.handleChange = function (event) {
      var searchText = event.target.value;

      // Make sure that we have a new searchText.
      // Fix an issue with a Cordova Webview
      if (searchText === _this.state.searchText) {
        return;
      }

      _this.setState({
        searchText: searchText,
        open: true,
        anchorEl: _reactDom2.default.findDOMNode(_this.refs.searchTextField)
      }, function () {
        _this.props.onUpdateInput(searchText, _this.props.dataSource, {
          source: 'change'
        });
      });
    }, _this.handleBlur = function (event) {
      if (_this.state.focusTextField && _this.timerTouchTapCloseId === null) {
        _this.timerBlurClose = setTimeout(function () {
          _this.close();
        }, 0);
      }

      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }
    }, _this.handleFocus = function (event) {
      if (!_this.state.open && _this.props.openOnFocus) {
        _this.setState({
          open: true,
          anchorEl: _reactDom2.default.findDOMNode(_this.refs.searchTextField)
        });
      }

      _this.setState({
        focusTextField: true
      });

      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  AutoComplete.prototype.componentWillMount = function componentWillMount() {
    this.requestsList = [];
    this.setState({
      open: this.props.open,
      searchText: this.props.searchText || ''
    });
    this.timerTouchTapCloseId = null;
  };

  AutoComplete.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.searchText !== nextProps.searchText) {
      this.setState({
        searchText: nextProps.searchText
      });
    }
    if (this.props.open !== nextProps.open) {
      this.setState({
        open: nextProps.open,
        anchorEl: _reactDom2.default.findDOMNode(this.refs.searchTextField)
      });
    }
  };

  AutoComplete.prototype.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.timerTouchTapCloseId);
    clearTimeout(this.timerBlurClose);
  };

  AutoComplete.prototype.close = function close() {
    this.setState({
      open: false,
      anchorEl: null
    });

    if (this.props.onClose) {
      this.props.onClose();
    }
  };

  AutoComplete.prototype.blur = function blur() {
    this.refs.searchTextField.blur();
  };

  AutoComplete.prototype.focus = function focus() {
    this.refs.searchTextField.focus();
  };

  AutoComplete.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        anchorOrigin = _props.anchorOrigin,
        animated = _props.animated,
        animation = _props.animation,
        dataSource = _props.dataSource,
        dataSourceConfig = _props.dataSourceConfig,
        disableFocusRipple = _props.disableFocusRipple,
        errorStyle = _props.errorStyle,
        floatingLabelText = _props.floatingLabelText,
        filter = _props.filter,
        fullWidth = _props.fullWidth,
        style = _props.style,
        hintText = _props.hintText,
        maxSearchResults = _props.maxSearchResults,
        menuCloseDelay = _props.menuCloseDelay,
        textFieldStyle = _props.textFieldStyle,
        menuStyle = _props.menuStyle,
        menuProps = _props.menuProps,
        listStyle = _props.listStyle,
        targetOrigin = _props.targetOrigin,
        onBlur = _props.onBlur,
        onClose = _props.onClose,
        onFocus = _props.onFocus,
        onKeyDown = _props.onKeyDown,
        onNewRequest = _props.onNewRequest,
        onUpdateInput = _props.onUpdateInput,
        openOnFocus = _props.openOnFocus,
        popoverProps = _props.popoverProps,
        searchTextProp = _props.searchText,
        other = (0, _objectWithoutProperties3.default)(_props, ['anchorOrigin', 'animated', 'animation', 'dataSource', 'dataSourceConfig', 'disableFocusRipple', 'errorStyle', 'floatingLabelText', 'filter', 'fullWidth', 'style', 'hintText', 'maxSearchResults', 'menuCloseDelay', 'textFieldStyle', 'menuStyle', 'menuProps', 'listStyle', 'targetOrigin', 'onBlur', 'onClose', 'onFocus', 'onKeyDown', 'onNewRequest', 'onUpdateInput', 'openOnFocus', 'popoverProps', 'searchText']);

    var _ref = popoverProps || {},
        popoverStyle = _ref.style,
        popoverOther = (0, _objectWithoutProperties3.default)(_ref, ['style']);

    var _state = this.state,
        open = _state.open,
        anchorEl = _state.anchorEl,
        searchText = _state.searchText,
        focusTextField = _state.focusTextField;
    var prepareStyles = this.context.muiTheme.prepareStyles;

    var styles = getStyles(this.props, this.context, this.state);

    var requestsList = [];

    dataSource.every(function (item, index) {
      switch (typeof item === 'undefined' ? 'undefined' : (0, _typeof3.default)(item)) {
        case 'string':
          if (filter(searchText, item, item)) {
            requestsList.push({
              text: item,
              value: _react2.default.createElement(_MenuItem2.default, {
                innerDivStyle: styles.innerDiv,
                value: item,
                primaryText: item,
                disableFocusRipple: disableFocusRipple,
                key: index
              })
            });
          }
          break;

        case 'object':
          if (item && typeof item[_this2.props.dataSourceConfig.text] === 'string') {
            var itemText = item[_this2.props.dataSourceConfig.text];
            if (!_this2.props.filter(searchText, itemText, item)) break;

            var itemValue = item[_this2.props.dataSourceConfig.value];
            if (itemValue.type && (itemValue.type.muiName === _MenuItem2.default.muiName || itemValue.type.muiName === _Divider2.default.muiName)) {
              requestsList.push({
                text: itemText,
                value: _react2.default.cloneElement(itemValue, {
                  key: index,
                  disableFocusRipple: disableFocusRipple
                })
              });
            } else {
              requestsList.push({
                text: itemText,
                value: _react2.default.createElement(_MenuItem2.default, {
                  innerDivStyle: styles.innerDiv,
                  primaryText: itemText,
                  disableFocusRipple: disableFocusRipple,
                  key: index
                })
              });
            }
          }
          break;

        default:
        // Do nothing
      }

      return !(maxSearchResults && maxSearchResults > 0 && requestsList.length === maxSearchResults);
    });

    this.requestsList = requestsList;

    var menu = open && requestsList.length > 0 && _react2.default.createElement(
      _Menu2.default,
      (0, _extends3.default)({
        ref: 'menu',
        autoWidth: false,
        disableAutoFocus: focusTextField,
        onEscKeyDown: this.handleEscKeyDown,
        initiallyKeyboardFocused: true,
        onItemTouchTap: this.handleItemTouchTap,
        onMouseDown: this.handleMouseDown,
        style: (0, _assign2.default)(styles.menu, menuStyle),
        listStyle: (0, _assign2.default)(styles.list, listStyle)
      }, menuProps),
      requestsList.map(function (i) {
        return i.value;
      })
    );

    return _react2.default.createElement(
      'div',
      { style: prepareStyles((0, _assign2.default)(styles.root, style)) },
      _react2.default.createElement(_TextField2.default, (0, _extends3.default)({
        ref: 'searchTextField',
        autoComplete: 'off',
        onBlur: this.handleBlur,
        onFocus: this.handleFocus,
        onKeyDown: this.handleKeyDown,
        floatingLabelText: floatingLabelText,
        hintText: hintText,
        fullWidth: fullWidth,
        multiLine: false,
        errorStyle: errorStyle,
        style: textFieldStyle
      }, other, {
        // value and onChange are idiomatic properties often leaked.
        // We prevent their overrides in order to reduce potential bugs.
        value: searchText,
        onChange: this.handleChange
      })),
      _react2.default.createElement(
        _Popover2.default,
        (0, _extends3.default)({
          style: (0, _assign2.default)({}, styles.popover, popoverStyle),
          canAutoPosition: false,
          anchorOrigin: anchorOrigin,
          targetOrigin: targetOrigin,
          open: open,
          anchorEl: anchorEl,
          useLayerForClickAway: false,
          onRequestClose: this.handleRequestClose,
          animated: animated,
          animation: animation
        }, popoverOther),
        menu
      )
    );
  };

  return AutoComplete;
}(_react.Component), _class.propTypes = {
  /**
   * Location of the anchor for the auto complete.
   */
  anchorOrigin: _propTypes4.default.origin,
  /**
   * If true, the auto complete is animated as it is toggled.
   */
  animated: _propTypes2.default.bool,
  /**
   * Override the default animation component used.
   */
  animation: _propTypes2.default.func,
  /**
   * Array of strings or nodes used to populate the list.
   */
  dataSource: _propTypes2.default.array.isRequired,
  /**
   * Config for objects list dataSource.
   *
   * @typedef {Object} dataSourceConfig
   *
   * @property {string} text `dataSource` element key used to find a string to be matched for search
   * and shown as a `TextField` input value after choosing the result.
   * @property {string} value `dataSource` element key used to find a string to be shown in search results.
   */
  dataSourceConfig: _propTypes2.default.object,
  /**
   * Disables focus ripple when true.
   */
  disableFocusRipple: _propTypes2.default.bool,
  /**
   * Override style prop for error.
   */
  errorStyle: _propTypes2.default.object,
  /**
   * The error content to display.
   */
  errorText: _propTypes2.default.node,
  /**
   * Callback function used to filter the auto complete.
   *
   * @param {string} searchText The text to search for within `dataSource`.
   * @param {string} key `dataSource` element, or `text` property on that element if it's not a string.
   * @returns {boolean} `true` indicates the auto complete list will include `key` when the input is `searchText`.
   */
  filter: _propTypes2.default.func,
  /**
   * The content to use for adding floating label element.
   */
  floatingLabelText: _propTypes2.default.node,
  /**
   * If true, the field receives the property `width: 100%`.
   */
  fullWidth: _propTypes2.default.bool,
  /**
   * The hint content to display.
   */
  hintText: _propTypes2.default.node,
  /**
   * Override style for list.
   */
  listStyle: _propTypes2.default.object,
  /**
   * The max number of search results to be shown.
   * By default it shows all the items which matches filter.
   */
  maxSearchResults: _propTypes2.default.number,
  /**
   * Delay for closing time of the menu.
   */
  menuCloseDelay: _propTypes2.default.number,
  /**
   * Props to be passed to menu.
   */
  menuProps: _propTypes2.default.object,
  /**
   * Override style for menu.
   */
  menuStyle: _propTypes2.default.object,
  /** @ignore */
  onBlur: _propTypes2.default.func,
  /**
   * Callback function fired when the menu is closed.
   */
  onClose: _propTypes2.default.func,
  /** @ignore */
  onFocus: _propTypes2.default.func,
  /** @ignore */
  onKeyDown: _propTypes2.default.func,
  /**
   * Callback function that is fired when a list item is selected, or enter is pressed in the `TextField`.
   *
   * @param {string} chosenRequest Either the `TextField` input value, if enter is pressed in the `TextField`,
   * or the text value of the corresponding list item that was selected.
   * @param {number} index The index in `dataSource` of the list item selected, or `-1` if enter is pressed in the
   * `TextField`.
   */
  onNewRequest: _propTypes2.default.func,
  /**
   * Callback function that is fired when the user updates the `TextField`.
   *
   * @param {string} searchText The auto-complete's `searchText` value.
   * @param {array} dataSource The auto-complete's `dataSource` array.
   * @param {object} params Additional information linked the update.
   */
  onUpdateInput: _propTypes2.default.func,
  /**
   * Auto complete menu is open if true.
   */
  open: _propTypes2.default.bool,
  /**
   * If true, the list item is showed when a focus event triggers.
   */
  openOnFocus: _propTypes2.default.bool,
  /**
   * Props to be passed to popover.
   */
  popoverProps: _propTypes2.default.object,
  /**
   * Text being input to auto complete.
   */
  searchText: _propTypes2.default.string,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * Origin for location of target.
   */
  targetOrigin: _propTypes4.default.origin,
  /**
   * Override the inline-styles of AutoComplete's TextField element.
   */
  textFieldStyle: _propTypes2.default.object
}, _class.defaultProps = {
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left'
  },
  animated: true,
  dataSourceConfig: {
    text: 'text',
    value: 'value'
  },
  disableFocusRipple: true,
  filter: function filter(searchText, key) {
    return searchText !== '' && key.indexOf(searchText) !== -1;
  },
  fullWidth: false,
  open: false,
  openOnFocus: false,
  onUpdateInput: function onUpdateInput() {},
  onNewRequest: function onNewRequest() {},
  menuCloseDelay: 300,
  targetOrigin: {
    vertical: 'top',
    horizontal: 'left'
  }
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);


AutoComplete.levenshteinDistance = function (searchText, key) {
  var current = [];
  var prev = void 0;
  var value = void 0;

  for (var i = 0; i <= key.length; i++) {
    for (var j = 0; j <= searchText.length; j++) {
      if (i && j) {
        if (searchText.charAt(j - 1) === key.charAt(i - 1)) value = prev;else value = Math.min(current[j], current[j - 1], prev) + 1;
      } else {
        value = i + j;
      }
      prev = current[j];
      current[j] = value;
    }
  }
  return current.pop();
};

AutoComplete.noFilter = function () {
  return true;
};

AutoComplete.defaultFilter = AutoComplete.caseSensitiveFilter = function (searchText, key) {
  return searchText !== '' && key.indexOf(searchText) !== -1;
};

AutoComplete.caseInsensitiveFilter = function (searchText, key) {
  return key.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
};

AutoComplete.levenshteinDistanceFilter = function (distanceLessThan) {
  if (distanceLessThan === undefined) {
    return AutoComplete.levenshteinDistance;
  } else if (typeof distanceLessThan !== 'number') {
    throw 'Error: AutoComplete.levenshteinDistanceFilter is a filter generator, not a filter!';
  }

  return function (s, k) {
    return AutoComplete.levenshteinDistance(s, k) < distanceLessThan;
  };
};

AutoComplete.fuzzyFilter = function (searchText, key) {
  var compareString = key.toLowerCase();
  searchText = searchText.toLowerCase();

  var searchTextIndex = 0;
  for (var index = 0; index < key.length; index++) {
    if (compareString[index] === searchText[searchTextIndex]) {
      searchTextIndex += 1;
    }
  }

  return searchTextIndex === searchText.length;
};

AutoComplete.Item = _MenuItem2.default;
AutoComplete.Divider = _Divider2.default;

exports.default = AutoComplete;

/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var backgroundColor = props.backgroundColor,
      color = props.color,
      size = props.size;
  var avatar = context.muiTheme.avatar;


  var styles = {
    root: {
      color: color || avatar.color,
      backgroundColor: backgroundColor || avatar.backgroundColor,
      userSelect: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: size / 2,
      borderRadius: '50%',
      height: size,
      width: size
    },
    icon: {
      color: color || avatar.color,
      width: size * 0.6,
      height: size * 0.6,
      fontSize: size * 0.6,
      margin: size * 0.2
    }
  };

  return styles;
}

var Avatar = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(Avatar, _Component);

  function Avatar() {
    (0, _classCallCheck3.default)(this, Avatar);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  Avatar.prototype.render = function render() {
    var _props = this.props,
        backgroundColor = _props.backgroundColor,
        icon = _props.icon,
        src = _props.src,
        style = _props.style,
        className = _props.className,
        other = (0, _objectWithoutProperties3.default)(_props, ['backgroundColor', 'icon', 'src', 'style', 'className']);
    var prepareStyles = this.context.muiTheme.prepareStyles;

    var styles = getStyles(this.props, this.context);

    if (src) {
      return _react2.default.createElement('img', (0, _extends3.default)({
        style: prepareStyles((0, _assign2.default)(styles.root, style))
      }, other, {
        src: src,
        className: className
      }));
    } else {
      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, other, {
          style: prepareStyles((0, _assign2.default)(styles.root, style)),
          className: className
        }),
        icon && _react2.default.cloneElement(icon, {
          color: styles.icon.color,
          style: (0, _assign2.default)(styles.icon, icon.props.style)
        }),
        this.props.children
      );
    }
  };

  return Avatar;
}(_react.Component), _class.muiName = 'Avatar', _class.propTypes = {
  /**
   * The backgroundColor of the avatar. Does not apply to image avatars.
   */
  backgroundColor: _propTypes2.default.string,
  /**
   * Can be used, for instance, to render a letter inside the avatar.
   */
  children: _propTypes2.default.node,
  /**
   * The css class name of the root `div` or `img` element.
   */
  className: _propTypes2.default.string,
  /**
   * The icon or letter's color.
   */
  color: _propTypes2.default.string,
  /**
   * This is the SvgIcon or FontIcon to be used inside the avatar.
   */
  icon: _propTypes2.default.element,
  /**
   * This is the size of the avatar in pixels.
   */
  size: _propTypes2.default.number,
  /**
   * If passed in, this component will render an img element. Otherwise, a div will be rendered.
   */
  src: _propTypes2.default.string,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
}, _class.defaultProps = {
  size: 40
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp);
exports.default = Avatar;

/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var primary = props.primary,
      secondary = props.secondary;
  var badge = context.muiTheme.badge;


  var badgeBackgroundColor = void 0;
  var badgeTextColor = void 0;

  if (primary) {
    badgeBackgroundColor = badge.primaryColor;
    badgeTextColor = badge.primaryTextColor;
  } else if (secondary) {
    badgeBackgroundColor = badge.secondaryColor;
    badgeTextColor = badge.secondaryTextColor;
  } else {
    badgeBackgroundColor = badge.color;
    badgeTextColor = badge.textColor;
  }

  var radius = 12;
  var radius2x = Math.floor(2 * radius);

  return {
    root: {
      position: 'relative',
      display: 'inline-block',
      padding: radius2x + 'px ' + radius2x + 'px ' + radius + 'px ' + radius + 'px'
    },
    badge: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: 0,
      right: 0,
      fontWeight: badge.fontWeight,
      fontSize: radius,
      width: radius2x,
      height: radius2x,
      borderRadius: '50%',
      backgroundColor: badgeBackgroundColor,
      color: badgeTextColor
    }
  };
}

var Badge = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(Badge, _Component);

  function Badge() {
    (0, _classCallCheck3.default)(this, Badge);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  Badge.prototype.render = function render() {
    var _props = this.props,
        badgeContent = _props.badgeContent,
        badgeStyle = _props.badgeStyle,
        children = _props.children,
        primary = _props.primary,
        secondary = _props.secondary,
        style = _props.style,
        other = (0, _objectWithoutProperties3.default)(_props, ['badgeContent', 'badgeStyle', 'children', 'primary', 'secondary', 'style']);
    var prepareStyles = this.context.muiTheme.prepareStyles;

    var styles = getStyles(this.props, this.context);

    return _react2.default.createElement(
      'div',
      (0, _extends3.default)({}, other, { style: prepareStyles((0, _assign2.default)({}, styles.root, style)) }),
      children,
      _react2.default.createElement(
        'span',
        { style: prepareStyles((0, _assign2.default)({}, styles.badge, badgeStyle)) },
        badgeContent
      )
    );
  };

  return Badge;
}(_react.Component), _class.propTypes = {
  /**
   * This is the content rendered within the badge.
   */
  badgeContent: _propTypes2.default.node.isRequired,
  /**
   * Override the inline-styles of the badge element.
   */
  badgeStyle: _propTypes2.default.object,
  /**
   * The badge will be added relativelty to this node.
   */
  children: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * If true, the badge will use the primary badge colors.
   */
  primary: _propTypes2.default.bool,
  /**
   * If true, the badge will use the secondary badge colors.
   */
  secondary: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
}, _class.defaultProps = {
  primary: false,
  secondary: false
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp);
exports.default = Badge;

/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var bottomNavigation = context.muiTheme.bottomNavigation;


  var styles = {
    root: {
      position: 'relative',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: bottomNavigation.backgroundColor,
      height: bottomNavigation.height
    },
    item: {
      flex: '1'
    }
  };

  return styles;
}

var BottomNavigation = function BottomNavigation(props, context) {
  var children = props.children,
      style = props.style,
      selectedIndex = props.selectedIndex,
      other = (0, _objectWithoutProperties3.default)(props, ['children', 'style', 'selectedIndex']);
  var prepareStyles = context.muiTheme.prepareStyles;

  var styles = getStyles(props, context);

  var preparedChildren = _react.Children.map(children, function (child, index) {
    return (0, _react.cloneElement)(child, {
      style: (0, _assign2.default)({}, styles.item, child.props.style),
      selected: index === selectedIndex
    });
  });

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({}, other, { style: prepareStyles((0, _assign2.default)({}, styles.root, style)) }),
    preparedChildren
  );
};

BottomNavigation.propTypes = {
  /**
   * The `BottomNavigationItem`s to populate the element with.
   */
  children: _propTypes2.default.node,
  /**
   * The index of the currently selected navigation item.
   */
  selectedIndex: _propTypes2.default.number,
  /**
   * @ignore
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
};

BottomNavigation.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};

exports.default = BottomNavigation;

/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Paper = __webpack_require__(21);

var _Paper2 = _interopRequireDefault(_Paper);

var _CardExpandable = __webpack_require__(182);

var _CardExpandable2 = _interopRequireDefault(_CardExpandable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Card = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(Card, _Component);

  function Card() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Card);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      expanded: null
    }, _this.handleExpanding = function (event) {
      event.preventDefault();
      var newExpandedState = !_this.state.expanded;
      // no automatic state update when the component is controlled
      if (_this.props.expanded === null) {
        _this.setState({ expanded: newExpandedState });
      }
      if (_this.props.onExpandChange) {
        _this.props.onExpandChange(newExpandedState);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  Card.prototype.componentWillMount = function componentWillMount() {
    this.setState({
      expanded: this.props.expanded === null ? this.props.initiallyExpanded === true : this.props.expanded
    });
  };

  Card.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    // update the state when the component is controlled.
    if (nextProps.expanded !== null) this.setState({ expanded: nextProps.expanded });
  };

  Card.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        style = _props.style,
        containerStyle = _props.containerStyle,
        children = _props.children,
        expandable = _props.expandable,
        expandedProp = _props.expanded,
        initiallyExpanded = _props.initiallyExpanded,
        onExpandChange = _props.onExpandChange,
        other = (0, _objectWithoutProperties3.default)(_props, ['style', 'containerStyle', 'children', 'expandable', 'expanded', 'initiallyExpanded', 'onExpandChange']);


    var lastElement = void 0;
    var expanded = this.state.expanded;
    var newChildren = _react2.default.Children.map(children, function (currentChild) {
      var doClone = false;
      var newChild = undefined;
      var newProps = {};
      var element = currentChild;
      if (!currentChild || !currentChild.props) {
        return null;
      }
      if (expanded === false && currentChild.props.expandable === true) return;
      if (currentChild.props.actAsExpander === true) {
        doClone = true;
        newProps.onTouchTap = _this2.handleExpanding;
        newProps.style = (0, _assign2.default)({ cursor: 'pointer' }, currentChild.props.style);
      }
      if (currentChild.props.showExpandableButton === true) {
        doClone = true;
        newChild = _react2.default.createElement(_CardExpandable2.default, {
          closeIcon: currentChild.props.closeIcon,
          expanded: expanded,
          onExpanding: _this2.handleExpanding,
          openIcon: currentChild.props.openIcon,
          iconStyle: currentChild.props.iconStyle
        });
      }
      if (doClone) {
        element = _react2.default.cloneElement(currentChild, newProps, currentChild.props.children, newChild);
      }
      lastElement = element;
      return element;
    }, this);

    // If the last element is text or a title we should add
    // 8px padding to the bottom of the card
    var addBottomPadding = lastElement && (lastElement.type.muiName === 'CardText' || lastElement.type.muiName === 'CardTitle');

    var mergedStyles = (0, _assign2.default)({
      zIndex: 1
    }, style);
    var containerMergedStyles = (0, _assign2.default)({
      paddingBottom: addBottomPadding ? 8 : 0
    }, containerStyle);

    return _react2.default.createElement(
      _Paper2.default,
      (0, _extends3.default)({}, other, { style: mergedStyles }),
      _react2.default.createElement(
        'div',
        { style: containerMergedStyles },
        newChildren
      )
    );
  };

  return Card;
}(_react.Component), _class.propTypes = {
  /**
   * Can be used to render elements inside the Card.
   */
  children: _propTypes2.default.node,
  /**
   * Override the inline-styles of the container element.
   */
  containerStyle: _propTypes2.default.object,
  /**
   * If true, this card component is expandable. Can be set on any child of the `Card` component.
   */
  expandable: _propTypes2.default.bool,
  /**
   * Whether this card is expanded.
   * If `true` or `false` the component is controlled.
   * if `null` the component is uncontrolled.
   */
  expanded: _propTypes2.default.bool,
  /**
   * Whether this card is initially expanded.
   */
  initiallyExpanded: _propTypes2.default.bool,
  /**
   * Callback function fired when the `expandable` state of the card has changed.
   *
   * @param {boolean} newExpandedState Represents the new `expanded` state of the card.
   */
  onExpandChange: _propTypes2.default.func,
  /**
   * If true, this card component will include a button to expand the card. `CardTitle`,
   * `CardHeader` and `CardActions` implement `showExpandableButton`. Any child component
   * of `Card` can implements `showExpandableButton` or forwards the property to a child
   * component supporting it.
   */
  showExpandableButton: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
}, _class.defaultProps = {
  expandable: false,
  expanded: null,
  initiallyExpanded: false
}, _temp2);
exports.default = Card;

/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _EnhancedSwitch = __webpack_require__(113);

var _EnhancedSwitch2 = _interopRequireDefault(_EnhancedSwitch);

var _transitions = __webpack_require__(11);

var _transitions2 = _interopRequireDefault(_transitions);

var _checkBoxOutlineBlank = __webpack_require__(405);

var _checkBoxOutlineBlank2 = _interopRequireDefault(_checkBoxOutlineBlank);

var _checkBox = __webpack_require__(406);

var _checkBox2 = _interopRequireDefault(_checkBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var checkbox = context.muiTheme.checkbox;

  var checkboxSize = 24;

  return {
    icon: {
      height: checkboxSize,
      width: checkboxSize
    },
    check: {
      position: 'absolute',
      opacity: 0,
      transform: 'scale(0)',
      transitionOrigin: '50% 50%',
      transition: _transitions2.default.easeOut('450ms', 'opacity', '0ms') + ', ' + _transitions2.default.easeOut('0ms', 'transform', '450ms'),
      fill: checkbox.checkedColor
    },
    checkWhenSwitched: {
      opacity: 1,
      transform: 'scale(1)',
      transition: _transitions2.default.easeOut('0ms', 'opacity', '0ms') + ', ' + _transitions2.default.easeOut('800ms', 'transform', '0ms')
    },
    checkWhenDisabled: {
      fill: checkbox.disabledColor
    },
    box: {
      position: 'absolute',
      opacity: 1,
      fill: checkbox.boxColor,
      transition: _transitions2.default.easeOut('1000ms', 'opacity', '200ms')
    },
    boxWhenSwitched: {
      opacity: 0,
      transition: _transitions2.default.easeOut('650ms', 'opacity', '150ms'),
      fill: checkbox.checkedColor
    },
    boxWhenDisabled: {
      fill: props.checked ? 'transparent' : checkbox.disabledColor
    },
    label: {
      color: props.disabled ? checkbox.labelDisabledColor : checkbox.labelColor
    }
  };
}

var Checkbox = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(Checkbox, _Component);

  function Checkbox() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Checkbox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      switched: false
    }, _this.handleStateChange = function (newSwitched) {
      _this.setState({
        switched: newSwitched
      });
    }, _this.handleCheck = function (event, isInputChecked) {
      if (_this.props.onCheck) {
        _this.props.onCheck(event, isInputChecked);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  Checkbox.prototype.componentWillMount = function componentWillMount() {
    var _props = this.props,
        checked = _props.checked,
        defaultChecked = _props.defaultChecked,
        valueLink = _props.valueLink;


    if (checked || defaultChecked || valueLink && valueLink.value) {
      this.setState({
        switched: true
      });
    }
  };

  Checkbox.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.checked !== nextProps.checked) {
      this.setState({
        switched: nextProps.checked
      });
    }
  };

  Checkbox.prototype.isChecked = function isChecked() {
    return this.refs.enhancedSwitch.isSwitched();
  };

  Checkbox.prototype.setChecked = function setChecked(newCheckedValue) {
    this.refs.enhancedSwitch.setSwitched(newCheckedValue);
  };

  Checkbox.prototype.render = function render() {
    var _props2 = this.props,
        iconStyle = _props2.iconStyle,
        onCheck = _props2.onCheck,
        checkedIcon = _props2.checkedIcon,
        uncheckedIcon = _props2.uncheckedIcon,
        other = (0, _objectWithoutProperties3.default)(_props2, ['iconStyle', 'onCheck', 'checkedIcon', 'uncheckedIcon']);

    var styles = getStyles(this.props, this.context);
    var boxStyles = (0, _assign2.default)(styles.box, this.state.switched && styles.boxWhenSwitched, iconStyle, this.props.disabled && styles.boxWhenDisabled);
    var checkStyles = (0, _assign2.default)(styles.check, this.state.switched && styles.checkWhenSwitched, iconStyle, this.props.disabled && styles.checkWhenDisabled);

    var checkedElement = checkedIcon ? _react2.default.cloneElement(checkedIcon, {
      style: (0, _assign2.default)(checkStyles, checkedIcon.props.style)
    }) : _react2.default.createElement(_checkBox2.default, {
      style: checkStyles
    });

    var unCheckedElement = uncheckedIcon ? _react2.default.cloneElement(uncheckedIcon, {
      style: (0, _assign2.default)(boxStyles, uncheckedIcon.props.style)
    }) : _react2.default.createElement(_checkBoxOutlineBlank2.default, {
      style: boxStyles
    });

    var checkboxElement = _react2.default.createElement(
      'div',
      null,
      unCheckedElement,
      checkedElement
    );

    var rippleColor = this.state.switched ? checkStyles.fill : boxStyles.fill;
    var mergedIconStyle = (0, _assign2.default)(styles.icon, iconStyle);

    var labelStyle = (0, _assign2.default)(styles.label, this.props.labelStyle);

    var enhancedSwitchProps = {
      ref: 'enhancedSwitch',
      inputType: 'checkbox',
      switched: this.state.switched,
      switchElement: checkboxElement,
      rippleColor: rippleColor,
      iconStyle: mergedIconStyle,
      onSwitch: this.handleCheck,
      labelStyle: labelStyle,
      onParentShouldUpdate: this.handleStateChange,
      labelPosition: this.props.labelPosition
    };

    return _react2.default.createElement(_EnhancedSwitch2.default, (0, _extends3.default)({}, other, enhancedSwitchProps));
  };

  return Checkbox;
}(_react.Component), _class.propTypes = {
  /**
   * Checkbox is checked if true.
   */
  checked: _propTypes2.default.bool,
  /**
   * The SvgIcon to use for the checked state.
   * This is useful to create icon toggles.
   */
  checkedIcon: _propTypes2.default.element,
  /**
   * The default state of our checkbox component.
   * **Warning:** This cannot be used in conjunction with `checked`.
   * Decide between using a controlled or uncontrolled input element and remove one of these props.
   * More info: https://fb.me/react-controlled-components
   */
  defaultChecked: _propTypes2.default.bool,
  /**
   * Disabled if true.
   */
  disabled: _propTypes2.default.bool,
  /**
   * Overrides the inline-styles of the icon element.
   */
  iconStyle: _propTypes2.default.object,
  /**
   * Overrides the inline-styles of the input element.
   */
  inputStyle: _propTypes2.default.object,
  /**
   * Where the label will be placed next to the checkbox.
   */
  labelPosition: _propTypes2.default.oneOf(['left', 'right']),
  /**
   * Overrides the inline-styles of the Checkbox element label.
   */
  labelStyle: _propTypes2.default.object,
  /**
   * Callback function that is fired when the checkbox is checked.
   *
   * @param {object} event `change` event targeting the underlying checkbox `input`.
   * @param {boolean} isInputChecked The `checked` value of the underlying checkbox `input`.
   */
  onCheck: _propTypes2.default.func,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * The SvgIcon to use for the unchecked state.
   * This is useful to create icon toggles.
   */
  uncheckedIcon: _propTypes2.default.element,
  /**
   * ValueLink for when using controlled checkbox.
   */
  valueLink: _propTypes2.default.object
}, _class.defaultProps = {
  labelPosition: 'right',
  disabled: false
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = Checkbox;

/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _keycode = __webpack_require__(22);

var _keycode2 = _interopRequireDefault(_keycode);

var _colorManipulator = __webpack_require__(35);

var _EnhancedButton = __webpack_require__(27);

var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);

var _cancel = __webpack_require__(398);

var _cancel2 = _interopRequireDefault(_cancel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context, state) {
  var chip = context.muiTheme.chip;


  var backgroundColor = props.backgroundColor || chip.backgroundColor;
  var focusColor = (0, _colorManipulator.emphasize)(backgroundColor, 0.08);
  var pressedColor = (0, _colorManipulator.emphasize)(backgroundColor, 0.12);

  return {
    avatar: {
      marginRight: -4
    },
    deleteIcon: {
      color: state.deleteHovered ? (0, _colorManipulator.fade)(chip.deleteIconColor, 0.4) : chip.deleteIconColor,
      cursor: 'pointer',
      margin: '4px 4px 0px -8px'
    },
    label: {
      color: props.labelColor || chip.textColor,
      fontSize: chip.fontSize,
      fontWeight: chip.fontWeight,
      lineHeight: '32px',
      paddingLeft: 12,
      paddingRight: 12,
      userSelect: 'none',
      whiteSpace: 'nowrap'
    },
    root: {
      backgroundColor: state.clicked ? pressedColor : state.focused || state.hovered ? focusColor : backgroundColor,
      borderRadius: 16,
      boxShadow: state.clicked ? chip.shadow : null,
      cursor: props.onTouchTap ? 'pointer' : 'default',
      display: 'flex',
      whiteSpace: 'nowrap',
      width: 'fit-content'
    }
  };
}

var Chip = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(Chip, _Component);

  function Chip() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Chip);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      clicked: false,
      deleteHovered: false,
      focused: false,
      hovered: false
    }, _this.handleBlur = function (event) {
      _this.setState({ clicked: false, focused: false });
      _this.props.onBlur(event);
    }, _this.handleFocus = function (event) {
      if (_this.props.onTouchTap || _this.props.onRequestDelete) {
        _this.setState({ focused: true });
      }
      _this.props.onFocus(event);
    }, _this.handleKeyboardFocus = function (event, keyboardFocused) {
      if (keyboardFocused) {
        _this.handleFocus();
        _this.props.onFocus(event);
      } else {
        _this.handleBlur();
      }

      _this.props.onKeyboardFocus(event, keyboardFocused);
    }, _this.handleKeyDown = function (event) {
      if ((0, _keycode2.default)(event) === 'backspace') {
        event.preventDefault();
        if (_this.props.onRequestDelete) {
          _this.props.onRequestDelete(event);
        }
      }
      _this.props.onKeyDown(event);
    }, _this.handleMouseDown = function (event) {
      // Only listen to left clicks
      if (event.button === 0) {
        event.stopPropagation();
        if (_this.props.onTouchTap) {
          _this.setState({ clicked: true });
        }
      }
      _this.props.onMouseDown(event);
    }, _this.handleMouseEnter = function (event) {
      if (_this.props.onTouchTap) {
        _this.setState({ hovered: true });
      }
      _this.props.onMouseEnter(event);
    }, _this.handleMouseEnterDeleteIcon = function () {
      _this.setState({ deleteHovered: true });
    }, _this.handleMouseLeave = function (event) {
      _this.setState({
        clicked: false,
        hovered: false
      });
      _this.props.onMouseLeave(event);
    }, _this.handleMouseLeaveDeleteIcon = function () {
      _this.setState({ deleteHovered: false });
    }, _this.handleMouseUp = function (event) {
      _this.setState({ clicked: false });
      _this.props.onMouseUp(event);
    }, _this.handleTouchTapDeleteIcon = function (event) {
      // Stop the event from bubbling up to the `Chip`
      event.stopPropagation();
      _this.props.onRequestDelete(event);
    }, _this.handleTouchEnd = function (event) {
      _this.setState({ clicked: false });
      _this.props.onTouchEnd(event);
    }, _this.handleTouchStart = function (event) {
      event.stopPropagation();
      if (_this.props.onTouchTap) {
        _this.setState({ clicked: true });
      }
      _this.props.onTouchStart(event);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  Chip.prototype.render = function render() {
    var buttonEventHandlers = {
      onBlur: this.handleBlur,
      onFocus: this.handleFocus,
      onKeyDown: this.handleKeyDown,
      onMouseDown: this.handleMouseDown,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      onMouseUp: this.handleMouseUp,
      onTouchEnd: this.handleTouchEnd,
      onTouchStart: this.handleTouchStart,
      onKeyboardFocus: this.handleKeyboardFocus
    };

    var prepareStyles = this.context.muiTheme.prepareStyles;

    var styles = getStyles(this.props, this.context, this.state);

    var _props = this.props,
        childrenProp = _props.children,
        containerElement = _props.containerElement,
        style = _props.style,
        className = _props.className,
        labelStyle = _props.labelStyle,
        labelColor = _props.labelColor,
        backgroundColor = _props.backgroundColor,
        onRequestDelete = _props.onRequestDelete,
        other = (0, _objectWithoutProperties3.default)(_props, ['children', 'containerElement', 'style', 'className', 'labelStyle', 'labelColor', 'backgroundColor', 'onRequestDelete']);


    var deletable = this.props.onRequestDelete;
    var avatar = null;

    var deleteIcon = deletable ? _react2.default.createElement(_cancel2.default, {
      color: styles.deleteIcon.color,
      style: styles.deleteIcon,
      onTouchTap: this.handleTouchTapDeleteIcon,
      onMouseEnter: this.handleMouseEnterDeleteIcon,
      onMouseLeave: this.handleMouseLeaveDeleteIcon
    }) : null;

    var children = childrenProp;
    var childCount = _react2.default.Children.count(children);

    // If the first child is an avatar, extract it and style it
    if (childCount > 1) {
      children = _react2.default.Children.toArray(children);

      if (_react2.default.isValidElement(children[0]) && children[0].type.muiName === 'Avatar') {
        avatar = children.shift();

        avatar = _react2.default.cloneElement(avatar, {
          style: (0, _assign2.default)(styles.avatar, avatar.props.style),
          size: 32
        });
      }
    }

    return _react2.default.createElement(
      _EnhancedButton2.default,
      (0, _extends3.default)({}, other, buttonEventHandlers, {
        className: className,
        containerElement: containerElement,
        disableTouchRipple: true,
        disableFocusRipple: true,
        style: (0, _assign2.default)(styles.root, style)
      }),
      avatar,
      _react2.default.createElement(
        'span',
        { style: prepareStyles((0, _assign2.default)(styles.label, labelStyle)) },
        children
      ),
      deleteIcon
    );
  };

  return Chip;
}(_react.Component), _class.propTypes = {
  /**
   * Override the background color of the chip.
   */
  backgroundColor: _propTypes2.default.string,
  /**
   * Used to render elements inside the Chip.
   */
  children: _propTypes2.default.node,
  /**
   * CSS `className` of the root element.
   */
  className: _propTypes2.default.node,
  /**
   * The element to use as the container for the Chip. Either a string to
   * use a DOM element or a ReactElement.
   */
  containerElement: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  /**
   * Override the label color.
   */
  labelColor: _propTypes2.default.string,
  /**
   * Override the inline-styles of the label.
   */
  labelStyle: _propTypes2.default.object,
  /** @ignore */
  onBlur: _propTypes2.default.func,
  /** @ignore */
  onFocus: _propTypes2.default.func,
  /** @ignore */
  onKeyDown: _propTypes2.default.func,
  /** @ignore */
  onKeyboardFocus: _propTypes2.default.func,
  /** @ignore */
  onMouseDown: _propTypes2.default.func,
  /** @ignore */
  onMouseEnter: _propTypes2.default.func,
  /** @ignore */
  onMouseLeave: _propTypes2.default.func,
  /** @ignore */
  onMouseUp: _propTypes2.default.func,
  /**
   * Callback function fired when the delete icon is clicked. If set, the delete icon will be shown.
   * @param {object} event `touchTap` event targeting the element.
   */
  onRequestDelete: _propTypes2.default.func,
  /** @ignore */
  onTouchEnd: _propTypes2.default.func,
  /** @ignore */
  onTouchStart: _propTypes2.default.func,
  /**
   * Callback function fired when the `Chip` element is touch-tapped.
   *
   * @param {object} event TouchTap event targeting the element.
   */
  onTouchTap: _propTypes2.default.func,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
}, _class.defaultProps = {
  containerElement: 'div', // Firefox doesn't support nested buttons
  onBlur: function onBlur() {},
  onFocus: function onFocus() {},
  onKeyDown: function onKeyDown() {},
  onKeyboardFocus: function onKeyboardFocus() {},
  onMouseDown: function onMouseDown() {},
  onMouseEnter: function onMouseEnter() {},
  onMouseLeave: function onMouseLeave() {},
  onMouseUp: function onMouseUp() {},
  onTouchEnd: function onTouchEnd() {},
  onTouchStart: function onTouchStart() {}
}, _class.contextTypes = { muiTheme: _propTypes2.default.object.isRequired }, _temp2);
exports.default = Chip;

/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _autoPrefix = __webpack_require__(38);

var _autoPrefix2 = _interopRequireDefault(_autoPrefix);

var _transitions = __webpack_require__(11);

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

/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactEventListener = __webpack_require__(26);

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _keycode = __webpack_require__(22);

var _keycode2 = _interopRequireDefault(_keycode);

var _transitions = __webpack_require__(11);

var _transitions2 = _interopRequireDefault(_transitions);

var _CalendarActionButtons = __webpack_require__(328);

var _CalendarActionButtons2 = _interopRequireDefault(_CalendarActionButtons);

var _CalendarMonth = __webpack_require__(329);

var _CalendarMonth2 = _interopRequireDefault(_CalendarMonth);

var _CalendarYear = __webpack_require__(331);

var _CalendarYear2 = _interopRequireDefault(_CalendarYear);

var _CalendarToolbar = __webpack_require__(330);

var _CalendarToolbar2 = _interopRequireDefault(_CalendarToolbar);

var _DateDisplay = __webpack_require__(332);

var _DateDisplay2 = _interopRequireDefault(_DateDisplay);

var _SlideIn = __webpack_require__(116);

var _SlideIn2 = _interopRequireDefault(_SlideIn);

var _dateUtils = __webpack_require__(64);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var daysArray = [].concat(Array(7));

var Calendar = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(Calendar, _Component);

  function Calendar() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Calendar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      displayDate: undefined,
      displayMonthDay: true,
      selectedDate: undefined,
      transitionDirection: 'left',
      transitionEnter: true
    }, _this.handleTouchTapDay = function (event, date) {
      _this.setSelectedDate(date);
      if (_this.props.onTouchTapDay) _this.props.onTouchTapDay(event, date);
    }, _this.handleMonthChange = function (months) {
      _this.setState({
        transitionDirection: months >= 0 ? 'left' : 'right',
        displayDate: _this.props.utils.addMonths(_this.state.displayDate, months)
      });
    }, _this.handleTouchTapYear = function (event, year) {
      _this.setSelectedDate(_this.props.utils.setYear(_this.state.selectedDate, year), event);
      _this.handleTouchTapDateDisplayMonthDay();
    }, _this.handleTouchTapDateDisplayMonthDay = function () {
      _this.setState({
        displayMonthDay: true
      });
    }, _this.handleTouchTapDateDisplayYear = function () {
      _this.setState({
        displayMonthDay: false
      });
    }, _this.handleWindowKeyDown = function (event) {
      if (_this.props.open) {
        switch ((0, _keycode2.default)(event)) {
          case 'up':
            if (event.altKey && event.shiftKey) {
              _this.addSelectedYears(-1);
            } else if (event.shiftKey) {
              _this.addSelectedMonths(-1);
            } else {
              _this.addSelectedDays(-7);
            }
            break;

          case 'down':
            if (event.altKey && event.shiftKey) {
              _this.addSelectedYears(1);
            } else if (event.shiftKey) {
              _this.addSelectedMonths(1);
            } else {
              _this.addSelectedDays(7);
            }
            break;

          case 'right':
            if (event.altKey && event.shiftKey) {
              _this.addSelectedYears(1);
            } else if (event.shiftKey) {
              _this.addSelectedMonths(1);
            } else {
              _this.addSelectedDays(1);
            }
            break;

          case 'left':
            if (event.altKey && event.shiftKey) {
              _this.addSelectedYears(-1);
            } else if (event.shiftKey) {
              _this.addSelectedMonths(-1);
            } else {
              _this.addSelectedDays(-1);
            }
            break;
        }
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  Calendar.prototype.componentWillMount = function componentWillMount() {
    this.setState({
      displayDate: this.props.utils.getFirstDayOfMonth(this.props.initialDate),
      selectedDate: this.props.initialDate
    });
  };

  Calendar.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.initialDate !== this.props.initialDate) {
      var date = nextProps.initialDate || new Date();
      this.setState({
        displayDate: this.props.utils.getFirstDayOfMonth(date),
        selectedDate: date
      });
    }
  };

  Calendar.prototype.getMinDate = function getMinDate() {
    return this.props.minDate || this.props.utils.addYears(new Date(), -100);
  };

  Calendar.prototype.getMaxDate = function getMaxDate() {
    return this.props.maxDate || this.props.utils.addYears(new Date(), 100);
  };

  Calendar.prototype.getSelectedDate = function getSelectedDate() {
    return this.state.selectedDate;
  };

  Calendar.prototype.isSelectedDateDisabled = function isSelectedDateDisabled() {
    if (!this.state.displayMonthDay) {
      return false;
    }

    return this.refs.calendar.isSelectedDateDisabled();
  };

  Calendar.prototype.addSelectedDays = function addSelectedDays(days) {
    this.setSelectedDate(this.props.utils.addDays(this.state.selectedDate, days));
  };

  Calendar.prototype.addSelectedMonths = function addSelectedMonths(months) {
    this.setSelectedDate(this.props.utils.addMonths(this.state.selectedDate, months));
  };

  Calendar.prototype.addSelectedYears = function addSelectedYears(years) {
    this.setSelectedDate(this.props.utils.addYears(this.state.selectedDate, years));
  };

  Calendar.prototype.setDisplayDate = function setDisplayDate(date, newSelectedDate) {
    var newDisplayDate = this.props.utils.getFirstDayOfMonth(date);
    var direction = newDisplayDate > this.state.displayDate ? 'left' : 'right';

    if (newDisplayDate !== this.state.displayDate) {
      this.setState({
        displayDate: newDisplayDate,
        transitionDirection: direction,
        selectedDate: newSelectedDate || this.state.selectedDate
      });
    }
  };

  Calendar.prototype.setSelectedDate = function setSelectedDate(date) {
    var adjustedDate = date;
    var minDate = this.getMinDate();
    var maxDate = this.getMaxDate();
    if ((0, _dateUtils.isBeforeDate)(date, minDate)) {
      adjustedDate = minDate;
    } else if ((0, _dateUtils.isAfterDate)(date, maxDate)) {
      adjustedDate = maxDate;
    }

    var newDisplayDate = this.props.utils.getFirstDayOfMonth(adjustedDate);
    if (newDisplayDate !== this.state.displayDate) {
      this.setDisplayDate(newDisplayDate, adjustedDate);
    } else {
      this.setState({
        selectedDate: adjustedDate
      });
    }
  };

  Calendar.prototype.getToolbarInteractions = function getToolbarInteractions() {
    return {
      prevMonth: this.props.utils.monthDiff(this.state.displayDate, this.getMinDate()) > 0,
      nextMonth: this.props.utils.monthDiff(this.state.displayDate, this.getMaxDate()) < 0
    };
  };

  Calendar.prototype.yearSelector = function yearSelector() {
    if (!this.props.disableYearSelection) {
      return _react2.default.createElement(_CalendarYear2.default, {
        key: 'years',
        DateTimeFormat: this.props.DateTimeFormat,
        locale: this.props.locale,
        onTouchTapYear: this.handleTouchTapYear,
        selectedDate: this.state.selectedDate,
        minDate: this.getMinDate(),
        maxDate: this.getMaxDate(),
        utils: this.props.utils
      });
    }
  };

  Calendar.prototype.render = function render() {
    var prepareStyles = this.context.muiTheme.prepareStyles;
    var hideCalendarDate = this.props.hideCalendarDate;

    var toolbarInteractions = this.getToolbarInteractions();
    var isLandscape = this.props.mode === 'landscape';
    var calendarTextColor = this.context.muiTheme.datePicker.calendarTextColor;


    var styles = {
      root: {
        color: calendarTextColor,
        userSelect: 'none',
        width: !hideCalendarDate && isLandscape ? 479 : 310
      },
      calendar: {
        display: 'flex',
        flexDirection: 'column'
      },
      calendarContainer: {
        display: 'flex',
        alignContent: 'space-between',
        justifyContent: 'space-between',
        flexDirection: 'column',
        fontSize: 12,
        fontWeight: 400,
        padding: '0px 8px',
        transition: _transitions2.default.easeOut()
      },
      yearContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        height: 272,
        marginTop: 10,
        overflow: 'hidden',
        width: 310
      },
      weekTitle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontWeight: '500',
        height: 20,
        lineHeight: '15px',
        opacity: '0.5',
        textAlign: 'center'
      },
      weekTitleDay: {
        width: 42
      },
      transitionSlide: {
        height: 214
      }
    };

    var weekTitleDayStyle = prepareStyles(styles.weekTitleDay);

    var _props = this.props,
        cancelLabel = _props.cancelLabel,
        DateTimeFormat = _props.DateTimeFormat,
        firstDayOfWeek = _props.firstDayOfWeek,
        locale = _props.locale,
        okLabel = _props.okLabel,
        onTouchTapCancel = _props.onTouchTapCancel,
        onTouchTapOk = _props.onTouchTapOk,
        utils = _props.utils;


    return _react2.default.createElement(
      'div',
      { style: prepareStyles(styles.root) },
      _react2.default.createElement(_reactEventListener2.default, {
        target: 'window',
        onKeyDown: this.handleWindowKeyDown
      }),
      !hideCalendarDate && _react2.default.createElement(_DateDisplay2.default, {
        DateTimeFormat: DateTimeFormat,
        disableYearSelection: this.props.disableYearSelection,
        onTouchTapMonthDay: this.handleTouchTapDateDisplayMonthDay,
        onTouchTapYear: this.handleTouchTapDateDisplayYear,
        locale: locale,
        monthDaySelected: this.state.displayMonthDay,
        mode: this.props.mode,
        selectedDate: this.state.selectedDate
      }),
      _react2.default.createElement(
        'div',
        { style: prepareStyles(styles.calendar) },
        this.state.displayMonthDay && _react2.default.createElement(
          'div',
          { style: prepareStyles(styles.calendarContainer) },
          _react2.default.createElement(_CalendarToolbar2.default, {
            DateTimeFormat: DateTimeFormat,
            locale: locale,
            displayDate: this.state.displayDate,
            onMonthChange: this.handleMonthChange,
            prevMonth: toolbarInteractions.prevMonth,
            nextMonth: toolbarInteractions.nextMonth
          }),
          _react2.default.createElement(
            'div',
            { style: prepareStyles(styles.weekTitle) },
            daysArray.map(function (event, i) {
              return _react2.default.createElement(
                'span',
                { key: i, style: weekTitleDayStyle },
                (0, _dateUtils.localizedWeekday)(DateTimeFormat, locale, i, firstDayOfWeek)
              );
            })
          ),
          _react2.default.createElement(
            _SlideIn2.default,
            { direction: this.state.transitionDirection, style: styles.transitionSlide },
            _react2.default.createElement(_CalendarMonth2.default, {
              DateTimeFormat: DateTimeFormat,
              locale: locale,
              displayDate: this.state.displayDate,
              firstDayOfWeek: this.props.firstDayOfWeek,
              key: this.state.displayDate.toDateString(),
              minDate: this.getMinDate(),
              maxDate: this.getMaxDate(),
              onTouchTapDay: this.handleTouchTapDay,
              ref: 'calendar',
              selectedDate: this.state.selectedDate,
              shouldDisableDate: this.props.shouldDisableDate,
              utils: utils
            })
          )
        ),
        !this.state.displayMonthDay && _react2.default.createElement(
          'div',
          { style: prepareStyles(styles.yearContainer) },
          this.yearSelector()
        ),
        okLabel && _react2.default.createElement(_CalendarActionButtons2.default, {
          autoOk: this.props.autoOk,
          cancelLabel: cancelLabel,
          okLabel: okLabel,
          onTouchTapCancel: onTouchTapCancel,
          onTouchTapOk: onTouchTapOk
        })
      )
    );
  };

  return Calendar;
}(_react.Component), _class.propTypes = {
  DateTimeFormat: _propTypes2.default.func.isRequired,
  autoOk: _propTypes2.default.bool,
  cancelLabel: _propTypes2.default.node,
  disableYearSelection: _propTypes2.default.bool,
  firstDayOfWeek: _propTypes2.default.number,
  hideCalendarDate: _propTypes2.default.bool,
  initialDate: _propTypes2.default.object,
  locale: _propTypes2.default.string.isRequired,
  maxDate: _propTypes2.default.object,
  minDate: _propTypes2.default.object,
  mode: _propTypes2.default.oneOf(['portrait', 'landscape']),
  okLabel: _propTypes2.default.node,
  onTouchTapCancel: _propTypes2.default.func,
  onTouchTapDay: _propTypes2.default.func,
  onTouchTapOk: _propTypes2.default.func,
  open: _propTypes2.default.bool,
  shouldDisableDate: _propTypes2.default.func,
  utils: _propTypes2.default.object
}, _class.defaultProps = {
  DateTimeFormat: _dateUtils.dateTimeFormat,
  disableYearSelection: false,
  initialDate: new Date(),
  locale: 'en-US',
  utils: _dateUtils.defaultUtils
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = Calendar;

/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FlatButton = __webpack_require__(79);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CalendarActionButton = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(CalendarActionButton, _Component);

  function CalendarActionButton() {
    (0, _classCallCheck3.default)(this, CalendarActionButton);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  CalendarActionButton.prototype.render = function render() {
    var _props = this.props,
        cancelLabel = _props.cancelLabel,
        okLabel = _props.okLabel;


    var styles = {
      root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        margin: 0,
        maxHeight: 48,
        padding: 0
      },
      flatButtons: {
        fontsize: 14,
        margin: '4px 8px 8px 0px',
        maxHeight: 36,
        minWidth: 64,
        padding: 0
      }
    };

    return _react2.default.createElement(
      'div',
      { style: styles.root },
      _react2.default.createElement(_FlatButton2.default, {
        label: cancelLabel,
        onTouchTap: this.props.onTouchTapCancel,
        primary: true,
        style: styles.flatButtons
      }),
      !this.props.autoOk && _react2.default.createElement(_FlatButton2.default, {
        disabled: this.refs.calendar !== undefined && this.refs.calendar.isSelectedDateDisabled(),
        label: okLabel,
        onTouchTap: this.props.onTouchTapOk,
        primary: true,
        style: styles.flatButtons
      })
    );
  };

  return CalendarActionButton;
}(_react.Component), _class.propTypes = {
  autoOk: _propTypes2.default.bool,
  cancelLabel: _propTypes2.default.node,
  okLabel: _propTypes2.default.node,
  onTouchTapCancel: _propTypes2.default.func,
  onTouchTapOk: _propTypes2.default.func
}, _temp);
exports.default = CalendarActionButton;

/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _dateUtils = __webpack_require__(64);

var _DayButton = __webpack_require__(335);

var _DayButton2 = _interopRequireDefault(_DayButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    fontWeight: 400,
    height: 228,
    lineHeight: 2,
    position: 'relative',
    textAlign: 'center',
    MozPaddingStart: 0
  },
  week: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 34,
    marginBottom: 2
  }
};

var CalendarMonth = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(CalendarMonth, _Component);

  function CalendarMonth() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CalendarMonth);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleTouchTapDay = function (event, date) {
      if (_this.props.onTouchTapDay) {
        _this.props.onTouchTapDay(event, date);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  CalendarMonth.prototype.isSelectedDateDisabled = function isSelectedDateDisabled() {
    return this.selectedDateDisabled;
  };

  CalendarMonth.prototype.shouldDisableDate = function shouldDisableDate(day) {
    if (day === null) return false;
    var disabled = !(0, _dateUtils.isBetweenDates)(day, this.props.minDate, this.props.maxDate);
    if (!disabled && this.props.shouldDisableDate) disabled = this.props.shouldDisableDate(day);

    return disabled;
  };

  CalendarMonth.prototype.getWeekElements = function getWeekElements() {
    var _this2 = this;

    var weekArray = this.props.utils.getWeekArray(this.props.displayDate, this.props.firstDayOfWeek);

    return weekArray.map(function (week, i) {
      return _react2.default.createElement(
        'div',
        { key: i, style: styles.week },
        _this2.getDayElements(week, i)
      );
    }, this);
  };

  CalendarMonth.prototype.getDayElements = function getDayElements(week, i) {
    var _this3 = this;

    var _props = this.props,
        DateTimeFormat = _props.DateTimeFormat,
        locale = _props.locale,
        selectedDate = _props.selectedDate;


    return week.map(function (day, j) {
      var isSameDate = (0, _dateUtils.isEqualDate)(selectedDate, day);
      var disabled = _this3.shouldDisableDate(day);
      var selected = !disabled && isSameDate;

      if (isSameDate) {
        _this3.selectedDateDisabled = disabled;
      }

      return _react2.default.createElement(_DayButton2.default, {
        DateTimeFormat: DateTimeFormat,
        locale: locale,
        date: day,
        disabled: disabled,
        key: 'db' + (i + j),
        onTouchTap: _this3.handleTouchTapDay,
        selected: selected
      });
    }, this);
  };

  CalendarMonth.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      { style: styles.root },
      this.getWeekElements()
    );
  };

  return CalendarMonth;
}(_react.Component), _class.propTypes = {
  DateTimeFormat: _propTypes2.default.func.isRequired,
  autoOk: _propTypes2.default.bool,
  displayDate: _propTypes2.default.object.isRequired,
  firstDayOfWeek: _propTypes2.default.number,
  locale: _propTypes2.default.string.isRequired,
  maxDate: _propTypes2.default.object,
  minDate: _propTypes2.default.object,
  onTouchTapDay: _propTypes2.default.func,
  selectedDate: _propTypes2.default.object.isRequired,
  shouldDisableDate: _propTypes2.default.func,
  utils: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = CalendarMonth;

/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconButton = __webpack_require__(50);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _chevronLeft = __webpack_require__(400);

var _chevronLeft2 = _interopRequireDefault(_chevronLeft);

var _chevronRight = __webpack_require__(401);

var _chevronRight2 = _interopRequireDefault(_chevronRight);

var _SlideIn = __webpack_require__(116);

var _SlideIn2 = _interopRequireDefault(_SlideIn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'inherit',
    height: 48
  },
  titleDiv: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    width: '100%'
  },
  titleText: {
    height: 'inherit',
    paddingTop: 12
  }
};

var CalendarToolbar = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(CalendarToolbar, _Component);

  function CalendarToolbar() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CalendarToolbar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      transitionDirection: 'up'
    }, _this.handleTouchTapPrevMonth = function () {
      if (_this.props.onMonthChange) {
        _this.props.onMonthChange(-1);
      }
    }, _this.handleTouchTapNextMonth = function () {
      if (_this.props.onMonthChange) {
        _this.props.onMonthChange(1);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  CalendarToolbar.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.displayDate !== this.props.displayDate) {
      var direction = nextProps.displayDate > this.props.displayDate ? 'left' : 'right';
      this.setState({
        transitionDirection: direction
      });
    }
  };

  CalendarToolbar.prototype.render = function render() {
    var _props = this.props,
        DateTimeFormat = _props.DateTimeFormat,
        locale = _props.locale,
        displayDate = _props.displayDate;


    var dateTimeFormatted = new DateTimeFormat(locale, {
      month: 'long',
      year: 'numeric'
    }).format(displayDate);

    return _react2.default.createElement(
      'div',
      { style: styles.root },
      _react2.default.createElement(
        _IconButton2.default,
        {
          disabled: !this.props.prevMonth,
          onTouchTap: this.handleTouchTapPrevMonth
        },
        _react2.default.createElement(_chevronLeft2.default, null)
      ),
      _react2.default.createElement(
        _SlideIn2.default,
        {
          direction: this.state.transitionDirection,
          style: styles.titleDiv
        },
        _react2.default.createElement(
          'div',
          { key: dateTimeFormatted, style: styles.titleText },
          dateTimeFormatted
        )
      ),
      _react2.default.createElement(
        _IconButton2.default,
        {
          disabled: !this.props.nextMonth,
          onTouchTap: this.handleTouchTapNextMonth
        },
        _react2.default.createElement(_chevronRight2.default, null)
      )
    );
  };

  return CalendarToolbar;
}(_react.Component), _class.propTypes = {
  DateTimeFormat: _propTypes2.default.func.isRequired,
  displayDate: _propTypes2.default.object.isRequired,
  locale: _propTypes2.default.string.isRequired,
  nextMonth: _propTypes2.default.bool,
  onMonthChange: _propTypes2.default.func,
  prevMonth: _propTypes2.default.bool
}, _class.defaultProps = {
  nextMonth: true,
  prevMonth: true
}, _temp2);
exports.default = CalendarToolbar;

/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(14);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _YearButton = __webpack_require__(336);

var _YearButton2 = _interopRequireDefault(_YearButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CalendarYear = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(CalendarYear, _Component);

  function CalendarYear() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CalendarYear);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleTouchTapYear = function (event, year) {
      if (_this.props.onTouchTapYear) {
        _this.props.onTouchTapYear(event, year);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  CalendarYear.prototype.componentDidMount = function componentDidMount() {
    this.scrollToSelectedYear();
  };

  CalendarYear.prototype.componentDidUpdate = function componentDidUpdate() {
    this.scrollToSelectedYear();
  };

  CalendarYear.prototype.getYears = function getYears() {
    var _props = this.props,
        DateTimeFormat = _props.DateTimeFormat,
        locale = _props.locale,
        minDate = _props.minDate,
        maxDate = _props.maxDate,
        selectedDate = _props.selectedDate,
        utils = _props.utils;


    var minYear = utils.getYear(minDate);
    var maxYear = utils.getYear(maxDate);
    var years = [];

    for (var year = minYear; year <= maxYear; year++) {
      var selected = utils.getYear(selectedDate) === year;
      var selectedProps = {};
      if (selected) {
        selectedProps.ref = 'selectedYearButton';
      }

      var yearFormated = new DateTimeFormat(locale, {
        year: 'numeric'
      }).format(utils.setYear(selectedDate, year));

      var yearButton = _react2.default.createElement(
        _YearButton2.default,
        (0, _extends3.default)({
          key: 'yb' + year,
          onTouchTap: this.handleTouchTapYear,
          selected: selected,
          year: year,
          utils: utils
        }, selectedProps),
        yearFormated
      );

      years.push(yearButton);
    }

    return years;
  };

  CalendarYear.prototype.scrollToSelectedYear = function scrollToSelectedYear() {
    if (this.refs.selectedYearButton === undefined) {
      return;
    }

    var container = _reactDom2.default.findDOMNode(this);
    var yearButtonNode = _reactDom2.default.findDOMNode(this.refs.selectedYearButton);

    var containerHeight = container.clientHeight;
    var yearButtonNodeHeight = yearButtonNode.clientHeight || 32;

    var scrollYOffset = yearButtonNode.offsetTop + yearButtonNodeHeight / 2 - containerHeight / 2;
    container.scrollTop = scrollYOffset;
  };

  CalendarYear.prototype.render = function render() {
    var _context$muiTheme = this.context.muiTheme,
        prepareStyles = _context$muiTheme.prepareStyles,
        calendarYearBackgroundColor = _context$muiTheme.datePicker.calendarYearBackgroundColor;


    var styles = {
      root: {
        backgroundColor: calendarYearBackgroundColor,
        height: 'inherit',
        lineHeight: '35px',
        overflowX: 'hidden',
        overflowY: 'scroll',
        position: 'relative'
      },
      child: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '100%'
      }
    };

    return _react2.default.createElement(
      'div',
      { style: prepareStyles(styles.root) },
      _react2.default.createElement(
        'div',
        { style: prepareStyles(styles.child) },
        this.getYears()
      )
    );
  };

  return CalendarYear;
}(_react.Component), _class.propTypes = {
  DateTimeFormat: _propTypes2.default.func.isRequired,
  locale: _propTypes2.default.string.isRequired,
  maxDate: _propTypes2.default.object.isRequired,
  minDate: _propTypes2.default.object.isRequired,
  onTouchTapYear: _propTypes2.default.func,
  selectedDate: _propTypes2.default.object.isRequired,
  utils: _propTypes2.default.object.isRequired,
  wordings: _propTypes2.default.object
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = CalendarYear;

/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__(11);

var _transitions2 = _interopRequireDefault(_transitions);

var _SlideIn = __webpack_require__(116);

var _SlideIn2 = _interopRequireDefault(_SlideIn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context, state) {
  var datePicker = context.muiTheme.datePicker;
  var selectedYear = state.selectedYear;

  var isLandscape = props.mode === 'landscape';

  var styles = {
    root: {
      width: isLandscape ? 165 : '100%',
      height: isLandscape ? 330 : 'auto',
      float: isLandscape ? 'left' : 'none',
      fontWeight: 700,
      display: 'inline-block',
      backgroundColor: datePicker.selectColor,
      borderTopLeftRadius: 2,
      borderTopRightRadius: isLandscape ? 0 : 2,
      borderBottomLeftRadius: isLandscape ? 2 : 0,
      color: datePicker.textColor,
      padding: 20,
      boxSizing: 'border-box'
    },
    monthDay: {
      display: 'block',
      fontSize: 36,
      lineHeight: '36px',
      height: props.mode === 'landscape' ? '100%' : 38,
      opacity: selectedYear ? 0.7 : 1,
      transition: _transitions2.default.easeOut(),
      width: '100%',
      fontWeight: '500'
    },
    monthDayTitle: {
      cursor: !selectedYear ? 'default' : 'pointer',
      width: '100%',
      display: 'block'
    },
    year: {
      margin: 0,
      fontSize: 16,
      fontWeight: '500',
      lineHeight: '16px',
      height: 16,
      opacity: selectedYear ? 1 : 0.7,
      transition: _transitions2.default.easeOut(),
      marginBottom: 10
    },
    yearTitle: {
      cursor: props.disableYearSelection || selectedYear ? 'default' : 'pointer'
    }
  };

  return styles;
}

var DateDisplay = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(DateDisplay, _Component);

  function DateDisplay() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, DateDisplay);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      selectedYear: false,
      transitionDirection: 'up'
    }, _this.handleTouchTapMonthDay = function () {
      if (_this.props.onTouchTapMonthDay && _this.state.selectedYear) {
        _this.props.onTouchTapMonthDay();
      }

      _this.setState({ selectedYear: false });
    }, _this.handleTouchTapYear = function () {
      if (_this.props.onTouchTapYear && !_this.props.disableYearSelection && !_this.state.selectedYear) {
        _this.props.onTouchTapYear();
      }

      if (!_this.props.disableYearSelection) {
        _this.setState({ selectedYear: true });
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  DateDisplay.prototype.componentWillMount = function componentWillMount() {
    if (!this.props.monthDaySelected) {
      this.setState({ selectedYear: true });
    }
  };

  DateDisplay.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.selectedDate !== this.props.selectedDate) {
      var direction = nextProps.selectedDate > this.props.selectedDate ? 'up' : 'down';
      this.setState({
        transitionDirection: direction
      });
    }

    if (nextProps.monthDaySelected !== undefined) {
      this.setState({
        selectedYear: !nextProps.monthDaySelected
      });
    }
  };

  DateDisplay.prototype.render = function render() {
    var _props = this.props,
        DateTimeFormat = _props.DateTimeFormat,
        disableYearSelection = _props.disableYearSelection,
        locale = _props.locale,
        mode = _props.mode,
        monthDaySelected = _props.monthDaySelected,
        onTouchTapMonthDay = _props.onTouchTapMonthDay,
        onTouchTapYear = _props.onTouchTapYear,
        selectedDate = _props.selectedDate,
        style = _props.style,
        other = (0, _objectWithoutProperties3.default)(_props, ['DateTimeFormat', 'disableYearSelection', 'locale', 'mode', 'monthDaySelected', 'onTouchTapMonthDay', 'onTouchTapYear', 'selectedDate', 'style']);
    var prepareStyles = this.context.muiTheme.prepareStyles;

    var styles = getStyles(this.props, this.context, this.state);

    var year = new DateTimeFormat(locale, {
      year: 'numeric'
    }).format(selectedDate);

    var dateTime = new DateTimeFormat(locale, {
      month: 'short',
      weekday: 'short',
      day: '2-digit'
    }).format(selectedDate);

    return _react2.default.createElement(
      'div',
      (0, _extends3.default)({}, other, { style: prepareStyles(styles.root, style) }),
      _react2.default.createElement(
        _SlideIn2.default,
        { style: styles.year, direction: this.state.transitionDirection },
        _react2.default.createElement(
          'div',
          { key: year, style: styles.yearTitle, onTouchTap: this.handleTouchTapYear },
          year
        )
      ),
      _react2.default.createElement(
        _SlideIn2.default,
        { style: styles.monthDay, direction: this.state.transitionDirection },
        _react2.default.createElement(
          'div',
          {
            key: dateTime,
            onTouchTap: this.handleTouchTapMonthDay,
            style: styles.monthDayTitle
          },
          dateTime
        )
      )
    );
  };

  return DateDisplay;
}(_react.Component), _class.propTypes = {
  DateTimeFormat: _propTypes2.default.func.isRequired,
  disableYearSelection: _propTypes2.default.bool,
  locale: _propTypes2.default.string.isRequired,
  mode: _propTypes2.default.oneOf(['portrait', 'landscape']),
  monthDaySelected: _propTypes2.default.bool,
  onTouchTapMonthDay: _propTypes2.default.func,
  onTouchTapYear: _propTypes2.default.func,
  selectedDate: _propTypes2.default.object.isRequired,
  style: _propTypes2.default.object
}, _class.defaultProps = {
  disableYearSelection: false,
  monthDaySelected: true
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = DateDisplay;

/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _dateUtils = __webpack_require__(64);

var _DatePickerDialog = __webpack_require__(334);

var _DatePickerDialog2 = _interopRequireDefault(_DatePickerDialog);

var _TextField = __webpack_require__(63);

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DatePicker = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(DatePicker, _Component);

  function DatePicker() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, DatePicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      date: undefined
    }, _this.handleAccept = function (date) {
      if (!_this.isControlled()) {
        _this.setState({
          date: date
        });
      }
      if (_this.props.onChange) {
        _this.props.onChange(null, date);
      }
    }, _this.handleFocus = function (event) {
      event.target.blur();
      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
    }, _this.handleTouchTap = function (event) {
      if (_this.props.onTouchTap) {
        _this.props.onTouchTap(event);
      }

      if (!_this.props.disabled) {
        setTimeout(function () {
          _this.openDialog();
        }, 0);
      }
    }, _this.formatDate = function (date) {
      if (_this.props.locale) {
        var DateTimeFormat = _this.props.DateTimeFormat || _dateUtils.dateTimeFormat;
        return new DateTimeFormat(_this.props.locale, {
          day: 'numeric',
          month: 'numeric',
          year: 'numeric'
        }).format(date);
      } else {
        return (0, _dateUtils.formatIso)(date);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  DatePicker.prototype.componentWillMount = function componentWillMount() {
    this.setState({
      date: this.isControlled() ? this.getControlledDate() : this.props.defaultDate
    });
  };

  DatePicker.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.isControlled()) {
      var newDate = this.getControlledDate(nextProps);
      if (!(0, _dateUtils.isEqualDate)(this.state.date, newDate)) {
        this.setState({
          date: newDate
        });
      }
    }
  };

  DatePicker.prototype.getDate = function getDate() {
    return this.state.date;
  };

  /**
   * Open the date-picker dialog programmatically from a parent.
   */


  DatePicker.prototype.openDialog = function openDialog() {
    /**
     * if the date is not selected then set it to new date
     * (get the current system date while doing so)
     * else set it to the currently selected date
     */
    if (this.state.date !== undefined) {
      this.setState({
        dialogDate: this.getDate()
      }, this.refs.dialogWindow.show);
    } else {
      this.setState({
        dialogDate: new Date()
      }, this.refs.dialogWindow.show);
    }
  };

  /**
   * Alias for `openDialog()` for an api consistent with TextField.
   */


  DatePicker.prototype.focus = function focus() {
    this.openDialog();
  };

  DatePicker.prototype.isControlled = function isControlled() {
    return this.props.hasOwnProperty('value');
  };

  DatePicker.prototype.getControlledDate = function getControlledDate() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

    if (props.value instanceof Date) {
      return props.value;
    }
  };

  DatePicker.prototype.render = function render() {
    var _props = this.props,
        DateTimeFormat = _props.DateTimeFormat,
        autoOk = _props.autoOk,
        cancelLabel = _props.cancelLabel,
        className = _props.className,
        container = _props.container,
        defaultDate = _props.defaultDate,
        dialogContainerStyle = _props.dialogContainerStyle,
        disableYearSelection = _props.disableYearSelection,
        firstDayOfWeek = _props.firstDayOfWeek,
        formatDateProp = _props.formatDate,
        locale = _props.locale,
        maxDate = _props.maxDate,
        minDate = _props.minDate,
        mode = _props.mode,
        okLabel = _props.okLabel,
        onDismiss = _props.onDismiss,
        onFocus = _props.onFocus,
        onShow = _props.onShow,
        onTouchTap = _props.onTouchTap,
        shouldDisableDate = _props.shouldDisableDate,
        hideCalendarDate = _props.hideCalendarDate,
        style = _props.style,
        textFieldStyle = _props.textFieldStyle,
        utils = _props.utils,
        other = (0, _objectWithoutProperties3.default)(_props, ['DateTimeFormat', 'autoOk', 'cancelLabel', 'className', 'container', 'defaultDate', 'dialogContainerStyle', 'disableYearSelection', 'firstDayOfWeek', 'formatDate', 'locale', 'maxDate', 'minDate', 'mode', 'okLabel', 'onDismiss', 'onFocus', 'onShow', 'onTouchTap', 'shouldDisableDate', 'hideCalendarDate', 'style', 'textFieldStyle', 'utils']);
    var prepareStyles = this.context.muiTheme.prepareStyles;

    var formatDate = formatDateProp || this.formatDate;

    return _react2.default.createElement(
      'div',
      { className: className, style: prepareStyles((0, _assign2.default)({}, style)) },
      _react2.default.createElement(_TextField2.default, (0, _extends3.default)({}, other, {
        onFocus: this.handleFocus,
        onTouchTap: this.handleTouchTap,
        ref: 'input',
        style: textFieldStyle,
        value: this.state.date ? formatDate(this.state.date) : ''
      })),
      _react2.default.createElement(_DatePickerDialog2.default, {
        DateTimeFormat: DateTimeFormat,
        autoOk: autoOk,
        cancelLabel: cancelLabel,
        container: container,
        containerStyle: dialogContainerStyle,
        disableYearSelection: disableYearSelection,
        firstDayOfWeek: firstDayOfWeek,
        initialDate: this.state.dialogDate,
        locale: locale,
        maxDate: maxDate,
        minDate: minDate,
        mode: mode,
        okLabel: okLabel,
        onAccept: this.handleAccept,
        onShow: onShow,
        onDismiss: onDismiss,
        ref: 'dialogWindow',
        shouldDisableDate: shouldDisableDate,
        hideCalendarDate: hideCalendarDate,
        utils: utils
      })
    );
  };

  return DatePicker;
}(_react.Component), _class.propTypes = {
  /**
   * Constructor for date formatting for the specified `locale`.
   * The constructor must follow this specification: ECMAScript Internationalization API 1.0 (ECMA-402).
   * `Intl.DateTimeFormat` is supported by most modern browsers, see http://caniuse.com/#search=intl,
   * otherwise https://github.com/andyearnshaw/Intl.js is a good polyfill.
   *
   * By default, a built-in `DateTimeFormat` is used which supports the 'en-US' `locale`.
   */
  DateTimeFormat: _propTypes2.default.func,
  /**
   * If true, automatically accept and close the picker on select a date.
   */
  autoOk: _propTypes2.default.bool,
  /**
   * Override the default text of the 'Cancel' button.
   */
  cancelLabel: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * Used to control how the Date Picker will be displayed when the input field is focused.
   * `dialog` (default) displays the DatePicker as a dialog with a modal.
   * `inline` displays the DatePicker below the input field (similar to auto complete).
   */
  container: _propTypes2.default.oneOf(['dialog', 'inline']),
  /**
   * This is the initial date value of the component.
   * If either `value` or `valueLink` is provided they will override this
   * prop with `value` taking precedence.
   */
  defaultDate: _propTypes2.default.object,
  /**
   * Override the inline-styles of DatePickerDialog's Container element.
   */
  dialogContainerStyle: _propTypes2.default.object,
  /**
   * Disables the year selection in the date picker.
   */
  disableYearSelection: _propTypes2.default.bool,
  /**
   * Disables the DatePicker.
   */
  disabled: _propTypes2.default.bool,
  /**
   * Used to change the first day of week. It varies from
   * Saturday to Monday between different locales.
   * The allowed range is 0 (Sunday) to 6 (Saturday).
   * The default is `1`, Monday, as per ISO 8601.
   */
  firstDayOfWeek: _propTypes2.default.number,
  /**
   * This function is called to format the date displayed in the input field, and should return a string.
   * By default if no `locale` and `DateTimeFormat` is provided date objects are formatted to ISO 8601 YYYY-MM-DD.
   *
   * @param {object} date Date object to be formatted.
   * @returns {any} The formatted date.
   */
  formatDate: _propTypes2.default.func,
  /**
   * Hide date display
   */
  hideCalendarDate: _propTypes2.default.bool,
  /**
   * Locale used for formatting the `DatePicker` date strings. Other than for 'en-US', you
   * must provide a `DateTimeFormat` that supports the chosen `locale`.
   */
  locale: _propTypes2.default.string,
  /**
   * The ending of a range of valid dates. The range includes the endDate.
   * The default value is current date + 100 years.
   */
  maxDate: _propTypes2.default.object,
  /**
   * The beginning of a range of valid dates. The range includes the startDate.
   * The default value is current date - 100 years.
   */
  minDate: _propTypes2.default.object,
  /**
   * Tells the component to display the picker in portrait or landscape mode.
   */
  mode: _propTypes2.default.oneOf(['portrait', 'landscape']),
  /**
   * Override the default text of the 'OK' button.
   */
  okLabel: _propTypes2.default.node,
  /**
   * Callback function that is fired when the date value changes.
   *
   * @param {null} null Since there is no particular event associated with the change,
   * the first argument will always be null.
   * @param {object} date The new date.
   */
  onChange: _propTypes2.default.func,
  /**
   * Callback function that is fired when the Date Picker's dialog is dismissed.
   */
  onDismiss: _propTypes2.default.func,
  /**
   * Callback function that is fired when the Date Picker's `TextField` gains focus.
   */
  onFocus: _propTypes2.default.func,
  /**
   * Callback function that is fired when the Date Picker's dialog is shown.
   */
  onShow: _propTypes2.default.func,
  /**
   * Callback function that is fired when a touch tap event occurs on the Date Picker's `TextField`.
   *
   * @param {object} event TouchTap event targeting the `TextField`.
   */
  onTouchTap: _propTypes2.default.func,
  /**
   * Callback function used to determine if a day's entry should be disabled on the calendar.
   *
   * @param {object} day Date object of a day.
   * @returns {boolean} Indicates whether the day should be disabled.
   */
  shouldDisableDate: _propTypes2.default.func,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * Override the inline-styles of DatePicker's TextField element.
   */
  textFieldStyle: _propTypes2.default.object,
  /**
   * This object should contain methods needed to build the calendar system.
   *
   * Useful for building a custom calendar system. Refer to the
   * [source code](https://github.com/callemall/material-ui/blob/master/src/DatePicker/dateUtils.js)
   * and an [example implementation](https://github.com/alitaheri/material-ui-persian-date-picker-utils)
   * for more information.
   */
  utils: _propTypes2.default.object,
  /**
   * Sets the date for the Date Picker programmatically.
   */
  value: _propTypes2.default.object
}, _class.defaultProps = {
  autoOk: false,
  container: 'dialog',
  disabled: false,
  disableYearSelection: false,
  firstDayOfWeek: 1,
  hideCalendarDate: false,
  style: {}
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = DatePicker;

/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactEventListener = __webpack_require__(26);

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _keycode = __webpack_require__(22);

var _keycode2 = _interopRequireDefault(_keycode);

var _Calendar = __webpack_require__(327);

var _Calendar2 = _interopRequireDefault(_Calendar);

var _Dialog = __webpack_require__(103);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Popover = __webpack_require__(51);

var _Popover2 = _interopRequireDefault(_Popover);

var _PopoverAnimationVertical = __webpack_require__(111);

var _PopoverAnimationVertical2 = _interopRequireDefault(_PopoverAnimationVertical);

var _dateUtils = __webpack_require__(64);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DatePickerDialog = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(DatePickerDialog, _Component);

  function DatePickerDialog() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, DatePickerDialog);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      open: false
    }, _this.show = function () {
      if (_this.props.onShow && !_this.state.open) {
        _this.props.onShow();
      }

      _this.setState({
        open: true
      });
    }, _this.dismiss = function () {
      if (_this.props.onDismiss && _this.state.open) {
        _this.props.onDismiss();
      }

      _this.setState({
        open: false
      });
    }, _this.handleTouchTapDay = function () {
      if (_this.props.autoOk) {
        setTimeout(_this.handleTouchTapOk, 300);
      }
    }, _this.handleTouchTapCancel = function () {
      _this.dismiss();
    }, _this.handleRequestClose = function () {
      _this.dismiss();
    }, _this.handleTouchTapOk = function () {
      if (_this.props.onAccept && !_this.refs.calendar.isSelectedDateDisabled()) {
        _this.props.onAccept(_this.refs.calendar.getSelectedDate());
      }

      _this.dismiss();
    }, _this.handleWindowKeyUp = function (event) {
      switch ((0, _keycode2.default)(event)) {
        case 'enter':
          _this.handleTouchTapOk();
          break;
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  DatePickerDialog.prototype.render = function render() {
    var _props = this.props,
        DateTimeFormat = _props.DateTimeFormat,
        autoOk = _props.autoOk,
        cancelLabel = _props.cancelLabel,
        container = _props.container,
        containerStyle = _props.containerStyle,
        disableYearSelection = _props.disableYearSelection,
        initialDate = _props.initialDate,
        firstDayOfWeek = _props.firstDayOfWeek,
        locale = _props.locale,
        maxDate = _props.maxDate,
        minDate = _props.minDate,
        mode = _props.mode,
        okLabel = _props.okLabel,
        onAccept = _props.onAccept,
        onDismiss = _props.onDismiss,
        onShow = _props.onShow,
        shouldDisableDate = _props.shouldDisableDate,
        hideCalendarDate = _props.hideCalendarDate,
        style = _props.style,
        animation = _props.animation,
        utils = _props.utils,
        other = (0, _objectWithoutProperties3.default)(_props, ['DateTimeFormat', 'autoOk', 'cancelLabel', 'container', 'containerStyle', 'disableYearSelection', 'initialDate', 'firstDayOfWeek', 'locale', 'maxDate', 'minDate', 'mode', 'okLabel', 'onAccept', 'onDismiss', 'onShow', 'shouldDisableDate', 'hideCalendarDate', 'style', 'animation', 'utils']);
    var open = this.state.open;


    var styles = {
      dialogContent: {
        width: !hideCalendarDate && mode === 'landscape' ? 479 : 310
      },
      dialogBodyContent: {
        padding: 0,
        minHeight: hideCalendarDate || mode === 'landscape' ? 330 : 434,
        minWidth: hideCalendarDate || mode !== 'landscape' ? 310 : 479
      }
    };

    var Container = container === 'inline' ? _Popover2.default : _Dialog2.default;

    return _react2.default.createElement(
      'div',
      (0, _extends3.default)({}, other, { ref: 'root' }),
      _react2.default.createElement(
        Container,
        {
          anchorEl: this.refs.root // For Popover
          , animation: animation || _PopoverAnimationVertical2.default // For Popover
          , bodyStyle: styles.dialogBodyContent,
          contentStyle: styles.dialogContent,
          ref: 'dialog',
          repositionOnUpdate: true,
          open: open,
          onRequestClose: this.handleRequestClose,
          style: (0, _assign2.default)(styles.dialogBodyContent, containerStyle)
        },
        _react2.default.createElement(_reactEventListener2.default, {
          target: 'window',
          onKeyUp: this.handleWindowKeyUp
        }),
        _react2.default.createElement(_Calendar2.default, {
          autoOk: autoOk,
          DateTimeFormat: DateTimeFormat,
          cancelLabel: cancelLabel,
          disableYearSelection: disableYearSelection,
          firstDayOfWeek: firstDayOfWeek,
          initialDate: initialDate,
          locale: locale,
          onTouchTapDay: this.handleTouchTapDay,
          maxDate: maxDate,
          minDate: minDate,
          mode: mode,
          open: open,
          ref: 'calendar',
          onTouchTapCancel: this.handleTouchTapCancel,
          onTouchTapOk: this.handleTouchTapOk,
          okLabel: okLabel,
          shouldDisableDate: shouldDisableDate,
          hideCalendarDate: hideCalendarDate,
          utils: utils
        })
      )
    );
  };

  return DatePickerDialog;
}(_react.Component), _class.propTypes = {
  DateTimeFormat: _propTypes2.default.func,
  animation: _propTypes2.default.func,
  autoOk: _propTypes2.default.bool,
  cancelLabel: _propTypes2.default.node,
  container: _propTypes2.default.oneOf(['dialog', 'inline']),
  containerStyle: _propTypes2.default.object,
  disableYearSelection: _propTypes2.default.bool,
  firstDayOfWeek: _propTypes2.default.number,
  hideCalendarDate: _propTypes2.default.bool,
  initialDate: _propTypes2.default.object,
  locale: _propTypes2.default.string,
  maxDate: _propTypes2.default.object,
  minDate: _propTypes2.default.object,
  mode: _propTypes2.default.oneOf(['portrait', 'landscape']),
  okLabel: _propTypes2.default.node,
  onAccept: _propTypes2.default.func,
  onDismiss: _propTypes2.default.func,
  onShow: _propTypes2.default.func,
  open: _propTypes2.default.bool,
  shouldDisableDate: _propTypes2.default.func,
  style: _propTypes2.default.object,
  utils: _propTypes2.default.object
}, _class.defaultProps = {
  DateTimeFormat: _dateUtils.dateTimeFormat,
  cancelLabel: 'Cancel',
  container: 'dialog',
  locale: 'en-US',
  okLabel: 'OK'
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = DatePickerDialog;

/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__(11);

var _transitions2 = _interopRequireDefault(_transitions);

var _dateUtils = __webpack_require__(64);

var _EnhancedButton = __webpack_require__(27);

var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context, state) {
  var date = props.date,
      disabled = props.disabled,
      selected = props.selected;
  var hover = state.hover;
  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      datePicker = _context$muiTheme.datePicker;


  var labelColor = baseTheme.palette.textColor;
  var buttonStateOpacity = 0;
  var buttonStateTransform = 'scale(0)';

  if (hover || selected) {
    labelColor = datePicker.selectTextColor;
    buttonStateOpacity = selected ? 1 : 0.6;
    buttonStateTransform = 'scale(1)';
  } else if ((0, _dateUtils.isEqualDate)(date, new Date())) {
    labelColor = datePicker.color;
  }

  return {
    root: {
      boxSizing: 'border-box',
      fontWeight: '400',
      opacity: disabled && '0.4',
      padding: '4px 0px',
      position: 'relative',
      WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
      width: 42
    },
    label: {
      color: labelColor,
      fontWeight: '400',
      position: 'relative'
    },
    buttonState: {
      backgroundColor: datePicker.selectColor,
      borderRadius: '50%',
      height: 34,
      left: 4,
      opacity: buttonStateOpacity,
      position: 'absolute',
      top: 0,
      transform: buttonStateTransform,
      transition: _transitions2.default.easeOut(),
      width: 34
    }
  };
}

var DayButton = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(DayButton, _Component);

  function DayButton() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, DayButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      hover: false
    }, _this.handleMouseEnter = function () {
      if (!_this.props.disabled) {
        _this.setState({ hover: true });
      }
    }, _this.handleMouseLeave = function () {
      if (!_this.props.disabled) {
        _this.setState({ hover: false });
      }
    }, _this.handleTouchTap = function (event) {
      if (!_this.props.disabled && _this.props.onTouchTap) {
        _this.props.onTouchTap(event, _this.props.date);
      }
    }, _this.handleKeyboardFocus = function (event, keyboardFocused) {
      if (!_this.props.disabled && _this.props.onKeyboardFocus) {
        _this.props.onKeyboardFocus(event, keyboardFocused, _this.props.date);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  DayButton.prototype.render = function render() {
    var _props = this.props,
        DateTimeFormat = _props.DateTimeFormat,
        date = _props.date,
        disabled = _props.disabled,
        locale = _props.locale,
        onTouchTap = _props.onTouchTap,
        selected = _props.selected,
        other = (0, _objectWithoutProperties3.default)(_props, ['DateTimeFormat', 'date', 'disabled', 'locale', 'onTouchTap', 'selected']);
    var prepareStyles = this.context.muiTheme.prepareStyles;

    var styles = getStyles(this.props, this.context, this.state);

    return date ? _react2.default.createElement(
      _EnhancedButton2.default,
      (0, _extends3.default)({}, other, {
        disabled: disabled,
        disableFocusRipple: true,
        disableTouchRipple: true,
        onKeyboardFocus: this.handleKeyboardFocus,
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        onTouchTap: this.handleTouchTap,
        style: styles.root
      }),
      _react2.default.createElement('div', { style: prepareStyles(styles.buttonState) }),
      _react2.default.createElement(
        'span',
        { style: prepareStyles(styles.label) },
        new DateTimeFormat(locale, {
          day: 'numeric'
        }).format(date)
      )
    ) : _react2.default.createElement('span', { style: prepareStyles(styles.root) });
  };

  return DayButton;
}(_react.Component), _class.propTypes = {
  DateTimeFormat: _propTypes2.default.func.isRequired,
  date: _propTypes2.default.object,
  disabled: _propTypes2.default.bool,
  locale: _propTypes2.default.string.isRequired,
  onKeyboardFocus: _propTypes2.default.func,
  onTouchTap: _propTypes2.default.func,
  selected: _propTypes2.default.bool
}, _class.defaultProps = {
  selected: false,
  disabled: false
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = DayButton;

/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _EnhancedButton = __webpack_require__(27);

var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context, state) {
  var selected = props.selected,
      year = props.year,
      utils = props.utils;
  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      datePicker = _context$muiTheme.datePicker;
  var hover = state.hover;


  return {
    root: {
      boxSizing: 'border-box',
      color: year === utils.getYear(new Date()) && datePicker.color,
      display: 'block',
      fontSize: 14,
      margin: '0 auto',
      position: 'relative',
      textAlign: 'center',
      lineHeight: 'inherit',
      WebkitTapHighlightColor: 'rgba(0,0,0,0)' },
    label: {
      alignSelf: 'center',
      color: hover || selected ? datePicker.color : baseTheme.palette.textColor,
      fontSize: selected ? 26 : 17,
      fontWeight: hover ? 450 : selected ? 500 : 400,
      position: 'relative',
      top: -1
    }
  };
}

var YearButton = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(YearButton, _Component);

  function YearButton() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, YearButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      hover: false
    }, _this.handleMouseEnter = function () {
      _this.setState({ hover: true });
    }, _this.handleMouseLeave = function () {
      _this.setState({ hover: false });
    }, _this.handleTouchTap = function (event) {
      if (_this.props.onTouchTap) {
        _this.props.onTouchTap(event, _this.props.year);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  YearButton.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        className = _props.className,
        onTouchTap = _props.onTouchTap,
        selected = _props.selected,
        year = _props.year,
        utils = _props.utils,
        other = (0, _objectWithoutProperties3.default)(_props, ['children', 'className', 'onTouchTap', 'selected', 'year', 'utils']);
    var prepareStyles = this.context.muiTheme.prepareStyles;

    var styles = getStyles(this.props, this.context, this.state);

    return _react2.default.createElement(
      _EnhancedButton2.default,
      (0, _extends3.default)({}, other, {
        disableFocusRipple: true,
        disableTouchRipple: true,
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        onTouchTap: this.handleTouchTap,
        style: styles.root
      }),
      _react2.default.createElement(
        'span',
        { style: prepareStyles(styles.label) },
        children
      )
    );
  };

  return YearButton;
}(_react.Component), _class.propTypes = {
  children: _propTypes2.default.node.isRequired,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  onTouchTap: _propTypes2.default.func,
  selected: _propTypes2.default.bool,
  utils: _propTypes2.default.object.isRequired,
  year: _propTypes2.default.number.isRequired
}, _class.defaultProps = {
  selected: false
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = YearButton;

/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2, _class2, _temp4, _class3, _temp6;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(14);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactEventListener = __webpack_require__(26);

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _keycode = __webpack_require__(22);

var _keycode2 = _interopRequireDefault(_keycode);

var _transitions = __webpack_require__(11);

var _transitions2 = _interopRequireDefault(_transitions);

var _Overlay = __webpack_require__(188);

var _Overlay2 = _interopRequireDefault(_Overlay);

var _RenderToLayer = __webpack_require__(115);

var _RenderToLayer2 = _interopRequireDefault(_RenderToLayer);

var _Paper = __webpack_require__(21);

var _Paper2 = _interopRequireDefault(_Paper);

var _TransitionGroup = __webpack_require__(46);

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TransitionItem = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(TransitionItem, _Component);

  function TransitionItem() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TransitionItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      style: {}
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  TransitionItem.prototype.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.enterTimeout);
    clearTimeout(this.leaveTimeout);
  };

  TransitionItem.prototype.componentWillEnter = function componentWillEnter(callback) {
    this.componentWillAppear(callback);
  };

  TransitionItem.prototype.componentWillAppear = function componentWillAppear(callback) {
    var spacing = this.context.muiTheme.baseTheme.spacing;

    this.setState({
      style: {
        opacity: 1,
        transform: 'translate(0, ' + spacing.desktopKeylineIncrement + 'px)'
      }
    });

    this.enterTimeout = setTimeout(callback, 450); // matches transition duration
  };

  TransitionItem.prototype.componentWillLeave = function componentWillLeave(callback) {
    this.setState({
      style: {
        opacity: 0,
        transform: 'translate(0, 0)'
      }
    });

    this.leaveTimeout = setTimeout(callback, 450); // matches transition duration
  };

  TransitionItem.prototype.render = function render() {
    var _props = this.props,
        style = _props.style,
        children = _props.children,
        other = (0, _objectWithoutProperties3.default)(_props, ['style', 'children']);
    var prepareStyles = this.context.muiTheme.prepareStyles;


    return _react2.default.createElement(
      'div',
      (0, _extends3.default)({}, other, { style: prepareStyles((0, _assign2.default)({}, this.state.style, style)) }),
      children
    );
  };

  return TransitionItem;
}(_react.Component), _class.propTypes = {
  children: _propTypes2.default.node,
  style: _propTypes2.default.object
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);


function getStyles(props, context) {
  var autoScrollBodyContent = props.autoScrollBodyContent,
      open = props.open;
  var _context$muiTheme = context.muiTheme,
      _context$muiTheme$bas = _context$muiTheme.baseTheme,
      spacing = _context$muiTheme$bas.spacing,
      palette = _context$muiTheme$bas.palette,
      dialog = _context$muiTheme.dialog,
      zIndex = _context$muiTheme.zIndex;


  var gutter = spacing.desktopGutter;
  var borderScroll = '1px solid ' + palette.borderColor;

  return {
    root: {
      position: 'fixed',
      boxSizing: 'border-box',
      WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
      zIndex: zIndex.dialog,
      top: 0,
      left: open ? 0 : -10000,
      width: '100%',
      height: '100%',
      transition: open ? _transitions2.default.easeOut('0ms', 'left', '0ms') : _transitions2.default.easeOut('0ms', 'left', '450ms')
    },
    content: {
      boxSizing: 'border-box',
      WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
      transition: _transitions2.default.easeOut(),
      position: 'relative',
      width: '75%',
      maxWidth: spacing.desktopKeylineIncrement * 12,
      margin: '0 auto',
      zIndex: zIndex.dialog
    },
    actionsContainer: {
      boxSizing: 'border-box',
      WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
      padding: 8,
      width: '100%',
      textAlign: 'right',
      marginTop: autoScrollBodyContent ? -1 : 0
    },
    overlay: {
      zIndex: zIndex.dialogOverlay
    },
    title: {
      margin: 0,
      padding: gutter + 'px ' + gutter + 'px 20px ' + gutter + 'px',
      color: palette.textColor,
      fontSize: dialog.titleFontSize,
      lineHeight: '32px',
      fontWeight: 400,
      marginBottom: autoScrollBodyContent ? -1 : 0
    },
    body: {
      fontSize: dialog.bodyFontSize,
      color: dialog.bodyColor,
      padding: (props.title ? 0 : gutter) + 'px ' + gutter + 'px ' + gutter + 'px',
      boxSizing: 'border-box',
      overflowY: autoScrollBodyContent ? 'auto' : 'hidden',
      borderTop: autoScrollBodyContent ? borderScroll : 'none',
      borderBottom: autoScrollBodyContent ? borderScroll : 'none'
    }
  };
}

var DialogInline = (_temp4 = _class2 = function (_Component2) {
  (0, _inherits3.default)(DialogInline, _Component2);

  function DialogInline() {
    var _temp3, _this2, _ret2;

    (0, _classCallCheck3.default)(this, DialogInline);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp3 = (_this2 = (0, _possibleConstructorReturn3.default)(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.handleTouchTapOverlay = function () {
      _this2.requestClose(false);
    }, _this2.handleKeyUp = function (event) {
      if ((0, _keycode2.default)(event) === 'esc') {
        _this2.requestClose(false);
      }
    }, _this2.handleResize = function () {
      _this2.positionDialog();
    }, _temp3), (0, _possibleConstructorReturn3.default)(_this2, _ret2);
  }

  DialogInline.prototype.componentDidMount = function componentDidMount() {
    this.positionDialog();
  };

  DialogInline.prototype.componentDidUpdate = function componentDidUpdate() {
    this.positionDialog();
  };

  DialogInline.prototype.positionDialog = function positionDialog() {
    var _props2 = this.props,
        actions = _props2.actions,
        autoDetectWindowHeight = _props2.autoDetectWindowHeight,
        autoScrollBodyContent = _props2.autoScrollBodyContent,
        bodyStyle = _props2.bodyStyle,
        open = _props2.open,
        repositionOnUpdate = _props2.repositionOnUpdate,
        title = _props2.title;


    if (!open) {
      return;
    }

    var clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    var container = _reactDom2.default.findDOMNode(this);
    var dialogWindow = _reactDom2.default.findDOMNode(this.refs.dialogWindow);
    var dialogContent = _reactDom2.default.findDOMNode(this.refs.dialogContent);
    var minPaddingTop = 16;

    // Reset the height in case the window was resized.
    dialogWindow.style.height = '';
    dialogContent.style.height = '';

    var dialogWindowHeight = dialogWindow.offsetHeight;
    var paddingTop = (clientHeight - dialogWindowHeight) / 2 - 64;
    if (paddingTop < minPaddingTop) paddingTop = minPaddingTop;

    // Vertically center the dialog window, but make sure it doesn't
    // transition to that position.
    if (repositionOnUpdate || !container.style.paddingTop) {
      container.style.paddingTop = paddingTop + 'px';
    }

    // Force a height if the dialog is taller than clientHeight
    if (autoDetectWindowHeight || autoScrollBodyContent) {
      var styles = getStyles(this.props, this.context);
      styles.body = (0, _assign2.default)(styles.body, bodyStyle);
      var maxDialogContentHeight = clientHeight - 2 * 64;

      if (title) maxDialogContentHeight -= dialogContent.previousSibling.offsetHeight;

      if (_react2.default.Children.count(actions)) {
        maxDialogContentHeight -= dialogContent.nextSibling.offsetHeight;
      }

      dialogContent.style.maxHeight = maxDialogContentHeight + 'px';
      if (maxDialogContentHeight > dialogWindowHeight) {
        dialogContent.style.borderBottom = 'none';
        dialogContent.style.borderTop = 'none';
      }
    }
  };

  DialogInline.prototype.requestClose = function requestClose(buttonClicked) {
    if (!buttonClicked && this.props.modal) {
      return;
    }

    if (this.props.onRequestClose) {
      this.props.onRequestClose(!!buttonClicked);
    }
  };

  DialogInline.prototype.render = function render() {
    var _props3 = this.props,
        actions = _props3.actions,
        actionsContainerClassName = _props3.actionsContainerClassName,
        actionsContainerStyle = _props3.actionsContainerStyle,
        bodyClassName = _props3.bodyClassName,
        bodyStyle = _props3.bodyStyle,
        children = _props3.children,
        className = _props3.className,
        contentClassName = _props3.contentClassName,
        contentStyle = _props3.contentStyle,
        overlayClassName = _props3.overlayClassName,
        overlayStyle = _props3.overlayStyle,
        open = _props3.open,
        titleClassName = _props3.titleClassName,
        titleStyle = _props3.titleStyle,
        title = _props3.title,
        style = _props3.style;
    var prepareStyles = this.context.muiTheme.prepareStyles;

    var styles = getStyles(this.props, this.context);

    styles.root = (0, _assign2.default)(styles.root, style);
    styles.content = (0, _assign2.default)(styles.content, contentStyle);
    styles.body = (0, _assign2.default)(styles.body, bodyStyle);
    styles.actionsContainer = (0, _assign2.default)(styles.actionsContainer, actionsContainerStyle);
    styles.overlay = (0, _assign2.default)(styles.overlay, overlayStyle);
    styles.title = (0, _assign2.default)(styles.title, titleStyle);

    var actionsContainer = _react2.default.Children.count(actions) > 0 && _react2.default.createElement(
      'div',
      { className: actionsContainerClassName, style: prepareStyles(styles.actionsContainer) },
      _react2.default.Children.toArray(actions)
    );

    var titleElement = title;
    if (_react2.default.isValidElement(title)) {
      titleElement = _react2.default.cloneElement(title, {
        className: title.props.className || titleClassName,
        style: prepareStyles((0, _assign2.default)(styles.title, title.props.style))
      });
    } else if (typeof title === 'string') {
      titleElement = _react2.default.createElement(
        'h3',
        { className: titleClassName, style: prepareStyles(styles.title) },
        title
      );
    }

    return _react2.default.createElement(
      'div',
      { className: className, style: prepareStyles(styles.root) },
      open && _react2.default.createElement(_reactEventListener2.default, {
        target: 'window',
        onKeyUp: this.handleKeyUp,
        onResize: this.handleResize
      }),
      _react2.default.createElement(
        _TransitionGroup2.default,
        {
          component: 'div',
          ref: 'dialogWindow',
          transitionAppear: true,
          transitionAppearTimeout: 450,
          transitionEnter: true,
          transitionEnterTimeout: 450
        },
        open && _react2.default.createElement(
          TransitionItem,
          {
            className: contentClassName,
            style: styles.content
          },
          _react2.default.createElement(
            _Paper2.default,
            { zDepth: 4 },
            titleElement,
            _react2.default.createElement(
              'div',
              {
                ref: 'dialogContent',
                className: bodyClassName,
                style: prepareStyles(styles.body)
              },
              children
            ),
            actionsContainer
          )
        )
      ),
      _react2.default.createElement(_Overlay2.default, {
        show: open,
        className: overlayClassName,
        style: styles.overlay,
        onTouchTap: this.handleTouchTapOverlay
      })
    );
  };

  return DialogInline;
}(_react.Component), _class2.propTypes = {
  actions: _propTypes2.default.node,
  actionsContainerClassName: _propTypes2.default.string,
  actionsContainerStyle: _propTypes2.default.object,
  autoDetectWindowHeight: _propTypes2.default.bool,
  autoScrollBodyContent: _propTypes2.default.bool,
  bodyClassName: _propTypes2.default.string,
  bodyStyle: _propTypes2.default.object,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  contentClassName: _propTypes2.default.string,
  contentStyle: _propTypes2.default.object,
  modal: _propTypes2.default.bool,
  onRequestClose: _propTypes2.default.func,
  open: _propTypes2.default.bool.isRequired,
  overlayClassName: _propTypes2.default.string,
  overlayStyle: _propTypes2.default.object,
  repositionOnUpdate: _propTypes2.default.bool,
  style: _propTypes2.default.object,
  title: _propTypes2.default.node,
  titleClassName: _propTypes2.default.string,
  titleStyle: _propTypes2.default.object
}, _class2.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp4);
var Dialog = (_temp6 = _class3 = function (_Component3) {
  (0, _inherits3.default)(Dialog, _Component3);

  function Dialog() {
    var _temp5, _this3, _ret3;

    (0, _classCallCheck3.default)(this, Dialog);

    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return _ret3 = (_temp5 = (_this3 = (0, _possibleConstructorReturn3.default)(this, _Component3.call.apply(_Component3, [this].concat(args))), _this3), _this3.renderLayer = function () {
      return _react2.default.createElement(DialogInline, _this3.props);
    }, _temp5), (0, _possibleConstructorReturn3.default)(_this3, _ret3);
  }

  Dialog.prototype.render = function render() {
    return _react2.default.createElement(_RenderToLayer2.default, { render: this.renderLayer, open: true, useLayerForClickAway: false });
  };

  return Dialog;
}(_react.Component), _class3.propTypes = {
  /**
   * Action buttons to display below the Dialog content (`children`).
   * This property accepts either a React element, or an array of React elements.
   */
  actions: _propTypes2.default.node,
  /**
   * The `className` to add to the actions container's root element.
   */
  actionsContainerClassName: _propTypes2.default.string,
  /**
   * Overrides the inline-styles of the actions container's root element.
   */
  actionsContainerStyle: _propTypes2.default.object,
  /**
   * If set to true, the height of the `Dialog` will be auto detected. A max height
   * will be enforced so that the content does not extend beyond the viewport.
   */
  autoDetectWindowHeight: _propTypes2.default.bool,
  /**
   * If set to true, the body content of the `Dialog` will be scrollable.
   */
  autoScrollBodyContent: _propTypes2.default.bool,
  /**
   * The `className` to add to the content's root element under the title.
   */
  bodyClassName: _propTypes2.default.string,
  /**
   * Overrides the inline-styles of the content's root element under the title.
   */
  bodyStyle: _propTypes2.default.object,
  /**
   * The contents of the `Dialog`.
   */
  children: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * The `className` to add to the content container.
   */
  contentClassName: _propTypes2.default.string,
  /**
   * Overrides the inline-styles of the content container.
   */
  contentStyle: _propTypes2.default.object,
  /**
   * Force the user to use one of the actions in the `Dialog`.
   * Clicking outside the `Dialog` will not trigger the `onRequestClose`.
   */
  modal: _propTypes2.default.bool,
  /**
   * Fired when the `Dialog` is requested to be closed by a click outside the `Dialog` or on the buttons.
   *
   * @param {bool} buttonClicked Determines whether a button click triggered this request.
   */
  onRequestClose: _propTypes2.default.func,
  /**
   * Controls whether the Dialog is opened or not.
   */
  open: _propTypes2.default.bool.isRequired,
  /**
   * The `className` to add to the `Overlay` component that is rendered behind the `Dialog`.
   */
  overlayClassName: _propTypes2.default.string,
  /**
   * Overrides the inline-styles of the `Overlay` component that is rendered behind the `Dialog`.
   */
  overlayStyle: _propTypes2.default.object,
  /**
   * Determines whether the `Dialog` should be repositioned when it's contents are updated.
   */
  repositionOnUpdate: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * The title to display on the `Dialog`. Could be number, string, element or an array containing these types.
   */
  title: _propTypes2.default.node,
  /**
   * The `className` to add to the title's root container element.
   */
  titleClassName: _propTypes2.default.string,
  /**
   * Overrides the inline-styles of the title's root container element.
   */
  titleStyle: _propTypes2.default.object
}, _class3.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _class3.defaultProps = {
  autoDetectWindowHeight: true,
  autoScrollBodyContent: false,
  modal: false,
  repositionOnUpdate: true
}, _temp6);
exports.default = Dialog;

/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Divider = function Divider(props, context) {
  var inset = props.inset,
      style = props.style,
      other = (0, _objectWithoutProperties3.default)(props, ['inset', 'style']);
  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      prepareStyles = _context$muiTheme.prepareStyles;


  var styles = {
    root: {
      margin: 0,
      marginTop: -1,
      marginLeft: inset ? 72 : 0,
      height: 1,
      border: 'none',
      backgroundColor: baseTheme.palette.borderColor
    }
  };

  return _react2.default.createElement('hr', (0, _extends3.default)({}, other, { style: prepareStyles((0, _assign2.default)(styles.root, style)) }));
};

Divider.muiName = 'Divider';

Divider.propTypes = {
  /**
   * If true, the `Divider` will be indented.
   */
  inset: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
};

Divider.defaultProps = {
  inset: false
};

Divider.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};

exports.default = Divider;

/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(14);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactEventListener = __webpack_require__(26);

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _keycode = __webpack_require__(22);

var _keycode2 = _interopRequireDefault(_keycode);

var _autoPrefix = __webpack_require__(38);

var _autoPrefix2 = _interopRequireDefault(_autoPrefix);

var _transitions = __webpack_require__(11);

var _transitions2 = _interopRequireDefault(_transitions);

var _Overlay = __webpack_require__(188);

var _Overlay2 = _interopRequireDefault(_Overlay);

var _Paper = __webpack_require__(21);

var _Paper2 = _interopRequireDefault(_Paper);

var _propTypes3 = __webpack_require__(20);

var _propTypes4 = _interopRequireDefault(_propTypes3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var openNavEventHandler = null;

var Drawer = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(Drawer, _Component);

  function Drawer() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Drawer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleTouchTapOverlay = function (event) {
      event.preventDefault();
      _this.close('clickaway');
    }, _this.handleKeyUp = function (event) {
      if (_this.state.open && !_this.props.docked && (0, _keycode2.default)(event) === 'esc') {
        _this.close('escape');
      }
    }, _this.onBodyTouchStart = function (event) {
      var swipeAreaWidth = _this.props.swipeAreaWidth;

      var touchStartX = _this.context.muiTheme.isRtl ? document.body.offsetWidth - event.touches[0].pageX : event.touches[0].pageX;
      var touchStartY = event.touches[0].pageY;

      // Open only if swiping from far left (or right) while closed
      if (swipeAreaWidth !== null && !_this.state.open) {
        if (_this.props.openSecondary) {
          // If openSecondary is true calculate from the far right
          if (touchStartX < document.body.offsetWidth - swipeAreaWidth) return;
        } else {
          // If openSecondary is false calculate from the far left
          if (touchStartX > swipeAreaWidth) return;
        }
      }

      if (!_this.state.open && (openNavEventHandler !== _this.onBodyTouchStart || _this.props.disableSwipeToOpen)) {
        return;
      }

      _this.maybeSwiping = true;
      _this.touchStartX = touchStartX;
      _this.touchStartY = touchStartY;

      document.body.addEventListener('touchmove', _this.onBodyTouchMove);
      document.body.addEventListener('touchend', _this.onBodyTouchEnd);
      document.body.addEventListener('touchcancel', _this.onBodyTouchEnd);
    }, _this.onBodyTouchMove = function (event) {
      var currentX = _this.context.muiTheme.isRtl ? document.body.offsetWidth - event.touches[0].pageX : event.touches[0].pageX;
      var currentY = event.touches[0].pageY;

      if (_this.state.swiping) {
        event.preventDefault();
        _this.setPosition(_this.getTranslateX(currentX));
      } else if (_this.maybeSwiping) {
        var dXAbs = Math.abs(currentX - _this.touchStartX);
        var dYAbs = Math.abs(currentY - _this.touchStartY);
        // If the user has moved his thumb ten pixels in either direction,
        // we can safely make an assumption about whether he was intending
        // to swipe or scroll.
        var threshold = 10;

        if (dXAbs > threshold && dYAbs <= threshold) {
          _this.swipeStartX = currentX;
          _this.setState({
            swiping: _this.state.open ? 'closing' : 'opening'
          });
          _this.setPosition(_this.getTranslateX(currentX));
        } else if (dXAbs <= threshold && dYAbs > threshold) {
          _this.onBodyTouchEnd();
        }
      }
    }, _this.onBodyTouchEnd = function (event) {
      if (_this.state.swiping) {
        var currentX = _this.context.muiTheme.isRtl ? document.body.offsetWidth - event.changedTouches[0].pageX : event.changedTouches[0].pageX;
        var translateRatio = _this.getTranslateX(currentX) / _this.getMaxTranslateX();

        _this.maybeSwiping = false;
        var swiping = _this.state.swiping;
        _this.setState({
          swiping: null
        });

        // We have to open or close after setting swiping to null,
        // because only then CSS transition is enabled.
        if (translateRatio > 0.5) {
          if (swiping === 'opening') {
            _this.setPosition(_this.getMaxTranslateX());
          } else {
            _this.close('swipe');
          }
        } else {
          if (swiping === 'opening') {
            _this.open('swipe');
          } else {
            _this.setPosition(0);
          }
        }
      } else {
        _this.maybeSwiping = false;
      }

      document.body.removeEventListener('touchmove', _this.onBodyTouchMove);
      document.body.removeEventListener('touchend', _this.onBodyTouchEnd);
      document.body.removeEventListener('touchcancel', _this.onBodyTouchEnd);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  Drawer.prototype.componentWillMount = function componentWillMount() {
    this.maybeSwiping = false;
    this.touchStartX = null;
    this.touchStartY = null;
    this.swipeStartX = null;

    this.setState({
      open: this.props.open !== null ? this.props.open : this.props.docked,
      swiping: null
    });
  };

  Drawer.prototype.componentDidMount = function componentDidMount() {
    this.enableSwipeHandling();
  };

  Drawer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    // If controlled then the open prop takes precedence.
    if (nextProps.open !== null) {
      this.setState({
        open: nextProps.open
      });
      // Otherwise, if docked is changed, change the open state for when uncontrolled.
    } else if (this.props.docked !== nextProps.docked) {
      this.setState({
        open: nextProps.docked
      });
    }
  };

  Drawer.prototype.componentDidUpdate = function componentDidUpdate() {
    this.enableSwipeHandling();
  };

  Drawer.prototype.componentWillUnmount = function componentWillUnmount() {
    this.disableSwipeHandling();
  };

  Drawer.prototype.getStyles = function getStyles() {
    var muiTheme = this.context.muiTheme;
    var theme = muiTheme.drawer;

    var x = this.getTranslateMultiplier() * (this.state.open ? 0 : this.getMaxTranslateX());

    var styles = {
      root: {
        height: '100%',
        width: this.getTranslatedWidth() || theme.width,
        position: 'fixed',
        zIndex: muiTheme.zIndex.drawer,
        left: 0,
        top: 0,
        transform: 'translate(' + x + 'px, 0)',
        transition: !this.state.swiping && _transitions2.default.easeOut(null, 'transform', null),
        backgroundColor: theme.color,
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch' },
      overlay: {
        zIndex: muiTheme.zIndex.drawerOverlay,
        pointerEvents: this.state.open ? 'auto' : 'none' },
      rootWhenOpenRight: {
        left: 'auto',
        right: 0
      }
    };

    return styles;
  };

  Drawer.prototype.shouldShow = function shouldShow() {
    return this.state.open || !!this.state.swiping; // component is swiping
  };

  Drawer.prototype.close = function close(reason) {
    if (this.props.open === null) this.setState({ open: false });
    if (this.props.onRequestChange) this.props.onRequestChange(false, reason);
    return this;
  };

  Drawer.prototype.open = function open(reason) {
    if (this.props.open === null) this.setState({ open: true });
    if (this.props.onRequestChange) this.props.onRequestChange(true, reason);
    return this;
  };

  Drawer.prototype.getTranslatedWidth = function getTranslatedWidth() {
    if (typeof this.props.width === 'string') {
      if (!/^\d+(\.\d+)?%$/.test(this.props.width)) {
        throw new Error('Not a valid percentage format.');
      }
      var width = parseFloat(this.props.width) / 100.0;
      // We are doing our best on the Server to render a consistent UI, hence the
      // default value of 10000
      return window ? width * window.innerWidth : 10000;
    } else {
      return this.props.width;
    }
  };

  Drawer.prototype.getMaxTranslateX = function getMaxTranslateX() {
    var width = this.getTranslatedWidth() || this.context.muiTheme.drawer.width;
    return width + 10;
  };

  Drawer.prototype.getTranslateMultiplier = function getTranslateMultiplier() {
    return this.props.openSecondary ? 1 : -1;
  };

  Drawer.prototype.enableSwipeHandling = function enableSwipeHandling() {
    if (!this.props.docked) {
      document.body.addEventListener('touchstart', this.onBodyTouchStart);
      if (!openNavEventHandler) {
        openNavEventHandler = this.onBodyTouchStart;
      }
    } else {
      this.disableSwipeHandling();
    }
  };

  Drawer.prototype.disableSwipeHandling = function disableSwipeHandling() {
    document.body.removeEventListener('touchstart', this.onBodyTouchStart);
    if (openNavEventHandler === this.onBodyTouchStart) {
      openNavEventHandler = null;
    }
  };

  Drawer.prototype.setPosition = function setPosition(translateX) {
    var rtlTranslateMultiplier = this.context.muiTheme.isRtl ? -1 : 1;
    var drawer = _reactDom2.default.findDOMNode(this.refs.clickAwayableElement);
    var transformCSS = 'translate(' + this.getTranslateMultiplier() * rtlTranslateMultiplier * translateX + 'px, 0)';
    this.refs.overlay.setOpacity(1 - translateX / this.getMaxTranslateX());
    _autoPrefix2.default.set(drawer.style, 'transform', transformCSS);
  };

  Drawer.prototype.getTranslateX = function getTranslateX(currentX) {
    return Math.min(Math.max(this.state.swiping === 'closing' ? this.getTranslateMultiplier() * (currentX - this.swipeStartX) : this.getMaxTranslateX() - this.getTranslateMultiplier() * (this.swipeStartX - currentX), 0), this.getMaxTranslateX());
  };

  Drawer.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        className = _props.className,
        containerClassName = _props.containerClassName,
        containerStyle = _props.containerStyle,
        docked = _props.docked,
        openSecondary = _props.openSecondary,
        overlayClassName = _props.overlayClassName,
        overlayStyle = _props.overlayStyle,
        style = _props.style,
        zDepth = _props.zDepth;


    var styles = this.getStyles();

    var overlay = void 0;
    if (!docked) {
      overlay = _react2.default.createElement(_Overlay2.default, {
        ref: 'overlay',
        show: this.shouldShow(),
        className: overlayClassName,
        style: (0, _assign2.default)(styles.overlay, overlayStyle),
        transitionEnabled: !this.state.swiping,
        onTouchTap: this.handleTouchTapOverlay
      });
    }

    return _react2.default.createElement(
      'div',
      {
        className: className,
        style: style
      },
      _react2.default.createElement(_reactEventListener2.default, { target: 'window', onKeyUp: this.handleKeyUp }),
      overlay,
      _react2.default.createElement(
        _Paper2.default,
        {
          ref: 'clickAwayableElement',
          zDepth: zDepth,
          rounded: false,
          transitionEnabled: !this.state.swiping,
          className: containerClassName,
          style: (0, _assign2.default)(styles.root, openSecondary && styles.rootWhenOpenRight, containerStyle)
        },
        children
      )
    );
  };

  return Drawer;
}(_react.Component), _class.propTypes = {
  /**
   * The contents of the `Drawer`
   */
  children: _propTypes2.default.node,
  /**
   * The CSS class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * The CSS class name of the container element.
   */
  containerClassName: _propTypes2.default.string,
  /**
   * Override the inline-styles of the container element.
   */
  containerStyle: _propTypes2.default.object,
  /**
   * If true, swiping sideways when the `Drawer` is closed will not open it.
   */
  disableSwipeToOpen: _propTypes2.default.bool,
  /**
   * If true, the `Drawer` will be docked. In this state, the overlay won't show and
   * clicking on a menu item will not close the `Drawer`.
   */
  docked: _propTypes2.default.bool,
  /**
   * Callback function fired when the `open` state of the `Drawer` is requested to be changed.
   *
   * @param {boolean} open If true, the `Drawer` was requested to be opened.
   * @param {string} reason The reason for the open or close request. Possible values are
   * 'swipe' for open requests; 'clickaway' (on overlay clicks),
   * 'escape' (on escape key press), and 'swipe' for close requests.
   */
  onRequestChange: _propTypes2.default.func,
  /**
   * If true, the `Drawer` is opened.  Providing a value will turn the `Drawer`
   * into a controlled component.
   */
  open: _propTypes2.default.bool,
  /**
   * If true, the `Drawer` is positioned to open from the opposite side.
   */
  openSecondary: _propTypes2.default.bool,
  /**
   * The CSS class name to add to the `Overlay` component that is rendered behind the `Drawer`.
   */
  overlayClassName: _propTypes2.default.string,
  /**
   * Override the inline-styles of the `Overlay` component that is rendered behind the `Drawer`.
   */
  overlayStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * The width of the left most (or right most) area in pixels where the `Drawer` can be
   * swiped open from. Setting this to `null` spans that area to the entire page
   * (**CAUTION!** Setting this property to `null` might cause issues with sliders and
   * swipeable `Tabs`: use at your own risk).
   */
  swipeAreaWidth: _propTypes2.default.number,
  /**
   * The width of the `Drawer` in pixels or percentage in string format ex. `50%` to fill
   * half of the window or `100%` and so on. Defaults to using the values from theme.
   */
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  /**
   * The zDepth of the `Drawer`.
   */
  zDepth: _propTypes4.default.zDepth

}, _class.defaultProps = {
  disableSwipeToOpen: false,
  docked: true,
  open: null,
  openSecondary: false,
  swipeAreaWidth: 30,
  width: null,
  zDepth: 2
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = Drawer;

/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(14);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _transitions = __webpack_require__(11);

var _transitions2 = _interopRequireDefault(_transitions);

var _arrowDropDown = __webpack_require__(397);

var _arrowDropDown2 = _interopRequireDefault(_arrowDropDown);

var _Menu = __webpack_require__(81);

var _Menu2 = _interopRequireDefault(_Menu);

var _ClearFix = __webpack_require__(383);

var _ClearFix2 = _interopRequireDefault(_ClearFix);

var _Popover = __webpack_require__(51);

var _Popover2 = _interopRequireDefault(_Popover);

var _PopoverAnimationVertical = __webpack_require__(111);

var _PopoverAnimationVertical2 = _interopRequireDefault(_PopoverAnimationVertical);

var _keycode = __webpack_require__(22);

var _keycode2 = _interopRequireDefault(_keycode);

var _events = __webpack_require__(82);

var _events2 = _interopRequireDefault(_events);

var _IconButton = __webpack_require__(50);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _propTypes3 = __webpack_require__(20);

var _propTypes4 = _interopRequireDefault(_propTypes3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var disabled = props.disabled;

  var spacing = context.muiTheme.baseTheme.spacing;
  var palette = context.muiTheme.baseTheme.palette;
  var accentColor = context.muiTheme.dropDownMenu.accentColor;
  return {
    control: {
      cursor: disabled ? 'not-allowed' : 'pointer',
      height: '100%',
      position: 'relative',
      width: '100%'
    },
    icon: {
      fill: accentColor,
      position: 'absolute',
      right: spacing.desktopGutterLess,
      top: (spacing.iconSize - 24) / 2 + spacing.desktopGutterMini / 2
    },
    iconChildren: {
      fill: 'inherit'
    },
    label: {
      color: disabled ? palette.disabledColor : palette.textColor,
      height: spacing.desktopToolbarHeight + 'px',
      lineHeight: spacing.desktopToolbarHeight + 'px',
      overflow: 'hidden',
      opacity: 1,
      position: 'relative',
      paddingLeft: spacing.desktopGutter,
      paddingRight: spacing.iconSize * 2 + spacing.desktopGutterMini,
      textOverflow: 'ellipsis',
      top: 0,
      whiteSpace: 'nowrap'
    },
    labelWhenOpen: {
      opacity: 0,
      top: spacing.desktopToolbarHeight / 8
    },
    root: {
      display: 'inline-block',
      fontSize: spacing.desktopDropDownMenuFontSize,
      height: spacing.desktopSubheaderHeight,
      fontFamily: context.muiTheme.baseTheme.fontFamily,
      outline: 'none',
      position: 'relative',
      transition: _transitions2.default.easeOut()
    },
    rootWhenOpen: {
      opacity: 1
    },
    underline: {
      borderTop: 'solid 1px ' + accentColor,
      bottom: 1,
      left: 0,
      margin: '-1px ' + spacing.desktopGutter + 'px',
      right: 0,
      position: 'absolute'
    }
  };
}

var DropDownMenu = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(DropDownMenu, _Component);

  function DropDownMenu() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, DropDownMenu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      open: false
    }, _this.rootNode = undefined, _this.arrowNode = undefined, _this.handleTouchTapControl = function (event) {
      event.preventDefault();
      if (!_this.props.disabled) {
        _this.setState({
          open: !_this.state.open,
          anchorEl: _this.rootNode
        });
      }
    }, _this.handleRequestCloseMenu = function () {
      _this.close(false);
    }, _this.handleEscKeyDownMenu = function () {
      _this.close(true);
    }, _this.handleKeyDown = function (event) {
      switch ((0, _keycode2.default)(event)) {
        case 'up':
        case 'down':
        case 'space':
        case 'enter':
          event.preventDefault();
          _this.setState({
            open: true,
            anchorEl: _this.rootNode
          });
          break;
      }
    }, _this.handleItemTouchTap = function (event, child, index) {
      if (_this.props.multiple) {
        if (!_this.state.open) {
          _this.setState({ open: true });
        }
      } else {
        event.persist();
        _this.setState({
          open: false
        }, function () {
          if (_this.props.onChange) {
            _this.props.onChange(event, index, child.props.value);
          }

          _this.close(_events2.default.isKeyboard(event));
        });
      }
    }, _this.handleChange = function (event, value) {
      if (_this.props.multiple && _this.props.onChange) {
        _this.props.onChange(event, undefined, value);
      }
    }, _this.close = function (isKeyboard) {
      _this.setState({
        open: false
      }, function () {
        if (_this.props.onClose) {
          _this.props.onClose();
        }

        if (isKeyboard) {
          var dropArrow = _this.arrowNode;
          var dropNode = _reactDom2.default.findDOMNode(dropArrow);
          dropNode.focus();
          dropArrow.setKeyboardFocus(true);
        }
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  // The nested styles for drop-down-menu are modified by toolbar and possibly
  // other user components, so it will give full access to its js styles rather
  // than just the parent.


  DropDownMenu.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    if (this.props.autoWidth) {
      this.setWidth();
    }
    if (this.props.openImmediately) {
      // TODO: Temporary fix to make openImmediately work with popover.
      /* eslint-disable react/no-did-mount-set-state */
      setTimeout(function () {
        return _this2.setState({
          open: true,
          anchorEl: _this2.rootNode
        });
      }, 0);
      /* eslint-enable react/no-did-mount-set-state */
    }
  };

  DropDownMenu.prototype.componentWillReceiveProps = function componentWillReceiveProps() {
    if (this.props.autoWidth) {
      this.setWidth();
    }
  };

  /**
   * This method is deprecated but still here because the TextField
   * need it in order to work. TODO: That will be addressed later.
   */
  DropDownMenu.prototype.getInputNode = function getInputNode() {
    var _this3 = this;

    var rootNode = this.rootNode;

    rootNode.focus = function () {
      if (!_this3.props.disabled) {
        _this3.setState({
          open: !_this3.state.open,
          anchorEl: _this3.rootNode
        });
      }
    };

    return rootNode;
  };

  DropDownMenu.prototype.setWidth = function setWidth() {
    var el = this.rootNode;
    if (!this.props.style || !this.props.style.hasOwnProperty('width')) {
      el.style.width = 'auto';
    }
  };

  DropDownMenu.prototype.render = function render() {
    var _this4 = this;

    var _props = this.props,
        animated = _props.animated,
        animation = _props.animation,
        autoWidth = _props.autoWidth,
        multiple = _props.multiple,
        children = _props.children,
        className = _props.className,
        disabled = _props.disabled,
        iconStyle = _props.iconStyle,
        labelStyle = _props.labelStyle,
        listStyle = _props.listStyle,
        maxHeight = _props.maxHeight,
        menuStyleProp = _props.menuStyle,
        selectionRenderer = _props.selectionRenderer,
        onClose = _props.onClose,
        openImmediately = _props.openImmediately,
        menuItemStyle = _props.menuItemStyle,
        selectedMenuItemStyle = _props.selectedMenuItemStyle,
        style = _props.style,
        underlineStyle = _props.underlineStyle,
        value = _props.value,
        iconButton = _props.iconButton,
        anchorOrigin = _props.anchorOrigin,
        targetOrigin = _props.targetOrigin,
        other = (0, _objectWithoutProperties3.default)(_props, ['animated', 'animation', 'autoWidth', 'multiple', 'children', 'className', 'disabled', 'iconStyle', 'labelStyle', 'listStyle', 'maxHeight', 'menuStyle', 'selectionRenderer', 'onClose', 'openImmediately', 'menuItemStyle', 'selectedMenuItemStyle', 'style', 'underlineStyle', 'value', 'iconButton', 'anchorOrigin', 'targetOrigin']);
    var _state = this.state,
        anchorEl = _state.anchorEl,
        open = _state.open;
    var prepareStyles = this.context.muiTheme.prepareStyles;

    var styles = getStyles(this.props, this.context);

    var displayValue = '';
    if (!multiple) {
      _react2.default.Children.forEach(children, function (child) {
        if (child && value === child.props.value) {
          if (selectionRenderer) {
            displayValue = selectionRenderer(value, child);
          } else {
            // This will need to be improved (in case primaryText is a node)
            displayValue = child.props.label || child.props.primaryText;
          }
        }
      });
    } else {
      var values = [];
      var selectionRendererChildren = [];
      _react2.default.Children.forEach(children, function (child) {
        if (child && value && value.indexOf(child.props.value) > -1) {
          if (selectionRenderer) {
            values.push(child.props.value);
            selectionRendererChildren.push(child);
          } else {
            values.push(child.props.label || child.props.primaryText);
          }
        }
      });

      displayValue = [];
      if (selectionRenderer) {
        displayValue = selectionRenderer(values, selectionRendererChildren);
      } else {
        displayValue = values.join(', ');
      }
    }

    var menuStyle = void 0;
    if (anchorEl && !autoWidth) {
      menuStyle = (0, _assign2.default)({
        width: anchorEl.clientWidth
      }, menuStyleProp);
    } else {
      menuStyle = menuStyleProp;
    }

    return _react2.default.createElement(
      'div',
      (0, _extends3.default)({}, other, {
        ref: function ref(node) {
          _this4.rootNode = node;
        },
        className: className,
        style: prepareStyles((0, _assign2.default)({}, styles.root, open && styles.rootWhenOpen, style))
      }),
      _react2.default.createElement(
        _ClearFix2.default,
        { style: styles.control, onTouchTap: this.handleTouchTapControl },
        _react2.default.createElement(
          'div',
          { style: prepareStyles((0, _assign2.default)({}, styles.label, open && styles.labelWhenOpen, labelStyle)) },
          displayValue
        ),
        _react2.default.createElement(
          _IconButton2.default,
          {
            disabled: disabled,
            onKeyDown: this.handleKeyDown,
            ref: function ref(node) {
              _this4.arrowNode = node;
            },
            style: (0, _assign2.default)({}, styles.icon, iconStyle),
            iconStyle: styles.iconChildren
          },
          iconButton
        ),
        _react2.default.createElement('div', { style: prepareStyles((0, _assign2.default)({}, styles.underline, underlineStyle)) })
      ),
      _react2.default.createElement(
        _Popover2.default,
        {
          anchorOrigin: anchorOrigin,
          targetOrigin: targetOrigin,
          anchorEl: anchorEl,
          animation: animation || _PopoverAnimationVertical2.default,
          open: open,
          animated: animated,
          onRequestClose: this.handleRequestCloseMenu
        },
        _react2.default.createElement(
          _Menu2.default,
          {
            multiple: multiple,
            maxHeight: maxHeight,
            desktop: true,
            value: value,
            onEscKeyDown: this.handleEscKeyDownMenu,
            style: menuStyle,
            listStyle: listStyle,
            onItemTouchTap: this.handleItemTouchTap,
            onChange: this.handleChange,
            menuItemStyle: menuItemStyle,
            selectedMenuItemStyle: selectedMenuItemStyle,
            autoWidth: autoWidth,
            width: !autoWidth && menuStyle ? menuStyle.width : null
          },
          children
        )
      )
    );
  };

  return DropDownMenu;
}(_react.Component), _class.muiName = 'DropDownMenu', _class.propTypes = {
  /**
   * This is the point on the anchor that the popover's
   * `targetOrigin` will attach to.
   * Options:
   * vertical: [top, center, bottom]
   * horizontal: [left, middle, right].
   */
  anchorOrigin: _propTypes4.default.origin,
  /**
   * If true, the popover will apply transitions when
   * it gets added to the DOM.
   */
  animated: _propTypes2.default.bool,
  /**
   * Override the default animation component used.
   */
  animation: _propTypes2.default.func,
  /**
   * The width will automatically be set according to the items inside the menu.
   * To control this width in css instead, set this prop to `false`.
   */
  autoWidth: _propTypes2.default.bool,
  /**
   * The `MenuItem`s to populate the `Menu` with. If the `MenuItems` have the
   * prop `label` that value will be used to render the representation of that
   * item within the field.
   */
  children: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * Disables the menu.
   */
  disabled: _propTypes2.default.bool,
  /**
   * Overrides default `SvgIcon` dropdown arrow component.
   */
  iconButton: _propTypes2.default.node,
  /**
   * Overrides the styles of icon element.
   */
  iconStyle: _propTypes2.default.object,
  /**
   * Overrides the styles of label when the `DropDownMenu` is inactive.
   */
  labelStyle: _propTypes2.default.object,
  /**
   * The style object to use to override underlying list style.
   */
  listStyle: _propTypes2.default.object,
  /**
   * The maximum height of the `Menu` when it is displayed.
   */
  maxHeight: _propTypes2.default.number,
  /**
   * Override the inline-styles of menu items.
   */
  menuItemStyle: _propTypes2.default.object,
  /**
   * Overrides the styles of `Menu` when the `DropDownMenu` is displayed.
   */
  menuStyle: _propTypes2.default.object,
  /**
   * If true, `value` must be an array and the menu will support
   * multiple selections.
   */
  multiple: _propTypes2.default.bool,
  /**
   * Callback function fired when a menu item is clicked, other than the one currently selected.
   *
   * @param {object} event TouchTap event targeting the menu item that was clicked.
   * @param {number} key The index of the clicked menu item in the `children` collection.
   * @param {any} value If `multiple` is true, the menu's `value`
   * array with either the menu item's `value` added (if
   * it wasn't already selected) or omitted (if it was already selected).
   * Otherwise, the `value` of the menu item.
   */
  onChange: _propTypes2.default.func,
  /**
   * Callback function fired when the menu is closed.
   */
  onClose: _propTypes2.default.func,
  /**
   * Set to true to have the `DropDownMenu` automatically open on mount.
   */
  openImmediately: _propTypes2.default.bool,
  /**
   * Override the inline-styles of selected menu items.
   */
  selectedMenuItemStyle: _propTypes2.default.object,
  /**
   * Callback function fired when a menu item is clicked, other than the one currently selected.
   *
   * @param {any} value If `multiple` is true, the menu's `value`
   * array with either the menu item's `value` added (if
   * it wasn't already selected) or omitted (if it was already selected).
   * Otherwise, the `value` of the menu item.
   * @param {any} menuItem The selected `MenuItem`.
   * If `multiple` is true, this will be an array with the `MenuItem`s matching the `value`s parameter.
   */
  selectionRenderer: _propTypes2.default.func,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * This is the point on the popover which will attach to
   * the anchor's origin.
   * Options:
   * vertical: [top, center, bottom]
   * horizontal: [left, middle, right].
   */
  targetOrigin: _propTypes4.default.origin,
  /**
   * Overrides the inline-styles of the underline.
   */
  underlineStyle: _propTypes2.default.object,
  /**
   * If `multiple` is true, an array of the `value`s of the selected
   * menu items. Otherwise, the `value` of the selected menu item.
   * If provided, the menu will be a controlled component.
   */
  value: _propTypes2.default.any
}, _class.defaultProps = {
  animated: true,
  autoWidth: true,
  disabled: false,
  iconButton: _react2.default.createElement(_arrowDropDown2.default, null),
  openImmediately: false,
  maxHeight: 500,
  multiple: false,
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'left'
  }
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = DropDownMenu;

/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__(11);

var _transitions2 = _interopRequireDefault(_transitions);

var _colorManipulator = __webpack_require__(35);

var _EnhancedButton = __webpack_require__(27);

var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);

var _FlatButtonLabel = __webpack_require__(342);

var _FlatButtonLabel2 = _interopRequireDefault(_FlatButtonLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validateLabel(props, propName, componentName) {
  if (process.env.NODE_ENV !== 'production') {
    if (!props.children && props.label !== 0 && !props.label && !props.icon) {
      return new Error('Required prop label or children or icon was not specified in ' + componentName + '.');
    }
  }
}

var FlatButton = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(FlatButton, _Component);

  function FlatButton() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, FlatButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      hovered: false,
      isKeyboardFocused: false,
      touch: false
    }, _this.handleKeyboardFocus = function (event, isKeyboardFocused) {
      _this.setState({ isKeyboardFocused: isKeyboardFocused });
      _this.props.onKeyboardFocus(event, isKeyboardFocused);
    }, _this.handleMouseEnter = function (event) {
      // Cancel hover styles for touch devices
      if (!_this.state.touch) _this.setState({ hovered: true });
      _this.props.onMouseEnter(event);
    }, _this.handleMouseLeave = function (event) {
      _this.setState({ hovered: false });
      _this.props.onMouseLeave(event);
    }, _this.handleTouchStart = function (event) {
      _this.setState({ touch: true });
      _this.props.onTouchStart(event);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  FlatButton.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.disabled) {
      this.setState({
        hovered: false
      });
    }
  };

  FlatButton.prototype.render = function render() {
    var _props = this.props,
        backgroundColor = _props.backgroundColor,
        children = _props.children,
        disabled = _props.disabled,
        fullWidth = _props.fullWidth,
        hoverColor = _props.hoverColor,
        icon = _props.icon,
        label = _props.label,
        labelStyle = _props.labelStyle,
        labelPosition = _props.labelPosition,
        primary = _props.primary,
        rippleColor = _props.rippleColor,
        secondary = _props.secondary,
        style = _props.style,
        other = (0, _objectWithoutProperties3.default)(_props, ['backgroundColor', 'children', 'disabled', 'fullWidth', 'hoverColor', 'icon', 'label', 'labelStyle', 'labelPosition', 'primary', 'rippleColor', 'secondary', 'style']);
    var _context$muiTheme = this.context.muiTheme,
        borderRadius = _context$muiTheme.borderRadius,
        _context$muiTheme$but = _context$muiTheme.button,
        buttonHeight = _context$muiTheme$but.height,
        buttonMinWidth = _context$muiTheme$but.minWidth,
        buttonTextTransform = _context$muiTheme$but.textTransform,
        _context$muiTheme$fla = _context$muiTheme.flatButton,
        buttonFilterColor = _context$muiTheme$fla.buttonFilterColor,
        buttonColor = _context$muiTheme$fla.color,
        disabledTextColor = _context$muiTheme$fla.disabledTextColor,
        fontSize = _context$muiTheme$fla.fontSize,
        fontWeight = _context$muiTheme$fla.fontWeight,
        primaryTextColor = _context$muiTheme$fla.primaryTextColor,
        secondaryTextColor = _context$muiTheme$fla.secondaryTextColor,
        textColor = _context$muiTheme$fla.textColor,
        _context$muiTheme$fla2 = _context$muiTheme$fla.textTransform,
        textTransform = _context$muiTheme$fla2 === undefined ? buttonTextTransform || 'uppercase' : _context$muiTheme$fla2;

    var defaultTextColor = disabled ? disabledTextColor : primary ? primaryTextColor : secondary ? secondaryTextColor : textColor;

    var defaultHoverColor = (0, _colorManipulator.fade)(buttonFilterColor, 0.2);
    var defaultRippleColor = buttonFilterColor;
    var buttonHoverColor = hoverColor || defaultHoverColor;
    var buttonRippleColor = rippleColor || defaultRippleColor;
    var buttonBackgroundColor = backgroundColor || buttonColor;
    var hovered = (this.state.hovered || this.state.isKeyboardFocused) && !disabled;

    var mergedRootStyles = (0, _assign2.default)({}, {
      height: buttonHeight,
      lineHeight: buttonHeight + 'px',
      minWidth: fullWidth ? '100%' : buttonMinWidth,
      color: defaultTextColor,
      transition: _transitions2.default.easeOut(),
      borderRadius: borderRadius,
      userSelect: 'none',
      overflow: 'hidden',
      backgroundColor: hovered ? buttonHoverColor : buttonBackgroundColor,
      padding: 0,
      margin: 0,
      textAlign: 'center'
    }, style);

    var iconCloned = void 0;
    var labelStyleIcon = {};

    if (icon) {
      var iconStyles = (0, _assign2.default)({
        verticalAlign: 'middle',
        marginLeft: label && labelPosition !== 'before' ? 12 : 0,
        marginRight: label && labelPosition === 'before' ? 12 : 0
      }, icon.props.style);
      iconCloned = _react2.default.cloneElement(icon, {
        color: icon.props.color || mergedRootStyles.color,
        style: iconStyles,
        key: 'iconCloned'
      });

      if (labelPosition === 'before') {
        labelStyleIcon.paddingRight = 8;
      } else {
        labelStyleIcon.paddingLeft = 8;
      }
    }

    var mergedLabelStyles = (0, _assign2.default)({
      letterSpacing: 0,
      textTransform: textTransform,
      fontWeight: fontWeight,
      fontSize: fontSize
    }, labelStyleIcon, labelStyle);

    var labelElement = label ? _react2.default.createElement(_FlatButtonLabel2.default, { key: 'labelElement', label: label, style: mergedLabelStyles }) : undefined;

    // Place label before or after children.
    var enhancedButtonChildren = labelPosition === 'before' ? [labelElement, iconCloned, children] : [children, iconCloned, labelElement];

    return _react2.default.createElement(
      _EnhancedButton2.default,
      (0, _extends3.default)({}, other, {
        disabled: disabled,
        focusRippleColor: buttonRippleColor,
        focusRippleOpacity: 0.3,
        onKeyboardFocus: this.handleKeyboardFocus,
        onMouseLeave: this.handleMouseLeave,
        onMouseEnter: this.handleMouseEnter,
        onTouchStart: this.handleTouchStart,
        style: mergedRootStyles,
        touchRippleColor: buttonRippleColor,
        touchRippleOpacity: 0.3
      }),
      enhancedButtonChildren
    );
  };

  return FlatButton;
}(_react.Component), _class.muiName = 'FlatButton', _class.propTypes = {
  /**
   * Color of button when mouse is not hovering over it.
   */
  backgroundColor: _propTypes2.default.string,
  /**
   * This is what will be displayed inside the button.
   * If a label is specified, the text within the label prop will
   * be displayed. Otherwise, the component will expect children
   * which will then be displayed. (In our example,
   * we are nesting an `<input type="file" />` and a `span`
   * that acts as our label to be displayed.) This only
   * applies to flat and raised buttons.
   */
  children: _propTypes2.default.node,
  /**
   * The CSS class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * The element to use as the container for the FlatButton. Either a string to
   * use a DOM element or a ReactElement. This is useful for wrapping the
   * FlatButton in a custom Link component. If a ReactElement is given, ensure
   * that it passes all of its given props through to the underlying DOM
   * element and renders its children prop for proper integration.
   */
  containerElement: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  /**
   * If true, the element's ripple effect will be disabled.
   */
  disableTouchRipple: _propTypes2.default.bool,
  /**
   * Disables the button if set to true.
   */
  disabled: _propTypes2.default.bool,
  /**
   * If true, the button will take up the full width of its container.
   */
  fullWidth: _propTypes2.default.bool,
  /**
   * Color of button when mouse hovers over.
   */
  hoverColor: _propTypes2.default.string,
  /**
   * The URL to link to when the button is clicked.
   */
  href: _propTypes2.default.string,
  /**
   * Use this property to display an icon.
   */
  icon: _propTypes2.default.node,
  /**
   * Label for the button.
   */
  label: validateLabel,
  /**
   * Place label before or after the passed children.
   */
  labelPosition: _propTypes2.default.oneOf(['before', 'after']),
  /**
   * Override the inline-styles of the button's label element.
   */
  labelStyle: _propTypes2.default.object,
  /**
   * Callback function fired when the element is focused or blurred by the keyboard.
   *
   * @param {object} event `focus` or `blur` event targeting the element.
   * @param {boolean} isKeyboardFocused Indicates whether the element is focused.
   */
  onKeyboardFocus: _propTypes2.default.func,
  /** @ignore */
  onMouseEnter: _propTypes2.default.func,
  /** @ignore */
  onMouseLeave: _propTypes2.default.func,
  /** @ignore */
  onTouchStart: _propTypes2.default.func,
  /**
   * Callback function fired when the button is touch-tapped.
   *
   * @param {object} event TouchTap event targeting the button.
   */
  onTouchTap: _propTypes2.default.func,
  /**
   * If true, colors button according to
   * primaryTextColor from the Theme.
   */
  primary: _propTypes2.default.bool,
  /**
   * Color for the ripple after button is clicked.
   */
  rippleColor: _propTypes2.default.string,
  /**
   * If true, colors button according to secondaryTextColor from the theme.
   * The primary prop has precendent if set to true.
   */
  secondary: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
}, _class.defaultProps = {
  disabled: false,
  fullWidth: false,
  labelStyle: {},
  labelPosition: 'after',
  onKeyboardFocus: function onKeyboardFocus() {},
  onMouseEnter: function onMouseEnter() {},
  onMouseLeave: function onMouseLeave() {},
  onTouchStart: function onTouchStart() {},
  primary: false,
  secondary: false
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = FlatButton;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var baseTheme = context.muiTheme.baseTheme;


  return {
    root: {
      position: 'relative',
      paddingLeft: baseTheme.spacing.desktopGutterLess,
      paddingRight: baseTheme.spacing.desktopGutterLess,
      verticalAlign: 'middle'
    }
  };
}

var FlatButtonLabel = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(FlatButtonLabel, _Component);

  function FlatButtonLabel() {
    (0, _classCallCheck3.default)(this, FlatButtonLabel);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  FlatButtonLabel.prototype.render = function render() {
    var _props = this.props,
        label = _props.label,
        style = _props.style;
    var prepareStyles = this.context.muiTheme.prepareStyles;

    var styles = getStyles(this.props, this.context);

    return _react2.default.createElement(
      'span',
      { style: prepareStyles((0, _assign2.default)(styles.root, style)) },
      label
    );
  };

  return FlatButtonLabel;
}(_react.Component), _class.propTypes = {
  label: _propTypes2.default.node,
  style: _propTypes2.default.object
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp);
exports.default = FlatButtonLabel;

/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__(11);

var _transitions2 = _interopRequireDefault(_transitions);

var _colorManipulator = __webpack_require__(35);

var _EnhancedButton = __webpack_require__(27);

var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);

var _FontIcon = __webpack_require__(104);

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _Paper = __webpack_require__(21);

var _Paper2 = _interopRequireDefault(_Paper);

var _childUtils = __webpack_require__(191);

var _warning = __webpack_require__(17);

var _warning2 = _interopRequireDefault(_warning);

var _propTypes3 = __webpack_require__(20);

var _propTypes4 = _interopRequireDefault(_propTypes3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var floatingActionButton = context.muiTheme.floatingActionButton;


  var backgroundColor = props.backgroundColor || floatingActionButton.color;
  var iconColor = floatingActionButton.iconColor;

  if (props.disabled) {
    backgroundColor = props.disabledColor || floatingActionButton.disabledColor;
    iconColor = floatingActionButton.disabledTextColor;
  } else if (props.secondary) {
    backgroundColor = floatingActionButton.secondaryColor;
    iconColor = floatingActionButton.secondaryIconColor;
  }

  return {
    root: {
      transition: _transitions2.default.easeOut(),
      display: 'inline-block',
      backgroundColor: 'transparent'
    },
    container: {
      backgroundColor: backgroundColor,
      transition: _transitions2.default.easeOut(),
      height: floatingActionButton.buttonSize,
      width: floatingActionButton.buttonSize,
      padding: 0,
      overflow: 'hidden',
      borderRadius: '50%',
      textAlign: 'center',
      verticalAlign: 'bottom'
    },
    containerWhenMini: {
      height: floatingActionButton.miniSize,
      width: floatingActionButton.miniSize
    },
    overlay: {
      transition: _transitions2.default.easeOut(),
      top: 0
    },
    overlayWhenHovered: {
      backgroundColor: (0, _colorManipulator.fade)(iconColor, 0.4)
    },
    icon: {
      height: floatingActionButton.buttonSize,
      lineHeight: floatingActionButton.buttonSize + 'px',
      fill: iconColor,
      color: iconColor
    },
    iconWhenMini: {
      height: floatingActionButton.miniSize,
      lineHeight: floatingActionButton.miniSize + 'px'
    }
  };
}

var FloatingActionButton = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(FloatingActionButton, _Component);

  function FloatingActionButton() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, FloatingActionButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      hovered: false,
      touch: false,
      zDepth: undefined
    }, _this.handleMouseDown = function (event) {
      // only listen to left clicks
      if (event.button === 0) {
        _this.setState({ zDepth: _this.props.zDepth + 1 });
      }
      if (_this.props.onMouseDown) _this.props.onMouseDown(event);
    }, _this.handleMouseUp = function (event) {
      _this.setState({ zDepth: _this.props.zDepth });
      if (_this.props.onMouseUp) {
        _this.props.onMouseUp(event);
      }
    }, _this.handleMouseLeave = function (event) {
      if (!_this.refs.container.isKeyboardFocused()) {
        _this.setState({ zDepth: _this.props.zDepth, hovered: false });
      }
      if (_this.props.onMouseLeave) {
        _this.props.onMouseLeave(event);
      }
    }, _this.handleMouseEnter = function (event) {
      if (!_this.refs.container.isKeyboardFocused() && !_this.state.touch) {
        _this.setState({ hovered: true });
      }
      if (_this.props.onMouseEnter) {
        _this.props.onMouseEnter(event);
      }
    }, _this.handleTouchStart = function (event) {
      _this.setState({
        touch: true,
        zDepth: _this.props.zDepth + 1
      });
      if (_this.props.onTouchStart) {
        _this.props.onTouchStart(event);
      }
    }, _this.handleTouchEnd = function (event) {
      _this.setState({
        touch: true,
        zDepth: _this.props.zDepth
      });
      if (_this.props.onTouchEnd) {
        _this.props.onTouchEnd(event);
      }
    }, _this.handleKeyboardFocus = function (event, keyboardFocused) {
      if (keyboardFocused && !_this.props.disabled) {
        _this.setState({ zDepth: _this.props.zDepth + 1 });
        _this.refs.overlay.style.backgroundColor = (0, _colorManipulator.fade)(getStyles(_this.props, _this.context).icon.color, 0.4);
      } else if (!_this.state.hovered) {
        _this.setState({ zDepth: _this.props.zDepth });
        _this.refs.overlay.style.backgroundColor = 'transparent';
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  FloatingActionButton.prototype.componentWillMount = function componentWillMount() {
    this.setState({
      zDepth: this.props.disabled ? 0 : this.props.zDepth
    });
  };

  FloatingActionButton.prototype.componentDidMount = function componentDidMount() {
    (0, _warning2.default)(!this.props.iconClassName || !this.props.children, 'Material-UI: You have set both an iconClassName and a child icon. ' + 'It is recommended you use only one method when adding ' + 'icons to FloatingActionButtons.');
  };

  FloatingActionButton.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var nextState = {};

    if (nextProps.disabled !== this.props.disabled) {
      nextState.zDepth = nextProps.disabled ? 0 : this.props.zDepth;
    }
    if (nextProps.disabled) {
      nextState.hovered = false;
    }

    this.setState(nextState);
  };

  FloatingActionButton.prototype.render = function render() {
    var _props = this.props,
        backgroundColor = _props.backgroundColor,
        className = _props.className,
        childrenProp = _props.children,
        disabled = _props.disabled,
        disabledColor = _props.disabledColor,
        mini = _props.mini,
        secondary = _props.secondary,
        iconStyle = _props.iconStyle,
        iconClassName = _props.iconClassName,
        zDepth = _props.zDepth,
        other = (0, _objectWithoutProperties3.default)(_props, ['backgroundColor', 'className', 'children', 'disabled', 'disabledColor', 'mini', 'secondary', 'iconStyle', 'iconClassName', 'zDepth']);
    var prepareStyles = this.context.muiTheme.prepareStyles;

    var styles = getStyles(this.props, this.context);

    var iconElement = void 0;
    if (iconClassName) {
      iconElement = _react2.default.createElement(_FontIcon2.default, {
        className: iconClassName,
        style: (0, _assign2.default)({}, styles.icon, mini && styles.iconWhenMini, iconStyle)
      });
    }

    var children = void 0;

    if (childrenProp) {
      children = (0, _childUtils.extendChildren)(childrenProp, function (child) {
        return {
          style: (0, _assign2.default)({}, styles.icon, mini && styles.iconWhenMini, iconStyle, child.props.style)
        };
      });
    }

    var buttonEventHandlers = disabled ? null : {
      onMouseDown: this.handleMouseDown,
      onMouseUp: this.handleMouseUp,
      onMouseLeave: this.handleMouseLeave,
      onMouseEnter: this.handleMouseEnter,
      onTouchStart: this.handleTouchStart,
      onTouchEnd: this.handleTouchEnd,
      onKeyboardFocus: this.handleKeyboardFocus
    };

    return _react2.default.createElement(
      _Paper2.default,
      {
        className: className,
        style: (0, _assign2.default)(styles.root, this.props.style),
        zDepth: this.state.zDepth,
        circle: true
      },
      _react2.default.createElement(
        _EnhancedButton2.default,
        (0, _extends3.default)({}, other, buttonEventHandlers, {
          ref: 'container',
          disabled: disabled,
          style: (0, _assign2.default)(styles.container, this.props.mini && styles.containerWhenMini, iconStyle),
          focusRippleColor: styles.icon.color,
          touchRippleColor: styles.icon.color
        }),
        _react2.default.createElement(
          'div',
          {
            ref: 'overlay',
            style: prepareStyles((0, _assign2.default)(styles.overlay, this.state.hovered && !this.props.disabled && styles.overlayWhenHovered))
          },
          iconElement,
          children
        )
      )
    );
  };

  return FloatingActionButton;
}(_react.Component), _class.propTypes = {
  /**
   * This value will override the default background color for the button.
   * However it will not override the default disabled background color.
   * This has to be set separately using the disabledColor attribute.
   */
  backgroundColor: _propTypes2.default.string,
  /**
   * This is what displayed inside the floating action button; for example, a SVG Icon.
   */
  children: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * Disables the button if set to true.
   */
  disabled: _propTypes2.default.bool,
  /**
   * This value will override the default background color for the button when it is disabled.
   */
  disabledColor: _propTypes2.default.string,
  /**
   * The URL to link to when the button is clicked.
   */
  href: _propTypes2.default.string,
  /**
   * The icon within the FloatingActionButton is a FontIcon component.
   * This property is the classname of the icon to be displayed inside the button.
   * An alternative to adding an iconClassName would be to manually insert a
   * FontIcon component or custom SvgIcon component or as a child of FloatingActionButton.
   */
  iconClassName: _propTypes2.default.string,
  /**
   * This is the equivalent to iconClassName except that it is used for
   * overriding the inline-styles of the FontIcon component.
   */
  iconStyle: _propTypes2.default.object,
  /**
   * If true, the button will be a small floating action button.
   */
  mini: _propTypes2.default.bool,
  /** @ignore */
  onMouseDown: _propTypes2.default.func,
  /** @ignore */
  onMouseEnter: _propTypes2.default.func,
  /** @ignore */
  onMouseLeave: _propTypes2.default.func,
  /** @ignore */
  onMouseUp: _propTypes2.default.func,
  /** @ignore */
  onTouchEnd: _propTypes2.default.func,
  /** @ignore */
  onTouchStart: _propTypes2.default.func,
  /**
   * Callback function fired when the button is touch-tapped.
   *
   * @param {object} event TouchTap event targeting the button.
   */
  onTouchTap: _propTypes2.default.func,
  /**
   * If true, the button will use the secondary button colors.
   */
  secondary: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * The zDepth of the underlying `Paper` component.
   */
  zDepth: _propTypes4.default.zDepth
}, _class.defaultProps = {
  disabled: false,
  mini: false,
  secondary: false,
  zDepth: 2
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = FloatingActionButton;

/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__(11);

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context, state) {
  var color = props.color,
      hoverColor = props.hoverColor;
  var baseTheme = context.muiTheme.baseTheme;

  var offColor = color || baseTheme.palette.textColor;
  var onColor = hoverColor || offColor;

  return {
    root: {
      color: state.hovered ? onColor : offColor,
      position: 'relative',
      fontSize: baseTheme.spacing.iconSize,
      display: 'inline-block',
      userSelect: 'none',
      transition: _transitions2.default.easeOut()
    }
  };
}

var FontIcon = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(FontIcon, _Component);

  function FontIcon() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, FontIcon);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      hovered: false
    }, _this.handleMouseLeave = function (event) {
      // hover is needed only when a hoverColor is defined
      if (_this.props.hoverColor !== undefined) {
        _this.setState({ hovered: false });
      }
      if (_this.props.onMouseLeave) {
        _this.props.onMouseLeave(event);
      }
    }, _this.handleMouseEnter = function (event) {
      // hover is needed only when a hoverColor is defined
      if (_this.props.hoverColor !== undefined) {
        _this.setState({ hovered: true });
      }
      if (_this.props.onMouseEnter) {
        _this.props.onMouseEnter(event);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  FontIcon.prototype.render = function render() {
    var _props = this.props,
        hoverColor = _props.hoverColor,
        onMouseLeave = _props.onMouseLeave,
        onMouseEnter = _props.onMouseEnter,
        style = _props.style,
        other = (0, _objectWithoutProperties3.default)(_props, ['hoverColor', 'onMouseLeave', 'onMouseEnter', 'style']);
    var prepareStyles = this.context.muiTheme.prepareStyles;

    var styles = getStyles(this.props, this.context, this.state);

    return _react2.default.createElement('span', (0, _extends3.default)({}, other, {
      onMouseLeave: this.handleMouseLeave,
      onMouseEnter: this.handleMouseEnter,
      style: prepareStyles((0, _assign2.default)(styles.root, style))
    }));
  };

  return FontIcon;
}(_react.Component), _class.muiName = 'FontIcon', _class.propTypes = {
  /**
   * This is the font color of the font icon. If not specified,
   * this component will default to muiTheme.palette.textColor.
   */
  color: _propTypes2.default.string,
  /**
   * This is the icon color when the mouse hovers over the icon.
   */
  hoverColor: _propTypes2.default.string,
  /** @ignore */
  onMouseEnter: _propTypes2.default.func,
  /** @ignore */
  onMouseLeave: _propTypes2.default.func,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
}, _class.defaultProps = {
  onMouseEnter: function onMouseEnter() {},
  onMouseLeave: function onMouseLeave() {}
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = FontIcon;

/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props) {
  return {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      margin: -props.padding / 2
    },
    item: {
      boxSizing: 'border-box',
      padding: props.padding / 2
    }
  };
}

var GridList = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(GridList, _Component);

  function GridList() {
    (0, _classCallCheck3.default)(this, GridList);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  GridList.prototype.render = function render() {
    var _props = this.props,
        cols = _props.cols,
        padding = _props.padding,
        cellHeight = _props.cellHeight,
        children = _props.children,
        style = _props.style,
        other = (0, _objectWithoutProperties3.default)(_props, ['cols', 'padding', 'cellHeight', 'children', 'style']);
    var prepareStyles = this.context.muiTheme.prepareStyles;

    var styles = getStyles(this.props, this.context);
    var mergedRootStyles = (0, _assign2.default)(styles.root, style);

    var wrappedChildren = _react2.default.Children.map(children, function (currentChild) {
      if (_react2.default.isValidElement(currentChild) && currentChild.type.muiName === 'Subheader') {
        return currentChild;
      }
      var childCols = currentChild.props.cols || 1;
      var childRows = currentChild.props.rows || 1;
      var itemStyle = (0, _assign2.default)({}, styles.item, {
        width: 100 / cols * childCols + '%',
        height: cellHeight === 'auto' ? 'auto' : cellHeight * childRows + padding
      });

      return _react2.default.createElement(
        'div',
        { style: prepareStyles(itemStyle) },
        currentChild
      );
    });

    return _react2.default.createElement(
      'div',
      (0, _extends3.default)({ style: prepareStyles(mergedRootStyles) }, other),
      wrappedChildren
    );
  };

  return GridList;
}(_react.Component), _class.propTypes = {
  /**
   * Number of px for one cell height.
   * You can set `'auto'` if you want to let the children determine the height.
   */
  cellHeight: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.oneOf(['auto'])]),
  /**
   * Grid Tiles that will be in Grid List.
   */
  children: _propTypes2.default.node,
  /**
   * Number of columns.
   */
  cols: _propTypes2.default.number,
  /**
   * Number of px for the padding/spacing between items.
   */
  padding: _propTypes2.default.number,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
}, _class.defaultProps = {
  cols: 2,
  padding: 4,
  cellHeight: 180
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp);
exports.default = GridList;

/***/ }),
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__(11);

var _transitions2 = _interopRequireDefault(_transitions);

var _propTypes3 = __webpack_require__(20);

var _propTypes4 = _interopRequireDefault(_propTypes3);

var _EnhancedButton = __webpack_require__(27);

var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);

var _FontIcon = __webpack_require__(104);

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _Tooltip = __webpack_require__(189);

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _childUtils = __webpack_require__(191);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var baseTheme = context.muiTheme.baseTheme;


  return {
    root: {
      boxSizing: 'border-box',
      overflow: 'visible',
      transition: _transitions2.default.easeOut(),
      padding: baseTheme.spacing.iconSize / 2,
      width: baseTheme.spacing.iconSize * 2,
      height: baseTheme.spacing.iconSize * 2,
      fontSize: 0
    },
    tooltip: {
      boxSizing: 'border-box'
    },
    disabled: {
      color: baseTheme.palette.disabledColor,
      fill: baseTheme.palette.disabledColor,
      cursor: 'default'
    }
  };
}

var IconButton = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(IconButton, _Component);

  function IconButton() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, IconButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      hovered: false,
      isKeyboardFocused: false,
      // Not to be confonded with the touch property.
      // This state is to determined if it's a mobile device.
      touch: false,
      tooltipShown: false
    }, _this.handleBlur = function (event) {
      _this.hideTooltip();
      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }
    }, _this.handleFocus = function (event) {
      _this.showTooltip();
      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
    }, _this.handleMouseLeave = function (event) {
      if (!_this.button.isKeyboardFocused()) {
        _this.hideTooltip();
      }
      _this.setState({ hovered: false });
      if (_this.props.onMouseLeave) {
        _this.props.onMouseLeave(event);
      }
    }, _this.handleMouseOut = function (event) {
      if (_this.props.disabled) _this.hideTooltip();
      if (_this.props.onMouseOut) _this.props.onMouseOut(event);
    }, _this.handleMouseEnter = function (event) {
      _this.showTooltip();

      // Cancel hover styles for touch devices
      if (!_this.state.touch) {
        _this.setState({ hovered: true });
      }
      if (_this.props.onMouseEnter) {
        _this.props.onMouseEnter(event);
      }
    }, _this.handleTouchStart = function (event) {
      _this.setState({ touch: true });

      if (_this.props.onTouchStart) {
        _this.props.onTouchStart(event);
      }
    }, _this.handleKeyboardFocus = function (event, isKeyboardFocused) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          onFocus = _this$props.onFocus,
          onBlur = _this$props.onBlur,
          onKeyboardFocus = _this$props.onKeyboardFocus;

      if (isKeyboardFocused && !disabled) {
        _this.showTooltip();
        if (onFocus) {
          onFocus(event);
        }
      } else {
        _this.hideTooltip();
        if (onBlur) {
          onBlur(event);
        }
      }

      _this.setState({ isKeyboardFocused: isKeyboardFocused });
      if (onKeyboardFocus) {
        onKeyboardFocus(event, isKeyboardFocused);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  IconButton.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.disabled) {
      this.setState({ hovered: false });
    }
  };

  IconButton.prototype.setKeyboardFocus = function setKeyboardFocus() {
    this.button.setKeyboardFocus();
  };

  IconButton.prototype.showTooltip = function showTooltip() {
    if (this.props.tooltip) {
      this.setState({ tooltipShown: true });
    }
  };

  IconButton.prototype.hideTooltip = function hideTooltip() {
    if (this.props.tooltip) this.setState({ tooltipShown: false });
  };

  IconButton.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        disabled = _props.disabled,
        hoveredStyle = _props.hoveredStyle,
        disableTouchRipple = _props.disableTouchRipple,
        children = _props.children,
        iconClassName = _props.iconClassName,
        style = _props.style,
        tooltip = _props.tooltip,
        tooltipPositionProp = _props.tooltipPosition,
        tooltipStyles = _props.tooltipStyles,
        touch = _props.touch,
        iconStyle = _props.iconStyle,
        other = (0, _objectWithoutProperties3.default)(_props, ['disabled', 'hoveredStyle', 'disableTouchRipple', 'children', 'iconClassName', 'style', 'tooltip', 'tooltipPosition', 'tooltipStyles', 'touch', 'iconStyle']);

    var fonticon = void 0;

    var styles = getStyles(this.props, this.context);
    var tooltipPosition = tooltipPositionProp.split('-');

    var hovered = (this.state.hovered || this.state.isKeyboardFocused) && !disabled;

    var mergedRootStyles = (0, _assign2.default)(styles.root, style, hovered ? hoveredStyle : {});

    var tooltipElement = tooltip ? _react2.default.createElement(_Tooltip2.default, {
      label: tooltip,
      show: this.state.tooltipShown,
      touch: touch,
      style: (0, _assign2.default)(styles.tooltip, tooltipStyles),
      verticalPosition: tooltipPosition[0],
      horizontalPosition: tooltipPosition[1]
    }) : null;

    if (iconClassName) {
      var iconHoverColor = iconStyle.iconHoverColor,
          iconStyleFontIcon = (0, _objectWithoutProperties3.default)(iconStyle, ['iconHoverColor']);


      fonticon = _react2.default.createElement(
        _FontIcon2.default,
        {
          className: iconClassName,
          hoverColor: disabled ? null : iconHoverColor,
          style: (0, _assign2.default)({}, disabled && styles.disabled, iconStyleFontIcon),
          color: this.context.muiTheme.baseTheme.palette.textColor
        },
        children
      );
    }

    var childrenStyle = disabled ? (0, _assign2.default)({}, iconStyle, styles.disabled) : iconStyle;

    return _react2.default.createElement(
      _EnhancedButton2.default,
      (0, _extends3.default)({
        ref: function ref(_ref) {
          return _this2.button = _ref;
        }
      }, other, {
        centerRipple: true,
        disabled: disabled,
        onTouchStart: this.handleTouchStart,
        style: mergedRootStyles,
        disableTouchRipple: disableTouchRipple,
        onBlur: this.handleBlur,
        onFocus: this.handleFocus,
        onMouseLeave: this.handleMouseLeave,
        onMouseEnter: this.handleMouseEnter,
        onMouseOut: this.handleMouseOut,
        onKeyboardFocus: this.handleKeyboardFocus
      }),
      tooltipElement,
      fonticon,
      (0, _childUtils.extendChildren)(children, {
        style: childrenStyle
      })
    );
  };

  return IconButton;
}(_react.Component), _class.muiName = 'IconButton', _class.propTypes = {
  /**
   * Can be used to pass a `FontIcon` element as the icon for the button.
   */
  children: _propTypes2.default.node,
  /**
   * The CSS class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * If true, the element's ripple effect will be disabled.
   */
  disableTouchRipple: _propTypes2.default.bool,
  /**
   * If true, the element will be disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element when the component is hovered.
   */
  hoveredStyle: _propTypes2.default.object,
  /**
   * The URL to link to when the button is clicked.
   */
  href: _propTypes2.default.string,
  /**
   * The CSS class name of the icon. Used for setting the icon with a stylesheet.
   */
  iconClassName: _propTypes2.default.string,
  /**
   * Override the inline-styles of the icon element.
   * Note: you can specify iconHoverColor as a String inside this object.
   */
  iconStyle: _propTypes2.default.object,
  /** @ignore */
  onBlur: _propTypes2.default.func,
  /** @ignore */
  onFocus: _propTypes2.default.func,
  /**
   * Callback function fired when the element is focused or blurred by the keyboard.
   *
   * @param {object} event `focus` or `blur` event targeting the element.
   * @param {boolean} keyboardFocused Indicates whether the element is focused.
   */
  onKeyboardFocus: _propTypes2.default.func,
  /** @ignore */
  onMouseEnter: _propTypes2.default.func,
  /** @ignore */
  onMouseLeave: _propTypes2.default.func,
  /** @ignore */
  onMouseOut: _propTypes2.default.func,
  /** @ignore */
  onTouchStart: _propTypes2.default.func,
  /**
   * Callback function fired when the button is touch-tapped.
   *
   * @param {object} event TouchTap event targeting the button.
   */
  onTouchTap: _propTypes2.default.func,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * The text to supply to the element's tooltip.
   */
  tooltip: _propTypes2.default.node,
  /**
   * The vertical and horizontal positions, respectively, of the element's tooltip.
   * Possible values are: "bottom-center", "top-center", "bottom-right", "top-right",
   * "bottom-left", and "top-left".
   */
  tooltipPosition: _propTypes4.default.cornersAndCenter,
  /**
   * Override the inline-styles of the tooltip element.
   */
  tooltipStyles: _propTypes2.default.object,
  /**
   * If true, increase the tooltip element's size. Useful for increasing tooltip
   * readability on mobile devices.
   */
  touch: _propTypes2.default.bool
}, _class.defaultProps = {
  disabled: false,
  disableTouchRipple: false,
  iconStyle: {},
  tooltipPosition: 'bottom-center',
  touch: false
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = IconButton;

/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(14);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _events = __webpack_require__(82);

var _events2 = _interopRequireDefault(_events);

var _propTypes3 = __webpack_require__(20);

var _propTypes4 = _interopRequireDefault(_propTypes3);

var _Menu = __webpack_require__(81);

var _Menu2 = _interopRequireDefault(_Menu);

var _Popover = __webpack_require__(51);

var _Popover2 = _interopRequireDefault(_Popover);

var _warning = __webpack_require__(17);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconMenu = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(IconMenu, _Component);

  function IconMenu() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, IconMenu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      menuInitiallyKeyboardFocused: false,
      open: false
    }, _this.handleItemTouchTap = function (event, child) {
      if (_this.props.touchTapCloseDelay !== 0 && !child.props.hasOwnProperty('menuItems')) {
        var isKeyboard = _events2.default.isKeyboard(event);
        _this.timerCloseId = setTimeout(function () {
          _this.close(isKeyboard ? 'enter' : 'itemTap', isKeyboard);
        }, _this.props.touchTapCloseDelay);
      }

      _this.props.onItemTouchTap(event, child);
    }, _this.handleRequestClose = function (reason) {
      _this.close(reason);
    }, _this.handleEscKeyDownMenu = function (event) {
      _this.close('escape', event);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  IconMenu.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.open != null) {
      this.setState({
        open: nextProps.open,
        anchorEl: this.refs.iconMenuContainer
      });
    }
  };

  IconMenu.prototype.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.timerCloseId);
  };

  IconMenu.prototype.isOpen = function isOpen() {
    return this.state.open;
  };

  IconMenu.prototype.close = function close(reason, isKeyboard) {
    var _this2 = this;

    if (!this.state.open) {
      return;
    }

    if (this.props.open !== null) {
      this.props.onRequestChange(false, reason);
    } else {
      this.setState({ open: false }, function () {
        // Set focus on the icon button when the menu close
        if (isKeyboard) {
          var iconButton = _this2.refs.iconButton;
          _reactDom2.default.findDOMNode(iconButton).focus();
          iconButton.setKeyboardFocus();
        }
      });
    }
  };

  IconMenu.prototype.open = function open(reason, event) {
    if (this.props.open !== null) {
      this.props.onRequestChange(true, reason);

      return this.setState({
        menuInitiallyKeyboardFocused: _events2.default.isKeyboard(event),
        anchorEl: event.currentTarget
      });
    }

    this.setState({
      open: true,
      menuInitiallyKeyboardFocused: _events2.default.isKeyboard(event),
      anchorEl: event.currentTarget
    });

    event.preventDefault();
  };

  IconMenu.prototype.render = function render() {
    var _this3 = this;

    var _props = this.props,
        anchorOrigin = _props.anchorOrigin,
        className = _props.className,
        animated = _props.animated,
        animation = _props.animation,
        iconButtonElement = _props.iconButtonElement,
        iconStyle = _props.iconStyle,
        onItemTouchTap = _props.onItemTouchTap,
        onKeyboardFocus = _props.onKeyboardFocus,
        onMouseDown = _props.onMouseDown,
        onMouseLeave = _props.onMouseLeave,
        onMouseEnter = _props.onMouseEnter,
        onMouseUp = _props.onMouseUp,
        onRequestChange = _props.onRequestChange,
        onTouchTap = _props.onTouchTap,
        listStyle = _props.listStyle,
        menuStyle = _props.menuStyle,
        style = _props.style,
        targetOrigin = _props.targetOrigin,
        touchTapCloseDelay = _props.touchTapCloseDelay,
        useLayerForClickAway = _props.useLayerForClickAway,
        other = (0, _objectWithoutProperties3.default)(_props, ['anchorOrigin', 'className', 'animated', 'animation', 'iconButtonElement', 'iconStyle', 'onItemTouchTap', 'onKeyboardFocus', 'onMouseDown', 'onMouseLeave', 'onMouseEnter', 'onMouseUp', 'onRequestChange', 'onTouchTap', 'listStyle', 'menuStyle', 'style', 'targetOrigin', 'touchTapCloseDelay', 'useLayerForClickAway']);
    var prepareStyles = this.context.muiTheme.prepareStyles;
    var _state = this.state,
        open = _state.open,
        anchorEl = _state.anchorEl;


    var styles = {
      root: {
        display: 'inline-block',
        position: 'relative'
      },
      menu: {
        position: 'relative'
      }
    };

    var mergedRootStyles = (0, _assign2.default)(styles.root, style);
    var mergedMenuStyles = (0, _assign2.default)(styles.menu, menuStyle);

    (0, _warning2.default)(iconButtonElement.type.muiName !== 'SvgIcon', 'Material-UI: You shoud not provide an <SvgIcon /> to the \'iconButtonElement\' property of <IconMenu />.\nYou should wrapped it with an <IconButton />.');

    var iconButtonProps = {
      onKeyboardFocus: onKeyboardFocus,
      onTouchTap: function onTouchTap(event) {
        _this3.open(_events2.default.isKeyboard(event) ? 'keyboard' : 'iconTap', event);
        if (iconButtonElement.props.onTouchTap) {
          iconButtonElement.props.onTouchTap(event);
        }
      },
      ref: 'iconButton'
    };
    if (iconStyle || iconButtonElement.props.iconStyle) {
      iconButtonProps.iconStyle = iconStyle ? (0, _assign2.default)({}, iconStyle, iconButtonElement.props.iconStyle) : iconButtonElement.props.iconStyle;
    }
    var iconButton = _react2.default.cloneElement(iconButtonElement, iconButtonProps);

    var menu = _react2.default.createElement(
      _Menu2.default,
      (0, _extends3.default)({}, other, {
        initiallyKeyboardFocused: this.state.menuInitiallyKeyboardFocused,
        onEscKeyDown: this.handleEscKeyDownMenu,
        onItemTouchTap: this.handleItemTouchTap,
        style: mergedMenuStyles,
        listStyle: listStyle
      }),
      this.props.children
    );

    return _react2.default.createElement(
      'div',
      {
        ref: 'iconMenuContainer',
        className: className,
        onMouseDown: onMouseDown,
        onMouseLeave: onMouseLeave,
        onMouseEnter: onMouseEnter,
        onMouseUp: onMouseUp,
        onTouchTap: onTouchTap,
        style: prepareStyles(mergedRootStyles)
      },
      iconButton,
      _react2.default.createElement(
        _Popover2.default,
        {
          anchorOrigin: anchorOrigin,
          targetOrigin: targetOrigin,
          open: open,
          anchorEl: anchorEl,
          childContextTypes: this.constructor.childContextTypes,
          useLayerForClickAway: useLayerForClickAway,
          onRequestClose: this.handleRequestClose,
          animated: animated,
          animation: animation,
          context: this.context
        },
        menu
      )
    );
  };

  return IconMenu;
}(_react.Component), _class.muiName = 'IconMenu', _class.propTypes = {
  /**
   * This is the point on the icon where the menu
   * `targetOrigin` will attach.
   * Options:
   * vertical: [top, center, bottom]
   * horizontal: [left, middle, right].
   */
  anchorOrigin: _propTypes4.default.origin,
  /**
   * If true, the popover will apply transitions when
   * it gets added to the DOM.
   */
  animated: _propTypes2.default.bool,
  /**
   * Override the default animation component used.
   */
  animation: _propTypes2.default.func,
  /**
   * Should be used to pass `MenuItem` components.
   */
  children: _propTypes2.default.node,
  /**
   * The CSS class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * This is the `IconButton` to render. This button will open the menu.
   */
  iconButtonElement: _propTypes2.default.element.isRequired,
  /**
   * Override the inline-styles of the underlying icon element.
   */
  iconStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of the underlying `List` element.
   */
  listStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of the menu element.
   */
  menuStyle: _propTypes2.default.object,
  /**
   * If true, the value can an be array and allow the menu to be a multi-select.
   */
  multiple: _propTypes2.default.bool,
  /**
   * Callback function fired when a menu item is selected with a touch-tap.
   *
   * @param {object} event TouchTap event targeting the selected menu item element.
   * @param {object} child The selected element.
   */
  onItemTouchTap: _propTypes2.default.func,
  /**
   * Callback function fired when the `IconButton` element is focused or blurred by the keyboard.
   *
   * @param {object} event `focus` or `blur` event targeting the `IconButton` element.
   * @param {boolean} keyboardFocused If true, the `IconButton` element is focused.
   */
  onKeyboardFocus: _propTypes2.default.func,
  /** @ignore */
  onMouseDown: _propTypes2.default.func,
  /** @ignore */
  onMouseEnter: _propTypes2.default.func,
  /** @ignore */
  onMouseLeave: _propTypes2.default.func,
  /** @ignore */
  onMouseUp: _propTypes2.default.func,
  /**
   * Callback function fired when the `open` state of the menu is requested to be changed.
   *
   * @param {boolean} open If true, the menu was requested to be opened.
   * @param {string} reason The reason for the open or close request. Possible values are
   * 'keyboard' and 'iconTap' for open requests; 'enter', 'escape', 'itemTap', and 'clickAway'
   * for close requests.
   */
  onRequestChange: _propTypes2.default.func,
  /**
   * Callback function fired when the `IconButton` element is touch-tapped.
   *
   * @param {object} event TouchTap event targeting the `IconButton` element.
   */
  onTouchTap: _propTypes2.default.func,
  /**
   * If true, the `IconMenu` is opened.
   */
  open: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * This is the point on the menu which will stick to the menu
   * origin.
   * Options:
   * vertical: [top, center, bottom]
   * horizontal: [left, middle, right].
   */
  targetOrigin: _propTypes4.default.origin,
  /**
   * Sets the delay in milliseconds before closing the
   * menu when an item is clicked.
   * If set to 0 then the auto close functionality
   * will be disabled.
   */
  touchTapCloseDelay: _propTypes2.default.number,
  /**
   * If true, the popover will render on top of an invisible
   * layer, which will prevent clicks to the underlying elements.
   */
  useLayerForClickAway: _propTypes2.default.bool
}, _class.defaultProps = {
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'left'
  },
  animated: true,
  multiple: false,
  open: null,
  onItemTouchTap: function onItemTouchTap() {},
  onKeyboardFocus: function onKeyboardFocus() {},
  onMouseDown: function onMouseDown() {},
  onMouseLeave: function onMouseLeave() {},
  onMouseEnter: function onMouseEnter() {},
  onMouseUp: function onMouseUp() {},
  onRequestChange: function onRequestChange() {},
  onTouchTap: function onTouchTap() {},
  targetOrigin: {
    vertical: 'top',
    horizontal: 'left'
  },
  touchTapCloseDelay: 200,
  useLayerForClickAway: false
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = IconMenu;

/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__(11);

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getRelativeValue(value, min, max) {
  var clampedValue = Math.min(Math.max(min, value), max);
  var rangeValue = max - min;
  var relValue = Math.round((clampedValue - min) / rangeValue * 10000) / 10000;
  return relValue * 100;
}

function getStyles(props, context) {
  var max = props.max,
      min = props.min,
      value = props.value;
  var _context$muiTheme = context.muiTheme,
      palette = _context$muiTheme.baseTheme.palette,
      borderRadius = _context$muiTheme.borderRadius;


  var styles = {
    root: {
      position: 'relative',
      height: 4,
      display: 'block',
      width: '100%',
      backgroundColor: palette.primary3Color,
      borderRadius: borderRadius,
      margin: 0,
      overflow: 'hidden'
    },
    bar: {
      height: '100%'
    },
    barFragment1: {},
    barFragment2: {}
  };

  if (props.mode === 'indeterminate') {
    styles.barFragment1 = {
      position: 'absolute',
      backgroundColor: props.color || palette.primary1Color,
      top: 0,
      left: 0,
      bottom: 0,
      transition: _transitions2.default.create('all', '840ms', null, 'cubic-bezier(0.650, 0.815, 0.735, 0.395)')
    };

    styles.barFragment2 = {
      position: 'absolute',
      backgroundColor: props.color || palette.primary1Color,
      top: 0,
      left: 0,
      bottom: 0,
      transition: _transitions2.default.create('all', '840ms', null, 'cubic-bezier(0.165, 0.840, 0.440, 1.000)')
    };
  } else {
    styles.bar.backgroundColor = props.color || palette.primary1Color;
    styles.bar.transition = _transitions2.default.create('width', '.3s', null, 'linear');
    styles.bar.width = getRelativeValue(value, min, max) + '%';
  }

  return styles;
}

var LinearProgress = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(LinearProgress, _Component);

  function LinearProgress() {
    (0, _classCallCheck3.default)(this, LinearProgress);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  LinearProgress.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this.timers = {};

    this.timers.bar1 = this.barUpdate('bar1', 0, this.refs.bar1, [[-35, 100], [100, -90]], 0);

    this.timers.bar2 = setTimeout(function () {
      _this2.barUpdate('bar2', 0, _this2.refs.bar2, [[-200, 100], [107, -8]], 0);
    }, 850);
  };

  LinearProgress.prototype.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.timers.bar1);
    clearTimeout(this.timers.bar2);
  };

  LinearProgress.prototype.barUpdate = function barUpdate(id, step, barElement, stepValues, timeToNextStep) {
    var _this3 = this;

    if (this.props.mode !== 'indeterminate') return;

    timeToNextStep = timeToNextStep || 420;
    step = step || 0;
    step %= 4;

    var right = this.context.muiTheme.isRtl ? 'left' : 'right';
    var left = this.context.muiTheme.isRtl ? 'right' : 'left';

    if (step === 0) {
      barElement.style[left] = stepValues[0][0] + '%';
      barElement.style[right] = stepValues[0][1] + '%';
    } else if (step === 1) {
      barElement.style.transitionDuration = '840ms';
    } else if (step === 2) {
      barElement.style[left] = stepValues[1][0] + '%';
      barElement.style[right] = stepValues[1][1] + '%';
    } else if (step === 3) {
      barElement.style.transitionDuration = '0ms';
    }
    this.timers[id] = setTimeout(function () {
      return _this3.barUpdate(id, step + 1, barElement, stepValues);
    }, timeToNextStep);
  };

  LinearProgress.prototype.render = function render() {
    var _props = this.props,
        style = _props.style,
        other = (0, _objectWithoutProperties3.default)(_props, ['style']);
    var prepareStyles = this.context.muiTheme.prepareStyles;

    var styles = getStyles(this.props, this.context);

    return _react2.default.createElement(
      'div',
      (0, _extends3.default)({}, other, { style: prepareStyles((0, _assign2.default)(styles.root, style)) }),
      _react2.default.createElement(
        'div',
        { style: prepareStyles(styles.bar) },
        _react2.default.createElement('div', { ref: 'bar1', style: prepareStyles(styles.barFragment1) }),
        _react2.default.createElement('div', { ref: 'bar2', style: prepareStyles(styles.barFragment2) })
      )
    );
  };

  return LinearProgress;
}(_react.Component), _class.propTypes = {
  /**
   * The color of the progress bar, defaults to
   * primary color of theme.
   */
  color: _propTypes2.default.string,
  /**
   * The max value of progress, only works in determinate mode.
   */
  max: _propTypes2.default.number,
  /**
   * The min value of progress, only works in determinate mode.
   */
  min: _propTypes2.default.number,
  /**
   * The mode of show your progress, indeterminate for when
   * there is no value for progress.
   */
  mode: _propTypes2.default.oneOf(['determinate', 'indeterminate']),
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * The value of progress, only works in determinate mode.
   */
  value: _propTypes2.default.number
}, _class.defaultProps = {
  mode: 'indeterminate',
  value: 0,
  min: 0,
  max: 100
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp);
exports.default = LinearProgress;

/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _List = __webpack_require__(109);

var _List2 = _interopRequireDefault(_List);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NestedList = function NestedList(props) {
  var children = props.children,
      open = props.open,
      nestedLevel = props.nestedLevel,
      style = props.style;


  if (!open) {
    return null;
  }

  return _react2.default.createElement(
    _List2.default,
    { style: style },
    _react.Children.map(children, function (child) {
      return (0, _react.isValidElement)(child) ? (0, _react.cloneElement)(child, {
        nestedLevel: nestedLevel + 1
      }) : child;
    })
  );
};

NestedList.propTypes = {
  children: _propTypes2.default.node,
  nestedLevel: _propTypes2.default.number.isRequired,
  open: _propTypes2.default.bool.isRequired,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
};

exports.default = NestedList;

/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HotKeyHolder = undefined;

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HotKeyHolder = exports.HotKeyHolder = function () {
  function HotKeyHolder() {
    var _this = this;

    (0, _classCallCheck3.default)(this, HotKeyHolder);

    this.clear = function () {
      _this.timerId = null;
      _this.lastKeys = null;
    };
  }

  HotKeyHolder.prototype.append = function append(key) {
    clearTimeout(this.timerId);
    this.timerId = setTimeout(this.clear, 500);
    return this.lastKeys = (this.lastKeys || '') + key;
  };

  return HotKeyHolder;
}();

/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _propTypes3 = __webpack_require__(20);

var _propTypes4 = _interopRequireDefault(_propTypes3);

var _transitions = __webpack_require__(11);

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var rounded = props.rounded,
      circle = props.circle,
      transitionEnabled = props.transitionEnabled,
      zDepth = props.zDepth;
  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      paper = _context$muiTheme.paper,
      borderRadius = _context$muiTheme.borderRadius;


  return {
    root: {
      color: paper.color,
      backgroundColor: paper.backgroundColor,
      transition: transitionEnabled && _transitions2.default.easeOut(),
      boxSizing: 'border-box',
      fontFamily: baseTheme.fontFamily,
      WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
      boxShadow: paper.zDepthShadows[zDepth - 1], // No shadow for 0 depth papers
      borderRadius: circle ? '50%' : rounded ? borderRadius : '0px'
    }
  };
}

var Paper = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(Paper, _Component);

  function Paper() {
    (0, _classCallCheck3.default)(this, Paper);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  Paper.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        circle = _props.circle,
        rounded = _props.rounded,
        style = _props.style,
        transitionEnabled = _props.transitionEnabled,
        zDepth = _props.zDepth,
        other = (0, _objectWithoutProperties3.default)(_props, ['children', 'circle', 'rounded', 'style', 'transitionEnabled', 'zDepth']);
    var prepareStyles = this.context.muiTheme.prepareStyles;

    var styles = getStyles(this.props, this.context);

    return _react2.default.createElement(
      'div',
      (0, _extends3.default)({}, other, { style: prepareStyles((0, _assign2.default)(styles.root, style)) }),
      children
    );
  };

  return Paper;
}(_react.Component), _class.propTypes = {
  /**
   * Children passed into the paper element.
   */
  children: _propTypes2.default.node,
  /**
   * Set to true to generate a circlular paper container.
   */
  circle: _propTypes2.default.bool,
  /**
   * By default, the paper container will have a border radius.
   * Set this to false to generate a container with sharp corners.
   */
  rounded: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * Set to false to disable CSS transitions for the paper element.
   */
  transitionEnabled: _propTypes2.default.bool,
  /**
   * This number represents the zDepth of the paper shadow.
   */
  zDepth: _propTypes4.default.zDepth
}, _class.defaultProps = {
  circle: false,
  rounded: true,
  transitionEnabled: true,
  zDepth: 1
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp);
exports.default = Paper;

/***/ }),
/* 352 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(14);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactEventListener = __webpack_require__(26);

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _RenderToLayer = __webpack_require__(115);

var _RenderToLayer2 = _interopRequireDefault(_RenderToLayer);

var _propTypes3 = __webpack_require__(20);

var _propTypes4 = _interopRequireDefault(_propTypes3);

var _Paper = __webpack_require__(21);

var _Paper2 = _interopRequireDefault(_Paper);

var _lodash = __webpack_require__(108);

var _lodash2 = _interopRequireDefault(_lodash);

var _PaperWithArrow = __webpack_require__(183);

var _PaperWithArrow2 = _interopRequireDefault(_PaperWithArrow);

var _PopoverAnimationDefault = __webpack_require__(184);

var _PopoverAnimationDefault2 = _interopRequireDefault(_PopoverAnimationDefault);

var _iOSHelpers = __webpack_require__(193);

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
          other = (0, _objectWithoutProperties3.default)(_this$props, ['arrow', 'animated', 'animation', 'anchorEl', 'anchorOrigin', 'autoCloseWhenOffScreen', 'canAutoPosition', 'children', 'onRequestClose', 'style', 'targetOrigin', 'useLayerForClickAway']);


      var styleRoot = style;

      if (!animated) {
        styleRoot = {
          position: 'fixed',
          zIndex: _this.context.muiTheme.zIndex.popover
        };

        if (!_this.state.open) {
          return null;
        }

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
      if (!_this.state.open) {
        return;
      }

      if (!_this.refs.layer.getLayer()) {
        return;
      }

      var targetEl = _this.refs.layer.getLayer().children[0];
      var arrowEl = targetEl.children[0];
      // console.log(
      //   'PLACEMENT children:', this.refs.layer.getLayer().children,
      //   '\nArrow Child:', arrowEl,
      // );

      if (!targetEl) {
        return;
      }

      var _this$props2 = _this.props,
          targetOrigin = _this$props2.targetOrigin,
          anchorOrigin = _this$props2.anchorOrigin;

      var anchorEl = _this.props.anchorEl || _this.anchorEl;
      // console.log(
      //   'ANCHOR ORIGIN:', anchorOrigin,
      //   'TARGET ORIGIN:', targetOrigin,
      // );

      var anchor = _this.getAnchorPosition(anchorEl);
      var target = _this.getTargetPosition(targetEl);
      // console.log(
      //   '\nANCHOR:', anchor,
      //   '\nTARGET:', target,
      // );

      var targetPosition = {
        top: anchor[anchorOrigin.vertical] - target[targetOrigin.vertical],
        left: anchor[anchorOrigin.horizontal] - target[targetOrigin.horizontal]
      };

      if (scrolling && _this.props.autoCloseWhenOffScreen) {
        _this.autoCloseWhenOffScreen(anchor);
      }

      if (_this.props.canAutoPosition) {
        target = _this.getTargetPosition(targetEl); // update as height may have changed
        targetPosition = _this.applyAutoPositionIfNeeded(anchor, target, targetOrigin, anchorOrigin, targetPosition);
      }

      targetEl.style.top = Math.max(0, targetPosition.top) + 'px';
      targetEl.style.left = Math.max(0, targetPosition.left) + 'px';
      targetEl.style.maxHeight = window.innerHeight + 'px';

      if (window.innerHeight - anchor.top > target.bottom) {
        arrowEl.style.top = anchor.height / 2 - 7 + 'px';
        arrowEl.style.bottom = 'auto';

        // arrowEl.style.borderWidth = '0 14px 14px';
        // arrowEl.style.borderTopWidth = 0;
        // arrowEl.style.borderBottomWidth = '14px';
      } else if (window.innerHeight - anchor.top < target.bottom) {
        arrowEl.style.top = 'auto';
        arrowEl.style.bottom = anchor.height / 2 - 7 + 'px';

        //arrowEl.style.borderWidth = '14px 14px 0';
        // arrowEl.style.borderTopWidth = '14px';
        // arrowEl.style.borderBottomWidth = 0;
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

    if (nextProps.open === this.props.open) {
      return;
    }

    if (nextProps.open) {
      clearTimeout(this.timeout);
      this.timeout = null;
      this.anchorEl = nextProps.anchorEl || this.props.anchorEl;
      this.setState({
        open: true,
        closing: false
      });
    } else {
      if (nextProps.animated) {
        if (this.timeout !== null) return;
        this.setState({ closing: true });
        this.timeout = setTimeout(function () {
          _this2.setState({
            open: false
          }, function () {
            _this2.timeout = null;
          });
        }, 500);
      } else {
        this.setState({
          open: false
        });
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
    if ((0, _iOSHelpers.isIOS)() && document.activeElement.tagName === 'INPUT') {
      a.bottom = (0, _iOSHelpers.getOffsetTop)(el) + a.height;
    } else {
      a.bottom = rect.bottom || a.top + a.height;
    }
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
exports.default = PopoverDefault;

/***/ }),
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__(11);

var _transitions2 = _interopRequireDefault(_transitions);

var _colorManipulator = __webpack_require__(35);

var _EnhancedButton = __webpack_require__(27);

var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);

var _Paper = __webpack_require__(21);

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validateLabel(props, propName, componentName) {
  if (process.env.NODE_ENV !== 'production') {
    if (!props.children && props.label !== 0 && !props.label && !props.icon) {
      return new Error('Required prop label or children or icon was not specified in ' + componentName + '.');
    }
  }
}

function getStyles(props, context, state) {
  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      button = _context$muiTheme.button,
      raisedButton = _context$muiTheme.raisedButton,
      borderRadius = _context$muiTheme.borderRadius;
  var disabled = props.disabled,
      disabledBackgroundColor = props.disabledBackgroundColor,
      disabledLabelColor = props.disabledLabelColor,
      fullWidth = props.fullWidth,
      icon = props.icon,
      label = props.label,
      labelPosition = props.labelPosition,
      primary = props.primary,
      secondary = props.secondary,
      style = props.style;


  var amount = primary || secondary ? 0.4 : 0.08;

  var backgroundColor = raisedButton.color;
  var labelColor = raisedButton.textColor;

  if (disabled) {
    backgroundColor = disabledBackgroundColor || raisedButton.disabledColor;
    labelColor = disabledLabelColor || raisedButton.disabledTextColor;
  } else if (primary) {
    backgroundColor = raisedButton.primaryColor;
    labelColor = raisedButton.primaryTextColor;
  } else if (secondary) {
    backgroundColor = raisedButton.secondaryColor;
    labelColor = raisedButton.secondaryTextColor;
  } else {
    if (props.backgroundColor) {
      backgroundColor = props.backgroundColor;
    }
    if (props.labelColor) {
      labelColor = props.labelColor;
    }
  }

  var buttonHeight = style && style.height || button.height;

  return {
    root: {
      display: 'inline-block',
      transition: _transitions2.default.easeOut(),
      minWidth: fullWidth ? '100%' : button.minWidth
    },
    button: {
      height: buttonHeight,
      lineHeight: buttonHeight + 'px',
      width: '100%',
      padding: 0,
      borderRadius: borderRadius,
      transition: _transitions2.default.easeOut(),
      backgroundColor: backgroundColor,
      // That's the default value for a button but not a link
      textAlign: 'center'
    },
    label: {
      position: 'relative',
      opacity: 1,
      fontSize: raisedButton.fontSize,
      letterSpacing: 0,
      textTransform: raisedButton.textTransform || button.textTransform || 'uppercase',
      fontWeight: raisedButton.fontWeight,
      margin: 0,
      userSelect: 'none',
      paddingLeft: icon && labelPosition !== 'before' ? 8 : baseTheme.spacing.desktopGutterLess,
      paddingRight: icon && labelPosition === 'before' ? 8 : baseTheme.spacing.desktopGutterLess,
      color: labelColor
    },
    icon: {
      verticalAlign: 'middle',
      marginLeft: label && labelPosition !== 'before' ? 12 : 0,
      marginRight: label && labelPosition === 'before' ? 12 : 0
    },
    overlay: {
      height: buttonHeight,
      borderRadius: borderRadius,
      backgroundColor: (state.keyboardFocused || state.hovered) && !disabled && (0, _colorManipulator.fade)(labelColor, amount),
      transition: _transitions2.default.easeOut(),
      top: 0
    },
    ripple: {
      color: labelColor,
      opacity: !(primary || secondary) ? 0.1 : 0.16
    }
  };
}

var RaisedButton = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(RaisedButton, _Component);

  function RaisedButton() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RaisedButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      hovered: false,
      keyboardFocused: false,
      touched: false,
      initialZDepth: 0,
      zDepth: 0
    }, _this.handleMouseDown = function (event) {
      // only listen to left clicks
      if (event.button === 0) {
        _this.setState({
          zDepth: _this.state.initialZDepth + 1
        });
      }
      if (_this.props.onMouseDown) {
        _this.props.onMouseDown(event);
      }
    }, _this.handleMouseUp = function (event) {
      _this.setState({
        zDepth: _this.state.initialZDepth
      });
      if (_this.props.onMouseUp) {
        _this.props.onMouseUp(event);
      }
    }, _this.handleMouseLeave = function (event) {
      if (!_this.state.keyboardFocused) {
        _this.setState({
          zDepth: _this.state.initialZDepth,
          hovered: false
        });
      }
      if (_this.props.onMouseLeave) {
        _this.props.onMouseLeave(event);
      }
    }, _this.handleMouseEnter = function (event) {
      if (!_this.state.keyboardFocused && !_this.state.touched) {
        _this.setState({
          hovered: true
        });
      }
      if (_this.props.onMouseEnter) {
        _this.props.onMouseEnter(event);
      }
    }, _this.handleTouchStart = function (event) {
      _this.setState({
        touched: true,
        zDepth: _this.state.initialZDepth + 1
      });

      if (_this.props.onTouchStart) {
        _this.props.onTouchStart(event);
      }
    }, _this.handleTouchEnd = function (event) {
      _this.setState({
        touched: true,
        zDepth: _this.state.initialZDepth
      });

      if (_this.props.onTouchEnd) {
        _this.props.onTouchEnd(event);
      }
    }, _this.handleKeyboardFocus = function (event, keyboardFocused) {
      var zDepth = keyboardFocused && !_this.props.disabled ? _this.state.initialZDepth + 1 : _this.state.initialZDepth;

      _this.setState({
        zDepth: zDepth,
        keyboardFocused: keyboardFocused
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  RaisedButton.prototype.componentWillMount = function componentWillMount() {
    var zDepth = this.props.disabled ? 0 : 1;
    this.setState({
      zDepth: zDepth,
      initialZDepth: zDepth
    });
  };

  RaisedButton.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var zDepth = nextProps.disabled ? 0 : 1;
    var nextState = {
      zDepth: zDepth,
      initialZDepth: zDepth
    };

    if (nextProps.disabled) {
      nextState.hovered = false;
    }

    this.setState(nextState);
  };

  RaisedButton.prototype.render = function render() {
    var _props = this.props,
        backgroundColor = _props.backgroundColor,
        buttonStyle = _props.buttonStyle,
        children = _props.children,
        className = _props.className,
        disabled = _props.disabled,
        disabledBackgroundColor = _props.disabledBackgroundColor,
        disabledLabelColor = _props.disabledLabelColor,
        fullWidth = _props.fullWidth,
        icon = _props.icon,
        label = _props.label,
        labelColor = _props.labelColor,
        labelPosition = _props.labelPosition,
        labelStyle = _props.labelStyle,
        overlayStyle = _props.overlayStyle,
        primary = _props.primary,
        rippleStyle = _props.rippleStyle,
        secondary = _props.secondary,
        style = _props.style,
        other = (0, _objectWithoutProperties3.default)(_props, ['backgroundColor', 'buttonStyle', 'children', 'className', 'disabled', 'disabledBackgroundColor', 'disabledLabelColor', 'fullWidth', 'icon', 'label', 'labelColor', 'labelPosition', 'labelStyle', 'overlayStyle', 'primary', 'rippleStyle', 'secondary', 'style']);
    var prepareStyles = this.context.muiTheme.prepareStyles;

    var styles = getStyles(this.props, this.context, this.state);
    var mergedRippleStyles = (0, _assign2.default)({}, styles.ripple, rippleStyle);

    var buttonEventHandlers = disabled ? {} : {
      onMouseDown: this.handleMouseDown,
      onMouseUp: this.handleMouseUp,
      onMouseLeave: this.handleMouseLeave,
      onMouseEnter: this.handleMouseEnter,
      onTouchStart: this.handleTouchStart,
      onTouchEnd: this.handleTouchEnd,
      onKeyboardFocus: this.handleKeyboardFocus
    };

    var labelElement = label && _react2.default.createElement(
      'span',
      { style: prepareStyles((0, _assign2.default)(styles.label, labelStyle)), key: 'labelElement' },
      label
    );

    var iconCloned = icon && (0, _react.cloneElement)(icon, {
      color: icon.props.color || styles.label.color,
      style: (0, _assign2.default)(styles.icon, icon.props.style),
      key: 'iconCloned'
    });

    // Place label before or after children.
    var enhancedButtonChildren = labelPosition === 'before' ? [labelElement, iconCloned, children] : [children, iconCloned, labelElement];

    return _react2.default.createElement(
      _Paper2.default,
      {
        className: className,
        style: (0, _assign2.default)(styles.root, style),
        zDepth: this.state.zDepth
      },
      _react2.default.createElement(
        _EnhancedButton2.default,
        (0, _extends3.default)({}, other, buttonEventHandlers, {
          ref: 'container',
          disabled: disabled,
          style: (0, _assign2.default)(styles.button, buttonStyle),
          focusRippleColor: mergedRippleStyles.color,
          touchRippleColor: mergedRippleStyles.color,
          focusRippleOpacity: mergedRippleStyles.opacity,
          touchRippleOpacity: mergedRippleStyles.opacity
        }),
        _react2.default.createElement(
          'div',
          {
            ref: 'overlay',
            style: prepareStyles((0, _assign2.default)(styles.overlay, overlayStyle))
          },
          enhancedButtonChildren
        )
      )
    );
  };

  return RaisedButton;
}(_react.Component), _class.muiName = 'RaisedButton', _class.propTypes = {
  /**
   * Override the default background color for the button,
   * but not the default disabled background color
   * (use `disabledBackgroundColor` for this).
   */
  backgroundColor: _propTypes2.default.string,
  /**
   * Override the inline-styles of the button element.
   */
  buttonStyle: _propTypes2.default.object,
  /**
   * The content of the button.
   * If a label is provided via the `label` prop, the text within the label
   * will be displayed in addition to the content provided here.
   */
  children: _propTypes2.default.node,
  /**
   * The CSS class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
    * The element to use as the container for the RaisedButton. Either a string to
    * use a DOM element or a ReactElement. This is useful for wrapping the
    * RaisedButton in a custom Link component. If a ReactElement is given, ensure
    * that it passes all of its given props through to the underlying DOM
    * element and renders its children prop for proper integration.
    */
  containerElement: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  /**
   * If true, the element's ripple effect will be disabled.
   */
  disableTouchRipple: _propTypes2.default.bool,
  /**
   * If true, the button will be disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * Override the default background color for the button
   * when it is disabled.
   */
  disabledBackgroundColor: _propTypes2.default.string,
  /**
   * The color of the button's label when the button is disabled.
   */
  disabledLabelColor: _propTypes2.default.string,
  /**
   * If true, the button will take up the full width of its container.
   */
  fullWidth: _propTypes2.default.bool,
  /**
   * The URL to link to when the button is clicked.
   */
  href: _propTypes2.default.string,
  /**
   * An icon to be displayed within the button.
   */
  icon: _propTypes2.default.node,
  /**
   * The label to be displayed within the button.
   * If content is provided via the `children` prop, that content will be
   * displayed in addition to the label provided here.
   */
  label: validateLabel,
  /**
   * The color of the button's label.
   */
  labelColor: _propTypes2.default.string,
  /**
   * The position of the button's label relative to the button's `children`.
   */
  labelPosition: _propTypes2.default.oneOf(['before', 'after']),
  /**
   * Override the inline-styles of the button's label element.
   */
  labelStyle: _propTypes2.default.object,
  /** @ignore */
  onMouseDown: _propTypes2.default.func,
  /** @ignore */
  onMouseEnter: _propTypes2.default.func,
  /** @ignore */
  onMouseLeave: _propTypes2.default.func,
  /** @ignore */
  onMouseUp: _propTypes2.default.func,
  /** @ignore */
  onTouchEnd: _propTypes2.default.func,
  /** @ignore */
  onTouchStart: _propTypes2.default.func,
  /**
   * Callback function fired when the button is touch-tapped.
   *
   * @param {object} event TouchTap event targeting the button.
   */
  onTouchTap: _propTypes2.default.func,
  /**
   * Override the inline style of the button overlay.
   */
  overlayStyle: _propTypes2.default.object,
  /**
   * If true, the button will use the theme's primary color.
   */
  primary: _propTypes2.default.bool,
  /**
   * Override the inline style of the ripple element.
   */
  rippleStyle: _propTypes2.default.object,
  /**
   * If true, the button will use the theme's secondary color.
   * If both `secondary` and `primary` are true, the button will use
   * the theme's primary color.
   */
  secondary: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
}, _class.defaultProps = {
  disabled: false,
  labelPosition: 'after',
  fullWidth: false,
  primary: false,
  secondary: false
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = RaisedButton;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _autoPrefix = __webpack_require__(38);

var _autoPrefix2 = _interopRequireDefault(_autoPrefix);

var _transitions = __webpack_require__(11);

var _transitions2 = _interopRequireDefault(_transitions);

var _Paper = __webpack_require__(21);

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VIEWBOX_SIZE = 32;

function getStyles(props) {
  var padding = props.size * 0.1; // same implementation of `this.getPaddingSize()`
  return {
    root: {
      position: 'absolute',
      zIndex: 2,
      width: props.size,
      height: props.size,
      padding: padding,
      top: -10000,
      left: -10000,
      transform: 'translate(' + (10000 + props.left) + 'px, ' + (10000 + props.top) + 'px)',
      opacity: props.status === 'hide' ? 0 : 1,
      transition: props.status === 'hide' ? _transitions2.default.create('all', '.3s', 'ease-out') : 'none'
    }
  };
}

var RefreshIndicator = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(RefreshIndicator, _Component);

  function RefreshIndicator() {
    (0, _classCallCheck3.default)(this, RefreshIndicator);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  RefreshIndicator.prototype.componentDidMount = function componentDidMount() {
    this.scalePath(this.refs.path, 0);
    this.rotateWrapper(this.refs.wrapper);
  };

  RefreshIndicator.prototype.componentDidUpdate = function componentDidUpdate() {
    clearTimeout(this.scalePathTimer);
    clearTimeout(this.rotateWrapperTimer);
    clearTimeout(this.rotateWrapperSecondTimer);

    this.scalePath(this.refs.path, 0);
    this.rotateWrapper(this.refs.wrapper);
  };

  RefreshIndicator.prototype.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.scalePathTimer);
    clearTimeout(this.rotateWrapperTimer);
    clearTimeout(this.rotateWrapperSecondTimer);
  };

  RefreshIndicator.prototype.renderChildren = function renderChildren() {
    var prepareStyles = this.context.muiTheme.prepareStyles;

    var paperSize = this.getPaperSize();

    var childrenCmp = null;
    if (this.props.status !== 'ready') {
      var circleStyle = this.getCircleStyle(paperSize);
      childrenCmp = _react2.default.createElement(
        'div',
        {
          ref: 'wrapper',
          style: prepareStyles({
            transition: _transitions2.default.create('transform', '20s', null, 'linear'),
            width: '100%',
            height: '100%'
          })
        },
        _react2.default.createElement(
          'svg',
          {
            style: {
              width: paperSize,
              height: paperSize
            },
            viewBox: '0 0 ' + VIEWBOX_SIZE + ' ' + VIEWBOX_SIZE
          },
          _react2.default.createElement('circle', (0, _extends3.default)({
            ref: 'path',
            style: prepareStyles((0, _assign2.default)(circleStyle.style, {
              transition: _transitions2.default.create('all', '1.5s', null, 'ease-in-out')
            }))
          }, circleStyle.attr))
        )
      );
    } else {
      var _circleStyle = this.getCircleStyle(paperSize);
      var polygonStyle = this.getPolygonStyle(paperSize);
      childrenCmp = _react2.default.createElement(
        'svg',
        {
          style: {
            width: paperSize,
            height: paperSize
          },
          viewBox: '0 0 ' + VIEWBOX_SIZE + ' ' + VIEWBOX_SIZE
        },
        _react2.default.createElement('circle', (0, _extends3.default)({
          style: prepareStyles(_circleStyle.style)
        }, _circleStyle.attr)),
        _react2.default.createElement('polygon', (0, _extends3.default)({
          style: prepareStyles(polygonStyle.style)
        }, polygonStyle.attr))
      );
    }

    return childrenCmp;
  };

  RefreshIndicator.prototype.getTheme = function getTheme() {
    return this.context.muiTheme.refreshIndicator;
  };

  RefreshIndicator.prototype.getPaddingSize = function getPaddingSize() {
    var padding = this.props.size * 0.1;
    return padding;
  };

  RefreshIndicator.prototype.getPaperSize = function getPaperSize() {
    return this.props.size - this.getPaddingSize() * 2;
  };

  RefreshIndicator.prototype.getCircleAttr = function getCircleAttr() {
    return {
      radiu: VIEWBOX_SIZE / 2 - 5,
      originX: VIEWBOX_SIZE / 2,
      originY: VIEWBOX_SIZE / 2,
      strokeWidth: 3
    };
  };

  RefreshIndicator.prototype.getArcDeg = function getArcDeg() {
    var p = this.props.percentage / 100;

    var beginDeg = p * 120;
    var endDeg = p * 410;
    return [beginDeg, endDeg];
  };

  RefreshIndicator.prototype.getFactor = function getFactor() {
    var p = this.props.percentage / 100;
    var p1 = Math.min(1, p / 0.4);

    return p1;
  };

  RefreshIndicator.prototype.getCircleStyle = function getCircleStyle() {
    var isLoading = this.props.status === 'loading';
    var p1 = isLoading ? 1 : this.getFactor();
    var circle = this.getCircleAttr();
    var perimeter = Math.PI * 2 * circle.radiu;

    var _getArcDeg = this.getArcDeg(),
        beginDeg = _getArcDeg[0],
        endDeg = _getArcDeg[1];

    var arcLen = (endDeg - beginDeg) * perimeter / 360;
    var dashOffset = -beginDeg * perimeter / 360;

    var theme = this.getTheme();
    return {
      style: {
        strokeDasharray: arcLen + ', ' + (perimeter - arcLen),
        strokeDashoffset: dashOffset,
        stroke: isLoading || this.props.percentage === 100 ? this.props.loadingColor || theme.loadingStrokeColor : this.props.color || theme.strokeColor,
        strokeLinecap: 'round',
        opacity: p1,
        strokeWidth: circle.strokeWidth * p1,
        fill: 'none'
      },
      attr: {
        cx: circle.originX,
        cy: circle.originY,
        r: circle.radiu
      }
    };
  };

  RefreshIndicator.prototype.getPolygonStyle = function getPolygonStyle() {
    var p1 = this.getFactor();
    var circle = this.getCircleAttr();

    var triangleCx = circle.originX + circle.radiu;
    var triangleCy = circle.originY;
    var dx = circle.strokeWidth * 7 / 4 * p1;
    var trianglePath = triangleCx - dx + ',' + triangleCy + ' ' + (triangleCx + dx) + ',' + triangleCy + ' ' + triangleCx + ',' + (triangleCy + dx);

    var _getArcDeg2 = this.getArcDeg(),
        endDeg = _getArcDeg2[1];

    var theme = this.getTheme();
    return {
      style: {
        fill: this.props.percentage === 100 ? this.props.loadingColor || theme.loadingStrokeColor : this.props.color || theme.strokeColor,
        transform: 'rotate(' + endDeg + 'deg)',
        transformOrigin: circle.originX + 'px ' + circle.originY + 'px',
        opacity: p1
      },
      attr: {
        points: trianglePath
      }
    };
  };

  RefreshIndicator.prototype.scalePath = function scalePath(path, step) {
    var _this2 = this;

    if (this.props.status !== 'loading') return;

    var currStep = (step || 0) % 3;

    var circle = this.getCircleAttr();
    var perimeter = Math.PI * 2 * circle.radiu;
    var arcLen = perimeter * 0.64;

    var strokeDasharray = void 0;
    var strokeDashoffset = void 0;
    var transitionDuration = void 0;

    if (currStep === 0) {
      strokeDasharray = '1, 200';
      strokeDashoffset = 0;
      transitionDuration = '0ms';
    } else if (currStep === 1) {
      strokeDasharray = arcLen + ', 200';
      strokeDashoffset = -15;
      transitionDuration = '750ms';
    } else {
      strokeDasharray = arcLen + ', 200';
      strokeDashoffset = -(perimeter - 1);
      transitionDuration = '850ms';
    }

    _autoPrefix2.default.set(path.style, 'strokeDasharray', strokeDasharray);
    _autoPrefix2.default.set(path.style, 'strokeDashoffset', strokeDashoffset);
    _autoPrefix2.default.set(path.style, 'transitionDuration', transitionDuration);

    this.scalePathTimer = setTimeout(function () {
      return _this2.scalePath(path, currStep + 1);
    }, currStep ? 750 : 250);
  };

  RefreshIndicator.prototype.rotateWrapper = function rotateWrapper(wrapper) {
    var _this3 = this;

    if (this.props.status !== 'loading') return;

    _autoPrefix2.default.set(wrapper.style, 'transform', null);
    _autoPrefix2.default.set(wrapper.style, 'transform', 'rotate(0deg)');
    _autoPrefix2.default.set(wrapper.style, 'transitionDuration', '0ms');

    this.rotateWrapperSecondTimer = setTimeout(function () {
      _autoPrefix2.default.set(wrapper.style, 'transform', 'rotate(1800deg)');
      _autoPrefix2.default.set(wrapper.style, 'transitionDuration', '10s');
      _autoPrefix2.default.set(wrapper.style, 'transitionTimingFunction', 'linear');
    }, 50);

    this.rotateWrapperTimer = setTimeout(function () {
      return _this3.rotateWrapper(wrapper);
    }, 10050);
  };

  RefreshIndicator.prototype.render = function render() {
    var _props = this.props,
        style = _props.style,
        top = _props.top,
        left = _props.left,
        percentage = _props.percentage,
        status = _props.status,
        loadingColor = _props.loadingColor,
        other = (0, _objectWithoutProperties3.default)(_props, ['style', 'top', 'left', 'percentage', 'status', 'loadingColor']);


    var styles = getStyles(this.props, this.context);

    return _react2.default.createElement(
      _Paper2.default,
      (0, _extends3.default)({
        circle: true,
        style: (0, _assign2.default)(styles.root, style)
      }, other),
      this.renderChildren()
    );
  };

  return RefreshIndicator;
}(_react.Component), _class.propTypes = {
  /**
   * Override the theme's color of the indicator while it's status is
   * "ready" and it's percentage is less than 100.
   */
  color: _propTypes2.default.string,
  /**
   * The absolute left position of the indicator in pixels.
   */
  left: _propTypes2.default.number.isRequired,
  /**
   * Override the theme's color of the indicator while
   * it's status is "loading" or when it's percentage is 100.
   */
  loadingColor: _propTypes2.default.string,
  /**
   * The confirmation progress to fetch data. Max value is 100.
   */
  percentage: _propTypes2.default.number,
  /**
   * Size in pixels.
   */
  size: _propTypes2.default.number,
  /**
   * The display status of the indicator. If the status is
   * "ready", the indicator will display the ready state
   * arrow. If the status is "loading", it will display
   * the loading progress indicator. If the status is "hide",
   * the indicator will be hidden.
   */
  status: _propTypes2.default.oneOf(['ready', 'loading', 'hide']),
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * The absolute top position of the indicator in pixels.
   */
  top: _propTypes2.default.number.isRequired
}, _class.defaultProps = {
  percentage: 0,
  size: 40,
  status: 'hide'
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp);
exports.default = RefreshIndicator;

/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TextField = __webpack_require__(63);

var _TextField2 = _interopRequireDefault(_TextField);

var _DropDownMenu = __webpack_require__(166);

var _DropDownMenu2 = _interopRequireDefault(_DropDownMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props) {
  return {
    label: {
      paddingLeft: 0,
      top: props.floatingLabelText ? 6 : -4
    },
    icon: {
      right: 0,
      top: props.floatingLabelText ? 8 : 0
    },
    hideDropDownUnderline: {
      borderTop: 'none'
    },
    dropDownMenu: {
      display: 'block'
    }
  };
}

var SelectField = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(SelectField, _Component);

  function SelectField() {
    (0, _classCallCheck3.default)(this, SelectField);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  SelectField.prototype.render = function render() {
    var _props = this.props,
        autoWidth = _props.autoWidth,
        multiple = _props.multiple,
        children = _props.children,
        style = _props.style,
        labelStyle = _props.labelStyle,
        iconStyle = _props.iconStyle,
        id = _props.id,
        underlineDisabledStyle = _props.underlineDisabledStyle,
        underlineFocusStyle = _props.underlineFocusStyle,
        menuItemStyle = _props.menuItemStyle,
        selectedMenuItemStyle = _props.selectedMenuItemStyle,
        underlineStyle = _props.underlineStyle,
        dropDownMenuProps = _props.dropDownMenuProps,
        errorStyle = _props.errorStyle,
        disabled = _props.disabled,
        floatingLabelFixed = _props.floatingLabelFixed,
        floatingLabelText = _props.floatingLabelText,
        floatingLabelStyle = _props.floatingLabelStyle,
        hintStyle = _props.hintStyle,
        hintText = _props.hintText,
        fullWidth = _props.fullWidth,
        errorText = _props.errorText,
        listStyle = _props.listStyle,
        maxHeight = _props.maxHeight,
        menuStyle = _props.menuStyle,
        onFocus = _props.onFocus,
        onBlur = _props.onBlur,
        onChange = _props.onChange,
        selectionRenderer = _props.selectionRenderer,
        value = _props.value,
        other = (0, _objectWithoutProperties3.default)(_props, ['autoWidth', 'multiple', 'children', 'style', 'labelStyle', 'iconStyle', 'id', 'underlineDisabledStyle', 'underlineFocusStyle', 'menuItemStyle', 'selectedMenuItemStyle', 'underlineStyle', 'dropDownMenuProps', 'errorStyle', 'disabled', 'floatingLabelFixed', 'floatingLabelText', 'floatingLabelStyle', 'hintStyle', 'hintText', 'fullWidth', 'errorText', 'listStyle', 'maxHeight', 'menuStyle', 'onFocus', 'onBlur', 'onChange', 'selectionRenderer', 'value']);


    var styles = getStyles(this.props, this.context);

    return _react2.default.createElement(
      _TextField2.default,
      (0, _extends3.default)({}, other, {
        style: style,
        disabled: disabled,
        floatingLabelFixed: floatingLabelFixed,
        floatingLabelText: floatingLabelText,
        floatingLabelStyle: floatingLabelStyle,
        hintStyle: hintStyle,
        hintText: !hintText && !floatingLabelText ? ' ' : hintText,
        fullWidth: fullWidth,
        errorText: errorText,
        underlineStyle: underlineStyle,
        errorStyle: errorStyle,
        onFocus: onFocus,
        onBlur: onBlur,
        id: id,
        underlineDisabledStyle: underlineDisabledStyle,
        underlineFocusStyle: underlineFocusStyle
      }),
      _react2.default.createElement(
        _DropDownMenu2.default,
        (0, _extends3.default)({
          disabled: disabled,
          style: (0, _assign2.default)(styles.dropDownMenu, menuStyle),
          labelStyle: (0, _assign2.default)(styles.label, labelStyle),
          iconStyle: (0, _assign2.default)(styles.icon, iconStyle),
          menuItemStyle: menuItemStyle,
          selectedMenuItemStyle: selectedMenuItemStyle,
          underlineStyle: styles.hideDropDownUnderline,
          listStyle: listStyle,
          autoWidth: autoWidth,
          value: value,
          onChange: onChange,
          maxHeight: maxHeight,
          multiple: multiple,
          selectionRenderer: selectionRenderer
        }, dropDownMenuProps),
        children
      )
    );
  };

  return SelectField;
}(_react.Component), _class.propTypes = {
  /**
   * If true, the width will automatically be set according to the
   * items inside the menu.
   * To control the width in CSS instead, leave this prop set to `false`.
   */
  autoWidth: _propTypes2.default.bool,
  /**
   * The `MenuItem` elements to populate the select field with.
   * If the menu items have a `label` prop, that value will
   * represent the selected menu item in the rendered select field.
   */
  children: _propTypes2.default.node,
  /**
   * If true, the select field will be disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * Object that can handle and override any property of component DropDownMenu.
   */
  dropDownMenuProps: _propTypes2.default.object,
  /**
   * Override the inline-styles of the error element.
   */
  errorStyle: _propTypes2.default.object,
  /**
   * The error content to display.
   */
  errorText: _propTypes2.default.node,
  /**
   * If true, the floating label will float even when no value is selected.
   */
  floatingLabelFixed: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the floating label.
   */
  floatingLabelStyle: _propTypes2.default.object,
  /**
   * The content of the floating label.
   */
  floatingLabelText: _propTypes2.default.node,
  /**
   * If true, the select field will take up the full width of its container.
   */
  fullWidth: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the hint element.
   */
  hintStyle: _propTypes2.default.object,
  /**
   * The hint content to display.
   */
  hintText: _propTypes2.default.node,
  /**
   * Override the inline-styles of the icon element.
   */
  iconStyle: _propTypes2.default.object,
  /**
   * The id prop for the text field.
   */
  id: _propTypes2.default.string,
  /**
   * Override the label style when the select field is inactive.
   */
  labelStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of the underlying `List` element.
   */
  listStyle: _propTypes2.default.object,
  /**
   * Override the default max-height of the underlying `DropDownMenu` element.
   */
  maxHeight: _propTypes2.default.number,
  /**
   * Override the inline-styles of menu items.
   */
  menuItemStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of the underlying `DropDownMenu` element.
   */
  menuStyle: _propTypes2.default.object,
  /**
   * If true, `value` must be an array and the menu will support
   * multiple selections.
   */
  multiple: _propTypes2.default.bool,
  /** @ignore */
  onBlur: _propTypes2.default.func,
  /**
   * Callback function fired when a menu item is selected.
   *
   * @param {object} event TouchTap event targeting the menu item
   * that was selected.
   * @param {number} key The index of the selected menu item, or undefined
   * if `multiple` is true.
   * @param {any} payload If `multiple` is true, the menu's `value`
   * array with either the menu item's `value` added (if
   * it wasn't already selected) or omitted (if it was already selected).
   * Otherwise, the `value` of the menu item.
   */
  onChange: _propTypes2.default.func,
  /** @ignore */
  onFocus: _propTypes2.default.func,
  /**
   * Override the inline-styles of selected menu items.
   */
  selectedMenuItemStyle: _propTypes2.default.object,
  /**
   * Customize the rendering of the selected item.
   *
   * @param {any} value If `multiple` is true, the menu's `value`
   * array with either the menu item's `value` added (if
   * it wasn't already selected) or omitted (if it was already selected).
   * Otherwise, the `value` of the menu item.
   * @param {any} menuItem The selected `MenuItem`.
   * If `multiple` is true, this will be an array with the `MenuItem`s matching the `value`s parameter.
   */
  selectionRenderer: _propTypes2.default.func,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * Override the inline-styles of the underline element when the select
   * field is disabled.
   */
  underlineDisabledStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of the underline element when the select field
   * is focused.
   */
  underlineFocusStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of the underline element.
   */
  underlineStyle: _propTypes2.default.object,
  /**
   * If `multiple` is true, an array of the `value`s of the selected
   * menu items. Otherwise, the `value` of the selected menu item.
   * If provided, the menu will be a controlled component.
   */
  value: _propTypes2.default.any
}, _class.defaultProps = {
  autoWidth: false,
  disabled: false,
  fullWidth: false,
  multiple: false
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp);
exports.default = SelectField;

/***/ }),
/* 356 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _keycode = __webpack_require__(22);

var _keycode2 = _interopRequireDefault(_keycode);

var _warning = __webpack_require__(17);

var _warning2 = _interopRequireDefault(_warning);

var _transitions = __webpack_require__(11);

var _transitions2 = _interopRequireDefault(_transitions);

var _FocusRipple = __webpack_require__(114);

var _FocusRipple2 = _interopRequireDefault(_FocusRipple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Verifies min/max range.
 * @param   {Object} props         Properties of the React component.
 * @param   {String} propName      Name of the property to validate.
 * @param   {String} componentName Name of the component whose property is being validated.
 * @returns {Object} Returns an Error if min >= max otherwise null.
 */
var minMaxPropType = function minMaxPropType(props, propName, componentName) {
  for (var _len = arguments.length, rest = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    rest[_key - 3] = arguments[_key];
  }

  var error = _propTypes2.default.number.apply(_propTypes2.default, [props, propName, componentName].concat(rest));
  if (error !== null) {
    return error;
  }

  if (props.min >= props.max) {
    var errorMsg = propName === 'min' ? 'min should be less than max' : 'max should be greater than min';
    return new Error(errorMsg);
  }
};

/**
 * Verifies value is within the min/max range.
 * @param   {Object} props         Properties of the React component.
 * @param   {String} propName      Name of the property to validate.
 * @param   {String} componentName Name of the component whose property is being validated.
 * @returns {Object} Returns an Error if the value is not within the range otherwise null.
 */
var valueInRangePropType = function valueInRangePropType(props, propName, componentName) {
  for (var _len2 = arguments.length, rest = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
    rest[_key2 - 3] = arguments[_key2];
  }

  var error = _propTypes2.default.number.apply(_propTypes2.default, [props, propName, componentName].concat(rest));
  if (error !== null) {
    return error;
  }

  var value = props[propName];
  if (value < props.min || props.max < value) {
    return new Error(propName + ' should be within the range specified by min and max');
  }
};

var crossAxisProperty = {
  x: 'height',
  'x-reverse': 'height',
  y: 'width',
  'y-reverse': 'width'
};

var crossAxisOffsetProperty = {
  x: 'top',
  'x-reverse': 'top',
  y: 'left',
  'y-reverse': 'left'
};

var mainAxisProperty = {
  x: 'width',
  'x-reverse': 'width',
  y: 'height',
  'y-reverse': 'height'
};

var mainAxisMarginFromEnd = {
  x: 'marginRight',
  'x-reverse': 'marginLeft',
  y: 'marginTop',
  'y-reverse': 'marginBottom'
};

var mainAxisMarginFromStart = {
  x: 'marginLeft',
  'x-reverse': 'marginRight',
  y: 'marginBottom',
  'y-reverse': 'marginTop'
};

var mainAxisOffsetProperty = {
  x: 'left',
  'x-reverse': 'right',
  y: 'bottom',
  'y-reverse': 'top'
};

var mainAxisClientProperty = {
  x: 'clientWidth',
  'x-reverse': 'clientWidth',
  y: 'clientHeight',
  'y-reverse': 'clientHeight'
};

var mainAxisClientOffsetProperty = {
  x: 'clientX',
  'x-reverse': 'clientX',
  y: 'clientY',
  'y-reverse': 'clientY'
};

var reverseMainAxisOffsetProperty = {
  x: 'right',
  'x-reverse': 'left',
  y: 'top',
  'y-reverse': 'bottom'
};

var isMouseControlInverted = function isMouseControlInverted(axis) {
  return axis === 'x-reverse' || axis === 'y';
};

var calculateAxis = function calculateAxis(axis, isRtl) {
  if (isRtl) {
    switch (axis) {
      case 'x':
        return 'x-reverse';
      case 'x-reverse':
        return 'x';
    }
  }
  return axis;
};

function getPercent(value, min, max) {
  var percent = (value - min) / (max - min);
  if (isNaN(percent)) {
    percent = 0;
  }

  return percent;
}

var getStyles = function getStyles(props, context, state) {
  var _slider, _track, _filledAndRemaining, _handle, _Object$assign2, _Object$assign3;

  var axis = props.axis,
      disabled = props.disabled,
      max = props.max,
      min = props.min;
  var _context$muiTheme = context.muiTheme,
      isRtl = _context$muiTheme.isRtl,
      _context$muiTheme$sli = _context$muiTheme.slider,
      handleColorZero = _context$muiTheme$sli.handleColorZero,
      handleFillColor = _context$muiTheme$sli.handleFillColor,
      handleSize = _context$muiTheme$sli.handleSize,
      handleSizeDisabled = _context$muiTheme$sli.handleSizeDisabled,
      handleSizeActive = _context$muiTheme$sli.handleSizeActive,
      trackSize = _context$muiTheme$sli.trackSize,
      trackColor = _context$muiTheme$sli.trackColor,
      trackColorSelected = _context$muiTheme$sli.trackColorSelected,
      rippleColor = _context$muiTheme$sli.rippleColor,
      selectionColor = _context$muiTheme$sli.selectionColor;


  var fillGutter = handleSize / 2;
  var disabledGutter = trackSize + handleSizeDisabled / 2;
  var calcDisabledSpacing = disabled ? ' - ' + disabledGutter + 'px' : '';
  var percent = getPercent(state.value, min, max);
  var calculatedAxis = calculateAxis(axis, isRtl);

  var styles = {
    slider: (_slider = {
      touchCallout: 'none',
      userSelect: 'none',
      cursor: 'default'
    }, _slider[crossAxisProperty[calculatedAxis]] = handleSizeActive, _slider[mainAxisProperty[calculatedAxis]] = '100%', _slider.position = 'relative', _slider.marginTop = 24, _slider.marginBottom = 48, _slider),
    track: (_track = {
      position: 'absolute'
    }, _track[crossAxisOffsetProperty[calculatedAxis]] = (handleSizeActive - trackSize) / 2, _track[mainAxisOffsetProperty[calculatedAxis]] = 0, _track[mainAxisProperty[calculatedAxis]] = '100%', _track[crossAxisProperty[calculatedAxis]] = trackSize, _track),
    filledAndRemaining: (_filledAndRemaining = {
      directionInvariant: true,
      position: 'absolute'
    }, _filledAndRemaining[crossAxisOffsetProperty] = 0, _filledAndRemaining[crossAxisProperty[calculatedAxis]] = '100%', _filledAndRemaining.transition = _transitions2.default.easeOut(null, 'margin'), _filledAndRemaining),
    handle: (_handle = {
      directionInvariant: true,
      boxSizing: 'border-box',
      position: 'absolute',
      cursor: 'pointer',
      pointerEvents: 'inherit'
    }, _handle[crossAxisOffsetProperty[calculatedAxis]] = 0, _handle[mainAxisOffsetProperty[calculatedAxis]] = percent === 0 ? '0%' : percent * 100 + '%', _handle.zIndex = 1, _handle.margin = {
      x: trackSize / 2 + 'px 0 0 0',
      'x-reverse': trackSize / 2 + 'px 0 0 0',
      y: '0 0 0 ' + trackSize / 2 + 'px',
      'y-reverse': '0 0 0 ' + trackSize / 2 + 'px'
    }[calculatedAxis], _handle.width = handleSize, _handle.height = handleSize, _handle.backgroundColor = selectionColor, _handle.backgroundClip = 'padding-box', _handle.border = '0px solid transparent', _handle.borderRadius = '50%', _handle.transform = {
      x: 'translate(-50%, -50%)',
      'x-reverse': 'translate(50%, -50%)',
      y: 'translate(-50%, 50%)',
      'y-reverse': 'translate(-50%, -50%)'
    }[calculatedAxis], _handle.transition = _transitions2.default.easeOut('450ms', 'background') + ', ' + _transitions2.default.easeOut('450ms', 'border-color') + ', ' + _transitions2.default.easeOut('450ms', 'width') + ', ' + _transitions2.default.easeOut('450ms', 'height'), _handle.overflow = 'visible', _handle.outline = 'none', _handle),
    handleWhenDisabled: {
      boxSizing: 'content-box',
      cursor: 'not-allowed',
      backgroundColor: trackColor,
      width: handleSizeDisabled,
      height: handleSizeDisabled,
      border: 'none'
    },
    handleWhenPercentZero: {
      border: trackSize + 'px solid ' + handleColorZero,
      backgroundColor: handleFillColor,
      boxShadow: 'none'
    },
    handleWhenPercentZeroAndDisabled: {
      cursor: 'not-allowed',
      width: handleSizeDisabled,
      height: handleSizeDisabled
    },
    handleWhenPercentZeroAndFocused: {
      border: trackSize + 'px solid ' + trackColorSelected
    },
    handleWhenActive: {
      width: handleSizeActive,
      height: handleSizeActive
    },
    ripple: {
      height: handleSize,
      width: handleSize,
      overflow: 'visible'
    },
    rippleWhenPercentZero: {
      top: -trackSize,
      left: -trackSize
    },
    rippleInner: {
      height: '300%',
      width: '300%',
      top: -handleSize,
      left: -handleSize
    },
    rippleColor: {
      fill: percent === 0 ? handleColorZero : rippleColor
    }
  };
  styles.filled = (0, _assign2.default)({}, styles.filledAndRemaining, (_Object$assign2 = {}, _Object$assign2[mainAxisOffsetProperty[calculatedAxis]] = 0, _Object$assign2.backgroundColor = disabled ? trackColor : selectionColor, _Object$assign2[mainAxisMarginFromEnd[calculatedAxis]] = fillGutter, _Object$assign2[mainAxisProperty[calculatedAxis]] = 'calc(' + percent * 100 + '%' + calcDisabledSpacing + ')', _Object$assign2));
  styles.remaining = (0, _assign2.default)({}, styles.filledAndRemaining, (_Object$assign3 = {}, _Object$assign3[reverseMainAxisOffsetProperty[calculatedAxis]] = 0, _Object$assign3.backgroundColor = (state.hovered || state.focused) && !disabled ? trackColorSelected : trackColor, _Object$assign3[mainAxisMarginFromStart[calculatedAxis]] = fillGutter, _Object$assign3[mainAxisProperty[calculatedAxis]] = 'calc(' + (1 - percent) * 100 + '%' + calcDisabledSpacing + ')', _Object$assign3));

  return styles;
};

var Slider = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(Slider, _Component);

  function Slider() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Slider);

    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      active: false,
      dragging: false,
      focused: false,
      hovered: false,
      value: 0
    }, _this.track = null, _this.handle = null, _this.handleKeyDown = function (event) {
      var _this$props = _this.props,
          axis = _this$props.axis,
          min = _this$props.min,
          max = _this$props.max,
          step = _this$props.step;
      var isRtl = _this.context.muiTheme.isRtl;


      var calculatedAxis = calculateAxis(axis, isRtl);

      var action = void 0;

      switch ((0, _keycode2.default)(event)) {
        case 'page down':
        case 'down':
          if (calculatedAxis === 'y-reverse') {
            action = 'increase';
          } else {
            action = 'decrease';
          }
          break;
        case 'left':
          if (calculatedAxis === 'x-reverse') {
            action = 'increase';
          } else {
            action = 'decrease';
          }
          break;
        case 'page up':
        case 'up':
          if (calculatedAxis === 'y-reverse') {
            action = 'decrease';
          } else {
            action = 'increase';
          }
          break;
        case 'right':
          if (calculatedAxis === 'x-reverse') {
            action = 'decrease';
          } else {
            action = 'increase';
          }
          break;
        case 'home':
          action = 'min';
          break;
        case 'end':
          action = 'max';
          break;
      }

      if (action) {
        var newValue = void 0;

        // Cancel scroll
        event.preventDefault();

        switch (action) {
          case 'decrease':
            newValue = _this.state.value - step;
            break;
          case 'increase':
            newValue = _this.state.value + step;
            break;
          case 'min':
            newValue = min;
            break;
          case 'max':
            newValue = max;
            break;
        }

        // We need to use toFixed() because of float point errors.
        // For example, 0.01 + 0.06 = 0.06999999999999999
        newValue = parseFloat(newValue.toFixed(5));

        if (newValue > max) {
          newValue = max;
        } else if (newValue < min) {
          newValue = min;
        }

        if (_this.state.value !== newValue) {
          _this.setState({
            value: newValue
          });

          if (_this.props.onChange) {
            _this.props.onChange(event, newValue);
          }
        }
      }
    }, _this.handleDragMouseMove = function (event) {
      _this.onDragUpdate(event, 'mouse');
    }, _this.handleTouchMove = function (event) {
      _this.onDragUpdate(event, 'touch');
    }, _this.handleMouseEnd = function (event) {
      document.removeEventListener('mousemove', _this.handleDragMouseMove);
      document.removeEventListener('mouseup', _this.handleMouseEnd);

      _this.onDragStop(event);
    }, _this.handleTouchEnd = function (event) {
      document.removeEventListener('touchmove', _this.handleTouchMove);
      document.removeEventListener('touchup', _this.handleTouchEnd);
      document.removeEventListener('touchend', _this.handleTouchEnd);
      document.removeEventListener('touchcancel', _this.handleTouchEnd);

      _this.onDragStop(event);
    }, _this.handleTouchStart = function (event) {
      var _this$props2 = _this.props,
          axis = _this$props2.axis,
          disabled = _this$props2.disabled;
      var isRtl = _this.context.muiTheme.isRtl;


      if (disabled) {
        return;
      }

      var calculatedAxis = calculateAxis(axis, isRtl);

      var position = void 0;
      if (isMouseControlInverted(calculatedAxis)) {
        position = _this.getTrackOffset() - event.touches[0][mainAxisClientOffsetProperty[calculatedAxis]];
      } else {
        position = event.touches[0][mainAxisClientOffsetProperty[calculatedAxis]] - _this.getTrackOffset();
      }
      _this.setValueFromPosition(event, position);

      document.addEventListener('touchmove', _this.handleTouchMove);
      document.addEventListener('touchup', _this.handleTouchEnd);
      document.addEventListener('touchend', _this.handleTouchEnd);
      document.addEventListener('touchcancel', _this.handleTouchEnd);

      _this.onDragStart(event);

      // Cancel scroll and context menu
      event.preventDefault();
    }, _this.handleFocus = function (event) {
      _this.setState({
        focused: true
      });

      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
    }, _this.handleBlur = function (event) {
      _this.setState({
        focused: false,
        active: false
      });

      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }
    }, _this.handleMouseDown = function (event) {
      var _this$props3 = _this.props,
          axis = _this$props3.axis,
          disabled = _this$props3.disabled;
      var isRtl = _this.context.muiTheme.isRtl;


      if (disabled) {
        return;
      }

      var calculatedAxis = calculateAxis(axis, isRtl);

      var position = void 0;
      if (isMouseControlInverted(calculatedAxis)) {
        position = _this.getTrackOffset() - event[mainAxisClientOffsetProperty[calculatedAxis]];
      } else {
        position = event[mainAxisClientOffsetProperty[calculatedAxis]] - _this.getTrackOffset();
      }
      _this.setValueFromPosition(event, position);

      document.addEventListener('mousemove', _this.handleDragMouseMove);
      document.addEventListener('mouseup', _this.handleMouseEnd);

      // Cancel text selection
      event.preventDefault();

      // Set focus manually since we called preventDefault()
      _this.handle.focus();

      _this.onDragStart(event);
    }, _this.handleMouseUp = function () {
      if (!_this.props.disabled) {
        _this.setState({
          active: false
        });
      }
    }, _this.handleMouseEnter = function () {
      _this.setState({
        hovered: true
      });
    }, _this.handleMouseLeave = function () {
      _this.setState({
        hovered: false
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  Slider.prototype.componentWillMount = function componentWillMount() {
    var _props = this.props,
        valueProp = _props.value,
        defaultValue = _props.defaultValue,
        min = _props.min,
        max = _props.max;


    var value = valueProp;
    if (value === undefined) {
      value = defaultValue !== undefined ? defaultValue : min;
    }

    if (value > max) {
      value = max;
    } else if (value < min) {
      value = min;
    }

    this.setState({
      value: value
    });
  };

  Slider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.value !== undefined && !this.state.dragging) {
      this.setState({
        value: nextProps.value
      });
    }
  };

  Slider.prototype.getValue = function getValue() {
    (0, _warning2.default)(false, 'Material-UI Slider: getValue() method is deprecated.\n      Use the onChange callbacks instead.\n      It will be removed with v0.17.0.');

    return this.state.value;
  };

  Slider.prototype.clearValue = function clearValue() {
    (0, _warning2.default)(false, 'Material-UI Slider: clearValue() method is deprecated.\n      Use the value property to control the component instead.\n      It will be removed with v0.17.0.');

    this.setState({
      value: this.props.min
    });
  };

  Slider.prototype.getTrackOffset = function getTrackOffset() {
    var axis = this.props.axis;
    var isRtl = this.context.muiTheme.isRtl;


    var calculatedAxis = calculateAxis(axis, isRtl);

    return this.track.getBoundingClientRect()[mainAxisOffsetProperty[calculatedAxis]];
  };

  Slider.prototype.onDragStart = function onDragStart(event) {
    this.setState({
      dragging: true,
      active: true
    });

    if (this.props.onDragStart) {
      this.props.onDragStart(event);
    }
  };

  Slider.prototype.onDragUpdate = function onDragUpdate(event, type) {
    var _this2 = this;

    var _props2 = this.props,
        axis = _props2.axis,
        disabled = _props2.disabled;
    var isRtl = this.context.muiTheme.isRtl;


    if (this.dragRunning) {
      return;
    }
    this.dragRunning = true;

    requestAnimationFrame(function () {
      _this2.dragRunning = false;

      var calculatedAxis = calculateAxis(axis, isRtl);
      var source = type === 'touch' ? event.touches[0] : event;

      var position = void 0;
      if (isMouseControlInverted(calculatedAxis)) {
        position = _this2.getTrackOffset() - source[mainAxisClientOffsetProperty[calculatedAxis]];
      } else {
        position = source[mainAxisClientOffsetProperty[calculatedAxis]] - _this2.getTrackOffset();
      }

      if (!disabled) {
        _this2.setValueFromPosition(event, position);
      }
    });
  };

  Slider.prototype.onDragStop = function onDragStop(event) {
    this.setState({
      dragging: false,
      active: false
    });

    if (this.props.onDragStop) {
      this.props.onDragStop(event);
    }
  };

  Slider.prototype.setValueFromPosition = function setValueFromPosition(event, position) {
    var _props3 = this.props,
        axis = _props3.axis,
        step = _props3.step,
        min = _props3.min,
        max = _props3.max;
    var isRtl = this.context.muiTheme.isRtl;


    var calculatedAxis = calculateAxis(axis, isRtl);
    var positionMax = this.track[mainAxisClientProperty[calculatedAxis]];

    var value = void 0;

    if (position <= 0) {
      value = min;
    } else if (position >= positionMax) {
      value = max;
    } else {
      value = position / positionMax * (max - min);
      value = Math.round(value / step) * step + min;
      value = parseFloat(value.toFixed(5));
    }

    if (this.state.value !== value) {
      this.setState({
        value: value
      });

      if (this.props.onChange) {
        this.props.onChange(event, value);
      }
    }
  };

  Slider.prototype.render = function render() {
    var _this3 = this;

    var _props4 = this.props,
        axis = _props4.axis,
        disabled = _props4.disabled,
        disableFocusRipple = _props4.disableFocusRipple,
        max = _props4.max,
        min = _props4.min,
        name = _props4.name,
        onBlur = _props4.onBlur,
        onChange = _props4.onChange,
        onDragStart = _props4.onDragStart,
        onDragStop = _props4.onDragStop,
        onFocus = _props4.onFocus,
        required = _props4.required,
        sliderStyle = _props4.sliderStyle,
        step = _props4.step,
        style = _props4.style,
        other = (0, _objectWithoutProperties3.default)(_props4, ['axis', 'disabled', 'disableFocusRipple', 'max', 'min', 'name', 'onBlur', 'onChange', 'onDragStart', 'onDragStop', 'onFocus', 'required', 'sliderStyle', 'step', 'style']);
    var _state = this.state,
        active = _state.active,
        focused = _state.focused,
        hovered = _state.hovered,
        value = _state.value;
    var prepareStyles = this.context.muiTheme.prepareStyles;

    var styles = getStyles(this.props, this.context, this.state);
    var percent = getPercent(value, min, max);

    var handleStyles = {};
    if (percent === 0) {
      handleStyles = (0, _assign2.default)({}, styles.handle, styles.handleWhenPercentZero, active && styles.handleWhenActive, (hovered || focused) && !disabled && styles.handleWhenPercentZeroAndFocused, disabled && styles.handleWhenPercentZeroAndDisabled);
    } else {
      handleStyles = (0, _assign2.default)({}, styles.handle, active && styles.handleWhenActive, disabled && styles.handleWhenDisabled);
    }

    var rippleStyle = (0, _assign2.default)({}, styles.ripple, percent === 0 && styles.rippleWhenPercentZero);

    return _react2.default.createElement(
      'div',
      (0, _extends3.default)({}, other, { style: prepareStyles((0, _assign2.default)({}, style)) }),
      _react2.default.createElement(
        'div',
        {
          style: prepareStyles((0, _assign2.default)({}, styles.slider, sliderStyle)),
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          onMouseDown: this.handleMouseDown,
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave,
          onMouseUp: this.handleMouseUp,
          onTouchStart: this.handleTouchStart,
          onKeyDown: !disabled && this.handleKeyDown
        },
        _react2.default.createElement(
          'div',
          { ref: function ref(node) {
              return _this3.track = node;
            }, style: prepareStyles(styles.track) },
          _react2.default.createElement('div', { style: prepareStyles(styles.filled) }),
          _react2.default.createElement('div', { style: prepareStyles(styles.remaining) }),
          _react2.default.createElement(
            'div',
            {
              ref: function ref(node) {
                return _this3.handle = node;
              },
              style: prepareStyles(handleStyles),
              tabIndex: 0
            },
            !disabled && !disableFocusRipple && _react2.default.createElement(_FocusRipple2.default, {
              style: rippleStyle,
              innerStyle: styles.rippleInner,
              show: (hovered || focused) && !active,
              color: styles.rippleColor.fill
            })
          )
        )
      ),
      _react2.default.createElement('input', {
        type: 'hidden',
        name: name,
        value: value,
        required: required,
        min: min,
        max: max,
        step: step
      })
    );
  };

  return Slider;
}(_react.Component), _class.propTypes = {
  /**
   * The axis on which the slider will slide.
   */
  axis: _propTypes2.default.oneOf(['x', 'x-reverse', 'y', 'y-reverse']),
  /**
   * The default value of the slider.
   */
  defaultValue: valueInRangePropType,
  /**
   * Disables focus ripple if set to true.
   */
  disableFocusRipple: _propTypes2.default.bool,
  /**
   * If true, the slider will not be interactable.
   */
  disabled: _propTypes2.default.bool,
  /**
   * The maximum value the slider can slide to on
   * a scale from 0 to 1 inclusive. Cannot be equal to min.
   */
  max: minMaxPropType,
  /**
   * The minimum value the slider can slide to on a scale
   * from 0 to 1 inclusive. Cannot be equal to max.
   */
  min: minMaxPropType,
  /**
   * The name of the slider. Behaves like the name attribute
   * of an input element.
   */
  name: _propTypes2.default.string,
  /** @ignore */
  onBlur: _propTypes2.default.func,
  /**
   * Callback function that is fired when the slider's value changed.
   *
   * @param {object} event KeyDown event targeting the slider.
   * @param {number} newValue The new value of the slider.
   */
  onChange: _propTypes2.default.func,
  /**
   * Callback function that is fired when the slider has begun to move.
   *
   * @param {object} event MouseDown or TouchStart event targeting the slider.
   */
  onDragStart: _propTypes2.default.func,
  /**
   * Callback function that is fired when the slide has stopped moving.
   *
   * @param {object} event MouseEnd or TouchEnd event targeting the slider.
   */
  onDragStop: _propTypes2.default.func,
  /** @ignore */
  onFocus: _propTypes2.default.func,
  /**
   * Whether or not the slider is required in a form.
   */
  required: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the inner slider element.
   */
  sliderStyle: _propTypes2.default.object,
  /**
   * The granularity the slider can step through values.
   */
  step: _propTypes2.default.number,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * The value of the slider.
   */
  value: valueInRangePropType
}, _class.defaultProps = {
  axis: 'x',
  disabled: false,
  disableFocusRipple: false,
  max: 1,
  min: 0,
  required: true,
  step: 0.01,
  style: {}
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = Slider;

/***/ }),
/* 357 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__(11);

var _transitions2 = _interopRequireDefault(_transitions);

var _ClickAwayListener = __webpack_require__(112);

var _ClickAwayListener2 = _interopRequireDefault(_ClickAwayListener);

var _SnackbarBody = __webpack_require__(358);

var _SnackbarBody2 = _interopRequireDefault(_SnackbarBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context, state) {
  var _context$muiTheme = context.muiTheme,
      desktopSubheaderHeight = _context$muiTheme.baseTheme.spacing.desktopSubheaderHeight,
      zIndex = _context$muiTheme.zIndex;
  var open = state.open;


  var styles = {
    root: {
      position: 'fixed',
      left: '50%',
      display: 'flex',
      bottom: 0,
      zIndex: zIndex.snackbar,
      visibility: open ? 'visible' : 'hidden',
      transform: open ? 'translate(-50%, 0)' : 'translate(-50%, ' + desktopSubheaderHeight + 'px)',
      transition: _transitions2.default.easeOut('400ms', 'transform') + ', ' + _transitions2.default.easeOut('400ms', 'visibility')
    }
  };

  return styles;
}

var Snackbar = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(Snackbar, _Component);

  function Snackbar() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Snackbar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.componentClickAway = function () {
      if (_this.timerTransitionId) {
        // If transitioning, don't close the snackbar.
        return;
      }

      if (_this.props.open !== null && _this.props.onRequestClose) {
        _this.props.onRequestClose('clickaway');
      } else {
        _this.setState({ open: false });
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  Snackbar.prototype.componentWillMount = function componentWillMount() {
    this.setState({
      open: this.props.open,
      message: this.props.message,
      action: this.props.action
    });
  };

  Snackbar.prototype.componentDidMount = function componentDidMount() {
    if (this.state.open) {
      this.setAutoHideTimer();
      this.setTransitionTimer();
    }
  };

  Snackbar.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this2 = this;

    if (this.props.open && nextProps.open && (nextProps.message !== this.props.message || nextProps.action !== this.props.action)) {
      this.setState({
        open: false
      });

      clearTimeout(this.timerOneAtTheTimeId);
      this.timerOneAtTheTimeId = setTimeout(function () {
        _this2.setState({
          message: nextProps.message,
          action: nextProps.action,
          open: true
        });
      }, 400);
    } else {
      var open = nextProps.open;

      this.setState({
        open: open !== null ? open : this.state.open,
        message: nextProps.message,
        action: nextProps.action
      });
    }
  };

  Snackbar.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevState.open !== this.state.open) {
      if (this.state.open) {
        this.setAutoHideTimer();
        this.setTransitionTimer();
      } else {
        clearTimeout(this.timerAutoHideId);
      }
    }
  };

  Snackbar.prototype.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.timerAutoHideId);
    clearTimeout(this.timerTransitionId);
    clearTimeout(this.timerOneAtTheTimeId);
  };

  // Timer that controls delay before snackbar auto hides
  Snackbar.prototype.setAutoHideTimer = function setAutoHideTimer() {
    var _this3 = this;

    var autoHideDuration = this.props.autoHideDuration;

    if (autoHideDuration > 0) {
      clearTimeout(this.timerAutoHideId);
      this.timerAutoHideId = setTimeout(function () {
        if (_this3.props.open !== null && _this3.props.onRequestClose) {
          _this3.props.onRequestClose('timeout');
        } else {
          _this3.setState({ open: false });
        }
      }, autoHideDuration);
    }
  };

  // Timer that controls delay before click-away events are captured (based on when animation completes)


  Snackbar.prototype.setTransitionTimer = function setTransitionTimer() {
    var _this4 = this;

    this.timerTransitionId = setTimeout(function () {
      _this4.timerTransitionId = undefined;
    }, 400);
  };

  Snackbar.prototype.render = function render() {
    var _props = this.props,
        autoHideDuration = _props.autoHideDuration,
        contentStyle = _props.contentStyle,
        bodyStyle = _props.bodyStyle,
        messageProp = _props.message,
        onRequestClose = _props.onRequestClose,
        onActionTouchTap = _props.onActionTouchTap,
        style = _props.style,
        other = (0, _objectWithoutProperties3.default)(_props, ['autoHideDuration', 'contentStyle', 'bodyStyle', 'message', 'onRequestClose', 'onActionTouchTap', 'style']);
    var _state = this.state,
        action = _state.action,
        message = _state.message,
        open = _state.open;
    var prepareStyles = this.context.muiTheme.prepareStyles;

    var styles = getStyles(this.props, this.context, this.state);

    return _react2.default.createElement(
      _ClickAwayListener2.default,
      { onClickAway: open ? this.componentClickAway : null },
      _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, other, { style: prepareStyles((0, _assign2.default)(styles.root, style)) }),
        _react2.default.createElement(_SnackbarBody2.default, {
          action: action,
          contentStyle: contentStyle,
          message: message,
          open: open,
          onActionTouchTap: onActionTouchTap,
          style: bodyStyle
        })
      )
    );
  };

  return Snackbar;
}(_react.Component), _class.propTypes = {
  /**
   * The label for the action on the snackbar.
   */
  action: _propTypes2.default.node,
  /**
   * The number of milliseconds to wait before automatically dismissing.
   * If no value is specified the snackbar will dismiss normally.
   * If a value is provided the snackbar can still be dismissed normally.
   * If a snackbar is dismissed before the timer expires, the timer will be cleared.
   */
  autoHideDuration: _propTypes2.default.number,
  /**
   * Override the inline-styles of the body element.
   */
  bodyStyle: _propTypes2.default.object,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * Override the inline-styles of the content element.
   */
  contentStyle: _propTypes2.default.object,
  /**
   * The message to be displayed.
   *
   * (Note: If the message is an element or array, and the `Snackbar` may re-render while it is still open,
   * ensure that the same object remains as the `message` property if you want to avoid the `Snackbar` hiding and
   * showing again)
   */
  message: _propTypes2.default.node.isRequired,
  /**
   * Fired when the action button is touchtapped.
   *
   * @param {object} event Action button event.
   */
  onActionTouchTap: _propTypes2.default.func,
  /**
   * Fired when the `Snackbar` is requested to be closed by a click outside the `Snackbar`, or after the
   * `autoHideDuration` timer expires.
   *
   * Typically `onRequestClose` is used to set state in the parent component, which is used to control the `Snackbar`
   * `open` prop.
   *
   * The `reason` parameter can optionally be used to control the response to `onRequestClose`,
   * for example ignoring `clickaway`.
   *
   * @param {string} reason Can be:`"timeout"` (`autoHideDuration` expired) or: `"clickaway"`
   */
  onRequestClose: _propTypes2.default.func,
  /**
   * Controls whether the `Snackbar` is opened or not.
   */
  open: _propTypes2.default.bool.isRequired,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = Snackbar;

/***/ }),
/* 358 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SnackbarBody = undefined;

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__(11);

var _transitions2 = _interopRequireDefault(_transitions);

var _withWidth = __webpack_require__(414);

var _withWidth2 = _interopRequireDefault(_withWidth);

var _FlatButton = __webpack_require__(79);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var open = props.open,
      width = props.width;
  var _context$muiTheme = context.muiTheme,
      _context$muiTheme$bas = _context$muiTheme.baseTheme,
      _context$muiTheme$bas2 = _context$muiTheme$bas.spacing,
      desktopGutter = _context$muiTheme$bas2.desktopGutter,
      desktopSubheaderHeight = _context$muiTheme$bas2.desktopSubheaderHeight,
      fontFamily = _context$muiTheme$bas.fontFamily,
      _context$muiTheme$sna = _context$muiTheme.snackbar,
      backgroundColor = _context$muiTheme$sna.backgroundColor,
      textColor = _context$muiTheme$sna.textColor,
      actionColor = _context$muiTheme$sna.actionColor,
      borderRadius = _context$muiTheme.borderRadius;


  var isSmall = width === _withWidth.SMALL;

  var styles = {
    root: {
      fontFamily: fontFamily,
      backgroundColor: backgroundColor,
      padding: '0 ' + desktopGutter + 'px',
      height: desktopSubheaderHeight,
      lineHeight: desktopSubheaderHeight + 'px',
      borderRadius: isSmall ? 0 : borderRadius,
      maxWidth: isSmall ? 'inherit' : 568,
      minWidth: isSmall ? 'inherit' : 288,
      width: isSmall ? 'calc(100vw - ' + desktopGutter * 2 + 'px)' : 'auto',
      flexGrow: isSmall ? 1 : 0
    },
    content: {
      fontSize: 14,
      color: textColor,
      opacity: open ? 1 : 0,
      transition: open ? _transitions2.default.easeOut('500ms', 'opacity', '100ms') : _transitions2.default.easeOut('400ms', 'opacity')
    },
    action: {
      color: actionColor,
      float: 'right',
      marginTop: 6,
      marginRight: -16,
      marginLeft: desktopGutter,
      backgroundColor: 'transparent'
    }
  };

  return styles;
}

var SnackbarBody = function SnackbarBody(props, context) {
  var action = props.action,
      contentStyle = props.contentStyle,
      message = props.message,
      open = props.open,
      onActionTouchTap = props.onActionTouchTap,
      style = props.style,
      other = (0, _objectWithoutProperties3.default)(props, ['action', 'contentStyle', 'message', 'open', 'onActionTouchTap', 'style']);
  var prepareStyles = context.muiTheme.prepareStyles;

  var styles = getStyles(props, context);

  var actionButton = action && _react2.default.createElement(_FlatButton2.default, {
    style: styles.action,
    label: action,
    onTouchTap: onActionTouchTap
  });

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({}, other, { style: prepareStyles((0, _assign2.default)(styles.root, style)) }),
    _react2.default.createElement(
      'div',
      { style: prepareStyles((0, _assign2.default)(styles.content, contentStyle)) },
      _react2.default.createElement(
        'span',
        null,
        message
      ),
      actionButton
    )
  );
};

exports.SnackbarBody = SnackbarBody;
SnackbarBody.propTypes = {
  /**
   * The label for the action on the snackbar.
   */
  action: _propTypes2.default.node,
  /**
   * Override the inline-styles of the content element.
   */
  contentStyle: _propTypes2.default.object,
  /**
   * The message to be displayed.
   *
   * (Note: If the message is an element or array, and the `Snackbar` may re-render while it is still open,
   * ensure that the same object remains as the `message` property if you want to avoid the `Snackbar` hiding and
   * showing again)
   */
  message: _propTypes2.default.node.isRequired,
  /**
   * Fired when the action button is touchtapped.
   *
   * @param {object} event Action button event.
   */
  onActionTouchTap: _propTypes2.default.func,
  /**
   * @ignore
   * Controls whether the `Snackbar` is opened or not.
   */
  open: _propTypes2.default.bool.isRequired,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * @ignore
   * Width of the screen.
   */
  width: _propTypes2.default.number.isRequired
};

SnackbarBody.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};

exports.default = (0, _withWidth2.default)()(SnackbarBody);

/***/ }),
/* 359 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlainStepConnector = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _pure = __webpack_require__(19);

var _pure2 = _interopRequireDefault(_pure);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  /**
   * Override the inline-style of the root element.
   */
  style: _propTypes2.default.object
};

var contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired,
  stepper: _propTypes2.default.object
};

var StepConnector = function StepConnector(props, context) {
  var muiTheme = context.muiTheme,
      stepper = context.stepper;


  var styles = {
    wrapper: {
      flex: '1 1 auto'
    },
    line: {
      display: 'block',
      borderColor: muiTheme.stepper.connectorLineColor
    }
  };

  /**
   * Clean up once we can use CSS pseudo elements
   */
  if (stepper.orientation === 'horizontal') {
    styles.line.marginLeft = -6;
    styles.line.borderTopStyle = 'solid';
    styles.line.borderTopWidth = 1;
  } else if (stepper.orientation === 'vertical') {
    styles.wrapper.marginLeft = 14 + 11; // padding + 1/2 icon
    styles.line.borderLeftStyle = 'solid';
    styles.line.borderLeftWidth = 1;
    styles.line.minHeight = 28;
  }

  var prepareStyles = muiTheme.prepareStyles;


  return _react2.default.createElement(
    'div',
    { style: prepareStyles(styles.wrapper) },
    _react2.default.createElement('span', { style: prepareStyles(styles.line) })
  );
};

StepConnector.propTypes = propTypes;
StepConnector.contextTypes = contextTypes;

exports.PlainStepConnector = StepConnector;
exports.default = (0, _pure2.default)(StepConnector);

/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Subheader = function Subheader(props, context) {
  var children = props.children,
      inset = props.inset,
      style = props.style,
      other = (0, _objectWithoutProperties3.default)(props, ['children', 'inset', 'style']);
  var _context$muiTheme = context.muiTheme,
      prepareStyles = _context$muiTheme.prepareStyles,
      subheader = _context$muiTheme.subheader;


  var styles = {
    root: {
      boxSizing: 'border-box',
      color: subheader.color,
      fontSize: 14,
      fontWeight: subheader.fontWeight,
      lineHeight: '48px',
      paddingLeft: inset ? 72 : 16,
      width: '100%'
    }
  };

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({}, other, { style: prepareStyles((0, _assign2.default)(styles.root, style)) }),
    children
  );
};

Subheader.muiName = 'Subheader';

Subheader.propTypes = {
  /**
   * Node that will be placed inside the `Subheader`.
   */
  children: _propTypes2.default.node,
  /**
   * If true, the `Subheader` will be indented.
   */
  inset: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
};

Subheader.defaultProps = {
  inset: false
};

Subheader.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};

exports.default = Subheader;

/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__(11);

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgIcon = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(SvgIcon, _Component);

  function SvgIcon() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, SvgIcon);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      hovered: false
    }, _this.handleMouseLeave = function (event) {
      _this.setState({ hovered: false });
      _this.props.onMouseLeave(event);
    }, _this.handleMouseEnter = function (event) {
      _this.setState({ hovered: true });
      _this.props.onMouseEnter(event);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  SvgIcon.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        color = _props.color,
        hoverColor = _props.hoverColor,
        onMouseEnter = _props.onMouseEnter,
        onMouseLeave = _props.onMouseLeave,
        style = _props.style,
        viewBox = _props.viewBox,
        other = (0, _objectWithoutProperties3.default)(_props, ['children', 'color', 'hoverColor', 'onMouseEnter', 'onMouseLeave', 'style', 'viewBox']);
    var _context$muiTheme = this.context.muiTheme,
        svgIcon = _context$muiTheme.svgIcon,
        prepareStyles = _context$muiTheme.prepareStyles;


    var offColor = color ? color : 'currentColor';
    var onColor = hoverColor ? hoverColor : offColor;

    var mergedStyles = (0, _assign2.default)({
      display: 'inline-block',
      color: svgIcon.color,
      fill: this.state.hovered ? onColor : offColor,
      height: 24,
      width: 24,
      userSelect: 'none',
      transition: _transitions2.default.easeOut()
    }, style);

    return _react2.default.createElement(
      'svg',
      (0, _extends3.default)({}, other, {
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        style: prepareStyles(mergedStyles),
        viewBox: viewBox
      }),
      children
    );
  };

  return SvgIcon;
}(_react.Component), _class.muiName = 'SvgIcon', _class.propTypes = {
  /**
   * Elements passed into the SVG Icon.
   */
  children: _propTypes2.default.node,
  /**
   * This is the fill color of the svg icon.
   * If not specified, this component will default
   * to muiTheme.palette.textColor.
   */
  color: _propTypes2.default.string,
  /**
   * This is the icon color when the mouse hovers over the icon.
   */
  hoverColor: _propTypes2.default.string,
  /** @ignore */
  onMouseEnter: _propTypes2.default.func,
  /** @ignore */
  onMouseLeave: _propTypes2.default.func,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * Allows you to redefine what the coordinates
   * without units mean inside an svg element. For example,
   * if the SVG element is 500 (width) by 200 (height), and you
   * pass viewBox="0 0 50 20", this means that the coordinates inside
   * the svg will go from the top left corner (0,0) to bottom right (50,20)
   * and each unit will be worth 10px.
   */
  viewBox: _propTypes2.default.string
}, _class.defaultProps = {
  onMouseEnter: function onMouseEnter() {},
  onMouseLeave: function onMouseLeave() {},
  viewBox: '0 0 24 24'
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = SvgIcon;

/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = __webpack_require__(17);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      table = _context$muiTheme.table;


  return {
    root: {
      backgroundColor: table.backgroundColor,
      width: '100%',
      borderCollapse: 'collapse',
      borderSpacing: 0,
      tableLayout: 'fixed',
      fontFamily: baseTheme.fontFamily
    },
    bodyTable: {
      height: props.fixedHeader || props.fixedFooter ? props.height : 'auto',
      overflowX: 'hidden',
      overflowY: 'auto'
    },
    tableWrapper: {
      height: props.fixedHeader || props.fixedFooter ? 'auto' : props.height,
      overflow: 'auto'
    }
  };
}

var Table = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(Table, _Component);

  function Table() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Table);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      allRowsSelected: false
    }, _this.onCellClick = function (rowNumber, columnNumber, event) {
      if (_this.props.onCellClick) _this.props.onCellClick(rowNumber, columnNumber, event);
    }, _this.onCellHover = function (rowNumber, columnNumber, event) {
      if (_this.props.onCellHover) _this.props.onCellHover(rowNumber, columnNumber, event);
    }, _this.onCellHoverExit = function (rowNumber, columnNumber, event) {
      if (_this.props.onCellHoverExit) _this.props.onCellHoverExit(rowNumber, columnNumber, event);
    }, _this.onRowHover = function (rowNumber) {
      if (_this.props.onRowHover) _this.props.onRowHover(rowNumber);
    }, _this.onRowHoverExit = function (rowNumber) {
      if (_this.props.onRowHoverExit) _this.props.onRowHoverExit(rowNumber);
    }, _this.onRowSelection = function (selectedRows) {
      if (_this.state.allRowsSelected) {
        _this.setState({ allRowsSelected: false });
      }

      if (_this.props.onRowSelection) {
        _this.props.onRowSelection(selectedRows);
      }
    }, _this.onSelectAll = function () {
      if (_this.props.onRowSelection) {
        if (!_this.state.allRowsSelected) {
          _this.props.onRowSelection('all');
        } else {
          _this.props.onRowSelection('none');
        }
      }

      _this.setState({ allRowsSelected: !_this.state.allRowsSelected });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  Table.prototype.componentWillMount = function componentWillMount() {
    if (this.props.allRowsSelected) {
      this.setState({ allRowsSelected: true });
    }
  };

  Table.prototype.isScrollbarVisible = function isScrollbarVisible() {
    var tableDivHeight = this.refs.tableDiv.clientHeight;
    var tableBodyHeight = this.refs.tableBody.clientHeight;

    return tableBodyHeight > tableDivHeight;
  };

  Table.prototype.createTableHeader = function createTableHeader(base) {
    return _react2.default.cloneElement(base, {
      enableSelectAll: base.props.enableSelectAll && this.props.selectable && this.props.multiSelectable,
      onSelectAll: this.onSelectAll,
      selectAllSelected: this.state.allRowsSelected
    });
  };

  Table.prototype.createTableBody = function createTableBody(base) {
    return _react2.default.cloneElement(base, {
      allRowsSelected: this.state.allRowsSelected,
      multiSelectable: this.props.multiSelectable,
      onCellClick: this.onCellClick,
      onCellHover: this.onCellHover,
      onCellHoverExit: this.onCellHoverExit,
      onRowHover: this.onRowHover,
      onRowHoverExit: this.onRowHoverExit,
      onRowSelection: this.onRowSelection,
      selectable: this.props.selectable,
      style: (0, _assign2.default)({ height: this.props.height }, base.props.style)
    });
  };

  Table.prototype.createTableFooter = function createTableFooter(base) {
    return base;
  };

  Table.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        className = _props.className,
        fixedFooter = _props.fixedFooter,
        fixedHeader = _props.fixedHeader,
        style = _props.style,
        wrapperStyle = _props.wrapperStyle,
        headerStyle = _props.headerStyle,
        bodyStyle = _props.bodyStyle,
        footerStyle = _props.footerStyle;
    var prepareStyles = this.context.muiTheme.prepareStyles;

    var styles = getStyles(this.props, this.context);

    var tHead = void 0;
    var tFoot = void 0;
    var tBody = void 0;

    _react2.default.Children.forEach(children, function (child) {
      if (!_react2.default.isValidElement(child)) return;

      var muiName = child.type.muiName;

      if (muiName === 'TableBody') {
        tBody = _this2.createTableBody(child);
      } else if (muiName === 'TableHeader') {
        tHead = _this2.createTableHeader(child);
      } else if (muiName === 'TableFooter') {
        tFoot = _this2.createTableFooter(child);
      } else {
        (0, _warning2.default)(false, 'Material-UI: Children of the Table component must be TableBody or TableHeader or TableFooter.\n           Nothing is rendered.');
      }
    });

    // If we could not find a table-header and a table-body, do not attempt to display anything.
    if (!tBody && !tHead) return null;

    var mergedTableStyle = (0, _assign2.default)(styles.root, style);
    var headerTable = void 0;
    var footerTable = void 0;
    var inlineHeader = void 0;
    var inlineFooter = void 0;

    if (fixedHeader) {
      headerTable = _react2.default.createElement(
        'div',
        { style: prepareStyles((0, _assign2.default)({}, headerStyle)) },
        _react2.default.createElement(
          'table',
          { className: className, style: mergedTableStyle },
          tHead
        )
      );
    } else {
      inlineHeader = tHead;
    }

    if (tFoot !== undefined) {
      if (fixedFooter) {
        footerTable = _react2.default.createElement(
          'div',
          { style: prepareStyles((0, _assign2.default)({}, footerStyle)) },
          _react2.default.createElement(
            'table',
            { className: className, style: prepareStyles(mergedTableStyle) },
            tFoot
          )
        );
      } else {
        inlineFooter = tFoot;
      }
    }

    return _react2.default.createElement(
      'div',
      { style: prepareStyles((0, _assign2.default)(styles.tableWrapper, wrapperStyle)) },
      headerTable,
      _react2.default.createElement(
        'div',
        { style: prepareStyles((0, _assign2.default)(styles.bodyTable, bodyStyle)), ref: 'tableDiv' },
        _react2.default.createElement(
          'table',
          { className: className, style: mergedTableStyle, ref: 'tableBody' },
          inlineHeader,
          inlineFooter,
          tBody
        )
      ),
      footerTable
    );
  };

  return Table;
}(_react.Component), _class.propTypes = {
  /**
   * Set to true to indicate that all rows should be selected.
   */
  allRowsSelected: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the body's table element.
   */
  bodyStyle: _propTypes2.default.object,
  /**
   * Children passed to table.
   */
  children: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * If true, the footer will appear fixed below the table.
   * The default value is true.
   */
  fixedFooter: _propTypes2.default.bool,
  /**
   * If true, the header will appear fixed above the table.
   * The default value is true.
   */
  fixedHeader: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the footer's table element.
   */
  footerStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of the header's table element.
   */
  headerStyle: _propTypes2.default.object,
  /**
   * The height of the table.
   */
  height: _propTypes2.default.string,
  /**
   * If true, multiple table rows can be selected.
   * CTRL/CMD+Click and SHIFT+Click are valid actions.
   * The default value is false.
   */
  multiSelectable: _propTypes2.default.bool,
  /**
   * Called when a row cell is clicked.
   * rowNumber is the row number and columnId is
   * the column number or the column key.
   */
  onCellClick: _propTypes2.default.func,
  /**
   * Called when a table cell is hovered.
   * rowNumber is the row number of the hovered row
   * and columnId is the column number or the column key of the cell.
   */
  onCellHover: _propTypes2.default.func,
  /**
   * Called when a table cell is no longer hovered.
   * rowNumber is the row number of the row and columnId
   * is the column number or the column key of the cell.
   */
  onCellHoverExit: _propTypes2.default.func,
  /**
   * Called when a table row is hovered.
   * rowNumber is the row number of the hovered row.
   */
  onRowHover: _propTypes2.default.func,
  /**
   * Called when a table row is no longer hovered.
   * rowNumber is the row number of the row that is no longer hovered.
   */
  onRowHoverExit: _propTypes2.default.func,
  /**
   * Called when a row is selected.
   * selectedRows is an array of all row selections.
   * IF all rows have been selected, the string "all"
   * will be returned instead to indicate that all rows have been selected.
   */
  onRowSelection: _propTypes2.default.func,
  /**
   * If true, table rows can be selected.
   * If multiple row selection is desired, enable multiSelectable.
   * The default value is true.
   */
  selectable: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * Override the inline-styles of the table's wrapper element.
   */
  wrapperStyle: _propTypes2.default.object
}, _class.defaultProps = {
  allRowsSelected: false,
  fixedFooter: true,
  fixedHeader: true,
  height: 'inherit',
  multiSelectable: false,
  selectable: true
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = Table;

/***/ }),
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__(11);

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var _context$muiTheme = context.muiTheme,
      inkBar = _context$muiTheme.inkBar,
      isRtl = _context$muiTheme.isRtl;


  return {
    root: {
      left: props.left,
      width: props.width,
      bottom: 0,
      display: 'block',
      backgroundColor: props.color || inkBar.backgroundColor,
      height: 2,
      marginTop: -2,
      position: 'relative',
      transition: _transitions2.default.easeOut('1s', isRtl ? 'right' : 'left')
    }
  };
}

var InkBar = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(InkBar, _Component);

  function InkBar() {
    (0, _classCallCheck3.default)(this, InkBar);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  InkBar.prototype.render = function render() {
    var style = this.props.style;
    var prepareStyles = this.context.muiTheme.prepareStyles;

    var styles = getStyles(this.props, this.context);

    return _react2.default.createElement('div', { style: prepareStyles((0, _assign2.default)(styles.root, style)) });
  };

  return InkBar;
}(_react.Component), _class.propTypes = {
  color: _propTypes2.default.string,
  left: _propTypes2.default.string.isRequired,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  width: _propTypes2.default.string.isRequired
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp);
exports.default = InkBar;

/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  width: '100%',
  position: 'relative',
  textAlign: 'initial'
};

var TabTemplate = function TabTemplate(_ref) {
  var children = _ref.children,
      selected = _ref.selected,
      style = _ref.style;

  var templateStyle = (0, _assign2.default)({}, styles, style);
  if (!selected) {
    templateStyle.height = 0;
    templateStyle.overflow = 'hidden';
  }

  return _react2.default.createElement(
    'div',
    { style: templateStyle },
    children
  );
};

TabTemplate.propTypes = {
  children: _propTypes2.default.node,
  selected: _propTypes2.default.bool,
  style: _propTypes2.default.object
};

exports.default = TabTemplate;

/***/ }),
/* 365 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = __webpack_require__(17);

var _warning2 = _interopRequireDefault(_warning);

var _TabTemplate = __webpack_require__(364);

var _TabTemplate2 = _interopRequireDefault(_TabTemplate);

var _InkBar = __webpack_require__(363);

var _InkBar2 = _interopRequireDefault(_InkBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var tabs = context.muiTheme.tabs;


  return {
    tabItemContainer: {
      width: '100%',
      backgroundColor: tabs.backgroundColor,
      whiteSpace: 'nowrap',
      display: 'flex'
    }
  };
}

var Tabs = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(Tabs, _Component);

  function Tabs() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Tabs);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = { selectedIndex: 0 }, _this.handleTabTouchTap = function (value, event, tab) {
      var valueLink = _this.getValueLink(_this.props);
      var index = tab.props.index;

      if (valueLink.value && valueLink.value !== value || _this.state.selectedIndex !== index) {
        valueLink.requestChange(value, event, tab);
      }

      _this.setState({ selectedIndex: index });

      if (tab.props.onActive) {
        tab.props.onActive(tab);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  Tabs.prototype.componentWillMount = function componentWillMount() {
    var valueLink = this.getValueLink(this.props);
    var initialIndex = this.props.initialSelectedIndex;

    this.setState({
      selectedIndex: valueLink.value !== undefined ? this.getSelectedIndex(this.props) : initialIndex < this.getTabCount() ? initialIndex : 0
    });
  };

  Tabs.prototype.componentWillReceiveProps = function componentWillReceiveProps(newProps, nextContext) {
    var valueLink = this.getValueLink(newProps);
    var newState = {
      muiTheme: nextContext.muiTheme || this.context.muiTheme
    };

    if (valueLink.value !== undefined) {
      newState.selectedIndex = this.getSelectedIndex(newProps);
    }

    this.setState(newState);
  };

  Tabs.prototype.getTabs = function getTabs() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

    var tabs = [];

    _react.Children.forEach(props.children, function (tab) {
      if ((0, _react.isValidElement)(tab)) {
        tabs.push(tab);
      }
    });

    return tabs;
  };

  Tabs.prototype.getTabCount = function getTabCount() {
    return this.getTabs().length;
  };

  // Do not use outside of this component, it will be removed once valueLink is deprecated


  Tabs.prototype.getValueLink = function getValueLink(props) {
    return props.valueLink || {
      value: props.value,
      requestChange: props.onChange
    };
  };

  Tabs.prototype.getSelectedIndex = function getSelectedIndex(props) {
    var valueLink = this.getValueLink(props);
    var selectedIndex = -1;

    this.getTabs(props).forEach(function (tab, index) {
      if (valueLink.value === tab.props.value) {
        selectedIndex = index;
      }
    });

    return selectedIndex;
  };

  Tabs.prototype.getSelected = function getSelected(tab, index) {
    var valueLink = this.getValueLink(this.props);
    return valueLink.value ? valueLink.value === tab.props.value : this.state.selectedIndex === index;
  };

  Tabs.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        contentContainerClassName = _props.contentContainerClassName,
        contentContainerStyle = _props.contentContainerStyle,
        initialSelectedIndex = _props.initialSelectedIndex,
        inkBarStyle = _props.inkBarStyle,
        onChange = _props.onChange,
        style = _props.style,
        tabItemContainerStyle = _props.tabItemContainerStyle,
        tabTemplate = _props.tabTemplate,
        tabTemplateStyle = _props.tabTemplateStyle,
        other = (0, _objectWithoutProperties3.default)(_props, ['contentContainerClassName', 'contentContainerStyle', 'initialSelectedIndex', 'inkBarStyle', 'onChange', 'style', 'tabItemContainerStyle', 'tabTemplate', 'tabTemplateStyle']);
    var prepareStyles = this.context.muiTheme.prepareStyles;

    var styles = getStyles(this.props, this.context);
    var valueLink = this.getValueLink(this.props);
    var tabValue = valueLink.value;
    var tabContent = [];
    var width = 100 / this.getTabCount();

    var tabs = this.getTabs().map(function (tab, index) {
      (0, _warning2.default)(tab.type && tab.type.muiName === 'Tab', 'Material-UI: Tabs only accepts Tab Components as children.\n        Found ' + (tab.type.muiName || tab.type) + ' as child number ' + (index + 1) + ' of Tabs');

      (0, _warning2.default)(!tabValue || tab.props.value !== undefined, 'Material-UI: Tabs value prop has been passed, but Tab ' + index + '\n        does not have a value prop. Needs value if Tabs is going\n        to be a controlled component.');

      tabContent.push(tab.props.children ? (0, _react.createElement)(tabTemplate || _TabTemplate2.default, {
        key: index,
        selected: _this2.getSelected(tab, index),
        style: tabTemplateStyle
      }, tab.props.children) : undefined);

      return (0, _react.cloneElement)(tab, {
        key: index,
        index: index,
        selected: _this2.getSelected(tab, index),
        width: width + '%',
        onTouchTap: _this2.handleTabTouchTap
      });
    });

    var inkBar = this.state.selectedIndex !== -1 ? _react2.default.createElement(_InkBar2.default, {
      left: width * this.state.selectedIndex + '%',
      width: width + '%',
      style: inkBarStyle
    }) : null;

    var inkBarContainerWidth = tabItemContainerStyle ? tabItemContainerStyle.width : '100%';

    return _react2.default.createElement(
      'div',
      (0, _extends3.default)({ style: prepareStyles((0, _assign2.default)({}, style)) }, other),
      _react2.default.createElement(
        'div',
        { style: prepareStyles((0, _assign2.default)(styles.tabItemContainer, tabItemContainerStyle)) },
        tabs
      ),
      _react2.default.createElement(
        'div',
        { style: { width: inkBarContainerWidth } },
        inkBar
      ),
      _react2.default.createElement(
        'div',
        {
          style: prepareStyles((0, _assign2.default)({}, contentContainerStyle)),
          className: contentContainerClassName
        },
        tabContent
      )
    );
  };

  return Tabs;
}(_react.Component), _class.propTypes = {
  /**
   * Should be used to pass `Tab` components.
   */
  children: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * The css class name of the content's container.
   */
  contentContainerClassName: _propTypes2.default.string,
  /**
   * Override the inline-styles of the content's container.
   */
  contentContainerStyle: _propTypes2.default.object,
  /**
   * Specify initial visible tab index.
   * If `initialSelectedIndex` is set but larger than the total amount of specified tabs,
   * `initialSelectedIndex` will revert back to default.
   * If `initialSelectedIndex` is set to any negative value, no tab will be selected intially.
   */
  initialSelectedIndex: _propTypes2.default.number,
  /**
   * Override the inline-styles of the InkBar.
   */
  inkBarStyle: _propTypes2.default.object,
  /**
   * Called when the selected value change.
   */
  onChange: _propTypes2.default.func,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * Override the inline-styles of the tab-labels container.
   */
  tabItemContainerStyle: _propTypes2.default.object,
  /**
   * Override the default tab template used to wrap the content of each tab element.
   */
  tabTemplate: _propTypes2.default.func,
  /**
   * Override the inline-styles of the tab template.
   */
  tabTemplateStyle: _propTypes2.default.object,
  /**
   * Makes Tabs controllable and selects the tab whose value prop matches this prop.
   */
  value: _propTypes2.default.any
}, _class.defaultProps = {
  initialSelectedIndex: 0,
  onChange: function onChange() {}
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = Tabs;

/***/ }),
/* 366 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactEventListener = __webpack_require__(26);

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rowsHeight = 24;

function getStyles(props, context, state) {
  return {
    root: {
      position: 'relative' },
    textarea: {
      height: state.height,
      width: '100%',
      resize: 'none',
      font: 'inherit',
      padding: 0,
      cursor: 'inherit'
    },
    shadow: {
      resize: 'none',
      // Overflow also needed to here to remove the extra row
      // added to textareas in Firefox.
      overflow: 'hidden',
      // Visibility needed to hide the extra text area on ipads
      visibility: 'hidden',
      position: 'absolute',
      height: 'auto'
    }
  };
}

var EnhancedTextarea = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(EnhancedTextarea, _Component);

  function EnhancedTextarea() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, EnhancedTextarea);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      height: null
    }, _this.handleResize = function (event) {
      _this.syncHeightWithShadow(undefined, event);
    }, _this.handleChange = function (event) {
      _this.syncHeightWithShadow(event.target.value);

      if (_this.props.hasOwnProperty('valueLink')) {
        _this.props.valueLink.requestChange(event.target.value);
      }

      if (_this.props.onChange) {
        _this.props.onChange(event);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  EnhancedTextarea.prototype.componentWillMount = function componentWillMount() {
    this.setState({
      height: this.props.rows * rowsHeight
    });
  };

  EnhancedTextarea.prototype.componentDidMount = function componentDidMount() {
    this.syncHeightWithShadow();
  };

  EnhancedTextarea.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value || nextProps.rowsMax !== this.props.rowsMax) {
      this.syncHeightWithShadow(nextProps.value, null, nextProps);
    }
  };

  EnhancedTextarea.prototype.getInputNode = function getInputNode() {
    return this.refs.input;
  };

  EnhancedTextarea.prototype.setValue = function setValue(value) {
    this.getInputNode().value = value;
    this.syncHeightWithShadow(value);
  };

  EnhancedTextarea.prototype.syncHeightWithShadow = function syncHeightWithShadow(newValue, event, props) {
    var shadow = this.refs.shadow;
    var displayText = this.props.hintText && (newValue === '' || newValue === undefined || newValue === null) ? this.props.hintText : newValue;

    if (displayText !== undefined) {
      shadow.value = displayText;
    }

    var newHeight = shadow.scrollHeight;

    // Guarding for jsdom, where scrollHeight isn't present.
    // See https://github.com/tmpvar/jsdom/issues/1013
    if (newHeight === undefined) return;

    props = props || this.props;

    if (props.rowsMax >= props.rows) {
      newHeight = Math.min(props.rowsMax * rowsHeight, newHeight);
    }

    newHeight = Math.max(newHeight, rowsHeight);

    if (this.state.height !== newHeight) {
      this.setState({
        height: newHeight
      });

      if (props.onHeightChange) {
        props.onHeightChange(event, newHeight);
      }
    }
  };

  EnhancedTextarea.prototype.render = function render() {
    var _props = this.props,
        onChange = _props.onChange,
        onHeightChange = _props.onHeightChange,
        rows = _props.rows,
        rowsMax = _props.rowsMax,
        shadowStyle = _props.shadowStyle,
        style = _props.style,
        hintText = _props.hintText,
        textareaStyle = _props.textareaStyle,
        valueLink = _props.valueLink,
        other = (0, _objectWithoutProperties3.default)(_props, ['onChange', 'onHeightChange', 'rows', 'rowsMax', 'shadowStyle', 'style', 'hintText', 'textareaStyle', 'valueLink']);
    var prepareStyles = this.context.muiTheme.prepareStyles;

    var styles = getStyles(this.props, this.context, this.state);
    var rootStyles = (0, _assign2.default)(styles.root, style);
    var textareaStyles = (0, _assign2.default)(styles.textarea, textareaStyle);
    var shadowStyles = (0, _assign2.default)({}, textareaStyles, styles.shadow, shadowStyle);

    if (this.props.hasOwnProperty('valueLink')) {
      other.value = this.props.valueLink.value;
    }

    return _react2.default.createElement(
      'div',
      { style: prepareStyles(rootStyles) },
      _react2.default.createElement(_reactEventListener2.default, { target: 'window', onResize: this.handleResize }),
      _react2.default.createElement('textarea', {
        ref: 'shadow',
        style: prepareStyles(shadowStyles),
        tabIndex: '-1',
        rows: this.props.rows,
        defaultValue: this.props.defaultValue,
        readOnly: true,
        value: this.props.value,
        valueLink: this.props.valueLink
      }),
      _react2.default.createElement('textarea', (0, _extends3.default)({}, other, {
        ref: 'input',
        rows: this.props.rows,
        style: prepareStyles(textareaStyles),
        onChange: this.handleChange
      }))
    );
  };

  return EnhancedTextarea;
}(_react.Component), _class.propTypes = {
  defaultValue: _propTypes2.default.any,
  disabled: _propTypes2.default.bool,
  hintText: _propTypes2.default.node,
  onChange: _propTypes2.default.func,
  onHeightChange: _propTypes2.default.func,
  rows: _propTypes2.default.number,
  rowsMax: _propTypes2.default.number,
  shadowStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  textareaStyle: _propTypes2.default.object,
  value: _propTypes2.default.string,
  valueLink: _propTypes2.default.object
}, _class.defaultProps = {
  rows: 1
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = EnhancedTextarea;

/***/ }),
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(14);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _shallowEqual = __webpack_require__(49);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _transitions = __webpack_require__(11);

var _transitions2 = _interopRequireDefault(_transitions);

var _EnhancedTextarea = __webpack_require__(366);

var _EnhancedTextarea2 = _interopRequireDefault(_EnhancedTextarea);

var _TextFieldHint = __webpack_require__(368);

var _TextFieldHint2 = _interopRequireDefault(_TextFieldHint);

var _TextFieldLabel = __webpack_require__(369);

var _TextFieldLabel2 = _interopRequireDefault(_TextFieldLabel);

var _TextFieldUnderline = __webpack_require__(370);

var _TextFieldUnderline2 = _interopRequireDefault(_TextFieldUnderline);

var _warning = __webpack_require__(17);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getStyles = function getStyles(props, context, state) {
  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      _context$muiTheme$tex = _context$muiTheme.textField,
      floatingLabelColor = _context$muiTheme$tex.floatingLabelColor,
      focusColor = _context$muiTheme$tex.focusColor,
      textColor = _context$muiTheme$tex.textColor,
      disabledTextColor = _context$muiTheme$tex.disabledTextColor,
      backgroundColor = _context$muiTheme$tex.backgroundColor,
      errorColor = _context$muiTheme$tex.errorColor;


  var styles = {
    root: {
      fontSize: 16,
      lineHeight: '24px',
      width: props.fullWidth ? '100%' : 256,
      height: (props.rows - 1) * 24 + (props.floatingLabelText ? 72 : 48),
      display: 'inline-block',
      position: 'relative',
      backgroundColor: backgroundColor,
      fontFamily: baseTheme.fontFamily,
      transition: _transitions2.default.easeOut('200ms', 'height'),
      cursor: props.disabled ? 'not-allowed' : 'auto'
    },
    error: {
      position: 'relative',
      bottom: 2,
      fontSize: 12,
      lineHeight: '12px',
      color: errorColor,
      transition: _transitions2.default.easeOut()
    },
    floatingLabel: {
      color: props.disabled ? disabledTextColor : floatingLabelColor,
      pointerEvents: 'none'
    },
    input: {
      padding: 0,
      position: 'relative',
      width: '100%',
      border: 'none',
      outline: 'none',
      backgroundColor: 'rgba(0,0,0,0)',
      color: props.disabled ? disabledTextColor : textColor,
      cursor: 'inherit',
      font: 'inherit',
      WebkitTapHighlightColor: 'rgba(0,0,0,0)' },
    inputNative: {
      appearance: 'textfield' }
  };

  styles.textarea = (0, _assign2.default)({}, styles.input, {
    marginTop: props.floatingLabelText ? 36 : 12,
    marginBottom: props.floatingLabelText ? -36 : -12,
    boxSizing: 'border-box',
    font: 'inherit'
  });

  // Do not assign a height to the textarea as he handles it on his own.
  styles.input.height = '100%';

  if (state.isFocused) {
    styles.floatingLabel.color = focusColor;
  }

  if (props.floatingLabelText) {
    styles.input.boxSizing = 'border-box';

    if (!props.multiLine) {
      styles.input.marginTop = 14;
    }

    if (state.errorText) {
      styles.error.bottom = !props.multiLine ? styles.error.fontSize + 3 : 3;
    }
  }

  if (state.errorText) {
    if (state.isFocused) {
      styles.floatingLabel.color = styles.error.color;
    }
  }

  return styles;
};

/**
 * Check if a value is valid to be displayed inside an input.
 *
 * @param The value to check.
 * @returns True if the string provided is valid, false otherwise.
 */
function isValid(value) {
  return value !== '' && value !== undefined && value !== null && !(Array.isArray(value) && value.length === 0);
}

var TextField = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(TextField, _Component);

  function TextField() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TextField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      isFocused: false,
      errorText: undefined,
      hasValue: false
    }, _this.handleInputBlur = function (event) {
      _this.setState({ isFocused: false });
      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }
    }, _this.handleInputChange = function (event) {
      if (!_this.props.hasOwnProperty('value')) {
        _this.setState({ hasValue: isValid(event.target.value) });
      }
      if (_this.props.onChange) {
        _this.props.onChange(event, event.target.value);
      }
    }, _this.handleInputFocus = function (event) {
      if (_this.props.disabled) {
        return;
      }
      _this.setState({ isFocused: true });
      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
    }, _this.handleHeightChange = function (event, height) {
      var newHeight = height + 24;
      if (_this.props.floatingLabelText) {
        newHeight += 24;
      }
      _reactDom2.default.findDOMNode(_this).style.height = newHeight + 'px';
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  TextField.prototype.componentWillMount = function componentWillMount() {
    var _props = this.props,
        children = _props.children,
        name = _props.name,
        hintText = _props.hintText,
        floatingLabelText = _props.floatingLabelText,
        id = _props.id;


    var propsLeaf = children ? children.props : this.props;

    this.setState({
      errorText: this.props.errorText,
      hasValue: isValid(propsLeaf.value) || isValid(propsLeaf.defaultValue)
    });

    (0, _warning2.default)(name || hintText || floatingLabelText || id, 'Material-UI: We don\'t have enough information\n      to build a robust unique id for the TextField component. Please provide an id or a name.');

    var uniqueId = name + '-' + hintText + '-' + floatingLabelText + '-' + Math.floor(Math.random() * 0xFFFF);
    this.uniqueId = uniqueId.replace(/[^A-Za-z0-9-]/gi, '');
  };

  TextField.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.errorText !== this.props.errorText) {
      this.setState({
        errorText: nextProps.errorText
      });
    }

    if (nextProps.children && nextProps.children.props) {
      nextProps = nextProps.children.props;
    }

    if (nextProps.hasOwnProperty('value')) {
      var hasValue = isValid(nextProps.value);

      this.setState({
        hasValue: hasValue
      });
    }
  };

  TextField.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState, nextContext) {
    return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState) || !(0, _shallowEqual2.default)(this.context, nextContext);
  };

  TextField.prototype.blur = function blur() {
    if (this.input) {
      this.getInputNode().blur();
    }
  };

  TextField.prototype.focus = function focus() {
    if (this.input) {
      this.getInputNode().focus();
    }
  };

  TextField.prototype.select = function select() {
    if (this.input) {
      this.getInputNode().select();
    }
  };

  TextField.prototype.getValue = function getValue() {
    return this.input ? this.getInputNode().value : undefined;
  };

  TextField.prototype.getInputNode = function getInputNode() {
    return this.props.children || this.props.multiLine ? this.input.getInputNode() : _reactDom2.default.findDOMNode(this.input);
  };

  TextField.prototype._isControlled = function _isControlled() {
    return this.props.hasOwnProperty('value');
  };

  TextField.prototype.render = function render() {
    var _this2 = this;

    var _props2 = this.props,
        children = _props2.children,
        className = _props2.className,
        disabled = _props2.disabled,
        errorStyle = _props2.errorStyle,
        errorText = _props2.errorText,
        floatingLabelFixed = _props2.floatingLabelFixed,
        floatingLabelFocusStyle = _props2.floatingLabelFocusStyle,
        floatingLabelShrinkStyle = _props2.floatingLabelShrinkStyle,
        floatingLabelStyle = _props2.floatingLabelStyle,
        floatingLabelText = _props2.floatingLabelText,
        fullWidth = _props2.fullWidth,
        hintText = _props2.hintText,
        hintStyle = _props2.hintStyle,
        id = _props2.id,
        inputStyle = _props2.inputStyle,
        multiLine = _props2.multiLine,
        onBlur = _props2.onBlur,
        onChange = _props2.onChange,
        onFocus = _props2.onFocus,
        style = _props2.style,
        type = _props2.type,
        underlineDisabledStyle = _props2.underlineDisabledStyle,
        underlineFocusStyle = _props2.underlineFocusStyle,
        underlineShow = _props2.underlineShow,
        underlineStyle = _props2.underlineStyle,
        rows = _props2.rows,
        rowsMax = _props2.rowsMax,
        textareaStyle = _props2.textareaStyle,
        other = (0, _objectWithoutProperties3.default)(_props2, ['children', 'className', 'disabled', 'errorStyle', 'errorText', 'floatingLabelFixed', 'floatingLabelFocusStyle', 'floatingLabelShrinkStyle', 'floatingLabelStyle', 'floatingLabelText', 'fullWidth', 'hintText', 'hintStyle', 'id', 'inputStyle', 'multiLine', 'onBlur', 'onChange', 'onFocus', 'style', 'type', 'underlineDisabledStyle', 'underlineFocusStyle', 'underlineShow', 'underlineStyle', 'rows', 'rowsMax', 'textareaStyle']);
    var prepareStyles = this.context.muiTheme.prepareStyles;

    var styles = getStyles(this.props, this.context, this.state);
    var inputId = id || this.uniqueId;

    var errorTextElement = this.state.errorText && _react2.default.createElement(
      'div',
      { style: prepareStyles((0, _assign2.default)(styles.error, errorStyle)) },
      this.state.errorText
    );

    var floatingLabelTextElement = floatingLabelText && _react2.default.createElement(
      _TextFieldLabel2.default,
      {
        muiTheme: this.context.muiTheme,
        style: (0, _assign2.default)(styles.floatingLabel, floatingLabelStyle, this.state.isFocused ? floatingLabelFocusStyle : null),
        shrinkStyle: floatingLabelShrinkStyle,
        htmlFor: inputId,
        shrink: this.state.hasValue || this.state.isFocused || floatingLabelFixed,
        disabled: disabled
      },
      floatingLabelText
    );

    var inputProps = {
      id: inputId,
      ref: function ref(elem) {
        return _this2.input = elem;
      },
      disabled: this.props.disabled,
      onBlur: this.handleInputBlur,
      onChange: this.handleInputChange,
      onFocus: this.handleInputFocus
    };

    var childStyleMerged = (0, _assign2.default)(styles.input, inputStyle);

    var inputElement = void 0;
    if (children) {
      inputElement = _react2.default.cloneElement(children, (0, _extends3.default)({}, inputProps, children.props, {
        style: (0, _assign2.default)(childStyleMerged, children.props.style)
      }));
    } else {
      inputElement = multiLine ? _react2.default.createElement(_EnhancedTextarea2.default, (0, _extends3.default)({
        style: childStyleMerged,
        textareaStyle: (0, _assign2.default)(styles.textarea, styles.inputNative, textareaStyle),
        rows: rows,
        rowsMax: rowsMax,
        hintText: hintText
      }, other, inputProps, {
        onHeightChange: this.handleHeightChange
      })) : _react2.default.createElement('input', (0, _extends3.default)({
        type: type,
        style: prepareStyles((0, _assign2.default)(styles.inputNative, childStyleMerged))
      }, other, inputProps));
    }

    var rootProps = {};

    if (children) {
      rootProps = other;
    }

    return _react2.default.createElement(
      'div',
      (0, _extends3.default)({}, rootProps, {
        className: className,
        style: prepareStyles((0, _assign2.default)(styles.root, style))
      }),
      floatingLabelTextElement,
      hintText ? _react2.default.createElement(_TextFieldHint2.default, {
        muiTheme: this.context.muiTheme,
        show: !(this.state.hasValue || floatingLabelText && !this.state.isFocused) || !this.state.hasValue && floatingLabelText && floatingLabelFixed && !this.state.isFocused,
        style: hintStyle,
        text: hintText
      }) : null,
      inputElement,
      underlineShow ? _react2.default.createElement(_TextFieldUnderline2.default, {
        disabled: disabled,
        disabledStyle: underlineDisabledStyle,
        error: !!this.state.errorText,
        errorStyle: errorStyle,
        focus: this.state.isFocused,
        focusStyle: underlineFocusStyle,
        muiTheme: this.context.muiTheme,
        style: underlineStyle
      }) : null,
      errorTextElement
    );
  };

  return TextField;
}(_react.Component), _class.propTypes = {
  children: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * The text string to use for the default value.
   */
  defaultValue: _propTypes2.default.any,
  /**
   * Disables the text field if set to true.
   */
  disabled: _propTypes2.default.bool,
  /**
   * The style object to use to override error styles.
   */
  errorStyle: _propTypes2.default.object,
  /**
   * The error content to display.
   */
  errorText: _propTypes2.default.node,
  /**
   * If true, the floating label will float even when there is no value.
   */
  floatingLabelFixed: _propTypes2.default.bool,
  /**
   * The style object to use to override floating label styles when focused.
   */
  floatingLabelFocusStyle: _propTypes2.default.object,
  /**
   * The style object to use to override floating label styles when shrunk.
   */
  floatingLabelShrinkStyle: _propTypes2.default.object,
  /**
   * The style object to use to override floating label styles.
   */
  floatingLabelStyle: _propTypes2.default.object,
  /**
   * The content to use for the floating label element.
   */
  floatingLabelText: _propTypes2.default.node,
  /**
   * If true, the field receives the property width 100%.
   */
  fullWidth: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the TextField's hint text element.
   */
  hintStyle: _propTypes2.default.object,
  /**
   * The hint content to display.
   */
  hintText: _propTypes2.default.node,
  /**
   * The id prop for the text field.
   */
  id: _propTypes2.default.string,
  /**
   * Override the inline-styles of the TextField's input element.
   * When multiLine is false: define the style of the input element.
   * When multiLine is true: define the style of the container of the textarea.
   */
  inputStyle: _propTypes2.default.object,
  /**
   * If true, a textarea element will be rendered.
   * The textarea also grows and shrinks according to the number of lines.
   */
  multiLine: _propTypes2.default.bool,
  /**
   * Name applied to the input.
   */
  name: _propTypes2.default.string,
  /** @ignore */
  onBlur: _propTypes2.default.func,
  /**
   * Callback function that is fired when the textfield's value changes.
   *
   * @param {object} event Change event targeting the text field.
   * @param {string} newValue The new value of the text field.
   */
  onChange: _propTypes2.default.func,
  /** @ignore */
  onFocus: _propTypes2.default.func,
  /**
   * Number of rows to display when multiLine option is set to true.
   */
  rows: _propTypes2.default.number,
  /**
   * Maximum number of rows to display when
   * multiLine option is set to true.
   */
  rowsMax: _propTypes2.default.number,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * Override the inline-styles of the TextField's textarea element.
   * The TextField use either a textarea or an input,
   * this property has effects only when multiLine is true.
   */
  textareaStyle: _propTypes2.default.object,
  /**
   * Specifies the type of input to display
   * such as "password" or "text".
   */
  type: _propTypes2.default.string,
  /**
   * Override the inline-styles of the
   * TextField's underline element when disabled.
   */
  underlineDisabledStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of the TextField's
   * underline element when focussed.
   */
  underlineFocusStyle: _propTypes2.default.object,
  /**
   * If true, shows the underline for the text field.
   */
  underlineShow: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the TextField's underline element.
   */
  underlineStyle: _propTypes2.default.object,
  /**
   * The value of the text field.
   */
  value: _propTypes2.default.any
}, _class.defaultProps = {
  disabled: false,
  floatingLabelFixed: false,
  multiLine: false,
  fullWidth: false,
  type: 'text',
  underlineShow: true,
  rows: 1
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = TextField;

/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__(11);

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props) {
  var hintColor = props.muiTheme.textField.hintColor,
      show = props.show;


  return {
    root: {
      position: 'absolute',
      opacity: show ? 1 : 0,
      color: hintColor,
      transition: _transitions2.default.easeOut(),
      bottom: 12
    }
  };
}

var TextFieldHint = function TextFieldHint(props) {
  var prepareStyles = props.muiTheme.prepareStyles,
      style = props.style,
      text = props.text;


  var styles = getStyles(props);

  return _react2.default.createElement(
    'div',
    { style: prepareStyles((0, _assign2.default)(styles.root, style)) },
    text
  );
};

TextFieldHint.propTypes = {
  /**
   * @ignore
   * The material-ui theme applied to this component.
   */
  muiTheme: _propTypes2.default.object.isRequired,
  /**
   * True if the hint text should be visible.
   */
  show: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * The hint text displayed.
   */
  text: _propTypes2.default.node
};

TextFieldHint.defaultProps = {
  show: true
};

exports.default = TextFieldHint;

/***/ }),
/* 369 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__(11);

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props) {
  var defaultStyles = {
    position: 'absolute',
    lineHeight: '22px',
    top: 38,
    transition: _transitions2.default.easeOut(),
    zIndex: 1, // Needed to display label above Chrome's autocomplete field background
    transform: 'scale(1) translate(0, 0)',
    transformOrigin: 'left top',
    pointerEvents: 'auto',
    userSelect: 'none'
  };

  var shrinkStyles = props.shrink ? (0, _assign2.default)({
    transform: 'scale(0.75) translate(0, -28px)',
    pointerEvents: 'none'
  }, props.shrinkStyle) : null;

  return {
    root: (0, _assign2.default)(defaultStyles, props.style, shrinkStyles)
  };
}

var TextFieldLabel = function TextFieldLabel(props) {
  var muiTheme = props.muiTheme,
      className = props.className,
      children = props.children,
      htmlFor = props.htmlFor,
      onTouchTap = props.onTouchTap;
  var prepareStyles = muiTheme.prepareStyles;

  var styles = getStyles(props);

  return _react2.default.createElement(
    'label',
    {
      className: className,
      style: prepareStyles(styles.root),
      htmlFor: htmlFor,
      onTouchTap: onTouchTap
    },
    children
  );
};

TextFieldLabel.propTypes = {
  /**
   * The label contents.
   */
  children: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * Disables the label if set to true.
   */
  disabled: _propTypes2.default.bool,
  /**
   * The id of the target element that this label should refer to.
   */
  htmlFor: _propTypes2.default.string,
  /**
   * @ignore
   * The material-ui theme applied to this component.
   */
  muiTheme: _propTypes2.default.object.isRequired,
  /**
   * Callback function for when the label is selected via a touch tap.
   *
   * @param {object} event TouchTap event targeting the text field label.
   */
  onTouchTap: _propTypes2.default.func,
  /**
   * True if the floating label should shrink.
   */
  shrink: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element when shrunk.
   */
  shrinkStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
};

TextFieldLabel.defaultProps = {
  disabled: false,
  shrink: false
};

exports.default = TextFieldLabel;

/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__(11);

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  /**
   * True if the parent `TextField` is disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the underline when parent `TextField` is disabled.
   */
  disabledStyle: _propTypes2.default.object,
  /**
   * True if the parent `TextField` has an error.
   */
  error: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the underline when parent `TextField` has an error.
   */
  errorStyle: _propTypes2.default.object,
  /**
   * True if the parent `TextField` is focused.
   */
  focus: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the underline when parent `TextField` is focused.
   */
  focusStyle: _propTypes2.default.object,
  /**
   * @ignore
   * The material-ui theme applied to this component.
   */
  muiTheme: _propTypes2.default.object.isRequired,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
};

var defaultProps = {
  disabled: false,
  disabledStyle: {},
  error: false,
  errorStyle: {},
  focus: false,
  focusStyle: {},
  style: {}
};

var TextFieldUnderline = function TextFieldUnderline(props) {
  var disabled = props.disabled,
      disabledStyle = props.disabledStyle,
      error = props.error,
      errorStyle = props.errorStyle,
      focus = props.focus,
      focusStyle = props.focusStyle,
      muiTheme = props.muiTheme,
      style = props.style;
  var errorStyleColor = errorStyle.color;
  var prepareStyles = muiTheme.prepareStyles,
      _muiTheme$textField = muiTheme.textField,
      borderColor = _muiTheme$textField.borderColor,
      disabledTextColor = _muiTheme$textField.disabledTextColor,
      errorColor = _muiTheme$textField.errorColor,
      focusColor = _muiTheme$textField.focusColor;


  var styles = {
    root: {
      borderTop: 'none',
      borderLeft: 'none',
      borderRight: 'none',
      borderBottom: 'solid 1px',
      borderColor: borderColor,
      bottom: 8,
      boxSizing: 'content-box',
      margin: 0,
      position: 'absolute',
      width: '100%'
    },
    disabled: {
      borderBottom: 'dotted 2px',
      borderColor: disabledTextColor
    },
    focus: {
      borderBottom: 'solid 2px',
      borderColor: focusColor,
      transform: 'scaleX(0)',
      transition: _transitions2.default.easeOut()
    },
    error: {
      borderColor: errorStyleColor ? errorStyleColor : errorColor,
      transform: 'scaleX(1)'
    }
  };

  var underline = (0, _assign2.default)({}, styles.root, style);
  var focusedUnderline = (0, _assign2.default)({}, underline, styles.focus, focusStyle);

  if (disabled) underline = (0, _assign2.default)({}, underline, styles.disabled, disabledStyle);
  if (focus) focusedUnderline = (0, _assign2.default)({}, focusedUnderline, { transform: 'scaleX(1)' });
  if (error) focusedUnderline = (0, _assign2.default)({}, focusedUnderline, styles.error);

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement('hr', { 'aria-hidden': 'true', style: prepareStyles(underline) }),
    _react2.default.createElement('hr', { 'aria-hidden': 'true', style: prepareStyles(focusedUnderline) })
  );
};

TextFieldUnderline.propTypes = propTypes;
TextFieldUnderline.defaultProps = defaultProps;

exports.default = TextFieldUnderline;

/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TimeDisplay = __webpack_require__(374);

var _TimeDisplay2 = _interopRequireDefault(_TimeDisplay);

var _ClockHours = __webpack_require__(372);

var _ClockHours2 = _interopRequireDefault(_ClockHours);

var _ClockMinutes = __webpack_require__(373);

var _ClockMinutes2 = _interopRequireDefault(_ClockMinutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Clock = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(Clock, _Component);

  function Clock() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Clock);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      selectedTime: null,
      mode: 'hour'
    }, _this.setMode = function (mode) {
      setTimeout(function () {
        _this.setState({
          mode: mode
        });
      }, 100);
    }, _this.handleSelectAffix = function (affix) {
      if (affix === _this.getAffix()) return;

      var hours = _this.state.selectedTime.getHours();

      if (affix === 'am') {
        _this.handleChangeHours(hours - 12, affix);
        return;
      }

      _this.handleChangeHours(hours + 12, affix);
    }, _this.handleChangeHours = function (hours, finished) {
      var time = new Date(_this.state.selectedTime);
      var affix = void 0;

      if (typeof finished === 'string') {
        affix = finished;
        finished = undefined;
      }
      if (!affix) {
        affix = _this.getAffix();
      }
      if (affix === 'pm' && hours < 12) {
        hours += 12;
      }

      time.setHours(hours);
      _this.setState({
        selectedTime: time
      });

      if (finished) {
        setTimeout(function () {
          _this.setState({
            mode: 'minute'
          });

          var onChangeHours = _this.props.onChangeHours;

          if (onChangeHours) {
            onChangeHours(time);
          }
        }, 100);
      }
    }, _this.handleChangeMinutes = function (minutes, finished) {
      var time = new Date(_this.state.selectedTime);
      time.setMinutes(minutes);
      _this.setState({
        selectedTime: time
      });

      var onChangeMinutes = _this.props.onChangeMinutes;

      if (onChangeMinutes && finished) {
        setTimeout(function () {
          onChangeMinutes(time);
        }, 0);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  Clock.prototype.componentWillMount = function componentWillMount() {
    this.setState({
      selectedTime: this.props.initialTime || new Date()
    });
  };

  Clock.prototype.getAffix = function getAffix() {
    if (this.props.format !== 'ampm') return '';

    var hours = this.state.selectedTime.getHours();
    if (hours < 12) {
      return 'am';
    }

    return 'pm';
  };

  Clock.prototype.getSelectedTime = function getSelectedTime() {
    return this.state.selectedTime;
  };

  Clock.prototype.render = function render() {
    var clock = null;

    var _context$muiTheme = this.context.muiTheme,
        prepareStyles = _context$muiTheme.prepareStyles,
        timePicker = _context$muiTheme.timePicker;


    var styles = {
      root: {
        userSelect: 'none'
      },
      container: {
        height: 280,
        padding: 10,
        position: 'relative',
        boxSizing: 'content-box'
      },
      circle: {
        position: 'absolute',
        top: 20,
        width: 260,
        height: 260,
        borderRadius: '100%',
        backgroundColor: timePicker.clockCircleColor
      }
    };

    if (this.state.mode === 'hour') {
      clock = _react2.default.createElement(_ClockHours2.default, {
        key: 'hours',
        format: this.props.format,
        onChange: this.handleChangeHours,
        initialHours: this.state.selectedTime.getHours()
      });
    } else {
      clock = _react2.default.createElement(_ClockMinutes2.default, {
        key: 'minutes',
        onChange: this.handleChangeMinutes,
        initialMinutes: this.state.selectedTime.getMinutes()
      });
    }

    return _react2.default.createElement(
      'div',
      { style: prepareStyles(styles.root) },
      _react2.default.createElement(_TimeDisplay2.default, {
        selectedTime: this.state.selectedTime,
        mode: this.state.mode,
        format: this.props.format,
        affix: this.getAffix(),
        onSelectAffix: this.handleSelectAffix,
        onSelectHour: this.setMode.bind(this, 'hour'),
        onSelectMin: this.setMode.bind(this, 'minute')
      }),
      _react2.default.createElement(
        'div',
        { style: prepareStyles(styles.container) },
        _react2.default.createElement('div', { style: prepareStyles(styles.circle) }),
        clock
      )
    );
  };

  return Clock;
}(_react.Component), _class.propTypes = {
  format: _propTypes2.default.oneOf(['ampm', '24hr']),
  initialTime: _propTypes2.default.object,
  onChangeHours: _propTypes2.default.func,
  onChangeMinutes: _propTypes2.default.func
}, _class.defaultProps = {
  initialTime: new Date()
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = Clock;

/***/ }),
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(14);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ClockNumber = __webpack_require__(186);

var _ClockNumber2 = _interopRequireDefault(_ClockNumber);

var _ClockPointer = __webpack_require__(187);

var _ClockPointer2 = _interopRequireDefault(_ClockPointer);

var _timeUtils = __webpack_require__(65);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ClockHours = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(ClockHours, _Component);

  function ClockHours() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ClockHours);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleUp = function (event) {
      event.preventDefault();
      _this.setClock(event.nativeEvent, true);
    }, _this.handleMove = function (event) {
      event.preventDefault();
      if (_this.isMousePressed(event) !== 1) return;
      _this.setClock(event.nativeEvent, false);
    }, _this.handleTouchMove = function (event) {
      event.preventDefault();
      _this.setClock(event.changedTouches[0], false);
    }, _this.handleTouchEnd = function (event) {
      event.preventDefault();
      _this.setClock(event.changedTouches[0], true);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  ClockHours.prototype.componentDidMount = function componentDidMount() {
    var clockElement = _reactDom2.default.findDOMNode(this.refs.mask);

    this.center = {
      x: clockElement.offsetWidth / 2,
      y: clockElement.offsetHeight / 2
    };

    this.basePoint = {
      x: this.center.x,
      y: 0
    };
  };

  ClockHours.prototype.isMousePressed = function isMousePressed(event) {
    if (typeof event.buttons === 'undefined') {
      return event.nativeEvent.which;
    }

    return event.buttons;
  };

  ClockHours.prototype.setClock = function setClock(event, finish) {
    if (typeof event.offsetX === 'undefined') {
      var offset = (0, _timeUtils.getTouchEventOffsetValues)(event);

      event.offsetX = offset.offsetX;
      event.offsetY = offset.offsetY;
    }

    var hours = this.getHours(event.offsetX, event.offsetY);

    this.props.onChange(hours, finish);
  };

  ClockHours.prototype.getHours = function getHours(offsetX, offsetY) {
    var step = 30;
    var x = offsetX - this.center.x;
    var y = offsetY - this.center.y;
    var cx = this.basePoint.x - this.center.x;
    var cy = this.basePoint.y - this.center.y;

    var atan = Math.atan2(cx, cy) - Math.atan2(x, y);

    var deg = (0, _timeUtils.rad2deg)(atan);
    deg = Math.round(deg / step) * step;
    deg %= 360;

    var value = Math.floor(deg / step) || 0;

    var delta = Math.pow(x, 2) + Math.pow(y, 2);
    var distance = Math.sqrt(delta);

    value = value || 12;
    if (this.props.format === '24hr') {
      if (distance < 90) {
        value += 12;
        value %= 24;
      }
    } else {
      value %= 12;
    }

    return value;
  };

  ClockHours.prototype.getSelected = function getSelected() {
    var hour = this.props.initialHours;

    if (this.props.format === 'ampm') {
      hour %= 12;
      hour = hour || 12;
    }

    return hour;
  };

  ClockHours.prototype.getHourNumbers = function getHourNumbers() {
    var _this2 = this;

    var style = {
      pointerEvents: 'none'
    };
    var hourSize = this.props.format === 'ampm' ? 12 : 24;

    var hours = [];
    for (var i = 1; i <= hourSize; i++) {
      hours.push(i % 24);
    }

    return hours.map(function (hour) {
      var isSelected = _this2.getSelected() === hour;
      return _react2.default.createElement(_ClockNumber2.default, {
        key: hour,
        style: style,
        isSelected: isSelected,
        type: 'hour',
        value: hour
      });
    });
  };

  ClockHours.prototype.render = function render() {
    var styles = {
      root: {
        height: '100%',
        width: '100%',
        borderRadius: '100%',
        position: 'relative',
        pointerEvents: 'none',
        boxSizing: 'border-box'
      },

      hitMask: {
        height: '100%',
        width: '100%',
        pointerEvents: 'auto'
      }
    };

    var prepareStyles = this.context.muiTheme.prepareStyles;

    var hours = this.getSelected();
    var numbers = this.getHourNumbers();

    return _react2.default.createElement(
      'div',
      { ref: 'clock', style: prepareStyles(styles.root) },
      _react2.default.createElement(_ClockPointer2.default, { hasSelected: true, value: hours, type: 'hour' }),
      numbers,
      _react2.default.createElement('div', {
        ref: 'mask', style: prepareStyles(styles.hitMask), onTouchMove: this.handleTouchMove,
        onTouchEnd: this.handleTouchEnd, onMouseUp: this.handleUp, onMouseMove: this.handleMove
      })
    );
  };

  return ClockHours;
}(_react.Component), _class.propTypes = {
  format: _propTypes2.default.oneOf(['ampm', '24hr']),
  initialHours: _propTypes2.default.number,
  onChange: _propTypes2.default.func
}, _class.defaultProps = {
  initialHours: new Date().getHours(),
  onChange: function onChange() {},
  format: 'ampm'
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = ClockHours;

/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ClockNumber = __webpack_require__(186);

var _ClockNumber2 = _interopRequireDefault(_ClockNumber);

var _ClockPointer = __webpack_require__(187);

var _ClockPointer2 = _interopRequireDefault(_ClockPointer);

var _timeUtils = __webpack_require__(65);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ClockMinutes = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(ClockMinutes, _Component);

  function ClockMinutes() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ClockMinutes);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleUp = function (event) {
      event.preventDefault();
      _this.setClock(event.nativeEvent, true);
    }, _this.handleMove = function (event) {
      event.preventDefault();
      if (_this.isMousePressed(event) !== 1) {
        return;
      }
      _this.setClock(event.nativeEvent, false);
    }, _this.handleTouch = function (event) {
      event.preventDefault();
      _this.setClock(event.changedTouches[0], event.type === 'touchend');
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  ClockMinutes.prototype.componentDidMount = function componentDidMount() {
    var clockElement = this.refs.mask;

    this.center = {
      x: clockElement.offsetWidth / 2,
      y: clockElement.offsetHeight / 2
    };

    this.basePoint = {
      x: this.center.x,
      y: 0
    };
  };

  ClockMinutes.prototype.isMousePressed = function isMousePressed(event) {
    if (typeof event.buttons === 'undefined') {
      return event.nativeEvent.which;
    }
    return event.buttons;
  };

  ClockMinutes.prototype.setClock = function setClock(event, finish) {
    if (typeof event.offsetX === 'undefined') {
      var offset = (0, _timeUtils.getTouchEventOffsetValues)(event);

      event.offsetX = offset.offsetX;
      event.offsetY = offset.offsetY;
    }

    var minutes = this.getMinutes(event.offsetX, event.offsetY);

    this.props.onChange(minutes, finish);
  };

  ClockMinutes.prototype.getMinutes = function getMinutes(offsetX, offsetY) {
    var step = 6;
    var x = offsetX - this.center.x;
    var y = offsetY - this.center.y;
    var cx = this.basePoint.x - this.center.x;
    var cy = this.basePoint.y - this.center.y;

    var atan = Math.atan2(cx, cy) - Math.atan2(x, y);

    var deg = (0, _timeUtils.rad2deg)(atan);
    deg = Math.round(deg / step) * step;
    deg %= 360;

    var value = Math.floor(deg / step) || 0;

    return value;
  };

  ClockMinutes.prototype.getMinuteNumbers = function getMinuteNumbers() {
    var minutes = [];
    for (var i = 0; i < 12; i++) {
      minutes.push(i * 5);
    }
    var selectedMinutes = this.props.initialMinutes;
    var hasSelected = false;

    var numbers = minutes.map(function (minute) {
      var isSelected = selectedMinutes === minute;
      if (isSelected) {
        hasSelected = true;
      }
      return _react2.default.createElement(_ClockNumber2.default, {
        key: minute,
        isSelected: isSelected,
        type: 'minute',
        value: minute
      });
    });

    return {
      numbers: numbers,
      hasSelected: hasSelected,
      selected: selectedMinutes
    };
  };

  ClockMinutes.prototype.render = function render() {
    var styles = {
      root: {
        height: '100%',
        width: '100%',
        borderRadius: '100%',
        position: 'relative',
        pointerEvents: 'none',
        boxSizing: 'border-box'
      },

      hitMask: {
        height: '100%',
        width: '100%',
        pointerEvents: 'auto'
      }
    };

    var prepareStyles = this.context.muiTheme.prepareStyles;

    var minutes = this.getMinuteNumbers();

    return _react2.default.createElement(
      'div',
      { ref: 'clock', style: prepareStyles(styles.root) },
      _react2.default.createElement(_ClockPointer2.default, { value: minutes.selected, type: 'minute', hasSelected: minutes.hasSelected }),
      minutes.numbers,
      _react2.default.createElement('div', {
        ref: 'mask',
        style: prepareStyles(styles.hitMask),
        onTouchMove: this.handleTouch,
        onTouchEnd: this.handleTouch,
        onMouseUp: this.handleUp,
        onMouseMove: this.handleMove
      })
    );
  };

  return ClockMinutes;
}(_react.Component), _class.propTypes = {
  initialMinutes: _propTypes2.default.number,
  onChange: _propTypes2.default.func
}, _class.defaultProps = {
  initialMinutes: new Date().getMinutes(),
  onChange: function onChange() {}
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = ClockMinutes;

/***/ }),
/* 374 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TimeDisplay = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(TimeDisplay, _Component);

  function TimeDisplay() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TimeDisplay);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      transitionDirection: 'up'
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  TimeDisplay.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.selectedTime !== this.props.selectedTime) {
      var direction = nextProps.selectedTime > this.props.selectedTime ? 'up' : 'down';

      this.setState({
        transitionDirection: direction
      });
    }
  };

  TimeDisplay.prototype.sanitizeTime = function sanitizeTime() {
    var hour = this.props.selectedTime.getHours();
    var min = this.props.selectedTime.getMinutes().toString();

    if (this.props.format === 'ampm') {
      hour %= 12;
      hour = hour || 12;
    }

    hour = hour.toString();
    if (hour.length < 2) hour = '0' + hour;
    if (min.length < 2) min = '0' + min;

    return [hour, min];
  };

  TimeDisplay.prototype.render = function render() {
    var _props = this.props,
        affix = _props.affix,
        format = _props.format,
        mode = _props.mode,
        onSelectAffix = _props.onSelectAffix,
        onSelectHour = _props.onSelectHour,
        onSelectMin = _props.onSelectMin,
        selectedTime = _props.selectedTime,
        other = (0, _objectWithoutProperties3.default)(_props, ['affix', 'format', 'mode', 'onSelectAffix', 'onSelectHour', 'onSelectMin', 'selectedTime']);
    var _context$muiTheme = this.context.muiTheme,
        prepareStyles = _context$muiTheme.prepareStyles,
        timePicker = _context$muiTheme.timePicker;


    var styles = {
      root: {
        padding: '14px 0',
        borderTopLeftRadius: 2,
        borderTopRightRadius: 2,
        backgroundColor: timePicker.headerColor,
        color: timePicker.textColor
      },
      text: {
        margin: '6px 0',
        lineHeight: '58px',
        height: 58,
        fontSize: 58,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline'
      },
      time: {
        margin: '0 10px'
      },
      affix: {
        flex: 1,
        position: 'relative',
        lineHeight: '17px',
        height: 17,
        fontSize: 17
      },
      affixTop: {
        position: 'absolute',
        top: -20,
        left: 0
      },
      clickable: {
        cursor: 'pointer'
      },
      inactive: {
        opacity: 0.7
      }
    };

    var _sanitizeTime = this.sanitizeTime(),
        hour = _sanitizeTime[0],
        min = _sanitizeTime[1];

    var buttons = [];
    if (format === 'ampm') {
      buttons = [_react2.default.createElement(
        'div',
        {
          key: 'pm',
          style: prepareStyles((0, _assign2.default)({}, styles.clickable, affix === 'pm' ? {} : styles.inactive)),
          onTouchTap: function onTouchTap() {
            return onSelectAffix('pm');
          }
        },
        'PM'
      ), _react2.default.createElement(
        'div',
        {
          key: 'am',
          style: prepareStyles((0, _assign2.default)({}, styles.affixTop, styles.clickable, affix === 'am' ? {} : styles.inactive)),
          onTouchTap: function onTouchTap() {
            return onSelectAffix('am');
          }
        },
        'AM'
      )];
    }

    return _react2.default.createElement(
      'div',
      (0, _extends3.default)({}, other, { style: prepareStyles(styles.root) }),
      _react2.default.createElement(
        'div',
        { style: prepareStyles(styles.text) },
        _react2.default.createElement('div', { style: prepareStyles((0, _assign2.default)({}, styles.affix)) }),
        _react2.default.createElement(
          'div',
          { style: prepareStyles(styles.time) },
          _react2.default.createElement(
            'span',
            {
              style: prepareStyles((0, _assign2.default)({}, styles.clickable, mode === 'hour' ? {} : styles.inactive)),
              onTouchTap: onSelectHour
            },
            hour
          ),
          _react2.default.createElement(
            'span',
            null,
            ':'
          ),
          _react2.default.createElement(
            'span',
            {
              style: prepareStyles((0, _assign2.default)({}, styles.clickable, mode === 'minute' ? {} : styles.inactive)),
              onTouchTap: onSelectMin
            },
            min
          )
        ),
        _react2.default.createElement(
          'div',
          { style: prepareStyles((0, _assign2.default)({}, styles.affix)) },
          buttons
        )
      )
    );
  };

  return TimeDisplay;
}(_react.Component), _class.propTypes = {
  affix: _propTypes2.default.oneOf(['', 'pm', 'am']),
  format: _propTypes2.default.oneOf(['ampm', '24hr']),
  mode: _propTypes2.default.oneOf(['hour', 'minute']),
  onSelectAffix: _propTypes2.default.func,
  onSelectHour: _propTypes2.default.func,
  onSelectMin: _propTypes2.default.func,
  selectedTime: _propTypes2.default.object.isRequired
}, _class.defaultProps = {
  affix: '',
  mode: 'hour'
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = TimeDisplay;

/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TimePickerDialog = __webpack_require__(376);

var _TimePickerDialog2 = _interopRequireDefault(_TimePickerDialog);

var _TextField = __webpack_require__(63);

var _TextField2 = _interopRequireDefault(_TextField);

var _timeUtils = __webpack_require__(65);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var emptyTime = new Date();
emptyTime.setHours(0);
emptyTime.setMinutes(0);
emptyTime.setSeconds(0);
emptyTime.setMilliseconds(0);

var TimePicker = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(TimePicker, _Component);

  function TimePicker() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TimePicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      time: null,
      dialogTime: new Date()
    }, _this.handleAcceptDialog = function (time) {
      _this.setState({
        time: time
      });
      if (_this.props.onChange) _this.props.onChange(null, time);
    }, _this.handleFocusInput = function (event) {
      event.target.blur();
      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
    }, _this.handleTouchTapInput = function (event) {
      event.preventDefault();

      if (!_this.props.disabled) {
        _this.openDialog();
      }

      if (_this.props.onTouchTap) {
        _this.props.onTouchTap(event);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  TimePicker.prototype.componentWillMount = function componentWillMount() {
    this.setState({
      time: this.isControlled() ? this.getControlledTime() : this.props.defaultTime
    });
  };

  TimePicker.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({
        time: this.getControlledTime(nextProps)
      });
    }
  };

  /**
   * Alias for `openDialog()` for an api consistent with TextField.
   */


  TimePicker.prototype.focus = function focus() {
    this.openDialog();
  };

  TimePicker.prototype.openDialog = function openDialog() {
    this.setState({
      dialogTime: this.state.time
    });
    this.refs.dialogWindow.show();
  };

  TimePicker.prototype.isControlled = function isControlled() {
    return this.props.value !== null;
  };

  TimePicker.prototype.getControlledTime = function getControlledTime() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

    var result = null;
    if (props.value instanceof Date) {
      result = props.value;
    }
    return result;
  };

  TimePicker.prototype.render = function render() {
    var _props = this.props,
        autoOk = _props.autoOk,
        cancelLabel = _props.cancelLabel,
        defaultTime = _props.defaultTime,
        dialogBodyStyle = _props.dialogBodyStyle,
        dialogStyle = _props.dialogStyle,
        format = _props.format,
        okLabel = _props.okLabel,
        onFocus = _props.onFocus,
        onTouchTap = _props.onTouchTap,
        onShow = _props.onShow,
        onDismiss = _props.onDismiss,
        pedantic = _props.pedantic,
        style = _props.style,
        textFieldStyle = _props.textFieldStyle,
        other = (0, _objectWithoutProperties3.default)(_props, ['autoOk', 'cancelLabel', 'defaultTime', 'dialogBodyStyle', 'dialogStyle', 'format', 'okLabel', 'onFocus', 'onTouchTap', 'onShow', 'onDismiss', 'pedantic', 'style', 'textFieldStyle']);
    var prepareStyles = this.context.muiTheme.prepareStyles;
    var time = this.state.time;


    return _react2.default.createElement(
      'div',
      { style: prepareStyles((0, _assign2.default)({}, style)) },
      _react2.default.createElement(_TextField2.default, (0, _extends3.default)({}, other, {
        style: textFieldStyle,
        ref: 'input',
        value: time === emptyTime ? null : (0, _timeUtils.formatTime)(time, format, pedantic),
        onFocus: this.handleFocusInput,
        onTouchTap: this.handleTouchTapInput
      })),
      _react2.default.createElement(_TimePickerDialog2.default, {
        ref: 'dialogWindow',
        bodyStyle: dialogBodyStyle,
        initialTime: this.state.dialogTime,
        onAccept: this.handleAcceptDialog,
        onShow: onShow,
        onDismiss: onDismiss,
        format: format,
        okLabel: okLabel,
        cancelLabel: cancelLabel,
        autoOk: autoOk,
        style: dialogStyle
      })
    );
  };

  return TimePicker;
}(_react.Component), _class.propTypes = {
  /**
   * If true, automatically accept and close the picker on set minutes.
   */
  autoOk: _propTypes2.default.bool,
  /**
   * Override the label of the 'Cancel' button.
   */
  cancelLabel: _propTypes2.default.node,
  /**
   * The initial time value of the TimePicker.
   */
  defaultTime: _propTypes2.default.object,
  /**
   * Override the inline-styles of TimePickerDialog's body element.
   */
  dialogBodyStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of TimePickerDialog's root element.
   */
  dialogStyle: _propTypes2.default.object,
  /**
   * If true, the TimePicker is disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * Tells the component to display the picker in `ampm` (12hr) format or `24hr` format.
   */
  format: _propTypes2.default.oneOf(['ampm', '24hr']),
  /**
   * Override the label of the 'OK' button.
   */
  okLabel: _propTypes2.default.node,
  /**
   * Callback function that is fired when the time value changes. The time value is passed in a Date Object.
   * Since there is no particular event associated with the change the first argument will always be null
   * and the second argument will be the new Date instance.
   */
  onChange: _propTypes2.default.func,
  /**
   * Callback function fired when the TimePicker dialog is dismissed.
   */
  onDismiss: _propTypes2.default.func,
  /**
   * Callback function fired when the TimePicker `TextField` gains focus.
   */
  onFocus: _propTypes2.default.func,
  /**
   * Callback function fired when the TimePicker dialog is shown.
   */
  onShow: _propTypes2.default.func,
  /**
   * Callback function fired when the TimePicker is tapped or clicked.
   */
  onTouchTap: _propTypes2.default.func,
  /**
   * If true, uses ("noon" / "midnight") instead of ("12 a.m." / "12 p.m.").
   *
   * It's technically more correct to refer to "12 noon" and "12 midnight" rather than "12 a.m." and "12 p.m."
   * and it avoids confusion between different locales. By default (for compatibility reasons) TimePicker uses
   * ("12 a.m." / "12 p.m.").
   */
  pedantic: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * Override the inline-styles of TimePicker's TextField element.
   */
  textFieldStyle: _propTypes2.default.object,
  /**
   * Sets the time for the Time Picker programmatically.
   */
  value: _propTypes2.default.object
}, _class.defaultProps = {
  autoOk: false,
  cancelLabel: 'Cancel',
  defaultTime: null,
  disabled: false,
  format: 'ampm',
  okLabel: 'OK',
  pedantic: false,
  style: {},
  value: null
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = TimePicker;

/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactEventListener = __webpack_require__(26);

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _keycode = __webpack_require__(22);

var _keycode2 = _interopRequireDefault(_keycode);

var _Clock = __webpack_require__(371);

var _Clock2 = _interopRequireDefault(_Clock);

var _Dialog = __webpack_require__(103);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _FlatButton = __webpack_require__(79);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TimePickerDialog = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(TimePickerDialog, _Component);

  function TimePickerDialog() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TimePickerDialog);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      open: false
    }, _this.handleRequestClose = function () {
      _this.dismiss();
    }, _this.handleTouchTapCancel = function () {
      _this.dismiss();
    }, _this.handleTouchTapOK = function () {
      if (_this.props.onAccept) {
        _this.props.onAccept(_this.refs.clock.getSelectedTime());
      }
      _this.setState({
        open: false
      });
    }, _this.handleKeyUp = function (event) {
      switch ((0, _keycode2.default)(event)) {
        case 'enter':
          _this.handleTouchTapOK();
          break;
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  TimePickerDialog.prototype.show = function show() {
    if (this.props.onShow && !this.state.open) this.props.onShow();
    this.setState({
      open: true
    });
  };

  TimePickerDialog.prototype.dismiss = function dismiss() {
    if (this.props.onDismiss && this.state.open) this.props.onDismiss();
    this.setState({
      open: false
    });
  };

  TimePickerDialog.prototype.render = function render() {
    var _props = this.props,
        bodyStyle = _props.bodyStyle,
        initialTime = _props.initialTime,
        onAccept = _props.onAccept,
        format = _props.format,
        autoOk = _props.autoOk,
        okLabel = _props.okLabel,
        cancelLabel = _props.cancelLabel,
        style = _props.style,
        other = (0, _objectWithoutProperties3.default)(_props, ['bodyStyle', 'initialTime', 'onAccept', 'format', 'autoOk', 'okLabel', 'cancelLabel', 'style']);


    var styles = {
      root: {
        fontSize: 14,
        color: this.context.muiTheme.timePicker.clockColor
      },
      dialogContent: {
        width: 280
      },
      body: {
        padding: 0
      }
    };

    var actions = [_react2.default.createElement(_FlatButton2.default, {
      key: 0,
      label: cancelLabel,
      primary: true,
      onTouchTap: this.handleTouchTapCancel
    }), _react2.default.createElement(_FlatButton2.default, {
      key: 1,
      label: okLabel,
      primary: true,
      onTouchTap: this.handleTouchTapOK
    })];

    var onClockChangeMinutes = autoOk === true ? this.handleTouchTapOK : undefined;
    var open = this.state.open;

    return _react2.default.createElement(
      _Dialog2.default,
      (0, _extends3.default)({}, other, {
        style: (0, _assign2.default)(styles.root, style),
        bodyStyle: (0, _assign2.default)(styles.body, bodyStyle),
        actions: actions,
        contentStyle: styles.dialogContent,
        repositionOnUpdate: false,
        open: open,
        onRequestClose: this.handleRequestClose
      }),
      open && _react2.default.createElement(_reactEventListener2.default, { target: 'window', onKeyUp: this.handleKeyUp }),
      open && _react2.default.createElement(_Clock2.default, {
        ref: 'clock',
        format: format,
        initialTime: initialTime,
        onChangeMinutes: onClockChangeMinutes
      })
    );
  };

  return TimePickerDialog;
}(_react.Component), _class.propTypes = {
  autoOk: _propTypes2.default.bool,
  bodyStyle: _propTypes2.default.object,
  cancelLabel: _propTypes2.default.node,
  format: _propTypes2.default.oneOf(['ampm', '24hr']),
  initialTime: _propTypes2.default.object,
  okLabel: _propTypes2.default.node,
  onAccept: _propTypes2.default.func,
  onDismiss: _propTypes2.default.func,
  onShow: _propTypes2.default.func,
  style: _propTypes2.default.object
}, _class.defaultProps = {
  okLabel: 'OK',
  cancelLabel: 'Cancel'
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = TimePickerDialog;

/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__(11);

var _transitions2 = _interopRequireDefault(_transitions);

var _Paper = __webpack_require__(21);

var _Paper2 = _interopRequireDefault(_Paper);

var _EnhancedSwitch = __webpack_require__(113);

var _EnhancedSwitch2 = _interopRequireDefault(_EnhancedSwitch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context, state) {
  var disabled = props.disabled,
      elementStyle = props.elementStyle,
      trackSwitchedStyle = props.trackSwitchedStyle,
      thumbSwitchedStyle = props.thumbSwitchedStyle,
      trackStyle = props.trackStyle,
      thumbStyle = props.thumbStyle,
      iconStyle = props.iconStyle,
      rippleStyle = props.rippleStyle,
      labelStyle = props.labelStyle;
  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      toggle = _context$muiTheme.toggle;


  var toggleSize = 20;
  var toggleTrackWidth = 36;
  var styles = {
    icon: {
      width: 36,
      padding: '4px 0px 6px 2px'
    },
    ripple: {
      top: -10,
      left: -10,
      color: state.switched ? toggle.thumbOnColor : baseTheme.palette.textColor
    },
    toggleElement: {
      width: toggleTrackWidth
    },
    track: {
      transition: _transitions2.default.easeOut(),
      width: '100%',
      height: 14,
      borderRadius: 30,
      backgroundColor: toggle.trackOffColor
    },
    thumb: {
      transition: _transitions2.default.easeOut(),
      position: 'absolute',
      top: 1,
      left: 0,
      width: toggleSize,
      height: toggleSize,
      lineHeight: '24px',
      borderRadius: '50%',
      backgroundColor: toggle.thumbOffColor
    },
    trackWhenSwitched: {
      backgroundColor: toggle.trackOnColor
    },
    thumbWhenSwitched: {
      backgroundColor: toggle.thumbOnColor,
      left: '100%'
    },
    trackWhenDisabled: {
      backgroundColor: toggle.trackDisabledColor
    },
    thumbWhenDisabled: {
      backgroundColor: toggle.thumbDisabledColor
    },
    label: {
      color: disabled ? toggle.labelDisabledColor : toggle.labelColor,
      width: 'calc(100% - ' + (toggleTrackWidth + 10) + 'px)'
    }
  };

  (0, _assign2.default)(styles.track, trackStyle, state.switched && styles.trackWhenSwitched, state.switched && trackSwitchedStyle, disabled && styles.trackWhenDisabled);

  (0, _assign2.default)(styles.thumb, thumbStyle, state.switched && styles.thumbWhenSwitched, state.switched && thumbSwitchedStyle, disabled && styles.thumbWhenDisabled);

  if (state.switched) {
    styles.thumb.marginLeft = 0 - styles.thumb.width;
  }

  (0, _assign2.default)(styles.icon, iconStyle);

  (0, _assign2.default)(styles.ripple, rippleStyle);

  (0, _assign2.default)(styles.label, labelStyle);

  (0, _assign2.default)(styles.toggleElement, elementStyle);

  return styles;
}

var Toggle = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(Toggle, _Component);

  function Toggle() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Toggle);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      switched: false
    }, _this.handleStateChange = function (newSwitched) {
      _this.setState({
        switched: newSwitched
      });
    }, _this.handleToggle = function (event, isInputChecked) {
      if (_this.props.onToggle) {
        _this.props.onToggle(event, isInputChecked);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  Toggle.prototype.componentWillMount = function componentWillMount() {
    var _props = this.props,
        toggled = _props.toggled,
        defaultToggled = _props.defaultToggled,
        valueLink = _props.valueLink;


    if (toggled || defaultToggled || valueLink && valueLink.value) {
      this.setState({
        switched: true
      });
    }
  };

  Toggle.prototype.isToggled = function isToggled() {
    return this.refs.enhancedSwitch.isSwitched();
  };

  Toggle.prototype.setToggled = function setToggled(newToggledValue) {
    this.refs.enhancedSwitch.setSwitched(newToggledValue);
  };

  Toggle.prototype.render = function render() {
    var _props2 = this.props,
        defaultToggled = _props2.defaultToggled,
        elementStyle = _props2.elementStyle,
        onToggle = _props2.onToggle,
        trackSwitchedStyle = _props2.trackSwitchedStyle,
        thumbSwitchedStyle = _props2.thumbSwitchedStyle,
        toggled = _props2.toggled,
        other = (0, _objectWithoutProperties3.default)(_props2, ['defaultToggled', 'elementStyle', 'onToggle', 'trackSwitchedStyle', 'thumbSwitchedStyle', 'toggled']);
    var prepareStyles = this.context.muiTheme.prepareStyles;

    var styles = getStyles(this.props, this.context, this.state);

    var toggleElement = _react2.default.createElement(
      'div',
      { style: prepareStyles((0, _assign2.default)({}, styles.toggleElement)) },
      _react2.default.createElement('div', { style: prepareStyles((0, _assign2.default)({}, styles.track)) }),
      _react2.default.createElement(_Paper2.default, { style: styles.thumb, circle: true, zDepth: 1 })
    );

    var enhancedSwitchProps = {
      ref: 'enhancedSwitch',
      inputType: 'checkbox',
      switchElement: toggleElement,
      rippleStyle: styles.ripple,
      rippleColor: styles.ripple.color,
      iconStyle: styles.icon,
      trackStyle: styles.track,
      thumbStyle: styles.thumb,
      labelStyle: styles.label,
      switched: this.state.switched,
      onSwitch: this.handleToggle,
      onParentShouldUpdate: this.handleStateChange,
      labelPosition: this.props.labelPosition
    };

    if (this.props.hasOwnProperty('toggled')) {
      enhancedSwitchProps.checked = toggled;
    } else if (this.props.hasOwnProperty('defaultToggled')) {
      enhancedSwitchProps.defaultChecked = defaultToggled;
    }

    return _react2.default.createElement(_EnhancedSwitch2.default, (0, _extends3.default)({}, other, enhancedSwitchProps));
  };

  return Toggle;
}(_react.Component), _class.propTypes = {
  /**
   * Determines whether the Toggle is initially turned on.
   * **Warning:** This cannot be used in conjunction with `toggled`.
   * Decide between using a controlled or uncontrolled input element and remove one of these props.
   * More info: https://fb.me/react-controlled-components
   */
  defaultToggled: _propTypes2.default.bool,
  /**
   * Will disable the toggle if true.
   */
  disabled: _propTypes2.default.bool,
  /**
   * Overrides the inline-styles of the Toggle element.
   */
  elementStyle: _propTypes2.default.object,
  /**
   * Overrides the inline-styles of the Icon element.
   */
  iconStyle: _propTypes2.default.object,
  /**
   * Overrides the inline-styles of the input element.
   */
  inputStyle: _propTypes2.default.object,
  /**
   * Label for toggle.
   */
  label: _propTypes2.default.node,
  /**
   * Where the label will be placed next to the toggle.
   */
  labelPosition: _propTypes2.default.oneOf(['left', 'right']),
  /**
   * Overrides the inline-styles of the Toggle element label.
   */
  labelStyle: _propTypes2.default.object,
  /**
   * Callback function that is fired when the toggle switch is toggled.
   *
   * @param {object} event Change event targeting the toggle.
   * @param {bool} isInputChecked The new value of the toggle.
   */
  onToggle: _propTypes2.default.func,
  /**
   * Override style of ripple.
   */
  rippleStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * Override style for thumb.
   */
  thumbStyle: _propTypes2.default.object,
  /**
  * Override the inline styles for thumb when the toggle switch is toggled on.
  */
  thumbSwitchedStyle: _propTypes2.default.object,
  /**
   * Toggled if set to true.
   */
  toggled: _propTypes2.default.bool,
  /**
   * Override style for track.
   */
  trackStyle: _propTypes2.default.object,
  /**
  * Override the inline styles for track when the toggle switch is toggled on.
  */
  trackSwitchedStyle: _propTypes2.default.object,
  /**
   * ValueLink prop for when using controlled toggle.
   */
  valueLink: _propTypes2.default.object
}, _class.defaultProps = {
  defaultToggled: false,
  disabled: false,
  labelPosition: 'left'
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = Toggle;

/***/ }),
/* 378 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var noGutter = props.noGutter;
  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      toolbar = _context$muiTheme.toolbar;


  return {
    root: {
      boxSizing: 'border-box',
      WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
      backgroundColor: toolbar.backgroundColor,
      height: toolbar.height,
      padding: noGutter ? 0 : '0px ' + baseTheme.spacing.desktopGutter + 'px',
      display: 'flex',
      justifyContent: 'space-between'
    }
  };
}

var Toolbar = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(Toolbar, _Component);

  function Toolbar() {
    (0, _classCallCheck3.default)(this, Toolbar);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  Toolbar.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        className = _props.className,
        noGutter = _props.noGutter,
        style = _props.style,
        other = (0, _objectWithoutProperties3.default)(_props, ['children', 'className', 'noGutter', 'style']);
    var prepareStyles = this.context.muiTheme.prepareStyles;

    var styles = getStyles(this.props, this.context);

    return _react2.default.createElement(
      'div',
      (0, _extends3.default)({}, other, { className: className, style: prepareStyles((0, _assign2.default)({}, styles.root, style)) }),
      children
    );
  };

  return Toolbar;
}(_react.Component), _class.propTypes = {
  /**
   * Can be a `ToolbarGroup` to render a group of related items.
   */
  children: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * Do not apply `desktopGutter` to the `Toolbar`.
   */
  noGutter: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
}, _class.defaultProps = {
  noGutter: false
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp);
exports.default = Toolbar;

/***/ }),
/* 379 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToolbarTitle = exports.ToolbarSeparator = exports.ToolbarGroup = exports.Toolbar = exports.Toggle = exports.TimePicker = exports.TextField = exports.TableRowColumn = exports.TableRow = exports.TableHeaderColumn = exports.TableHeader = exports.TableFooter = exports.TableBody = exports.Table = exports.Tab = exports.Tabs = exports.Snackbar = exports.Stepper = exports.StepLabel = exports.StepContent = exports.StepButton = exports.Step = exports.SvgIcon = exports.Subheader = exports.Slider = exports.SelectField = exports.RefreshIndicator = exports.RaisedButton = exports.RadioButtonGroup = exports.RadioButton = exports.Popover = exports.Paper = exports.MuiThemeProvider = exports.MenuItem = exports.Menu = exports.makeSelectable = exports.ListItem = exports.List = exports.LinearProgress = exports.IconMenu = exports.IconButton = exports.GridTile = exports.GridList = exports.FontIcon = exports.FloatingActionButton = exports.FlatButton = exports.DropDownMenu = exports.Drawer = exports.Divider = exports.Dialog = exports.DatePicker = exports.CircularProgress = exports.Chip = exports.Checkbox = exports.CardText = exports.CardTitle = exports.CardMedia = exports.CardHeader = exports.CardActions = exports.Card = exports.BottomNavigationItem = exports.BottomNavigation = exports.Badge = exports.Avatar = exports.AutoComplete = exports.AppBar = undefined;

var _AppBar2 = __webpack_require__(282);

var _AppBar3 = _interopRequireDefault(_AppBar2);

var _AutoComplete2 = __webpack_require__(283);

var _AutoComplete3 = _interopRequireDefault(_AutoComplete2);

var _Avatar2 = __webpack_require__(158);

var _Avatar3 = _interopRequireDefault(_Avatar2);

var _Badge2 = __webpack_require__(284);

var _Badge3 = _interopRequireDefault(_Badge2);

var _BottomNavigation2 = __webpack_require__(285);

var _BottomNavigation3 = _interopRequireDefault(_BottomNavigation2);

var _BottomNavigationItem2 = __webpack_require__(159);

var _BottomNavigationItem3 = _interopRequireDefault(_BottomNavigationItem2);

var _Card2 = __webpack_require__(286);

var _Card3 = _interopRequireDefault(_Card2);

var _CardActions2 = __webpack_require__(160);

var _CardActions3 = _interopRequireDefault(_CardActions2);

var _CardHeader2 = __webpack_require__(161);

var _CardHeader3 = _interopRequireDefault(_CardHeader2);

var _CardMedia2 = __webpack_require__(162);

var _CardMedia3 = _interopRequireDefault(_CardMedia2);

var _CardTitle2 = __webpack_require__(164);

var _CardTitle3 = _interopRequireDefault(_CardTitle2);

var _CardText2 = __webpack_require__(163);

var _CardText3 = _interopRequireDefault(_CardText2);

var _Checkbox2 = __webpack_require__(102);

var _Checkbox3 = _interopRequireDefault(_Checkbox2);

var _Chip2 = __webpack_require__(287);

var _Chip3 = _interopRequireDefault(_Chip2);

var _CircularProgress2 = __webpack_require__(288);

var _CircularProgress3 = _interopRequireDefault(_CircularProgress2);

var _DatePicker2 = __webpack_require__(289);

var _DatePicker3 = _interopRequireDefault(_DatePicker2);

var _Dialog2 = __webpack_require__(103);

var _Dialog3 = _interopRequireDefault(_Dialog2);

var _Divider2 = __webpack_require__(165);

var _Divider3 = _interopRequireDefault(_Divider2);

var _Drawer2 = __webpack_require__(290);

var _Drawer3 = _interopRequireDefault(_Drawer2);

var _DropDownMenu2 = __webpack_require__(166);

var _DropDownMenu3 = _interopRequireDefault(_DropDownMenu2);

var _FlatButton2 = __webpack_require__(79);

var _FlatButton3 = _interopRequireDefault(_FlatButton2);

var _FloatingActionButton2 = __webpack_require__(291);

var _FloatingActionButton3 = _interopRequireDefault(_FloatingActionButton2);

var _FontIcon2 = __webpack_require__(104);

var _FontIcon3 = _interopRequireDefault(_FontIcon2);

var _GridList2 = __webpack_require__(292);

var _GridList3 = _interopRequireDefault(_GridList2);

var _GridTile2 = __webpack_require__(167);

var _GridTile3 = _interopRequireDefault(_GridTile2);

var _IconButton2 = __webpack_require__(50);

var _IconButton3 = _interopRequireDefault(_IconButton2);

var _IconMenu2 = __webpack_require__(293);

var _IconMenu3 = _interopRequireDefault(_IconMenu2);

var _LinearProgress2 = __webpack_require__(294);

var _LinearProgress3 = _interopRequireDefault(_LinearProgress2);

var _List2 = __webpack_require__(295);

var _List3 = _interopRequireDefault(_List2);

var _ListItem2 = __webpack_require__(105);

var _ListItem3 = _interopRequireDefault(_ListItem2);

var _makeSelectable2 = __webpack_require__(168);

var _makeSelectable3 = _interopRequireDefault(_makeSelectable2);

var _Menu2 = __webpack_require__(169);

var _Menu3 = _interopRequireDefault(_Menu2);

var _MenuItem2 = __webpack_require__(106);

var _MenuItem3 = _interopRequireDefault(_MenuItem2);

var _MuiThemeProvider2 = __webpack_require__(312);

var _MuiThemeProvider3 = _interopRequireDefault(_MuiThemeProvider2);

var _Paper2 = __webpack_require__(21);

var _Paper3 = _interopRequireDefault(_Paper2);

var _Popover2 = __webpack_require__(296);

var _Popover3 = _interopRequireDefault(_Popover2);

var _RadioButton2 = __webpack_require__(297);

var _RadioButton3 = _interopRequireDefault(_RadioButton2);

var _RadioButtonGroup2 = __webpack_require__(170);

var _RadioButtonGroup3 = _interopRequireDefault(_RadioButtonGroup2);

var _RaisedButton2 = __webpack_require__(298);

var _RaisedButton3 = _interopRequireDefault(_RaisedButton2);

var _RefreshIndicator2 = __webpack_require__(299);

var _RefreshIndicator3 = _interopRequireDefault(_RefreshIndicator2);

var _SelectField2 = __webpack_require__(300);

var _SelectField3 = _interopRequireDefault(_SelectField2);

var _Slider2 = __webpack_require__(301);

var _Slider3 = _interopRequireDefault(_Slider2);

var _Subheader2 = __webpack_require__(172);

var _Subheader3 = _interopRequireDefault(_Subheader2);

var _SvgIcon2 = __webpack_require__(16);

var _SvgIcon3 = _interopRequireDefault(_SvgIcon2);

var _Step2 = __webpack_require__(303);

var _Step3 = _interopRequireDefault(_Step2);

var _StepButton2 = __webpack_require__(304);

var _StepButton3 = _interopRequireDefault(_StepButton2);

var _StepContent2 = __webpack_require__(305);

var _StepContent3 = _interopRequireDefault(_StepContent2);

var _StepLabel2 = __webpack_require__(171);

var _StepLabel3 = _interopRequireDefault(_StepLabel2);

var _Stepper2 = __webpack_require__(306);

var _Stepper3 = _interopRequireDefault(_Stepper2);

var _Snackbar2 = __webpack_require__(302);

var _Snackbar3 = _interopRequireDefault(_Snackbar2);

var _Tabs2 = __webpack_require__(308);

var _Tabs3 = _interopRequireDefault(_Tabs2);

var _Tab2 = __webpack_require__(177);

var _Tab3 = _interopRequireDefault(_Tab2);

var _Table2 = __webpack_require__(307);

var _Table3 = _interopRequireDefault(_Table2);

var _TableBody2 = __webpack_require__(173);

var _TableBody3 = _interopRequireDefault(_TableBody2);

var _TableFooter2 = __webpack_require__(174);

var _TableFooter3 = _interopRequireDefault(_TableFooter2);

var _TableHeader2 = __webpack_require__(175);

var _TableHeader3 = _interopRequireDefault(_TableHeader2);

var _TableHeaderColumn2 = __webpack_require__(107);

var _TableHeaderColumn3 = _interopRequireDefault(_TableHeaderColumn2);

var _TableRow2 = __webpack_require__(176);

var _TableRow3 = _interopRequireDefault(_TableRow2);

var _TableRowColumn2 = __webpack_require__(80);

var _TableRowColumn3 = _interopRequireDefault(_TableRowColumn2);

var _TextField2 = __webpack_require__(63);

var _TextField3 = _interopRequireDefault(_TextField2);

var _TimePicker2 = __webpack_require__(309);

var _TimePicker3 = _interopRequireDefault(_TimePicker2);

var _Toggle2 = __webpack_require__(310);

var _Toggle3 = _interopRequireDefault(_Toggle2);

var _Toolbar2 = __webpack_require__(311);

var _Toolbar3 = _interopRequireDefault(_Toolbar2);

var _ToolbarGroup2 = __webpack_require__(178);

var _ToolbarGroup3 = _interopRequireDefault(_ToolbarGroup2);

var _ToolbarSeparator2 = __webpack_require__(179);

var _ToolbarSeparator3 = _interopRequireDefault(_ToolbarSeparator2);

var _ToolbarTitle2 = __webpack_require__(180);

var _ToolbarTitle3 = _interopRequireDefault(_ToolbarTitle2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.AppBar = _AppBar3.default;
exports.AutoComplete = _AutoComplete3.default;
exports.Avatar = _Avatar3.default;
exports.Badge = _Badge3.default;
exports.BottomNavigation = _BottomNavigation3.default;
exports.BottomNavigationItem = _BottomNavigationItem3.default;
exports.Card = _Card3.default;
exports.CardActions = _CardActions3.default;
exports.CardHeader = _CardHeader3.default;
exports.CardMedia = _CardMedia3.default;
exports.CardTitle = _CardTitle3.default;
exports.CardText = _CardText3.default;
exports.Checkbox = _Checkbox3.default;
exports.Chip = _Chip3.default;
exports.CircularProgress = _CircularProgress3.default;
exports.DatePicker = _DatePicker3.default;
exports.Dialog = _Dialog3.default;
exports.Divider = _Divider3.default;
exports.Drawer = _Drawer3.default;
exports.DropDownMenu = _DropDownMenu3.default;
exports.FlatButton = _FlatButton3.default;
exports.FloatingActionButton = _FloatingActionButton3.default;
exports.FontIcon = _FontIcon3.default;
exports.GridList = _GridList3.default;
exports.GridTile = _GridTile3.default;
exports.IconButton = _IconButton3.default;
exports.IconMenu = _IconMenu3.default;
exports.LinearProgress = _LinearProgress3.default;
exports.List = _List3.default;
exports.ListItem = _ListItem3.default;
exports.makeSelectable = _makeSelectable3.default;
exports.Menu = _Menu3.default;
exports.MenuItem = _MenuItem3.default;
exports.MuiThemeProvider = _MuiThemeProvider3.default;
exports.Paper = _Paper3.default;
exports.Popover = _Popover3.default;
exports.RadioButton = _RadioButton3.default;
exports.RadioButtonGroup = _RadioButtonGroup3.default;
exports.RaisedButton = _RaisedButton3.default;
exports.RefreshIndicator = _RefreshIndicator3.default;
exports.SelectField = _SelectField3.default;
exports.Slider = _Slider3.default;
exports.Subheader = _Subheader3.default;
exports.SvgIcon = _SvgIcon3.default;
exports.Step = _Step3.default;
exports.StepButton = _StepButton3.default;
exports.StepContent = _StepContent3.default;
exports.StepLabel = _StepLabel3.default;
exports.Stepper = _Stepper3.default;
exports.Snackbar = _Snackbar3.default;
exports.Tabs = _Tabs3.default;
exports.Tab = _Tab3.default;
exports.Table = _Table3.default;
exports.TableBody = _TableBody3.default;
exports.TableFooter = _TableFooter3.default;
exports.TableHeader = _TableHeader3.default;
exports.TableHeaderColumn = _TableHeaderColumn3.default;
exports.TableRow = _TableRow3.default;
exports.TableRowColumn = _TableRowColumn3.default;
exports.TextField = _TextField3.default;
exports.TimePicker = _TimePicker3.default;
exports.Toggle = _Toggle3.default;
exports.Toolbar = _Toolbar3.default;
exports.ToolbarGroup = _ToolbarGroup3.default;
exports.ToolbarSeparator = _ToolbarSeparator3.default;
exports.ToolbarTitle = _ToolbarTitle3.default;

/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var originalBodyOverflow = null;
var lockingCounter = 0;

var AutoLockScrolling = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(AutoLockScrolling, _Component);

  function AutoLockScrolling() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, AutoLockScrolling);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.locked = false, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  AutoLockScrolling.prototype.componentDidMount = function componentDidMount() {
    if (this.props.lock === true) {
      this.preventScrolling();
    }
  };

  AutoLockScrolling.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.lock !== nextProps.lock) {
      if (nextProps.lock) {
        this.preventScrolling();
      } else {
        this.allowScrolling();
      }
    }
  };

  AutoLockScrolling.prototype.componentWillUnmount = function componentWillUnmount() {
    this.allowScrolling();
  };

  // force to only lock/unlock once


  AutoLockScrolling.prototype.preventScrolling = function preventScrolling() {
    if (this.locked === true) {
      return;
    }

    lockingCounter = lockingCounter + 1;
    this.locked = true;

    // only lock the first time the component is mounted.
    if (lockingCounter === 1) {
      var body = document.getElementsByTagName('body')[0];
      originalBodyOverflow = body.style.overflow;
      body.style.overflow = 'hidden';
    }
  };

  AutoLockScrolling.prototype.allowScrolling = function allowScrolling() {
    if (this.locked === true) {
      lockingCounter = lockingCounter - 1;
      this.locked = false;
    }

    if (lockingCounter === 0 && originalBodyOverflow !== null) {
      var body = document.getElementsByTagName('body')[0];
      body.style.overflow = originalBodyOverflow || '';
      originalBodyOverflow = null;
    }
  };

  AutoLockScrolling.prototype.render = function render() {
    return null;
  };

  return AutoLockScrolling;
}(_react.Component), _class.propTypes = {
  lock: _propTypes2.default.bool.isRequired
}, _temp2);
exports.default = AutoLockScrolling;

/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  BeforeAfterWrapper
 *    An alternative for the ::before and ::after css pseudo-elements for
 *    components whose styles are defined in javascript instead of css.
 *
 *  Usage: For the element that we want to apply before and after elements to,
 *    wrap its children with BeforeAfterWrapper. For example:
 *
 *                                            <Paper>
 *  <Paper>                                     <div> // See notice
 *    <BeforeAfterWrapper>        renders         <div/> // before element
 *      [children of paper]       ------>         [children of paper]
 *    </BeforeAfterWrapper>                       <div/> // after element
 *  </Paper>                                    </div>
 *                                            </Paper>
 *
 *  Notice: Notice that this div bundles together our elements. If the element
 *    that we want to apply before and after elements is a HTML tag (i.e. a
 *    div, p, or button tag), we can avoid this extra nesting by passing using
 *    the BeforeAfterWrapper in place of said tag like so:
 *
 *  <p>
 *    <BeforeAfterWrapper>   do this instead   <BeforeAfterWrapper elementType='p'>
 *      [children of p]          ------>         [children of p]
 *    </BeforeAfterWrapper>                    </BeforeAfterWrapper>
 *  </p>
 *
 *  BeforeAfterWrapper features spread functionality. This means that we can
 *  pass HTML tag properties directly into the BeforeAfterWrapper tag.
 *
 *  When using BeforeAfterWrapper, ensure that the parent of the beforeElement
 *  and afterElement have a defined style position.
 */

var styles = {
  box: {
    boxSizing: 'border-box'
  }
};

var BeforeAfterWrapper = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(BeforeAfterWrapper, _Component);

  function BeforeAfterWrapper() {
    (0, _classCallCheck3.default)(this, BeforeAfterWrapper);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  BeforeAfterWrapper.prototype.render = function render() {
    var _props = this.props,
        beforeStyle = _props.beforeStyle,
        afterStyle = _props.afterStyle,
        beforeElementType = _props.beforeElementType,
        afterElementType = _props.afterElementType,
        elementType = _props.elementType,
        other = (0, _objectWithoutProperties3.default)(_props, ['beforeStyle', 'afterStyle', 'beforeElementType', 'afterElementType', 'elementType']);
    var prepareStyles = this.context.muiTheme.prepareStyles;


    var beforeElement = void 0;
    var afterElement = void 0;

    if (beforeStyle) {
      beforeElement = _react2.default.createElement(this.props.beforeElementType, {
        style: prepareStyles((0, _assign2.default)({}, styles.box, beforeStyle)),
        key: '::before'
      });
    }

    if (afterStyle) {
      afterElement = _react2.default.createElement(this.props.afterElementType, {
        style: prepareStyles((0, _assign2.default)({}, styles.box, afterStyle)),
        key: '::after'
      });
    }

    var children = [beforeElement, this.props.children, afterElement];

    var props = other;
    props.style = prepareStyles((0, _assign2.default)({}, this.props.style));

    return _react2.default.createElement(this.props.elementType, props, children);
  };

  return BeforeAfterWrapper;
}(_react.Component), _class.propTypes = {
  afterElementType: _propTypes2.default.string,
  afterStyle: _propTypes2.default.object,
  beforeElementType: _propTypes2.default.string,
  beforeStyle: _propTypes2.default.object,
  children: _propTypes2.default.node,
  elementType: _propTypes2.default.string,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
}, _class.defaultProps = {
  beforeElementType: 'div',
  afterElementType: 'div',
  elementType: 'div'
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp);
exports.default = BeforeAfterWrapper;

/***/ }),
/* 382 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(14);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _shallowEqual = __webpack_require__(49);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _autoPrefix = __webpack_require__(38);

var _autoPrefix2 = _interopRequireDefault(_autoPrefix);

var _transitions = __webpack_require__(11);

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

/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _BeforeAfterWrapper = __webpack_require__(381);

var _BeforeAfterWrapper2 = _interopRequireDefault(_BeforeAfterWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  before: {
    content: "' '",
    display: 'table'
  },
  after: {
    content: "' '",
    clear: 'both',
    display: 'table'
  }
};

var ClearFix = function ClearFix(_ref) {
  var style = _ref.style,
      children = _ref.children,
      other = (0, _objectWithoutProperties3.default)(_ref, ['style', 'children']);
  return _react2.default.createElement(
    _BeforeAfterWrapper2.default,
    (0, _extends3.default)({}, other, {
      beforeStyle: styles.before,
      afterStyle: styles.after,
      style: style
    }),
    children
  );
};

ClearFix.muiName = 'ClearFix';

ClearFix.propTypes = {
  children: _propTypes2.default.node,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
};

exports.default = ClearFix;

/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TransitionGroup = __webpack_require__(46);

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

var _ExpandTransitionChild = __webpack_require__(385);

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

/***/ }),
/* 385 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(14);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _transitions = __webpack_require__(11);

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

/***/ }),
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TransitionGroup = __webpack_require__(46);

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

var _ScaleInChild = __webpack_require__(387);

var _ScaleInChild2 = _interopRequireDefault(_ScaleInChild);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ScaleIn = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(ScaleIn, _Component);

  function ScaleIn() {
    (0, _classCallCheck3.default)(this, ScaleIn);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  ScaleIn.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        childStyle = _props.childStyle,
        enterDelay = _props.enterDelay,
        maxScale = _props.maxScale,
        minScale = _props.minScale,
        style = _props.style,
        other = (0, _objectWithoutProperties3.default)(_props, ['children', 'childStyle', 'enterDelay', 'maxScale', 'minScale', 'style']);
    var prepareStyles = this.context.muiTheme.prepareStyles;


    var mergedRootStyles = (0, _assign2.default)({}, {
      position: 'relative',
      overflow: 'hidden',
      height: '100%'
    }, style);

    var newChildren = _react2.default.Children.map(children, function (child) {
      return _react2.default.createElement(
        _ScaleInChild2.default,
        {
          key: child.key,
          enterDelay: enterDelay,
          maxScale: maxScale,
          minScale: minScale,
          style: childStyle
        },
        child
      );
    });

    return _react2.default.createElement(
      _TransitionGroup2.default,
      (0, _extends3.default)({}, other, {
        style: prepareStyles(mergedRootStyles),
        component: 'div'
      }),
      newChildren
    );
  };

  return ScaleIn;
}(_react.Component), _class.propTypes = {
  childStyle: _propTypes2.default.object,
  children: _propTypes2.default.node,
  enterDelay: _propTypes2.default.number,
  maxScale: _propTypes2.default.number,
  minScale: _propTypes2.default.number,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
}, _class.defaultProps = {
  enterDelay: 0
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp);
exports.default = ScaleIn;

/***/ }),
/* 387 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(14);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _autoPrefix = __webpack_require__(38);

var _autoPrefix2 = _interopRequireDefault(_autoPrefix);

var _transitions = __webpack_require__(11);

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

/***/ }),
/* 388 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(5);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(8);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(14);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _autoPrefix = __webpack_require__(38);

var _autoPrefix2 = _interopRequireDefault(_autoPrefix);

var _transitions = __webpack_require__(11);

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SlideInChild = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(SlideInChild, _Component);

  function SlideInChild() {
    (0, _classCallCheck3.default)(this, SlideInChild);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  SlideInChild.prototype.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.enterTimer);
    clearTimeout(this.leaveTimer);
  };

  SlideInChild.prototype.componentWillEnter = function componentWillEnter(callback) {
    var style = _reactDom2.default.findDOMNode(this).style;
    var x = this.props.direction === 'left' ? '100%' : this.props.direction === 'right' ? '-100%' : '0';
    var y = this.props.direction === 'up' ? '100%' : this.props.direction === 'down' ? '-100%' : '0';

    style.opacity = '0';
    _autoPrefix2.default.set(style, 'transform', 'translate(' + x + ', ' + y + ')');

    this.enterTimer = setTimeout(callback, this.props.enterDelay);
  };

  SlideInChild.prototype.componentDidEnter = function componentDidEnter() {
    var style = _reactDom2.default.findDOMNode(this).style;
    style.opacity = '1';
    _autoPrefix2.default.set(style, 'transform', 'translate(0,0)');
  };

  SlideInChild.prototype.componentWillLeave = function componentWillLeave(callback) {
    var style = _reactDom2.default.findDOMNode(this).style;
    var direction = this.props.getLeaveDirection();
    var x = direction === 'left' ? '-100%' : direction === 'right' ? '100%' : '0';
    var y = direction === 'up' ? '-100%' : direction === 'down' ? '100%' : '0';

    style.opacity = '0';
    _autoPrefix2.default.set(style, 'transform', 'translate(' + x + ', ' + y + ')');

    this.leaveTimer = setTimeout(callback, 450);
  };

  SlideInChild.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        enterDelay = _props.enterDelay,
        getLeaveDirection = _props.getLeaveDirection,
        style = _props.style,
        other = (0, _objectWithoutProperties3.default)(_props, ['children', 'enterDelay', 'getLeaveDirection', 'style']);
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

  return SlideInChild;
}(_react.Component), _class.propTypes = {
  children: _propTypes2.default.node,
  direction: _propTypes2.default.string,
  enterDelay: _propTypes2.default.number,
  // This callback is needed bacause the direction could change when leaving the DOM
  getLeaveDirection: _propTypes2.default.func.isRequired,
  style: _propTypes2.default.object
}, _class.defaultProps = {
  enterDelay: 0
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp);
exports.default = SlideInChild;

/***/ }),
/* 389 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _colors = __webpack_require__(117);

var _colorManipulator = __webpack_require__(35);

var _spacing = __webpack_require__(391);

var _spacing2 = _interopRequireDefault(_spacing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  Light Theme is the default theme used in material-ui. It is guaranteed to
 *  have all theme variables needed for every component. Variables not defined
 *  in a custom theme will default to these values.
 */
exports.default = {
  spacing: _spacing2.default,
  fontFamily: 'Roboto, sans-serif',
  borderRadius: 2,
  palette: {
    primary1Color: _colors.cyan500,
    primary2Color: _colors.cyan700,
    primary3Color: _colors.grey400,
    accent1Color: _colors.pinkA200,
    accent2Color: _colors.grey100,
    accent3Color: _colors.grey500,
    textColor: _colors.darkBlack,
    secondaryTextColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.54),
    alternateTextColor: _colors.white,
    canvasColor: _colors.white,
    borderColor: _colors.grey300,
    disabledColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.3),
    pickerHeaderColor: _colors.cyan500,
    clockCircleColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.07),
    shadowColor: _colors.fullBlack
  }
}; /**
    * NB: If you update this file, please also update `docs/src/app/customization/Themes.js`
    */

/***/ }),
/* 390 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getMuiTheme;

var _lodash = __webpack_require__(181);

var _lodash2 = _interopRequireDefault(_lodash);

var _colorManipulator = __webpack_require__(35);

var _lightBaseTheme = __webpack_require__(389);

var _lightBaseTheme2 = _interopRequireDefault(_lightBaseTheme);

var _zIndex = __webpack_require__(393);

var _zIndex2 = _interopRequireDefault(_zIndex);

var _autoprefixer = __webpack_require__(409);

var _autoprefixer2 = _interopRequireDefault(_autoprefixer);

var _callOnce = __webpack_require__(412);

var _callOnce2 = _interopRequireDefault(_callOnce);

var _rtl = __webpack_require__(413);

var _rtl2 = _interopRequireDefault(_rtl);

var _compose = __webpack_require__(700);

var _compose2 = _interopRequireDefault(_compose);

var _typography = __webpack_require__(392);

var _typography2 = _interopRequireDefault(_typography);

var _colors = __webpack_require__(117);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get the MUI theme corresponding to a base theme.
 * It's possible to override the computed theme values
 * by providing a second argument. The calculated
 * theme will be deeply merged with the second argument.
 */
function getMuiTheme(muiTheme) {
  for (var _len = arguments.length, more = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    more[_key - 1] = arguments[_key];
  }

  muiTheme = _lodash2.default.apply(undefined, [{
    zIndex: _zIndex2.default,
    isRtl: false,
    userAgent: undefined
  }, _lightBaseTheme2.default, muiTheme].concat(more));

  var _muiTheme = muiTheme,
      spacing = _muiTheme.spacing,
      fontFamily = _muiTheme.fontFamily,
      palette = _muiTheme.palette;

  var baseTheme = { spacing: spacing, fontFamily: fontFamily, palette: palette };

  muiTheme = (0, _lodash2.default)({
    appBar: {
      color: palette.primary1Color,
      textColor: palette.alternateTextColor,
      height: spacing.desktopKeylineIncrement,
      titleFontWeight: _typography2.default.fontWeightNormal,
      padding: spacing.desktopGutter
    },
    avatar: {
      color: palette.canvasColor,
      backgroundColor: (0, _colorManipulator.emphasize)(palette.canvasColor, 0.26)
    },
    badge: {
      color: palette.alternateTextColor,
      textColor: palette.textColor,
      primaryColor: palette.primary1Color,
      primaryTextColor: palette.alternateTextColor,
      secondaryColor: palette.accent1Color,
      secondaryTextColor: palette.alternateTextColor,
      fontWeight: _typography2.default.fontWeightMedium
    },
    bottomNavigation: {
      backgroundColor: palette.canvasColor,
      unselectedColor: (0, _colorManipulator.fade)(palette.textColor, 0.54),
      selectedColor: palette.primary1Color,
      height: 56,
      unselectedFontSize: 12,
      selectedFontSize: 14
    },
    button: {
      height: 36,
      minWidth: 88,
      iconButtonSize: spacing.iconSize * 2
    },
    card: {
      titleColor: (0, _colorManipulator.fade)(palette.textColor, 0.87),
      subtitleColor: (0, _colorManipulator.fade)(palette.textColor, 0.54),
      fontWeight: _typography2.default.fontWeightMedium
    },
    cardMedia: {
      color: _colors.darkWhite,
      overlayContentBackground: _colors.lightBlack,
      titleColor: _colors.darkWhite,
      subtitleColor: _colors.lightWhite
    },
    cardText: {
      textColor: palette.textColor
    },
    checkbox: {
      boxColor: palette.textColor,
      checkedColor: palette.primary1Color,
      requiredColor: palette.primary1Color,
      disabledColor: palette.disabledColor,
      labelColor: palette.textColor,
      labelDisabledColor: palette.disabledColor
    },
    chip: {
      backgroundColor: (0, _colorManipulator.emphasize)(palette.canvasColor, 0.12),
      deleteIconColor: (0, _colorManipulator.fade)(palette.textColor, 0.26),
      textColor: (0, _colorManipulator.fade)(palette.textColor, 0.87),
      fontSize: 14,
      fontWeight: _typography2.default.fontWeightNormal,
      shadow: '0 1px 6px ' + (0, _colorManipulator.fade)(palette.shadowColor, 0.12) + ',\n        0 1px 4px ' + (0, _colorManipulator.fade)(palette.shadowColor, 0.12)
    },
    datePicker: {
      color: palette.primary1Color,
      textColor: palette.alternateTextColor,
      calendarTextColor: palette.textColor,
      selectColor: palette.primary2Color,
      selectTextColor: palette.alternateTextColor,
      calendarYearBackgroundColor: palette.canvasColor
    },
    dialog: {
      titleFontSize: 22,
      bodyFontSize: 16,
      bodyColor: (0, _colorManipulator.fade)(palette.textColor, 0.6)
    },
    dropDownMenu: {
      accentColor: palette.borderColor
    },
    enhancedButton: {
      tapHighlightColor: _colors.transparent
    },
    flatButton: {
      color: _colors.transparent,
      buttonFilterColor: '#999999',
      disabledTextColor: (0, _colorManipulator.fade)(palette.textColor, 0.3),
      textColor: palette.textColor,
      primaryTextColor: palette.primary1Color,
      secondaryTextColor: palette.accent1Color,
      fontSize: _typography2.default.fontStyleButtonFontSize,
      fontWeight: _typography2.default.fontWeightMedium
    },
    floatingActionButton: {
      buttonSize: 56,
      miniSize: 40,
      color: palette.primary1Color,
      iconColor: palette.alternateTextColor,
      secondaryColor: palette.accent1Color,
      secondaryIconColor: palette.alternateTextColor,
      disabledTextColor: palette.disabledColor,
      disabledColor: (0, _colorManipulator.emphasize)(palette.canvasColor, 0.12)
    },
    gridTile: {
      textColor: _colors.white
    },
    icon: {
      color: palette.canvasColor,
      backgroundColor: palette.primary1Color
    },
    inkBar: {
      backgroundColor: palette.accent1Color
    },
    drawer: {
      width: spacing.desktopKeylineIncrement * 4,
      color: palette.canvasColor
    },
    listItem: {
      nestedLevelDepth: 18,
      secondaryTextColor: palette.secondaryTextColor,
      leftIconColor: _colors.grey600,
      rightIconColor: _colors.grey600
    },
    menu: {
      backgroundColor: palette.canvasColor,
      containerBackgroundColor: palette.canvasColor
    },
    menuItem: {
      dataHeight: 32,
      height: 48,
      hoverColor: (0, _colorManipulator.fade)(palette.textColor, 0.1),
      padding: spacing.desktopGutter,
      selectedTextColor: palette.accent1Color,
      rightIconDesktopFill: _colors.grey600
    },
    menuSubheader: {
      padding: spacing.desktopGutter,
      borderColor: palette.borderColor,
      textColor: palette.primary1Color
    },
    overlay: {
      backgroundColor: _colors.lightBlack
    },
    paper: {
      color: palette.textColor,
      backgroundColor: palette.canvasColor,
      zDepthShadows: [[1, 6, 0.12, 1, 4, 0.12], [3, 10, 0.16, 3, 10, 0.23], [10, 30, 0.19, 6, 10, 0.23], [14, 45, 0.25, 10, 18, 0.22], [19, 60, 0.30, 15, 20, 0.22]].map(function (d) {
        return '0 ' + d[0] + 'px ' + d[1] + 'px ' + (0, _colorManipulator.fade)(palette.shadowColor, d[2]) + ',\n         0 ' + d[3] + 'px ' + d[4] + 'px ' + (0, _colorManipulator.fade)(palette.shadowColor, d[5]);
      })
    },
    radioButton: {
      borderColor: palette.textColor,
      backgroundColor: palette.alternateTextColor,
      checkedColor: palette.primary1Color,
      requiredColor: palette.primary1Color,
      disabledColor: palette.disabledColor,
      size: 24,
      labelColor: palette.textColor,
      labelDisabledColor: palette.disabledColor
    },
    raisedButton: {
      color: palette.alternateTextColor,
      textColor: palette.textColor,
      primaryColor: palette.primary1Color,
      primaryTextColor: palette.alternateTextColor,
      secondaryColor: palette.accent1Color,
      secondaryTextColor: palette.alternateTextColor,
      disabledColor: (0, _colorManipulator.darken)(palette.alternateTextColor, 0.1),
      disabledTextColor: (0, _colorManipulator.fade)(palette.textColor, 0.3),
      fontSize: _typography2.default.fontStyleButtonFontSize,
      fontWeight: _typography2.default.fontWeightMedium
    },
    refreshIndicator: {
      strokeColor: palette.borderColor,
      loadingStrokeColor: palette.primary1Color
    },
    ripple: {
      color: (0, _colorManipulator.fade)(palette.textColor, 0.87)
    },
    slider: {
      trackSize: 2,
      trackColor: palette.primary3Color,
      trackColorSelected: palette.accent3Color,
      handleSize: 12,
      handleSizeDisabled: 8,
      handleSizeActive: 18,
      handleColorZero: palette.primary3Color,
      handleFillColor: palette.alternateTextColor,
      selectionColor: palette.primary1Color,
      rippleColor: palette.primary1Color
    },
    snackbar: {
      textColor: palette.alternateTextColor,
      backgroundColor: palette.textColor,
      actionColor: palette.accent1Color
    },
    subheader: {
      color: (0, _colorManipulator.fade)(palette.textColor, 0.54),
      fontWeight: _typography2.default.fontWeightMedium
    },
    stepper: {
      backgroundColor: 'transparent',
      hoverBackgroundColor: (0, _colorManipulator.fade)(_colors.black, 0.06),
      iconColor: palette.primary1Color,
      hoveredIconColor: _colors.grey700,
      inactiveIconColor: _colors.grey500,
      textColor: (0, _colorManipulator.fade)(_colors.black, 0.87),
      disabledTextColor: (0, _colorManipulator.fade)(_colors.black, 0.26),
      connectorLineColor: _colors.grey400
    },
    svgIcon: {
      color: palette.textColor
    },
    table: {
      backgroundColor: palette.canvasColor
    },
    tableFooter: {
      borderColor: palette.borderColor,
      textColor: palette.accent3Color
    },
    tableHeader: {
      borderColor: palette.borderColor
    },
    tableHeaderColumn: {
      textColor: palette.accent3Color,
      height: 56,
      spacing: 24
    },
    tableRow: {
      hoverColor: palette.accent2Color,
      stripeColor: (0, _colorManipulator.fade)((0, _colorManipulator.lighten)(palette.primary1Color, 0.5), 0.4),
      selectedColor: palette.borderColor,
      textColor: palette.textColor,
      borderColor: palette.borderColor,
      height: 48
    },
    tableRowColumn: {
      height: 48,
      spacing: 24
    },
    tabs: {
      backgroundColor: palette.primary1Color,
      textColor: (0, _colorManipulator.fade)(palette.alternateTextColor, 0.7),
      selectedTextColor: palette.alternateTextColor
    },
    textField: {
      textColor: palette.textColor,
      hintColor: palette.disabledColor,
      floatingLabelColor: palette.disabledColor,
      disabledTextColor: palette.disabledColor,
      errorColor: _colors.red500,
      focusColor: palette.primary1Color,
      backgroundColor: 'transparent',
      borderColor: palette.borderColor
    },
    timePicker: {
      color: palette.alternateTextColor,
      textColor: palette.alternateTextColor,
      accentColor: palette.primary1Color,
      clockColor: palette.textColor,
      clockCircleColor: palette.clockCircleColor,
      headerColor: palette.pickerHeaderColor || palette.primary1Color,
      selectColor: palette.primary2Color,
      selectTextColor: palette.alternateTextColor
    },
    toggle: {
      thumbOnColor: palette.primary1Color,
      thumbOffColor: palette.accent2Color,
      thumbDisabledColor: palette.borderColor,
      thumbRequiredColor: palette.primary1Color,
      trackOnColor: (0, _colorManipulator.fade)(palette.primary1Color, 0.5),
      trackOffColor: palette.primary3Color,
      trackDisabledColor: palette.primary3Color,
      labelColor: palette.textColor,
      labelDisabledColor: palette.disabledColor,
      trackRequiredColor: (0, _colorManipulator.fade)(palette.primary1Color, 0.5)
    },
    toolbar: {
      color: (0, _colorManipulator.fade)(palette.textColor, 0.54),
      hoverColor: (0, _colorManipulator.fade)(palette.textColor, 0.87),
      backgroundColor: (0, _colorManipulator.darken)(palette.accent2Color, 0.05),
      height: 56,
      titleFontSize: 20,
      iconColor: (0, _colorManipulator.fade)(palette.textColor, 0.4),
      separatorColor: (0, _colorManipulator.fade)(palette.textColor, 0.175),
      menuHoverColor: (0, _colorManipulator.fade)(palette.textColor, 0.1)
    },
    tooltip: {
      color: _colors.white,
      rippleBackgroundColor: _colors.grey700
    }
  }, muiTheme, {
    baseTheme: baseTheme, // To provide backward compatibility.
    rawTheme: baseTheme });

  var transformers = [_autoprefixer2.default, _rtl2.default, _callOnce2.default].map(function (t) {
    return t(muiTheme);
  }).filter(function (t) {
    return t;
  });

  muiTheme.prepareStyles = _compose2.default.apply(undefined, transformers);

  return muiTheme;
}

/***/ }),
/* 391 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  iconSize: 24,

  desktopGutter: 24,
  desktopGutterMore: 32,
  desktopGutterLess: 16,
  desktopGutterMini: 8,
  desktopKeylineIncrement: 64,
  desktopDropDownMenuItemHeight: 32,
  desktopDropDownMenuFontSize: 15,
  desktopDrawerMenuItemHeight: 48,
  desktopSubheaderHeight: 48,
  desktopToolbarHeight: 56
};

/***/ }),
/* 392 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _colors = __webpack_require__(117);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Typography = function Typography() {
  (0, _classCallCheck3.default)(this, Typography);

  // text colors
  this.textFullBlack = _colors.fullBlack;
  this.textDarkBlack = _colors.darkBlack;
  this.textLightBlack = _colors.lightBlack;
  this.textMinBlack = _colors.minBlack;
  this.textFullWhite = _colors.fullWhite;
  this.textDarkWhite = _colors.darkWhite;
  this.textLightWhite = _colors.lightWhite;

  // font weight
  this.fontWeightLight = 300;
  this.fontWeightNormal = 400;
  this.fontWeightMedium = 500;

  this.fontStyleButtonFontSize = 14;
};

exports.default = new Typography();

/***/ }),
/* 393 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  menu: 1000,
  appBar: 1100,
  drawerOverlay: 1200,
  drawer: 1300,
  dialogOverlay: 1400,
  dialog: 1500,
  layer: 2000,
  popover: 2100,
  snackbar: 2900,
  tooltip: 3000
};

/***/ }),
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(19);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(16);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ActionCheckCircle = function ActionCheckCircle(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' })
  );
};
ActionCheckCircle = (0, _pure2.default)(ActionCheckCircle);
ActionCheckCircle.displayName = 'ActionCheckCircle';
ActionCheckCircle.muiName = 'SvgIcon';

exports.default = ActionCheckCircle;

/***/ }),
/* 395 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(19);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(16);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HardwareKeyboardArrowDown = function HardwareKeyboardArrowDown(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z' })
  );
};
HardwareKeyboardArrowDown = (0, _pure2.default)(HardwareKeyboardArrowDown);
HardwareKeyboardArrowDown.displayName = 'HardwareKeyboardArrowDown';
HardwareKeyboardArrowDown.muiName = 'SvgIcon';

exports.default = HardwareKeyboardArrowDown;

/***/ }),
/* 396 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(19);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(16);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HardwareKeyboardArrowUp = function HardwareKeyboardArrowUp(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z' })
  );
};
HardwareKeyboardArrowUp = (0, _pure2.default)(HardwareKeyboardArrowUp);
HardwareKeyboardArrowUp.displayName = 'HardwareKeyboardArrowUp';
HardwareKeyboardArrowUp.muiName = 'SvgIcon';

exports.default = HardwareKeyboardArrowUp;

/***/ }),
/* 397 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(19);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(16);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigationArrowDropDown = function NavigationArrowDropDown(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M7 10l5 5 5-5z' })
  );
};
NavigationArrowDropDown = (0, _pure2.default)(NavigationArrowDropDown);
NavigationArrowDropDown.displayName = 'NavigationArrowDropDown';
NavigationArrowDropDown.muiName = 'SvgIcon';

exports.default = NavigationArrowDropDown;

/***/ }),
/* 398 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(19);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(16);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigationCancel = function NavigationCancel(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z' })
  );
};
NavigationCancel = (0, _pure2.default)(NavigationCancel);
NavigationCancel.displayName = 'NavigationCancel';
NavigationCancel.muiName = 'SvgIcon';

exports.default = NavigationCancel;

/***/ }),
/* 399 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(19);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(16);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigationCheck = function NavigationCheck(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z' })
  );
};
NavigationCheck = (0, _pure2.default)(NavigationCheck);
NavigationCheck.displayName = 'NavigationCheck';
NavigationCheck.muiName = 'SvgIcon';

exports.default = NavigationCheck;

/***/ }),
/* 400 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(19);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(16);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigationChevronLeft = function NavigationChevronLeft(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z' })
  );
};
NavigationChevronLeft = (0, _pure2.default)(NavigationChevronLeft);
NavigationChevronLeft.displayName = 'NavigationChevronLeft';
NavigationChevronLeft.muiName = 'SvgIcon';

exports.default = NavigationChevronLeft;

/***/ }),
/* 401 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(19);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(16);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigationChevronRight = function NavigationChevronRight(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z' })
  );
};
NavigationChevronRight = (0, _pure2.default)(NavigationChevronRight);
NavigationChevronRight.displayName = 'NavigationChevronRight';
NavigationChevronRight.muiName = 'SvgIcon';

exports.default = NavigationChevronRight;

/***/ }),
/* 402 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(19);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(16);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigationExpandLess = function NavigationExpandLess(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z' })
  );
};
NavigationExpandLess = (0, _pure2.default)(NavigationExpandLess);
NavigationExpandLess.displayName = 'NavigationExpandLess';
NavigationExpandLess.muiName = 'SvgIcon';

exports.default = NavigationExpandLess;

/***/ }),
/* 403 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(19);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(16);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigationExpandMore = function NavigationExpandMore(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z' })
  );
};
NavigationExpandMore = (0, _pure2.default)(NavigationExpandMore);
NavigationExpandMore.displayName = 'NavigationExpandMore';
NavigationExpandMore.muiName = 'SvgIcon';

exports.default = NavigationExpandMore;

/***/ }),
/* 404 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(19);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(16);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigationMenu = function NavigationMenu(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' })
  );
};
NavigationMenu = (0, _pure2.default)(NavigationMenu);
NavigationMenu.displayName = 'NavigationMenu';
NavigationMenu.muiName = 'SvgIcon';

exports.default = NavigationMenu;

/***/ }),
/* 405 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(19);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(16);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ToggleCheckBoxOutlineBlank = function ToggleCheckBoxOutlineBlank(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z' })
  );
};
ToggleCheckBoxOutlineBlank = (0, _pure2.default)(ToggleCheckBoxOutlineBlank);
ToggleCheckBoxOutlineBlank.displayName = 'ToggleCheckBoxOutlineBlank';
ToggleCheckBoxOutlineBlank.muiName = 'SvgIcon';

exports.default = ToggleCheckBoxOutlineBlank;

/***/ }),
/* 406 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(19);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(16);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ToggleCheckBox = function ToggleCheckBox(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' })
  );
};
ToggleCheckBox = (0, _pure2.default)(ToggleCheckBox);
ToggleCheckBox.displayName = 'ToggleCheckBox';
ToggleCheckBox.muiName = 'SvgIcon';

exports.default = ToggleCheckBox;

/***/ }),
/* 407 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(19);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(16);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ToggleRadioButtonChecked = function ToggleRadioButtonChecked(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z' })
  );
};
ToggleRadioButtonChecked = (0, _pure2.default)(ToggleRadioButtonChecked);
ToggleRadioButtonChecked.displayName = 'ToggleRadioButtonChecked';
ToggleRadioButtonChecked.muiName = 'SvgIcon';

exports.default = ToggleRadioButtonChecked;

/***/ }),
/* 408 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(19);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(16);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ToggleRadioButtonUnchecked = function ToggleRadioButtonUnchecked(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z' })
  );
};
ToggleRadioButtonUnchecked = (0, _pure2.default)(ToggleRadioButtonUnchecked);
ToggleRadioButtonUnchecked.displayName = 'ToggleRadioButtonUnchecked';
ToggleRadioButtonUnchecked.muiName = 'SvgIcon';

exports.default = ToggleRadioButtonUnchecked;

/***/ }),
/* 409 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (muiTheme) {
  var isClient = typeof navigator !== 'undefined';
  var userAgent = muiTheme.userAgent;

  if (userAgent === undefined && isClient) {
    userAgent = navigator.userAgent;
  }

  if (userAgent === undefined && !hasWarnedAboutUserAgent) {
    (0, _warning2.default)(false, 'Material-UI: userAgent should be supplied in the muiTheme context\n      for server-side rendering.');

    hasWarnedAboutUserAgent = true;
  }

  var prefixAll = (0, _createPrefixer2.default)(_autoprefixerStatic2.default);

  if (userAgent === false) {
    // Disabled autoprefixer
    return null;
  } else if (userAgent === 'all' || userAgent === undefined) {
    // Prefix for all user agent
    return function (style) {
      var isFlex = ['flex', 'inline-flex'].indexOf(style.display) !== -1;
      var stylePrefixed = prefixAll(style);

      if (isFlex) {
        var display = stylePrefixed.display;
        if (isClient) {
          // We can't apply this join with react-dom:
          // #https://github.com/facebook/react/issues/6467
          stylePrefixed.display = display[display.length - 1];
        } else {
          stylePrefixed.display = display.join('; display: ');
        }
      }

      return stylePrefixed;
    };
  } else {
    var Prefixer = (0, _createPrefixer4.default)(_autoprefixerDynamic2.default, prefixAll);
    var prefixer = new Prefixer({
      userAgent: userAgent
    });

    return function (style) {
      return prefixer.prefix(style);
    };
  }
};

var _createPrefixer = __webpack_require__(218);

var _createPrefixer2 = _interopRequireDefault(_createPrefixer);

var _createPrefixer3 = __webpack_require__(212);

var _createPrefixer4 = _interopRequireDefault(_createPrefixer3);

var _autoprefixerDynamic = __webpack_require__(410);

var _autoprefixerDynamic2 = _interopRequireDefault(_autoprefixerDynamic);

var _autoprefixerStatic = __webpack_require__(411);

var _autoprefixerStatic2 = _interopRequireDefault(_autoprefixerStatic);

var _warning = __webpack_require__(17);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hasWarnedAboutUserAgent = false;

/***/ }),
/* 410 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _calc = __webpack_require__(485);

var _calc2 = _interopRequireDefault(_calc);

var _flex = __webpack_require__(213);

var _flex2 = _interopRequireDefault(_flex);

var _flexboxIE = __webpack_require__(489);

var _flexboxIE2 = _interopRequireDefault(_flexboxIE);

var _flexboxOld = __webpack_require__(214);

var _flexboxOld2 = _interopRequireDefault(_flexboxOld);

var _gradient = __webpack_require__(215);

var _gradient2 = _interopRequireDefault(_gradient);

var _sizing = __webpack_require__(216);

var _sizing2 = _interopRequireDefault(_sizing);

var _transition = __webpack_require__(217);

var _transition2 = _interopRequireDefault(_transition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  plugins: [_calc2.default, _flex2.default, _flexboxIE2.default, _flexboxOld2.default, _gradient2.default, _sizing2.default, _transition2.default],
  prefixMap: { "chrome": { "transform": 35, "transformOrigin": 35, "transformOriginX": 35, "transformOriginY": 35, "backfaceVisibility": 35, "perspective": 35, "perspectiveOrigin": 35, "transformStyle": 35, "transformOriginZ": 35, "animation": 42, "animationDelay": 42, "animationDirection": 42, "animationFillMode": 42, "animationDuration": 42, "animationIterationCount": 42, "animationName": 42, "animationPlayState": 42, "animationTimingFunction": 42, "appearance": 60, "userSelect": 53, "fontKerning": 32, "textEmphasisPosition": 60, "textEmphasis": 60, "textEmphasisStyle": 60, "textEmphasisColor": 60, "boxDecorationBreak": 60, "clipPath": 54, "maskImage": 60, "maskMode": 60, "maskRepeat": 60, "maskPosition": 60, "maskClip": 60, "maskOrigin": 60, "maskSize": 60, "maskComposite": 60, "mask": 60, "maskBorderSource": 60, "maskBorderMode": 60, "maskBorderSlice": 60, "maskBorderWidth": 60, "maskBorderOutset": 60, "maskBorderRepeat": 60, "maskBorder": 60, "maskType": 60, "textDecorationStyle": 56, "textDecorationSkip": 56, "textDecorationLine": 56, "textDecorationColor": 56, "filter": 52, "fontFeatureSettings": 47, "breakAfter": 49, "breakBefore": 49, "breakInside": 49, "columnCount": 49, "columnFill": 49, "columnGap": 49, "columnRule": 49, "columnRuleColor": 49, "columnRuleStyle": 49, "columnRuleWidth": 49, "columns": 49, "columnSpan": 49, "columnWidth": 49 }, "safari": { "flex": 8, "flexBasis": 8, "flexDirection": 8, "flexGrow": 8, "flexFlow": 8, "flexShrink": 8, "flexWrap": 8, "alignContent": 8, "alignItems": 8, "alignSelf": 8, "justifyContent": 8, "order": 8, "transition": 6, "transitionDelay": 6, "transitionDuration": 6, "transitionProperty": 6, "transitionTimingFunction": 6, "transform": 8, "transformOrigin": 8, "transformOriginX": 8, "transformOriginY": 8, "backfaceVisibility": 8, "perspective": 8, "perspectiveOrigin": 8, "transformStyle": 8, "transformOriginZ": 8, "animation": 8, "animationDelay": 8, "animationDirection": 8, "animationFillMode": 8, "animationDuration": 8, "animationIterationCount": 8, "animationName": 8, "animationPlayState": 8, "animationTimingFunction": 8, "appearance": 10.1, "userSelect": 10.1, "backdropFilter": 10.1, "fontKerning": 9, "scrollSnapType": 10, "scrollSnapPointsX": 10, "scrollSnapPointsY": 10, "scrollSnapDestination": 10, "scrollSnapCoordinate": 10, "textEmphasisPosition": 7, "textEmphasis": 7, "textEmphasisStyle": 7, "textEmphasisColor": 7, "boxDecorationBreak": 10.1, "clipPath": 10.1, "maskImage": 10.1, "maskMode": 10.1, "maskRepeat": 10.1, "maskPosition": 10.1, "maskClip": 10.1, "maskOrigin": 10.1, "maskSize": 10.1, "maskComposite": 10.1, "mask": 10.1, "maskBorderSource": 10.1, "maskBorderMode": 10.1, "maskBorderSlice": 10.1, "maskBorderWidth": 10.1, "maskBorderOutset": 10.1, "maskBorderRepeat": 10.1, "maskBorder": 10.1, "maskType": 10.1, "textDecorationStyle": 10.1, "textDecorationSkip": 10.1, "textDecorationLine": 10.1, "textDecorationColor": 10.1, "shapeImageThreshold": 10, "shapeImageMargin": 10, "shapeImageOutside": 10, "filter": 9, "hyphens": 10.1, "flowInto": 10.1, "flowFrom": 10.1, "breakBefore": 8, "breakAfter": 8, "breakInside": 8, "regionFragment": 10.1, "columnCount": 8, "columnFill": 8, "columnGap": 8, "columnRule": 8, "columnRuleColor": 8, "columnRuleStyle": 8, "columnRuleWidth": 8, "columns": 8, "columnSpan": 8, "columnWidth": 8 }, "firefox": { "appearance": 55, "userSelect": 55, "boxSizing": 28, "textAlignLast": 48, "textDecorationStyle": 35, "textDecorationSkip": 35, "textDecorationLine": 35, "textDecorationColor": 35, "tabSize": 55, "hyphens": 42, "fontFeatureSettings": 33, "breakAfter": 51, "breakBefore": 51, "breakInside": 51, "columnCount": 51, "columnFill": 51, "columnGap": 51, "columnRule": 51, "columnRuleColor": 51, "columnRuleStyle": 51, "columnRuleWidth": 51, "columns": 51, "columnSpan": 51, "columnWidth": 51 }, "opera": { "flex": 16, "flexBasis": 16, "flexDirection": 16, "flexGrow": 16, "flexFlow": 16, "flexShrink": 16, "flexWrap": 16, "alignContent": 16, "alignItems": 16, "alignSelf": 16, "justifyContent": 16, "order": 16, "transform": 22, "transformOrigin": 22, "transformOriginX": 22, "transformOriginY": 22, "backfaceVisibility": 22, "perspective": 22, "perspectiveOrigin": 22, "transformStyle": 22, "transformOriginZ": 22, "animation": 29, "animationDelay": 29, "animationDirection": 29, "animationFillMode": 29, "animationDuration": 29, "animationIterationCount": 29, "animationName": 29, "animationPlayState": 29, "animationTimingFunction": 29, "appearance": 45, "userSelect": 40, "fontKerning": 19, "textEmphasisPosition": 45, "textEmphasis": 45, "textEmphasisStyle": 45, "textEmphasisColor": 45, "boxDecorationBreak": 45, "clipPath": 41, "maskImage": 45, "maskMode": 45, "maskRepeat": 45, "maskPosition": 45, "maskClip": 45, "maskOrigin": 45, "maskSize": 45, "maskComposite": 45, "mask": 45, "maskBorderSource": 45, "maskBorderMode": 45, "maskBorderSlice": 45, "maskBorderWidth": 45, "maskBorderOutset": 45, "maskBorderRepeat": 45, "maskBorder": 45, "maskType": 45, "textDecorationStyle": 43, "textDecorationSkip": 43, "textDecorationLine": 43, "textDecorationColor": 43, "filter": 39, "fontFeatureSettings": 34, "breakAfter": 36, "breakBefore": 36, "breakInside": 36, "columnCount": 36, "columnFill": 36, "columnGap": 36, "columnRule": 36, "columnRuleColor": 36, "columnRuleStyle": 36, "columnRuleWidth": 36, "columns": 36, "columnSpan": 36, "columnWidth": 36 }, "ie": { "flex": 10, "flexDirection": 10, "flexFlow": 10, "flexWrap": 10, "transform": 9, "transformOrigin": 9, "transformOriginX": 9, "transformOriginY": 9, "userSelect": 11, "wrapFlow": 11, "wrapThrough": 11, "wrapMargin": 11, "scrollSnapType": 11, "scrollSnapPointsX": 11, "scrollSnapPointsY": 11, "scrollSnapDestination": 11, "scrollSnapCoordinate": 11, "touchAction": 10, "hyphens": 11, "flowInto": 11, "flowFrom": 11, "breakBefore": 11, "breakAfter": 11, "breakInside": 11, "regionFragment": 11, "gridTemplateColumns": 11, "gridTemplateRows": 11, "gridTemplateAreas": 11, "gridTemplate": 11, "gridAutoColumns": 11, "gridAutoRows": 11, "gridAutoFlow": 11, "grid": 11, "gridRowStart": 11, "gridColumnStart": 11, "gridRowEnd": 11, "gridRow": 11, "gridColumn": 11, "gridColumnEnd": 11, "gridColumnGap": 11, "gridRowGap": 11, "gridArea": 11, "gridGap": 11, "textSizeAdjust": 11 }, "edge": { "userSelect": 15, "wrapFlow": 15, "wrapThrough": 15, "wrapMargin": 15, "scrollSnapType": 15, "scrollSnapPointsX": 15, "scrollSnapPointsY": 15, "scrollSnapDestination": 15, "scrollSnapCoordinate": 15, "hyphens": 15, "flowInto": 15, "flowFrom": 15, "breakBefore": 15, "breakAfter": 15, "breakInside": 15, "regionFragment": 15, "gridTemplateColumns": 15, "gridTemplateRows": 15, "gridTemplateAreas": 15, "gridTemplate": 15, "gridAutoColumns": 15, "gridAutoRows": 15, "gridAutoFlow": 15, "grid": 15, "gridRowStart": 15, "gridColumnStart": 15, "gridRowEnd": 15, "gridRow": 15, "gridColumn": 15, "gridColumnEnd": 15, "gridColumnGap": 15, "gridRowGap": 15, "gridArea": 15, "gridGap": 15 }, "ios_saf": { "flex": 8.1, "flexBasis": 8.1, "flexDirection": 8.1, "flexGrow": 8.1, "flexFlow": 8.1, "flexShrink": 8.1, "flexWrap": 8.1, "alignContent": 8.1, "alignItems": 8.1, "alignSelf": 8.1, "justifyContent": 8.1, "order": 8.1, "transition": 6, "transitionDelay": 6, "transitionDuration": 6, "transitionProperty": 6, "transitionTimingFunction": 6, "transform": 8.1, "transformOrigin": 8.1, "transformOriginX": 8.1, "transformOriginY": 8.1, "backfaceVisibility": 8.1, "perspective": 8.1, "perspectiveOrigin": 8.1, "transformStyle": 8.1, "transformOriginZ": 8.1, "animation": 8.1, "animationDelay": 8.1, "animationDirection": 8.1, "animationFillMode": 8.1, "animationDuration": 8.1, "animationIterationCount": 8.1, "animationName": 8.1, "animationPlayState": 8.1, "animationTimingFunction": 8.1, "appearance": 10, "userSelect": 10, "backdropFilter": 10, "fontKerning": 10, "scrollSnapType": 10, "scrollSnapPointsX": 10, "scrollSnapPointsY": 10, "scrollSnapDestination": 10, "scrollSnapCoordinate": 10, "boxDecorationBreak": 10, "clipPath": 10, "maskImage": 10, "maskMode": 10, "maskRepeat": 10, "maskPosition": 10, "maskClip": 10, "maskOrigin": 10, "maskSize": 10, "maskComposite": 10, "mask": 10, "maskBorderSource": 10, "maskBorderMode": 10, "maskBorderSlice": 10, "maskBorderWidth": 10, "maskBorderOutset": 10, "maskBorderRepeat": 10, "maskBorder": 10, "maskType": 10, "textSizeAdjust": 10, "textDecorationStyle": 10, "textDecorationSkip": 10, "textDecorationLine": 10, "textDecorationColor": 10, "shapeImageThreshold": 10, "shapeImageMargin": 10, "shapeImageOutside": 10, "filter": 9, "hyphens": 10, "flowInto": 10, "flowFrom": 10, "breakBefore": 8.1, "breakAfter": 8.1, "breakInside": 8.1, "regionFragment": 10, "columnCount": 8.1, "columnFill": 8.1, "columnGap": 8.1, "columnRule": 8.1, "columnRuleColor": 8.1, "columnRuleStyle": 8.1, "columnRuleWidth": 8.1, "columns": 8.1, "columnSpan": 8.1, "columnWidth": 8.1 }, "android": { "borderImage": 4.2, "borderImageOutset": 4.2, "borderImageRepeat": 4.2, "borderImageSlice": 4.2, "borderImageSource": 4.2, "borderImageWidth": 4.2, "flex": 4.2, "flexBasis": 4.2, "flexDirection": 4.2, "flexGrow": 4.2, "flexFlow": 4.2, "flexShrink": 4.2, "flexWrap": 4.2, "alignContent": 4.2, "alignItems": 4.2, "alignSelf": 4.2, "justifyContent": 4.2, "order": 4.2, "transition": 4.2, "transitionDelay": 4.2, "transitionDuration": 4.2, "transitionProperty": 4.2, "transitionTimingFunction": 4.2, "transform": 4.4, "transformOrigin": 4.4, "transformOriginX": 4.4, "transformOriginY": 4.4, "backfaceVisibility": 4.4, "perspective": 4.4, "perspectiveOrigin": 4.4, "transformStyle": 4.4, "transformOriginZ": 4.4, "animation": 4.4, "animationDelay": 4.4, "animationDirection": 4.4, "animationFillMode": 4.4, "animationDuration": 4.4, "animationIterationCount": 4.4, "animationName": 4.4, "animationPlayState": 4.4, "animationTimingFunction": 4.4, "appearance": 53, "userSelect": 53, "fontKerning": 4.4, "textEmphasisPosition": 53, "textEmphasis": 53, "textEmphasisStyle": 53, "textEmphasisColor": 53, "boxDecorationBreak": 53, "clipPath": 53, "maskImage": 53, "maskMode": 53, "maskRepeat": 53, "maskPosition": 53, "maskClip": 53, "maskOrigin": 53, "maskSize": 53, "maskComposite": 53, "mask": 53, "maskBorderSource": 53, "maskBorderMode": 53, "maskBorderSlice": 53, "maskBorderWidth": 53, "maskBorderOutset": 53, "maskBorderRepeat": 53, "maskBorder": 53, "maskType": 53, "filter": 4.4, "fontFeatureSettings": 4.4, "breakAfter": 53, "breakBefore": 53, "breakInside": 53, "columnCount": 53, "columnFill": 53, "columnGap": 53, "columnRule": 53, "columnRuleColor": 53, "columnRuleStyle": 53, "columnRuleWidth": 53, "columns": 53, "columnSpan": 53, "columnWidth": 53 }, "and_chr": { "appearance": 56, "textEmphasisPosition": 56, "textEmphasis": 56, "textEmphasisStyle": 56, "textEmphasisColor": 56, "boxDecorationBreak": 56, "maskImage": 56, "maskMode": 56, "maskRepeat": 56, "maskPosition": 56, "maskClip": 56, "maskOrigin": 56, "maskSize": 56, "maskComposite": 56, "mask": 56, "maskBorderSource": 56, "maskBorderMode": 56, "maskBorderSlice": 56, "maskBorderWidth": 56, "maskBorderOutset": 56, "maskBorderRepeat": 56, "maskBorder": 56, "maskType": 56, "textDecorationStyle": 56, "textDecorationSkip": 56, "textDecorationLine": 56, "textDecorationColor": 56 }, "and_uc": { "flex": 11, "flexBasis": 11, "flexDirection": 11, "flexGrow": 11, "flexFlow": 11, "flexShrink": 11, "flexWrap": 11, "alignContent": 11, "alignItems": 11, "alignSelf": 11, "justifyContent": 11, "order": 11, "transition": 11, "transitionDelay": 11, "transitionDuration": 11, "transitionProperty": 11, "transitionTimingFunction": 11, "transform": 11, "transformOrigin": 11, "transformOriginX": 11, "transformOriginY": 11, "backfaceVisibility": 11, "perspective": 11, "perspectiveOrigin": 11, "transformStyle": 11, "transformOriginZ": 11, "animation": 11, "animationDelay": 11, "animationDirection": 11, "animationFillMode": 11, "animationDuration": 11, "animationIterationCount": 11, "animationName": 11, "animationPlayState": 11, "animationTimingFunction": 11, "appearance": 11, "userSelect": 11, "fontKerning": 11, "textEmphasisPosition": 11, "textEmphasis": 11, "textEmphasisStyle": 11, "textEmphasisColor": 11, "maskImage": 11, "maskMode": 11, "maskRepeat": 11, "maskPosition": 11, "maskClip": 11, "maskOrigin": 11, "maskSize": 11, "maskComposite": 11, "mask": 11, "maskBorderSource": 11, "maskBorderMode": 11, "maskBorderSlice": 11, "maskBorderWidth": 11, "maskBorderOutset": 11, "maskBorderRepeat": 11, "maskBorder": 11, "maskType": 11, "textSizeAdjust": 11, "filter": 11, "hyphens": 11, "flowInto": 11, "flowFrom": 11, "breakBefore": 11, "breakAfter": 11, "breakInside": 11, "regionFragment": 11, "fontFeatureSettings": 11, "columnCount": 11, "columnFill": 11, "columnGap": 11, "columnRule": 11, "columnRuleColor": 11, "columnRuleStyle": 11, "columnRuleWidth": 11, "columns": 11, "columnSpan": 11, "columnWidth": 11 }, "op_mini": {} }
}; /* eslint-disable */

/***/ }),
/* 411 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _calc = __webpack_require__(493);

var _calc2 = _interopRequireDefault(_calc);

var _flex = __webpack_require__(219);

var _flex2 = _interopRequireDefault(_flex);

var _flexboxIE = __webpack_require__(497);

var _flexboxIE2 = _interopRequireDefault(_flexboxIE);

var _flexboxOld = __webpack_require__(220);

var _flexboxOld2 = _interopRequireDefault(_flexboxOld);

var _gradient = __webpack_require__(221);

var _gradient2 = _interopRequireDefault(_gradient);

var _sizing = __webpack_require__(222);

var _sizing2 = _interopRequireDefault(_sizing);

var _transition = __webpack_require__(223);

var _transition2 = _interopRequireDefault(_transition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  plugins: [_calc2.default, _flex2.default, _flexboxIE2.default, _flexboxOld2.default, _gradient2.default, _sizing2.default, _transition2.default],
  prefixMap: { "transform": ["Webkit", "ms"], "transformOrigin": ["Webkit", "ms"], "transformOriginX": ["Webkit", "ms"], "transformOriginY": ["Webkit", "ms"], "backfaceVisibility": ["Webkit"], "perspective": ["Webkit"], "perspectiveOrigin": ["Webkit"], "transformStyle": ["Webkit"], "transformOriginZ": ["Webkit"], "animation": ["Webkit"], "animationDelay": ["Webkit"], "animationDirection": ["Webkit"], "animationFillMode": ["Webkit"], "animationDuration": ["Webkit"], "animationIterationCount": ["Webkit"], "animationName": ["Webkit"], "animationPlayState": ["Webkit"], "animationTimingFunction": ["Webkit"], "appearance": ["Webkit", "Moz"], "userSelect": ["Webkit", "Moz", "ms"], "fontKerning": ["Webkit"], "textEmphasisPosition": ["Webkit"], "textEmphasis": ["Webkit"], "textEmphasisStyle": ["Webkit"], "textEmphasisColor": ["Webkit"], "boxDecorationBreak": ["Webkit"], "clipPath": ["Webkit"], "maskImage": ["Webkit"], "maskMode": ["Webkit"], "maskRepeat": ["Webkit"], "maskPosition": ["Webkit"], "maskClip": ["Webkit"], "maskOrigin": ["Webkit"], "maskSize": ["Webkit"], "maskComposite": ["Webkit"], "mask": ["Webkit"], "maskBorderSource": ["Webkit"], "maskBorderMode": ["Webkit"], "maskBorderSlice": ["Webkit"], "maskBorderWidth": ["Webkit"], "maskBorderOutset": ["Webkit"], "maskBorderRepeat": ["Webkit"], "maskBorder": ["Webkit"], "maskType": ["Webkit"], "textDecorationStyle": ["Webkit", "Moz"], "textDecorationSkip": ["Webkit", "Moz"], "textDecorationLine": ["Webkit", "Moz"], "textDecorationColor": ["Webkit", "Moz"], "filter": ["Webkit"], "fontFeatureSettings": ["Webkit", "Moz"], "breakAfter": ["Webkit", "Moz", "ms"], "breakBefore": ["Webkit", "Moz", "ms"], "breakInside": ["Webkit", "Moz", "ms"], "columnCount": ["Webkit", "Moz"], "columnFill": ["Webkit", "Moz"], "columnGap": ["Webkit", "Moz"], "columnRule": ["Webkit", "Moz"], "columnRuleColor": ["Webkit", "Moz"], "columnRuleStyle": ["Webkit", "Moz"], "columnRuleWidth": ["Webkit", "Moz"], "columns": ["Webkit", "Moz"], "columnSpan": ["Webkit", "Moz"], "columnWidth": ["Webkit", "Moz"], "flex": ["Webkit", "ms"], "flexBasis": ["Webkit"], "flexDirection": ["Webkit", "ms"], "flexGrow": ["Webkit"], "flexFlow": ["Webkit", "ms"], "flexShrink": ["Webkit"], "flexWrap": ["Webkit", "ms"], "alignContent": ["Webkit"], "alignItems": ["Webkit"], "alignSelf": ["Webkit"], "justifyContent": ["Webkit"], "order": ["Webkit"], "transitionDelay": ["Webkit"], "transitionDuration": ["Webkit"], "transitionProperty": ["Webkit"], "transitionTimingFunction": ["Webkit"], "backdropFilter": ["Webkit"], "scrollSnapType": ["Webkit", "ms"], "scrollSnapPointsX": ["Webkit", "ms"], "scrollSnapPointsY": ["Webkit", "ms"], "scrollSnapDestination": ["Webkit", "ms"], "scrollSnapCoordinate": ["Webkit", "ms"], "shapeImageThreshold": ["Webkit"], "shapeImageMargin": ["Webkit"], "shapeImageOutside": ["Webkit"], "hyphens": ["Webkit", "Moz", "ms"], "flowInto": ["Webkit", "ms"], "flowFrom": ["Webkit", "ms"], "regionFragment": ["Webkit", "ms"], "boxSizing": ["Moz"], "textAlignLast": ["Moz"], "tabSize": ["Moz"], "wrapFlow": ["ms"], "wrapThrough": ["ms"], "wrapMargin": ["ms"], "touchAction": ["ms"], "gridTemplateColumns": ["ms"], "gridTemplateRows": ["ms"], "gridTemplateAreas": ["ms"], "gridTemplate": ["ms"], "gridAutoColumns": ["ms"], "gridAutoRows": ["ms"], "gridAutoFlow": ["ms"], "grid": ["ms"], "gridRowStart": ["ms"], "gridColumnStart": ["ms"], "gridRowEnd": ["ms"], "gridRow": ["ms"], "gridColumn": ["ms"], "gridColumnEnd": ["ms"], "gridColumnGap": ["ms"], "gridRowGap": ["ms"], "gridArea": ["ms"], "gridGap": ["ms"], "textSizeAdjust": ["Webkit", "ms"], "borderImage": ["Webkit"], "borderImageOutset": ["Webkit"], "borderImageRepeat": ["Webkit"], "borderImageSlice": ["Webkit"], "borderImageSource": ["Webkit"], "borderImageWidth": ["Webkit"] }
}; /* eslint-disable */

/***/ }),
/* 412 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = callOnce;

var _warning = __webpack_require__(17);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CALLED_ONCE = 'muiPrepared';

function callOnce() {
  if (process.env.NODE_ENV !== 'production') {
    return function (style) {
      if (style[CALLED_ONCE]) {
        (0, _warning2.default)(false, 'Material-UI: You cannot call prepareStyles() on the same style object more than once.');
      }
      style[CALLED_ONCE] = true;
      return style;
    };
  }
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 413 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(118);

var _keys2 = _interopRequireDefault(_keys);

exports.default = rtl;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reTranslate = /((^|\s)translate(3d|X)?\()(\-?[\d]+)/;
var reSkew = /((^|\s)skew(x|y)?\()\s*(\-?[\d]+)(deg|rad|grad)(,\s*(\-?[\d]+)(deg|rad|grad))?/;

/**
 * This function ensures that `style` supports both ltr and rtl directions by
 * checking `styleConstants` in `muiTheme` and replacing attribute keys if
 * necessary.
 */
function rtl(muiTheme) {
  if (muiTheme.isRtl) {
    return function (style) {
      if (style.directionInvariant === true) {
        return style;
      }

      var flippedAttributes = {
        // Keys and their replacements.
        right: 'left',
        left: 'right',
        marginRight: 'marginLeft',
        marginLeft: 'marginRight',
        paddingRight: 'paddingLeft',
        paddingLeft: 'paddingRight',
        borderRight: 'borderLeft',
        borderLeft: 'borderRight'
      };

      var newStyle = {};

      (0, _keys2.default)(style).forEach(function (attribute) {
        var value = style[attribute];
        var key = attribute;

        if (flippedAttributes.hasOwnProperty(attribute)) {
          key = flippedAttributes[attribute];
        }

        switch (attribute) {
          case 'float':
          case 'textAlign':
            if (value === 'right') {
              value = 'left';
            } else if (value === 'left') {
              value = 'right';
            }
            break;

          case 'direction':
            if (value === 'ltr') {
              value = 'rtl';
            } else if (value === 'rtl') {
              value = 'ltr';
            }
            break;

          case 'transform':
            if (!value) break;
            var matches = void 0;
            if (matches = value.match(reTranslate)) {
              value = value.replace(matches[0], matches[1] + -parseFloat(matches[4]));
            }
            if (matches = value.match(reSkew)) {
              value = value.replace(matches[0], matches[1] + -parseFloat(matches[4]) + matches[5] + matches[6] ? ', ' + (-parseFloat(matches[7]) + matches[8]) : '');
            }
            break;

          case 'transformOrigin':
            if (!value) break;
            if (value.indexOf('right') > -1) {
              value = value.replace('right', 'left');
            } else if (value.indexOf('left') > -1) {
              value = value.replace('left', 'right');
            }
            break;
        }

        newStyle[key] = value;
      });

      return newStyle;
    };
  }
}

/***/ }),
/* 414 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LARGE = exports.MEDIUM = exports.SMALL = undefined;

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = withWidth;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactEventListener = __webpack_require__(26);

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SMALL = exports.SMALL = 1;
var MEDIUM = exports.MEDIUM = 2;
var LARGE = exports.LARGE = 3;

function withWidth() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$largeWidth = options.largeWidth,
      largeWidth = _options$largeWidth === undefined ? 992 : _options$largeWidth,
      _options$mediumWidth = options.mediumWidth,
      mediumWidth = _options$mediumWidth === undefined ? 768 : _options$mediumWidth,
      _options$resizeInterv = options.resizeInterval,
      resizeInterval = _options$resizeInterv === undefined ? 166 : _options$resizeInterv;


  return function (MyComponent) {
    return function (_Component) {
      (0, _inherits3.default)(WithWidth, _Component);

      function WithWidth() {
        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, WithWidth);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
          width: null
        }, _this.handleResize = function () {
          clearTimeout(_this.deferTimer);
          _this.deferTimer = setTimeout(function () {
            _this.updateWidth();
          }, resizeInterval);
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
      }

      WithWidth.prototype.componentDidMount = function componentDidMount() {
        this.updateWidth();
      };

      WithWidth.prototype.componentWillUnmount = function componentWillUnmount() {
        clearTimeout(this.deferTimer);
      };

      WithWidth.prototype.updateWidth = function updateWidth() {
        var innerWidth = window.innerWidth;
        var width = void 0;

        if (innerWidth >= largeWidth) {
          width = LARGE;
        } else if (innerWidth >= mediumWidth) {
          width = MEDIUM;
        } else {
          // innerWidth < 768
          width = SMALL;
        }

        if (width !== this.state.width) {
          this.setState({
            width: width
          });
        }
      };

      WithWidth.prototype.render = function render() {
        var width = this.state.width;

        /**
         * When rendering the component on the server,
         * we have no idea about the screen width.
         * In order to prevent blinks and help the reconciliation
         * we are not rendering the component.
         *
         * A better alternative would be to send client hints.
         * But the browser support of this API is low:
         * http://caniuse.com/#search=client%20hint
         */
        if (width === null) {
          return null;
        }

        return _react2.default.createElement(
          _reactEventListener2.default,
          { target: 'window', onResize: this.handleResize },
          _react2.default.createElement(MyComponent, (0, _extends3.default)({
            width: width
          }, this.props))
        );
      };

      return WithWidth;
    }(_react.Component);
  };
}

/***/ }),
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */,
/* 484 */,
/* 485 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = calc;

var _getPrefixedValue = __webpack_require__(28);

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function calc(property, value, style, _ref) {
  var browserName = _ref.browserName,
      browserVersion = _ref.browserVersion,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

  if (typeof value === 'string' && value.indexOf('calc(') > -1 && (browserName === 'firefox' && browserVersion < 15 || browserName === 'chrome' && browserVersion < 25 || browserName === 'safari' && browserVersion < 6.1 || browserName === 'ios_saf' && browserVersion < 7)) {
    return (0, _getPrefixedValue2.default)(value.replace(/calc\(/g, cssPrefix + 'calc('), value, keepUnprefixed);
  }
}
module.exports = exports['default'];

/***/ }),
/* 486 */,
/* 487 */,
/* 488 */,
/* 489 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxIE;

var _getPrefixedValue = __webpack_require__(28);

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var alternativeValues = {
  'space-around': 'distribute',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end',
  flex: 'flexbox',
  'inline-flex': 'inline-flexbox'
};

var alternativeProps = {
  alignContent: 'msFlexLinePack',
  alignSelf: 'msFlexItemAlign',
  alignItems: 'msFlexAlign',
  justifyContent: 'msFlexPack',
  order: 'msFlexOrder',
  flexGrow: 'msFlexPositive',
  flexShrink: 'msFlexNegative',
  flexBasis: 'msPreferredSize'
};

function flexboxIE(property, value, style, _ref) {
  var browserName = _ref.browserName,
      browserVersion = _ref.browserVersion,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed,
      requiresPrefix = _ref.requiresPrefix;

  if ((alternativeProps.hasOwnProperty(property) || property === 'display' && typeof value === 'string' && value.indexOf('flex') > -1) && (browserName === 'ie_mob' || browserName === 'ie') && browserVersion === 10) {
    delete requiresPrefix[property];

    if (!keepUnprefixed && !Array.isArray(style[property])) {
      delete style[property];
    }
    if (property === 'display' && alternativeValues.hasOwnProperty(value)) {
      return (0, _getPrefixedValue2.default)(cssPrefix + alternativeValues[value], value, keepUnprefixed);
    }
    if (alternativeProps.hasOwnProperty(property)) {
      style[alternativeProps[property]] = alternativeValues[value] || value;
    }
  }
}
module.exports = exports['default'];

/***/ }),
/* 490 */,
/* 491 */,
/* 492 */,
/* 493 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = calc;

var _isPrefixedValue = __webpack_require__(57);

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixes = ['-webkit-', '-moz-', ''];
function calc(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('calc(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/calc\(/g, prefix + 'calc(');
    });
  }
}
module.exports = exports['default'];

/***/ }),
/* 494 */,
/* 495 */,
/* 496 */,
/* 497 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxIE;
var alternativeValues = {
  'space-around': 'distribute',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end'
};
var alternativeProps = {
  alignContent: 'msFlexLinePack',
  alignSelf: 'msFlexItemAlign',
  alignItems: 'msFlexAlign',
  justifyContent: 'msFlexPack',
  order: 'msFlexOrder',
  flexGrow: 'msFlexPositive',
  flexShrink: 'msFlexNegative',
  flexBasis: 'msPreferredSize'
};

function flexboxIE(property, value, style) {
  if (alternativeProps.hasOwnProperty(property)) {
    style[alternativeProps[property]] = alternativeValues[value] || value;
  }
}
module.exports = exports['default'];

/***/ }),
/* 498 */,
/* 499 */,
/* 500 */,
/* 501 */,
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */,
/* 523 */,
/* 524 */,
/* 525 */,
/* 526 */,
/* 527 */,
/* 528 */,
/* 529 */,
/* 530 */,
/* 531 */,
/* 532 */,
/* 533 */,
/* 534 */,
/* 535 */,
/* 536 */,
/* 537 */,
/* 538 */,
/* 539 */,
/* 540 */,
/* 541 */,
/* 542 */,
/* 543 */,
/* 544 */,
/* 545 */,
/* 546 */,
/* 547 */,
/* 548 */,
/* 549 */,
/* 550 */,
/* 551 */,
/* 552 */,
/* 553 */,
/* 554 */,
/* 555 */,
/* 556 */,
/* 557 */,
/* 558 */,
/* 559 */,
/* 560 */,
/* 561 */,
/* 562 */,
/* 563 */,
/* 564 */,
/* 565 */,
/* 566 */,
/* 567 */,
/* 568 */,
/* 569 */,
/* 570 */,
/* 571 */,
/* 572 */,
/* 573 */,
/* 574 */,
/* 575 */,
/* 576 */,
/* 577 */,
/* 578 */,
/* 579 */,
/* 580 */,
/* 581 */,
/* 582 */,
/* 583 */,
/* 584 */,
/* 585 */,
/* 586 */,
/* 587 */,
/* 588 */,
/* 589 */,
/* 590 */,
/* 591 */,
/* 592 */,
/* 593 */,
/* 594 */,
/* 595 */,
/* 596 */,
/* 597 */,
/* 598 */,
/* 599 */,
/* 600 */,
/* 601 */,
/* 602 */,
/* 603 */,
/* 604 */,
/* 605 */,
/* 606 */,
/* 607 */,
/* 608 */,
/* 609 */,
/* 610 */,
/* 611 */,
/* 612 */,
/* 613 */,
/* 614 */,
/* 615 */,
/* 616 */,
/* 617 */,
/* 618 */,
/* 619 */,
/* 620 */,
/* 621 */,
/* 622 */,
/* 623 */,
/* 624 */,
/* 625 */,
/* 626 */,
/* 627 */,
/* 628 */,
/* 629 */,
/* 630 */,
/* 631 */,
/* 632 */,
/* 633 */,
/* 634 */,
/* 635 */,
/* 636 */,
/* 637 */,
/* 638 */,
/* 639 */,
/* 640 */,
/* 641 */,
/* 642 */,
/* 643 */,
/* 644 */,
/* 645 */,
/* 646 */,
/* 647 */,
/* 648 */,
/* 649 */,
/* 650 */,
/* 651 */,
/* 652 */,
/* 653 */,
/* 654 */,
/* 655 */,
/* 656 */,
/* 657 */,
/* 658 */,
/* 659 */,
/* 660 */,
/* 661 */,
/* 662 */,
/* 663 */,
/* 664 */,
/* 665 */,
/* 666 */,
/* 667 */,
/* 668 */,
/* 669 */,
/* 670 */,
/* 671 */,
/* 672 */,
/* 673 */,
/* 674 */,
/* 675 */,
/* 676 */,
/* 677 */,
/* 678 */,
/* 679 */,
/* 680 */,
/* 681 */,
/* 682 */,
/* 683 */,
/* 684 */,
/* 685 */,
/* 686 */,
/* 687 */,
/* 688 */,
/* 689 */,
/* 690 */,
/* 691 */,
/* 692 */,
/* 693 */,
/* 694 */,
/* 695 */,
/* 696 */,
/* 697 */,
/* 698 */,
/* 699 */,
/* 700 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = compose;
function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}

/***/ }),
/* 701 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createEagerElementUtil = __webpack_require__(707);

var _createEagerElementUtil2 = _interopRequireDefault(_createEagerElementUtil);

var _isReferentiallyTransparentFunctionComponent = __webpack_require__(704);

var _isReferentiallyTransparentFunctionComponent2 = _interopRequireDefault(_isReferentiallyTransparentFunctionComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createFactory = function createFactory(type) {
  var isReferentiallyTransparent = (0, _isReferentiallyTransparentFunctionComponent2.default)(type);
  return function (p, c) {
    return (0, _createEagerElementUtil2.default)(false, isReferentiallyTransparent, type, p, c);
  };
};

exports.default = createFactory;

/***/ }),
/* 702 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var getDisplayName = function getDisplayName(Component) {
  if (typeof Component === 'string') {
    return Component;
  }

  if (!Component) {
    return undefined;
  }

  return Component.displayName || Component.name || 'Component';
};

exports.default = getDisplayName;

/***/ }),
/* 703 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isClassComponent = function isClassComponent(Component) {
  return Boolean(Component && Component.prototype && _typeof(Component.prototype.isReactComponent) === 'object');
};

exports.default = isClassComponent;

/***/ }),
/* 704 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _isClassComponent = __webpack_require__(703);

var _isClassComponent2 = _interopRequireDefault(_isClassComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isReferentiallyTransparentFunctionComponent = function isReferentiallyTransparentFunctionComponent(Component) {
  return Boolean(typeof Component === 'function' && !(0, _isClassComponent2.default)(Component) && !Component.defaultProps && !Component.contextTypes && (process.env.NODE_ENV === 'production' || !Component.propTypes));
};

exports.default = isReferentiallyTransparentFunctionComponent;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 705 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var setStatic = function setStatic(key, value) {
  return function (BaseComponent) {
    /* eslint-disable no-param-reassign */
    BaseComponent[key] = value;
    /* eslint-enable no-param-reassign */
    return BaseComponent;
  };
};

exports.default = setStatic;

/***/ }),
/* 706 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _react = __webpack_require__(0);

var _setDisplayName = __webpack_require__(280);

var _setDisplayName2 = _interopRequireDefault(_setDisplayName);

var _wrapDisplayName = __webpack_require__(281);

var _wrapDisplayName2 = _interopRequireDefault(_wrapDisplayName);

var _createEagerFactory = __webpack_require__(701);

var _createEagerFactory2 = _interopRequireDefault(_createEagerFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var shouldUpdate = function shouldUpdate(test) {
  return function (BaseComponent) {
    var factory = (0, _createEagerFactory2.default)(BaseComponent);

    var ShouldUpdate = function (_Component) {
      _inherits(ShouldUpdate, _Component);

      function ShouldUpdate() {
        _classCallCheck(this, ShouldUpdate);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
      }

      ShouldUpdate.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
        return test(this.props, nextProps);
      };

      ShouldUpdate.prototype.render = function render() {
        return factory(this.props);
      };

      return ShouldUpdate;
    }(_react.Component);

    if (process.env.NODE_ENV !== 'production') {
      return (0, _setDisplayName2.default)((0, _wrapDisplayName2.default)(BaseComponent, 'shouldUpdate'))(ShouldUpdate);
    }
    return ShouldUpdate;
  };
};

exports.default = shouldUpdate;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 707 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createEagerElementUtil = function createEagerElementUtil(hasKey, isReferentiallyTransparent, type, props, children) {
  if (!hasKey && isReferentiallyTransparent) {
    if (children) {
      return type(_extends({}, props, { children: children }));
    }
    return type(props);
  }

  var Component = type;

  if (children) {
    return _react2.default.createElement(
      Component,
      props,
      children
    );
  }

  return _react2.default.createElement(Component, props);
};

exports.default = createEagerElementUtil;

/***/ })
],[379]);
//# sourceMappingURL=bundle.e02812e71e0872064ed7.js.map