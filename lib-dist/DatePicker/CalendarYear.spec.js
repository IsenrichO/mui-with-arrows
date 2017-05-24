'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _chai = require('chai');

var _getMuiTheme = require('../styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _dateUtils = require('./dateUtils');

var _CalendarYear = require('./CalendarYear');

var _CalendarYear2 = _interopRequireDefault(_CalendarYear);

var _YearButton = require('./YearButton');

var _YearButton2 = _interopRequireDefault(_YearButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<CalendarYear />', function () {
  var muiTheme = (0, _getMuiTheme2.default)();
  var shallowWithContext = function shallowWithContext(node) {
    return (0, _enzyme.shallow)(node, { context: { muiTheme: muiTheme } });
  };

  describe('i18n', function () {
    it('should format the year correctly', function () {
      var date = new Date(1448967059892); // Tue, 01 Dec 2015 10:50:59 GMT
      var minDate = (0, _dateUtils.addYears)(date, -100);
      var maxDate = (0, _dateUtils.addYears)(date, 100);

      var wrapper = shallowWithContext(_react2.default.createElement(_CalendarYear2.default, {
        selectedDate: date,
        DateTimeFormat: _dateUtils.dateTimeFormat,
        minDate: minDate,
        maxDate: maxDate,
        locale: 'en-US',
        utils: _dateUtils.defaultUtils
      }));

      _chai.assert.strictEqual(wrapper.find(_YearButton2.default).length, 201);
      _chai.assert.strictEqual(wrapper.find(_YearButton2.default).at(0).props().children, '1915');
    });
  });
}); /* eslint-env mocha */