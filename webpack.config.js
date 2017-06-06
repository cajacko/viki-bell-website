const plugins = require('./webpack/plugins');
const output = require('./webpack/output');
const entry = require('./webpack/entry');
const devtool = require('./webpack/devtool');
const webpackModule = require('./webpack/module');
const resolve = require('./webpack/resolve');

const args = process.argv;
let isProduction = false;

const skipArg = '--env.production';
const index = args.indexOf(skipArg);

if (index > -1) {
  isProduction = true;
}

module.exports = {
  entry,
  resolve,
  module: webpackModule,
  output: output(isProduction),
  devtool: devtool(isProduction),
  plugins: plugins(isProduction),
};
