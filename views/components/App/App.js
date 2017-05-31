import React from 'react';
import {
  QueryRenderer,
  graphql,
} from 'react-relay';
import environment from 'views/relayEnvironment';
import PostLoop from 'components/PostLoop/PostLoop';
import { getRowWidth } from 'constants/gridItems';

class Loading extends React.Component {
  componentDidMount() {
    window.initialRender = true;
    const now = Math.floor(Date.now());
    const loading = document.getElementById('loading');

    if (window.noLoading) {
      loading.remove();
    } else {
      const loadingTime = now - window.startTime;

      // Otherwise looks like flash of content
      const minimumLoadTime = 1000;
      let additionalLoadTime = minimumLoadTime - loadingTime;

      if (additionalLoadTime < 0) {
        additionalLoadTime = 0;
      }

      setTimeout(() => {
        loading.classList.remove('loading');

        loading.addEventListener('transitionend', () => {
          loading.remove();
        }, true);
      }, additionalLoadTime);
    }
  }

  render() {
    return <PostLoop {...this.props} />;
  }
}

const App = () => {
  let count;
  const recommended = false;
  const inverse = false;

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
          return (
            <Loading
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
};

export default App;
