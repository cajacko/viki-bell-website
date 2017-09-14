import React, { Component } from 'react';
import PostLoopItem from 'components/PostLoopItem/PostLoopItem';
import Item from 'components/Item/Item';
import Loading from 'components/Loading/Loading';
import ContentError from 'components/ContentError/ContentError';
import FourOhFour from 'components/FourOhFour/FourOhFour';

class PostLoop extends Component {
  constructor(props) {
    super(props);

    this.state = { fourOhFour: false };

    this.getPosts = this.getPosts.bind(this);
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    if (this.props.init) {
      this.getPosts(this.props);
    }

    window.addEventListener('scroll', this.onScroll);
  }

  componentWillReceiveProps(props) {
    if (props.init) {
      this.getPosts(props);
    }

    if (props.noMorePosts) {
      window.removeEventListener('scroll', this.onScroll);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  getPosts(props) {
    let taxonomyId;

    if (props.taxonomy && props.value) {
      taxonomyId = props.categoriesBySlug[props.value];

      if (!taxonomyId) {
        this.setState({ fourOhFour: true });
        return;
      }
    }

    this.setState({ fourOhFour: false });
    this.props.getPosts(taxonomyId, props.posts.length);
  }

  onScroll() {
    if (
      this.props.noMorePosts ||
      this.props.loading ||
      this.props.error ||
      this.state.fourOhFour
    ) {
      return;
    }

    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const scrollBottom = scrollTop + windowHeight;
    const body = document.body;
    const html = document.documentElement;

    const documentHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight,
    );

    const bottomOffset = documentHeight - scrollBottom;

    if (bottomOffset < 5000) {
      this.getPosts(this.props);
    }
  }

  render() {
    if (this.state.fourOhFour) {
      return <FourOhFour />;
    }

    return (
      <div className="PostLoop" itemScope="" itemType="http://schema.org/Blog">
        {this.props.posts &&
          this.props.posts.map(id => (
            <Item key={id} element={PostLoopItem} itemId={id} />
          ))}

        {this.props.error && <ContentError error={this.props.error} />}
        {this.props.loading && <Loading />}
      </div>
    );
  }
}

export default PostLoop;
