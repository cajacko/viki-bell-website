import { createClient } from 'contentful-management';
import fetch from 'node-fetch';
import cheerio from 'cheerio';
import { images } from './items.json';
import imageMapFile from './imageMapFile.json';

let space;

const client = createClient({
  accessToken: '',
});

function replaceImages(content) {
  if (!content) {
    return;
  }

  let newContent = content;

  newContent = newContent.replace(/-[0-9]*x[0-9]*./g, '.');
  newContent = newContent.replace(/data-srcset=".*?"/g, '');
  newContent = newContent.replace(/data-sizes=".*?"/g, '');
  newContent = newContent.replace(/srcset=".*?"/g, '');
  newContent = newContent.replace(/sizes=".*?"/g, '');

  Object.keys(images).forEach((imageId) => {
    const { resource } = images[imageId];
    let regex = resource;
    regex = regex.replace(/\//g, '\\/');
    regex = regex.replace(/\./g, '\\.');
    let re = new RegExp(regex, 'g');

    const replacement = imageMapFile[imageId].fields.file['en-GB'].url;

    newContent = newContent.replace(re, replacement);
    regex = regex.replace('https:', 'http:');
    re = new RegExp(regex, 'g');
    newContent = newContent.replace(re, replacement);
  });

  return newContent;
}

function saveHtml(item, html) {
  if (!html) {
    return;
  }

  const content = replaceImages(html);

  space.getEntry(item.sys.id).then((entry) => {
    entry.fields.wordpressRender = { 'en-GB': content };
    // console.log(item.fields.title);
    return entry.update();
  });
}

function getHtml(item) {
  return new Promise((resolve, reject) => {
    const slug = item.fields.postSlug['en-GB'];

    if (!slug || slug === '') {
      reject();
      return;
    }

    const url = `https://vikibell.com/posts/${slug}`;

    fetch(url)
      .then(res => res.text())
      .then((body) => {
        const html = body;
        const $ = cheerio.load(html);
        resolve($('.Post-content').html());
      });
  });
}

function processPost(item) {
  getHtml(item)
    .then(html => saveHtml(item, html))
    .catch(err => console.warn(err));
}

function processPosts(response) {
  let i = 0;
  console.log(response.items.length);

  response.items.forEach((item) => {
    if (i > 15) {
      // return;
    }

    console.log(item.fields.title);

    processPost(item);

    i++;
  });
}

client
  .getSpace('3ctegf19trkf')
  .then((contentfulSpace) => {
    space = contentfulSpace;

    return space.getEntries({
      content_type: 'post',
      'fields.wordpressRender[exists]': false,
    });
  })
  .then(processPosts)
  .catch(err => console.warn(err));
