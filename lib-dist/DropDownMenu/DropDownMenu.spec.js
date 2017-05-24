'use strict';

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _enzyme = require('enzyme');

var _chai = require('chai');

var _keycode = require('keycode');

var _keycode2 = _interopRequireDefault(_keycode);

var _sinon = require('sinon');

var _DropDownMenu = require('./DropDownMenu');

var _DropDownMenu2 = _interopRequireDefault(_DropDownMenu);

var _getMuiTheme = require('../styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _MenuItem = require('../MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Menu = require('../Menu/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _IconButton = require('../IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _testUtils = require('react-dom/test-utils');

var _testUtils2 = _interopRequireDefault(_testUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('<DropDownMenu />', function () {
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

  describe('prop: value', function () {
    it('should display the right selected value text', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(
        _DropDownMenu2.default,
        { value: 1 },
        _react2.default.createElement(_MenuItem2.default, { value: 1, primaryText: 'Never' }),
        _react2.default.createElement(_MenuItem2.default, { value: 2, primaryText: 'Every Night' })
      ));

      _chai.assert.strictEqual(wrapper.childAt(0).childAt(0).childAt(0).node, 'Never');
    });
  });

  describe('prop: disabled', function () {
    it('should forward the property', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(_DropDownMenu2.default, { disabled: true }));
      _chai.assert.strictEqual(wrapper.find('IconButton').prop('disabled'), true, 'should be disabled');
    });
  });

  describe('prop: children', function () {
    it('should work with null child', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(
        _DropDownMenu2.default,
        { value: 1 },
        _react2.default.createElement(_MenuItem2.default, { value: 1, primaryText: 'Never' }),
        null
      ));

      _chai.assert.strictEqual(wrapper.childAt(0).childAt(0).childAt(0).node, 'Never');
    });
  });

  describe('prop: iconButton', function () {
    it('should render IconButton with given icon node', function () {
      var iconNode = _react2.default.createElement(
        'div',
        null,
        'test'
      );
      var wrapper = shallowWithContext(_react2.default.createElement(_DropDownMenu2.default, { iconButton: iconNode }));
      _chai.assert.strictEqual(wrapper.find(_IconButton2.default).childAt(0).node, iconNode);
    });

    it('should render IconButton with default icon node', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(_DropDownMenu2.default, null));
      _chai.assert.strictEqual(wrapper.find(_IconButton2.default).childAt(0).node, _DropDownMenu2.default.defaultProps.iconButton);
    });
  });

  describe('prop: onClose', function () {
    it('should call onClose when an item is selected', function (done) {
      var handleClose = (0, _sinon.spy)();
      var wrapper = shallowWithContext(_react2.default.createElement(
        _DropDownMenu2.default,
        { onClose: handleClose },
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Never' })
      ));

      wrapper.setState({
        open: true
      });
      wrapper.find(_Menu2.default).props().onItemTouchTap({
        persist: function persist() {}
      });

      setTimeout(function () {
        _chai.assert.strictEqual(wrapper.state().open, false);
        _chai.assert.strictEqual(handleClose.callCount, 1);
        done();
      }, 0);
    });
  });

  describe('prop: onChange', function () {
    it('should call onChange when an item is selected', function (done) {
      var handleChange = (0, _sinon.spy)();
      var wrapper = shallowWithContext(_react2.default.createElement(
        _DropDownMenu2.default,
        { onChange: handleChange },
        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Never' })
      ));

      wrapper.setState({
        open: true
      });
      var event = {
        persist: function persist() {}
      };
      wrapper.find(_Menu2.default).props().onItemTouchTap(event, {
        props: {
          value: 'foo'
        }
      }, 3);

      setTimeout(function () {
        _chai.assert.strictEqual(wrapper.state().open, false);
        _chai.assert.strictEqual(handleChange.callCount, 1);
        _chai.assert.deepEqual(handleChange.args[0], [event, 3, 'foo']);
        done();
      }, 0);
    });
  });

  it('passes expected props through to the underlying Menu', function () {
    var props = {
      listStyle: {
        color: 'black'
      },
      maxHeight: 10,
      menuStyle: {
        color: 'white'
      },
      menuItemStyle: {
        fontWeight: 'bold'
      },
      selectedMenuItemStyle: {
        color: 'blue'
      },
      value: 1
    };

    var wrapper = shallowWithContext(_react2.default.createElement(
      _DropDownMenu2.default,
      props,
      _react2.default.createElement('div', { value: 1, primaryText: 'Never' }),
      _react2.default.createElement('div', { value: 2, primaryText: 'Every Night' }),
      _react2.default.createElement('div', { value: 3, primaryText: 'Weeknights' })
    ));

    var menu = wrapper.childAt(1).childAt(0);
    _chai.assert.include(menu.props(), {
      desktop: true,
      listStyle: props.listStyle,
      maxHeight: props.maxHeight,
      menuItemStyle: props.menuItemStyle,
      selectedMenuItemStyle: props.selectedMenuItemStyle,
      style: props.menuStyle,
      value: props.value
    });
  });

  describe('focus handling', function () {
    it('should open the menu when users interact', function () {
      var wrapper = mountWithContext(_react2.default.createElement(
        _DropDownMenu2.default,
        { value: 1 },
        _react2.default.createElement(_MenuItem2.default, { value: 1, primaryText: 'Never' }),
        _react2.default.createElement(_MenuItem2.default, { value: 2, primaryText: 'Every Night' })
      ));

      wrapper.find(_IconButton2.default).simulate('keydown', {
        keyCode: (0, _keycode2.default)('enter')
      });
      _chai.assert.strictEqual(wrapper.state().open, true, 'it should open the menu');
    });
  });

  describe('MultiSelect', function () {
    var wrapper = void 0;

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
          }, _this.handleChange = function (event, key, value) {
            _this.setState({ value: value });
          }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
        }

        MyComponent1.prototype.render = function render() {
          return _react2.default.createElement(
            _DropDownMenu2.default,
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

      wrapper = mountWithContext(_react2.default.createElement(MyComponent1, null));
      wrapper.find('IconButton').simulate('touchTap'); // open

      var item1 = document.getElementsByClassName('item1')[0];
      _chai.assert.ok(item1);
      var item2 = document.getElementsByClassName('item2')[0];
      _chai.assert.ok(item2);
      var item3 = document.getElementsByClassName('item3')[0];
      _chai.assert.ok(item3);

      _testUtils2.default.Simulate.touchTap(item1);
      _testUtils2.default.Simulate.touchTap(item2);
      _testUtils2.default.Simulate.touchTap(item3);
      _chai.assert.deepEqual(wrapper.state().value, ['item1', 'item2', 'item3']);

      _testUtils2.default.Simulate.touchTap(item1); // deselect
      _chai.assert.deepEqual(wrapper.state().value, ['item2', 'item3']);
    });

    afterEach(function () {
      if (wrapper) wrapper.unmount();
    });
  });

  describe('prop: selectionRenderer', function () {
    it('should return the active value and MenuItem', function () {
      var items = [_react2.default.createElement(_MenuItem2.default, {
        value: 0,
        key: 0,
        primaryText: 'Never',
        className: 'item1'
      }), _react2.default.createElement(_MenuItem2.default, {
        value: 1,
        key: 1,
        primaryText: 'Always',
        className: 'item2'
      })];
      var currentValue = 1;
      var result = {};

      var wrapper = mountWithContext(_react2.default.createElement(
        _DropDownMenu2.default,
        {
          value: currentValue,
          selectionRenderer: function selectionRenderer(value, menuItem) {
            result = { value: value, menuItem: menuItem };
            return menuItem;
          }
        },
        items
      ));

      // Arguments are correct
      _chai.assert.strictEqual(result.value, currentValue);
      _chai.assert.deepEqual(result.menuItem, items[currentValue]);

      // returned element is displayed
      _chai.assert.strictEqual(wrapper.containsMatchingElement(items[currentValue]), true);
    });

    describe('when multiple is true', function () {
      it('should return arrays with matching values and MenuItems', function () {
        var items = [_react2.default.createElement(_MenuItem2.default, {
          value: 0,
          key: 0,
          primaryText: 'Never',
          className: 'item1'
        }), _react2.default.createElement(_MenuItem2.default, {
          value: 1,
          key: 1,
          primaryText: 'Always',
          className: 'item2'
        }), _react2.default.createElement(_MenuItem2.default, {
          value: 2,
          key: 2,
          primaryText: 'Sometimes',
          className: 'item3'
        })];
        var currentValues = [0, 1];
        var result = {};

        var wrapper = mountWithContext(_react2.default.createElement(
          _DropDownMenu2.default,
          {
            value: currentValues,
            selectionRenderer: function selectionRenderer(values, menuItems) {
              result = { values: values, menuItems: menuItems };
              return menuItems;
            },
            multiple: true
          },
          items
        ));

        // Arguments are correct
        _chai.assert.deepEqual(result.values, currentValues);
        _chai.assert.deepEqual(result.menuItems, items.slice(0, 2));

        // First item exists
        _chai.assert.strictEqual(wrapper.find(_MenuItem2.default).nodes[0].props.value, items[0].props.value);
        _chai.assert.strictEqual(wrapper.containsMatchingElement(items[0]), true);

        // Second item exists
        _chai.assert.strictEqual(wrapper.find(_MenuItem2.default).nodes[1].props.value, items[1].props.value);
        _chai.assert.strictEqual(wrapper.containsMatchingElement(items[1]), true);
      });
    });
  });
});