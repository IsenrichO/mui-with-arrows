'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _chai = require('chai');

var _Step = require('./Step');

var _Step2 = _interopRequireDefault(_Step);

var _StepConnector = require('./StepConnector');

var _StepConnector2 = _interopRequireDefault(_StepConnector);

var _Stepper = require('./Stepper');

var _Stepper2 = _interopRequireDefault(_Stepper);

var _FontIcon = require('../FontIcon');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _getMuiTheme = require('../styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */

describe('<Stepper />', function () {
  var muiTheme = (0, _getMuiTheme2.default)();
  var shallowWithContext = function shallowWithContext(node) {
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return (0, _enzyme.shallow)(node, {
      context: (0, _extends3.default)({
        muiTheme: muiTheme
      }, context)
    });
  };

  it('merges user styles into the root node', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(_Stepper2.default, {
      style: { backgroundColor: 'purple' }
    }));

    _chai.assert.strictEqual(wrapper.props().style.backgroundColor, 'purple');
  });

  describe('rendering children', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(
      _Stepper2.default,
      null,
      _react2.default.createElement('div', null),
      _react2.default.createElement('div', null),
      _react2.default.createElement('div', null)
    ));

    var children = wrapper.children();

    it('renders 3 children with connectors as separators', function () {
      _chai.assert.strictEqual(children.length, 5);
      _chai.assert.ok(wrapper.childAt(1).is('pure(StepConnector)'));
      _chai.assert.ok(wrapper.childAt(3).is('pure(StepConnector)'));
    });

    _chai.assert.ok(true);
  });

  describe('controlling child props', function () {
    it('controls children linearly based on the activeStep prop', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(
        _Stepper2.default,
        { activeStep: 0 },
        _react2.default.createElement('div', { className: 'child-0' }),
        _react2.default.createElement('div', { className: 'child-1' }),
        _react2.default.createElement('div', { className: 'child-2' })
      ));
      _chai.assert.ok(wrapper.find('.child-0').prop('active'));
      _chai.assert.notOk(wrapper.find('.child-1').prop('active'));
      _chai.assert.notOk(wrapper.find('.child-2').prop('active'));
      _chai.assert.ok(wrapper.find('.child-1').prop('disabled'));
      _chai.assert.ok(wrapper.find('.child-2').prop('disabled'));
      wrapper.setProps({ activeStep: 1 });
      _chai.assert.ok(wrapper.find('.child-0').prop('completed'));
      _chai.assert.notOk(wrapper.find('.child-0').prop('active'));
      _chai.assert.ok(wrapper.find('.child-1').prop('active'));
      _chai.assert.notOk(wrapper.find('.child-2').prop('active'));
      _chai.assert.ok(wrapper.find('.child-2').prop('disabled'));
    });

    it('controls children non-linearly based on the activeStep prop', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(
        _Stepper2.default,
        { linear: false, activeStep: 0 },
        _react2.default.createElement('div', { className: 'child-0' }),
        _react2.default.createElement('div', { className: 'child-1' }),
        _react2.default.createElement('div', { className: 'child-2' })
      ));
      _chai.assert.ok(wrapper.find('.child-0').prop('active'));
      _chai.assert.notOk(wrapper.find('.child-1').prop('active'));
      _chai.assert.notOk(wrapper.find('.child-2').prop('active'));
      wrapper.setProps({ activeStep: 1 });
      _chai.assert.notOk(wrapper.find('.child-0').prop('active'));
      _chai.assert.ok(wrapper.find('.child-1').prop('active'));
      _chai.assert.notOk(wrapper.find('.child-2').prop('active'));
      wrapper.setProps({ activeStep: 2 });
      _chai.assert.notOk(wrapper.find('.child-0').prop('active'));
      _chai.assert.notOk(wrapper.find('.child-1').prop('active'));
      _chai.assert.ok(wrapper.find('.child-2').prop('active'));
    });

    it('passes last down correctly when rendering children containing arrays', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(
        _Stepper2.default,
        { linear: false },
        _react2.default.createElement('div', null),
        [_react2.default.createElement('div', { key: 1 }), _react2.default.createElement('div', { key: 2 })]
      ));

      var steps = wrapper.children().find('div');
      _chai.assert.strictEqual(steps.at(0).props().last, undefined);
      _chai.assert.strictEqual(steps.at(1).props().last, undefined);
      _chai.assert.strictEqual(steps.at(2).props().last, true);
    });
  });

  describe('step connector', function () {
    it('should have a default step connector', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(
        _Stepper2.default,
        null,
        _react2.default.createElement(_Step2.default, null),
        _react2.default.createElement(_Step2.default, null)
      ));

      _chai.assert.strictEqual(wrapper.find(_StepConnector2.default).length, 1, 'should contain a <StepConnector /> child');
    });

    it('should allow the developer to specify a custom step connector', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(
        _Stepper2.default,
        {
          connector: _react2.default.createElement(
            _FontIcon2.default,
            { className: 'material-icons' },
            'arrow-forward'
          )
        },
        _react2.default.createElement(_Step2.default, null),
        _react2.default.createElement(_Step2.default, null)
      ));

      _chai.assert.strictEqual(wrapper.find(_FontIcon2.default).length, 1, 'should contain a <FontIcon /> child');
      _chai.assert.strictEqual(wrapper.find(_StepConnector2.default).length, 0, 'should not contain a <StepConnector /> child');
    });

    it('should allow the step connector to be removed', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(
        _Stepper2.default,
        { connector: null },
        _react2.default.createElement(_Step2.default, null),
        _react2.default.createElement(_Step2.default, null)
      ));

      _chai.assert.strictEqual(wrapper.find(_StepConnector2.default).length, 0, 'should not contain a <StepConnector /> child');
    });
  });
});