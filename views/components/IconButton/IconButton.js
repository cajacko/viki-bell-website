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
  size: PropTypes.number.isRequired,
  colour: PropTypes.string.isRequired,
  hoverColour: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  button: PropTypes.bool,
  // eslint-disable-next-line
  style: PropTypes.object,
};

IconButton.defaultProps = {
  button: false,
  style: {},
};

export default IconButton;
