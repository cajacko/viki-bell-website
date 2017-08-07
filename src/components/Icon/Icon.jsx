/* eslint react/no-danger: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import icons from 'components/Icon/icons';

const Icon = ({ svg, colour, icon, className }) => {
  let string = '';

  if (svg) {
    string = svg.replace(new RegExp(/{{colour}}/, 'g'), colour);
  } else if (icon && icons[icon]) {
    string = icons[icon];
  } else if (icon) {
    // eslint-disable-next-line
    console.warn(icon);
  }

  if (className) {
    string = string.replace('<svg', `<svg class="${className}"`);
  }

  return (
    <div dangerouslySetInnerHTML={{ __html: string }} />
  );
};

Icon.propTypes = {
  svg: PropTypes.string,
  colour: PropTypes.string,
  icon: PropTypes.string,
  className: PropTypes.string,
};

Icon.defaultProps = {
  colour: 'black',
  icon: null,
  svg: null,
  className: null,
};

export default Icon;
