import React from 'react';
import Radium from 'radium';
import moment from 'moment';
import getRouteFromSlug from 'helpers/routing/getRouteFromSlug';
import style from 'components/PostLoopItem/PostLoopItem.style';
import propTypes from 'components/PostLoopItem/PostLoopItem.propTypes';
import WindowResize from 'components/WindowResize/WindowResize';
import TextLink from 'components/TextLink/TextLink';
import Image from 'components/Image/Image';

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
    let containerStyles;

    if (this.props.inverseColours) {
      articleStyles = { ...style.article, ...style.articleInverse };
      containerStyles = { ...style.container, ...style.containerInverse };
    } else {
      articleStyles = { ...style.article, ...style.articleDefault };
      containerStyles = { ...style.container, ...style.containerDefault };
    }

    if (this.props.theme === 'invisible') {
      articleStyles.opacity = 0;
    }

    const date = moment.unix(this.props.date).format('MMMM D, YYYY');

    return (
      <WindowResize onWindowResize={this.onWindowResize}>
        <article style={articleStyles}>
          <div style={containerStyles}>
            <a href={this.state.postRoute} style={style.imageLink}>
              <Image
                style={style.image}
                originalHeight={this.props.image.originalHeight}
                originalWidth={this.props.image.originalWidth}
                src={this.props.image.src}
                alt={this.props.image.alt}
              />
            </a>

            <div style={style.textContainer}>
              <div>
                <p style={style.date}>{date}</p>

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

PostsLoopItem.propTypes = propTypes;
export default Radium(PostsLoopItem);
