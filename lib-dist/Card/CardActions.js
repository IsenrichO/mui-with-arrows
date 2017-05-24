'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles() {
  return {
    root: {
      padding: 8,
      position: 'relative'
    },
    action: {
      marginRight: 8
    }
  };
}

var CardActions = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(CardActions, _Component);

  function CardActions() {
    (0, _classCallCheck3.default)(this, CardActions);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  CardActions.prototype.render = function render() {
    var _props = this.props,
        actAsExpander = _props.actAsExpander,
        children = _props.children,
        expandable = _props.expandable,
        showExpandableButton = _props.showExpandableButton,
        style = _props.style,
        other = (0, _objectWithoutProperties3.default)(_props, ['actAsExpander', 'children', 'expandable', 'showExpandableButton', 'style']);
    var prepareStyles = this.context.muiTheme.prepareStyles;

    var styles = getStyles(this.props, this.context);

    var styledChildren = _react2.default.Children.map(children, function (child) {
      if (_react2.default.isValidElement(child)) {
        return _react2.default.cloneElement(child, {
          style: (0, _assign2.default)({}, styles.action, child.props.style)
        });
      }
    });

    return _react2.default.createElement(
      'div',
      (0, _extends3.default)({}, other, { style: prepareStyles((0, _assign2.default)(styles.root, style)) }),
      styledChildren
    );
  };

  return CardActions;
}(_react.Component), _class.propTypes = {
  /**
   * If true, a click on this card component expands the card.
   */
  actAsExpander: _propTypes2.default.bool,
  /**
   * Can be used to render elements inside the Card Action.
   */
  children: _propTypes2.default.node,
  /**
   * If true, this card component is expandable.
   */
  expandable: _propTypes2.default.bool,
  /**
   * If true, this card component will include a button to expand the card.
   */
  showExpandableButton: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp);
exports.default = CardActions;