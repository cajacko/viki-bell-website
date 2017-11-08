import React, { PureComponent } from 'react';
import NewPostLoopRender from 'components/NewPostLoop/NewPostLoop.render';

class NewPostLoop extends PureComponent {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    return <NewPostLoopRender posts={this.props.posts} />;
  }
}

export default NewPostLoop;
