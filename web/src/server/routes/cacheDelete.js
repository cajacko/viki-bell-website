/* @flow */

import cache from 'memory-cache';

export default function (
  req: { params: Array<string> },
  res: { json: () => {} },
) {
  const key = `/api/${req.params[0]}`;

  cache.del(key);

  // eslint-disable-next-line
  console.log(`Cleared Cache at: ${key}`);

  res.json({ message: `Cleared Cache at: ${key}` });
}
