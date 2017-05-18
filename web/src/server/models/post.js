import moment from 'moment';
import connection from 'models/connection';
import { POSTS, POST_META } from 'constants/databaseTables';

export class Post {}

function getPostMeta(id, callback) {
  const query = `
    SELECT *
    FROM ${POST_META}
    WHERE post_id = ${connection().escape(id)}
  `;

  connection().query(query, (error, results) => {
    if (error) {
      return callback(error);
    }

    const postMeta = {};

    results.forEach((result) => {
      if (Array.isArray(postMeta[result.meta_key])) {
        postMeta[result.meta_key].push(result.meta_value);
      } else if (postMeta[result.meta_key]) {
        postMeta[result.meta_key] = [postMeta[result.meta_key]];
        postMeta[result.meta_key].push(result.meta_value);
      } else {
        postMeta[result.meta_key] = result.meta_value;
      }
    });

    return callback(null, postMeta);
  });
}

export function getPost(id) {
  // let selectedPost;
  //
  // posts.forEach((post) => {
  //   if (post.id === id) {
  //     selectedPost = post;
  //   }
  // });
  //
  // return selectedPost;
}

function buildPostsArray(results, posts, iterator, callback) {
  const tempPosts = posts;
  const result = results[iterator];

  console.log(result);

  const post = new Post();
  post.title = result.post_title;
  post.id = result.ID;
  post.postId = result.ID;
  post.date = moment(result.post_date).unix();
  post.image = 'https://unsplash.it/400/300';
  post.category = 'Life';
  post.imageAlt = 'Image alt tag';
  post.postSlug = result.post_name;
  post.categorySlug = 'life';

  getPostMeta(post.id, (postMetaError, postMeta) => {
    if (postMetaError) {
      callback(postMetaError);
    }

    post.meta = postMeta;
    tempPosts.push(post);

    // if (post.meta._thumbnail_id) {
    //   getThumbnail(post.meta._thumbnail_id, (getThumbnailError, thumbnail) => {
    //
    //   });
    // } else {
    //
    // }

    const nextIterator = iterator + 1;

    if (results[nextIterator]) {
      buildPostsArray(results, tempPosts, nextIterator, callback);
    } else {
      callback(null, tempPosts);
    }
  });
}

export function getPosts() {
  return new Promise((resolve) => {
    const query = `
      SELECT *
      FROM ${POSTS}
      WHERE post_type = 'post'
      AND post_status = 'publish'
    `;

    connection().query(query, (error, results) => {
      if (error) {
        throw error;
      }

      buildPostsArray(results, [], 0, (buildPostsArrayError, posts) => {
        if (buildPostsArrayError) {
          throw buildPostsArrayError;
        }

        console.log(posts);

        resolve(posts);
      });
    });
  });
}
