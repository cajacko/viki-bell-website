import { MAX_WIDTH, MEDIA_QUERIES } from 'constants/gridItems';
import { LIGHT_GREY } from 'constants/colours';
import { ARTICLE_MARGIN } from 'components/PostLoopItem/PostLoopItem.style';

export default {
  container: {
    backgroundColor: LIGHT_GREY,
    padding: `${ARTICLE_MARGIN}px 0`,
  },

  posts: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  button: {
    width: '100%',
    maxWidth: MAX_WIDTH,
    margin: '0 auto',
    display: 'block',
    ...MEDIA_QUERIES,
  },
};
