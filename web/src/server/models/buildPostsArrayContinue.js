import buildPostsArray from 'models/buildPostsArray';

export default function (
  iterator,
  results,
  tempPosts,
  callback,
) {
  const nextIterator = iterator + 1;

  if (results[nextIterator]) {
    buildPostsArray(results, tempPosts, nextIterator, callback);
  } else {
    callback(null, tempPosts);
  }
}
