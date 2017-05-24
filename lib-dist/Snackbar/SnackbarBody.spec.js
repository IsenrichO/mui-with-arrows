'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _chai = require('chai');

var _SnackbarBody = require('./SnackbarBody');

var _getMuiTheme = require('../styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _withWidth = require('../utils/withWidth');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('<SnackbarBody />', function () {
  var muiTheme = (0, _getMuiTheme2.default)();
  var shallowWithContext = function shallowWithContext(node) {
    return (0, _enzyme.shallow)(node, { context: { muiTheme: muiTheme } });
  };

  describe('props: open', function () {
    it('should be hidden when open is false', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(_SnackbarBody.SnackbarBody, { open: false, message: 'Message', width: _withWidth.SMALL }));

      _chai.assert.strictEqual(wrapper.find('div').at(1).node.props.style.opacity, 0, 'The element should be hidden.');
    });

    it('should be visible when open is true', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(_SnackbarBody.SnackbarBody, { open: true, message: 'Message', width: _withWidth.SMALL }));

      _chai.assert.strictEqual(wrapper.find('div').at(1).node.props.style.opacity, 1, 'The element should be visible.');
    });
  });
});