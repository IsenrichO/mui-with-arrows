'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _chai = require('chai');

var _GridTile = require('./GridTile');

var _GridTile2 = _interopRequireDefault(_GridTile);

var _getMuiTheme = require('../styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<GridTile />', function () {
  var muiTheme = (0, _getMuiTheme2.default)();
  var shallowWithContext = function shallowWithContext(node) {
    return (0, _enzyme.shallow)(node, { context: { muiTheme: muiTheme } });
  };
  var tileData = {
    img: 'images/grid-list/00-52-29-429_640.jpg',
    title: 'Breakfast',
    author: 'jill111'
  };

  describe('prop: children', function () {
    it('should renders children by default', function () {
      var testChildren = _react2.default.createElement('img', { src: tileData.img });
      var wrapper = shallowWithContext(_react2.default.createElement(
        _GridTile2.default,
        null,
        testChildren
      ));

      _chai.assert.strictEqual(wrapper.containsMatchingElement(testChildren), true, 'should contain the children');
    });
  });

  describe('prop: className', function () {
    it('should renders className', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(_GridTile2.default, { className: 'foo' }));

      _chai.assert.strictEqual(wrapper.hasClass('foo'), true, 'should contain the className');
    });
  });

  describe('prop: title', function () {
    it('should renders title', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(_GridTile2.default, { title: tileData.title }));

      _chai.assert.strictEqual(wrapper.children('div').text(), tileData.title, 'should contain the title');
    });
  });

  describe('prop: titleStyle', function () {
    it('should overwrite styles', function () {
      var titleStyle = {
        fontSize: 20
      };
      var wrapper = shallowWithContext(_react2.default.createElement(_GridTile2.default, { title: 'foo', titleStyle: titleStyle }));

      _chai.assert.strictEqual(wrapper.find('div > div > div > div').props().style.fontSize, titleStyle.fontSize, 'should overwrite title fontSize');
    });
  });
}); /* eslint-env mocha */