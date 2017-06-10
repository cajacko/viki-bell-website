import React from 'react';
import PropTypes from 'prop-types';
import SVG from 'components/SVG/SVG';
import style from 'components/IconButton/IconButton.style';

class IconButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = { hover: false };

    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
  }

  onMouseOver() {
    this.setState({ hover: true });
  }

  onMouseOut() {
    this.setState({ hover: false });
  }

  render() {
    let SVGColour;

    if (this.state.hover) {
      SVGColour = this.props.hoverColour;
    } else {
      SVGColour = this.props.colour;
    }

    let Element;

    if (this.props.button) {
      Element = 'button';
    } else {
      Element = 'a';
    }

    const buttonStyle = {
      ...style.button,
      ...this.props.style,
    };

    return (
      <Element
        style={buttonStyle}
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
      >
        <SVG
          size={this.props.size}
          colour={SVGColour}
          icon={this.props.icon}
        />
      </Element>
    );
  }
}

IconButton.propTypes = {
  size: PropTypes.oneOf([20]).isRequired,
  colour: PropTypes.oneOf(['white', 'grey']).isRequired,
  hoverColour: PropTypes.oneOf(['white', 'grey']).isRequired,
  icon: PropTypes.oneOf([
    'facebook',
    'twitter',
    'instagram',
    'youtube',
    'pinterest',
    'bloglovin',
    'close',
    'search',
    'menu',
    'chevron-right',
    'more',
  ]).isRequired,
  button: PropTypes.bool,
  // eslint-disable-next-line
  style: PropTypes.object,
};

IconButton.defaultProps = {
  button: false,
  style: {},
};

export default IconButton;
