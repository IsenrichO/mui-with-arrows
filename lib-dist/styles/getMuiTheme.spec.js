'use strict';

var _chai = require('chai');

var _getMuiTheme = require('./getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */

describe('./styles/getMuiTheme', function () {
  // Test backward compatibility
  it('should work when we use two parameters', function () {
    var muiTheme = (0, _getMuiTheme2.default)({
      palette: {
        accent1Color: 'Colors.deepOrange500'
      }
    }, {
      userAgent: 'all',
      appBar: {
        height: 56
      }
    });

    (0, _chai.expect)(muiTheme.userAgent).to.equal('all');
    (0, _chai.expect)(muiTheme.palette.accent1Color).to.equal('Colors.deepOrange500');
    (0, _chai.expect)(muiTheme.appBar.height).to.equal(56);
  });

  it('should work when we use one parameter', function () {
    var muiTheme = (0, _getMuiTheme2.default)({
      palette: {
        accent1Color: 'Colors.deepOrange500'
      },
      userAgent: 'all',
      appBar: {
        height: 56
      }
    });

    (0, _chai.expect)(muiTheme.userAgent).to.equal('all');
    (0, _chai.expect)(muiTheme.palette.accent1Color).to.equal('Colors.deepOrange500');
    (0, _chai.expect)(muiTheme.appBar.height).to.equal(56);
  });

  it('should work when we mutate the muiTheme', function () {
    var muiTheme1 = (0, _getMuiTheme2.default)({
      palette: {
        accent1Color: 'Colors.deepOrange500'
      },
      userAgent: 'all'
    });

    var muiTheme2 = (0, _getMuiTheme2.default)(muiTheme1, {
      palette: {
        accent1Color: 'Colors.deepOrange600'
      },
      appBar: {
        height: 56
      }
    });

    (0, _chai.expect)(muiTheme2.userAgent).to.equal('all');
    (0, _chai.expect)(muiTheme2.palette.accent1Color).to.equal('Colors.deepOrange600');
    (0, _chai.expect)(muiTheme2.appBar.height).to.equal(56);
  });

  describe('prepareStyles', function () {
    describe('rtl', function () {
      it('should revert the rules when isRtl is true', function () {
        var muiTheme = (0, _getMuiTheme2.default)({}, {
          isRtl: true
        });

        var stylePrepared = muiTheme.prepareStyles({
          right: 10
        });

        (0, _chai.expect)(stylePrepared).to.deep.equal({
          left: 10,
          muiPrepared: true
        });
      });
    });
  });
});