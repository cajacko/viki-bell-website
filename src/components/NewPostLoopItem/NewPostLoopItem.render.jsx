import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Link from 'components/Link/Link';
import Item from 'components/Item/Item';
import NewPostLoopItemCategory from 'components/NewPostLoopItemCategory/NewPostLoopItemCategory.render';
import Image from 'components/Image/Image';
import {
  Article,
  ArticleContainer,
  ImageContainer,
  Content,
  Title,
  Time,
} from 'components/NewPostLoopItem/NewPostLoopItem.style';

class NewPostLoopItemRender extends PureComponent {
  render() {
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
          <Link to={this.props.url} itemProp="mainEntityOfPage">
            <ImageContainer>
              <Item
                element={Image}
                itemId={this.props.featuredImage}
                fillContainer
              />
            </ImageContainer>
          </Link>

          <Content>
            <Time dateTime={this.props.postDate} itemProp="datePublished">
              {this.props.postDateDisplay}
            </Time>
            <Link to={this.props.url} itemProp="mainEntityOfPage">
              <Title itemProp="headline">{this.props.title}</Title>
            </Link>

            {this.props.displayCategory && (
              <Item
                element={NewPostLoopItemCategory}
                itemId={this.props.displayCategory}
              />
            )}
          </Content>

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

NewPostLoopItemRender.propTypes = {
  title: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
  displayCategory: PropTypes.string,
  postDate: PropTypes.string.isRequired,
  featuredImage: PropTypes.string,
  noLeftBorder: PropTypes.bool.isRequired,
  postWidth: PropTypes.number.isRequired,
  paddingTop: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  postDateDisplay: PropTypes.string.isRequired,
};

NewPostLoopItemRender.defaultProps = {
  displayCategory: null,
  featuredImage: null,
};

export default NewPostLoopItemRender;
