import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import equal from 'deep-equal';
import { getItemProps, getProps, getPassedProps } from 'helpers/getProps';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = getProps(props);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(getProps(nextProps));
  }

  shouldComponentUpdate(nextProps) {
    const props = getProps(nextProps);

    if (!equal(this.state, props)) {
      return true;
    }

    return false;
  }

  render() {
    // Put all this in state and be smarter at processing
    // this, so don't do it during render
    const itemProps = getItemProps(this.props.items, this.props.itemId);
    const passedProps = getPassedProps(this.props);

    let Element;

    if (this.props.element) {
      Element = this.props.element;
    } else {
      // eslint-disable-next-line
      console.warn('Could not get an element for this item');
      return null;
    }

    return <Element {...itemProps} {...passedProps} />;
  }
}

Item.propTypes = {
  // eslint-disable-next-line
  element: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
  ]),
  // eslint-disable-next-line
  items: PropTypes.object.isRequired,
  itemId: PropTypes.string,
};

Item.defaultProps = {
  element: null,
  itemId: null,
};

function mapStateToProps({ items, assets }) {
  return { items, assets };
}

export default connect(mapStateToProps)(Item);
