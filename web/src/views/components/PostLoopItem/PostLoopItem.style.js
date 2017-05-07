import BORDER from 'constants/borders';

export default {
  article: {
    width: '25%',
    ...BORDER,
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
  },
  titleLink: {
    display: 'block',
  },
  title: {
    textAlign: 'center',
  },
  category: {
    textAlign: 'center',
    display: 'block',
  },
};
