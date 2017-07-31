const webpack = require('webpack');

module.exports = isProduction => [
  // Enable hot module replacement
  (() => {
    if (isProduction) {
      return () => {};
    }

    return new webpack.HotModuleReplacementPlugin();
  })(),

  // Enabled named modules for hot module replacement debugging
  (() => {
    if (isProduction) {
      return () => {};
    }

    return new webpack.NamedModulesPlugin();
  })(),
];
