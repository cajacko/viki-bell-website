export default {
  container: {
    overflow: 'hidden',
    height: '100%',
    width: '100%',
    position: 'relative',
  },

  text: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    opacity: 1,
    transition: 'opacity 0.5s',
  },

  wrapper: {
    position: 'relative',
    transition: 'opacity 0.5s',
  },

  wrapperHide: {
    position: 'absolute',
  },

  image: {
    display: 'block',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
};
