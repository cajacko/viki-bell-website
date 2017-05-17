import React from 'react';
import PropTypes from 'prop-types';

function windowResized(stateHeight, stateWidth) {
  if (stateWidth !== window.innerWidth) {
    return true;
  }

  if (stateHeight !== window.innerHeight) {
    return true;
  }

  return false;
}

class WindowResize extends React.Component {
  constructor(props) {
    super(props);

    this.state = { height: window.innerHeight, width: window.innerWidth };
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);

    if (this.props.runOnMount) {
      this.props.onWindowResize(this.state.width, this.state.height);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions() {
    if (windowResized(this.state.height, this.state.width)) {
      this.props.onWindowResize(this.state.width, this.state.height);
    }

    this.setState({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  }

  render() {
    return this.props.children;
  }
}

WindowResize.propTypes = {
  children: PropTypes.element.isRequired,
  onWindowResize: PropTypes.func.isRequired,
  runOnMount: PropTypes.bool,
};

WindowResize.defaultProps = {
  runOnMount: true,
};

export default WindowResize;
