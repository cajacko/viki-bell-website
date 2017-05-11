import { LIGHT_GREY } from 'constants/colours';
import { ARTICLE_MARGIN } from 'components/PostLoopItem/PostLoopItem.style';

export default {
  container: {
    backgroundColor: LIGHT_GREY,
    paddingBottom: ARTICLE_MARGIN,
  },

  posts: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
};
