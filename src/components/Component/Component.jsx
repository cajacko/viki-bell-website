import React from 'react';
import Banner from 'components/Banner/Banner.container';
import SiteNav from 'components/SiteNav/SiteNav';
import PostLoop from 'components/PostLoop/PostLoop.container';
import SideBar from 'components/SideBar/SideBar';
import ContentWrap from 'components/ContentWrap/ContentWrap';
import SinglePost from 'components/SinglePost/SinglePost.container';
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs';
import MainWrap from 'components/MainWrap/MainWrap';
import FourOhFour from 'components/FourOhFour/FourOhFour';
import TaxonomyTitle from 'components/TaxonomyTitle/TaxonomyTitle';
import Sitemap from 'components/Sitemap/Sitemap';
import CategoryLoop from 'components/CategoryLoop/CategoryLoop';
import Posts from 'components/Posts/Posts.container';
import Page from 'components/Page/Page.container';
import FullWidthMultiImageBanner from 'components/FullWidthMultiImageBanner/FullWidthMultiImageBanner.container';
import BannerType from 'components/BannerType/BannerType.container';
import NewPostLoop from 'components/NewPostLoop/NewPostLoop.container';

const componentMap = {
  banner: FullWidthMultiImageBanner,
  siteNav: SiteNav,
  postLoop: PostLoop,
  sideBar: SideBar,
  contentWrap: ContentWrap,
  singlePost: SinglePost,
  breadcrumbs: Breadcrumbs,
  mainWrap: MainWrap,
  fourOhFour: FourOhFour,
  taxonomyTitle: TaxonomyTitle,
  sitemap: Sitemap,
  categoryLoop: CategoryLoop,
  posts: Posts,
  page: Page,
  fullWidthBanner: Banner,
  bannerType: BannerType,
  newPostLoop: NewPostLoop,
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
