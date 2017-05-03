import React from 'react';
import PropTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';
import getRouteFromSlug from 'helpers/routing/getRouteFromSlug';

class PostsItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { postRoute: '', categoryRoute: '' };
    this.getPostRoute = this.getPostRoute.bind(this);
    this.getCategoryRoute = this.getCategoryRoute.bind(this);
  }

  componentDidMount() {
    this.getPostRoute(this.props.postSlug);
    this.getCategoryRoute(this.props.categorySlug);
  }

  componentWillReceiveProps(nextProps) {
    this.getPostRoute(nextProps.postSlug);
    this.getCategoryRoute(nextProps.categorySlug);
  }

  getPostRoute(slug) {
    const postRoute = getRouteFromSlug(slug, 'post');
    this.setState({ postRoute });
  }

  getCategoryRoute(slug) {
    const categoryRoute = getRouteFromSlug(slug, 'category');
    this.setState({ categoryRoute });
  }

  render() {
    return (
      <article>
        <a href={this.state.postRoute}>
          <img alt={this.props.imageAlt} src={this.props.image} />
        </a>
        <div>
          <p>{this.props.date.format('YYYY-MM-DD')}</p>
          <a href={this.state.postRoute}>
            <h2>{this.props.title}</h2>
          </a>
          <a href={this.state.categoryRoute}>{this.props.category}</a>
        </div>
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
  postSlug: PropTypes.string.isRequired,
  categorySlug: PropTypes.string.isRequired,
};

export default PostsItem;
