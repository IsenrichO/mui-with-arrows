'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _chai = require('chai');

var _Step = require('./Step');

var _Step2 = _interopRequireDefault(_Step);

var _getMuiTheme = require('../styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Step />', function () {
  var muiTheme = (0, _getMuiTheme2.default)();
  var shallowWithContext = function shallowWithContext(node) {
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return (0, _enzyme.shallow)(node, {
      context: (0, _extends3.default)({
        muiTheme: muiTheme,
        stepper: { orientation: 'horizontal' }
      }, context)
    });
  };

  it('merges styles and other props into the root node', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(_Step2.default, {
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

  describe('rendering children', function () {
    it('renders children', function () {
      var children = _react2.default.createElement(
        'h1',
        { className: 'hello-world' },
        'Hello World'
      );
      var wrapper = shallowWithContext(_react2.default.createElement(
        _Step2.default,
        { label: 'Step One' },
        children
      ));
      _chai.assert.strictEqual(wrapper.find('.hello-world').length, 1);
    });

    it('renders children with all props passed through', function () {
      var children = [_react2.default.createElement(
        'h1',
        { key: 1, className: 'hello-world' },
        'Hello World'
      ), _react2.default.createElement(
        'p',
        { key: 2, className: 'hay' },
        'How are you?'
      )];
      var wrapper = shallowWithContext(_react2.default.createElement(
        _Step2.default,
        {
          active: false,
          completed: true,
          disabled: true,
          index: 0
        },
        children
      ));
      var child1 = wrapper.find('.hello-world');
      var child2 = wrapper.find('.hay');
      [child1, child2].forEach(function (child) {
        _chai.assert.strictEqual(child.length, 1);
        _chai.assert.strictEqual(child.prop('active'), false);
        _chai.assert.strictEqual(child.prop('completed'), true);
        _chai.assert.strictEqual(child.prop('disabled'), true);
        _chai.assert.strictEqual(child.prop('icon'), 1);
      });
    });

    it('honours children overriding props passed through', function () {
      var children = _react2.default.createElement(
        'h1',
        { active: false, className: 'hello-world' },
        'Hello World'
      );
      var wrapper = shallowWithContext(_react2.default.createElement(
        _Step2.default,
        { active: true, label: 'Step One' },
        children
      ));
      var childWrapper = wrapper.find('.hello-world');
      _chai.assert.strictEqual(childWrapper.prop('active'), false);
    });
  });
}); /* eslint-env mocha */