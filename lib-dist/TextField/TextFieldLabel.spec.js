'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _chai = require('chai');

var _TextFieldLabel = require('./TextFieldLabel');

var _TextFieldLabel2 = _interopRequireDefault(_TextFieldLabel);

var _getMuiTheme = require('../styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<TextFieldLabel>', function () {
  it('uses focus styles', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_TextFieldLabel2.default, {
      muiTheme: (0, _getMuiTheme2.default)(),
      shrink: false,
      style: { color: 'regularcolor' },
      shrinkStyle: { color: 'focuscolor' }
    }));

    (0, _chai.expect)(wrapper.type()).to.equal('label');
    (0, _chai.expect)(wrapper.prop('style').color).to.equal('regularcolor');

    wrapper.setProps({ shrink: true });
    (0, _chai.expect)(wrapper.prop('style').color).to.equal('focuscolor');
  });
}); /* eslint-env mocha */