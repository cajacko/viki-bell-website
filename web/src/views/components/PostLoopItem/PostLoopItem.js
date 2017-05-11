import React from 'react';
import PropTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';
import Radium from 'radium';
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
    this.getPostRoute(this.props.postSlug);
    this.getCategoryRoute(this.props.categorySlug);
  }

  componentWillReceiveProps(nextProps) {
    this.getPostRoute(nextProps.postSlug);
    this.getCategoryRoute(nextProps.categorySlug);
  }

  // onWindowResize(width) {
  //   console.log('width changed', width);
  // }

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
      <WindowResize onWindowResize={this.onWindowResize}>
        <article style={style.article}>
          <div style={style.container}>
            <a href={this.state.postRoute} style={style.imageLink}>
              <img alt={this.props.imageAlt} src={this.props.image} />
            </a>

            <div style={style.textContainer}>
              <div>
                <p style={style.date}>{this.props.date.format('MMMM D, YYYY')}</p>

                <TextLink
                  style={style.titleLink}
                  href={this.state.postRoute}
                  colour="black"
                >
                  <h2 style={style.title}>{this.props.title}</h2>
                </TextLink>
              </div>

              <TextLink
                style={style.category}
                href={this.state.categoryRoute}
                colour="turqoise"
              >
                {this.props.category}
              </TextLink>
            </div>
          </div>
        </article>
      </WindowResize>
    );
  }
}

PostsLoopItem.propTypes = {
  title: PropTypes.string.isRequired,
  date: momentPropTypes.momentObj.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  postSlug: PropTypes.string.isRequired,
  categorySlug: PropTypes.string.isRequired,
};

export default Radium(PostsLoopItem);
