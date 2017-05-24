'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _chai = require('chai');

var _StepContent = require('./StepContent');

var _StepContent2 = _interopRequireDefault(_StepContent);

var _getMuiTheme = require('../styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<StepContent />', function () {
  var muiTheme = (0, _getMuiTheme2.default)();
  var shallowWithContext = function shallowWithContext(node) {
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return (0, _enzyme.shallow)(node, {
      context: (0, _extends3.default)({
        muiTheme: muiTheme,
        stepper: { orientation: 'vertical' }
      }, context)
    });
  };

  it('renders a div', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(_StepContent2.default, null));
    _chai.assert.ok(wrapper.is('div'));
  });

  it('merges styles and other props into the root node', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(_StepContent2.default, {
      style: { paddingRight: 200, color: 'purple', border: '1px solid tomato' },
      role: 'hello'
    }));

    var _wrapper$props = wrapper.props(),
        style = _wrapper$props.style,
        role = _wrapper$props.role;

    _chai.assert.strictEqual(style.paddingRight, 200);
    _chai.assert.strictEqual(style.color, 'purple');
    _chai.assert.strictEqual(style.border, '1px solid tomato');
    _chai.assert.strictEqual(role, 'hello');
  });

  it('renders children inside an ExpandTransition group', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(
      _StepContent2.default,
      null,
      _react2.default.createElement(
        'div',
        { className: 'test-content' },
        'This is my content!'
      )
    ));
    var transitionGroup = wrapper.find('ExpandTransition');
    _chai.assert.ok(transitionGroup.length);
    var content = transitionGroup.find('.test-content');
    _chai.assert.ok(content.length);
    _chai.assert.strictEqual(content.props().children, 'This is my content!');
  });
}); /* eslint-env mocha */