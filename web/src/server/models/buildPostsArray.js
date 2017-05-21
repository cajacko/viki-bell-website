import moment from 'moment';
import buildPostsArrayContinue from 'models/buildPostsArrayContinue';
import getPostMeta from 'models/getPostMeta';
import getThumbnail from 'models/getThumbnail';
import Post from 'models/post';

export default function (results, posts, iterator, callback) {
  const tempPosts = posts;
  const result = results[iterator];

  // console.log(result);

  const post = new Post();
  post.title = result.post_title;
  post.id = result.ID;
  post.postId = result.ID;
  post.date = moment(result.post_date).unix();
  post.image = {
    src: 'https://unsplash.it/400/300',
    alt: 'Image alt tag',
    id: result.ID,
    imageId: result.ID,
    originalWidth: 400,
    originalHeight: 300,
  };
  post.category = 'Life';
  post.postSlug = result.post_name;
  post.categorySlug = 'life';

  getPostMeta(post.id, (postMetaError, postMeta) => {
    if (postMetaError) {
      callback(postMetaError);
    }

    post.meta = postMeta;

    if (post.meta._thumbnail_id) {
      getThumbnail(post.meta._thumbnail_id, (getThumbnailError, thumbnail) => {
        if (thumbnail.file) {
          post.image = {
            src: `http://localhost:3005/content/uploads/${thumbnail.file}`,
            alt: thumbnail.alt,
            id: post.meta._thumbnail_id,
            imageId: post.meta._thumbnail_id,
            originalWidth: thumbnail.width,
            originalHeight: thumbnail.height,
          };
        }

        tempPosts.push(post);

        buildPostsArrayContinue(
          iterator,
          results,
          tempPosts,
          callback,
        );
      });
    } else {
      tempPosts.push(post);

      buildPostsArrayContinue(
        iterator,
        results,
        tempPosts,
        callback,
      );
    }
  });
}
