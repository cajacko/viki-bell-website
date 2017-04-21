/* @flow */

import cache from 'memory-cache';

export default function (
  req: { url: String },
  res: { json: () => {} },
  next: () => null,
) {
  if (!req.url || req.url === '') {
    return next();
  }

  if (!req.url.startsWith('/api')) {
    return next();
  }

  const cachedResult = cache.get(req.url);

  if (cachedResult === null) {
    return next();
  }

  // eslint-disable-next-line
  console.log('Used cache');
  return res.json(cachedResult);
}
