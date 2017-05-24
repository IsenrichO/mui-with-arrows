'use strict';

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _sinon = require('sinon');

var _enzyme = require('enzyme');

var _chai = require('chai');

var _AppBar = require('./AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _getMuiTheme = require('../styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _IconButton = require('../IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _FlatButton = require('../FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('<AppBar />', function () {
  var muiTheme = (0, _getMuiTheme2.default)();
  var shallowWithContext = function shallowWithContext(node) {
    return (0, _enzyme.shallow)(node, { context: { muiTheme: muiTheme } });
  };

  it('renders children by default', function () {
    var testChildren = _react2.default.createElement('div', null);
    var wrapper = shallowWithContext(_react2.default.createElement(
      _AppBar2.default,
      null,
      testChildren
    ));

    _chai.assert.ok(wrapper.contains(testChildren), 'should contain the children');
  });

  it('renders className', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(_AppBar2.default, { className: 'testClassName' }));

    _chai.assert.ok(wrapper.is('.testClassName'), 'should contain the className');
  });

  it('renders iconClassNameLeft', function () {
    var iconClassName = 'muidocs-icon-navigation-expand-more';
    var wrapper = shallowWithContext(_react2.default.createElement(_AppBar2.default, { iconClassNameLeft: iconClassName }));

    _chai.assert.strictEqual(wrapper.find(_IconButton2.default).get(0).props.iconClassName, iconClassName, 'should contain iconClassNameLeft');
  });

  it('renders iconClassNameRight', function () {
    var iconClassName = 'muidocs-icon-navigation-expand-more';
    var wrapper = shallowWithContext(_react2.default.createElement(_AppBar2.default, { iconClassNameRight: iconClassName }));

    _chai.assert.strictEqual(wrapper.find(_IconButton2.default).get(1).props.iconClassName, iconClassName, 'should contain iconClassNameRight');
  });

  it('renders iconClassNameLeft and iconClassNameRight', function () {
    var iconClassNameLeft = 'muidocs-icon-action-home';
    var iconClassNameRight = 'muidocs-icon-navigation-expand-more';
    var wrapper = shallowWithContext(_react2.default.createElement(_AppBar2.default, { iconClassNameLeft: iconClassNameLeft, iconClassNameRight: iconClassNameRight }));

    _chai.assert.strictEqual(wrapper.find(_IconButton2.default).get(0).props.iconClassName, iconClassNameLeft, 'should contain iconClassNameLeft');
    _chai.assert.strictEqual(wrapper.find(_IconButton2.default).get(1).props.iconClassName, iconClassNameRight, 'should contain iconClassNameRight');
  });

  describe('iconElementLeft', function () {
    it('renders the node', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(_AppBar2.default, { iconElementLeft: _react2.default.createElement('span', { className: 'icon' }) }));

      _chai.assert.strictEqual(wrapper.find('.icon').length, 1, 'should contain iconElementLeft');
    });

    it('renders the IconButton with a correct style', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(_AppBar2.default, { iconElementLeft: _react2.default.createElement(
          _IconButton2.default,
          null,
          _react2.default.createElement('div', null)
        ) }));

      _chai.assert.strictEqual((0, _keys2.default)(wrapper.find(_IconButton2.default).get(0).props.iconStyle).length > 0, true, 'should add some properties to the iconStyle');
    });

    it('should triggers the onTouchTap', function () {
      var handleTouchTap = (0, _sinon.spy)();
      var wrapper = shallowWithContext(_react2.default.createElement(_AppBar2.default, { iconElementLeft: _react2.default.createElement(
          _IconButton2.default,
          { onTouchTap: handleTouchTap },
          _react2.default.createElement('div', null)
        ) }));
      wrapper.find(_IconButton2.default).simulate('touchTap');
      _chai.assert.strictEqual(handleTouchTap.callCount, 1);
    });
  });

  describe('iconElementRight', function () {
    it('renders the node', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(_AppBar2.default, { iconElementRight: _react2.default.createElement('span', { className: 'icon' }) }));

      _chai.assert.strictEqual(wrapper.find('.icon').length, 1, 'should contain iconElementRight');
    });

    it('renders the FlatButton with a correct style', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(_AppBar2.default, { iconElementRight: _react2.default.createElement(
          _FlatButton2.default,
          null,
          _react2.default.createElement('div', null)
        ) }));

      _chai.assert.strictEqual((0, _keys2.default)(wrapper.find(_FlatButton2.default).get(0).props.style).length > 1, true, 'should add some properties to the style');
    });
  });

  describe('onLeftIconButtonTouchTap', function () {
    it('should trigger the onTouchTap', function () {
      var onLeftIconButtonTouchTap = (0, _sinon.spy)();
      var wrapper = shallowWithContext(_react2.default.createElement(_AppBar2.default, { onLeftIconButtonTouchTap: onLeftIconButtonTouchTap }));

      wrapper.find(_IconButton2.default).simulate('touchTap');
      _chai.assert.strictEqual(onLeftIconButtonTouchTap.callCount, 1, 'should have called onLeftIconButtonTouchTap callback function');
    });

    it('should forward the onTouchTap to onLeftIconButtonTouchTap', function () {
      var handleTouchTap = (0, _sinon.spy)();
      var wrapper = shallowWithContext(_react2.default.createElement(_AppBar2.default, {
        iconElementLeft: _react2.default.createElement(
          _IconButton2.default,
          null,
          _react2.default.createElement('div', null)
        ),
        onLeftIconButtonTouchTap: handleTouchTap
      }));
      wrapper.find(_IconButton2.default).simulate('touchTap');
      _chai.assert.strictEqual(handleTouchTap.callCount, 1);
    });
  });

  describe('onRightIconButtonTouchTap', function () {
    it('should trigger the onTouchTap', function () {
      var handleRightIconButtonTouchTap = (0, _sinon.spy)();
      var wrapper = shallowWithContext(_react2.default.createElement(_AppBar2.default, { onRightIconButtonTouchTap: handleRightIconButtonTouchTap, iconClassNameRight: 'foo' }));

      wrapper.find(_IconButton2.default).at(1).simulate('touchTap');
      _chai.assert.strictEqual(handleRightIconButtonTouchTap.callCount, 1, 'should have called onRightIconButtonTouchTap callback function');
    });

    it('should forward the onTouchTap to onRightIconButtonTouchTap', function () {
      var handleTouchTap = (0, _sinon.spy)();
      var wrapper = shallowWithContext(_react2.default.createElement(_AppBar2.default, {
        iconElementRight: _react2.default.createElement(
          _IconButton2.default,
          null,
          _react2.default.createElement('div', null)
        ),
        onRightIconButtonTouchTap: handleTouchTap
      }));
      wrapper.find(_IconButton2.default).at(1).simulate('touchTap');
      _chai.assert.strictEqual(handleTouchTap.callCount, 1);
    });
  });

  it('call onTitleTouchTap callback', function () {
    var onTitleTouchTap = (0, _sinon.spy)();
    var wrapper = shallowWithContext(_react2.default.createElement(_AppBar2.default, { title: 'Title', onTitleTouchTap: onTitleTouchTap }));

    wrapper.find('h1').simulate('touchTap');
    _chai.assert.strictEqual(onTitleTouchTap.callCount, 1, 'should have called onTitleTouchTap callback function');
  });

  it('hide menu icon when showMenuIconButton is false', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(_AppBar2.default, { title: 'Title', showMenuIconButton: false }));

    _chai.assert.strictEqual(wrapper.find(_IconButton2.default).length, 0, 'should not have menu icon');
  });

  it('renders AppBar and overwrite styles', function () {
    var style = {
      backgroundColor: 'red'
    };
    var wrapper = shallowWithContext(_react2.default.createElement(_AppBar2.default, { title: 'Title', style: style }));

    _chai.assert.strictEqual(wrapper.get(0).props.style.backgroundColor, style.backgroundColor, 'should have backgroundColor to red');
  });

  it('renders title', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(_AppBar2.default, { title: 'Title' }));

    _chai.assert.strictEqual(wrapper.find('h1').length, 1, 'should have title');
  });

  it('renders title and overwrite title styles', function () {
    var titleStyle = {
      backgroundColor: 'red'
    };
    var wrapper = shallowWithContext(_react2.default.createElement(_AppBar2.default, { title: 'Title', titleStyle: titleStyle }));

    _chai.assert.strictEqual(wrapper.find('h1').length, 1, 'should have title');
    _chai.assert.strictEqual(wrapper.find('h1').get(0).props.style.backgroundColor, titleStyle.backgroundColor, 'should have backgroundColor to red');
  });

  it('renders zDepth to paper component', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(_AppBar2.default, { title: 'Title', zDepth: 2 }));

    _chai.assert.strictEqual(wrapper.find('Paper').get(0).props.zDepth, 2, 'should have zDepth to 2');
  });

  it('menuElementLeft\'s style should be iconButtonStyle', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(_AppBar2.default, null));

    var menuElementLeft = wrapper.find(_IconButton2.default).get(0);
    var style = menuElementLeft.props.style;
    var iconButtonStyle = (0, _AppBar.getStyles)(wrapper.props(), wrapper.context()).iconButtonStyle;
    _chai.assert.deepEqual(style, iconButtonStyle, 'style should be iconButtonStyle');
  });

  it('if pass iconStyleLeft={marginTop}, change the marginTop only', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(_AppBar2.default, { iconStyleLeft: { marginTop: 99 } }));

    var menuElementLeft = wrapper.find(_IconButton2.default).get(0);
    var style = menuElementLeft.props.style;
    var iconButtonStyle = (0, _AppBar.getStyles)(wrapper.props(), wrapper.context()).iconButtonStyle;
    var expectedStyle = (0, _assign2.default)({}, iconButtonStyle, { marginTop: 99 });
    _chai.assert.deepEqual(style, expectedStyle, 'should be change style.marginTop only');
  });

  it('if pass iconElementLeft and iconStyleLeft={marginTop}, change the marginTop/muiPrepared only', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(_AppBar2.default, { iconElementLeft: _react2.default.createElement(
        'span',
        null,
        'foo'
      ), iconStyleLeft: { marginTop: 99 } }));

    var menuElementLeft = wrapper.find('div').get(0);
    var style = menuElementLeft.props.style;
    var iconButtonStyle = (0, _AppBar.getStyles)(wrapper.props(), wrapper.context()).iconButtonStyle;
    var expectedStyle = (0, _assign2.default)({}, iconButtonStyle, { marginTop: 99, muiPrepared: true });
    _chai.assert.deepEqual(style, expectedStyle, 'should be change style.marginTop/muiPrepared only');
  });
});