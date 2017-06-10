import React from 'react';
import PropTypes from 'prop-types';
import Text from 'components/Text/Text';
import style from 'components/Heading/Heading.style';

const Heading = ({
  level,
  noTopMargin,
  noBottomMargin,
  content,
  size,
  noLineHeight,
}) => {
  let Element;

  switch (level) {
    case 1:
      Element = 'h1';
      break;

    case 2:
      Element = 'h2';
      break;

    case 3:
      Element = 'h3';
      break;

    case 4:
      Element = 'h4';
      break;

    case 5:
      Element = 'h5';
      break;

    default:
      Element = 'h6';
      break;
  }

  let styles = style.heading;

  if (noTopMargin) {
    styles = { ...styles, ...style.noTopMargin };
  }

  if (noBottomMargin) {
    styles = { ...styles, ...style.noBottomMargin };
  }

  if (noLineHeight) {
    styles = { ...styles, ...style.noLineHeight };
  }

  return (
    <Element style={styles}>
      <Text size={size} content={content} />
    </Element>
  );
};

Heading.propTypes = {
  content: PropTypes.string.isRequired,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  noTopMargin: PropTypes.bool,
  noBottomMargin: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  noLineHeight: PropTypes.bool,
};

Heading.defaultProps = {
  content: 'Heading Placeholder',
  noTopMargin: false,
  noBottomMargin: false,
  size: 'medium',
  noLineHeight: false,
};

export default Heading;
