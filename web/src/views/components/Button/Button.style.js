import { MAX_WIDTH, MEDIA_QUERIES } from 'constants/gridItems';
import { TURQOISE, DARK_TURQOISE } from 'constants/colours';
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
    background: TURQOISE,
    border: 0,
    padding: 8,
    lineHeight: FONT_LINE_HEIGHTS.NONE,
    color: FONT_COLOURS.WHITE,
    fontFamily: FONT_FAMILY,
    fontSize: FONT_SIZES.MEDIUM,
    textTransform: 'uppercase',
    cursor: 'pointer',

    ':hover': {
      background: DARK_TURQOISE,
      textDecoration: 'underline',
    },
  },
};
