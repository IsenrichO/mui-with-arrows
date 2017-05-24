'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _chai = require('chai');

var _getMuiTheme = require('../styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _IconMenu = require('./IconMenu');

var _IconMenu2 = _interopRequireDefault(_IconMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<IconMenu />', function () {
  var muiTheme = (0, _getMuiTheme2.default)();
  var shallowWithContext = function shallowWithContext(node) {
    return (0, _enzyme.shallow)(node, { context: { muiTheme: muiTheme } });
  };

  it('should not leak an iconStyle property', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(_IconMenu2.default, { iconButtonElement: _react2.default.createElement('div', { 'data-test': 'my-icon-button' }) }));

    _chai.assert.strictEqual(wrapper.find('[data-test="my-icon-button"]').props().hasOwnProperty('iconStyle'), false, 'should leak property on the div');
  });
}); /* eslint-env mocha */