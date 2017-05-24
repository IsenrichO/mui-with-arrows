'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      table = _context$muiTheme.table;


  return {
    root: {
      backgroundColor: table.backgroundColor,
      width: '100%',
      borderCollapse: 'collapse',
      borderSpacing: 0,
      tableLayout: 'fixed',
      fontFamily: baseTheme.fontFamily
    },
    bodyTable: {
      height: props.fixedHeader || props.fixedFooter ? props.height : 'auto',
      overflowX: 'hidden',
      overflowY: 'auto'
    },
    tableWrapper: {
      height: props.fixedHeader || props.fixedFooter ? 'auto' : props.height,
      overflow: 'auto'
    }
  };
}

var Table = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(Table, _Component);

  function Table() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Table);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      allRowsSelected: false
    }, _this.onCellClick = function (rowNumber, columnNumber, event) {
      if (_this.props.onCellClick) _this.props.onCellClick(rowNumber, columnNumber, event);
    }, _this.onCellHover = function (rowNumber, columnNumber, event) {
      if (_this.props.onCellHover) _this.props.onCellHover(rowNumber, columnNumber, event);
    }, _this.onCellHoverExit = function (rowNumber, columnNumber, event) {
      if (_this.props.onCellHoverExit) _this.props.onCellHoverExit(rowNumber, columnNumber, event);
    }, _this.onRowHover = function (rowNumber) {
      if (_this.props.onRowHover) _this.props.onRowHover(rowNumber);
    }, _this.onRowHoverExit = function (rowNumber) {
      if (_this.props.onRowHoverExit) _this.props.onRowHoverExit(rowNumber);
    }, _this.onRowSelection = function (selectedRows) {
      if (_this.state.allRowsSelected) {
        _this.setState({ allRowsSelected: false });
      }

      if (_this.props.onRowSelection) {
        _this.props.onRowSelection(selectedRows);
      }
    }, _this.onSelectAll = function () {
      if (_this.props.onRowSelection) {
        if (!_this.state.allRowsSelected) {
          _this.props.onRowSelection('all');
        } else {
          _this.props.onRowSelection('none');
        }
      }

      _this.setState({ allRowsSelected: !_this.state.allRowsSelected });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  Table.prototype.componentWillMount = function componentWillMount() {
    if (this.props.allRowsSelected) {
      this.setState({ allRowsSelected: true });
    }
  };

  Table.prototype.isScrollbarVisible = function isScrollbarVisible() {
    var tableDivHeight = this.refs.tableDiv.clientHeight;
    var tableBodyHeight = this.refs.tableBody.clientHeight;

    return tableBodyHeight > tableDivHeight;
  };

  Table.prototype.createTableHeader = function createTableHeader(base) {
    return _react2.default.cloneElement(base, {
      enableSelectAll: base.props.enableSelectAll && this.props.selectable && this.props.multiSelectable,
      onSelectAll: this.onSelectAll,
      selectAllSelected: this.state.allRowsSelected
    });
  };

  Table.prototype.createTableBody = function createTableBody(base) {
    return _react2.default.cloneElement(base, {
      allRowsSelected: this.state.allRowsSelected,
      multiSelectable: this.props.multiSelectable,
      onCellClick: this.onCellClick,
      onCellHover: this.onCellHover,
      onCellHoverExit: this.onCellHoverExit,
      onRowHover: this.onRowHover,
      onRowHoverExit: this.onRowHoverExit,
      onRowSelection: this.onRowSelection,
      selectable: this.props.selectable,
      style: (0, _assign2.default)({ height: this.props.height }, base.props.style)
    });
  };

  Table.prototype.createTableFooter = function createTableFooter(base) {
    return base;
  };

  Table.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        className = _props.className,
        fixedFooter = _props.fixedFooter,
        fixedHeader = _props.fixedHeader,
        style = _props.style,
        wrapperStyle = _props.wrapperStyle,
        headerStyle = _props.headerStyle,
        bodyStyle = _props.bodyStyle,
        footerStyle = _props.footerStyle;
    var prepareStyles = this.context.muiTheme.prepareStyles;

    var styles = getStyles(this.props, this.context);

    var tHead = void 0;
    var tFoot = void 0;
    var tBody = void 0;

    _react2.default.Children.forEach(children, function (child) {
      if (!_react2.default.isValidElement(child)) return;

      var muiName = child.type.muiName;

      if (muiName === 'TableBody') {
        tBody = _this2.createTableBody(child);
      } else if (muiName === 'TableHeader') {
        tHead = _this2.createTableHeader(child);
      } else if (muiName === 'TableFooter') {
        tFoot = _this2.createTableFooter(child);
      } else {
        (0, _warning2.default)(false, 'Material-UI: Children of the Table component must be TableBody or TableHeader or TableFooter.\n           Nothing is rendered.');
      }
    });

    // If we could not find a table-header and a table-body, do not attempt to display anything.
    if (!tBody && !tHead) return null;

    var mergedTableStyle = (0, _assign2.default)(styles.root, style);
    var headerTable = void 0;
    var footerTable = void 0;
    var inlineHeader = void 0;
    var inlineFooter = void 0;

    if (fixedHeader) {
      headerTable = _react2.default.createElement(
        'div',
        { style: prepareStyles((0, _assign2.default)({}, headerStyle)) },
        _react2.default.createElement(
          'table',
          { className: className, style: mergedTableStyle },
          tHead
        )
      );
    } else {
      inlineHeader = tHead;
    }

    if (tFoot !== undefined) {
      if (fixedFooter) {
        footerTable = _react2.default.createElement(
          'div',
          { style: prepareStyles((0, _assign2.default)({}, footerStyle)) },
          _react2.default.createElement(
            'table',
            { className: className, style: prepareStyles(mergedTableStyle) },
            tFoot
          )
        );
      } else {
        inlineFooter = tFoot;
      }
    }

    return _react2.default.createElement(
      'div',
      { style: prepareStyles((0, _assign2.default)(styles.tableWrapper, wrapperStyle)) },
      headerTable,
      _react2.default.createElement(
        'div',
        { style: prepareStyles((0, _assign2.default)(styles.bodyTable, bodyStyle)), ref: 'tableDiv' },
        _react2.default.createElement(
          'table',
          { className: className, style: mergedTableStyle, ref: 'tableBody' },
          inlineHeader,
          inlineFooter,
          tBody
        )
      ),
      footerTable
    );
  };

  return Table;
}(_react.Component), _class.propTypes = {
  /**
   * Set to true to indicate that all rows should be selected.
   */
  allRowsSelected: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the body's table element.
   */
  bodyStyle: _propTypes2.default.object,
  /**
   * Children passed to table.
   */
  children: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * If true, the footer will appear fixed below the table.
   * The default value is true.
   */
  fixedFooter: _propTypes2.default.bool,
  /**
   * If true, the header will appear fixed above the table.
   * The default value is true.
   */
  fixedHeader: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the footer's table element.
   */
  footerStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of the header's table element.
   */
  headerStyle: _propTypes2.default.object,
  /**
   * The height of the table.
   */
  height: _propTypes2.default.string,
  /**
   * If true, multiple table rows can be selected.
   * CTRL/CMD+Click and SHIFT+Click are valid actions.
   * The default value is false.
   */
  multiSelectable: _propTypes2.default.bool,
  /**
   * Called when a row cell is clicked.
   * rowNumber is the row number and columnId is
   * the column number or the column key.
   */
  onCellClick: _propTypes2.default.func,
  /**
   * Called when a table cell is hovered.
   * rowNumber is the row number of the hovered row
   * and columnId is the column number or the column key of the cell.
   */
  onCellHover: _propTypes2.default.func,
  /**
   * Called when a table cell is no longer hovered.
   * rowNumber is the row number of the row and columnId
   * is the column number or the column key of the cell.
   */
  onCellHoverExit: _propTypes2.default.func,
  /**
   * Called when a table row is hovered.
   * rowNumber is the row number of the hovered row.
   */
  onRowHover: _propTypes2.default.func,
  /**
   * Called when a table row is no longer hovered.
   * rowNumber is the row number of the row that is no longer hovered.
   */
  onRowHoverExit: _propTypes2.default.func,
  /**
   * Called when a row is selected.
   * selectedRows is an array of all row selections.
   * IF all rows have been selected, the string "all"
   * will be returned instead to indicate that all rows have been selected.
   */
  onRowSelection: _propTypes2.default.func,
  /**
   * If true, table rows can be selected.
   * If multiple row selection is desired, enable multiSelectable.
   * The default value is true.
   */
  selectable: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * Override the inline-styles of the table's wrapper element.
   */
  wrapperStyle: _propTypes2.default.object
}, _class.defaultProps = {
  allRowsSelected: false,
  fixedFooter: true,
  fixedHeader: true,
  height: 'inherit',
  multiSelectable: false,
  selectable: true
}, _class.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
}, _temp2);
exports.default = Table;