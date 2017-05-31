const plugins = require('./plugins');
const output = require('./output');
const entry = require('./entry');
const devtool = require('./devtool');
const webpackModule = require('./module');
const resolve = require('./resolve');

module.exports = (env = {}) => {
  let isProduction;

  if (env.production) {
    isProduction = true;
  } else {
    isProduction = false;
  }

  return {
    entry,
    resolve,
    module: webpackModule,
    output: output(isProduction),
    devtool: devtool(isProduction),
    plugins: plugins(isProduction),
  };
};
