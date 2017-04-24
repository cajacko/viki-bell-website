import React from 'react';
import Relay from 'react-relay';

class App extends React.Component {
  render() {
    if (!this.props.posts) {
        return false;
    }

    return (
      <div>
        <h1>Widget list</h1>
        <ul>
          {this.props.posts.edges.map(edge =>
            <li key={edge.node.id}>{edge.node.title} (ID: {edge.node.id})</li>
          )}
        </ul>
      </div>
    );
  }
}

export default Relay.createContainer(App, {
  fragments: {
    posts: () => Relay.QL`
      fragment on Query {
        posts(first: 10) {
          edges {
            node {
              id,
              title,
            },
          },
        },
      }
    `,
  },
});
