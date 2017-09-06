/* eslint no-console: 0 */

import htmlToMarkdown from './htmlToMarkdown';

export default function (xml) {
  const items = {};
  const posts = {};
  const pages = {};
  const categories = {};
  const images = {};
  const tags = {};

  xml.rss.channel[0].item.forEach((entry) => {
    const item = {};

    switch (entry['wp:post_type'][0]) {
      case 'post':
        item.contentType = 'post';
        item.id = entry['wp:post_id'][0];
        item.title = entry.title[0];
        item.postSlug = entry['wp:post_name'][0];
        item.postDate = entry['wp:post_date'][0];
        item.wordpressContent = htmlToMarkdown(entry['content:encoded'][0]);
        item.status = entry['wp:status'][0];
        item.categories = [];
        item.tags = [];

        entry['wp:postmeta'].forEach((meta) => {
          switch (meta['wp:meta_key'][0]) {
            case '_thumbnail_id':
              item.featuredImage = meta['wp:meta_value'][0];
              break;
            default:
              break;
          }
        });

        entry.category.forEach((category) => {
          let type;

          if (category.$.domain === 'category') {
            type = 'categories';
            categories[category.$.nicename] = category._;
          } else {
            type = 'tags';
            tags[category.$.nicename] = category._;
          }

          item[type].push({
            title: category._,
            slug: category.$.nicename,
          });
        });

        posts[item.id] = item;

        // console.log('\n\n\n');
        // console.log(item);
        break;
      case 'page':
        item.contentType = 'page';
        item.id = entry['wp:post_id'][0];
        item.title = entry.title[0];
        item.pageSlug = entry['wp:post_name'][0];
        item.wordpressContent = htmlToMarkdown(entry['content:encoded'][0]);

        pages[item.id] = item;

        // console.log('\n\n\n');
        // console.log(item);
        break;
      case 'attachment': {
        item.contentType = 'asset';
        item.id = entry['wp:post_id'][0];
        item.title = entry.title[0];
        item.resource = entry['wp:attachment_url'][0];

        entry['wp:postmeta'].forEach((meta) => {
          if (meta['wp:meta_key'][0] === '_wp_attachment_image_alt') {
            item.description = meta['wp:meta_value'][0];
          }
        });

        let mimeType = null;
        let extension = null;

        if (item.resource.includes('.jpg') || item.resource.includes('.jpeg')) {
          mimeType = 'image/jpeg';
          extension = 'jpg';
        } else if (item.resource.includes('.png')) {
          mimeType = 'image/png';
          extension = 'png';
        }

        item.extension = extension;
        item.mimeType = mimeType;

        images[item.id] = item;
        break;
      }

      default:
        break;
    }

    if (item.id) {
      if (items[item.id]) {
        console.warn(items);
        console.warn(items[item.id]);
        console.warn(item);
        console.warn(item.id);
        throw new Error('Item already exists');
      }

      items[item.id] = item;
    }
  });

  return { posts, pages, categories, images, tags };
}
