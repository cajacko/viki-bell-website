/* eslint no-console: 0 */

import { parseString } from 'xml2js';
import { readFileSync, writeFile } from 'fs';
import { join } from 'path';
import parseWordpressXml from './migration/parseWordpressXml';

const xml = readFileSync(join(__dirname, 'migration/data.xml'), 'utf8');

parseString(xml, (err, result) => {
  if (err) {
    throw err;
  }

  const items = parseWordpressXml(result);

  console.log(items);

  writeFile('items.json', JSON.stringify(items, null, 2), 'utf8', (err) => {});

  // save content with no references - categories, images, tags
  // Make sure we have json reference files for these
  // Save posts and pages, whilst replacing linked content with contentful resources
  // For each post and page, get the html from the website and save in new field
  // Replace the images in these fields with contentful images
  // All good :)
});
