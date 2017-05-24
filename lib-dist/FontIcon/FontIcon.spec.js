'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _sinon = require('sinon');

var _enzyme = require('enzyme');

var _chai = require('chai');

var _FontIcon = require('./FontIcon');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _getMuiTheme = require('../styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('<FontIcon />', function () {
  var muiTheme = (0, _getMuiTheme2.default)();
  var shallowWithContext = function shallowWithContext(node) {
    return (0, _enzyme.shallow)(node, { context: { muiTheme: muiTheme } });
  };

  it('renders className', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(_FontIcon2.default, {
      className: 'muidocs-icon-action-home'
    }));

    _chai.assert.ok(wrapper.is('.muidocs-icon-action-home'), 'should contain the className');
  });

  it('renders children by default', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(
      _FontIcon2.default,
      { className: 'material-icons' },
      'home'
    ));

    _chai.assert.ok(wrapper.contains('home'), 'should contain the children');
  });

  it('renders children and color', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(
      _FontIcon2.default,
      { className: 'material-icons', color: 'red' },
      'home'
    ));

    _chai.assert.ok(wrapper.contains('home'), 'should contain the children');
    _chai.assert.equal(wrapper.node.props.style.color, 'red', 'should have color set to red');
  });

  it('renders children and hoverColor when mouseEnter', function () {
    var onMouseEnter = (0, _sinon.spy)();
    var wrapper = shallowWithContext(_react2.default.createElement(
      _FontIcon2.default,
      {
        className: 'material-icons',
        color: 'red',
        hoverColor: 'green',
        onMouseEnter: onMouseEnter
      },
      'home'
    ));

    _chai.assert.ok(wrapper.contains('home'), 'should contain the children');
    _chai.assert.equal(wrapper.node.props.style.color, 'red', 'should have color set to red');
    wrapper.simulate('mouseEnter');
    _chai.assert.equal(wrapper.node.props.style.color, 'green', 'should have color set to green after hover');
    _chai.assert.equal(onMouseEnter.calledOnce, true, 'should have called onMouseEnter callback function');
  });

  it('renders children and call onMouseEnter callback', function () {
    var onMouseEnter = (0, _sinon.spy)();
    var wrapper = shallowWithContext(_react2.default.createElement(
      _FontIcon2.default,
      { className: 'material-icons', onMouseEnter: onMouseEnter },
      'home'
    ));

    wrapper.simulate('mouseEnter');
    _chai.assert.ok(wrapper.contains('home'), 'should contain the children');
    _chai.assert.equal(onMouseEnter.calledOnce, true, 'should have called onMouseEnter callback function');
  });

  it('renders children and call onMouseLeave callback', function () {
    var onMouseLeave = (0, _sinon.spy)();
    var wrapper = shallowWithContext(_react2.default.createElement(
      _FontIcon2.default,
      { className: 'material-icons', onMouseLeave: onMouseLeave },
      'home'
    ));

    wrapper.simulate('mouseLeave');
    _chai.assert.ok(wrapper.contains('home'), 'should contain the children');
    _chai.assert.equal(onMouseLeave.calledOnce, true, 'should have called onMouseLeave callback function');
  });

  it('renders children and overwrite styles', function () {
    var style = {
      backgroundColor: 'red'
    };
    var wrapper = shallowWithContext(_react2.default.createElement(
      _FontIcon2.default,
      { className: 'material-icons', style: style },
      'home'
    ));

    _chai.assert.equal(wrapper.get(0).props.style.backgroundColor, style.backgroundColor, 'should have backgroundColor to red');
  });
});