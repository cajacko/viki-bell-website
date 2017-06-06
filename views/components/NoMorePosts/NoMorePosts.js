import React from 'react';
import Radium from 'radium';
import buttonStyles from 'components/Button/Button.style';

const LoadingBar = () => (
  <div
    style={{
      ...buttonStyles.default,
      ...buttonStyles.disabled,
    }}
  >
    That&apos;s all folks!
  </div>
);

export default Radium(LoadingBar);
