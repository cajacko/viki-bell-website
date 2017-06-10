import React from 'react';
import TextLink from 'components/TextLink/TextLink';
import IconButton from 'components/IconButton/IconButton';
import IconList from 'components/IconList/IconList';
import style from 'components/SiteNav/SiteNav.style';

const size = 20;

const SiteNav = () => {
  const textLinkStyle = {
    ...style.verticalSpacing,
    ...style.textLink,
  };

  return (
    <nav style={style.container}>
      <div style={style.wrapper}>
        <div style={style.leftContainer}>
          <IconButton
            icon="menu"
            colour="white"
            size={size}
            hoverColour="grey"
            style={style.verticalSpacing}
            button
          />

          <ul style={style.list}>
            <li style={style.listItem}><TextLink style={textLinkStyle} href="" colour="white">Posts</TextLink></li>
            <li style={style.listItem}><TextLink style={textLinkStyle} href="" colour="white">About</TextLink></li>
            <li style={style.listItem}><TextLink style={textLinkStyle} href="" colour="white">Life</TextLink></li>
            <li style={style.listItem}><TextLink style={textLinkStyle} href="" colour="white">Food</TextLink></li>
            <li style={style.listItem}><TextLink style={textLinkStyle} href="" colour="white">Travel</TextLink></li>
          </ul>
        </div>

        <div style={style.rightContainer}>
          <IconList size={size} listItemStyle={style.verticalSpacing} />

          <IconButton
            icon="more"
            colour="white"
            size={20}
            hoverColour="grey"
            style={style.verticalSpacing}
            button
          />
        </div>
      </div>
    </nav>
  );
}

export default SiteNav;
