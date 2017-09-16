import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

const Content = ({ content, containerProps, className }) => (
  <ReactMarkdown
    source={content}
    containerProps={containerProps}
    className={className}
  />
);

Content.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Content;
