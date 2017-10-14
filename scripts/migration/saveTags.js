/* eslint no-console: 0 */

import { parseString } from 'xml2js';
import { readFileSync } from 'fs';
import { join } from 'path';
import parseWordpressXml from './parseWordpressXml';
import saveTag from './saveTag';

const xml = readFileSync(join(__dirname, 'data-2017-07-13.xml'), 'utf8');

function saveTagLoop(items, i) {
  const item = items[i];

  if (!item) {
    return;
  }

  saveTag(item)
    .then(() => {
      saveTagLoop(items, i + 1);
    })
    .catch(console.error);
}

parseString(xml, (err, result) => {
  if (err) {
    throw err;
  }

  const items = parseWordpressXml(result);
  const tags = {};

  Object.keys(items).forEach((id) => {
    const item = items[id];

    if (item.contentType === 'project') {
      item.categories.forEach((tag) => {
        tags[tag.slug] = tag;
      });
    }
  });

  const tagLoop = [];

  Object.keys(tags).forEach((tag) => {
    tagLoop.push(tags[tag]);
  });

  saveTagLoop(tagLoop, 0);
});
