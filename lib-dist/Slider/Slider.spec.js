'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _chai = require('chai');

var _sinon = require('sinon');

var _keycode = require('keycode');

var _keycode2 = _interopRequireDefault(_keycode);

var _Slider = require('./Slider');

var _Slider2 = _interopRequireDefault(_Slider);

var _getMuiTheme = require('../styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Slider />', function () {
  var muiTheme = (0, _getMuiTheme2.default)();
  var shallowWithContext = function shallowWithContext(node) {
    return (0, _enzyme.shallow)(node, { context: { muiTheme: muiTheme } });
  };
  var muiThemeRtl = (0, _getMuiTheme2.default)({ isRtl: true });
  var shallowWithRTLContext = function shallowWithRTLContext(node) {
    return (0, _enzyme.shallow)(node, { context: { muiTheme: muiThemeRtl } });
  };

  var getThumbElement = function getThumbElement(shallowWrapper) {
    return shallowWrapper.childAt(0).childAt(0).childAt(2);
  };

  var getTrackContainer = function getTrackContainer(shallowWrapper) {
    return shallowWrapper.childAt(0);
  };

  it('renders slider and the hidden input', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(_Slider2.default, { name: 'slider' }));

    _chai.assert.ok(wrapper.find('input[type="hidden"]').length, 'should contain a hidden input');
  });

  it('renders slider with an initial value', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(_Slider2.default, { name: 'slider', value: 0.5 }));

    _chai.assert.strictEqual(wrapper.state().value, 0.5, 'should use the value property for the value state');
    _chai.assert.strictEqual(wrapper.find('input[type="hidden"]').props().value, wrapper.state().value, 'the input value should be equal state.value');
  });

  it('renders slider as a required element in a form', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(_Slider2.default, { name: 'slider', required: true }));

    _chai.assert.strictEqual(wrapper.find('input[type="hidden"]').props().required, true);
  });

  it('checks root node properties', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(_Slider2.default, {
      name: 'slider',
      style: {
        backgroundColor: 'red'
      }
    }));

    _chai.assert.strictEqual(wrapper.props().style.backgroundColor, 'red', 'root element should have the style object');
  });

  it('checks slider initial state', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(_Slider2.default, { name: 'slider' }));

    _chai.assert.strictEqual(wrapper.state().active, false);
    _chai.assert.strictEqual(wrapper.state().dragging, false);
    _chai.assert.strictEqual(wrapper.state().focused, false);
    _chai.assert.strictEqual(wrapper.state().hovered, false);
  });

  it('checks drag start state', function () {
    var handleDragStart = (0, _sinon.spy)();
    var wrapper = shallowWithContext(_react2.default.createElement(_Slider2.default, { name: 'slider', onDragStart: handleDragStart }));

    wrapper.instance().onDragStart();
    _chai.assert.strictEqual(handleDragStart.callCount, 1);
    _chai.assert.strictEqual(wrapper.state().active, true);
    _chai.assert.strictEqual(wrapper.state().dragging, true);
  });

  it('checks drag stop state', function () {
    var handleDragStop = (0, _sinon.spy)();
    var wrapper = shallowWithContext(_react2.default.createElement(_Slider2.default, { name: 'slider', onDragStop: handleDragStop }));

    wrapper.instance().onDragStop();
    _chai.assert.strictEqual(handleDragStop.callCount, 1);
    _chai.assert.strictEqual(wrapper.state().active, false);
    _chai.assert.strictEqual(wrapper.state().dragging, false);
  });

  describe('percent', function () {
    it('checks that percent and value are being updated correctly', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(_Slider2.default, {
        name: 'slider',
        step: 0.5,
        min: 1,
        max: 5
      }));

      wrapper.setProps({
        value: 1
      });

      _chai.assert.strictEqual(wrapper.state().value, 1);
      _chai.assert.strictEqual(getThumbElement(wrapper).props().style.left, '0%');
    });

    it('checks that value and percent are updated correctly when max prop changes', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(_Slider2.default, {
        name: 'slider',
        value: 2,
        min: 0,
        max: 10
      }));

      _chai.assert.strictEqual(wrapper.state().value, 2);
      _chai.assert.strictEqual(getThumbElement(wrapper).props().style.left, '20%');

      wrapper.setProps({ max: 4 });

      _chai.assert.strictEqual(wrapper.state().value, 2);
      _chai.assert.strictEqual(getThumbElement(wrapper).props().style.left, '50%');
    });
  });

  it('checks events do not fire on the handle when the slider is disabled', function () {
    var handleDragStart = (0, _sinon.spy)();
    var handleChange = (0, _sinon.spy)();
    var wrapper = shallowWithContext(_react2.default.createElement(_Slider2.default, {
      name: 'slider',
      disabled: true,
      onDragStart: handleDragStart,
      onChange: handleChange
    }));
    var trackContainer = getTrackContainer(wrapper);

    trackContainer.simulate('keydown', {
      keyCode: 33,
      preventDefault: function preventDefault() {}
    });
    trackContainer.simulate('mousedown');
    trackContainer.simulate('touchstart');

    _chai.assert.strictEqual(handleDragStart.callCount, 0);
    _chai.assert.strictEqual(handleChange.callCount, 0);
  });

  it('simulates focus event', function () {
    var handleFocus = (0, _sinon.spy)();
    var wrapper = shallowWithContext(_react2.default.createElement(_Slider2.default, { name: 'slider', onFocus: handleFocus }));

    getTrackContainer(wrapper).simulate('focus');
    _chai.assert.strictEqual(handleFocus.callCount, 1);
  });

  it('simulates blur event', function () {
    var handleBlur = (0, _sinon.spy)();
    var wrapper = shallowWithContext(_react2.default.createElement(_Slider2.default, { name: 'slider', onBlur: handleBlur }));

    getTrackContainer(wrapper).simulate('blur');
    _chai.assert.strictEqual(handleBlur.callCount, 1);
  });

  it('simulates onmouseenter event', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(_Slider2.default, { name: 'slider' }));

    getTrackContainer(wrapper).simulate('mouseenter');
    _chai.assert.strictEqual(wrapper.state().hovered, true);
  });

  it('simulates onmouseleave event', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(_Slider2.default, { name: 'slider' }));

    getTrackContainer(wrapper).simulate('mouseleave');
    _chai.assert.strictEqual(wrapper.state().hovered, false);
  });

  describe('keydown', function () {
    it('simulates keydown event with a non tracked key', function () {
      var handleChange = (0, _sinon.spy)();
      var wrapper = shallowWithContext(_react2.default.createElement(_Slider2.default, { name: 'slider', onChange: handleChange }));
      var event = {
        keyCode: (0, _keycode2.default)('enter'),
        preventDefault: (0, _sinon.spy)()
      };

      getTrackContainer(wrapper).simulate('keydown', event);
      _chai.assert.strictEqual(event.preventDefault.callCount, 0);
    });

    it('simulates the end key', function () {
      var handleChange = (0, _sinon.spy)();
      var wrapper = shallowWithContext(_react2.default.createElement(_Slider2.default, { name: 'slider', onChange: handleChange }));

      getTrackContainer(wrapper).simulate('keydown', {
        keyCode: (0, _keycode2.default)('end'),
        preventDefault: function preventDefault() {}
      });
      _chai.assert.strictEqual(handleChange.callCount, 1);
      _chai.assert.strictEqual(wrapper.state().value, 1);
    });

    it('simulates the up arrow key', function () {
      var handleChange = (0, _sinon.spy)();
      var wrapper = shallowWithContext(_react2.default.createElement(_Slider2.default, { name: 'slider', onChange: handleChange }));
      var previousValue = wrapper.state().value;

      getTrackContainer(wrapper).simulate('keydown', {
        keyCode: (0, _keycode2.default)('up'),
        preventDefault: function preventDefault() {}
      });
      _chai.assert.strictEqual(handleChange.callCount, 1);
      _chai.assert.strictEqual(wrapper.state().value > previousValue, true);
    });

    it('simulates the up arrow key on an x-reverse axis slider', function () {
      var handleChange = (0, _sinon.spy)();
      var wrapper = shallowWithContext(_react2.default.createElement(_Slider2.default, { name: 'slider', axis: 'x-reverse', onChange: handleChange }));
      var previousValue = wrapper.state().value;

      getTrackContainer(wrapper).simulate('keydown', {
        keyCode: (0, _keycode2.default)('up'),
        preventDefault: function preventDefault() {}
      });
      _chai.assert.strictEqual(handleChange.callCount, 1);
      _chai.assert.strictEqual(wrapper.state().value > previousValue, true);
    });

    it('simulates the up arrow key on a rtl slider', function () {
      var handleChange = (0, _sinon.spy)();
      var wrapper = shallowWithRTLContext(_react2.default.createElement(_Slider2.default, { name: 'slider', onChange: handleChange }));
      var previousValue = wrapper.state().value;

      getTrackContainer(wrapper).simulate('keydown', {
        keyCode: (0, _keycode2.default)('up'),
        preventDefault: function preventDefault() {}
      });
      _chai.assert.strictEqual(handleChange.callCount, 1);
      _chai.assert.strictEqual(wrapper.state().value > previousValue, true);
    });

    it('simulates the up arrow key on a y axis slider', function () {
      var handleChange = (0, _sinon.spy)();
      var wrapper = shallowWithContext(_react2.default.createElement(_Slider2.default, { name: 'slider', axis: 'y', onChange: handleChange }));
      var previousValue = wrapper.state().value;

      getTrackContainer(wrapper).simulate('keydown', {
        keyCode: (0, _keycode2.default)('up'),
        preventDefault: function preventDefault() {}
      });
      _chai.assert.strictEqual(handleChange.callCount, 1);
      _chai.assert.strictEqual(wrapper.state().value > previousValue, true);
    });

    it('simulates the up arrow key on a y-reverse axis slider', function () {
      var handleChange = (0, _sinon.spy)();
      var wrapper = shallowWithContext(_react2.default.createElement(_Slider2.default, { name: 'slider', axis: 'y-reverse', onChange: handleChange }));

      getTrackContainer(wrapper).simulate('keydown', {
        keyCode: (0, _keycode2.default)('up'),
        preventDefault: function preventDefault() {}
      });
      _chai.assert.strictEqual(handleChange.callCount, 0);
      _chai.assert.strictEqual(wrapper.state().value, 0);
    });

    it('simulates the right arrow key', function () {
      var handleChange = (0, _sinon.spy)();
      var wrapper = shallowWithContext(_react2.default.createElement(_Slider2.default, { name: 'slider', onChange: handleChange }));
      var previousValue = wrapper.state().value;

      getTrackContainer(wrapper).simulate('keydown', {
        keyCode: (0, _keycode2.default)('right'),
        preventDefault: function preventDefault() {}
      });
      _chai.assert.strictEqual(handleChange.callCount, 1);
      _chai.assert.strictEqual(wrapper.state().value > previousValue, true);
    });

    it('simulates the right arrow key on an x-reverse axis slider', function () {
      var handleChange = (0, _sinon.spy)();
      var wrapper = shallowWithContext(_react2.default.createElement(_Slider2.default, { name: 'slider', axis: 'x-reverse', onChange: handleChange }));

      getTrackContainer(wrapper).simulate('keydown', {
        keyCode: (0, _keycode2.default)('right'),
        preventDefault: function preventDefault() {}
      });
      _chai.assert.strictEqual(handleChange.callCount, 0);
      _chai.assert.strictEqual(wrapper.state().value, 0);
    });

    it('simulates the right arrow key on a rtl slider', function () {
      var handleChange = (0, _sinon.spy)();
      var wrapper = shallowWithRTLContext(_react2.default.createElement(_Slider2.default, { name: 'slider', onChange: handleChange }));

      getTrackContainer(wrapper).simulate('keydown', {
        keyCode: (0, _keycode2.default)('right'),
        preventDefault: function preventDefault() {}
      });
      _chai.assert.strictEqual(handleChange.callCount, 0);
      _chai.assert.strictEqual(wrapper.state().value, 0);
    });

    it('simulates the right arrow key on an x-reverse rtl slider', function () {
      var handleChange = (0, _sinon.spy)();
      var wrapper = shallowWithRTLContext(_react2.default.createElement(_Slider2.default, { name: 'slider', axis: 'x-reverse', onChange: handleChange }));
      var previousValue = wrapper.state().value;

      getTrackContainer(wrapper).simulate('keydown', {
        keyCode: (0, _keycode2.default)('right'),
        preventDefault: function preventDefault() {}
      });
      _chai.assert.strictEqual(handleChange.callCount, 1);
      _chai.assert.strictEqual(wrapper.state().value > previousValue, true);
    });

    it('simulates the right arrow key on an y axis slider', function () {
      var handleChange = (0, _sinon.spy)();
      var wrapper = shallowWithContext(_react2.default.createElement(_Slider2.default, { name: 'slider', axis: 'y', onChange: handleChange }));
      var previousValue = wrapper.state().value;

      getTrackContainer(wrapper).simulate('keydown', {
        keyCode: (0, _keycode2.default)('right'),
        preventDefault: function preventDefault() {}
      });
      _chai.assert.strictEqual(handleChange.callCount, 1);
      _chai.assert.strictEqual(wrapper.state().value > previousValue, true);
    });

    it('simulates the right arrow key on an y-reverse axis slider', function () {
      var handleChange = (0, _sinon.spy)();
      var wrapper = shallowWithContext(_react2.default.createElement(_Slider2.default, { name: 'slider', axis: 'y-reverse', onChange: handleChange }));
      var previousValue = wrapper.state().value;

      getTrackContainer(wrapper).simulate('keydown', {
        keyCode: (0, _keycode2.default)('right'),
        preventDefault: function preventDefault() {}
      });
      _chai.assert.strictEqual(handleChange.callCount, 1);
      _chai.assert.strictEqual(wrapper.state().value > previousValue, true);
    });

    it('simulates the home key', function () {
      var handleChange = (0, _sinon.spy)();
      var wrapper = shallowWithContext(_react2.default.createElement(_Slider2.default, { name: 'slider', onChange: handleChange }));

      getTrackContainer(wrapper).simulate('keydown', {
        keyCode: (0, _keycode2.default)('home'),
        preventDefault: function preventDefault() {}
      });
      _chai.assert.strictEqual(handleChange.callCount, 0);
      _chai.assert.strictEqual(wrapper.state().value, 0);
    });

    it('simulates the home key on a x-reverse axis slider', function () {
      var handleChange = (0, _sinon.spy)();
      var wrapper = shallowWithContext(_react2.default.createElement(_Slider2.default, { name: 'slider', axis: 'x-reverse', onChange: handleChange }));

      getTrackContainer(wrapper).simulate('keydown', {
        keyCode: (0, _keycode2.default)('home'),
        preventDefault: function preventDefault() {}
      });
      _chai.assert.strictEqual(handleChange.callCount, 0);
      _chai.assert.strictEqual(wrapper.state().value, 0);
    });

    it('simulates the home key on a rtl slider', function () {
      var handleChange = (0, _sinon.spy)();
      var wrapper = shallowWithRTLContext(_react2.default.createElement(_Slider2.default, { name: 'slider', onChange: handleChange }));

      getTrackContainer(wrapper).simulate('keydown', {
        keyCode: (0, _keycode2.default)('home'),
        preventDefault: function preventDefault() {}
      });
      _chai.assert.strictEqual(handleChange.callCount, 0);
      _chai.assert.strictEqual(wrapper.state().value, 0);
    });

    it('simulates the home key on a y axis slider', function () {
      var handleChange = (0, _sinon.spy)();
      var wrapper = shallowWithContext(_react2.default.createElement(_Slider2.default, { name: 'slider', axis: 'y', onChange: handleChange }));

      getTrackContainer(wrapper).simulate('keydown', {
        keyCode: (0, _keycode2.default)('home'),
        preventDefault: function preventDefault() {}
      });
      _chai.assert.strictEqual(handleChange.callCount, 0);
      _chai.assert.strictEqual(wrapper.state().value, 0);
    });

    it('simulates the home key on a y-reverse axis slider', function () {
      var handleChange = (0, _sinon.spy)();
      var wrapper = shallowWithContext(_react2.default.createElement(_Slider2.default, { name: 'slider', axis: 'y', onChange: handleChange }));

      getTrackContainer(wrapper).simulate('keydown', {
        keyCode: (0, _keycode2.default)('home'),
        preventDefault: function preventDefault() {}
      });
      _chai.assert.strictEqual(handleChange.callCount, 0);
      _chai.assert.strictEqual(wrapper.state().value, 0);
    });

    it('simulates the down arrow key', function () {
      var handleChange = (0, _sinon.spy)();
      var wrapper = shallowWithContext(_react2.default.createElement(_Slider2.default, { name: 'slider', onChange: handleChange }));

      getTrackContainer(wrapper).simulate('keydown', {
        keyCode: (0, _keycode2.default)('down'),
        preventDefault: function preventDefault() {}
      });
      _chai.assert.strictEqual(handleChange.callCount, 0);
      _chai.assert.strictEqual(wrapper.state().value, 0);
    });

    it('simulates the down arrow key on a x-reverse axis slider', function () {
      var handleChange = (0, _sinon.spy)();
      var wrapper = shallowWithContext(_react2.default.createElement(_Slider2.default, { name: 'slider', axis: 'x-reverse', onChange: handleChange }));

      getTrackContainer(wrapper).simulate('keydown', {
        keyCode: (0, _keycode2.default)('down'),
        preventDefault: function preventDefault() {}
      });
      _chai.assert.strictEqual(handleChange.callCount, 0);
      _chai.assert.strictEqual(wrapper.state().value, 0);
    });

    it('simulates the down arrow key on a rtl slider', function () {
      var handleChange = (0, _sinon.spy)();
      var wrapper = shallowWithRTLContext(_react2.default.createElement(_Slider2.default, { name: 'slider', onChange: handleChange }));

      getTrackContainer(wrapper).simulate('keydown', {
        keyCode: (0, _keycode2.default)('down'),
        preventDefault: function preventDefault() {}
      });
      _chai.assert.strictEqual(handleChange.callCount, 0);
      _chai.assert.strictEqual(wrapper.state().value, 0);
    });

    it('simulates the down arrow key on a y axis slider', function () {
      var handleChange = (0, _sinon.spy)();
      var wrapper = shallowWithContext(_react2.default.createElement(_Slider2.default, { name: 'slider', axis: 'y', onChange: handleChange }));

      getTrackContainer(wrapper).simulate('keydown', {
        keyCode: (0, _keycode2.default)('down'),
        preventDefault: function preventDefault() {}
      });
      _chai.assert.strictEqual(handleChange.callCount, 0);
      _chai.assert.strictEqual(wrapper.state().value, 0);
    });

    it('simulates the down arrow key on a y-reverse axis slider', function () {
      var handleChange = (0, _sinon.spy)();
      var wrapper = shallowWithContext(_react2.default.createElement(_Slider2.default, { name: 'slider', axis: 'y-reverse', onChange: handleChange }));
      var previousValue = wrapper.state().value;

      getTrackContainer(wrapper).simulate('keydown', {
        keyCode: (0, _keycode2.default)('down'),
        preventDefault: function preventDefault() {}
      });
      _chai.assert.strictEqual(handleChange.callCount, 1);
      _chai.assert.strictEqual(wrapper.state().value > previousValue, true);
    });

    it('simulates the left arrow key', function () {
      var handleChange = (0, _sinon.spy)();
      var wrapper = shallowWithContext(_react2.default.createElement(_Slider2.default, { name: 'slider', onChange: handleChange }));

      getTrackContainer(wrapper).simulate('keydown', {
        keyCode: (0, _keycode2.default)('left'),
        preventDefault: function preventDefault() {}
      });
      _chai.assert.strictEqual(handleChange.callCount, 0);
      _chai.assert.strictEqual(wrapper.state().value, 0);
    });

    it('simulates the left arrow key for an x-reverse axis slider', function () {
      var handleChange = (0, _sinon.spy)();
      var wrapper = shallowWithContext(_react2.default.createElement(_Slider2.default, { name: 'slider', axis: 'x-reverse', onChange: handleChange }));
      var previousValue = wrapper.state().value;

      getTrackContainer(wrapper).simulate('keydown', {
        keyCode: (0, _keycode2.default)('left'),
        preventDefault: function preventDefault() {}
      });
      _chai.assert.strictEqual(handleChange.callCount, 1);
      _chai.assert.strictEqual(wrapper.state().value > previousValue, true);
    });

    it('simulates the left arrow key on a rtl slider', function () {
      var handleChange = (0, _sinon.spy)();
      var wrapper = shallowWithRTLContext(_react2.default.createElement(_Slider2.default, { name: 'slider', onChange: handleChange }));
      var previousValue = wrapper.state().value;

      getTrackContainer(wrapper).simulate('keydown', {
        keyCode: (0, _keycode2.default)('left'),
        preventDefault: function preventDefault() {}
      });
      _chai.assert.strictEqual(handleChange.callCount, 1);
      _chai.assert.strictEqual(wrapper.state().value > previousValue, true);
    });

    it('simulates the left arrow key on an x-reverse rtl slider', function () {
      var handleChange = (0, _sinon.spy)();
      var wrapper = shallowWithRTLContext(_react2.default.createElement(_Slider2.default, { name: 'slider', axis: 'x-reverse', onChange: handleChange }));

      getTrackContainer(wrapper).simulate('keydown', {
        keyCode: (0, _keycode2.default)('left'),
        preventDefault: function preventDefault() {}
      });
      _chai.assert.strictEqual(handleChange.callCount, 0);
      _chai.assert.strictEqual(wrapper.state().value, 0);
    });

    it('simulates the left arrow key for a y axis slider', function () {
      var handleChange = (0, _sinon.spy)();
      var wrapper = shallowWithContext(_react2.default.createElement(_Slider2.default, { name: 'slider', axis: 'y', onChange: handleChange }));

      getTrackContainer(wrapper).simulate('keydown', {
        keyCode: (0, _keycode2.default)('left'),
        preventDefault: function preventDefault() {}
      });
      _chai.assert.strictEqual(handleChange.callCount, 0);
      _chai.assert.strictEqual(wrapper.state().value, 0);
    });

    it('simulates the left arrow key for a y-reverse axis slider', function () {
      var handleChange = (0, _sinon.spy)();
      var wrapper = shallowWithContext(_react2.default.createElement(_Slider2.default, { name: 'slider', axis: 'y-reverse', onChange: handleChange }));

      getTrackContainer(wrapper).simulate('keydown', {
        keyCode: (0, _keycode2.default)('left'),
        preventDefault: function preventDefault() {}
      });
      _chai.assert.strictEqual(handleChange.callCount, 0);
      _chai.assert.strictEqual(wrapper.state().value, 0);
    });
  });
}); /* eslint-env mocha */