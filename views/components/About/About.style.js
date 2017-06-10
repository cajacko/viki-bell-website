import { SECTION_MARGIN } from 'components/Section/Section.style';
import { MAX_WIDTH } from 'constants/section';

const imageWidth = 200;

export default {
  wrapper: {
    maxWidth: MAX_WIDTH,
    margin: '0 auto',
    position: 'relative',
    paddingTop: SECTION_MARGIN,
    paddingBottom: SECTION_MARGIN,
  },

  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: imageWidth,
  },

  textContainer: {
    marginLeft: imageWidth,
    paddingLeft: 20,
  },
};
