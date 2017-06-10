import React from 'react';
import PropTypes from 'prop-types';
import style from 'components/Section/Section.style';

const Section = ({ header, button, inverse, children }) => {
  let headerElement;
  let styles = style.container;

  if (header) {
    headerElement = (
      <header style={style.header}>
        {header}
      </header>
    );
  }

  if (inverse) {
    styles = { ...styles, ...style.inverse };
  }

  return (
    <section style={styles}>
      {headerElement}
      {children}
      <footer style={style.footer}>
        {button}
      </footer>
    </section>
  );
};

Section.propTypes = {
  inverse: PropTypes.bool,
  header: PropTypes.element,
  button: PropTypes.element.isRequired,
  children: PropTypes.element.isRequired,
};

Section.defaultProps = {
  inverse: false,
  header: false,
};

export default Section;
