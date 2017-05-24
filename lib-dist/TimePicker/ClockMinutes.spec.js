'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _chai = require('chai');

var _sinon = require('sinon');

var _getMuiTheme = require('../styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _ClockMinutes = require('./ClockMinutes');

var _ClockMinutes2 = _interopRequireDefault(_ClockMinutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('<ClockMinutes />', function () {
  var muiTheme = (0, _getMuiTheme2.default)();
  var shallowWithContext = function shallowWithContext(node) {
    return (0, _enzyme.shallow)(node, { context: { muiTheme: muiTheme } });
  };

  describe('prop: onChange', function () {
    var wrapper = void 0;
    var onChange = void 0;

    beforeEach(function () {
      onChange = (0, _sinon.spy)();
      wrapper = shallowWithContext(_react2.default.createElement(_ClockMinutes2.default, { onChange: onChange }));

      wrapper.instance().center = { x: 100, y: 100 };
      wrapper.instance().basePoint = { x: 100, y: 0 };
    });

    it('should have finished true on touchEnd', function () {
      var mask = wrapper.find('div').at(1);

      mask.simulate('touchEnd', {
        preventDefault: function preventDefault() {},

        type: 'touchend',
        changedTouches: [{ offsetX: 50, offsetY: 70 }]
      });
      _chai.assert.strictEqual(onChange.callCount, 1);
      _chai.assert.deepEqual(onChange.args[0], [50, true]);
    });

    it('should have finished true on mouseEnd', function () {
      var mask = wrapper.find('div').at(1);
      mask.simulate('mouseUp', {
        preventDefault: function preventDefault() {},

        type: 'mouseUp',
        nativeEvent: { offsetX: 50, offsetY: 70 }
      });
      _chai.assert.strictEqual(onChange.callCount, 1);
      _chai.assert.deepEqual(onChange.args[0], [50, true]);
    });
  });
});