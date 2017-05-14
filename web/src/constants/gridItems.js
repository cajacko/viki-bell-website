export const MAX_WIDTH = 270;

const mediaQueries = {};
const minWidth = 200;
let mediaQuery;
let width;

let columns = 1;
let currentWidth = 0;

const fullWidthRows = 4;

const rowWidthMap = [{
  breakpoint: 0,
  columns: 1,
  columnWidth: 100,
  rows: fullWidthRows,
  postLoopItemsPerLoad: fullWidthRows,
}];

while (currentWidth <= 3000) {
  columns += 1;

  currentWidth = minWidth * columns;
  width = Math.round((100 / columns) * 100) / 100;

  const rowWidth = {
    breakpoint: currentWidth,
    columns,
    columnWidth: width,
    rows: 2,
  };

  if (columns === 2) {
    rowWidth.rows = 3;
  }

  rowWidth.postLoopItemsPerLoad = rowWidth.rows * rowWidth.columns;
  rowWidthMap.push(rowWidth);
}

rowWidthMap.forEach((rowWidth, index) => {
  if (index === 0) {
    return;
  }

  mediaQuery = `@media (min-width: ${rowWidth.breakpoint}px)`;

  mediaQueries[mediaQuery] = {
    width: `${rowWidth.columnWidth}%`,
    maxWidth: '100%',
  };
});

function getRowWidthForWindow() {
  const windowWidth = window.innerWidth;
  let currentRowWidth;

  rowWidthMap.forEach((rowWidth) => {
    if (windowWidth > rowWidth.breakpoint) {
      currentRowWidth = rowWidth;
    }
  });

  return currentRowWidth;
}

export const MEDIA_QUERIES = mediaQueries;

export function getRowWidth() {
  const rowWidth = getRowWidthForWindow();
  return rowWidth;
}
