import React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/Icon/Icon';
import BannerImage from 'components/BannerImage/BannerImage.component';
import Item from 'components/Item/Item';
import {
  Section,
  Center,
  SiteHeader,
  TagLine,
  IconContainer,
} from 'components/FullWidthMultiImageBanner/FullWidthMultiImageBanner.style';
import WindowResize from 'components/WindowResize/WindowResize.component';

const FullWidthMultiImageBannerRender = ({
  logoTitle,
  noItem,
  leftImage,
  rightImage,
  tagLine,
  onResize,
  setCenter,
}) => {
  if (noItem || (!logoTitle && !tagLine && !leftImage && !rightImage)) {
    return null;
  }

  return (
    <WindowResize onResize={onResize}>
      <Section leftImage={leftImage} rightImage={rightImage}>
        {leftImage && <Item element={BannerImage} left itemId={leftImage} />}
        <Center
          innerRef={setCenter}
          leftImage={!!leftImage}
          rightImage={!!rightImage}
          horizontalPadding={0}
        >
          {logoTitle && (
            <Link to="/">
              <IconContainer>
                <Icon icon="logo" />
              </IconContainer>
              <SiteHeader>{logoTitle}</SiteHeader>
            </Link>
          )}
          {tagLine && <TagLine>{tagLine}</TagLine>}
        </Center>

        {rightImage && <Item element={BannerImage} itemId={rightImage} />}
      </Section>
    </WindowResize>
  );
};

export default FullWidthMultiImageBannerRender;
