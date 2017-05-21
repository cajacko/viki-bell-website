import { POST_META } from 'constants/databaseTables';
import connection from 'models/connection';

export default function (id, callback) {
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
