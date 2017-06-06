import React from 'react';
import PropTypes from 'prop-types';
import Text from 'components/Text/Text';

const Heading = ({ content }) => <h1><Text content={content} /></h1>;

Heading.propTypes = {
  content: PropTypes.string,
};

Heading.defaultProps = {
  content: 'Heading Placeholder',
};

export default Heading;
