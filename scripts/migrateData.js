/* eslint no-console: 0 */

import { parseString } from 'xml2js';
import { readFileSync } from 'fs';
import { join } from 'path';
import parseWordpressXml from './migration/parseWordpressXml';

const xml = readFileSync(join(__dirname, 'migration/data.xml'), 'utf8');

parseString(xml, (err, result) => {
  if (err) {
    throw err;
  }

  const items = parseWordpressXml(result);

  Object.keys(items.posts).forEach((id) => {
    const post = items.posts[id];

    console.log(post);
  });
});
