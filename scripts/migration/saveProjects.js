/* eslint no-console: 0 */

import { parseString } from 'xml2js';
import moment from 'moment';
import { readFileSync } from 'fs';
import { join } from 'path';
import parseWordpressXml from './parseWordpressXml';
import saveProject from './saveProject';
import imageMap from './mapFile.json';
import tagMap from './tagMapFile.json';
import categoryMap from './categoryMapFile.json';

const xml = readFileSync(join(__dirname, 'data-2017-07-13.xml'), 'utf8');

function saveProjectLoop(items, i) {
  const item = items[i];

  if (!item) {
    return;
  }

  saveProject(item)
    .then(() => {
      saveProjectLoop(items, i + 1);
    })
    .catch(console.error);
}

function replaceImages(content, imageUrlsToContentful) {
  let newContent = content;

  Object.keys(imageUrlsToContentful).forEach((wordpress) => {
    const contentful = imageUrlsToContentful[wordpress];
    newContent = newContent.replace(wordpress, contentful);
  });

  return newContent;
}

parseString(xml, (err, result) => {
  if (err) {
    throw err;
  }

  const items = parseWordpressXml(result);

  const imageUrlsToContentful = {};

  Object.keys(imageMap).forEach((id) => {
    const image = imageMap[id];
    const url = items[id].resource;

    imageUrlsToContentful[url] = image.fields.file['en-GB'].url;
  });

  const itemLoop = [];

  Object.keys(items).forEach((id) => {
    const item = items[id];

    if (item.contentType === 'project') {
      // console.log(item.tags);
      const project = {
        fields: {
          title: { 'en-GB': item.title },
          slug: { 'en-GB': item.slug },
          displayDate: { 'en-GB': moment(item.displayDate).toISOString() },
          excerpt: { 'en-GB': item.excerpt },
          content: { 'en-GB': replaceImages(item.content, imageUrlsToContentful) },
          tags: { 'en-GB': [] },
          categories: { 'en-GB': [] },
        },
      };

      const image = imageMap[item.thumbnailImage];

      if (image) {
        project.fields.thumbnailImage = {
          'en-GB': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: image.sys.id,
            },
          },
        };
      }

      item.tags.forEach((tag) => {
        project.fields.tags['en-GB'].push({
          sys: {
            type: 'Link',
            linkType: 'Entry',
            id: tagMap[tag.slug].sys.id,
          },
        });
      });

      item.categories.forEach((category) => {
        project.fields.categories['en-GB'].push({
          sys: {
            type: 'Link',
            linkType: 'Entry',
            id: categoryMap[category.slug].sys.id,
          },
        });
      });

      itemLoop.push(project);
    }
  });

  saveProjectLoop(itemLoop, 0);
});
