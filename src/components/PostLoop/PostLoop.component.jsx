import React, { Component } from 'react';
import PostLoopItem from 'components/PostLoopItem/PostLoopItem';
import Item from 'components/Item/Item';
import Loading from 'components/Loading/Loading';

class PostLoop extends Component {
  constructor(props) {
    super(props);

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
        return;
      }
    }

    this.props.getPosts(taxonomyId, props.posts.length);
  }

  onScroll() {
    if (this.props.noMorePosts || this.props.loading || this.props.error) {
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
    return (
      <div className="PostLoop" itemScope="" itemType="http://schema.org/Blog">
        {this.props.posts &&
          this.props.posts.map(id => (
            <Item key={id} element={PostLoopItem} itemId={id} />
          ))}

        {this.props.error && <div>{this.props.error}</div>}
        {this.props.loading && <Loading />}
      </div>
    );
  }
}

export default PostLoop;
