'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _chai = require('chai');

var _getMuiTheme = require('../styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _dateUtils = require('./dateUtils');

var _DateDisplay = require('./DateDisplay');

var _DateDisplay2 = _interopRequireDefault(_DateDisplay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */

describe('<DateDisplay />', function () {
  var muiTheme = (0, _getMuiTheme2.default)();
  var shallowWithContext = function shallowWithContext(node) {
    return (0, _enzyme.shallow)(node, { context: { muiTheme: muiTheme } });
  };

  describe('i18n', function () {
    it('should format the date correctly', function () {
      var date = new Date(1448967059892); // Tue, 01 Dec 2015 10:50:59 GMT

      var wrapper = shallowWithContext(_react2.default.createElement(_DateDisplay2.default, {
        selectedDate: date,
        DateTimeFormat: _dateUtils.dateTimeFormat,
        locale: 'en-US'
      }));

      _chai.assert.strictEqual(wrapper.find('div').at(1).text(), '2015');
      _chai.assert.strictEqual(wrapper.find('div').at(2).text(), 'Tue, Dec 1');
    });
  });
});