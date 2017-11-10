import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import postUrlFromSlug from 'helpers/postUrlFromSlug';
import NewPostLoopItemRender from 'components/NewPostLoopItem/NewPostLoopItem.render';

class NewPostLoopItem extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { displayCategory: this.getDisplayCategory(props) };
  }

  componentWillReceiveProps(props) {
    if (
      props.displayCategory !== this.props.displayCategory ||
      props.categories !== this.props.categories
    ) {
      this.setState({ displayCategory: this.getDisplayCategory(props) });
    }
  }

  getDisplayCategory(props) {
    if (props.displayCategory) return props.displayCategory;

    if (props.categories && props.categories.length > 0) {
      return props.categories[
        Math.floor(Math.random() * props.categories.length)
      ];
    }

    return null;
  }

  render() {
    if (this.props.noItem) return null;

    const date = new Moment(this.props.postDate);
    const url = postUrlFromSlug(this.props.postSlug);

    return (
      <NewPostLoopItemRender
        title={this.props.title}
        updatedAt={this.props.updatedAt}
        displayCategory={this.state.displayCategory}
        postDate={this.props.postDate}
        postDateDisplay={date.format('MMM D, YYYY')}
        featuredImage={this.props.featuredImage}
        noLeftBorder={this.props.noLeftBorder}
        postWidth={this.props.postWidth}
        paddingTop={this.props.paddingTop}
        url={url}
      />
    );
  }
}

NewPostLoopItem.propTypes = {
  title: PropTypes.string,
  updatedAt: PropTypes.string,
  displayCategory: PropTypes.string,
  postDate: PropTypes.string,
  featuredImage: PropTypes.string,
  noLeftBorder: PropTypes.bool.isRequired,
  postWidth: PropTypes.number.isRequired,
  paddingTop: PropTypes.number.isRequired,
  noItem: PropTypes.bool,
};

NewPostLoopItem.defaultProps = {
  title: null,
  updatedAt: null,
  displayCategory: null,
  postDate: null,
  featuredImage: null,
  noItem: false,
};

export default NewPostLoopItem;
