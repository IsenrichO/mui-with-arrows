'use strict';

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _enzyme = require('enzyme');

var _sinon = require('sinon');

var _chai = require('chai');

var _Menu = require('./Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _MenuItem = require('../MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Divider = require('../Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _getMuiTheme = require('../styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _keycode = require('keycode');

var _keycode2 = _interopRequireDefault(_keycode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('<Menu />', function () {
  var muiTheme = (0, _getMuiTheme2.default)();
  var shallowWithContext = function shallowWithContext(node) {
    return (0, _enzyme.shallow)(node, { context: { muiTheme: muiTheme } });
  };
  var mountWithContext = function mountWithContext(node) {
    return (0, _enzyme.mount)(node, {
      context: { muiTheme: muiTheme },
      childContextTypes: { muiTheme: _propTypes2.default.object }
    });
  };
  var keycodeEvent = function keycodeEvent(key) {
    return { keyCode: (0, _keycode2.default)(key) };
  };

  describe('onMenuItemFocusChange', function () {
    function createMenu(props) {
      return _react2.default.createElement(
        _Menu2.default,
        props,
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'item 1' }),
        _react2.default.createElement(_Divider2.default, null),
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'item 2' }),
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'item 3' })
      );
    }

    it('is invoked when using the arrow key to go down to the bottom and back up to the top', function () {
      var onMenuItemFocusChangeSpy = (0, _sinon.spy)();
      var menu = createMenu({
        disableAutoFocus: false,
        onMenuItemFocusChange: onMenuItemFocusChangeSpy
      });
      var wrapper = mountWithContext(menu);

      _chai.assert.deepEqual(onMenuItemFocusChangeSpy.args[0], [null, 0], 'initial focus should invoke callback with 0');
      onMenuItemFocusChangeSpy.reset();

      wrapper.simulate('keydown', keycodeEvent('down'));
      _chai.assert.strictEqual(onMenuItemFocusChangeSpy.args[0][1], 1, 'down-arrow invokes callback with index 1');
      onMenuItemFocusChangeSpy.reset();

      wrapper.simulate('keydown', keycodeEvent('down'));
      _chai.assert.strictEqual(onMenuItemFocusChangeSpy.args[0][1], 2, 'down-arrow invokes callback with index 2');
      onMenuItemFocusChangeSpy.reset();

      wrapper.simulate('keydown', keycodeEvent('down'));
      _chai.assert.strictEqual(onMenuItemFocusChangeSpy.args[0][1], 2, 'down-arrow at end invokes callback with unchanged index');
      onMenuItemFocusChangeSpy.reset();

      wrapper.simulate('keydown', keycodeEvent('up'));
      _chai.assert.strictEqual(onMenuItemFocusChangeSpy.args[0][1], 1, 'up-arrow invokes callback with 1');
      onMenuItemFocusChangeSpy.reset();

      wrapper.simulate('keydown', keycodeEvent('up'));
      _chai.assert.strictEqual(onMenuItemFocusChangeSpy.args[0][1], 0, 'up-arrow invokes callback with 0');
      onMenuItemFocusChangeSpy.reset();

      wrapper.simulate('keydown', keycodeEvent('up'));
      _chai.assert.strictEqual(onMenuItemFocusChangeSpy.args[0][1], 0, 'up-arrow at top invokes callback with unchanged index');
      onMenuItemFocusChangeSpy.reset();

      wrapper.unmount(); // Otherwise the timer in FocusRipple keeps Node from exiting
    });

    it('is invoked when props change', function () {
      var onMenuItemFocusChangeSpy = (0, _sinon.spy)();
      var menu = createMenu({
        disableAutoFocus: true,
        onMenuItemFocusChange: onMenuItemFocusChangeSpy
      });
      var wrapper = mountWithContext(menu);
      _chai.assert.strictEqual(onMenuItemFocusChangeSpy.callCount, 0, 'should not be called when creating with disableAutoFocus=true');
      onMenuItemFocusChangeSpy.reset();

      wrapper.setProps({ disableAutoFocus: false });
      _chai.assert.deepEqual(onMenuItemFocusChangeSpy.args[0], [null, 0], 'changing disableAutoFocus to false invokes callback');
      onMenuItemFocusChangeSpy.reset();

      wrapper.setProps({ disableAutoFocus: true });
      _chai.assert.deepEqual(onMenuItemFocusChangeSpy.args[0], [null, -1], 'changing disableAutoFocus to true invokes callback');
      onMenuItemFocusChangeSpy.reset();

      wrapper.unmount(); // Otherwise the timer in FocusRipple keeps Node from exiting
    });

    it('is invoked for hotkeys', function () {
      var onMenuItemFocusChangeSpy = (0, _sinon.spy)();
      var menu = _react2.default.createElement(
        _Menu2.default,
        {
          disableAutoFocus: false,
          onMenuItemFocusChange: onMenuItemFocusChangeSpy
        },
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'a00' }),
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'b11' }),
        _react2.default.createElement(_Divider2.default, null),
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'b00' })
      );
      var wrapper = mountWithContext(menu);

      wrapper.simulate('keydown', keycodeEvent('b'));
      _chai.assert.strictEqual(onMenuItemFocusChangeSpy.args[0][1], 0, '"b" invokes callback with focus index 0');
      onMenuItemFocusChangeSpy.reset();

      wrapper.simulate('keydown', keycodeEvent('0'));
      // The Divider is incorrectly counted by Menu.setFocusIndexStartsWith().
      _chai.assert.strictEqual(onMenuItemFocusChangeSpy.args[0][1], 3, '"b0" invokes callback with focus index 3, which is probably a bug');
      onMenuItemFocusChangeSpy.reset();

      wrapper.simulate('keydown', keycodeEvent('0'));
      _chai.assert.strictEqual(onMenuItemFocusChangeSpy.args[0][1], 3, '"b0" invokes callback with focus index 3');
      onMenuItemFocusChangeSpy.reset();

      wrapper.simulate('keydown', keycodeEvent('!'));
      // It seems like the focus index should be changed to -1 here.
      _chai.assert.strictEqual(onMenuItemFocusChangeSpy.callCount, 0, '"b00!" does not change the focus index, which is probably a bug');
      onMenuItemFocusChangeSpy.reset();

      wrapper.unmount(); // Otherwise the timer in FocusRipple keeps Node from exiting
    });
  });

  it('should render MenuItem and Divider children', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(
      _Menu2.default,
      null,
      _react2.default.createElement(_MenuItem2.default, { primaryText: 'item 1' }),
      _react2.default.createElement(_Divider2.default, null),
      _react2.default.createElement(_MenuItem2.default, { primaryText: 'item 2' })
    ));

    var menuItemsAndDividers = wrapper.children().children().children();
    _chai.assert.strictEqual(menuItemsAndDividers.length, 3, 'there should be three children');
    _chai.assert.strictEqual(menuItemsAndDividers.get(0).type, _MenuItem2.default, 'first child should be a MenuItem');
    _chai.assert.strictEqual(menuItemsAndDividers.get(1).type, _Divider2.default, 'second child should be a Divider');
    _chai.assert.strictEqual(menuItemsAndDividers.get(2).type, _MenuItem2.default, 'third child should be a MenuItem');
    _chai.assert.deepEqual(menuItemsAndDividers.get(1).props.style, {
      marginTop: 7,
      marginBottom: 8
    }, 'the Divider gets default styles');
  });

  describe('prop: children', function () {
    it("should render disabled MenuItem with the Menu's menuItemStyle", function () {
      var wrapper = shallowWithContext(_react2.default.createElement(
        _Menu2.default,
        { menuItemStyle: { fontSize: 60 } },
        _react2.default.createElement(_MenuItem2.default, { style: { fontSize: 10 }, primaryText: 'item 1' }),
        _react2.default.createElement(_MenuItem2.default, { disabled: true, style: { fontSize: 10 }, primaryText: 'item 2' })
      ));

      var menuItemsAndDividers = wrapper.children().children().children();
      _chai.assert.strictEqual(menuItemsAndDividers.length, 2, 'there should be two children');
      _chai.assert.strictEqual(menuItemsAndDividers.get(0).type, _MenuItem2.default, 'first child should be a MenuItem');
      _chai.assert.strictEqual(menuItemsAndDividers.get(1).type, _MenuItem2.default, 'second child should be a MenuItem');
      _chai.assert.strictEqual(menuItemsAndDividers.get(0).props.style.fontSize, 60, 'the normal MenuItem should merge styles with menuItemStyle');
      _chai.assert.strictEqual(menuItemsAndDividers.get(1).props.style.fontSize, 60, 'the disabled MenuItem should merge styles with menuItemStyle');
    });

    it("should merge the Divider's styles over the Menu's default divider styles", function () {
      var style = {
        color: 'red',
        marginTop: '999px'
      };
      var wrapper = shallowWithContext(_react2.default.createElement(
        _Menu2.default,
        null,
        _react2.default.createElement(_Divider2.default, { style: style })
      ));

      var divider = wrapper.find(_Divider2.default);
      _chai.assert.strictEqual(divider.length, 1, 'there should be one divider child');

      _chai.assert.deepEqual(divider.props().style, (0, _assign2.default)({}, style, {
        marginBottom: 8
      }), "existing styles should be merged over Menu's styles");
    });

    it('should be able to accept any children', function () {
      var child = _react2.default.createElement('div', { foo: 'bar' });
      var wrapper = shallowWithContext(_react2.default.createElement(
        _Menu2.default,
        null,
        child
      ));
      _chai.assert.strictEqual(wrapper.contains(child), true);
    });
  });

  describe('MultiSelect', function () {
    it('should multi select 2 items after selecting 3 and deselecting 1', function () {
      var MyComponent1 = function (_Component) {
        (0, _inherits3.default)(MyComponent1, _Component);

        function MyComponent1() {
          var _temp, _this, _ret;

          (0, _classCallCheck3.default)(this, MyComponent1);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
            value: null
          }, _this.handleChange = function (event, value) {
            _this.setState({ value: value });
          }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
        }

        MyComponent1.prototype.render = function render() {
          return _react2.default.createElement(
            _Menu2.default,
            {
              multiple: true,
              value: this.state.value,
              onChange: this.handleChange
            },
            _react2.default.createElement(_MenuItem2.default, { className: 'item1', value: 'item1', primaryText: 'item 1' }),
            _react2.default.createElement(_MenuItem2.default, { className: 'item2', value: 'item2', primaryText: 'item 2' }),
            _react2.default.createElement(_MenuItem2.default, { className: 'item3', value: 'item3', primaryText: 'item 3' })
          );
        };

        return MyComponent1;
      }(_react.Component);

      var wrapper = mountWithContext(_react2.default.createElement(MyComponent1, null));

      wrapper.find('.item1').simulate('touchTap');
      wrapper.find('.item2').simulate('touchTap');
      wrapper.find('.item3').simulate('touchTap');
      wrapper.find('.item1').simulate('touchTap'); // deselect

      _chai.assert.deepEqual(wrapper.state().value, ['item2', 'item3']);
    });
  });
});