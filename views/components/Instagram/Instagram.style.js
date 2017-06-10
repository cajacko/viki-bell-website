import { IMAGE_HEIGHT } from 'components/Section/Section.style';

export default {
  container: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'rows',
    margin: 0,
    padding: 0,
    flexWrap: 'wrap',
  },

  header: {
    height: IMAGE_HEIGHT,
    width: IMAGE_HEIGHT,
  },

  image: {
    width: '20%',
    position: 'relative',
  },

  imageWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  aspectRatio: {
    paddingBottom: '100%',
  },
};
