import React from 'react';
import PropTypes from 'prop-types';
import style from 'components/SVG/SVG.style';

const SVG = (props) => {
  let SVGstyle;

  switch (props.colour) {
    case 'white':
      SVGstyle = style.white;
      break;

    case 'grey':
      SVGstyle = style.grey;
      break;

    default:
      SVGstyle = style.white;
  }

  return (
    <svg width={props.size} height={props.size}>
      <rect
        width={props.size}
        height={props.size}
        style={SVGstyle}
      />
    </svg>
  );
};

SVG.propTypes = {
  size: PropTypes.oneOf([20]).isRequired,
  colour: PropTypes.oneOf(['white', 'grey']).isRequired,
  // icon: PropTypes.string.isRequired,
};

export default SVG;
