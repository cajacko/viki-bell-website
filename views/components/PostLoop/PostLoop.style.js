import { LIGHT_GREY, WHITE } from 'constants/colours';
import { ARTICLE_MARGIN } from 'components/PostLoopItem/PostLoopItem.style';
import { FONT_FAMILY, FONT_SIZES, FONT_COLOURS } from 'constants/fonts';

export default {
  container: {
    paddingBottom: ARTICLE_MARGIN,
  },

  paddingTop: {
    paddingTop: ARTICLE_MARGIN,
  },

  containerDefault: {
    backgroundColor: LIGHT_GREY,
  },

  containerInverse: {
    backgroundColor: WHITE,
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
    fontSize: FONT_SIZES.LARGE,
    color: FONT_COLOURS.BLACK,
  },
};
