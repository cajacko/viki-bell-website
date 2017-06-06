import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ content }) => <span>{content}</span>;

Text.propTypes = {
  content: PropTypes.string,
};

Text.defaultProps = {
  content: 'Text placeholder',
};

export default Text;
