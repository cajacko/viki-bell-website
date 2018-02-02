import React, { PureComponent } from 'react';
import Item from 'components/Item/Item';
import FeaturedImageLink from 'components/FeaturedImageLink/FeaturedImageLink';
import Content from 'components/Content/Content';
import Title from 'components/Title/Title.container';
import postUrlFromSlug from 'helpers/postUrlFromSlug';

class Single extends PureComponent {
  render() {
    const {
      wordpressRender,
      content,
      postSlug,
      featuredImage,
      noItem,
    } = this.props;

    if (noItem) {
      return null;
    }

    const url = postUrlFromSlug(postSlug);

    return (
      <div>
        <Title value={this.props.slug} type={this.props.type} />

        <article
          className="Post u-clearFix"
          itemProp="blogPost"
          itemScope=""
          itemType="http://schema.org/BlogPosting"
          itemRef="MicroData-person MicroData-organization"
        >
          <Item element={FeaturedImageLink} itemId={featuredImage} url={url} />

          {content ? (
            <Content
              content={content}
              containerProps={{ itemProp: 'articleBody' }}
              className="Post-content"
            />
          ) : (
            <div
              className="Post-content"
              itemProp="articleBody"
              dangerouslySetInnerHTML={{ __html: wordpressRender }}
            />
          )}
        </article>
      </div>
    );
  }
}

export default Single;
