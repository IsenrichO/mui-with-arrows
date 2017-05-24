'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _chai = require('chai');

var _DatePicker = require('./DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _getMuiTheme = require('../styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _TextField = require('../TextField');

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('<DatePicker />', function () {
  var muiTheme = (0, _getMuiTheme2.default)();
  var shallowWithContext = function shallowWithContext(node) {
    return (0, _enzyme.shallow)(node, { context: { muiTheme: muiTheme } });
  };

  describe('formatDate', function () {
    it('should use the default format', function () {
      var date = new Date(1448967059892); // Tue, 01 Dec 2015 10:50:59 GMT
      var wrapper = shallowWithContext(_react2.default.createElement(_DatePicker2.default, { value: date }));

      _chai.assert.strictEqual(wrapper.find(_TextField2.default).props().value, '2015-12-01', 'should format the date to ISO 8601 (YYYY-MM-DD)');
    });
  });
});