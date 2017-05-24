'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _chai = require('chai');

var _sinon = require('sinon');

var _StepButton = require('./StepButton');

var _StepButton2 = _interopRequireDefault(_StepButton);

var _StepLabel = require('./StepLabel');

var _StepLabel2 = _interopRequireDefault(_StepLabel);

var _getMuiTheme = require('../styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<StepButton />', function () {
  var muiTheme = (0, _getMuiTheme2.default)();
  var themedShallow = function themedShallow(node) {
    var context = { muiTheme: muiTheme, stepper: { orientation: 'horizontal' } };
    return (0, _enzyme.shallow)(node, { context: context });
  };

  it('should merge user styles in', function () {
    var wrapper = themedShallow(_react2.default.createElement(
      _StepButton2.default,
      { style: { backgroundColor: 'purple' } },
      'Step One'
    ));

    _chai.assert.strictEqual(wrapper.props().style.backgroundColor, 'purple');
  });

  it('should render an EnhancedButton with a StepLabel', function () {
    var wrapper = themedShallow(_react2.default.createElement(
      _StepButton2.default,
      null,
      'Step One'
    ));
    _chai.assert.ok(wrapper.is('EnhancedButton'), 'should be an EnhancedButton');
    var stepLabel = wrapper.find(_StepLabel2.default);
    _chai.assert.strictEqual(stepLabel.length, 1, 'should have a stepLabel');
    _chai.assert.strictEqual(stepLabel.props().children, 'Step One');
  });

  it('should pass iconContainerStyle to StepLabel', function () {
    var wrapper = themedShallow(_react2.default.createElement(
      _StepButton2.default,
      {
        iconContainerStyle: { width: 50, color: 'cyan', marginTop: 200, border: '1px solid violet' },
        icon: 1
      },
      'StepOne'
    ));
    var iconContainerStyle = wrapper.find(_StepLabel2.default).props().iconContainerStyle;
    _chai.assert.strictEqual(iconContainerStyle.width, 50);
    _chai.assert.strictEqual(iconContainerStyle.color, 'cyan');
    _chai.assert.strictEqual(iconContainerStyle.marginTop, 200);
    _chai.assert.strictEqual(iconContainerStyle.border, '1px solid violet');
  });

  it('should pass props to StepLabel', function () {
    var wrapper = themedShallow(_react2.default.createElement(
      _StepButton2.default,
      {
        active: true,
        completed: true,
        disabled: true,
        label: 'Step One'
      },
      'Step One'
    ));
    var stepLabel = wrapper.find(_StepLabel2.default);
    _chai.assert.strictEqual(stepLabel.prop('active'), true, 'should be active');
    _chai.assert.strictEqual(stepLabel.prop('completed'), true, 'should be completed');
    _chai.assert.strictEqual(stepLabel.prop('disabled'), true, 'should be disabled');
  });

  it('should pass props to EnhancedButton', function () {
    var wrapper = themedShallow(_react2.default.createElement(
      _StepButton2.default,
      { disabled: true },
      'Step One'
    ));
    var stepLabel = wrapper.find('EnhancedButton');
    _chai.assert.strictEqual(stepLabel.prop('disabled'), true);
  });

  describe('event handlers', function () {
    describe('handleMouseEnter/Leave', function () {
      var handleMouseEnter = (0, _sinon.spy)();
      var handleMouseLeave = (0, _sinon.spy)();
      var wrapper = themedShallow(_react2.default.createElement(
        _StepButton2.default,
        {
          onMouseEnter: handleMouseEnter,
          onMouseLeave: handleMouseLeave
        },
        'Step One'
      ));

      it('should set the hovered state', function () {
        wrapper.simulate('mouseEnter');
        _chai.assert.strictEqual(wrapper.state('hovered'), true, 'should be hovered');
        _chai.assert.strictEqual(handleMouseEnter.callCount, 1, 'should call handleMouseEnter once');
        wrapper.simulate('mouseLeave');
        _chai.assert.strictEqual(wrapper.state('hovered'), false, 'should not be hovered');
        _chai.assert.strictEqual(handleMouseEnter.callCount, 1, 'should call handleMouseEnter once');
        _chai.assert.strictEqual(handleMouseLeave.callCount, 1, 'should call handleMouseLeave once');
      });

      it('should set the EnhancedButton backgroundColor on hover', function () {
        wrapper.setState({ hovered: false });
        _chai.assert.strictEqual(wrapper.prop('style').backgroundColor, muiTheme.stepper.backgroundColor);
        wrapper.setState({ hovered: true });
        _chai.assert.strictEqual(wrapper.prop('style').backgroundColor, muiTheme.stepper.hoverBackgroundColor);
      });
    });

    describe('handleTouchStart', function () {
      var handleTouchStart = (0, _sinon.spy)();
      var handleMouseEnter = (0, _sinon.spy)();
      var wrapper = themedShallow(_react2.default.createElement(
        _StepButton2.default,
        {
          onTouchStart: handleTouchStart,
          onMouseEnter: handleMouseEnter
        },
        'Step One'
      ));

      it('should set the touched state', function () {
        _chai.assert.strictEqual(wrapper.state('touched'), false, 'should not be touched');
        wrapper.simulate('touchStart');
        _chai.assert.strictEqual(wrapper.state('touched'), true, 'should be touched');
        _chai.assert.strictEqual(handleTouchStart.callCount, 1, 'should call handleTouchStart once');
      });

      it('should not set the hovered state with touch set', function () {
        wrapper.simulate('mouseEnter');
        _chai.assert.strictEqual(wrapper.state('hovered'), false, 'should not be hovered');
        _chai.assert.strictEqual(handleMouseEnter.callCount, 1, 'should call handleMouseEnter once');
      });
    });

    it('should bubble callbacks used internally', function () {
      var handleMouseEnter = (0, _sinon.spy)();
      var handleMouseLeave = (0, _sinon.spy)();
      var handleTouchStart = (0, _sinon.spy)();
      var wrapper = themedShallow(_react2.default.createElement(
        _StepButton2.default,
        {
          onMouseEnter: handleMouseEnter,
          onMouseLeave: handleMouseLeave,
          onTouchStart: handleTouchStart
        },
        'Step One'
      ));
      wrapper.simulate('mouseEnter');
      _chai.assert.strictEqual(handleMouseEnter.callCount, 1, 'should call handleMouseEnter once');
      wrapper.simulate('mouseLeave');
      _chai.assert.strictEqual(handleMouseEnter.callCount, 1, 'should call handleMouseEnter once');
      _chai.assert.strictEqual(handleMouseLeave.callCount, 1, 'should call handleMouseLeave once');
      wrapper.simulate('touchStart');
      _chai.assert.strictEqual(handleMouseEnter.callCount, 1, 'should call handleMouseEnter once');
      _chai.assert.strictEqual(handleMouseLeave.callCount, 1, 'should call handleMouseLeave once');
      _chai.assert.strictEqual(handleTouchStart.callCount, 1, 'should call handleTouchStart once');
      wrapper.simulate('mouseEnter');
      wrapper.simulate('touchStart');
      _chai.assert.strictEqual(handleMouseEnter.callCount, 2, 'should call handleMouseEnter twice');
      _chai.assert.strictEqual(handleMouseLeave.callCount, 1, 'should call handleMouseLeave once');
      _chai.assert.strictEqual(handleTouchStart.callCount, 2, 'should call handleTouchStart twice');
    });
  });
}); /* eslint-env mocha */