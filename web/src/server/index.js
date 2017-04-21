/* @flow */

import express from 'express';
import compression from 'compression';
import path from 'path';
import './dotenv';
import cacheServe from './middleware/cacheServe';
import api from './routes/api';
import cacheClear from './routes/cacheClear';
import cacheDelete from './routes/cacheDelete';
import port from '../constants/port';
import home from './routes/home';
import listenLog from '../constants/listenLog';

const app = express();

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '../public')));
app.use(compression());
app.use(cacheServe);

app.get(/api\/(.*)/, api);
app.get('/cache/clear', cacheClear);
app.get(/cache\/delete\/(.+)/, cacheDelete);
app.get('*', home);

app.listen(port, () => {
  // eslint-disable-next-line
  console.log(listenLog); // KEEP THIS AS WATCH SCRIPT RELIES ON THIS BEING LOGGED
});
