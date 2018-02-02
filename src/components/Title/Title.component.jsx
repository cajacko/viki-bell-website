import React, { PureComponent } from 'react';
import moment from 'moment';
import TitleRender from 'components/Title/Title.render';
import Item from 'components/Item/Item';

class Title extends PureComponent {
  render() {
    let title;
    let dateString;
    let dateDisplay;

    switch (this.props.contentType) {
      case 'category':
        title = `Category: ${this.props.title}`;
        break;

      case 'post': {
        title = this.props.title;
        dateString = this.props.postDate;
        dateDisplay = 'March 24, 2017';
        dateDisplay = moment(dateString).format('MMMM Do, YYYY');
        break;
      }

      default:
        break;
    }

    return (
      <TitleRender
        title={title}
        dateDisplay={dateDisplay}
        dateString={dateString}
      />
    );
  }
}

export default ({ itemId }) => <Item element={Title} itemId={itemId} />;
