'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _chai = require('chai');

var _TabTemplate = require('./TabTemplate');

var _TabTemplate2 = _interopRequireDefault(_TabTemplate);

var _getMuiTheme = require('../styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<TabTemplate />', function () {
  var muiTheme = (0, _getMuiTheme2.default)();
  var shallowWithContext = function shallowWithContext(node) {
    return (0, _enzyme.shallow)(node, { context: { muiTheme: muiTheme } });
  };

  it('should have different tab template style', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(_TabTemplate2.default, {
      style: { backgroundColor: 'red' },
      selected: true
    }));

    _chai.assert.strictEqual(wrapper.props().style.backgroundColor, 'red', 'should have backgroundColor equal to red');
  });
}); /* eslint-env mocha */