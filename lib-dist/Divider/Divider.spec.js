'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _chai = require('chai');

var _Divider = require('./Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _getMuiTheme = require('../styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Divider />', function () {
  var muiTheme = (0, _getMuiTheme2.default)();
  var shallowWithContext = function shallowWithContext(node) {
    return (0, _enzyme.shallow)(node, { context: { muiTheme: muiTheme } });
  };

  it('renders className', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(_Divider2.default, {
      className: 'test-class-name'
    }));

    _chai.assert.ok(wrapper.is('.test-class-name'), 'should contain the className');
  });

  it('renders inset', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(_Divider2.default, {
      inset: true
    }));
    var cheerioDivider = wrapper.render().children();

    _chai.assert.strictEqual(cheerioDivider.css('margin-left'), '72px');
  });

  it('overwrite styles', function () {
    var style = {
      backgroundColor: 'red'
    };
    var wrapper = shallowWithContext(_react2.default.createElement(_Divider2.default, {
      style: style
    }));

    _chai.assert.strictEqual(wrapper.prop('style').backgroundColor, 'red', 'should have red backgroundColor');
  });
}); /* eslint-env mocha */