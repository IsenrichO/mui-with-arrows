'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUniqClasses = undefined;

var _set = require('babel-runtime/core-js/set');

var _set2 = _interopRequireDefault(_set);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getUniqClasses = exports.getUniqClasses = function getUniqClasses(classes, defaultClasses) {
  return Array.prototype.join.call([].concat(new _set2.default(classes.split(' ').concat(defaultClasses))), ' ');
};

exports.default = {
  getUniqClasses: getUniqClasses
};