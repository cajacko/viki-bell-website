/* @flow */

import cache from 'memory-cache';

export default function (req: {}, res: { json: () => {} }) {
  cache.clear();

  // eslint-disable-next-line
  console.log('Cleared Cache');

  res.json({ message: 'Cleared Cache' });
}
