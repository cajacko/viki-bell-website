/* eslint react/no-danger: 0 */

import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ svg, colour }) => {
  const string = svg.replace(new RegExp(/{{colour}}/, 'g'), colour);

  return (
    <div dangerouslySetInnerHTML={{ __html: string }} />
  );
};

Icon.propTypes = {
  svg: PropTypes.string.isRequired,
  colour: PropTypes.string,
};

Icon.defaultProps = {
  colour: 'black',
};

export default Icon;
