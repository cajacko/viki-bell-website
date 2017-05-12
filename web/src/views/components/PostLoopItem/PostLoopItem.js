import {
  graphql,
  createFragmentContainer,
} from 'react-relay';
import PostsLoopItem from 'components/PostLoopItem/PostLoopItem.view';

export default createFragmentContainer(PostsLoopItem, {
  post: graphql`
    fragment PostLoopItem_post on Post {
      id
      postId
      title
      excerpt
      date
      image
      category
    }
  `,
});
