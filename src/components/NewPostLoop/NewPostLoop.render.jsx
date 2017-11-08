import React, { PureComponent } from 'react';
import Item from 'components/Item/Item';
import NewPostLoopItem from 'components/NewPostLoopItem/NewPostLoopItem.render';

class NewPostLoopRender extends PureComponent {
  render() {
    return (
      <div>
        <div>
          {this.props.posts.map(itemId => (
            <Item key={itemId} element={NewPostLoopItem} itemId={itemId} />
          ))}
        </div>
        <button>Show More Posts</button>
      </div>
    );
  }
}

export default NewPostLoopRender;
