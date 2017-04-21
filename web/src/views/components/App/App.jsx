/* @flow */

import React from 'react';
import Posts from 'components/Posts/Posts';

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
        <h1>I am App from View</h1>
        <Posts
          posts={this.state.posts}
        />
      </div>
    );
  }
}

export default App;
