/* @flow */

import fetch from 'node-fetch';
import cache from 'memory-cache';

export default function (
  req: {
    url: String,
    params: Array<string>
  },
  res: { json: () => {} },
) {
  // eslint-disable-next-line
  console.log('Request data from Kentico Cloud');

  if (!process) {
    throw new Error('No process, WTF!');
  }

  if (!process.env) {
    throw new Error('No envrionmental variables, WTF!');
  }

  if (!process.env.KENTICO_CLOUD_PROJECT_ID) {
    throw new Error('No KENTICO_CLOUD_PROJECT_ID env variable set!');
  }

  const id = process.env.KENTICO_CLOUD_PROJECT_ID;
  const kenticoCloud = 'https://deliver.kenticocloud.com';
  const apiUrl = `${kenticoCloud}/${id}/${req.params[0]}`;

  return fetch(apiUrl)
    .then(result => result.json())
    .then((json) => {
      // eslint-disable-next-line
      console.log('Got data from Kentico Cloud');

      cache.put(req.url, json, 10000);
      return res.json(json);
    });
}
