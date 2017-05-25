import React, { Component } from 'react';
import PropTypes from 'prop-types';
import propTypes from '../utils/propTypes';
import transitions from '../styles/transitions';
import { ArrowStyles } from '../Arrow';
import { getUniqClasses } from '../utils/classes';

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
      color: paper.color,
      backgroundColor: paper.backgroundColor,
      transition: transitionEnabled && transitions.easeOut(),
      boxSizing: 'border-box',
      fontFamily: baseTheme.fontFamily,
      WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',  // Remove mobile color flashing (deprecated)
      boxShadow: paper.zDepthShadows[zDepth - 1],   // No shadow for 0-depth `Paper`
      borderRadius: circle ? '50%' : rounded ? borderRadius : '0px',
    },
    arrow: {
      position: 'absolute',
      right: 'calc(100% - 1px)',
      WebkitBorder: '10px solid transparent',
      MozBorder: '10px solid transparent',
      OBorder: '10px solid transparent',
      border: '10px solid transparent',
      WebkitBorderRightColor: '#FFFFFF',
      MozBorderRightColor: '#FFFFFF',
      OBorderRightColor: '#FFFFFF',
      borderRightColor: '#FFFFFF',
      WebkitFilter: 'drop-shadow(rgba(0, 0, 0, 0.24) -3px 0 2px)',
      filter: 'drop-shadow(rgba(0, 0, 0, 0.24) -3px 0 2px)',
    },
  };
}

export default class PaperWithArrow extends Component {
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
      circle,
      children,
      className,
      rounded,
      style,
      transitionEnabled,
      zDepth,
      ...other
    } = this.props;

    const { prepareStyles } = this.context.muiTheme;
    const styles = getStyles(this.props, this.context);

    console.log('\nPREPARED STYLES:', prepareStyles(Object.assign(styles.root, styles)));
    console.log('\nOBJECT ASSIGNED - root:', Object.assign(styles.root, styles));
    console.log('\nPREPARED STYLES - arrow:', prepareStyles(styles.arrow));

    return (
      <div
        {...other}
        // className={getUniqClasses(className, 'paper-with-arrow')}
        className={className}
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
