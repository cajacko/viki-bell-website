import React, { PureComponent } from 'react';

class NewPostLoopItemCategoryRender extends PureComponent {
  render() {
    if (this.props.noItem) return null;

    return <p>{this.props.title}</p>;
  }
}

export default NewPostLoopItemCategoryRender;
