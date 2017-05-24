'use strict';

var _rtl = require('./rtl');

var _rtl2 = _interopRequireDefault(_rtl);

var _chai = require('chai');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */

describe('./utils/rtl', function () {
  it('should ignore the style if directionInvariant is true', function () {
    var actual = (0, _rtl2.default)({
      isRtl: true
    })({
      directionInvariant: true,
      right: 10
    });

    _chai.assert.deepEqual(actual, {
      directionInvariant: true,
      right: 10
    });
  });
});