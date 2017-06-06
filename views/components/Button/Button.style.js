import { MAX_WIDTH, MEDIA_QUERIES } from 'constants/gridItems';
import { TURQOISE, DARK_TURQOISE, DARK_GREY } from 'constants/colours';
import {
  FONT_FAMILY,
  FONT_SIZES,
  FONT_COLOURS,
  FONT_LINE_HEIGHTS,
} from 'constants/fonts';

export default {
  default: {
    display: 'block',
    width: '100%',
    maxWidth: MAX_WIDTH,
    margin: '0 auto',
    ...MEDIA_QUERIES,
    appearance: 'none',
    border: 0,
    padding: 8,
    lineHeight: FONT_LINE_HEIGHTS.NONE,
    fontFamily: FONT_FAMILY,
    fontSize: FONT_SIZES.MEDIUM,
    textTransform: 'uppercase',
    outline: 'none',
    position: 'relative',
    textAlign: 'center',
    boxSizing: 'border-box',
  },

  defaultColor: {
    background: TURQOISE,
    color: FONT_COLOURS.WHITE,
    cursor: 'pointer',

    ':hover': {
      background: DARK_TURQOISE,
      textDecoration: 'underline',
    },
  },

  disabled: {
    background: DARK_GREY,
    color: FONT_COLOURS.WHITE,
  },
};
