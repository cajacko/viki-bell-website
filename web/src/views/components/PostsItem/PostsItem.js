/* @flow */

import React from 'react';
import PropTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';
import getRouteFromSlug from 'helpers/routing/getRouteFromSlug';

class PostsItem extends React.Component {
  constructor(props: {
    title: String,
    date: {},
    image: String,
    category: String,
    imageAlt: String,
    slug: String,
  }) {
    super(props);

    this.state = { route: '' };
    this.getPostRoute = this.getPostRoute.bind(this);
  }

  state: { route: string };

  componentDidMount() {
    this.getPostRoute(this.props.slug);
  }

  componentWillReceiveProps(nextProps: {
    title: String,
    date: {},
    image: String,
    category: String,
    imageAlt: String,
    slug: String,
  }) {
    this.getPostRoute(nextProps.slug);
  }

  getPostRoute(slug: string) {
    const route = getRouteFromSlug(slug);
    this.setState({ route });
  }

  getPostRoute: () => void;

  render() {
    return (
      <article>
        <a href={this.state.route}>
          <img alt={this.props.imageAlt} src={this.props.image} />
        </a>
        <p>{this.props.date.format('YYYY-MM-DD')}</p>
        <a href={this.state.route}>
          <h2>{this.props.title}</h2>
        </a>
        <a href={this.state.route}>{this.props.category}</a>
      </article>
    );
  }
}

PostsItem.propTypes = {
  title: PropTypes.string.isRequired,
  date: momentPropTypes.momentObj.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default PostsItem;
