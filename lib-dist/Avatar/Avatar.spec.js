'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _chai = require('chai');

var _Avatar = require('./Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _getMuiTheme = require('../styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Avatar />', function () {
  var muiTheme = (0, _getMuiTheme2.default)();
  var shallowWithContext = function shallowWithContext(node) {
    return (0, _enzyme.shallow)(node, { context: { muiTheme: muiTheme } });
  };

  var testChildren = _react2.default.createElement(
    'div',
    { className: 'unique' },
    'Hello World'
  );

  it('renders children by default', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(
      _Avatar2.default,
      null,
      testChildren
    ));

    _chai.assert.ok(wrapper.contains(testChildren), 'should contain the children');
  });

  it('renders children and an icon if passed in', function () {
    var icon = _react2.default.createElement('div', { className: 'testIcon' });
    var wrapper = shallowWithContext(_react2.default.createElement(
      _Avatar2.default,
      { icon: icon },
      testChildren
    ));

    _chai.assert.ok(wrapper.contains(testChildren), 'should contain the children');
    // Finding by class as avatar clones element and changes the props
    _chai.assert.ok(wrapper.find('.testIcon').length, 'should contain the icon');
  });

  it('only renders an image when the src prop is set', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(
      _Avatar2.default,
      { src: 'face.jpg' },
      testChildren
    ));

    _chai.assert.notOk(!wrapper.contains(testChildren), 'should not contain the children');
    _chai.assert.ok(wrapper.is('img'), 'should be an image');
    _chai.assert.ok(wrapper.is({ src: 'face.jpg' }), 'should have the src passed into props');

    wrapper.setProps({ src: 'meow.jpg' });
    _chai.assert.ok(wrapper.is({ src: 'meow.jpg' }), 'should have changed the src');
  });
}); /* eslint-env mocha */