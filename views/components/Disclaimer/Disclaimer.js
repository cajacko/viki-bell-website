import React from 'react';
import Text from 'components/Text/Text';
import style from 'components/Disclaimer/Disclaimer.style';

const Disclaimer = ({ inverse }) => {
  let styles = style.container;

  if (inverse) {
    styles = { ...styles, ...style.inverse };
  } else {
    styles = { ...styles, ...style.default };
  }

  return (
    <footer style={styles}>
      <Text center content="Unless otherwise stated all images are owned by Viki Bell" />
    </footer>
  );
};

export default Disclaimer;
