/* eslint import/first: 0 no-console: 0  */
require('dotenv').config('../.env');

import { createClient } from 'contentful-management';

let space;

const client = createClient({
  accessToken: process.env.CONTENTFUL_MANAGEMENT,
});

function replaceImages(content) {
  let newContent = content;

  newContent = newContent.replace(/src="\/media\/blank.gif"/g, '');
  newContent = newContent.replace(/data-src/g, 'src');


  return newContent;
}

let i = 0;
let iterator = 0;

function processPost(item) {
  if (i > 5) {
    return;
  }

  console.log(iterator);

  if (item.fields.wordpressRender['en-GB'].includes('.gif')) {
    console.log(item.fields.title['en-GB']);
    const content = replaceImages(item.fields.wordpressRender['en-GB']);
    console.log(content);

    space.getEntry(item.sys.id).then((entry) => {
      // eslint-disable-next-line
      entry.fields.wordpressRender = { 'en-GB': content };
      console.log(item.fields.title);
      return entry.update();
    });

    i += 1;
  }
}

function processPosts(response) {
  // console.log(response.items.length);

  response.items.forEach((item) => {
    processPost(item);
    iterator += 1;
  });
}

client
  .getSpace('3ctegf19trkf')
  .then((contentfulSpace) => {
    space = contentfulSpace;

    return space.getEntries({
      content_type: 'post',
      skip: 90,
      'fields.wordpressRender[exists]': 'true',
    });
  })
  .then(processPosts)
  .catch(err => console.warn(err));
