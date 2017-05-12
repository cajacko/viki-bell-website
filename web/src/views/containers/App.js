import React, { Component } from 'react';

import {
  QueryRenderer,
  graphql,
} from 'react-relay';

import environment from '../relayEnvironment';
import PostLoop from './PostLoop';
// import Post from './Post';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>App</h2>
        <QueryRenderer
          environment={environment}

          query={graphql`
            query AppPostLoopQuery {
              ...PostLoop_posts
            }
          `}

          render={({ error, props }) => {
            if (error) {
              return <div>{error.message}</div>;
            } else if (props) {
              console.warn('App', props);

              return <PostLoop posts={props}/>;
            }
            return <div>Loading</div>;
          }}
        />
      </div>
    );
  }
}

export default App;
