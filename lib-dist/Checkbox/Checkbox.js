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

var _EnhancedSwitch = require('../internal/EnhancedSwitch');

var _EnhancedSwitch2 = _interopRequireDefault(_EnhancedSwitch);

var _transitions = require('../styles/transitions');

var _transitions2 = _interopRequireDefault(_transitions);

var _checkBoxOutlineBlank = require('../svg-icons/toggle/check-box-outline-blank');

var _checkBoxOutlineBlank2 = _interopRequireDefault(_checkBoxOutlineBlank);

var _checkBox = require('../svg-icons/toggle/check-box');

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