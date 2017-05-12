import React from 'react';
import {
  QueryRenderer,
  graphql,
} from 'react-relay';
import environment from 'views/relayEnvironment';
import PostLoop from 'components/PostLoop/PostLoop';

const App = () => (
  <QueryRenderer
    environment={environment}

    query={graphql`
      query AppQuery {
        ...PostLoop_data
      }
    `}

    variables={{}}

    render={({ error, props }) => {
      if (error) {
        return <div>{error.message}</div>;
      } else if (props) {
        // eslint-disable-next-line
        console.warn('App', props);

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
