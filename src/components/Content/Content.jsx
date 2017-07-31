import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

const Content = ({ content }) => <ReactMarkdown source={content} />;

Content.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Content;
