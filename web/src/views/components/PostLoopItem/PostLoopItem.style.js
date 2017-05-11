import BORDER from 'constants/borders';
import { FONT_FAMILY, FONT_SIZES, FONT_COLOURS } from 'constants/fonts';
import { MAX_WIDTH, MEDIA_QUERIES } from 'constants/gridItems';
import { WHITE } from 'constants/colours';

export const ARTICLE_MARGIN = 40;

export default {
  article: {
    width: '100%',
    maxWidth: MAX_WIDTH,
    marginBottom: ARTICLE_MARGIN,
    display: 'flex',
    ...MEDIA_QUERIES,
    backgroundColor: WHITE,
  },
  container: {
    ...BORDER,
    // borderRightStyle: 'none',
    // borderLeftStyle: 'none',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  imageLink: {
    maxHeight: '200px',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
    padding: 10,
  },
  date: {
    textAlign: 'center',
    fontFamily: FONT_FAMILY,
    fontSize: FONT_SIZES.SMALL,
    color: FONT_COLOURS.GREY,
    margin: 0,
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
    margin: '12px 0px',
  },
  category: {
    textAlign: 'center',
    display: 'block',
    fontFamily: FONT_FAMILY,
    fontSize: FONT_SIZES.SMALL,
  },
};
