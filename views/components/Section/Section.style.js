import { WHITE, LIGHT_GREY } from 'constants/colours';

export const SECTION_MARGIN = 40;
export const IMAGE_HEIGHT = 50;

export default {
  container: {
    background: WHITE,
  },

  inverse: {
    background: LIGHT_GREY,
  },

  header: {
    paddingTop: SECTION_MARGIN,
    paddingBottom: SECTION_MARGIN,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  footer: {
    paddingTop: SECTION_MARGIN,
    paddingBottom: SECTION_MARGIN,
  },
};
