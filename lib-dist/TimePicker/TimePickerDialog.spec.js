'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _chai = require('chai');

var _sinon = require('sinon');

var _getMuiTheme = require('../styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _TimePickerDialog = require('./TimePickerDialog');

var _TimePickerDialog2 = _interopRequireDefault(_TimePickerDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('<TimePickerDialog />', function () {
  var muiTheme = (0, _getMuiTheme2.default)();
  var shallowWithContext = function shallowWithContext(node) {
    return (0, _enzyme.shallow)(node, { context: { muiTheme: muiTheme } });
  };

  it('should not call onDismiss when user clicks on OK label', function () {
    var onDismissCallback = (0, _sinon.spy)();
    var onAcceptCallback = (0, _sinon.spy)();
    var okButtonLabel = 'CLICKME';
    var wrapper = shallowWithContext(_react2.default.createElement(_TimePickerDialog2.default, {
      onDismiss: onDismissCallback,
      onAccept: onAcceptCallback,
      okLabel: okButtonLabel
    }));
    wrapper.instance().refs = { clock: { getSelectedTime: (0, _sinon.stub)().returns(Date.now()) } };
    wrapper.instance().handleTouchTapOK();
    (0, _chai.expect)(onDismissCallback).to.have.property('callCount', 0);
    (0, _chai.expect)(onAcceptCallback).to.have.property('callCount', 1);
    (0, _chai.expect)(wrapper.state('open')).to.equal(false);
  });
});