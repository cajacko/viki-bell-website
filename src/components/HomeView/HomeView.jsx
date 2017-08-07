import React from 'react';
import Banner from 'components/Banner/Banner';
import SiteNav from 'components/SiteNav/SiteNav';
import Bunting from 'components/Bunting/Bunting';
import PostLoop from 'components/PostLoop/PostLoop';

const HomeView = () => (
  <div itemScope="" itemType="http://schema.org/WebPage">
    <div
      id="MicroData-organization"
      itemProp="publisher"
      itemScope=""
      itemType="http://schema.org/Organization"
    >
      <meta itemProp="name" content="Viki Bell" />
      <meta itemProp="url" content="https://vikibell.com" />
      <link itemProp="sameAs" href="https://www.instagram.com/vikibell/" />
      <link itemProp="sameAs" href="https://twitter.com/Vikiibell/" />
      <link itemProp="sameAs" href="https://www.pinterest.com/vikiibell/" />
      <link itemProp="sameAs" href="https://www.linkedin.com/in/vikibell" />
      <div itemProp="logo" itemScope="" itemType="https://schema.org/ImageObject">
        <meta itemProp="url" content="http://vikibell.com/media/banner.jpg" />
        <meta itemProp="width" content="600" />
        <meta itemProp="height" content="60" />
      </div>
    </div>
    <Banner />
    <SiteNav />
    <Bunting />

    <div className="Content u-wrap">
      <div className="Content--wrap">
        <main className="Main">
          <PostLoop />
        </main>
      </div>
    </div>
  </div>
);

export default HomeView;
