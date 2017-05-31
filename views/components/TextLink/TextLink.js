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

    default:
      colourStyle = textLinkStyle.turqoise;
      break;
  }

  const hover = {
    ...style[':hover'],
    ...colourStyle[':hover'],
    ...textLinkStyle.style[':hover'],
  };

  const linkStyle = {
    ...style,
    ...colourStyle,
    ...textLinkStyle.style,
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
