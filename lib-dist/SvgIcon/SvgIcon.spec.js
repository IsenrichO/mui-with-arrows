'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _sinon = require('sinon');

var _enzyme = require('enzyme');

var _chai = require('chai');

var _SvgIcon = require('./SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

var _getMuiTheme = require('../styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('<SvgIcon />', function () {
  var muiTheme = (0, _getMuiTheme2.default)();
  var shallowWithContext = function shallowWithContext(node) {
    return (0, _enzyme.shallow)(node, { context: { muiTheme: muiTheme } });
  };
  var path = _react2.default.createElement('path', { d: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' });

  it('renders children by default', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(
      _SvgIcon2.default,
      null,
      path
    ));

    _chai.assert.ok(wrapper.contains(path), 'should contain the children');
  });

  it('renders children and color', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(
      _SvgIcon2.default,
      { color: 'red' },
      path
    ));

    _chai.assert.ok(wrapper.contains(path), 'should contain the children');
    _chai.assert.equal(wrapper.node.props.style.fill, 'red', 'should have color set to red');
  });

  it('renders children and hoverColor when mouseEnter', function () {
    var onMouseEnter = (0, _sinon.spy)();
    var wrapper = shallowWithContext(_react2.default.createElement(
      _SvgIcon2.default,
      {
        className: 'material-icons',
        color: 'red',
        hoverColor: 'green',
        onMouseEnter: onMouseEnter
      },
      path
    ));

    _chai.assert.ok(wrapper.contains(path), 'should contain the children');
    _chai.assert.equal(wrapper.node.props.style.fill, 'red', 'should have color set to red');
    wrapper.simulate('mouseEnter');
    _chai.assert.equal(wrapper.node.props.style.fill, 'green', 'should have color set to green after hover');
    _chai.assert.equal(onMouseEnter.calledOnce, true, 'should have called onMouseEnter callback function');
  });

  it('renders children and call onMouseEnter callback', function () {
    var onMouseEnter = (0, _sinon.spy)();
    var wrapper = shallowWithContext(_react2.default.createElement(
      _SvgIcon2.default,
      { onMouseEnter: onMouseEnter, hoverColor: 'green' },
      path
    ));

    _chai.assert.ok(wrapper.contains(path), 'should contain the children');
    wrapper.simulate('mouseEnter');
    _chai.assert.equal(onMouseEnter.calledOnce, true, 'should have called onMouseEnter callback function');
  });

  it('renders children and call onMouseEnter callback even when hoverColor is not set', function () {
    var onMouseEnter = (0, _sinon.spy)();
    var wrapper = shallowWithContext(_react2.default.createElement(
      _SvgIcon2.default,
      { onMouseEnter: onMouseEnter },
      path
    ));

    _chai.assert.ok(wrapper.contains(path), 'should contain the children');
    wrapper.simulate('mouseEnter');
    _chai.assert.equal(onMouseEnter.calledOnce, true, 'should have called onMouseEnter callback function');
  });

  it('renders children and call onMouseLeave callback', function () {
    var onMouseLeave = (0, _sinon.spy)();
    var wrapper = shallowWithContext(_react2.default.createElement(
      _SvgIcon2.default,
      { onMouseLeave: onMouseLeave, hoverColor: 'green' },
      path
    ));

    _chai.assert.ok(wrapper.contains(path), 'should contain the children');
    wrapper.simulate('mouseLeave');
    _chai.assert.equal(onMouseLeave.calledOnce, true, 'should have called onMouseLeave callback function');
  });

  it('renders children and call onMouseLeave callback even when hoverColor is not set', function () {
    var onMouseLeave = (0, _sinon.spy)();
    var wrapper = shallowWithContext(_react2.default.createElement(
      _SvgIcon2.default,
      { onMouseLeave: onMouseLeave },
      path
    ));

    _chai.assert.ok(wrapper.contains(path), 'should contain the children');
    wrapper.simulate('mouseLeave');
    _chai.assert.equal(onMouseLeave.calledOnce, true, 'should have called onMouseLeave callback function');
  });

  it('renders children and overwrite styles', function () {
    var style = {
      backgroundColor: 'red'
    };
    var wrapper = shallowWithContext(_react2.default.createElement(
      _SvgIcon2.default,
      { style: style },
      path
    ));

    _chai.assert.equal(wrapper.get(0).props.style.backgroundColor, style.backgroundColor, 'should have backgroundColor to red');
  });
});