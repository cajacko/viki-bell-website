/* @flow */

import React from 'react';
import PropTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';
import getRouteFromSlug from 'helpers/routing/getRouteFromSlug';

class PostsItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { route: '' };
    this.getPostRoute = this.getPostRoute.bind(this);
  }

  componentDidMount() {
    this.getPostRoute(this.props.slug);
  }

  componentWillReceiveProps(nextProps) {
    this.getPostRoute(nextProps.slug);
  }

  getPostRoute(slug) {
    const route = getRouteFromSlug(slug);
    this.setState({ route });
  }

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
