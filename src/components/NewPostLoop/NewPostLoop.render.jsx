import React, { PureComponent } from 'react';
import Item from 'components/Item/Item';
import NewPostLoopItem from 'components/NewPostLoopItem/NewPostLoopItem.component';
import {
  Section,
  PostLoopContainer,
  ButtonContainer,
} from 'components/NewPostLoop/NewPostLoop.style';
import Button from 'components/Button/Button.render';
import WindowResize from 'components/WindowResize/WindowResize.component';

const paddingTop = 40;

class NewPostLoopRender extends PureComponent {
  render() {
    const buttonText = this.props.loading ? 'Loading' : 'Show More Posts';
    const buttonDisabled = this.props.loading;

    return (
      <WindowResize onResize={this.props.onResize}>
        <Section>
          <PostLoopContainer marginTop={-paddingTop}>
            {this.props.posts.map((itemId, i) => {
              let noLeftBorder = false;

              const modulus = (i + 1) % this.props.postsPerRow;

              if (modulus === 1) {
                noLeftBorder = true;
              }

              return (
                <Item
                  key={itemId}
                  element={NewPostLoopItem}
                  itemId={itemId}
                  paddingTop={paddingTop}
                  postWidth={100 / this.props.postsPerRow}
                  noLeftBorder={noLeftBorder}
                />
              );
            })}
          </PostLoopContainer>
          <ButtonContainer verticalSpacing={paddingTop}>
            <Button onClick={this.props.onClick} disabled={buttonDisabled}>
              {buttonText}
            </Button>
          </ButtonContainer>
        </Section>
      </WindowResize>
    );
  }
}

export default NewPostLoopRender;
