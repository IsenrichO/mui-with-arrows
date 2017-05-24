'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = callOnce;

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CALLED_ONCE = 'muiPrepared';

function callOnce() {
  if (process.env.NODE_ENV !== 'production') {
    return function (style) {
      if (style[CALLED_ONCE]) {
        (0, _warning2.default)(false, 'Material-UI: You cannot call `prepareStyles()`\n          on the same style object more than once.');
      }
      style[CALLED_ONCE] = true;
      return style;

      // if (!style[CALLED_ONCE]) {
      //   throw new ReferenceError(`Error: Unable to find \
      //     property ${CALLED_ONCE} of ${typeof style} \`style\``);
      // }
    };
  }
}