'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _chai = require('chai');

var _StepConnector = require('./StepConnector');

var _getMuiTheme = require('../styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<StepConnector />', function () {
  var muiTheme = (0, _getMuiTheme2.default)();
  var themedShallow = function themedShallow(node) {
    var context = { muiTheme: muiTheme, stepper: { orientation: 'horizontal' } };
    return (0, _enzyme.shallow)(node, { context: context });
  };

  describe('rendering', function () {
    var wrapper = themedShallow(_react2.default.createElement(_StepConnector.PlainStepConnector, null));

    it('renders a div containing a span', function () {
      _chai.assert.ok(wrapper.is('div'));
      var line = wrapper.find('span');
      _chai.assert.ok(line.length);
    });

    it('has a top border when horizontal', function () {
      var line = wrapper.find('span');
      _chai.assert.strictEqual(line.prop('style').borderTopWidth, 1);
      _chai.assert.notOk(line.prop('style').borderLeftWidth);
    });

    it('has a left border when vertical', function () {
      wrapper.setContext({ muiTheme: muiTheme, stepper: { orientation: 'vertical' } });
      var line = wrapper.find('span');
      _chai.assert.strictEqual(line.prop('style').borderLeftWidth, 1);
      _chai.assert.notOk(line.prop('style').borderTopWidth);
    });
  });
}); /* eslint-env mocha */