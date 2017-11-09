import React, { PureComponent } from 'react';
import Item from 'components/Item/Item';
import NewPostLoopItem from 'components/NewPostLoopItem/NewPostLoopItem.render';
import {
  Section,
  PostLoopContainer,
  ButtonContainer,
} from 'components/NewPostLoop/NewPostLoop.style';
import Button from 'components/Button/Button.render';

const paddingTop = 40;

class NewPostLoopRender extends PureComponent {
  render() {
    const postsPerRow = 4;

    return (
      <Section>
        <PostLoopContainer marginTop={-paddingTop}>
          {this.props.posts.map((itemId, i) => {
            let noLeftBorder = false;

            const modulus = (i + 1) % postsPerRow;

            if (modulus === 1) {
              noLeftBorder = true;
            }

            return (
              <Item
                key={itemId}
                element={NewPostLoopItem}
                itemId={itemId}
                paddingTop={paddingTop}
                postWidth={100 / postsPerRow}
                noLeftBorder={noLeftBorder}
              />
            );
          })}
        </PostLoopContainer>
        <ButtonContainer verticalSpacing={paddingTop}>
          <Button>Show More Posts</Button>
        </ButtonContainer>
      </Section>
    );
  }
}

export default NewPostLoopRender;
