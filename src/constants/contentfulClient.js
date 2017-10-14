import { createClient } from 'contentful';

export default preview =>
  createClient({
    space: '3ctegf19trkf',
    accessToken: preview
      ? '6a1ce4a260e1238c7051c29e8d1766b4eb2c863854aa248c69e5855d59a0b949'
      : '1a1adde074b51811a0a7fb589859083b9ef6f92fda09d5306f8ebc778209c0b6',
    resolveLinks: false,
    host: preview ? 'preview.contentful.com' : null,
  });
