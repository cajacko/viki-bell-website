/* @flow */

import fs from 'fs';
import path from 'path';

const mappingPath = path.join(__dirname, '../../public/manifest.json');
let manifestFileName = 'manifest.js';
let vendor = 'vendor.js';
let main = 'main.js';

if (fs.existsSync(mappingPath)) {
  const mappingJson = fs.readFileSync(mappingPath, { encoding: 'utf-8' });
  const mapping = JSON.parse(mappingJson);

  vendor = mapping[vendor];
  main = mapping[main];
  manifestFileName = mapping[manifestFileName];
}

const manifestPath = path.join(__dirname, `../../public/${manifestFileName}`);
const manifest = fs.readFileSync(manifestPath, { encoding: 'utf-8' });

export default function (req, res) {
  res.render('index', { vendor, main, manifest });
}
