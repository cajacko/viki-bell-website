import React, { PureComponent } from 'react';
import Moment from 'moment';
import Link from 'components/Link/Link';
import Item from 'components/Item/Item';
import NewPostLoopItemCategory from 'components/NewPostLoopItemCategory/NewPostLoopItemCategory.render';
import Image from 'components/Image/Image';
import {
  Article,
  ArticleContainer,
} from 'components/NewPostLoopItem/NewPostLoopItem.style';

class NewPostLoopItemRender extends PureComponent {
  render() {
    const date = new Moment(this.props.postDate);

    return (
      <Article
        paddingTop={this.props.paddingTop}
        itemProp="blogPost"
        itemScope=""
        itemType="http://schema.org/BlogPosting"
        itemRef="MicroData-person MicroData-organization"
        postWidth={this.props.postWidth}
      >
        <ArticleContainer noLeftBorder={this.props.noLeftBorder}>
          <Link to="/" itemProp="mainEntityOfPage">
            <Item element={Image} itemId={this.props.featuredImage} />
          </Link>

          <time dateTime={this.props.postDate} itemProp="datePublished">
            {date.format('MMM D, YYYY')}
          </time>
          <Link to="/" itemProp="mainEntityOfPage">
            <h2 itemProp="headline">{this.props.title}</h2>
          </Link>

          {this.props.displayCategory && (
            <Item
              element={NewPostLoopItemCategory}
              itemId={this.props.displayCategory}
            />
          )}

          <footer>
            <meta
              className="Post-dateModified"
              content={this.props.updatedAt}
              itemProp="dateModified"
            />
            <meta
              className="Post-description"
              itemProp="description"
              content={`${this.props.title} | via vikibell.com`}
            />
          </footer>
        </ArticleContainer>
      </Article>
    );
  }
}

export default NewPostLoopItemRender;
