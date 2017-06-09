export default {
  container: {
    height: 300,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
  },

  wrapper: {
    minWidth: 400,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  backgroundImageContainer: {
    flex: 1,
    position: 'relative',
    overflow: 'hidden',
  },

  backgroundImage: {
    position: 'absolute',
    top: 0,
    bottom: 0,
  },

  backgroundImageLeft: {
    left: 0,
  },

  backgroundImageRight: {
    right: 0,
  },

  logo: {
    width: 200,
  },
};
