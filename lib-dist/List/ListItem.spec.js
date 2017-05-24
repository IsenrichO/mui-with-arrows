'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _chai = require('chai');

var _ListItem = require('./ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

var _EnhancedButton = require('../internal/EnhancedButton');

var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);

var _getMuiTheme = require('../styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _NestedList = require('./NestedList');

var _NestedList2 = _interopRequireDefault(_NestedList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<ListItem />', function () {
  var muiTheme = (0, _getMuiTheme2.default)();
  var shallowWithContext = function shallowWithContext(node) {
    return (0, _enzyme.shallow)(node, { context: { muiTheme: muiTheme } });
  };

  it('should render an EnhancedButton', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(_ListItem2.default, null));
    var enhancedButton = wrapper.find(_EnhancedButton2.default);
    _chai.assert.ok(enhancedButton.length);
  });

  it('should display a list-item with text if primaryText is specified', function () {
    var testText = 'Primary Text';
    var wrapper = shallowWithContext(_react2.default.createElement(_ListItem2.default, {
      primaryText: testText
    }));
    var enhancedButton = wrapper.find(_EnhancedButton2.default);

    _chai.assert.strictEqual(enhancedButton.children().text(), testText);
  });

  it('should display a list-item elment with a class if specified', function () {
    var testClass = 'test-class';
    var wrapper = shallowWithContext(_react2.default.createElement(_ListItem2.default, {
      className: testClass
    }));
    var enhancedButton = wrapper.find(_EnhancedButton2.default);
    _chai.assert.strictEqual(enhancedButton.prop('className'), testClass);
  });

  it('should display a disabled list-item if specified.', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(_ListItem2.default, {
      disabled: true
    }));
    _chai.assert.notOk(wrapper.find(_EnhancedButton2.default).length, 'should not have an EnhancedButton');
  });

  it('should display a disabled list-item with a class if specified.', function () {
    var testClass = 'test-class';
    var wrapper = shallowWithContext(_react2.default.createElement(_ListItem2.default, {
      className: testClass,
      disabled: true
    }));

    _chai.assert.notOk(wrapper.find(_EnhancedButton2.default).length, 'should not have an EnhancedButton');
    _chai.assert.strictEqual(wrapper.find('.' + testClass).length, 1, 'should have a div with the test class');
  });

  it('should display a checkbox in the list-item if specified.', function () {
    var testClass = 'test-class';
    var wrapper = shallowWithContext(_react2.default.createElement(_ListItem2.default, {
      leftCheckbox: _react2.default.createElement('div', { className: 'test-checkbox' }),
      className: testClass
    }));
    _chai.assert.ok(wrapper.find('.test-checkbox').length);
    _chai.assert.strictEqual(wrapper.find('.' + testClass).length, 1, 'should have a div with the test class');
  });

  describe('prop: primaryTogglesNestedList', function () {
    it('should toggle nested list when true', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(_ListItem2.default, {
        primaryTogglesNestedList: true,
        nestedItems: [_react2.default.createElement(_ListItem2.default, { key: 1 })]
      }));
      var primaryTextButton = wrapper.find(_EnhancedButton2.default);

      _chai.assert.strictEqual(wrapper.find(_NestedList2.default).props().open, false);

      primaryTextButton.simulate('touchTap', { stopPropagation: function stopPropagation() {} });
      _chai.assert.strictEqual(wrapper.find(_NestedList2.default).props().open, true);

      primaryTextButton.simulate('touchTap', { stopPropagation: function stopPropagation() {} });
      _chai.assert.strictEqual(wrapper.find(_NestedList2.default).props().open, false);
    });

    it('should not render primary text button when false', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(_ListItem2.default, {
        primaryTogglesNestedList: false,
        nestedItems: [_react2.default.createElement(_ListItem2.default, { key: 1 })]
      }));

      _chai.assert.strictEqual(wrapper.filter(_EnhancedButton2.default).length, 0);
    });
  });

  describe('prop: open', function () {
    it('should initially open nested list', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(_ListItem2.default, {
        initiallyOpen: true,
        nestedItems: [_react2.default.createElement(_ListItem2.default, { key: 1 })]
      }));

      _chai.assert.strictEqual(wrapper.find(_NestedList2.default).length > 0, true);
      _chai.assert.strictEqual(wrapper.find(_NestedList2.default).props().open, true);
    });

    it('should toggle nested list', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(_ListItem2.default, {
        open: false,
        nestedItems: [_react2.default.createElement(_ListItem2.default, { key: 1 })]
      }));

      _chai.assert.strictEqual(wrapper.find(_NestedList2.default).props().open, false);
      wrapper.setProps({
        open: true
      });
      _chai.assert.strictEqual(wrapper.find(_NestedList2.default).props().open, true);
    });

    it('should not control the state', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(_ListItem2.default, {
        initiallyOpen: false,
        primaryTogglesNestedList: true,
        nestedItems: [_react2.default.createElement(_ListItem2.default, { key: 1 })]
      }));

      var primaryTextButton = wrapper.find(_EnhancedButton2.default);
      primaryTextButton.simulate('touchTap', { stopPropagation: function stopPropagation() {} });
      _chai.assert.strictEqual(wrapper.find(_NestedList2.default).props().open, true);
    });

    it('should control the state', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(_ListItem2.default, {
        open: false,
        primaryTogglesNestedList: true,
        nestedItems: [_react2.default.createElement(_ListItem2.default, { key: 1 })]
      }));

      var primaryTextButton = wrapper.find(_EnhancedButton2.default);
      primaryTextButton.simulate('touchTap', { stopPropagation: function stopPropagation() {} });
      _chai.assert.strictEqual(wrapper.find(_NestedList2.default).props().open, false);
    });
  });

  describe('prop: hoverColor', function () {
    var testColor = '#ededed';

    it('should use a background color on hover if hoverColor is specified', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(_ListItem2.default, { hoverColor: testColor }));
      wrapper.find(_EnhancedButton2.default).simulate('mouseEnter');
      _chai.assert.strictEqual(wrapper.find(_EnhancedButton2.default).props().style.backgroundColor, testColor);
    });

    it('should use a background color if isKeyboardFocused is true', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(_ListItem2.default, { hoverColor: testColor, isKeyboardFocused: true }));
      _chai.assert.strictEqual(wrapper.find(_EnhancedButton2.default).props().style.backgroundColor, testColor);
    });
  });

  describe('hover state', function () {
    it('should reset the hover state when disabled', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(_ListItem2.default, { primaryText: 'foo' }));

      wrapper.find(_EnhancedButton2.default).simulate('mouseEnter');
      _chai.assert.strictEqual(wrapper.state().hovered, true, 'should respond to the event');
      wrapper.setProps({
        disabled: true
      });
      _chai.assert.strictEqual(wrapper.state().hovered, false, 'should reset the state');
    });
  });

  describe('prop: containerElement', function () {
    it('should use the given string containerElement prop', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(_ListItem2.default, {
        containerElement: 'a',
        primaryText: 'Links are great'
      }));
      var button = wrapper.find(_EnhancedButton2.default).dive({ context: { muiTheme: muiTheme } });
      _chai.assert.strictEqual(button.is('a'), true, 'should match an a element');
    });

    it('should use the given ReactElement containerElement', function () {
      var CustomElement = function CustomElement(props) {
        return _react2.default.createElement('a', props);
      };
      var wrapper = shallowWithContext(_react2.default.createElement(_ListItem2.default, {
        containerElement: _react2.default.createElement(CustomElement, { someProp: 'yuuuuuge' }),
        primaryText: 'Custom links are even greater'
      }));
      var button = wrapper.find(_EnhancedButton2.default).dive({ context: { muiTheme: muiTheme } });
      _chai.assert.strictEqual(button.is(CustomElement), true, 'should match the custom element');
    });
  });
}); /* eslint-env mocha */