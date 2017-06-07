import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import textLinkStyle from 'components/TextLink/TextLink.style';

const TextLink = ({ href, colour, children, style }) => {
  let colourStyle;

  switch (colour) {
    case 'black':
      colourStyle = textLinkStyle.black;
      break;

    case 'turqoise':
      colourStyle = textLinkStyle.turqoise;
      break;

    case 'white':
      colourStyle = textLinkStyle.white;
      break;

    default:
      colourStyle = textLinkStyle.turqoise;
      break;
  }

  const hover = {
    ...textLinkStyle.style[':hover'],
    ...colourStyle[':hover'],
    ...style[':hover'],
  };

  const linkStyle = {
    ...textLinkStyle.style,
    ...colourStyle,
    ...style,
    ':hover': hover,
  };

  return (
    <a href={href} style={linkStyle}>
      {children}
    </a>
  );
};

TextLink.propTypes = {
  href: PropTypes.string.isRequired,
  colour: PropTypes.oneOf([
    'black',
    'turqoise',
    'white',
  ]).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
  // eslint-disable-next-line
  style: PropTypes.object,
};

TextLink.defaultProps = {
  style: {},
};

export default Radium(TextLink);
