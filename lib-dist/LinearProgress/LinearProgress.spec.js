'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _chai = require('chai');

var _LinearProgress = require('./LinearProgress');

var _LinearProgress2 = _interopRequireDefault(_LinearProgress);

var _getMuiTheme = require('../styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<LinearProgress />', function () {
  var muiTheme = (0, _getMuiTheme2.default)();
  var shallowWithContext = function shallowWithContext(node) {
    return (0, _enzyme.shallow)(node, { context: { muiTheme: muiTheme } });
  };

  describe('props: min', function () {
    it('should work when min equal zero', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(_LinearProgress2.default, {
        mode: 'determinate',
        value: 50,
        min: 0,
        max: 100
      }));

      _chai.assert.strictEqual(wrapper.children().props().style.width, '50%', 'should compute the width correctly');
    });

    it('should work when min is different to zero', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(_LinearProgress2.default, {
        mode: 'determinate',
        value: 75,
        min: 50,
        max: 100
      }));

      _chai.assert.strictEqual(wrapper.children().props().style.width, '50%', 'should compute the width correctly');
    });

    it('should work when value equal min', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(_LinearProgress2.default, {
        mode: 'determinate',
        value: 50,
        min: 50,
        max: 100
      }));

      _chai.assert.strictEqual(wrapper.children().props().style.width, '0%', 'should compute the width correctly');
    });
  });
}); /* eslint-env mocha */