import React, { PureComponent } from 'react';
import TitleRender from 'components/Title/Title.render';
import Item from 'components/Item/Item';

class Title extends PureComponent {
  render() {
    let title;

    switch (this.props.contentType) {
      case 'category':
        title = `Category: ${this.props.title}`;
        break;

      default:
        break;
    }

    return <TitleRender title={title} dateDisplay={null} dateString={null} />;
  }
}

export default ({ itemId }) => <Item element={Title} itemId={itemId} />;
