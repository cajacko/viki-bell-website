import React from 'react';
import PropTypes from 'prop-types';

const More = ({ size, colour }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width={size}
    height={size}
    viewBox="0 0 400 400"
  >
    <g>
      <circle cx="200.333" cy="200" r="49.583" fill={colour} />
      <circle cx="349.083" cy="200" r="49.583" fill={colour} />
      <circle cx="51.584" cy="200" r="49.583" fill={colour} />
    </g>
  </svg>
);

More.propTypes = {
  colour: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

export default More;
