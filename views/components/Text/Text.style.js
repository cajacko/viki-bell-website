import { font, FONT_SIZES } from 'constants/fonts';

export default {
  style: {
    ...font(),
  },

  center: {
    textAlign: 'center',
  },

  small: {
    fontSize: FONT_SIZES.SMALL,
  },

  medium: {
    fontSize: FONT_SIZES.MEDIUM,
  },

  large: {
    fontSize: FONT_SIZES.LARGE,
  },
};
