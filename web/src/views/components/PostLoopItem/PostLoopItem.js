import React from 'react';
import PropTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';
import Radium from 'radium';
import {
  graphql,
  createFragmentContainer,
} from 'react-relay';
import moment from 'moment';
import getRouteFromSlug from 'helpers/routing/getRouteFromSlug';
import style from 'components/PostLoopItem/PostLoopItem.style';
import WindowResize from 'components/WindowResize/WindowResize';
import TextLink from 'components/TextLink/TextLink';

class PostsLoopItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { postRoute: '', categoryRoute: '' };
    this.getPostRoute = this.getPostRoute.bind(this);
    this.getCategoryRoute = this.getCategoryRoute.bind(this);
  }

  componentDidMount() {
    this.getPostRoute(this.props.post.postSlug);
    this.getCategoryRoute(this.props.post.categorySlug);
  }

  componentWillReceiveProps(nextProps) {
    this.getPostRoute(nextProps.post.postSlug);
    this.getCategoryRoute(nextProps.post.categorySlug);
  }

  // eslint-disable-next-line
  onWindowResize(width) {
    // console.log('width changed', width);
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
    let articleStyles;

    if (this.props.post.inverseColours) {
      articleStyles = { ...style.article, ...style.articleInverse };
    } else {
      articleStyles = { ...style.article, ...style.articleDefault };
    }

    const date = moment.unix(this.props.post.date).format('MMMM D, YYYY');

    return (
      <WindowResize onWindowResize={this.onWindowResize}>
        <article style={articleStyles}>
          <div style={style.container}>
            <a href={this.state.postRoute} style={style.imageLink}>
              <img alt={this.props.post.imageAlt} src={this.props.post.image} />
            </a>

            <div style={style.textContainer}>
              <div>
                <p style={style.date}>{date}</p>

                <TextLink
                  style={style.titleLink}
                  href={this.state.postRoute}
                  colour="black"
                >
                  <h2 style={style.title}>{this.props.post.title}</h2>
                </TextLink>
              </div>

              <TextLink
                style={style.category}
                href={this.state.categoryRoute}
                colour="turqoise"
              >
                {this.props.post.category}
              </TextLink>
            </div>
          </div>
        </article>
      </WindowResize>
    );
  }
}

PostsLoopItem.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.number,
    image: PropTypes.string,
    category: PropTypes.string,
    imageAlt: PropTypes.string,
    postSlug: PropTypes.string,
    categorySlug: PropTypes.string,
    inverseColours: PropTypes.bool,
  }).isRequired,
};

export default createFragmentContainer(Radium(PostsLoopItem), {
  post: graphql`
    fragment PostLoopItem_post on Post {
      id
      postId
      title
      excerpt
      date
      image
      category
    }
  `,
});
