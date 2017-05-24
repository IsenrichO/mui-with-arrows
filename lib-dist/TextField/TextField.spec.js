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

var _TextField = require('./TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _TextFieldHint = require('./TextFieldHint');

var _TextFieldHint2 = _interopRequireDefault(_TextFieldHint);

var _TextFieldLabel = require('./TextFieldLabel');

var _TextFieldLabel2 = _interopRequireDefault(_TextFieldLabel);

var _getMuiTheme = require('../styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('<TextField />', function () {
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

  it('passes event and value to the onChange callback', function (done) {
    var wrapper = shallowWithContext(_react2.default.createElement(_TextField2.default, {
      onChange: function onChange(event, value) {
        _chai.assert.strictEqual(event.target.value, 'woof');
        _chai.assert.strictEqual(value, 'woof', 'should pass the value as the 2nd arg');
        done();
      },
      id: 'unique'
    }));

    wrapper.find('input').simulate('change', { target: { value: 'woof' } });
  });

  it('shrinks TextFieldLabel when defaultValue', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(_TextField2.default, {
      floatingLabelText: 'floating label text',
      defaultValue: 'default value'
    }));

    _chai.assert.strictEqual(wrapper.find(_TextFieldLabel2.default).props().shrink, true, 'should shrink TextFieldLabel');
    wrapper.update();
    _chai.assert.strictEqual(wrapper.find(_TextFieldLabel2.default).props().shrink, true, 'should shrink TextFieldLabel');
  });

  describe('prop: children', function () {
    it('should forward any property to the root', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(
        _TextField2.default,
        { 'data-test': 'hello', id: 'unique' },
        _react2.default.createElement('div', null)
      ));

      _chai.assert.strictEqual(wrapper.is('[data-test="hello"]'), true, 'The root element should receive any additional properties');
    });
  });

  describe('isValid', function () {
    it('should consider the input as empty', function () {
      var values = [undefined, null, ''];

      values.forEach(function (value) {
        var wrapper = shallowWithContext(_react2.default.createElement(_TextField2.default, { value: value, id: 'unique' }));

        _chai.assert.strictEqual(wrapper.state().hasValue, false, 'Should consider \'' + value + '\' as empty');
      });
    });

    it('should consider the input as not empty', function () {
      var values = [' ', 0, false];

      values.forEach(function (value) {
        var wrapper = shallowWithContext(_react2.default.createElement(_TextField2.default, { value: value, id: 'unique' }));

        _chai.assert.strictEqual(wrapper.state().hasValue, true, 'Should consider \'' + value + '\' as not empty');
      });
    });
  });

  describe('<TextFieldHint>', function () {
    it('should be hidden when the component is rerender with the same props', function () {
      var MyComponent1 = function (_Component) {
        (0, _inherits3.default)(MyComponent1, _Component);

        function MyComponent1() {
          var _temp, _this, _ret;

          (0, _classCallCheck3.default)(this, MyComponent1);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
            value: ''
          }, _this.handleChange = function () {
            _this.setState({ value: '' });
          }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
        }

        MyComponent1.prototype.render = function render() {
          return _react2.default.createElement(_TextField2.default, {
            id: 'foo',
            value: this.state.value,
            hintText: 'bar',
            onChange: this.handleChange
          });
        };

        return MyComponent1;
      }(_react.Component);

      var wrapper = mountWithContext(_react2.default.createElement(MyComponent1, null));
      var input = wrapper.find('input');
      input.simulate('change', { target: { value: 'a' } });
      _chai.assert.strictEqual(wrapper.find(_TextFieldHint2.default).props().show, true, 'The hint text should keep the same state');
    });
  });

  describe('prop: floatingLabelFocusStyle', function () {
    it('should be applied when the input is focused', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(_TextField2.default, {
        floatingLabelText: 'Name',
        floatingLabelFixed: true,
        floatingLabelFocusStyle: { color: 'blue' },
        floatingLabelStyle: { color: 'red' }
      }));
      wrapper.setState({
        isFocused: true
      });
      _chai.assert.strictEqual(wrapper.find(_TextFieldLabel2.default).props().style.color, 'blue');
    });
  });

  describe('prop: floatingLabelFocusStyle', function () {
    it('should be applied', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(_TextField2.default, {
        floatingLabelText: 'Name',
        floatingLabelShrinkStyle: { transform: 'none' }
      }));
      _chai.assert.strictEqual(wrapper.find(_TextFieldLabel2.default).props().shrinkStyle.transform, 'none');
    });
  });

  describe('prop: errorStyle', function () {
    it('should override the errorText', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(_TextField2.default, {
        id: 'foo',
        floatingLabelText: 'password',
        errorStyle: {
          color: 'red',
          bottom: 10
        },
        errorText: 'error message'
      }));

      var errorWrapper = wrapper.children().last();
      _chai.assert.strictEqual(errorWrapper.props().style.bottom, 10, 'Users should have the higher priority');
    });
  });

  describe('state: hasValue', function () {
    describe('of uncontrolled component', function () {
      it('should change depending on the input', function () {
        var wrapper = shallowWithContext(_react2.default.createElement(_TextField2.default, { id: 'unique' }));
        var input = wrapper.find('input');
        _chai.assert.strictEqual(wrapper.state().hasValue, false);
        input.simulate('change', { target: { value: 'a' } });
        _chai.assert.strictEqual(wrapper.state().hasValue, true);
        input.simulate('change', { target: { value: '' } });
        _chai.assert.strictEqual(wrapper.state().hasValue, false);
      });
    });

    describe('of controlled component', function () {
      it('should be false if onChange does nothing despite the input', function () {
        var wrapper = shallowWithContext(_react2.default.createElement(_TextField2.default, { value: '', id: 'unique' }));
        wrapper.find('input').simulate('change', { target: { value: 'a' } });
        _chai.assert.strictEqual(wrapper.state().hasValue, false, 'because props.value is still invalid.');
      });

      it('should be true if and only if props.value is set', function () {
        var wrapper = shallowWithContext(_react2.default.createElement(_TextField2.default, { value: '', id: 'unique' }));
        _chai.assert.strictEqual(wrapper.state().hasValue, false);
        wrapper.setProps({ value: 'a' });
        _chai.assert.strictEqual(wrapper.state().hasValue, true, 'it is consistent with props.value');
      });
    });
  });
});