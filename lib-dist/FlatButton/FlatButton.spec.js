'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _chai = require('chai');

var _FlatButton = require('./FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _getMuiTheme = require('../styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _android = require('../svg-icons/action/android');

var _android2 = _interopRequireDefault(_android);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('<FlatButton />', function () {
  var muiTheme = (0, _getMuiTheme2.default)();
  var shallowWithContext = function shallowWithContext(node) {
    return (0, _enzyme.shallow)(node, { context: { muiTheme: muiTheme } });
  };
  var flatButtonTheme = muiTheme.flatButton;
  var testChildren = _react2.default.createElement(
    'div',
    { className: 'unique' },
    'Hello World'
  );

  it('renders an enhanced button', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(
      _FlatButton2.default,
      null,
      'Button'
    ));
    _chai.assert.ok(wrapper.is('EnhancedButton'));
  });

  it('renders children', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(
      _FlatButton2.default,
      null,
      testChildren
    ));
    _chai.assert.ok(wrapper.contains(testChildren), 'should contain the children');
  });

  it('passes props to the enhanced button', function () {
    var props = {
      ariaLabel: 'Say hello world',
      disabled: true,
      href: 'http://google.com',
      name: 'Hello World'
    };

    var wrapper = shallowWithContext(_react2.default.createElement(
      _FlatButton2.default,
      props,
      'Button'
    ));

    _chai.assert.ok(wrapper.is('EnhancedButton'));
    _chai.assert.ok(wrapper.is(props));
  });

  it('renders a label with an icon before', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(_FlatButton2.default, {
      icon: _react2.default.createElement('span', { className: 'test-icon' }),
      label: 'Hello'
    }));
    var icon = wrapper.children().at(0);
    var label = wrapper.children().at(1);
    _chai.assert.ok(icon.is('span'));
    _chai.assert.ok(icon.hasClass('test-icon'));
    _chai.assert.ok(label.is('FlatButtonLabel'));
    _chai.assert.strictEqual(label.node.props.label, 'Hello', 'says hello');
  });

  it('renders a label with an icon after', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(_FlatButton2.default, {
      icon: _react2.default.createElement('span', { className: 'test-icon' }),
      label: 'Hello',
      labelPosition: 'before'
    }));
    var icon = wrapper.children().at(1);
    var label = wrapper.children().at(0);
    _chai.assert.ok(icon.is('span'));
    _chai.assert.ok(icon.hasClass('test-icon'));
    _chai.assert.ok(label.is('FlatButtonLabel'));
    _chai.assert.strictEqual(label.node.props.label, 'Hello', 'says hello');
  });

  it('colors the button the primary theme color', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(_FlatButton2.default, {
      label: 'Button',
      icon: _react2.default.createElement('span', { className: 'test-icon' }),
      primary: true
    }));
    var icon = wrapper.children().at(0);
    _chai.assert.ok(wrapper.is('EnhancedButton'));
    _chai.assert.ok(wrapper.is({
      style: {
        color: flatButtonTheme.primaryTextColor
      }
    }));
    _chai.assert.ok(icon.is('span'));
    _chai.assert.ok(icon.is({ color: flatButtonTheme.primaryTextColor }));
  });

  it('colors the icon with the passed color in prop', function () {
    var color = 'white';
    var wrapper = shallowWithContext(_react2.default.createElement(_FlatButton2.default, {
      backgroundColor: '#a4c639',
      hoverColor: '#8AA62F',
      icon: _react2.default.createElement(_android2.default, { color: color })
    }));
    var icon = wrapper.find('ActionAndroid');
    _chai.assert.strictEqual(icon.prop('color'), color, 'icon should have same color as that of color prop');
  });

  it('colors the button the secondary theme color', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(
      _FlatButton2.default,
      { secondary: true, icon: _react2.default.createElement('span', { className: 'test-icon' }) },
      'Button'
    ));
    _chai.assert.ok(wrapper.is('EnhancedButton'));
    _chai.assert.ok(wrapper.is({
      style: {
        color: flatButtonTheme.secondaryTextColor
      }
    }));
  });

  it('overrides hover and background color styles via props', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(_FlatButton2.default, {
      backgroundColor: 'rgba(159,159,159)',
      hoverColor: 'yellow',
      label: 'Button'
    }));

    _chai.assert.ok(wrapper.is({
      style: {
        backgroundColor: 'rgba(159,159,159)'
      }
    }), 'should have the custom background color');

    wrapper.setState({ hovered: true });

    _chai.assert.ok(wrapper.is({
      style: {
        backgroundColor: 'yellow'
      }
    }), 'should have the custom hover background color');
  });

  it('overrides the ripple color via props', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(_FlatButton2.default, { rippleColor: 'yellow', label: 'Button' }));
    _chai.assert.strictEqual(wrapper.node.props.focusRippleColor, 'yellow', 'should be yellow');
    _chai.assert.strictEqual(wrapper.node.props.touchRippleColor, 'yellow', 'should be yellow');
  });

  describe('validateLabel', function () {
    var validateLabel = _FlatButton2.default.propTypes.label;

    it('should throw when using wrong label', function () {
      _chai.assert.strictEqual(validateLabel({}, 'label', 'FlatButton').message, 'Required prop label or children or icon was not specified in FlatButton.', 'should return an error');
    });

    it('should not throw when using a valid label', function () {
      _chai.assert.strictEqual(validateLabel({
        label: 0
      }, 'label', 'FlatButton'), undefined);
    });
  });

  describe('hover state', function () {
    it('should reset the hover state when disabled', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(_FlatButton2.default, { label: 'foo' }));

      wrapper.simulate('mouseEnter');
      _chai.assert.strictEqual(wrapper.state().hovered, true, 'should respond to the event');
      wrapper.setProps({
        disabled: true
      });
      _chai.assert.strictEqual(wrapper.state().hovered, false, 'should reset the state');
    });
  });

  describe('props: icon', function () {
    it('should keep the style set on the icon', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(_FlatButton2.default, { icon: _react2.default.createElement(_android2.default, { style: { foo: 'bar' } }) }));

      _chai.assert.strictEqual(wrapper.find(_android2.default).props().style.foo, 'bar');
    });
  });

  describe('props: other', function () {
    it('should spread other properties to the root element', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(_FlatButton2.default, { target: '_blank', label: 'Button' }));

      _chai.assert.strictEqual(wrapper.props().target, '_blank', 'should be _blank');
    });
  });
});