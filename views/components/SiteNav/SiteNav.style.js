import { TURQOISE } from 'constants/colours';
import spacing from 'constants/spacing';
import { FONT_LINE_HEIGHTS } from 'constants/fonts';

export default {
  container: {
    background: TURQOISE,
    maxWidth: '100%',
    overflow: 'hidden',
  },

  wrapper: {
    maxWidth: 600,
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
  },

  leftContainer: {
    display: 'flex',
  },

  rightContainer: {
    display: 'flex',
  },

  list: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
  },

  listItem: {
    marginLeft: spacing,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  verticalSpacing: {
    marginTop: spacing,
    marginBottom: spacing,
  },

  textLink: {
    display: 'block',
    lineHeight: FONT_LINE_HEIGHTS.NONE,
  },
};
