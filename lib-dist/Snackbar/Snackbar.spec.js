'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _chai = require('chai');

var _Snackbar = require('./Snackbar');

var _Snackbar2 = _interopRequireDefault(_Snackbar);

var _SnackbarBody = require('./SnackbarBody');

var _SnackbarBody2 = _interopRequireDefault(_SnackbarBody);

var _getMuiTheme = require('../styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('<Snackbar />', function () {
  var muiTheme = (0, _getMuiTheme2.default)();
  var shallowWithContext = function shallowWithContext(node) {
    return (0, _enzyme.shallow)(node, { context: { muiTheme: muiTheme } });
  };

  describe('prop: open', function () {
    it('should be hidden when open is false', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(_Snackbar2.default, { open: false, message: 'Message' }));

      _chai.assert.strictEqual(wrapper.find('div').at(0).node.props.style.visibility, 'hidden', 'The element should be hidden.');
    });

    it('should be hidden when open is true', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(_Snackbar2.default, { open: true, message: 'Message' }));

      _chai.assert.strictEqual(wrapper.find('div').at(0).node.props.style.visibility, 'visible', 'The element should be hidden.');
    });
  });

  it('should show the next message after an update', function (done) {
    var wrapper = shallowWithContext(_react2.default.createElement(_Snackbar2.default, { open: true, message: 'First message' }));

    wrapper.setProps({
      message: 'Second message'
    });
    _chai.assert.strictEqual(wrapper.state('message'), 'First message');

    setTimeout(function () {
      _chai.assert.strictEqual(wrapper.state('message'), 'Second message', 'Should take into account the next message');
      done();
    }, 500);
  });

  it('should show the latest message of consecutive updates', function (done) {
    var wrapper = shallowWithContext(_react2.default.createElement(_Snackbar2.default, { open: false, message: 'First message' }));

    wrapper.setProps({
      open: true,
      message: 'Second message'
    });
    _chai.assert.strictEqual(wrapper.state('message'), 'Second message');
    wrapper.setProps({
      open: true,
      message: 'Third message'
    });
    _chai.assert.strictEqual(wrapper.state('message'), 'Second message');

    setTimeout(function () {
      _chai.assert.strictEqual(wrapper.state('message'), 'Third message', 'Should take into account the latest message');
      done();
    }, 500);
  });

  describe('prop: contentStyle', function () {
    it('should apply the style on the right element', function () {
      var contentStyle = {};
      var wrapper = shallowWithContext(_react2.default.createElement(_Snackbar2.default, { open: false, message: '', contentStyle: contentStyle }));

      _chai.assert.strictEqual(wrapper.find(_SnackbarBody2.default).props().contentStyle, contentStyle);
    });
  });
});