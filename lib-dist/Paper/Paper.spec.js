'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _chai = require('chai');

var _Paper = require('./Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _getMuiTheme = require('../styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Paper />', function () {
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
      _Paper2.default,
      null,
      testChildren
    ));

    _chai.assert.ok(wrapper.contains(testChildren), 'should contain the children');
  });

  it('renders children and have borderRadius by default', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(
      _Paper2.default,
      null,
      testChildren
    ));

    _chai.assert.ok(wrapper.contains(testChildren), 'should contain the children');
    _chai.assert.strictEqual(wrapper.prop('style').borderRadius, 2, 'should have round corner');
  });

  it('renders children and should be a circle', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(
      _Paper2.default,
      { circle: true },
      testChildren
    ));

    _chai.assert.ok(wrapper.contains(testChildren), 'should contain the children');
    _chai.assert.strictEqual(wrapper.prop('style').borderRadius, '50%', 'should be a circle');
  });

  it('renders children and does not have rounded corners', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(
      _Paper2.default,
      { rounded: false },
      testChildren
    ));

    _chai.assert.ok(wrapper.contains(testChildren), 'should contain the children');
    _chai.assert.strictEqual(wrapper.prop('style').borderRadius, '0px', 'should not have borderRadius');
  });

  it('renders children and overwrite styles', function () {
    var style = {
      backgroundColor: 'red',
      borderRadius: '70px'
    };
    var wrapper = shallowWithContext(_react2.default.createElement(
      _Paper2.default,
      { style: style },
      testChildren
    ));

    _chai.assert.ok(wrapper.contains(testChildren), 'should contain the children');
    _chai.assert.strictEqual(wrapper.prop('style').backgroundColor, 'red', 'should have red backgroundColor');
    _chai.assert.strictEqual(wrapper.prop('style').borderRadius, '70px', 'should have borderRadius');
  });

  it('renders children and has css transitions by default', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(
      _Paper2.default,
      null,
      testChildren
    ));

    _chai.assert.ok(wrapper.contains(testChildren), 'should contain the children');
    _chai.assert.ok(wrapper.prop('style').transition, 'should have css transitions');
  });

  it('renders children and disable css transitions', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(
      _Paper2.default,
      { transitionEnabled: false },
      testChildren
    ));

    _chai.assert.ok(wrapper.contains(testChildren), 'should contain the children');
    _chai.assert.isNotOk(wrapper.prop('style').transition, 'should not have css transitions');
  });

  it('renders children and change zDepth', function () {
    var zDepth = 3;
    var wrapper = shallowWithContext(_react2.default.createElement(
      _Paper2.default,
      { zDepth: zDepth },
      testChildren
    ));

    _chai.assert.ok(wrapper.contains(testChildren), 'should contain the children');
    _chai.assert.strictEqual(wrapper.prop('style').boxShadow, muiTheme.paper.zDepthShadows[zDepth - 1], 'should have good zDepthShadows');
  });
}); /* eslint-env mocha */