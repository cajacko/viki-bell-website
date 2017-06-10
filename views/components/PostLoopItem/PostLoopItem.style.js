import { WIDTH, STYLE, COLOUR } from 'constants/borders';
import { FONT_LINE_HEIGHTS, FONT_COLOURS, font } from 'constants/fonts';
import { MAX_WIDTH, MEDIA_QUERIES } from 'constants/gridItems';
import { DEFAULT, INVERSE } from 'constants/section';

export const ARTICLE_MARGIN = 40;

export default {
  article: {
    width: '100%',
    maxWidth: MAX_WIDTH,
    marginBottom: ARTICLE_MARGIN,
    display: 'flex',
    transition: 'opacity 0.5s',
    ...MEDIA_QUERIES,
  },

  articleDefault: {
    backgroundColor: DEFAULT,
  },

  articleInverse: {
    backgroundColor: INVERSE,
  },

  container: {
    borderWidth: WIDTH,
    borderStyle: STYLE,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    maxWidth: '100%',
  },

  containerDefault: {
    borderColor: COLOUR.DEFAULT,
  },

  containerInverse: {
    borderColor: COLOUR.DARK,
  },

  imageLink: {
    height: '200px',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    flexShrink: 0,
    minWidth: '100%',
    minHeight: '100%',
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
    ...font({ fontSize: 'SMALL', color: 'GREY' }),
    margin: 0,
  },

  titleLink: {
    display: 'block',
    color: FONT_COLOURS.BLACK,
  },

  title: {
    textAlign: 'center',
    ...font({ fontSize: 'LARGE', lineHeight: 'NONE' }),
    textTransform: 'uppercase',
    margin: '12px 0px',
  },

  category: {
    textAlign: 'center',
    display: 'block',
    lineHeight: FONT_LINE_HEIGHTS.NONE,
  },
};
