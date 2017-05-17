import { keyframes } from 'radium';
import { BLACK } from 'constants/colours';

export default {
  container: {
    cursor: 'progress',
  },

  text: {
    position: 'relative',
    zIndex: 1,
  },

  loadingBar: {
    background: BLACK,
    width: '50%',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    animation: 'x 5000ms linear infinite',
    animationName: keyframes({
      '0%': {
        width: 0,
        left: 0,
      },
      '10%': {
        width: 0,
        left: 0,
      },
      '50%': {
        left: 0,
        width: '100%',
      },
      '90%': {
        width: 0,
        left: '100%',
      },
      '100%': {
        width: 0,
        left: '100%',
      },
    }, 'pulse'),
  },
};
