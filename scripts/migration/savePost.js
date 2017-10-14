/* eslint no-console: 0 */

// import getNewThumbnailImage from './getNewThumbnailImage';
// import getNewTags from './getNewTags';
// import getNewCategories from './getNewCategories';
// import getPostContentWithNewImages from './getPostContentWithNewImages';

export default function (typeIds, { createEntry }, {
  featuredImage,
  tags,
  categories,
  title,
  slug,
  date,
  excerpt,
  content,
}) {
  const post = {
    fields: {
      title: { 'en-GB': title },
      slug: { 'en-GB': slug },
      excerpt: { 'en-GB': excerpt },
      date: { 'en-GB': date },
    },
  };

  console.log(typeIds);

  // getNewThumbnailImage(featuredImage)
  //   .then((thumbnailImage) => {
  //     post.fields.thumbnailImage = { 'en-GB': thumbnailImage };
  //     return getNewTags(tags);
  //   })
  //   .then((newTags) => {
  //     post.fields.tags = { 'en-GB': newTags };
  //     return getNewCategories(categories);
  //   })
  //   .then((newCategories) => {
  //     post.fields.categories = { 'en-GB': newCategories };
  //     return getPostContentWithNewImages(content);
  //   })
  //   .then((postContent) => {
  //     post.fields.content = { 'en-GB': postContent };
  //     console.log(post);
  //     // return createEntry(typeIds.project, post);
  //   })
  //   .then(entry => console.log(entry))
  //   .catch(console.error);
}
