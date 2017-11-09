import React, { PureComponent } from 'react';
import { Category } from 'components/NewPostLoopItemCategory/NewPostLoopItemCategory.style';

class NewPostLoopItemCategoryRender extends PureComponent {
  render() {
    if (this.props.noItem) return null;

    return <Category>{this.props.title}</Category>;
  }
}

export default NewPostLoopItemCategoryRender;
