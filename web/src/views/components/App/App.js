import React from 'react';
import {
  QueryRenderer,
  graphql,
} from 'react-relay';
import environment from 'views/relayEnvironment';
import PostLoop from 'components/PostLoop/PostLoop';
import { getRowWidth } from 'constants/gridItems';

const App = () => (
  <QueryRenderer
    environment={environment}

    query={graphql`
      query AppQuery(
        $count: Int!
        $after: String
      ) {
        ...PostLoop_data
      }
    `}

    variables={{
      count: getRowWidth().postLoopItemsPerLoad,
    }}

    render={({ error, props }) => {
      if (error) {
        return <div>{error.message}</div>;
      } else if (props) {
        return (
          <div>
            <PostLoop data={props} />
            <PostLoop data={props} inverseColours recommendedPosts />
          </div>
        );
      }

      return <div>Loading</div>;
    }}
  />
);

export default App;
