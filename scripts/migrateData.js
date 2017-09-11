import { createClient } from 'contentful-management';
import { writeFile, readFile } from 'fs';
import { join } from 'path';
import moment from 'moment';
import { posts, images } from './items.json';
import imageMapFile from './imageMapFile.json';
import tagMapFile from './tagMapFile.json';
import categoryMapFile from './categoryMapFile.json';

const client = createClient({
  accessToken: '',
});

const mapFile = join(__dirname, './postMapFile.json');

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

function saveContent(wpID, fields) {
  // console.log(fields);
  return client
    .getSpace('3ctegf19trkf')
    .then(space => space.createEntry('post', { fields }))
    .then(asset => getMapFile(asset))
    .then(
      ({ asset, data }) =>
        new Promise((resolve, reject) => {
          let newFile = Object.assign({}, data);
          newFile[wpID] = asset;
          newFile = JSON.stringify(newFile, null, 2);

          writeFile(mapFile, newFile, 'utf8', (err) => {
            if (err) {
              reject(err);
            } else {
              resolve(data);
            }
          });
        }),
    )
    .catch(console.error);
}

function replaceImages(content) {
  let newContent = content;

  newContent = newContent.replace(/-[0-9]*x[0-9]*./g, '.');

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

  // console.log('\n\n\n');
  // console.log(newContent);

  return newContent;
}

function saveContentLoop(items, i) {
  const item = items[i];

  if (!item) {
    return;
  }

  Object.keys(item.item).forEach((prop) => {
    switch (prop) {
      case 'title':
      case 'postSlug':
      case 'wordpressContent':
      case 'contentType':
      case 'id':
      case 'postDate':
      case 'status':
      case 'categories':
      case 'tags':
      case 'seoDescription':
      case 'seoTitle':
      case 'featuredImage':
        break;
      default:
        console.log(prop);
        break;
    }
  });

  const fields = {
    title: {
      'en-GB': item.item.title,
    },
    postSlug: {
      'en-GB': item.item.postSlug,
    },
    wordpressContent: {
      'en-GB': replaceImages(item.item.wordpressContent),
    },
    postDate: {
      'en-GB': moment(item.item.postDate).toISOString(),
    },
    tags: { 'en-GB': [] },
    categories: { 'en-GB': [] },
  };

  if (item.item.seoTitle) {
    fields.seoTitle = {
      'en-GB': item.item.seoTitle,
    };
  }

  if (item.item.seoDescription) {
    fields.seoDescription = {
      'en-GB': item.item.seoDescription,
    };
  }

  if (item.item.featuredImage) {
    fields.featuredImage = {
      'en-GB': {
        sys: {
          type: 'Link',
          linkType: 'Asset',
          id: imageMapFile[item.item.featuredImage].sys.id,
        },
      },
    };
  }

  item.item.tags.forEach((tag) => {
    fields.tags['en-GB'].push({
      sys: {
        type: 'Link',
        linkType: 'Entry',
        id: tagMapFile[tag.slug].sys.id,
      },
    });
  });

  item.item.categories.forEach((category) => {
    fields.categories['en-GB'].push({
      sys: {
        type: 'Link',
        linkType: 'Entry',
        id: categoryMapFile[category.slug].sys.id,
      },
    });
  });

  saveContent(item.wpID, fields)
    .then(() => {
      saveContentLoop(items, i + 1);
    })
    .catch(console.error);

  // saveContentLoop(items, i + 1);
}

const loop = [];
let i = 0;

Object.keys(posts).forEach((wpID) => {
  if (i > 5) {
    // return;
  }

  const item = posts[wpID];
  loop.push({ item, wpID });
  i += 1;
});

saveContentLoop(loop, 0);
