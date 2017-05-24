'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _chai = require('chai');

var _Tabs = require('./Tabs');

var _Tabs2 = _interopRequireDefault(_Tabs);

var _getMuiTheme = require('../styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Tabs />', function () {
  var muiTheme = (0, _getMuiTheme2.default)();
  var shallowWithContext = function shallowWithContext(node) {
    return (0, _enzyme.shallow)(node, { context: { muiTheme: muiTheme } });
  };
  var Tab = function Tab() {
    return _react2.default.createElement('div', null);
  };
  Tab.muiName = 'Tab';

  describe('uncontrolled', function () {
    it('should set the right tab active', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(
        _Tabs2.default,
        null,
        _react2.default.createElement(Tab, null),
        _react2.default.createElement(Tab, null)
      ));

      _chai.assert.strictEqual(wrapper.state().selectedIndex, 0);
    });
  });

  describe('prop: value', function () {
    it('should set the right tab active', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(
        _Tabs2.default,
        { value: '2' },
        _react2.default.createElement(Tab, { value: '1' }),
        _react2.default.createElement(Tab, { value: '2' })
      ));

      _chai.assert.strictEqual(wrapper.state().selectedIndex, 1);
    });

    it('should set the right tab active when the children change', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(
        _Tabs2.default,
        { value: '2' },
        _react2.default.createElement(Tab, { value: '1' }),
        _react2.default.createElement(Tab, { value: '2' })
      ));

      wrapper.setProps({
        children: [_react2.default.createElement(Tab, { value: '2' }), _react2.default.createElement(Tab, { value: '3' })]
      });

      _chai.assert.strictEqual(wrapper.state().selectedIndex, 0);
    });
  });
}); /* eslint-env mocha */