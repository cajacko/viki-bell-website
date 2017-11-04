import { PureComponent } from 'react';
import PropTypes from 'prop-types';

class WindowResize extends PureComponent {
  constructor(props) {
    super(props);

    this.width = window.innerWidth;

    this.onResize = this.onResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize() {
    const newWidth = window.innerWidth;

    if (this.width !== newWidth) {
      this.props.onResize(newWidth);
    }

    this.width = newWidth;
  }

  render() {
    return this.props.children;
  }
}

WindowResize.propTypes = {
  onResize: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
};

export default WindowResize;
