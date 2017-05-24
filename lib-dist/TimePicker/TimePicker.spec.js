'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _chai = require('chai');

var _TimePicker = require('./TimePicker');

var _TimePicker2 = _interopRequireDefault(_TimePicker);

var _timeUtils = require('./timeUtils');

var _getMuiTheme = require('../styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _TextField = require('../TextField');

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<TimePicker />', function () {
  var muiTheme = (0, _getMuiTheme2.default)();
  var shallowWithContext = function shallowWithContext(node) {
    return (0, _enzyme.shallow)(node, { context: { muiTheme: muiTheme } });
  };

  it('has to give value prop precedence over defaultTime', function () {
    var initialTime = new Date(1448967059892); // Tue, 01 Dec 2015 10:50:59 GMT
    var valueTime = (0, _timeUtils.addHours)(initialTime, 2);

    var wrapper = shallowWithContext(_react2.default.createElement(_TimePicker2.default, {
      value: valueTime,
      format: 'ampm',
      locale: 'en-US',
      initialTime: initialTime
    }));

    _chai.assert.strictEqual(wrapper.find(_TextField2.default).props().value, (0, _timeUtils.formatTime)(valueTime));
  });

  it('takes defaulTime prop to set first value when value prop is missing', function () {
    var initialTime = new Date(1448967059892); // Tue, 01 Dec 2015 10:50:59 GMT

    var wrapper = shallowWithContext(_react2.default.createElement(_TimePicker2.default, { format: 'ampm', locale: 'en-US', defaultTime: initialTime }));

    _chai.assert.strictEqual(wrapper.find(_TextField2.default).props().value, (0, _timeUtils.formatTime)(initialTime));
  });

  it('shows value prop if defaultTime is missing', function () {
    var initialTime = null;
    var valueTime = new Date(1448967059892); // Tue, 01 Dec 2015 10:50:59 GM

    var wrapper = shallowWithContext(_react2.default.createElement(_TimePicker2.default, {
      value: valueTime,
      format: 'ampm',
      locale: 'en-US',
      defaultTime: initialTime
    }));

    _chai.assert.strictEqual(wrapper.find(_TextField2.default).props().value, (0, _timeUtils.formatTime)(valueTime));
  });
}); /* eslint-env mocha */