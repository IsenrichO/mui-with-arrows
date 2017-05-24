'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _chai = require('chai');

var _Drawer = require('./Drawer');

var _Drawer2 = _interopRequireDefault(_Drawer);

var _getMuiTheme = require('../styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Drawer />', function () {
  var muiTheme = (0, _getMuiTheme2.default)();
  var shallowWithContext = function shallowWithContext(node) {
    return (0, _enzyme.shallow)(node, { context: { muiTheme: muiTheme } });
  };

  describe('propTypes', function () {
    it('accepts number in the width props', function () {
      shallowWithContext(_react2.default.createElement(_Drawer2.default, { width: 400 }));
    });

    it('accepts a percentage format in string', function () {
      shallowWithContext(_react2.default.createElement(_Drawer2.default, { width: '70%' }));
    });

    it('throws an error on wrong percentage format', function () {
      (0, _chai.expect)(function () {
        return shallowWithContext(_react2.default.createElement(_Drawer2.default, { width: '80' }));
      }).to.throw(Error, 'Not a valid percentage format.');
    });
  });
}); /* eslint-env mocha */