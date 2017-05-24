'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

exports.default = callOnce;

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CALLED_ONCE = 'muiPrepared';

function callOnce() {
  if (process.env.NODE_ENV !== 'production') {
    return function (style) {
      if (!style[CALLED_ONCE]) {
        throw new ReferenceError('Error: Unable to find           property ' + CALLED_ONCE + ' of ' + (typeof style === 'undefined' ? 'undefined' : (0, _typeof3.default)(style)) + ' `style`');
      }

      if (style[CALLED_ONCE]) {
        (0, _warning2.default)(false, 'Material-UI: You cannot call `prepareStyles()`\n          on the same style object more than once.');
      }
      style[CALLED_ONCE] = true;
      return style;
    };
  }
}