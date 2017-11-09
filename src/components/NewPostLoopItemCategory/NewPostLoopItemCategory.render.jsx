import React, { PureComponent } from 'react';
import { Category } from 'components/NewPostLoopItemCategory/NewPostLoopItemCategory.style';
import Link from 'components/Link/Link';

class NewPostLoopItemCategoryRender extends PureComponent {
  render() {
    if (this.props.noItem) return null;

    console.warn(this.props);

    return (
      <Link to={`/categories/${this.props.slug}`} theme="grey">
        <Category>{this.props.title}</Category>
      </Link>
    );
  }
}

export default NewPostLoopItemCategoryRender;
