import { FONT_COLOURS } from 'constants/fonts';

export default {
  style: {
    textDecoration: 'none',
    cursor: 'pointer',

    ':hover': {
      textDecoration: 'underline',
    },
  },

  turqoise: {
    color: FONT_COLOURS.TURQOISE,

    ':hover': {
      color: FONT_COLOURS.TURQOISE_HOVER,
    },
  },

  black: {
    color: FONT_COLOURS.BLACK,

    ':hover': {
      color: FONT_COLOURS.BLACK_HOVER,
    },
  },
};
