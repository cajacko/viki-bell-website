import BORDER from 'constants/borders';
import { FONT_FAMILY, FONT_SIZES, FONT_COLOURS } from 'constants/fonts';

export default {
  article: {
    width: '25%',
    ...BORDER,
    flexGrow: 1,
    // maxWidth: '25%',
    // minWidth: '25%',
  },
  imageLink: {
    maxHeight: '200px',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  date: {
    textAlign: 'center',
    fontFamily: FONT_FAMILY,
    fontSize: FONT_SIZES.SMALL,
    color: FONT_COLOURS.GREY,
  },
  titleLink: {
    display: 'block',
    color: FONT_COLOURS.BLACK,
  },
  title: {
    textAlign: 'center',
    fontFamily: FONT_FAMILY,
    fontSize: FONT_SIZES.LARGE,
    textTransform: 'uppercase',
  },
  category: {
    textAlign: 'center',
    display: 'block',
    fontFamily: FONT_FAMILY,
    fontSize: FONT_SIZES.SMALL,
  },
};
