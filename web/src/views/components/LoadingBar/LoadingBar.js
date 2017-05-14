import React from 'react';
import Radium from 'radium';
import style from 'components/LoadingBar/LoadingBar.style';
import buttonStyles from 'components/Button/Button.style';

const LoadingBar = () => (
  <div
    style={{
      ...style.container,
      ...buttonStyles.default,
      ...buttonStyles.disabled,
    }}
  >
    <span style={style.text}>Loading</span>
    <div style={style.loadingBar} />
  </div>
);

export default Radium(LoadingBar);
