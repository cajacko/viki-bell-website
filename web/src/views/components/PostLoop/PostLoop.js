import {
  graphql,
  createPaginationContainer,
} from 'react-relay';
import PostLoop from 'components/PostLoop/PostLoop.view';

// eslint-disable-next-line
console.log('loaded');

export default createPaginationContainer(
  PostLoop,
  {
    data: graphql`
      fragment PostLoop_data on Query {
        posts(
          first: $count
          after: $after
        ) @connection(key: "PostLoop_posts") {
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          },
          edges {
            node {
              id,
              ...PostLoopItem_post,
            },
          },
        },
      }
    `,
  },
  {
    // direction: 'forward',
    // getConnectionFromProps: props => props.data.posts,
    getFragmentVariables(prevVars, totalCount) {
      // eslint-disable-next-line
      console.log('getFragmentVariables', prevVars, totalCount);

      return {
        ...prevVars,
        count: totalCount,
      };
    },
    getVariables(props, { count, cursor }, fragmentVariables) {
      // eslint-disable-next-line
      console.log('getVariables', props, count, cursor, fragmentVariables);

      return {
        count,
        after: cursor,
      };
    },
    query: graphql`
      query PostLoopQuery(
        $count: Int!
        $after: String
      ) {
        ...PostLoop_data
      }
    `,
  },
);
