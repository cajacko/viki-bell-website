import Post from './Post';
import Posts from './Posts';

// The root provides the top-level API endpoints
const root = {
  post: ({ id }) => new Post(id || null),
  posts: () => Posts(),
};

export default root;
