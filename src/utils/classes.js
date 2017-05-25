export const getUniqClasses = (classes, defaultClasses) => Array.prototype.join.call(
  [...new Set(classes.split(' ').concat(defaultClasses))],
  ' '
);

export default {
  getUniqClasses,
};
