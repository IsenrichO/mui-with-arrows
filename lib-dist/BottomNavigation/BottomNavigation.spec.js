'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _chai = require('chai');

var _BottomNavigation = require('./BottomNavigation');

var _BottomNavigation2 = _interopRequireDefault(_BottomNavigation);

var _BottomNavigationItem = require('./BottomNavigationItem');

var _BottomNavigationItem2 = _interopRequireDefault(_BottomNavigationItem);

var _getMuiTheme = require('../styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('<BottomNavigation />', function () {
  var muiTheme = (0, _getMuiTheme2.default)();
  var shallowWithContext = function shallowWithContext(node) {
    return (0, _enzyme.shallow)(node, { context: { muiTheme: muiTheme } });
  };

  describe('prop: selectedIndex', function () {
    it('determines which BottomNavigationItem is selected', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(
        _BottomNavigation2.default,
        { selectedIndex: 0 },
        _react2.default.createElement(_BottomNavigationItem2.default, null),
        _react2.default.createElement(_BottomNavigationItem2.default, null),
        _react2.default.createElement(_BottomNavigationItem2.default, null)
      ));

      var bottomNavigationItems = wrapper.find(_BottomNavigationItem2.default);

      _chai.assert.strictEqual(bottomNavigationItems.at(0).props().selected, true, 'index 0 should be selected');
      _chai.assert.notStrictEqual(bottomNavigationItems.at(1).props().selected, true, 'index 1 should not be selected');
      _chai.assert.notStrictEqual(bottomNavigationItems.at(2).props().selected, true, 'index 2 should not be selected');
    });

    it('changes the selected BottomNavigationItem', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(
        _BottomNavigation2.default,
        { selectedIndex: 0 },
        _react2.default.createElement(_BottomNavigationItem2.default, null),
        _react2.default.createElement(_BottomNavigationItem2.default, null),
        _react2.default.createElement(_BottomNavigationItem2.default, null)
      ));

      wrapper.setProps({ selectedIndex: 1 });

      var bottomNavigationItems = wrapper.find(_BottomNavigationItem2.default);
      _chai.assert.notStrictEqual(bottomNavigationItems.at(0).props().selected, true, 'index 0 should not be selected');
      _chai.assert.strictEqual(bottomNavigationItems.at(1).props().selected, true, 'index 1 should be selected');
      _chai.assert.notStrictEqual(bottomNavigationItems.at(2).props().selected, true, 'index 2 should not be selected');
    });
  });
});