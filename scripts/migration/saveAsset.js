/* eslint no-console: 0 */

import { createClient } from 'contentful-management';
import { writeFile, readFile } from 'fs';
import { join } from 'path';
import stringToSlug from './stringToSlug';

const client = createClient({
  accessToken: '',
});

const mapFile = join(__dirname, './mapFile.json');

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
  // const upload = 'http://demo.cloudimg.io/s/width/10000/charliejackson.com/content/uploads/2017/03/wolf.jpg';
  const upload = item.resource.replace('https://', 'http://demo.cloudimg.io/s/width/10000/');

  return getMapFile()
    .then((file) => {
      if (file[item.id]) {
        return null;
      }

      return client.getSpace('1gvc9x9hfuhs');
    })
    .then(space => space.createAsset({
      fields: {
        title: {
          'en-GB': item.title,
        },
        description: {
          'en-GB': item.description,
        },
        file: {
          'en-GB': {
            contentType: item.mimeType,
            // eslint-disable-next-line
            fileName: `${stringToSlug(item.title)}.${stringToSlug(item.extension)}`,
            upload,
          },
        },
      },
    }))
    .then(asset => asset.processForLocale('en-GB'))
    .then(asset => getMapFile(asset))
    .then(({ asset, data }) => new Promise((resolve, reject) => {
      let newFile = Object.assign({}, data);
      newFile[item.id] = asset;
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
