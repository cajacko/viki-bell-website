/* @flow */

import React from 'react';
import {
  QueryRenderer,
  graphql,
} from 'react-relay';
import environment from 'views/relayEnvironment';
import Posts from 'components/Posts/Posts';

const query = graphql`
  query AppPostsQuery {
    posts(first: 2) {
      edges {
        cursor
        node {
          id
          postId
          title
          excerpt
        }
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      posts: [
        {
          id: 1,
          title: 'Post Title 1',
          excerpt: 'Post excerpt of some kind',
        },
        {
          id: 2,
          title: 'Post Title 2',
          excerpt: 'I am an excerpt',
        },
      ],
    };
  }

  state: { posts: Array<Object> };

  render() {
    return (
      <div>
        <QueryRenderer
          environment={environment}
          query={query}
          render={({ error, props }) => {
            if (error) {
              return <div>{error.message}</div>;
            } else if (props) {
              // eslint-disable-next-line
              console.log(props);
              return <div>Yay done</div>;
            }
            return <div>Loading</div>;
          }}
        />
        <h1>I am App from View</h1>
        <Posts
          posts={this.state.posts}
        />
      </div>
    );
  }
}

export default App;
