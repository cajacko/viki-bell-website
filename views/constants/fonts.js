import {
  TURQOISE,
  BLACK,
  DARK_GREY,
  DARK_TURQOISE,
  WHITE,
  LIGHT_GREY,
} from 'constants/colours';

export const FONT_FAMILY = 'lato, helvetica, sans-serif';

export const FONT_SIZES = {
  SMALL: 12,
  MEDIUM: 14,
  LARGE: 16,
};

export const FONT_COLOURS = {
  BLACK,
  GREY: DARK_GREY,
  TURQOISE,
  TURQOISE_HOVER: DARK_TURQOISE,
  BLACK_HOVER: DARK_GREY,
  WHITE,
  WHITE_HOVER: LIGHT_GREY,
};

export const FONT_LINE_HEIGHTS = {
  NONE: 1,
  NORMAL: 1.5,
};

export function font(options) {
  let fontFamily = FONT_FAMILY;
  let color = FONT_COLOURS.BLACK;
  let lineHeight = FONT_LINE_HEIGHTS.NORMAL;
  let fontSize = FONT_SIZES.MEDIUM;

  if (options && options.fontFamily) {
    fontFamily = options.fontFamily;
  }

  if (options && options.color) {
    color = FONT_COLOURS[options.color];
  }

  if (options && options.lineHeight) {
    lineHeight = FONT_LINE_HEIGHTS[options.lineHeight];
  }

  if (options && options.fontSize) {
    fontSize = FONT_SIZES[options.fontSize];
  }

  return { fontFamily, color, lineHeight, fontSize };
}
