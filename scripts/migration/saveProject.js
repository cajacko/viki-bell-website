/* eslint no-console: 0 */

import { createClient } from 'contentful-management';
import { writeFile, readFile } from 'fs';
import { join } from 'path';

const client = createClient({
  accessToken: '',
});

const mapFile = join(__dirname, './postMapFile.json');

function getMapFile(asset) {
  return new Promise((resolve, reject) => {
    readFile(mapFile, (err, data) => {
      if (err) {
        reject(err);
      } else {
        const json = JSON.parse(data);

        if (asset) {
          resolve({ data: json, asset });
        } else {
          resolve(json);
        }
      }
    });
  });
}

export default function (item) {
  return getMapFile()
    .then((file) => {
      if (file[item.id]) {
        return null;
      }

      return client.getSpace('1gvc9x9hfuhs');
    })
    .then(space => space.createEntry('project', item))
    .then(asset => getMapFile(asset))
    .then(({ asset, data }) => new Promise((resolve, reject) => {
      let newFile = Object.assign({}, data);
      newFile[item.fields.slug['en-GB']] = asset;
      newFile = JSON.stringify(newFile, null, 2);

      writeFile(mapFile, newFile, 'utf8', (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    }))
    .catch(console.error);
}
