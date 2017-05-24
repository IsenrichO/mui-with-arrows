'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _chai = require('chai');

var _sinon = require('sinon');

var _Chip = require('./Chip');

var _Chip2 = _interopRequireDefault(_Chip);

var _getMuiTheme = require('../styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
var Avatar = function Avatar(props) {
  return _react2.default.createElement('div', props);
};
Avatar.muiName = 'Avatar';

describe('<Chip />', function () {
  var muiTheme = (0, _getMuiTheme2.default)();
  var themedShallow = function themedShallow(node) {
    var context = { muiTheme: muiTheme };
    return (0, _enzyme.shallow)(node, { context: context });
  };

  describe('state', function () {
    var wrapper = themedShallow(_react2.default.createElement(
      _Chip2.default,
      { onTouchTap: function onTouchTap() {} },
      'Label'
    ));

    it('renders with initial state of false for clicked and focused', function () {
      _chai.assert.strictEqual(wrapper.state('clicked'), false);
      _chai.assert.strictEqual(wrapper.state('focused'), false);
    });

    it('sets the focus state onFocus', function () {
      wrapper.simulate('focus');
      _chai.assert.strictEqual(wrapper.state('focused'), true);
    });

    it('sets the clicked state on mouseDown', function () {
      wrapper.simulate('mouseDown', {
        stopPropagation: function stopPropagation() {},
        button: 0 });
      _chai.assert.strictEqual(wrapper.state('clicked'), true);
    });

    it('unsets the clicked state on mouseUp', function () {
      wrapper.simulate('mouseUp');
      _chai.assert.strictEqual(wrapper.state('clicked'), false);
    });

    it('sets the clicked state on touchStart', function () {
      wrapper.simulate('touchStart', {
        stopPropagation: function stopPropagation() {}
      });
      _chai.assert.strictEqual(wrapper.state('clicked'), true);
    });

    it('unsets the clicked state on touchEnd', function () {
      wrapper.simulate('touchEnd');
      _chai.assert.strictEqual(wrapper.state('clicked'), false);
    });

    it('resets the state on blur', function () {
      wrapper.setState({ focused: true, clicked: true });
      wrapper.simulate('blur');
      _chai.assert.strictEqual(wrapper.state('clicked'), false);
      _chai.assert.strictEqual(wrapper.state('focused'), false);
    });
  });

  describe('rendering', function () {
    it('renders an EnhancedButton', function () {
      var wrapper = themedShallow(_react2.default.createElement(
        _Chip2.default,
        null,
        'Label'
      ));
      _chai.assert.ok(wrapper.is('EnhancedButton'));
    });

    it('renders children', function () {
      var wrapper = themedShallow(_react2.default.createElement(
        _Chip2.default,
        null,
        'Hello world'
      ));
      _chai.assert.ok(wrapper.contains('Hello world'), 'should contain the children');
    });

    it('merges styles and other props into the root node', function () {
      var wrapper = themedShallow(_react2.default.createElement(_Chip2.default, {
        style: { paddingRight: 200, color: 'purple', border: '1px solid tomato' },
        myProp: 'hello'
      }));

      var _wrapper$props = wrapper.props(),
          style = _wrapper$props.style,
          myProp = _wrapper$props.myProp;

      _chai.assert.strictEqual(style.paddingRight, 200);
      _chai.assert.strictEqual(style.color, 'purple');
      _chai.assert.strictEqual(style.border, '1px solid tomato');
      _chai.assert.strictEqual(myProp, 'hello');
    });

    it('renders a label with an Avatar before', function () {
      var wrapper = themedShallow(_react2.default.createElement(
        _Chip2.default,
        null,
        _react2.default.createElement(Avatar, { src: 'images/kolage-128.jpg' }),
        'Hello World'
      ));
      var avatar = wrapper.children().at(0);
      var label = wrapper.children().at(1);
      _chai.assert.ok(avatar.is('Avatar'));
      _chai.assert.ok(label.is('span'));
      _chai.assert.strictEqual(label.children().node, 'Hello World', 'says hello world');
    });

    it('does not render a delete icon by default', function () {
      var wrapper = themedShallow(_react2.default.createElement(
        _Chip2.default,
        null,
        'Label'
      ));
      _chai.assert.notOk(wrapper.find('NavigationCancel').length);
    });

    it('renders a delete icon after the label when onRequestDelete is provided', function () {
      var wrapper = themedShallow(_react2.default.createElement(
        _Chip2.default,
        { onRequestDelete: (0, _sinon.spy)() },
        'Label'
      ));
      _chai.assert.ok(wrapper.childAt(1).is('NavigationCancel'));
    });
  });

  describe('callbacks', function () {
    it('triggers onRequestDelete when the delete icon is clicked', function () {
      var handleRequestDelete = (0, _sinon.spy)();
      var wrapper = themedShallow(_react2.default.createElement(
        _Chip2.default,
        { onRequestDelete: handleRequestDelete },
        'Label'
      ));
      wrapper.childAt(1).simulate('touchTap', {
        stopPropagation: function stopPropagation() {}
      });
      _chai.assert.ok(handleRequestDelete.calledOnce);
    });

    it('bubbles callbacks used internally', function () {
      var events = ['blur', 'focus', 'keyDown', 'keyboardFocus', 'mouseDown', 'mouseEnter', 'mouseUp', 'touchEnd', 'touchStart'];

      var handlers = {};
      var props = {};

      events.forEach(function (event) {
        handlers[event] = (0, _sinon.spy)();
        props['on' + (event.charAt(0).toUpperCase() + event.slice(1))] = handlers[event];
      });

      var wrapper = themedShallow(_react2.default.createElement(
        _Chip2.default,
        props,
        'Step One'
      ));

      events.forEach(function (event) {
        wrapper.simulate(event, {
          stopPropagation: function stopPropagation() {}
        });
        _chai.assert.ok(handlers[event].calledOnce, 'should trigger the ' + event + ' callback');
      });
    });
  });

  describe('prop: containerElement', function () {
    it('should use div if no containerElement specified', function () {
      var wrapper = themedShallow(_react2.default.createElement(
        _Chip2.default,
        null,
        'Label'
      ));
      var button = wrapper.dive({ context: { muiTheme: muiTheme } });
      _chai.assert.strictEqual(button.is('div'), true, 'should match an div element');
    });

    it('should use the given string containerElement prop', function () {
      var wrapper = themedShallow(_react2.default.createElement(
        _Chip2.default,
        { containerElement: 'span' },
        'Label'
      ));
      var button = wrapper.dive({ context: { muiTheme: muiTheme } });
      _chai.assert.strictEqual(button.is('span'), true, 'should match an span element');
    });

    it('should use the given ReactElement containerElement prop', function () {
      var CustomElement = function CustomElement(props) {
        return _react2.default.createElement('a', props);
      };
      var wrapper = themedShallow(_react2.default.createElement(
        _Chip2.default,
        { containerElement: _react2.default.createElement(CustomElement, null) },
        'Label'
      ));
      var button = wrapper.dive({ context: { muiTheme: muiTheme } });
      _chai.assert.strictEqual(button.is(CustomElement), true, 'should match the custom element');
    });
  });
});