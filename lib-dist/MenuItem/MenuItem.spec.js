'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _chai = require('chai');

var _enzyme = require('enzyme');

var _getMuiTheme = require('src/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _MenuItem = require('./MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _ListItem = require('../List/ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

var _Popover = require('../Popover/Popover');

var _Popover2 = _interopRequireDefault(_Popover);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<MenuItem />', function () {
  var muiTheme = (0, _getMuiTheme2.default)();
  var shallowWithContext = function shallowWithContext(node) {
    return (0, _enzyme.shallow)(node, { context: { muiTheme: muiTheme } });
  };

  it('should have a min-height to allow display even within null <SelectItem /> option', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(_MenuItem2.default, null));
    _chai.assert.strictEqual(wrapper.find(_ListItem2.default).props().style.minHeight, '48px');
  });

  it('should pass hoverColor from the theme to the <ListItem />', function () {
    var testColor = '#ededed';
    var muiThemeWithHoverColor = (0, _getMuiTheme2.default)({ menuItem: { hoverColor: testColor } });
    var shallowWithHoverColor = function shallowWithHoverColor(node) {
      return (0, _enzyme.shallow)(node, { context: { muiTheme: muiThemeWithHoverColor } });
    };

    var wrapper = shallowWithHoverColor(_react2.default.createElement(_MenuItem2.default, null));
    _chai.assert.strictEqual(wrapper.find(_ListItem2.default).prop('hoverColor'), testColor);
  });

  it('should pass anchorOrigin to the <Popover />', function () {
    var menuItems = [_react2.default.createElement(_MenuItem2.default, null), _react2.default.createElement(_MenuItem2.default, null)];
    var anchorOrigin = { horizontal: 'middle', vertical: 'bottom' };
    var wrapper = shallowWithContext(_react2.default.createElement(_MenuItem2.default, { menuItems: menuItems, anchorOrigin: anchorOrigin }));
    var popoverWrapper = wrapper.find(_ListItem2.default).find(_Popover2.default);
    _chai.assert.strictEqual(popoverWrapper.prop('anchorOrigin'), anchorOrigin);
  });

  it('should pass targetOrigin to the <Popover />', function () {
    var menuItems = [_react2.default.createElement(_MenuItem2.default, null), _react2.default.createElement(_MenuItem2.default, null)];
    var targetOrigin = { horizontal: 'middle', vertical: 'bottom' };
    var wrapper = shallowWithContext(_react2.default.createElement(_MenuItem2.default, { menuItems: menuItems, targetOrigin: targetOrigin }));
    var popoverWrapper = wrapper.find(_ListItem2.default).find(_Popover2.default);
    _chai.assert.strictEqual(popoverWrapper.prop('targetOrigin'), targetOrigin);
  });
}); /* eslint-env mocha */