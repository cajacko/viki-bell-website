import React from 'react';
import PropTypes from 'prop-types';
import style from 'components/Paragraph/Paragraph.style';

const Paragraph = ({ children }) => (
  <p style={style.paragraph}>
    {children}
  </p>
);

Paragraph.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Paragraph;
