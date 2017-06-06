import React from 'react';
import ImageLink from 'components/ImageLink/ImageLink';
import TextLink from 'components/TextLink/TextLink';
import Text from 'components/Text/Text';

const Tweet = () => (
  <article>
    <ImageLink />
    <div>
      <header>
        <TextLink href="" colour="turqoise">Viki Bell</TextLink>
        <TextLink href="" colour="turqoise">@vikiiibell</TextLink>
        <Text content="- Mar 26" />
      </header>

      <div>
        <div>Tweet text of some sort </div>
        <TextLink href="" colour="turqoise">@username</TextLink>
        <div> some more text </div>
        <div>link</div>
        <div> la </div>
        <TextLink href="" colour="turqoise">#sometag</TextLink>
      </div>

      <ImageLink />
    </div>
  </article>
);

export default Tweet;
