'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _testUtils = require('react-dom/test-utils');

var _testUtils2 = _interopRequireDefault(_testUtils);

var _enzyme = require('enzyme');

var _chai = require('chai');

var _RaisedButton = require('./RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _android = require('../svg-icons/action/android');

var _android2 = _interopRequireDefault(_android);

var _getMuiTheme = require('../styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('<RaisedButton />', function () {
  var muiTheme = (0, _getMuiTheme2.default)();
  var shallowWithContext = function shallowWithContext(node) {
    return (0, _enzyme.shallow)(node, { context: { muiTheme: muiTheme } });
  };
  var mountWithContext = function mountWithContext(node) {
    return (0, _enzyme.mount)(node, { context: { muiTheme: muiTheme } });
  };
  var testChildren = _react2.default.createElement(
    'span',
    { className: 'unique' },
    'Hello World'
  );

  it('renders an enhanced button inside paper', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(
      _RaisedButton2.default,
      null,
      'Button'
    ));
    _chai.assert.ok(wrapper.is('Paper'));
    _chai.assert.ok(wrapper.childAt(0).is('EnhancedButton'));
  });

  it('renders children', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(
      _RaisedButton2.default,
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
      _RaisedButton2.default,
      props,
      'Button'
    ));

    _chai.assert.ok(wrapper.childAt(0).is('EnhancedButton'));
    _chai.assert.ok(wrapper.childAt(0).is(props));
  });

  it('renders a label with an icon', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(_RaisedButton2.default, {
      icon: _react2.default.createElement('span', { className: 'test-icon' }),
      label: _react2.default.createElement(
        'span',
        { className: 'test-label' },
        'Hello'
      )
    }));
    var icon = wrapper.find('.test-icon');
    var label = wrapper.find('.test-label');
    _chai.assert.ok(icon.is('span'));
    _chai.assert.strictEqual(label.children().node, 'Hello', 'says hello');
  });

  it('renders a hover overlay of equal height to the button', function () {
    var wrappers = [function () {
      return mountWithContext(_react2.default.createElement(
        _RaisedButton2.default,
        null,
        'Hello World'
      ));
    }, function () {
      return mountWithContext(_react2.default.createElement(_RaisedButton2.default, {
        backgroundColor: '#a4c639',
        icon: _react2.default.createElement(_android2.default, null)
      }));
    }];

    wrappers.forEach(function (createWrapper) {
      var wrapper = createWrapper();
      wrapper.simulate('mouseEnter');

      var overlay = wrapper.ref('overlay');
      var button = _reactDom2.default.findDOMNode(_testUtils2.default.findRenderedDOMComponentWithTag(wrapper.instance(), 'button'));

      _chai.assert.strictEqual(overlay.node.clientHeight, button.clientHeight, 'overlay height should match the button height');
    });
  });

  it('inherits fontSize from theme', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(_RaisedButton2.default, { label: 'test' }));

    _chai.assert.strictEqual(wrapper.contains('test'), true);
    _chai.assert.equal(wrapper.find('[children="test"]').prop('style').fontSize, muiTheme.raisedButton.fontSize);
  });

  it('if an svg icon is provided, renders the icon with the correct color', function () {
    var icon = _react2.default.createElement('svg', { color: 'red' });
    var wrapper = shallowWithContext(_react2.default.createElement(_RaisedButton2.default, { icon: icon }));

    var svgIcon = wrapper.find('svg');
    _chai.assert.strictEqual(svgIcon.length, 1, 'should have an svg icon');
    _chai.assert.strictEqual(svgIcon.node.props.color, 'red', 'should have color set as the prop');
  });

  describe('validateLabel', function () {
    var validateLabel = _RaisedButton2.default.propTypes.label;

    it('should throw when using wrong label', function () {
      _chai.assert.strictEqual(validateLabel({}, 'label', 'RaisedButton').message, 'Required prop label or children or icon was not specified in RaisedButton.', 'should return an error');
    });

    it('should not throw when using a valid label', function () {
      _chai.assert.strictEqual(validateLabel({
        label: 0
      }, 'label', 'RaisedButton'), undefined);
    });
  });

  describe('hover state', function () {
    it('should reset the hover state when disabled', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(_RaisedButton2.default, { label: 'foo' }));

      wrapper.children().simulate('mouseEnter');
      _chai.assert.strictEqual(wrapper.state().hovered, true, 'should respond to the event');
      wrapper.setProps({
        disabled: true
      });
      _chai.assert.strictEqual(wrapper.state().hovered, false, 'should reset the state');
    });
  });

  describe('prop: icon', function () {
    it('should keep the style set on the icon', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(_RaisedButton2.default, { icon: _react2.default.createElement(_android2.default, { style: { foo: 'bar' } }) }));

      _chai.assert.strictEqual(wrapper.find(_android2.default).props().style.foo, 'bar');
    });
  });
});