'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _chai = require('chai');

var _NestedList = require('./NestedList');

var _NestedList2 = _interopRequireDefault(_NestedList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */

describe('<NestedList />', function () {
  describe('prop: open', function () {
    it('should render the children when open is true', function () {
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
        _NestedList2.default,
        { nestedLevel: 1, open: true },
        _react2.default.createElement('div', null),
        _react2.default.createElement('div', null)
      ));
      _chai.assert.strictEqual(wrapper.children().length, 2);
    });

    it('should not render the children when open is false', function () {
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
        _NestedList2.default,
        { nestedLevel: 1, open: false },
        _react2.default.createElement('div', null),
        _react2.default.createElement('div', null)
      ));
      _chai.assert.strictEqual(wrapper.children().length, 0);
    });
  });
});