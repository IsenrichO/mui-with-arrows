import React, {Component} from 'react';
import PropTypes from 'prop-types';
import propTypes from '../utils/propTypes';
import PaperWithArrow from '../Paper';
import transitions from '../styles/transitions';

function getStyles(props, context, state) {
  const {targetOrigin} = props;
  const {open} = state;
  const {muiTheme} = context;
  const horizontal = targetOrigin.horizontal.replace('middle', 'vertical');

  return {
    root: {
      position: 'fixed',
      zIndex: muiTheme.zIndex.popover,
      opacity: open ? 1 : 0,
      transform: open ? 'scale(1, 1)' : 'scale(0, 0)',
      transformOrigin: `${horizontal} ${targetOrigin.vertical}`,
      transition: transitions.easeOut('250ms', ['transform', 'opacity']),
      maxHeight: '100%',
    },
    horizontal: {
      maxHeight: '100%',
      overflowY: 'auto',
      transform: open ? 'scaleX(1)' : 'scaleX(0)',
      opacity: open ? 1 : 0,
      transformOrigin: `${horizontal} ${targetOrigin.vertical}`,
      transition: transitions.easeOut('250ms', ['transform', 'opacity']),
    },
    vertical: {
      opacity: open ? 1 : 0,
      transform: open ? 'scaleY(1)' : 'scaleY(0)',
      transformOrigin: `${horizontal} ${targetOrigin.vertical}`,
      transition: transitions.easeOut('500ms', ['transform', 'opacity']),
    },
  };
}

export default class PopoverAnimationDefault extends Component {
  static propTypes = {
    children: PropTypes.node,
    /**
     * The css class name of the root element.
     */
    className: PropTypes.string,
    open: PropTypes.bool.isRequired,
    /**
     * Override the inline-styles of the root element.
     */
    style: PropTypes.object,
    targetOrigin: propTypes.origin.isRequired,
    zDepth: propTypes.zDepth,
  };

  static defaultProps = {
    style: {},
    zDepth: 1,
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  state = {
    open: false,
  };

  componentDidMount() {
    const open = true;
    this.setState({ open });
  }

  componentWillReceiveProps(nextProps) {
    const { open } = nextProps;
    this.setState({ open });
  }

  render() {
    const {
      className,
      children,
      style,
      zDepth,
    } = this.props;

    const {prepareStyles} = this.context.muiTheme;
    const styles = getStyles(this.props, this.context, this.state);

    return (
      <PaperWithArrow
        style={Object.assign(styles.root, style)}
        className={className}
        zDepth={zDepth}
      >
        <div style={prepareStyles(styles.horizontal)}>
          <div style={prepareStyles(styles.vertical)}>
            {children}
          </div>
        </div>
      </PaperWithArrow>
    );
  }
}
