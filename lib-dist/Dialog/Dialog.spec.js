'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Dialog = require('./Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _sinon = require('sinon');

var _enzyme = require('enzyme');

var _chai = require('chai');

var _testUtils = require('react-dom/test-utils');

var _testUtils2 = _interopRequireDefault(_testUtils);

var _getMuiTheme = require('../styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Dialog />', function () {
  var muiTheme = (0, _getMuiTheme2.default)();
  var mountWithContext = function mountWithContext(node) {
    return (0, _enzyme.mount)(node, { context: { muiTheme: muiTheme } });
  };

  it('appends a dialog to the document body', function () {
    var testClass = 'test-dialog-class';
    mountWithContext(_react2.default.createElement(_Dialog2.default, {
      open: true,
      contentClassName: testClass
    }));

    var dialogEl = document.getElementsByClassName(testClass)[0];
    _chai.assert.ok(dialogEl);
  });

  it('registers events on dialog actions', function () {
    var clickSpy = (0, _sinon.spy)();
    var testClass = 'dialog-action';

    mountWithContext(_react2.default.createElement(_Dialog2.default, {
      open: true,
      actions: [_react2.default.createElement(
        'button',
        {
          key: 'a',
          onClick: clickSpy,
          className: testClass
        },
        'test'
      )]
    }));

    var actionEl = document.getElementsByClassName(testClass)[0];
    _chai.assert.ok(actionEl);

    _testUtils2.default.Simulate.click(actionEl);
    _chai.assert.ok(clickSpy.called);
  });
}); /* eslint-env mocha */