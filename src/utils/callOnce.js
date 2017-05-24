import warning from 'warning';

const CALLED_ONCE = 'muiPrepared';

export default function callOnce() {
  if (process.env.NODE_ENV !== 'production') {
    return (style) => {
      if (!style[CALLED_ONCE]) {
        throw new ReferenceError(`Error: Unable to find \
          property ${CALLED_ONCE} of ${typeof style} \`style\``);
      }

      if (style[CALLED_ONCE]) {
        warning(
          false,
          `Material-UI: You cannot call \`prepareStyles()\`
          on the same style object more than once.`
        );
      }
      style[CALLED_ONCE] = true;
      return style;
    };
  }
}
