'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _chai = require('chai');

var _BottomNavigationItem = require('./BottomNavigationItem');

var _BottomNavigationItem2 = _interopRequireDefault(_BottomNavigationItem);

var _FontIcon = require('../FontIcon/FontIcon');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _getMuiTheme = require('../styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('<BottomNavigationItem />', function () {
  var muiTheme = (0, _getMuiTheme2.default)();
  var shallowWithContext = function shallowWithContext(node) {
    return (0, _enzyme.shallow)(node, { context: { muiTheme: muiTheme } });
  };

  describe('prop: icon', function () {
    it('should be able to customize the icon', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(_BottomNavigationItem2.default, {
        icon: _react2.default.createElement(_FontIcon2.default, { color: '#ddd' }),
        label: 'foo'
      }));
      _chai.assert.strictEqual(wrapper.find(_FontIcon2.default).props().color, '#ddd');
    });
  });
});