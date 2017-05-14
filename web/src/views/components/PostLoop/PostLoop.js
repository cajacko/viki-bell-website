import {
  graphql,
  createPaginationContainer,
} from 'react-relay';
import PostLoop from 'components/PostLoop/PostLoop.view';

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
    getFragmentVariables(prevVars, totalCount) {
      return {
        ...prevVars,
        count: totalCount,
      };
    },
    getVariables(props, { count, cursor }) {
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
