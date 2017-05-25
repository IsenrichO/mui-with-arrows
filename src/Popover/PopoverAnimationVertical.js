import React, {Component} from 'react';
import PropTypes from 'prop-types';
import propTypes from '../utils/propTypes';
import transitions from '../styles/transitions';
import PaperWithArrow from '../Paper';

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
      transform: open ? 'scaleY(1)' : 'scaleY(0)',
      transformOrigin: `${horizontal} ${targetOrigin.vertical}`,
      transition: transitions.easeOut('450ms', ['transform', 'opacity']),
      maxHeight: '100%',
    },
  };
}

export default class PopoverAnimationVertical extends Component {
  static propTypes = {
    children: PropTypes.node,
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
      style,
      zDepth,
    } = this.props;

    const {prepareStyles} = this.context.muiTheme;
    const styles = getStyles(this.props, this.context, this.state);

    return (
      <PaperWithArrow
        className={className}
        style={Object.assign(styles.root, style)}
        zDepth={zDepth}
      >
        {this.props.children}
      </PaperWithArrow>
    );
  }
}
