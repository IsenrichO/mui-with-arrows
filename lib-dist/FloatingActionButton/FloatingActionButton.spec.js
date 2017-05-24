'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _chai = require('chai');

var _FloatingActionButton = require('./FloatingActionButton');

var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

var _FontIcon = require('../FontIcon');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _getMuiTheme = require('../styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _add = require('../svg-icons/content/add');

var _add2 = _interopRequireDefault(_add);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<FloatingActionButton />', function () {
  var muiTheme = (0, _getMuiTheme2.default)();
  var shallowWithContext = function shallowWithContext(node) {
    return (0, _enzyme.shallow)(node, { context: { muiTheme: muiTheme } });
  };

  describe('hover state', function () {
    it('should reset the hover state when disabled', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(
        _FloatingActionButton2.default,
        null,
        _react2.default.createElement(_add2.default, null)
      ));
      wrapper.setState({
        hovered: true
      });
      wrapper.setProps({
        disabled: true
      });
      _chai.assert.strictEqual(wrapper.state().hovered, false, 'should reset the state');
    });
  });

  describe('prop: iconClassName', function () {
    it('should add a FontIcon element when using the iconClassName property', function () {
      var iconClassName = 'foo';
      var wrapper = shallowWithContext(_react2.default.createElement(_FloatingActionButton2.default, { iconClassName: iconClassName }));

      _chai.assert.strictEqual(wrapper.find(_FontIcon2.default).props().className, iconClassName);
    });
  });

  describe('style', function () {
    it('should apply children style', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(
        _FloatingActionButton2.default,
        null,
        _react2.default.createElement(
          _FontIcon2.default,
          {
            className: 'material-icons',
            style: {
              transform: 'scale(1.5)'
            }
          },
          'add'
        )
      ));
      _chai.assert.strictEqual(wrapper.find(_FontIcon2.default).props().style.transform, 'scale(1.5)', 'should apply inline style');
    });

    it('should work with two children', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(
        _FloatingActionButton2.default,
        null,
        _react2.default.createElement(_add2.default, null),
        _react2.default.createElement(_add2.default, null)
      ));

      var children = wrapper.find(_add2.default);

      _chai.assert.strictEqual(children.length, 2);
      _chai.assert.strictEqual(children.at(0).props().style.fill, '#ffffff', 'should use the default style');
    });
  });
}); /* eslint-env mocha */