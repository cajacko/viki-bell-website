import React from 'react';
import Banner from 'components/Banner/Banner';
import SiteNav from 'components/SiteNav/SiteNav';
import Bunting from 'components/Bunting/Bunting';
import PostLoop from 'components/PostLoop/PostLoop';
import SideBar from 'components/SideBar/SideBar';
import ContentWrap from 'components/ContentWrap/ContentWrap';
import SinglePost from 'components/SinglePost/SinglePost';
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs';
import MainWrap from 'components/MainWrap/MainWrap';
import FourOhFour from 'components/FourOhFour/FourOhFour';
import TaxonomyTitle from 'components/TaxonomyTitle/TaxonomyTitle';

const componentMap = {
  banner: Banner,
  siteNav: SiteNav,
  bunting: Bunting,
  postLoop: PostLoop,
  sideBar: SideBar,
  contentWrap: ContentWrap,
  singlePost: SinglePost,
  breadcrumbs: Breadcrumbs,
  mainWrap: MainWrap,
  fourOhFour: FourOhFour,
  taxonomyTitle: TaxonomyTitle,
};

const Component = (props) => {
  const Element = componentMap[props.component];

  if (!Element) {
    // eslint-disable-next-line
    console.warn('No Element', props.component);
    return null;
  }

  return <Element {...props} />;
};

export default Component;
