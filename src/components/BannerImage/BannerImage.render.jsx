import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Image from 'components/Image/Image';
import { Container, ImageDiv } from 'components/BannerImage/BannerImage.style';
import WindowResize from 'components/WindowResize/WindowResize.component';

class BannerImageRender extends PureComponent {
  render() {
    return (
      <WindowResize onResize={this.props.setImagePosition}>
        <Container innerRef={this.props.setContainer}>
          <ImageDiv
            width={this.props.width}
            left={this.props.left}
            right={this.props.right}
          >
            <Image file={this.props.image} width={1000} />
          </ImageDiv>
        </Container>
      </WindowResize>
    );
  }
}

BannerImageRender.propTypes = {
  setImagePosition: PropTypes.func.isRequired,
  setContainer: PropTypes.func.isRequired,
  width: PropTypes.string.isRequired,
  left: PropTypes.string.isRequired,
  right: PropTypes.string.isRequired,
  image: PropTypes.shape({
    url: PropTypes.string,
    details: PropTypes.shape({
      image: PropTypes.shape({
        height: PropTypes.number,
        width: PropTypes.number,
      }),
    }),
  }).isRequired,
};

export default BannerImageRender;
