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

var _EnhancedButton = require('../internal/EnhancedButton');

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