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

              return <PostLoop data={props} />;
            }
            return <div>Loading</div>;
          }}
        />
      </div>
    );
  }
}

export default App;
