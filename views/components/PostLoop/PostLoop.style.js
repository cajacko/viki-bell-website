import { ARTICLE_MARGIN } from 'components/PostLoopItem/PostLoopItem.style';
import { FONT_FAMILY, font } from 'constants/fonts';
import { DEFAULT, INVERSE } from 'constants/sectionColours';

export default {
  container: {
    paddingBottom: ARTICLE_MARGIN,
  },

  paddingTop: {
    paddingTop: ARTICLE_MARGIN,
  },

  containerDefault: {
    backgroundColor: INVERSE,
  },

  containerInverse: {
    backgroundColor: DEFAULT,
  },

  posts: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    transition: 'max-height 1s',
    overflow: 'hidden',
  },

  noMorePosts: {
    paddingTop: ARTICLE_MARGIN,
    paddingBottom: 0,
  },

  heading: {
    paddingBottom: ARTICLE_MARGIN,
    margin: '0 auto',
    textAlign: 'center',
    fontFamily: FONT_FAMILY,
    ...font({ fontSize: 'LARGE' }),
  },
};
