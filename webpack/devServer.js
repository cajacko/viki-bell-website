// Set up webpack dev server

const path = require('path');

module.exports = (isProduction) => {
  if (isProduction) {
    return {};
  }

  return {
    contentBase: (() => {
      if (/^win/.test(process.platform)) {
        return path.join(__dirname, 'dist/');
      }

      return path.join(__dirname, '../dist/');
    })(),
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
    port: process.env.WEBPACK_DEV_SERVER_PORT,
    host: process.env.WEBPACK_DEV_SERVER_HOST,
    https: (() => {
      if (process.env.WEBPACK_DEV_SERVER_PROTOCOL === 'https') {
        return true;
      }

      return false;
    })(),
  };
};
