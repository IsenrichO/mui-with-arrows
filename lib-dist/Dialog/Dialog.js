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

var _class, _temp2, _class2, _temp4, _class3, _temp6;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactEventListener = require('react-event-listener');

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _keycode = require('keycode');

var _keycode2 = _interopRequireDefault(_keycode);

var _transitions = require('../styles/transitions');

var _transitions2 = _interopRequireDefault(_transitions);

var _Overlay = require('../internal/Overlay');

var _Overlay2 = _interopRequireDefault(_Overlay);

var _RenderToLayer = require('../internal/RenderToLayer');

var _RenderToLayer2 = _interopRequireDefault(_RenderToLayer);

var _Paper = require('../Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _TransitionGroup = require('react-transition-group/TransitionGroup');

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TransitionItem = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(TransitionItem, _Component);

  function TransitionItem() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TransitionItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      style: {}
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  TransitionItem.prototype.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.enterTimeout);
    clearTimeout(this.leaveTimeout);
  };

  TransitionItem.prototype.componentWillEnter = function componentWillEnter(callback) {
    this.componentWillAppear(callback);
  };

  TransitionItem.prototype.componentWillAppear = function componentWillAppear(callback) {
    var spacing = this.context.muiTheme.baseTheme.spacing;

    this.setState({
      style: {
        opacity: 1,
        transform: 'translate(0, ' + spacing.desktopKeylineIncrement + 'px)'
      }
    });

    this.enterTimeout = setTimeout(callback, 450); // matches transition duration
  };

  TransitionItem.prototype.componentWillLeave = function componentWillLeave(callback) {
    this.setState({
      style: {
        opacity: 0,
        transform: 'translate(0, 0)'
      }
    });

    this.leaveTimeout = setTimeout(callback, 450); // matches transition duration
  };

  TransitionItem.prototype.render = function render() {
    var _props = this.props,
        style = _props.style,
        children = _props.children,
        other = (0, _objectWithoutProperties3.default)(_props, ['style', 'children']);
    var prepareStyles = this.context.muiTheme.prepareStyles;


    return _react2.default.createElement(
      'div',
      (0, _extends3.default)({}, other, { style: prepareStyles((0, _assign2.default)({}, this.state.style, style)) }),
      children
    );
  };

  return TransitionItem;
}(_react.Component), _class.propTypes = {
  children: _propTypes2.default.node,
  style: _propTypes2.default.object
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);


function getStyles(props, context) {
  var autoScrollBodyContent = props.autoScrollBodyContent,
      open = props.open;
  var _context$muiTheme = context.muiTheme,
      _context$muiTheme$bas = _context$muiTheme.baseTheme,
      spacing = _context$muiTheme$bas.spacing,
      palette = _context$muiTheme$bas.palette,
      dialog = _context$muiTheme.dialog,
      zIndex = _context$muiTheme.zIndex;


  var gutter = spacing.desktopGutter;
  var borderScroll = '1px solid ' + palette.borderColor;

  return {
    root: {
      position: 'fixed',
      boxSizing: 'border-box',
      WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
      zIndex: zIndex.dialog,
      top: 0,
      left: open ? 0 : -10000,
      width: '100%',
      height: '100%',
      transition: open ? _transitions2.default.easeOut('0ms', 'left', '0ms') : _transitions2.default.easeOut('0ms', 'left', '450ms')
    },
    content: {
      boxSizing: 'border-box',
      WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
      transition: _transitions2.default.easeOut(),
      position: 'relative',
      width: '75%',
      maxWidth: spacing.desktopKeylineIncrement * 12,
      margin: '0 auto',
      zIndex: zIndex.dialog
    },
    actionsContainer: {
      boxSizing: 'border-box',
      WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
      padding: 8,
      width: '100%',
      textAlign: 'right',
      marginTop: autoScrollBodyContent ? -1 : 0
    },
    overlay: {
      zIndex: zIndex.dialogOverlay
    },
    title: {
      margin: 0,
      padding: gutter + 'px ' + gutter + 'px 20px ' + gutter + 'px',
      color: palette.textColor,
      fontSize: dialog.titleFontSize,
      lineHeight: '32px',
      fontWeight: 400,
      marginBottom: autoScrollBodyContent ? -1 : 0
    },
    body: {
      fontSize: dialog.bodyFontSize,
      color: dialog.bodyColor,
      padding: (props.title ? 0 : gutter) + 'px ' + gutter + 'px ' + gutter + 'px',
      boxSizing: 'border-box',
      overflowY: autoScrollBodyContent ? 'auto' : 'hidden',
      borderTop: autoScrollBodyContent ? borderScroll : 'none',
      borderBottom: autoScrollBodyContent ? borderScroll : 'none'
    }
  };
}

var DialogInline = (_temp4 = _class2 = function (_Component2) {
  (0, _inherits3.default)(DialogInline, _Component2);

  function DialogInline() {
    var _temp3, _this2, _ret2;

    (0, _classCallCheck3.default)(this, DialogInline);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp3 = (_this2 = (0, _possibleConstructorReturn3.default)(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.handleTouchTapOverlay = function () {
      _this2.requestClose(false);
    }, _this2.handleKeyUp = function (event) {
      if ((0, _keycode2.default)(event) === 'esc') {
        _this2.requestClose(false);
      }
    }, _this2.handleResize = function () {
      _this2.positionDialog();
    }, _temp3), (0, _possibleConstructorReturn3.default)(_this2, _ret2);
  }

  DialogInline.prototype.componentDidMount = function componentDidMount() {
    this.positionDialog();
  };

  DialogInline.prototype.componentDidUpdate = function componentDidUpdate() {
    this.positionDialog();
  };

  DialogInline.prototype.positionDialog = function positionDialog() {
    var _props2 = this.props,
        actions = _props2.actions,
        autoDetectWindowHeight = _props2.autoDetectWindowHeight,
        autoScrollBodyContent = _props2.autoScrollBodyContent,
        bodyStyle = _props2.bodyStyle,
        open = _props2.open,
        repositionOnUpdate = _props2.repositionOnUpdate,
        title = _props2.title;


    if (!open) {
      return;
    }

    var clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    var container = _reactDom2.default.findDOMNode(this);
    var dialogWindow = _reactDom2.default.findDOMNode(this.refs.dialogWindow);
    var dialogContent = _reactDom2.default.findDOMNode(this.refs.dialogContent);
    var minPaddingTop = 16;

    // Reset the height in case the window was resized.
    dialogWindow.style.height = '';
    dialogContent.style.height = '';

    var dialogWindowHeight = dialogWindow.offsetHeight;
    var paddingTop = (clientHeight - dialogWindowHeight) / 2 - 64;
    if (paddingTop < minPaddingTop) paddingTop = minPaddingTop;

    // Vertically center the dialog window, but make sure it doesn't
    // transition to that position.
    if (repositionOnUpdate || !container.style.paddingTop) {
      container.style.paddingTop = paddingTop + 'px';
    }

    // Force a height if the dialog is taller than clientHeight
    if (autoDetectWindowHeight || autoScrollBodyContent) {
      var styles = getStyles(this.props, this.context);
      styles.body = (0, _assign2.default)(styles.body, bodyStyle);
      var maxDialogContentHeight = clientHeight - 2 * 64;

      if (title) maxDialogContentHeight -= dialogContent.previousSibling.offsetHeight;

      if (_react2.default.Children.count(actions)) {
        maxDialogContentHeight -= dialogContent.nextSibling.offsetHeight;
      }

      dialogContent.style.maxHeight = maxDialogContentHeight + 'px';
      if (maxDialogContentHeight > dialogWindowHeight) {
        dialogContent.style.borderBottom = 'none';
        dialogContent.style.borderTop = 'none';
      }
    }
  };

  DialogInline.prototype.requestClose = function requestClose(buttonClicked) {
    if (!buttonClicked && this.props.modal) {
      return;
    }

    if (this.props.onRequestClose) {
      this.props.onRequestClose(!!buttonClicked);
    }
  };

  DialogInline.prototype.render = function render() {
    var _props3 = this.props,
        actions = _props3.actions,
        actionsContainerClassName = _props3.actionsContainerClassName,
        actionsContainerStyle = _props3.actionsContainerStyle,
        bodyClassName = _props3.bodyClassName,
        bodyStyle = _props3.bodyStyle,
        children = _props3.children,
        className = _props3.className,
        contentClassName = _props3.contentClassName,
        contentStyle = _props3.contentStyle,
        overlayClassName = _props3.overlayClassName,
        overlayStyle = _props3.overlayStyle,
        open = _props3.open,
        titleClassName = _props3.titleClassName,
        titleStyle = _props3.titleStyle,
        title = _props3.title,
        style = _props3.style;
    var prepareStyles = this.context.muiTheme.prepareStyles;

    var styles = getStyles(this.props, this.context);

    styles.root = (0, _assign2.default)(styles.root, style);
    styles.content = (0, _assign2.default)(styles.content, contentStyle);
    styles.body = (0, _assign2.default)(styles.body, bodyStyle);
    styles.actionsContainer = (0, _assign2.default)(styles.actionsContainer, actionsContainerStyle);
    styles.overlay = (0, _assign2.default)(styles.overlay, overlayStyle);
    styles.title = (0, _assign2.default)(styles.title, titleStyle);

    var actionsContainer = _react2.default.Children.count(actions) > 0 && _react2.default.createElement(
      'div',
      { className: actionsContainerClassName, style: prepareStyles(styles.actionsContainer) },
      _react2.default.Children.toArray(actions)
    );

    var titleElement = title;
    if (_react2.default.isValidElement(title)) {
      titleElement = _react2.default.cloneElement(title, {
        className: title.props.className || titleClassName,
        style: prepareStyles((0, _assign2.default)(styles.title, title.props.style))
      });
    } else if (typeof title === 'string') {
      titleElement = _react2.default.createElement(
        'h3',
        { className: titleClassName, style: prepareStyles(styles.title) },
        title
      );
    }

    return _react2.default.createElement(
      'div',
      { className: className, style: prepareStyles(styles.root) },
      open && _react2.default.createElement(_reactEventListener2.default, {
        target: 'window',
        onKeyUp: this.handleKeyUp,
        onResize: this.handleResize
      }),
      _react2.default.createElement(
        _TransitionGroup2.default,
        {
          component: 'div',
          ref: 'dialogWindow',
          transitionAppear: true,
          transitionAppearTimeout: 450,
          transitionEnter: true,
          transitionEnterTimeout: 450
        },
        open && _react2.default.createElement(
          TransitionItem,
          {
            className: contentClassName,
            style: styles.content
          },
          _react2.default.createElement(
            _Paper2.default,
            { zDepth: 4 },
            titleElement,
            _react2.default.createElement(
              'div',
              {
                ref: 'dialogContent',
                className: bodyClassName,
                style: prepareStyles(styles.body)
              },
              children
            ),
            actionsContainer
          )
        )
      ),
      _react2.default.createElement(_Overlay2.default, {
        show: open,
        className: overlayClassName,
        style: styles.overlay,
        onTouchTap: this.handleTouchTapOverlay
      })
    );
  };

  return DialogInline;
}(_react.Component), _class2.propTypes = {
  actions: _propTypes2.default.node,
  actionsContainerClassName: _propTypes2.default.string,
  actionsContainerStyle: _propTypes2.default.object,
  autoDetectWindowHeight: _propTypes2.default.bool,
  autoScrollBodyContent: _propTypes2.default.bool,
  bodyClassName: _propTypes2.default.string,
  bodyStyle: _propTypes2.default.object,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  contentClassName: _propTypes2.default.string,
  contentStyle: _propTypes2.default.object,
  modal: _propTypes2.default.bool,
  onRequestClose: _propTypes2.default.func,
  open: _propTypes2.default.bool.isRequired,
  overlayClassName: _propTypes2.default.string,
  overlayStyle: _propTypes2.default.object,
  repositionOnUpdate: _propTypes2.default.bool,
  style: _propTypes2.default.object,
  title: _propTypes2.default.node,
  titleClassName: _propTypes2.default.string,
  titleStyle: _propTypes2.default.object
}, _class2.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp4);
var Dialog = (_temp6 = _class3 = function (_Component3) {
  (0, _inherits3.default)(Dialog, _Component3);

  function Dialog() {
    var _temp5, _this3, _ret3;

    (0, _classCallCheck3.default)(this, Dialog);

    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return _ret3 = (_temp5 = (_this3 = (0, _possibleConstructorReturn3.default)(this, _Component3.call.apply(_Component3, [this].concat(args))), _this3), _this3.renderLayer = function () {
      return _react2.default.createElement(DialogInline, _this3.props);
    }, _temp5), (0, _possibleConstructorReturn3.default)(_this3, _ret3);
  }

  Dialog.prototype.render = function render() {
    return _react2.default.createElement(_RenderToLayer2.default, { render: this.renderLayer, open: true, useLayerForClickAway: false });
  };

  return Dialog;
}(_react.Component), _class3.propTypes = {
  /**
   * Action buttons to display below the Dialog content (`children`).
   * This property accepts either a React element, or an array of React elements.
   */
  actions: _propTypes2.default.node,
  /**
   * The `className` to add to the actions container's root element.
   */
  actionsContainerClassName: _propTypes2.default.string,
  /**
   * Overrides the inline-styles of the actions container's root element.
   */
  actionsContainerStyle: _propTypes2.default.object,
  /**
   * If set to true, the height of the `Dialog` will be auto detected. A max height
   * will be enforced so that the content does not extend beyond the viewport.
   */
  autoDetectWindowHeight: _propTypes2.default.bool,
  /**
   * If set to true, the body content of the `Dialog` will be scrollable.
   */
  autoScrollBodyContent: _propTypes2.default.bool,
  /**
   * The `className` to add to the content's root element under the title.
   */
  bodyClassName: _propTypes2.default.string,
  /**
   * Overrides the inline-styles of the content's root element under the title.
   */
  bodyStyle: _propTypes2.default.object,
  /**
   * The contents of the `Dialog`.
   */
  children: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * The `className` to add to the content container.
   */
  contentClassName: _propTypes2.default.string,
  /**
   * Overrides the inline-styles of the content container.
   */
  contentStyle: _propTypes2.default.object,
  /**
   * Force the user to use one of the actions in the `Dialog`.
   * Clicking outside the `Dialog` will not trigger the `onRequestClose`.
   */
  modal: _propTypes2.default.bool,
  /**
   * Fired when the `Dialog` is requested to be closed by a click outside the `Dialog` or on the buttons.
   *
   * @param {bool} buttonClicked Determines whether a button click triggered this request.
   */
  onRequestClose: _propTypes2.default.func,
  /**
   * Controls whether the Dialog is opened or not.
   */
  open: _propTypes2.default.bool.isRequired,
  /**
   * The `className` to add to the `Overlay` component that is rendered behind the `Dialog`.
   */
  overlayClassName: _propTypes2.default.string,
  /**
   * Overrides the inline-styles of the `Overlay` component that is rendered behind the `Dialog`.
   */
  overlayStyle: _propTypes2.default.object,
  /**
   * Determines whether the `Dialog` should be repositioned when it's contents are updated.
   */
  repositionOnUpdate: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * The title to display on the `Dialog`. Could be number, string, element or an array containing these types.
   */
  title: _propTypes2.default.node,
  /**
   * The `className` to add to the title's root container element.
   */
  titleClassName: _propTypes2.default.string,
  /**
   * Overrides the inline-styles of the title's root container element.
   */
  titleStyle: _propTypes2.default.object
}, _class3.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _class3.defaultProps = {
  autoDetectWindowHeight: true,
  autoScrollBodyContent: false,
  modal: false,
  repositionOnUpdate: true
}, _temp6);
exports.default = Dialog;