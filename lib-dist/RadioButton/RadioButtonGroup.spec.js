'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _chai = require('chai');

var _enzyme = require('enzyme');

var _RadioButtonGroup = require('./RadioButtonGroup');

var _RadioButtonGroup2 = _interopRequireDefault(_RadioButtonGroup);

var _getMuiTheme = require('../styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<RadioButtonGroup />', function () {
  var muiTheme = (0, _getMuiTheme2.default)();
  var shallowWithContext = function shallowWithContext(node) {
    return (0, _enzyme.shallow)(node, { context: { muiTheme: muiTheme } });
  };

  describe('initial state', function () {
    it('should accept string valueSelected prop and set to state', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(_RadioButtonGroup2.default, { name: 'testGroup', valueSelected: 'value' }));
      _chai.assert.strictEqual(wrapper.state('selected'), 'value');
    });
    it('should accept truthy valueSelected prop and set to state', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(_RadioButtonGroup2.default, { name: 'testGroup', valueSelected: true }));
      _chai.assert.strictEqual(wrapper.state('selected'), true);
    });
    it('should accept falsy valueSelected prop and set to state', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(_RadioButtonGroup2.default, { name: 'testGroup', valueSelected: false }));
      _chai.assert.strictEqual(wrapper.state('selected'), false);
    });
    it('should accept string defaultSelected prop and set to state', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(_RadioButtonGroup2.default, { name: 'testGroup', defaultSelected: 'value' }));
      _chai.assert.strictEqual(wrapper.state('selected'), 'value');
    });
    it('should accept truthy defaultSelected prop and set to state', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(_RadioButtonGroup2.default, { name: 'testGroup', defaultSelected: true }));
      _chai.assert.strictEqual(wrapper.state('selected'), true);
    });
    it('should accept falsy defaultSelected prop and set to state', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(_RadioButtonGroup2.default, { name: 'testGroup', defaultSelected: false }));
      _chai.assert.strictEqual(wrapper.state('selected'), false);
    });
  });
}); /* eslint-env mocha */