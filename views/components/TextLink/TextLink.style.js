import { FONT_COLOURS, font } from 'constants/fonts';

export default {
  style: {
    textDecoration: 'none',
    cursor: 'pointer',
    ...font(),

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

  white: {
    color: FONT_COLOURS.WHITE,

    ':hover': {
      color: FONT_COLOURS.WHITE_HOVER,
    },
  },
};
