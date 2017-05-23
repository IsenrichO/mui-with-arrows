import React, { Component } from 'react';
import PropTypes from 'prop-types';
import propTypes from '../utils/propTypes';
import transitions from '../styles/transitions';

function getStyles(props, context) {
  const {
    rounded,
    circle,
    transitionEnabled,
    zDepth,
  } = props;

  const {
    baseTheme,
    paper,
    paperArrow,
    borderRadius,
  } = context.muiTheme;

  return {
    root: {
      position: 'relative',
      color: paper.color,
      backgroundColor: paper.backgroundColor,
      transition: transitionEnabled && transitions.easeOut(),
      boxSizing: 'border-box',
      fontFamily: baseTheme.fontFamily,
      WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', // Remove mobile color flashing (deprecated)
      boxShadow: paper.zDepthShadows[zDepth - 1], // No shadow for 0 depth papers
      borderRadius: circle ? '50%' : rounded ? borderRadius : 0,
    },
    arrow: {
      position: 'absolute',
      content: '""',
      right: 'calc(100% - 1px)',
      border: '14px solid transparent',
      borderRightColor: '#FFF',
      filter: 'drop-shadow(-2px 1px 3px rgba(0, 0, 0, 0.24))',
    },
  };
}

export default class PaperDefault extends Component {
  static propTypes = {
    children: PropTypes.node,
    circle: PropTypes.bool,
    rounded: PropTypes.bool,
    style: PropTypes.object,
    transitionEnabled: PropTypes.bool,
    zDepth: propTypes.zDepth,
  };

  static defaultProps = {
    circle: false,
    rounded: true,
    transitionEnabled: true,
    zDepth: 1,
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  render() {
    const {
      arrow,
      children,
      circle, // eslint-disable-line no-unused-vars
      rounded, // eslint-disable-line no-unused-vars
      style,
      transitionEnabled, // eslint-disable-line no-unused-vars
      zDepth, // eslint-disable-line no-unused-vars
      ...other
    } = this.props;

    const { prepareStyles } = this.context.muiTheme;
    const styles = getStyles(this.props, this.context);

    return (
      <div
        {...other}
        className="paper-default"
        style={prepareStyles(Object.assign(styles.root, style))}
      >
        <div
          className="paper-arrow"
          style={prepareStyles(styles.arrow)}
        />
        {children}
      </div>
    );
  }
}
