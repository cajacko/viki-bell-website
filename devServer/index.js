import 'dev/dotEnv';
import express from 'express';
import Handlebars from 'handlebars';
import { readFileSync } from 'fs';
import { join } from 'path';
import data from 'dev/data';

const file = readFileSync(join(__dirname, '../src/index.html'), 'utf8');
const template = Handlebars.compile(file);

const {
  WEBPACK_DEV_SERVER_PROTOCOL,
  WEBPACK_DEV_SERVER_HOST,
  WEBPACK_DEV_SERVER_PORT,
} = process.env;

const webpackUrl = `${WEBPACK_DEV_SERVER_PROTOCOL}://${WEBPACK_DEV_SERVER_HOST}:${WEBPACK_DEV_SERVER_PORT}/`;

const html = template({
  react: '',
  manifest: '',
  js: {
    main: `${webpackUrl}main.js`,
    vendor: `${webpackUrl}vendor.js`,
    manifest: `${webpackUrl}manifest.js`,
  },
  css: {
    lib: `${webpackUrl}assets/styles/lib.css`,
    style: `${webpackUrl}assets/styles/style.min.css`,
  },
  htmlData: {},
});

const app = express();

app.get('/data', data);

app.get('*', (req, res) => {
  console.log('here');
  res.send(html);
});

app.listen(3000);
