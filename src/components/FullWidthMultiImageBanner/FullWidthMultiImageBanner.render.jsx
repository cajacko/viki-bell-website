import React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/Icon/Icon';
import BannerImage from 'components/BannerImage/BannerImage.component';
import {
  Section,
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
  <Section leftImage={leftImage} rightImage={rightImage}>
    {leftImage && <BannerImage left image={leftImage} />}
    <Center>
      <Link to="/">
        <IconContainer>
          <Icon icon="logo" />
        </IconContainer>
        <SiteHeader>{title}</SiteHeader>
      </Link>
      <TagLine>{tagline}</TagLine>
    </Center>

    {rightImage && <BannerImage image={rightImage} />}
  </Section>
);

export default FullWidthMultiImageBanner;
