/* @flow */

import React from 'react';
import Posts from 'containers/PostLoop/PostLoop';

const App = () => (
  <div>
    <Posts />
    <Posts inverseColours recommendedPosts />
  </div>
);

export default App;
