'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _chai = require('chai');

var _GridList = require('./GridList');

var _GridList2 = _interopRequireDefault(_GridList);

var _getMuiTheme = require('../styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<GridList />', function () {
  var muiTheme = (0, _getMuiTheme2.default)();
  var shallowWithContext = function shallowWithContext(node) {
    return (0, _enzyme.shallow)(node, { context: { muiTheme: muiTheme } });
  };

  var tilesData = [{
    img: 'images/grid-list/00-52-29-429_640.jpg',
    title: 'Breakfast',
    author: 'jill111'
  }, {
    img: 'images/grid-list/burger-827309_640.jpg',
    title: 'Tasty burger',
    author: 'pashminu'
  }];

  it('renders children and change cellHeight', function () {
    var cellHeight = 250;
    var wrapper = shallowWithContext(_react2.default.createElement(
      _GridList2.default,
      { cellHeight: cellHeight },
      tilesData.map(function (tile) {
        return _react2.default.createElement(
          'span',
          {
            key: tile.img,
            className: 'grid-tile',
            title: tile.title,
            subtitle: _react2.default.createElement(
              'span',
              null,
              'by ',
              _react2.default.createElement(
                'b',
                null,
                tile.author
              )
            )
          },
          _react2.default.createElement('img', { src: tile.img })
        );
      })
    ));

    _chai.assert.strictEqual(wrapper.find('.grid-tile').length, 2, 'should contain the children');
    _chai.assert.strictEqual(wrapper.children().at(0).prop('style').height, cellHeight + 4, 'should have height to 254');
  });

  it('renders children by default', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(
      _GridList2.default,
      null,
      tilesData.map(function (tile) {
        return _react2.default.createElement(
          'span',
          {
            key: tile.img,
            className: 'grid-tile',
            title: tile.title,
            subtitle: _react2.default.createElement(
              'span',
              null,
              'by ',
              _react2.default.createElement(
                'b',
                null,
                tile.author
              )
            )
          },
          _react2.default.createElement('img', { src: tile.img })
        );
      })
    ));

    _chai.assert.strictEqual(wrapper.find('.grid-tile').length, 2, 'should contain the children');
  });

  it('renders children and change cols', function () {
    var wrapper = shallowWithContext(_react2.default.createElement(
      _GridList2.default,
      { cols: 4 },
      tilesData.map(function (tile) {
        return _react2.default.createElement(
          'span',
          {
            key: tile.img,
            className: 'grid-tile',
            title: tile.title,
            subtitle: _react2.default.createElement(
              'span',
              null,
              'by ',
              _react2.default.createElement(
                'b',
                null,
                tile.author
              )
            )
          },
          _react2.default.createElement('img', { src: tile.img })
        );
      })
    ));

    _chai.assert.strictEqual(wrapper.find('.grid-tile').length, 2, 'should contain the children');
    _chai.assert.strictEqual(wrapper.children().at(0).prop('style').width, '25%', 'should have 25% of width');
  });

  it('renders children and change padding', function () {
    var padding = 10;
    var wrapper = shallowWithContext(_react2.default.createElement(
      _GridList2.default,
      { padding: padding },
      tilesData.map(function (tile) {
        return _react2.default.createElement(
          'span',
          {
            key: tile.img,
            className: 'grid-tile',
            title: tile.title,
            subtitle: _react2.default.createElement(
              'span',
              null,
              'by ',
              _react2.default.createElement(
                'b',
                null,
                tile.author
              )
            )
          },
          _react2.default.createElement('img', { src: tile.img })
        );
      })
    ));

    _chai.assert.strictEqual(wrapper.find('.grid-tile').length, 2, 'should contain the children');
    _chai.assert.strictEqual(wrapper.children().at(0).prop('style').padding, padding / 2, 'should have 5 of padding');
  });

  it('renders children and overwrite style', function () {
    var style = {
      backgroundColor: 'red'
    };
    var wrapper = shallowWithContext(_react2.default.createElement(
      _GridList2.default,
      { style: style },
      tilesData.map(function (tile) {
        return _react2.default.createElement(
          'span',
          {
            key: tile.img,
            className: 'grid-tile',
            title: tile.title,
            subtitle: _react2.default.createElement(
              'span',
              null,
              'by ',
              _react2.default.createElement(
                'b',
                null,
                tile.author
              )
            )
          },
          _react2.default.createElement('img', { src: tile.img })
        );
      })
    ));

    _chai.assert.strictEqual(wrapper.find('.grid-tile').length, 2, 'should contain the children');
    _chai.assert.strictEqual(wrapper.prop('style').backgroundColor, style.backgroundColor, 'should have a red backgroundColor');
  });

  describe('prop: cellHeight', function () {
    it('should accept auto as a property', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(
        _GridList2.default,
        { cellHeight: 'auto' },
        _react2.default.createElement('div', null)
      ));

      _chai.assert.strictEqual(wrapper.children().at(0).props().style.height, 'auto');
    });
  });
}); /* eslint-env mocha */