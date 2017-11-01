import React from 'react';
import { Link } from 'react-router-dom';
import Image from 'components/Image/Image';
import Icon from 'components/Icon/Icon';
import {
  Section,
  LeftImage,
  RightImage,
  Center,
  SiteHeader,
  TagLine,
  IconContainer,
} from 'components/FullWidthMultiImageBanner/FullWidthMultiImageBanner.style';

const FullWidthMultiImageBanner = ({
  title,
  tagline,
  leftImage,
  rightImage,
  logo,
}) => (
  <Section>
    <LeftImage>
      <Image file={leftImage} />
    </LeftImage>
    <Center>
      <Link to="/">
        <IconContainer>
          <Icon icon="logo" />
        </IconContainer>
        <SiteHeader>{title}</SiteHeader>
      </Link>
      <TagLine>{tagline}</TagLine>
    </Center>

    <RightImage>
      <Image file={rightImage} />
    </RightImage>
  </Section>
);

export default FullWidthMultiImageBanner;
