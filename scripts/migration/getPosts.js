/* eslint no-console: 0 */

import { parseString } from 'xml2js';
import { readFileSync } from 'fs';
import { join } from 'path';
import parseWordpressXml from './parseWordpressXml';

export default function (callback) {
  const xml = readFileSync(join(__dirname, 'data-2017-07-13.xml'), 'utf8');

  parseString(xml, (err, result) => {
    if (err) {
      throw err;
    }

    const items = parseWordpressXml(result);
    callback(items);
  });
}
