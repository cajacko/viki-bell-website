export const MAX_WIDTH = 270;

const mediaQueries = {};
const minWidth = 200;
let mediaQuery;
let width;

let iterator = 1;
let currentWidth = 0;
let gridItemsPerRow = 1;
const windowWidth = window.innerWidth;

const rowCountOverride = [4, 3];
const defaultRows = 2;
let rows = defaultRows;

while (currentWidth <= 3000) {
  iterator += 1;
  currentWidth = minWidth * iterator;

  mediaQuery = `@media (min-width: ${currentWidth}px)`;
  width = Math.round((100 / iterator) * 100) / 100;

  if (windowWidth > currentWidth) {
    gridItemsPerRow = iterator;

    const rowOverride = rowCountOverride[iterator - 1];

    if (rowOverride) {
      rows = rowOverride;
    } else {
      rows = defaultRows;
    }
  }

  mediaQueries[mediaQuery] = {
    width: `${width}%`,
    maxWidth: '100%',
  };
}

export const MEDIA_QUERIES = mediaQueries;
export const GRID_ITEMS_PER_ROW = gridItemsPerRow;
export const MAIN_POST_LOOP_ROWS = rows;
export const POST_LOOP_ITEMS_PER_LOAD = rows * gridItemsPerRow;
