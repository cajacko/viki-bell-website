/* eslint no-console: 0 */

import { parseString } from 'xml2js';
import { readFileSync } from 'fs';
import { join } from 'path';
import parseWordpressXml from './parseWordpressXml';
import saveAsset from './saveAsset';
import mapFile from './mapFile.json';

const xml = readFileSync(join(__dirname, 'data-2017-07-13.xml'), 'utf8');

function saveAssetLoop(items, i) {
  const item = items[i];

  if (!item) {
    return;
  }

  if (item.contentType === 'asset' && (item.extension === 'png' || item.extension === 'jpg')) {
    saveAsset(item)
      .then(() => {
        saveAssetLoop(items, i + 1);
      })
      .catch(console.error);
  } else {
    saveAssetLoop(items, i + 1);
  }
}

function savePostLoop() {
  // Parse markup and replace image addresses with contentful url
}

parseString(xml, (err, result) => {
  if (err) {
    throw err;
  }

  const imageUrlToIdMap = {};

  const items = parseWordpressXml(result);
  const itemLoop = [];

  Object.keys(items).forEach((id) => {
    const item = items[id];

    if (item.contentType === 'asset' && (item.extension === 'png' || item.extension === 'jpg')) {
      imageUrlToIdMap[item.resource] = mapFile[item.id].fields.file['en-GB'].url;
    }

    itemLoop.push(item);
  });

  console.log(imageUrlToIdMap);

  // saveAssetLoop(itemLoop, 0);
});
