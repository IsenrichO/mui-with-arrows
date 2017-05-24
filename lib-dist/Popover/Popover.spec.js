'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _chai = require('chai');

var _enzyme = require('enzyme');

var _Popover = require('./Popover');

var _Popover2 = _interopRequireDefault(_Popover);

var _PopoverAnimationDefault = require('./PopoverAnimationDefault');

var _PopoverAnimationDefault2 = _interopRequireDefault(_PopoverAnimationDefault);

var _Paper = require('../Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _getMuiTheme = require('../styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Popover />', function () {
  var muiTheme = (0, _getMuiTheme2.default)();
  var shallowWithContext = function shallowWithContext(node) {
    return (0, _enzyme.shallow)(node, { context: { muiTheme: muiTheme } });
  };
  var mountWithContext = function mountWithContext(node) {
    return (0, _enzyme.mount)(node, { context: { muiTheme: muiTheme } });
  };

  describe('state: closing', function () {
    it('should not create new timeout when popover is already closing', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(_Popover2.default, { open: true }));

      wrapper.setProps({ open: false });
      var timeout = wrapper.instance().timeout;

      wrapper.setProps({ open: false });
      var nextTimeout = wrapper.instance().timeout;

      _chai.assert.strictEqual(timeout, nextTimeout);
    });
  });

  describe('unmounting', function () {
    it('should stop listening correctly', function (done) {
      var wrapper = mountWithContext(_react2.default.createElement(_Popover2.default, { open: true }));

      wrapper.instance().handleScroll();
      wrapper.instance().handleScroll();
      wrapper.unmount();

      setTimeout(function () {
        // Wait for the end of the throttle. Makes sure we don't crash.
        done();
      }, 100);
    });
  });

  describe('prop: animated', function () {
    it('should use a Paper when animated if false', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(_Popover2.default, { open: true, animated: false }));
      var Layer = function Layer() {
        return wrapper.instance().renderLayer();
      };
      var layerWrapper = shallowWithContext(_react2.default.createElement(Layer, null));

      _chai.assert.strictEqual(layerWrapper.find(_Paper2.default).length, 1);
    });

    it('should use an animation when animated if true', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(_Popover2.default, { open: true, animated: true }));
      var Layer = function Layer() {
        return wrapper.instance().renderLayer();
      };
      var layerWrapper = shallowWithContext(_react2.default.createElement(Layer, null));

      _chai.assert.strictEqual(layerWrapper.find(_PopoverAnimationDefault2.default).length, 1);
    });
  });

  describe('IOS detection', function () {
    // skip tests on PhantomJS because __defineGetter__ method seems not working
    if (/PhantomJS/.test(window.navigator.userAgent)) {
      return;
    }

    var input = void 0;

    beforeEach(function () {
      input = document.createElement('input');
      document.body.appendChild(input);
      input.focus();
    });

    afterEach(function () {
      input.remove();
    });

    var getBoundingClientRect = function getBoundingClientRect() {
      return {
        x: 10,
        y: 10,
        width: 10,
        height: 10,
        top: 10,
        right: 10,
        bottom: 10,
        left: 10
      };
    };

    var el = {
      offsetHeight: 10,
      offsetWidth: 10,
      offsetParent: {
        offsetTop: 10,
        offsetParent: null
      },
      offsetTop: 10,
      getBoundingClientRect: getBoundingClientRect
    };
    /* eslint-disable max-len */
    var userAgentsWithIOS = ['Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53', 'Mozilla/5.0 (iPad; CPU OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53', 'Mozilla/5.0 (iPod; U; CPU like Mac OS X; en) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/3A101a Safari/419.3'];
    var nonIOSuserAgents = ['Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0)', 'Mozilla/5.0 (Linux; Android 4.4.4; Nexus 7 Build/KTU84Q) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/33.0.0.0 Safari/537.36', 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.1.0.346 Mobile Safari/534.11+'];
    /* eslint-enable max-len */

    userAgentsWithIOS.forEach(function (agent) {
      it('should use absolute positioning for ' + agent, function () {
        window.navigator.__defineGetter__('userAgent', function () {
          return agent;
        }); // eslint-disable-line no-underscore-dangle,max-len
        var wrapper = mountWithContext(_react2.default.createElement(_Popover2.default, { open: true, animated: true }));
        var result = wrapper.instance().getAnchorPosition(el);
        var expected = { bottom: 30, top: 10, center: 20, left: 10, right: 10, middle: 10, height: 10, width: 10 };
        _chai.assert.deepEqual(result, expected);
      });
    });

    nonIOSuserAgents.forEach(function (agent) {
      it('should use normal positioning for ' + agent, function () {
        window.navigator.__defineGetter__('userAgent', function () {
          return agent;
        }); // eslint-disable-line no-underscore-dangle,max-len
        var wrapper = mountWithContext(_react2.default.createElement(_Popover2.default, { open: true, animated: true }));
        var result = wrapper.instance().getAnchorPosition(el);
        var expected = { bottom: 10, top: 10, center: 10, left: 10, right: 10, middle: 10, height: 10, width: 10 };
        _chai.assert.deepEqual(result, expected);
      });
    });

    after(function () {
      window.navigator.__defineGetter__('userAgent', function getUserAgent() {
        // eslint-disable-line no-underscore-dangle,max-len
        return this.appCodeName + '/' + this.appVersion;
      });
    });
  });
}); /* eslint-env mocha */