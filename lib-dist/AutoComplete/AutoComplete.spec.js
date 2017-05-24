'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _chai = require('chai');

var _enzyme = require('enzyme');

var _sinon = require('sinon');

var _AutoComplete = require('./AutoComplete');

var _AutoComplete2 = _interopRequireDefault(_AutoComplete);

var _Menu = require('../Menu/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _Popover = require('../Popover/Popover');

var _Popover2 = _interopRequireDefault(_Popover);

var _TextField = require('../TextField/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _getMuiTheme = require('../styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<AutoComplete />', function () {
  var muiTheme = (0, _getMuiTheme2.default)();
  var shallowWithContext = function shallowWithContext(node) {
    return (0, _enzyme.shallow)(node, { context: { muiTheme: muiTheme } });
  };

  describe('filter', function () {
    it('search using fuzzy filter', function () {
      _chai.assert.strictEqual(_AutoComplete2.default.fuzzyFilter('ea', 'Peach'), true, 'should match Peach with ea');
      _chai.assert.strictEqual(_AutoComplete2.default.fuzzyFilter('pah', 'Peach'), true, 'should match Peach with pah');
      _chai.assert.strictEqual(_AutoComplete2.default.fuzzyFilter('peach', 'Peach'), true, 'should match Peach with peach');

      _chai.assert.strictEqual(_AutoComplete2.default.fuzzyFilter('phc', 'Peach'), false, 'should not match Peach with phc');
      _chai.assert.strictEqual(_AutoComplete2.default.fuzzyFilter('pp', 'Peach'), false, 'should not match Peach with pp');
      _chai.assert.strictEqual(_AutoComplete2.default.fuzzyFilter('pb', 'Peach'), false, 'should not match Peach with pb');

      // testing longer string
      var test_string = 'The best thing about a Boolean is even if you are wrong, you are only off by a bit.';

      var search_result = _AutoComplete2.default.fuzzyFilter('bOOLEAN', test_string);
      _chai.assert.strictEqual(search_result, true, 'should match with case insensitive');

      search_result = _AutoComplete2.default.fuzzyFilter('The a Boolean if wrong', test_string);
      _chai.assert.strictEqual(search_result, true, 'should match pattern with spaces');

      search_result = _AutoComplete2.default.fuzzyFilter(' if ,bit.', test_string);
      _chai.assert.strictEqual(search_result, true, 'should match pattern with comma and period');

      search_result = _AutoComplete2.default.fuzzyFilter('the best q', test_string);
      _chai.assert.strictEqual(search_result, false, 'should not match pattern with letter is not contained in search text');

      search_result = _AutoComplete2.default.fuzzyFilter('off bit by', 'off by a bit');
      _chai.assert.strictEqual(search_result, false, 'should not match pattern when can not find letters in order ');
    });

    /**
     * This test ensures that <AutoComplete /> doesn't pass down filter property to <TextField />,
     * otherwise <TextField /> will render input as <input filter="function (...) {...}" ... />,
     * which will have different behaviors in different environments, producing indent conflicts and
     * breaking server rendering.
     * Read more: https://github.com/callemall/material-ui/issues/4195
     */
    it('should not pass filter property to children', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(_AutoComplete2.default, { dataSource: [] }));

      _chai.assert.strictEqual(wrapper.find('TextField').prop('filter'), undefined, 'should not pass filter property to children');
    });
  });

  describe('prop: value', function () {
    it('should not override value prop of TextField', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(_AutoComplete2.default, {
        value: { name: 'foo' },
        dataSource: ['foo', 'bar'],
        searchText: 'f',
        menuCloseDelay: 10
      }));

      _chai.assert.strictEqual(wrapper.find(_TextField2.default).props().value, 'f');
    });
  });

  describe('prop: onChange', function () {
    it('should not override onChange prop of TextField', function (done) {
      var onChange = (0, _sinon.spy)();

      var wrapper = shallowWithContext(_react2.default.createElement(_AutoComplete2.default, {
        onChange: onChange,
        dataSource: ['foo', 'bar'],
        searchText: 'f',
        menuCloseDelay: 10
      }));

      wrapper.find(_TextField2.default).props().onChange({ target: { value: 'fo' } });

      setTimeout(function () {
        try {
          _chai.assert.strictEqual(onChange.callCount, 0);

          done();
        } catch (error) {
          done(error);
        }
      }, 20);
    });
  });

  describe('prop: onNewRequest', function () {
    it('should call onNewRequest once the popover is closed', function (done) {
      var handleNewRequest = (0, _sinon.spy)();
      var wrapper = shallowWithContext(_react2.default.createElement(_AutoComplete2.default, {
        dataSource: ['foo', 'bar'],
        onNewRequest: handleNewRequest,
        menuCloseDelay: 10
      }));

      wrapper.setState({ open: true, searchText: 'f' });
      wrapper.find(_Menu2.default).props().onItemTouchTap({}, {
        key: 0
      });
      _chai.assert.strictEqual(handleNewRequest.callCount, 0);

      setTimeout(function () {
        _chai.assert.strictEqual(handleNewRequest.callCount, 1);
        _chai.assert.deepEqual(handleNewRequest.args[0], ['foo', 0]);
        done();
      }, 20);
    });
  });

  describe('prop: onUpdateInput', function () {
    it('should fire after selection from menu', function (done) {
      var handleUpdateInput = (0, _sinon.spy)();
      var wrapper = shallowWithContext(_react2.default.createElement(_AutoComplete2.default, {
        dataSource: ['foo', 'bar'],
        onUpdateInput: handleUpdateInput
      }));

      wrapper.setState({ open: true, searchText: 'f' });
      wrapper.find(_Menu2.default).props().onItemTouchTap({}, {
        key: 0
      });

      setTimeout(function () {
        _chai.assert.strictEqual(handleUpdateInput.callCount, 1);
        _chai.assert.deepEqual(handleUpdateInput.args[0], ['foo', ['foo', 'bar'], {
          source: 'touchTap'
        }]);
        done();
      }, 0);
    });
  });

  describe('prop: popoverProps', function () {
    it('should pass popoverProps to Popover', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(_AutoComplete2.default, {
        dataSource: ['foo', 'bar'],
        popoverProps: {
          zDepth: 3,
          canAutoPosition: true
        }
      }));

      var popoverProps = wrapper.find(_Popover2.default).props();

      _chai.assert.strictEqual(popoverProps.zDepth, 3, 'should pass popoverProps to Popover');
      _chai.assert.strictEqual(popoverProps.canAutoPosition, true, 'should overrides the default');
    });
  });

  describe('prop: onClose', function () {
    it('should call onClose when the menu is closed', function () {
      var handleClose = (0, _sinon.spy)();
      var wrapper = shallowWithContext(_react2.default.createElement(_AutoComplete2.default, { dataSource: ['foo', 'bar'], onClose: handleClose }));
      wrapper.instance().close();
      _chai.assert.strictEqual(handleClose.callCount, 1);
    });
  });

  describe('prop: searchText', function () {
    it('onItemTouchTap should not call setState:searchText when searchText is controlled', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(_AutoComplete2.default, {
        dataSource: ['foo', 'bar'],
        searchText: 'f'
      }));

      wrapper.setState({ open: true });
      wrapper.find(_Menu2.default).props().onItemTouchTap({}, {
        key: 0
      });
      _chai.assert.strictEqual(wrapper.state().searchText, 'f');
    });
  });
}); /* eslint-env mocha */