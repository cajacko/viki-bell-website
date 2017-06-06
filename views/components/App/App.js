import React from 'react';
import PostLoopContainer from 'containers/PostLoop/PostLoop';
import SiteNav from 'components/SiteNav/SiteNav';

class App extends React.Component {
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
    return (
      <div>
        <SiteNav />
        <PostLoopContainer query="/" />
      </div>
    );
  }
}

export default App;
