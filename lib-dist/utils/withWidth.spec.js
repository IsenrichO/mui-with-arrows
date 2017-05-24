'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _chai = require('chai');

var _withWidth = require('./withWidth');

var _withWidth2 = _interopRequireDefault(_withWidth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */

describe('utils/withWidth', function () {
  var Dumb = function Dumb() {
    return _react2.default.createElement('div', null);
  };
  var DumbWithWidth = (0, _withWidth2.default)()(Dumb);

  describe('server side rendering', function () {
    it('should not render the children as the width is unknown', function () {
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(DumbWithWidth, null));
      _chai.assert.strictEqual(wrapper.type(), null, 'should render nothing');
    });
  });

  describe('prop: width', function () {
    it('should be able to override it', function () {
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(DumbWithWidth, { width: _withWidth.MEDIUM }));

      _chai.assert.strictEqual(wrapper.find(Dumb).props().width, _withWidth.MEDIUM);
    });
  });

  describe('browser', function () {
    it('should provide the right width to the child element', function () {
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(DumbWithWidth, null));

      _chai.assert.strictEqual(wrapper.find(Dumb).props().width, _withWidth.LARGE);
    });
  });
});