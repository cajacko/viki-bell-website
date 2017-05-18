/* @flow */

import express from 'express';
import compression from 'compression';
import path from 'path';
import graphqlHTTP from 'express-graphql';
import 'server/dotenv';
import port from 'constants/port';
import home from 'server/routes/home';
import listenLog from 'constants/listenLog';
import schema from 'graph/schema';

const app = express();

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '../public')));
app.use(compression());

app.use('/api', graphqlHTTP({
  schema,
  pretty: true,
  graphiql: true, // Turn off for prod
}));

app.get('*', home);

app.listen(port, () => {
  // eslint-disable-next-line
  console.log(listenLog); // KEEP THIS AS WATCH SCRIPT RELIES ON THIS BEING LOGGED
});
