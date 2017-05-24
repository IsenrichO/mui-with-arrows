'use strict';

var _chai = require('chai');

var _index = require('./index');

var MaterialUI = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/* eslint-env mocha */
/**
 * Important: This test also serves as a point to
 * import the entire lib for coverage reporting
 */

describe('Material UI', function () {
  return it('should have exports', function () {
    return _chai.assert.ok(MaterialUI);
  });
});