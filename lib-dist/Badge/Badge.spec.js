'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _chai = require('chai');

var _Badge = require('./Badge');

var _Badge2 = _interopRequireDefault(_Badge);

var _getMuiTheme = require('../styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Badge />', function () {
  var muiTheme = (0, _getMuiTheme2.default)();
  var shallowWithContext = function shallowWithContext(node) {
    return (0, _enzyme.shallow)(node, { context: { muiTheme: muiTheme } });
  };
  var badgeTheme = muiTheme.badge;
  var testChildren = _react2.default.createElement(
    'div',
    { className: 'unique' },
    'Hello World'
  );

  it('renders children and badgeContent', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(
      _Badge2.default,
      { badgeContent: 10 },
      testChildren
    ));

    _chai.assert.ok(wrapper.contains(testChildren), 'should contain the children');
    _chai.assert.ok(wrapper.find('span').length, 'should contain the badgeContent');
  });

  it('renders children and overwrite badge styles', function () {
    var badgeStyle = {
      backgroundColor: 'red'
    };
    var wrapper = shallowWithContext(_react2.default.createElement(
      _Badge2.default,
      { badgeContent: 10, badgeStyle: badgeStyle },
      testChildren
    ));

    _chai.assert.ok(wrapper.contains(testChildren), 'should contain the children');
    _chai.assert.equal(wrapper.find('span').node.props.style.backgroundColor, badgeStyle.backgroundColor, 'should overwrite badge backgroundColor');
  });

  it('renders children by default', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(
      _Badge2.default,
      { badgeContent: 10 },
      testChildren
    ));

    _chai.assert.ok(wrapper.contains(testChildren), 'should contain the children');
  });

  it('renders children and className', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(
      _Badge2.default,
      { badgeContent: 10, className: 'testClassName' },
      testChildren
    ));

    _chai.assert.ok(wrapper.contains(testChildren), 'should contain the children');
    _chai.assert.ok(wrapper.is('.testClassName'), 'should contain the className');
  });

  it('renders children and have primary styles', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(
      _Badge2.default,
      { badgeContent: 10, primary: true },
      testChildren
    ));

    _chai.assert.ok(wrapper.contains(testChildren), 'should contain the children');
    _chai.assert.equal(wrapper.find('span').node.props.style.backgroundColor, badgeTheme.primaryColor, 'should have primary badge backgroundColor');
    _chai.assert.equal(wrapper.find('span').node.props.style.color, badgeTheme.primaryTextColor, 'should have primary badge text color');
  });

  it('renders children and have secondary styles', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(
      _Badge2.default,
      { badgeContent: 10, secondary: true },
      testChildren
    ));

    _chai.assert.ok(wrapper.contains(testChildren), 'should contain the children');
    _chai.assert.equal(wrapper.find('span').node.props.style.backgroundColor, badgeTheme.secondaryColor, 'should have secondary badge backgroundColor');
    _chai.assert.equal(wrapper.find('span').node.props.style.color, badgeTheme.secondaryTextColor, 'should have secondary badge text color');
  });

  it('renders children and overwrite root styles', function () {
    var style = {
      backgroundColor: 'red'
    };
    var wrapper = shallowWithContext(_react2.default.createElement(
      _Badge2.default,
      { badgeContent: 10, style: style },
      testChildren
    ));

    _chai.assert.ok(wrapper.contains(testChildren), 'should contain the children');
    _chai.assert.equal(wrapper.node.props.style.backgroundColor, style.backgroundColor, 'should overwrite badge backgroundColor');
  });
}); /* eslint-env mocha */