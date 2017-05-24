'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _chai = require('chai');

var _EnhancedButton = require('./EnhancedButton');

var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);

var _getMuiTheme = require('../styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<EnhancedButton />', function () {
  var muiTheme = (0, _getMuiTheme2.default)();
  var shallowWithContext = function shallowWithContext(node) {
    return (0, _enzyme.shallow)(node, { context: { muiTheme: muiTheme } });
  };
  var testChildren = _react2.default.createElement(
    'div',
    { className: 'unique' },
    'Hello World'
  );

  it('renders a button', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(
      _EnhancedButton2.default,
      null,
      'Button'
    ));
    _chai.assert.ok(wrapper.text(), 'Button', 'should say Button');
    _chai.assert.ok(wrapper.is('button'), 'should match a button element');
    _chai.assert.strictEqual(wrapper.props().tabIndex, 0, 'should receive the focus');
  });

  it('renders a link when href is provided', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(
      _EnhancedButton2.default,
      { href: 'http://google.com' },
      'Button'
    ));
    _chai.assert.ok(wrapper.text(), 'Button', 'should say Button');
    _chai.assert.ok(wrapper.is('a'), 'should match a <a> element');
  });

  it('renders any container element', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(
      _EnhancedButton2.default,
      { containerElement: _react2.default.createElement('div', null) },
      'Button'
    ));
    _chai.assert.ok(wrapper.text(), 'Button', 'should say Button');
    _chai.assert.ok(wrapper.is('div'), 'should match a div element');
  });

  it('renders children', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(
      _EnhancedButton2.default,
      null,
      testChildren
    ));
    _chai.assert.ok(wrapper.contains(testChildren), 'should contain the children');
  });

  it('renders a disabled button when disabled={true} which blocks onTouchTap from firing', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(
      _EnhancedButton2.default,
      { disabled: true },
      'Button'
    ));
    _chai.assert.ok(wrapper.text(), 'Button', 'should say Button');
    _chai.assert.ok(wrapper.is('button[disabled]'), 'should be a disabled button element');

    var clicked = false;
    var touched = false;
    wrapper.setProps({
      onClick: function onClick() {
        return clicked = true;
      },
      onTouchTap: function onTouchTap() {
        return touched = true;
      }
    });
    wrapper.simulate('click');
    wrapper.simulate('touchTap');
    _chai.assert.strictEqual(clicked, false, 'should not trigger the click');
    _chai.assert.strictEqual(touched, false, 'should not trigger the touchTap');
  });

  it('renders a dummy link button when disabled={true} which blocks onTouchTap from firing', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(
      _EnhancedButton2.default,
      {
        disabled: true,
        href: 'http://google.com'
      },
      'Button'
    ));
    _chai.assert.ok(wrapper.text(), 'Button', 'should say Button');
    _chai.assert.notOk(wrapper.is('a'), 'should not be an <a> element');
    _chai.assert.notOk(wrapper.is('button'), 'should not be an <a> element');

    var clicked = false;
    var touched = false;
    wrapper.setProps({
      onClick: function onClick() {
        return clicked = true;
      },
      onTouchTap: function onTouchTap() {
        return touched = true;
      }
    });
    wrapper.simulate('click');
    wrapper.simulate('touchTap');
    _chai.assert.strictEqual(clicked, false, 'should not trigger the click');
    _chai.assert.strictEqual(touched, false, 'should not trigger the touchTap');
  });

  it('should be styleable', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(
      _EnhancedButton2.default,
      { style: { color: 'red' } },
      'Button'
    ));
    _chai.assert.ok(wrapper.text(), 'Button', 'should say Button');
    _chai.assert.strictEqual(wrapper.node.props.style.color, 'red', 'should be red');
  });

  it('overrides default styles', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(
      _EnhancedButton2.default,
      null,
      'Button'
    ));
    _chai.assert.strictEqual(wrapper.node.props.style.background, 'none', 'should be none');
    wrapper.setProps({
      style: {
        background: 'blue'
      }
    });
    _chai.assert.strictEqual(wrapper.node.props.style.background, 'blue', 'should be blue');
  });

  it('should not have "background: none" style when passed a backgroundColor', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(
      _EnhancedButton2.default,
      null,
      'Button'
    ));
    _chai.assert.strictEqual(wrapper.node.props.style.background, 'none', 'should be none');
    wrapper.setProps({ style: { backgroundColor: 'blue' } });
    _chai.assert.strictEqual(wrapper.node.props.style.background, undefined, 'background should be undefined');
    _chai.assert.strictEqual(wrapper.node.props.style.backgroundColor, 'blue', 'backgroundColor should be blue');
    wrapper.setProps({ style: { backgroundColor: null } });
    _chai.assert.strictEqual(wrapper.node.props.style.background, 'none', 'should be none');
  });

  describe('prop: type', function () {
    it('should set a button type by default', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(
        _EnhancedButton2.default,
        null,
        'Button'
      ));

      _chai.assert.strictEqual(wrapper.is('button[type="button"]'), true);
    });

    it('should not set a button type on span', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(
        _EnhancedButton2.default,
        { containerElement: 'span' },
        'Button'
      ));

      _chai.assert.strictEqual(wrapper.props().type, undefined);
    });

    it('should set the button type', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(
        _EnhancedButton2.default,
        { type: 'submit' },
        'Button'
      ));

      _chai.assert.strictEqual(wrapper.type(), 'button', 'should say Button');
      _chai.assert.strictEqual(wrapper.is('button[type="submit"]'), true, 'should have the type attribute');
      wrapper.setProps({ type: 'reset' });
      _chai.assert.strictEqual(wrapper.is('button[type="reset"]'), true, 'should have the type attribute');
    });
  });

  it('should pass through other html attributes', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(
      _EnhancedButton2.default,
      { name: 'hello' },
      'Button'
    ));
    _chai.assert.ok(wrapper.is('button[name="hello"]'), 'should have the name attribute');
  });

  it('should handle focus propagation based on disabled props', function () {
    var eventStack = [];
    eventStack.reset = function () {
      return eventStack.splice(0, eventStack.length);
    };

    var wrapper = shallowWithContext(_react2.default.createElement(
      _EnhancedButton2.default,
      {
        disableKeyboardFocus: true,
        onFocus: function onFocus() {
          return eventStack.push('focus');
        }
      },
      'Button'
    ));

    wrapper.simulate('focus');
    _chai.assert.strictEqual(eventStack.length, 0);
    wrapper.setProps({ disableKeyboardFocus: false });
    wrapper.simulate('focus');
    _chai.assert.strictEqual(eventStack.length, 1);
    wrapper.setProps({ disabled: true });
    wrapper.simulate('focus');
    _chai.assert.strictEqual(eventStack.length, 1);
    wrapper.setProps({ disabled: false });
    wrapper.simulate('focus');
    _chai.assert.strictEqual(eventStack.length, 2);
    wrapper.setProps({ disableKeyboardFocus: true });
    wrapper.simulate('focus');
    _chai.assert.strictEqual(eventStack.length, 2);
  });

  it('have a TouchRipple and control it using props', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(
      _EnhancedButton2.default,
      {
        centerRipple: true,
        touchRippleColor: 'red',
        touchRippleOpacity: 0.8
      },
      'Button'
    ));

    var touchRipple = wrapper.find('TouchRipple');
    _chai.assert.ok(wrapper.text(), 'Button', 'should say Button');
    _chai.assert.strictEqual(touchRipple.length, 1, 'should have a TouchRipple');
    _chai.assert.strictEqual(touchRipple.node.props.centerRipple, true);
    _chai.assert.strictEqual(touchRipple.node.props.color, 'red');
    _chai.assert.strictEqual(touchRipple.node.props.opacity, 0.8);
  });

  it('has no TouchRipple when disableTouchRipple={true}', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(
      _EnhancedButton2.default,
      { disableTouchRipple: true },
      'Button'
    ));
    _chai.assert.strictEqual(wrapper.find('TouchRipple').length, 0, 'should not have a TouchRipple');
  });

  it('have a FocusRipple when keyboard focused (tracked internally) and control it using props', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(
      _EnhancedButton2.default,
      {
        focusRippleColor: 'red',
        focusRippleOpacity: 0.8
      },
      'Button'
    ));

    _chai.assert.strictEqual(wrapper.find('FocusRipple').length, 0, 'should not have a FocusRipple');

    wrapper.setState({
      isKeyboardFocused: true
    });

    var focusRipple = wrapper.find('FocusRipple');
    _chai.assert.ok(wrapper.text(), 'Button', 'should say Button');
    _chai.assert.strictEqual(focusRipple.length, 1, 'should have a FocusRipple');
    _chai.assert.strictEqual(focusRipple.node.props.show, true);
    _chai.assert.strictEqual(focusRipple.node.props.color, 'red');
    _chai.assert.strictEqual(focusRipple.node.props.opacity, 0.8);

    wrapper.setProps({
      disableKeyboardFocus: true
    });
    wrapper.setState({
      isKeyboardFocused: true
    });

    _chai.assert.strictEqual(wrapper.find('FocusRipple').length, 0, 'should not have a FocusRipple');

    wrapper.setProps({
      disableKeyboardFocus: false
    });
    wrapper.setState({
      isKeyboardFocused: true
    });

    _chai.assert.strictEqual(wrapper.find('FocusRipple').length, 1, 'should have a FocusRipple');
  });

  it('should remove a FocusRipple on blur', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(
      _EnhancedButton2.default,
      null,
      'Button'
    ));
    wrapper.setState({
      isKeyboardFocused: true
    });
    _chai.assert.strictEqual(wrapper.find('FocusRipple').length, 1, 'should have a FocusRipple');
    wrapper.simulate('blur');
    _chai.assert.strictEqual(wrapper.find('FocusRipple').length, 0, 'should not have a FocusRipple');
  });

  describe('prop: disabled', function () {
    it('should have no ripples when button is disabled', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(
        _EnhancedButton2.default,
        { keyboardFocused: true, disabled: true },
        'Button'
      ));
      _chai.assert.strictEqual(wrapper.find('TouchRipple').length, 0, 'should not have a TouchRipple');
      _chai.assert.strictEqual(wrapper.find('FocusRipple').length, 0, 'should not have a FocusRipple');
      _chai.assert.strictEqual(wrapper.props().tabIndex, -1, 'should not receive the focus');
    });
  });

  it('should have no ripples when both are disabled', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(
      _EnhancedButton2.default,
      {
        keyboardFocused: true,
        disableFocusRipple: true,
        disableTouchRipple: true
      },
      'Button'
    ));
    _chai.assert.strictEqual(wrapper.find('TouchRipple').length, 0, 'should not have a TouchRipple');
    _chai.assert.strictEqual(wrapper.find('FocusRipple').length, 0, 'should not have a FocusRipple');
  });

  it('should fire the touchtap handler if keyboard focused and the enter or space keys are hit', function () {
    var eventStack = [];
    eventStack.reset = function () {
      return eventStack.splice(0, eventStack.length);
    };

    var wrapper = shallowWithContext(_react2.default.createElement(
      _EnhancedButton2.default,
      {
        keyboardFocused: true,
        onTouchTap: function onTouchTap() {
          return eventStack.push('touchTap');
        }
      },
      'Button'
    ));

    wrapper.simulate('keyDown', { which: 13 });
    _chai.assert.strictEqual(eventStack.length, 1);

    wrapper.setState({ isKeyboardFocused: true });
    wrapper.simulate('keyUp', { which: 32 });
    _chai.assert.strictEqual(eventStack.length, 2);

    wrapper.setState({ isKeyboardFocused: true });
    wrapper.setProps({ disabled: true });
    wrapper.simulate('keyDown', { which: 13 });
    _chai.assert.strictEqual(eventStack.length, 2, 'should not work when button is disabled');
  });
}); /* eslint-env mocha */