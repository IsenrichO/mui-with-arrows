'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _enzyme = require('enzyme');

var _chai = require('chai');

var _IconButton = require('./IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _FontIcon = require('../FontIcon');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _getMuiTheme = require('../styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _TouchRipple = require('../internal/TouchRipple');

var _TouchRipple2 = _interopRequireDefault(_TouchRipple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
var dummy = _react2.default.createElement('div', null);

describe('<IconButton />', function () {
  var muiTheme = (0, _getMuiTheme2.default)();
  var shallowWithContext = function shallowWithContext(node) {
    return (0, _enzyme.shallow)(node, { context: { muiTheme: muiTheme } });
  };
  var mountWithContext = function mountWithContext(node) {
    return (0, _enzyme.mount)(node, {
      context: { muiTheme: muiTheme },
      childContextTypes: { muiTheme: _propTypes2.default.object }
    });
  };

  it('renders an enhanced button', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(
      _IconButton2.default,
      null,
      'Button'
    ));
    _chai.assert.strictEqual(wrapper.is('EnhancedButton'), true);
  });

  it('renders children', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(
      _IconButton2.default,
      null,
      dummy
    ));
    _chai.assert.strictEqual(wrapper.containsMatchingElement(dummy), true, 'should contain the children');
  });

  it('should render children with custom color', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(
      _IconButton2.default,
      null,
      _react2.default.createElement(
        _FontIcon2.default,
        { className: 'material-icons', color: 'red' },
        'home'
      )
    ));

    _chai.assert.strictEqual(wrapper.find(_FontIcon2.default).length, 1, 'should contain the FontIcon child');
    _chai.assert.strictEqual(wrapper.find(_FontIcon2.default).props().color, 'red', 'FontIcon should have color set to red');
    _chai.assert.strictEqual(wrapper.find(_FontIcon2.default).props().style.color, undefined, 'FontIcon style object has no color property');
  });

  describe('prop: hoveredStyle', function () {
    it('should apply the style when hovered', function () {
      var hoveredStyle = {
        backgroundColor: 'blue'
      };
      var wrapper = shallowWithContext(_react2.default.createElement(_IconButton2.default, { hoveredStyle: hoveredStyle }));

      wrapper.simulate('mouseEnter');

      _chai.assert.include(wrapper.props().style, hoveredStyle);
    });

    it('should override the style prop', function () {
      var buttonStyle = {
        backgroundColor: 'blue'
      };
      var hoveredStyle = {
        backgroundColor: 'green'
      };
      var wrapper = shallowWithContext(_react2.default.createElement(_IconButton2.default, { style: buttonStyle, hoveredStyle: hoveredStyle }));

      wrapper.simulate('mouseEnter');

      _chai.assert.include(wrapper.props().style, hoveredStyle);
    });
  });
  describe('prop: disabled', function () {
    it('should disable the ripple effect', function () {
      var wrapper = mountWithContext(_react2.default.createElement(_IconButton2.default, { disabled: true }));
      _chai.assert.strictEqual(wrapper.find(_TouchRipple2.default).length, 0, 'should not contain a TouchRipple descendent');
    });
    it('should not disable the ripple effect if false', function () {
      var wrapper = mountWithContext(_react2.default.createElement(_IconButton2.default, { disabled: false }));
      _chai.assert.strictEqual(wrapper.find(_TouchRipple2.default).length, 1, 'should contain a TouchRipple descendent');
    });
  });
});