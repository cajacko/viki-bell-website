import { POSTS } from 'constants/databaseTables';
import connection from 'models/connection';
import buildPostsArray from 'models/buildPostsArray';

export default function () {
  return new Promise((resolve) => {
    const query = `
      SELECT *
      FROM ${POSTS}
      WHERE post_type = 'post'
      AND post_status = 'publish'
      ORDER BY post_date DESC
      LIMIT 0, 10
    `;

    connection().query(query, (error, results) => {
      if (error) {
        throw error;
      }

      buildPostsArray(results, [], 0, (buildPostsArrayError, posts) => {
        if (buildPostsArrayError) {
          throw buildPostsArrayError;
        }

        // console.log(posts);

        resolve(posts);
      });
    });
  });
}
