import React from 'react';
import PropTypes from 'prop-types';
import DefaultStyles from './style';

const getUniqClasses = (classes) => Array.prototype.join.call(
  [...new Set(classes.split(' ').concat('paper-arrow'))],
  ' ',
);

const Arrow = ({
  arrow,
  arrowPos,
  arrowStyle,
  className,
}) => {
  return (
    <div
      className={getUniqClasses(className)}
      style={DefaultStyles}
      // style={prepareStyles(styles.arrow)}
    />
  );
};

export default Arrow;

Arrow.propTypes = {
  arrow: PropTypes.bool,
  arrowPos: PropTypes.oneOf([
    'left',
    'right',
    'top',
    'bottom',
    'center',
    'middle',
  ]),
  arrowStyle: PropTypes.object,
  className: PropTypes.string,
};

Arrow.defaultProps = {
  arrow: false,
  arrowPos: 'left',
  arrowStyle: DefaultStyles,
  className: 'paper-arrow',
};
