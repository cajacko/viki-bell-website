import React from 'react';
import ImageLink from 'components/ImageLink/ImageLink';
import Button from 'components/Button/Button';
import Tweet from 'components/Tweet/Tweet';

const Twitter = () => (
  <section>
    <ImageLink />

    <div>
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
    </div>

    <Button>Go to Instagram</Button>
  </section>
);

export default Twitter;
