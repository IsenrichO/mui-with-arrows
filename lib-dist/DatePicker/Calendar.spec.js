'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _chai = require('chai');

var _Calendar = require('./Calendar');

var _Calendar2 = _interopRequireDefault(_Calendar);

var _DateDisplay = require('./DateDisplay');

var _DateDisplay2 = _interopRequireDefault(_DateDisplay);

var _dateUtils = require('./dateUtils');

var _getMuiTheme = require('../styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Calendar />', function () {
  var muiTheme = (0, _getMuiTheme2.default)();
  var shallowWithContext = function shallowWithContext(node) {
    return (0, _enzyme.shallow)(node, { context: { muiTheme: muiTheme } });
  };

  describe('Next Month Button', function () {
    it('should initially be disabled if the current month is the same as the month in the maxDate prop', function () {
      var initialDate = new Date(1448967059892); // Tue, 01 Dec 2015 10:50:59 GMT
      var maxDate = new Date(initialDate.toDateString());

      var wrapper = shallowWithContext(_react2.default.createElement(_Calendar2.default, {
        initialDate: initialDate,
        DateTimeFormat: _dateUtils.dateTimeFormat,
        locale: 'en-US',
        maxDate: maxDate
      }));

      _chai.assert.notOk(wrapper.find('CalendarToolbar').prop('nextMonth'));
    });

    it('should initially be disabled if the current month is after the month in the maxDate prop', function () {
      var initialDate = new Date(1448967059892); // Tue, 01 Dec 2015 10:50:59 GMT
      var maxDate = new Date(initialDate.toDateString());
      maxDate = (0, _dateUtils.addMonths)(maxDate, -1);

      var wrapper = shallowWithContext(_react2.default.createElement(_Calendar2.default, {
        initialDate: initialDate,
        DateTimeFormat: _dateUtils.dateTimeFormat,
        locale: 'en-US',
        maxDate: maxDate
      }));

      _chai.assert.notOk(wrapper.find('CalendarToolbar').prop('nextMonth'));
    });

    it('should initially enable the next month button if the current month is before the maxDate prop', function () {
      var initialDate = new Date(1448967059892); // Tue, 01 Dec 2015 10:50:59 GMT
      var maxDate = new Date(initialDate.toDateString());
      maxDate = (0, _dateUtils.addMonths)(maxDate, 1);

      var wrapper = shallowWithContext(_react2.default.createElement(_Calendar2.default, {
        initialDate: initialDate,
        DateTimeFormat: _dateUtils.dateTimeFormat,
        locale: 'en-US',
        maxDate: maxDate
      }));

      _chai.assert.ok(wrapper.find('CalendarToolbar').prop('nextMonth'));
    });

    it('should reenable the next month button when the current month is before the maxDate prop', function () {
      var initialDate = new Date(1448967059892); // Tue, 01 Dec 2015 10:50:59 GMT
      var maxDate = new Date(initialDate.toDateString());

      var wrapper = shallowWithContext(_react2.default.createElement(_Calendar2.default, {
        initialDate: initialDate,
        DateTimeFormat: _dateUtils.dateTimeFormat,
        locale: 'en-US',
        maxDate: maxDate
      }));

      wrapper.instance().handleMonthChange(-1);
      wrapper.update();

      _chai.assert.ok(wrapper.find('CalendarToolbar').prop('nextMonth'));
    });

    it('should redisable the next month button when the current month is the same as the maxDate prop', function () {
      var initialDate = new Date(1448967059892); // Tue, 01 Dec 2015 10:50:59 GMT
      var maxDate = new Date(initialDate.toDateString());
      maxDate = (0, _dateUtils.addMonths)(maxDate, 1);

      var wrapper = shallowWithContext(_react2.default.createElement(_Calendar2.default, {
        initialDate: initialDate,
        DateTimeFormat: _dateUtils.dateTimeFormat,
        locale: 'en-US',
        maxDate: maxDate
      }));

      wrapper.instance().handleMonthChange(1);
      wrapper.update();

      _chai.assert.notOk(wrapper.find('CalendarToolbar').prop('nextMonth'));
    });
  });

  describe('Previous Month Button', function () {
    it('should initially disable the previous month button if the current month\n      is the same as the minDate month prop', function () {
      var initialDate = new Date(1448967059892); // Tue, 01 Dec 2015 10:50:59 GMT
      var minDate = new Date(initialDate.toDateString());

      var wrapper = shallowWithContext(_react2.default.createElement(_Calendar2.default, {
        initialDate: initialDate,
        DateTimeFormat: _dateUtils.dateTimeFormat,
        locale: 'en-US',
        minDate: minDate
      }));

      _chai.assert.notOk(wrapper.find('CalendarToolbar').prop('prevMonth'));
    });

    it('should initially disable the previous month button if the current month\n      is before the minDate month prop', function () {
      var initialDate = new Date(1448967059892); // Tue, 01 Dec 2015 10:50:59 GMT
      var minDate = new Date(initialDate.toDateString());
      minDate = (0, _dateUtils.addMonths)(initialDate, 1);

      var wrapper = shallowWithContext(_react2.default.createElement(_Calendar2.default, {
        initialDate: initialDate,
        DateTimeFormat: _dateUtils.dateTimeFormat,
        locale: 'en-US',
        minDate: minDate
      }));

      _chai.assert.notOk(wrapper.find('CalendarToolbar').prop('prevMonth'));
    });

    it('should initially enable the previous month button if the current month is after the minDate month prop', function () {
      var initialDate = new Date(1448967059892); // Tue, 01 Dec 2015 10:50:59 GMT
      var minDate = new Date(initialDate.toDateString());
      minDate = (0, _dateUtils.addMonths)(initialDate, -1);

      var wrapper = shallowWithContext(_react2.default.createElement(_Calendar2.default, {
        initialDate: initialDate,
        DateTimeFormat: _dateUtils.dateTimeFormat,
        locale: 'en-US',
        minDate: minDate
      }));

      _chai.assert.ok(wrapper.find('CalendarToolbar').prop('prevMonth'));
    });

    it('should enable the previous month button when the current month is after the minDate month prop', function () {
      var initialDate = new Date(1448967059892); // Tue, 01 Dec 2015 10:50:59 GMT
      var minDate = new Date(initialDate.toDateString());

      var wrapper = shallowWithContext(_react2.default.createElement(_Calendar2.default, {
        initialDate: initialDate,
        DateTimeFormat: _dateUtils.dateTimeFormat,
        locale: 'en-US',
        minDate: minDate
      }));

      wrapper.instance().handleMonthChange(1);
      wrapper.update();

      _chai.assert.ok(wrapper.find('CalendarToolbar').prop('prevMonth'));
    });

    it('should disable the previous month button when the current month is the same as the minDate month prop', function () {
      var initialDate = new Date(1448967059892); // Tue, 01 Dec 2015 10:50:59 GMT
      var minDate = new Date(initialDate.toDateString());
      minDate = (0, _dateUtils.addMonths)(minDate, -1);

      var wrapper = shallowWithContext(_react2.default.createElement(_Calendar2.default, {
        initialDate: initialDate,
        DateTimeFormat: _dateUtils.dateTimeFormat,
        locale: 'en-US',
        minDate: minDate
      }));

      wrapper.instance().handleMonthChange(-1);
      wrapper.update();

      _chai.assert.notOk(wrapper.find('CalendarToolbar').prop('prevMonth'));
    });
  });

  describe('Date Display', function () {
    it('should be visible by default', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(_Calendar2.default, {
        DateTimeFormat: _dateUtils.dateTimeFormat,
        locale: 'en-US',
        mode: 'landscape'
      }));

      _chai.assert.strictEqual(wrapper.find(_DateDisplay2.default).length, 1, 'should show date display');
      _chai.assert.strictEqual(wrapper.props().style.width, 479, 'should allow space for date display');
    });

    it('should be hidden when hideCalendarDate is set', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(_Calendar2.default, {
        DateTimeFormat: _dateUtils.dateTimeFormat,
        locale: 'en-US',
        mode: 'landscape',
        hideCalendarDate: true
      }));

      _chai.assert.strictEqual(wrapper.find(_DateDisplay2.default).length, 0, 'should hide date display');
      _chai.assert.strictEqual(wrapper.props().style.width, 310, 'should not allow space for date display');
    });
  });
}); /* eslint-env mocha */