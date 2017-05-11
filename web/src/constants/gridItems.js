export const MAX_WIDTH = 270;

const mediaQueries = {};
const minWidth = 190;
let mediaQuery;
let width;

let iterator = 1;
let currentWidth = 0;

while (currentWidth <= 3000) {
  iterator += 1;
  currentWidth = minWidth * iterator;

  mediaQuery = `@media (min-width: ${currentWidth}px)`;
  width = Math.round((100 / iterator) * 100) / 100;

  mediaQueries[mediaQuery] = {
    width: `${width}%`,
    maxWidth: '100%',
  };
}

export const MEDIA_QUERIES = mediaQueries;
