/* eslint no-console: 0 */

import htmlToMarkdown from './htmlToMarkdown';

export default function (xml) {
  const items = {};

  xml.rss.channel[0].item.forEach((entry) => {
    const item = {};

    switch (entry['wp:post_type'][0]) {
      case 'post':
        item.contentType = 'project';
        item.id = entry['wp:post_id'][0];
        item.title = entry.title[0];
        item.slug = entry['wp:post_name'][0];
        item.displayDate = entry['wp:post_date'][0];
        item.content = htmlToMarkdown(entry['content:encoded'][0]);
        item.excerpt = htmlToMarkdown(entry['excerpt:encoded'][0]);
        item.status = entry['wp:status'][0];
        item.categories = [];
        item.tags = [];

        entry['wp:postmeta'].forEach((meta) => {
          if (meta['wp:meta_key'][0] === '_thumbnail_id') {
            item.thumbnailImage = meta['wp:meta_value'][0];
          }
        });

        entry.category.forEach((category) => {
          let type;

          if (category.$.domain === 'category') {
            type = 'categories';
          } else {
            type = 'tags';
          }

          item[type].push({
            title: category._,
            slug: category.$.nicename,
          });
        });

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

  return items;
}
