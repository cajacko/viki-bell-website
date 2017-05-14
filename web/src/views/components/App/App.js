import React from 'react';
import {
  QueryRenderer,
  graphql,
} from 'react-relay';
import environment from 'views/relayEnvironment';
import PostLoop from 'components/PostLoop/PostLoop';
import { getRowWidth } from 'constants/gridItems';

const App = () => {
  let count;
  const recommended = true;
  const inverse = true;

  if (recommended) {
    count = 12; // Number that's always more than 1 row
  } else {
    count = getRowWidth().postLoopItemsPerLoad;
  }

  return (
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

      variables={{ count }}

      render={({ error, props }) => {
        if (error) {
          return <div>{error.message}</div>;
        } else if (props) {
          document.getElementById('loading').remove();

          return (
            <PostLoop
              data={props}
              inverseColours={inverse}
              recommendedPosts={recommended}
            />
          );
        }

        return null; // Is loading
      }}
    />
  );
}

export default App;
