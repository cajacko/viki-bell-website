import React from 'react';
import PropTypes from 'prop-types';
import style from 'components/Text/Text.style';

const Text = ({ content, center }) => {
  let styles = style.style;

  if (center) {
    styles = { ...styles, ...style.center };
  }

  return <span style={styles}>{content}</span>;
};

Text.propTypes = {
  content: PropTypes.string.isRequired,
  center: PropTypes.bool,
};

Text.defaultProps = {
  center: false,
};

export default Text;
