/* @flow */

import { config } from 'dotenv';

const dotenv = config({ path: '../.env' });

if (!dotenv || dotenv.error) {
  const sample = config({ path: '../.env-sample' });

  if (!sample || sample.error) {
    throw new Error('No .env or .env-sample file found in root');
  }
}
