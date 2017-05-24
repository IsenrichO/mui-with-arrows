'use strict';

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _chai = require('chai');

var _StepLabel = require('./StepLabel');

var _StepLabel2 = _interopRequireDefault(_StepLabel);

var _getMuiTheme = require('../styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<StepLabel />', function () {
  var muiTheme = (0, _getMuiTheme2.default)();
  var shallowWithContext = function shallowWithContext(node) {
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return (0, _enzyme.shallow)(node, {
      context: (0, _extends3.default)({
        muiTheme: muiTheme,
        stepper: {
          orientation: 'horizontal'
        }
      }, context)
    });
  };

  it('merges styles and other props into the root node', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(_StepLabel2.default, {
      style: { paddingRight: 200, color: 'purple', border: '1px solid tomato' },
      'data-myProp': 'hello'
    }));
    var props = wrapper.props();
    _chai.assert.strictEqual(props.style.paddingRight, 200);
    _chai.assert.strictEqual(props.style.color, 'purple');
    _chai.assert.strictEqual(props.style.border, '1px solid tomato');
    _chai.assert.strictEqual(props['data-myProp'], 'hello');
  });

  describe('label content', function () {
    it('renders the label from children', function () {
      var childWrapper = shallowWithContext(_react2.default.createElement(
        _StepLabel2.default,
        null,
        'Step One'
      ));
      _chai.assert.ok(childWrapper.contains('Step One'));
    });

    it('renders the icon from a number with the disabled color', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(
        _StepLabel2.default,
        { disabled: true, icon: 1 },
        'Step One'
      ));
      var icon = wrapper.find('SvgIcon');
      _chai.assert.strictEqual(icon.length, 1, 'should have an <SvgIcon />');
      _chai.assert.strictEqual(icon.props().color, muiTheme.stepper.inactiveIconColor, 'should pass the inactive icon color');
    });

    it('renders the custom icon', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(
        _StepLabel2.default,
        { icon: _react2.default.createElement('span', { className: 'my-icon' }) },
        'Step One'
      ));
      _chai.assert.strictEqual(wrapper.find('.my-icon').length, 1, 'should have the custom icon');
    });
  });

  describe('prop: active = false', function () {
    it('renders text with no specific font weight', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(
        _StepLabel2.default,
        { active: false },
        'Step One'
      ));
      _chai.assert.strictEqual((0, _typeof3.default)(wrapper.props().style.fontWeight), 'undefined');
    });
  });

  describe('prop: active = true', function () {
    it('renders the label text bold', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(
        _StepLabel2.default,
        { active: true },
        'Step One'
      ));
      _chai.assert.strictEqual(wrapper.props().style.fontWeight, 500);
    });

    it('renders with the standard coloring', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(
        _StepLabel2.default,
        { active: true, icon: 1 },
        'Step One'
      ));
      _chai.assert.strictEqual(wrapper.props().style.color, muiTheme.stepper.textColor, 'should have the standard text color');
      var icon = wrapper.find('SvgIcon');
      _chai.assert.strictEqual(icon.props().color, muiTheme.stepper.iconColor, 'should pass the standard icon color');
    });
  });

  describe('prop: completed = true', function () {
    it('renders the label text with no specific font weight', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(
        _StepLabel2.default,
        { completed: true },
        'Step One'
      ));
      _chai.assert.strictEqual((0, _typeof3.default)(wrapper.props().style.fontWeight), 'undefined');
    });

    it('renders a check circle with the standard coloring', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(
        _StepLabel2.default,
        { completed: true, icon: 1 },
        'Step One'
      ));
      _chai.assert.strictEqual(wrapper.props().style.color, muiTheme.stepper.textColor, 'should have the standard text color');
    });
  });

  describe('prop: iconContainerStyle', function () {
    it('merges values into the icon container node style prop', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(
        _StepLabel2.default,
        {
          iconContainerStyle: { width: 64, color: 'lime', paddingBottom: 300, border: '3px solid teal' },
          icon: 1
        },
        'Step One'
      ));
      var iconContainerStyle = wrapper.find('span').at(1).props().style;
      _chai.assert.strictEqual(iconContainerStyle.width, 64);
      _chai.assert.strictEqual(iconContainerStyle.color, 'lime');
      _chai.assert.strictEqual(iconContainerStyle.paddingBottom, 300);
      _chai.assert.strictEqual(iconContainerStyle.border, '3px solid teal');
    });
  });

  describe('prop combinations', function () {
    it('renders with active styling when active', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(
        _StepLabel2.default,
        { icon: 1, active: true },
        'Step One'
      ));
      _chai.assert.strictEqual(wrapper.props().style.color, muiTheme.stepper.textColor, 'should have the standard text color');
      var icon = wrapper.find('SvgIcon');
      _chai.assert.strictEqual(icon.props().color, muiTheme.stepper.iconColor, 'should pass the standard icon color');
    });

    it('renders with inactive styling when inactive and not complete', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(
        _StepLabel2.default,
        { icon: 1 },
        'Step One'
      ));
      _chai.assert.strictEqual(wrapper.props().style.color, muiTheme.stepper.textColor, 'should have the standard text color');
      var icon = wrapper.find('SvgIcon');
      _chai.assert.strictEqual(icon.props().color, muiTheme.stepper.inactiveIconColor, 'should pass the inactive icon color');
    });

    it('renders with disabled styling when disabled', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(
        _StepLabel2.default,
        { icon: 1, disabled: true },
        'Step One'
      ));
      _chai.assert.strictEqual(wrapper.props().style.color, muiTheme.stepper.disabledTextColor, 'should have the disabled text color');
      var icon = wrapper.find('SvgIcon');
      _chai.assert.strictEqual(icon.props().color, muiTheme.stepper.inactiveIconColor, 'should pass the inactive icon color');
    });

    it('renders with a check icon and active styling when completed', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(
        _StepLabel2.default,
        { icon: 1, completed: true },
        'Step One'
      ));
      _chai.assert.strictEqual(wrapper.props().style.color, muiTheme.stepper.textColor, 'should have the standard text color');
      var icon = wrapper.find('ActionCheckCircle');
      _chai.assert.strictEqual(icon.props().color, muiTheme.stepper.iconColor, 'should pass the standard icon color');
    });

    it('renders with a check icon and disabled when disabled and completed', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(
        _StepLabel2.default,
        { icon: 1, disabled: true, completed: true },
        'Step One'
      ));
      _chai.assert.strictEqual(wrapper.props().style.color, muiTheme.stepper.disabledTextColor, 'should have the disabled text color');
      var icon = wrapper.find('ActionCheckCircle');
      _chai.assert.strictEqual(icon.props().color, muiTheme.stepper.inactiveIconColor, 'should pass the inactive icon color');
    });
  });
}); /* eslint-env mocha */