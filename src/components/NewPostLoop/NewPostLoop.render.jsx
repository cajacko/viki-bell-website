import React, { PureComponent } from 'react';
import Item from 'components/Item/Item';
import NewPostLoopItem from 'components/NewPostLoopItem/NewPostLoopItem.component';
import {
  Section,
  PostLoopContainer,
  ButtonContainer,
  Error,
  Footer,
  FullWidthMessage,
} from 'components/NewPostLoop/NewPostLoop.style';
import Button from 'components/Button/Button.render';
import WindowResize from 'components/WindowResize/WindowResize.component';

const paddingTop = 40;

class NewPostLoopRender extends PureComponent {
  render() {
    let buttonText;
    let buttonDisabled = false;

    if (this.props.noMorePosts) {
      buttonText = 'No more posts';
      buttonDisabled = true;
    } else if (this.props.loading) {
      buttonText = 'Loading';
      buttonDisabled = true;
    } else {
      buttonText = 'Show More Posts';
    }

    let fullWidthMessage;

    if (this.props.posts.length === 0) {
      if (this.props.loading) {
        fullWidthMessage = 'Loading posts';
      } else if (this.props.error) {
        fullWidthMessage = 'Error loading posts, try refreshing the page';
      } else {
        fullWidthMessage = 'No posts found';
      }
    }

    return (
      <Section>
        {fullWidthMessage ? (
          <FullWidthMessage>{fullWidthMessage}</FullWidthMessage>
        ) : (
          <WindowResize onResize={this.props.onResize}>
            <div>
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
              <Footer verticalSpacing={paddingTop}>
                {this.props.error &&
                  !this.props.loading && (
                    <Error>Woops, could not get the posts, try again.</Error>
                  )}
                <ButtonContainer>
                  <Button
                    onClick={this.props.onClick}
                    disabled={buttonDisabled}
                  >
                    {buttonText}
                  </Button>
                </ButtonContainer>
              </Footer>
            </div>
          </WindowResize>
        )}
      </Section>
    );
  }
}

export default NewPostLoopRender;
