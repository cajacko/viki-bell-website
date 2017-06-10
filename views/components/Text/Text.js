import React from 'react';
import PropTypes from 'prop-types';
import style from 'components/Text/Text.style';

const Text = ({ content, center, size, noLineHeight }) => {
  let styles = style.style;

  if (center) {
    styles = { ...styles, ...style.center };
  }

  if (noLineHeight) {
    styles = { ...styles, ...styles.noLineHeight };
  }

  switch (size) {
    case 'small':
      styles = { ...styles, ...style.small };
      break;
    case 'large':
      styles = { ...styles, ...style.large };
      break;
    default:
      styles = { ...styles, ...style.medium };
      break;
  }

  return <span style={styles}>{content}</span>;
};

Text.propTypes = {
  content: PropTypes.string.isRequired,
  center: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  noLineHeight: PropTypes.bool,
};

Text.defaultProps = {
  center: false,
  size: 'medium',
  noLineHeight: false,
};

export default Text;
