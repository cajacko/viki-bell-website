import React from 'react';
import SharePost from 'components/SharePost/SharePost';

const PostLoopItem = ({ share }) => (
  <article className="Post u-clearFix" itemProp="blogPost" itemScope="" itemType="http://schema.org/BlogPosting" itemRef="MicroData-person MicroData-organization">
    <header>
      <time className="Post-date" dateTime="2017-08-06 16:45:54" itemProp="datePublished">06.08</time>
      <a className="Post-headerLink" href="/posts/my-july-highlights" itemProp="image" itemScope="" itemType="https://schema.org/ImageObject">
        <img
          className="Post-featuredImage"
          alt="Mango-Tree"
          src="https://admin.vikibell.com/wp-content/uploads/2017/08/Mango-Tree.jpg"
          width="2000"
          height="2000"
        />
        <meta className="Post-featuredImageUrl" itemProp="url" content="https://admin.vikibell.com/wp-content/uploads/2017/08/Mango-Tree.jpg" />
        <meta className="Post-featuredImageWidth" itemProp="width" content="2000" />
        <meta className="Post-featuredImageHeight" itemProp="height" content="2000" />
      </a>
      <a className="Post-headerLink" href="/posts/my-july-highlights" itemProp="mainEntityOfPage">
        <h2 className="Post-title" itemProp="headline">My July Highlights</h2>
      </a>
    </header>

    <div className="Post-content" itemProp="articleBody">Content</div>

    <footer>
      <meta className="Post-dateModified" content="2016-01-01 12:12:12" itemProp="dateModified" />
      <meta className="Post-description" itemProp="description" content="My July Highlights | via vikibell.com" />
      {share && <SharePost />}
    </footer>
  </article>
);

export default PostLoopItem;
