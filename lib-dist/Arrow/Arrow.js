'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _set = require('babel-runtime/core-js/set');

var _set2 = _interopRequireDefault(_set);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getUniqClasses = function getUniqClasses(classes) {
  return Array.prototype.join.call([].concat(new _set2.default(classes.split(' ').concat('paper-arrow'))), ' ');
};

var Arrow = function Arrow(_ref) {
  var arrow = _ref.arrow,
      arrowPos = _ref.arrowPos,
      arrowStyle = _ref.arrowStyle,
      className = _ref.className;

  return _react2.default.createElement('div', {
    className: getUniqClasses(className),
    style: _style2.default
    // style={prepareStyles(styles.arrow)}
  });
};

exports.default = Arrow;


Arrow.propTypes = {
  arrow: _propTypes2.default.bool,
  arrowPos: _propTypes2.default.oneOf(['left', 'right', 'top', 'bottom', 'center', 'middle']),
  arrowStyle: _propTypes2.default.object,
  className: _propTypes2.default.string
};

Arrow.defaultProps = {
  arrow: false,
  arrowPos: 'left',
  arrowStyle: _style2.default,
  className: 'paper-arrow'
};