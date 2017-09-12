import React from 'react';
import Moment from 'moment';
import SharePost from 'components/SharePost/SharePost';
import Link from 'components/Link/Link';
import postUrlFromSlug from 'helpers/postUrlFromSlug';
import Item from 'components/Item/Item';
import FeaturedImageLink from 'components/FeaturedImageLink/FeaturedImageLink';
import Content from 'components/Content/Content';

const PostLoopItem = (props) => {
  const {
    share,
    title,
    wordpressRender,
    content,
    postDate,
    postSlug,
    updatedAt,
    featuredImage,
    noItem,
  } = props;

  if (noItem) {
    return null;
  }

  const date = new Moment(postDate);
  const url = postUrlFromSlug(postSlug);

  return (
    <article
      className="Post u-clearFix"
      itemProp="blogPost"
      itemScope=""
      itemType="http://schema.org/BlogPosting"
      itemRef="MicroData-person MicroData-organization"
    >
      <header>
        <time
          className="Post-date"
          dateTime={postDate}
          itemProp="datePublished"
        >
          {date.format('DD.MM')}
        </time>
        <Item element={FeaturedImageLink} itemId={featuredImage} url={url} />
        <Link className="Post-headerLink" to={url} itemProp="mainEntityOfPage">
          <h2 className="Post-title" itemProp="headline">
            {title}
          </h2>
        </Link>
      </header>

      {content ? (
        <div className="Post-content" itemProp="articleBody">
          <Content content={content} />
        </div>
      ) : (
        <div
          className="Post-content"
          itemProp="articleBody"
          dangerouslySetInnerHTML={{ __html: wordpressRender }}
        />
      )}

      <footer>
        <meta
          className="Post-dateModified"
          content={updatedAt}
          itemProp="dateModified"
        />
        <meta
          className="Post-description"
          itemProp="description"
          content={`${title} | via vikibell.com`}
        />
        {share && <SharePost />}
      </footer>
    </article>
  );
};

export default PostLoopItem;
