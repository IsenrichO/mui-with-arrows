'use strict';

var _chai = require('chai');

var _autoprefixer = require('./autoprefixer');

var _autoprefixer2 = _interopRequireDefault(_autoprefixer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */

describe('./utils/autoprefixer', function () {
  var MSIE9_USER_AGENT = 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 7.1; Trident/5.0)';
  var MSIE10_USER_AGENT = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)';

  describe('server side', function () {
    // skip tests on PhantomJS because __defineGetter__ method doesn't work
    if (/PhantomJS/.test(window.navigator.userAgent)) {
      return;
    }

    var savedNavigator = void 0;

    beforeEach(function () {
      savedNavigator = global.navigator;
      global.navigator = undefined;
    });

    afterEach(function () {
      global.navigator = savedNavigator;
    });

    it('should spread properties for display:flex when userAgent is all', function () {
      var autoprefix = (0, _autoprefixer2.default)({
        userAgent: 'all'
      });

      var stylePrepared = autoprefix({
        display: 'inline-flex'
      });

      _chai.assert.deepEqual(stylePrepared, {
        display: '-webkit-box; display: -moz-box; display: -ms-inline-flexbox; display: -webkit-inline-flex; display: inline-flex' });
    });
  });

  it('should prefix for all when userAgent is all', function () {
    var autoprefix = (0, _autoprefixer2.default)({
      userAgent: 'all'
    });

    var stylePrepared = autoprefix({
      transform: 'rotate(90)',
      display: 'flex'
    });

    _chai.assert.deepEqual(stylePrepared, {
      display: 'flex',
      transform: 'rotate(90)',
      WebkitTransform: 'rotate(90)',
      msTransform: 'rotate(90)'
    });
  });

  it('should prefix for the userAgent when we provid a valid one', function () {
    var autoprefix = (0, _autoprefixer2.default)({
      userAgent: MSIE9_USER_AGENT
    });

    var stylePrepared = autoprefix({
      transform: 'rotate(90)'
    });

    _chai.assert.deepEqual(stylePrepared, {
      msTransform: 'rotate(90)'
    });
  });

  it('should not prefix when userAgent is false', function () {
    var autoprefix = (0, _autoprefixer2.default)({
      userAgent: false
    });

    _chai.assert.strictEqual(autoprefix, null);
  });

  it('should not delete ‘display’ property on IE10', function () {
    var autoprefix = (0, _autoprefixer2.default)({
      userAgent: MSIE10_USER_AGENT
    });

    var stylePrepared = autoprefix({
      display: 'inline-block'
    });

    _chai.assert.deepEqual(stylePrepared, {
      display: 'inline-block'
    });
  });
});