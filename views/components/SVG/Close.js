import React from 'react';
import PropTypes from 'prop-types';

const Close = ({ size, colour }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 1792 1792"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z"
      fill={colour}
    />
  </svg>
);

Close.propTypes = {
  colour: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

export default Close;
