/* @flow */

import express from 'express';
import compression from 'compression';
import path from 'path';
import graphqlHTTP from 'express-graphql';
import './dotenv';
import cacheServe from './middleware/cacheServe';
import port from '../constants/port';
import home from './routes/home';
import listenLog from '../constants/listenLog';
import schema from './graph/schema';
import root from './graph/root';

const app = express();

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '../public')));
app.use(compression());
app.use(cacheServe);

app.use('/api', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true, // Turn off for prod
}));

app.get('*', home);

app.listen(port, () => {
  // eslint-disable-next-line
  console.log(listenLog); // KEEP THIS AS WATCH SCRIPT RELIES ON THIS BEING LOGGED
});
